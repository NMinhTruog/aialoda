$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$stateDir = Join-Path $root '.public-preview'
$runId = Get-Date -Format 'yyyyMMdd-HHmmss'
$devLog = Join-Path $stateDir "vite-$runId.log"
$devErrLog = Join-Path $stateDir "vite-$runId.err.log"
$tunnelLog = Join-Path $stateDir "cloudflared-$runId.log"
$tunnelErrLog = Join-Path $stateDir "cloudflared-$runId.err.log"
$devPidFile = Join-Path $stateDir 'vite.pid'
$tunnelPidFile = Join-Path $stateDir 'cloudflared.pid'
$cloudflaredPath = Join-Path $root 'tools\\cloudflared\\cloudflared.exe'
$localUrl = $null

New-Item -ItemType Directory -Force -Path $stateDir | Out-Null

if (-not (Test-Path $cloudflaredPath)) {
  throw "Missing cloudflared at $cloudflaredPath"
}

foreach ($file in @($devPidFile, $tunnelPidFile)) {
  if (Test-Path $file) {
    Remove-Item -LiteralPath $file -Force
  }
}

$viteProcess = Start-Process -FilePath 'npm.cmd' -ArgumentList 'run', 'dev' -WorkingDirectory $root -RedirectStandardOutput $devLog -RedirectStandardError $devErrLog -PassThru -WindowStyle Hidden
$viteProcess.Id | Set-Content -Path $devPidFile

for ($i = 0; $i -lt 60; $i++) {
  Start-Sleep -Seconds 1
  if (Test-Path $devLog) {
    $match = Select-String -Path $devLog -Pattern 'http://localhost:(\d+)' | Select-Object -First 1
    if ($match) {
      $localUrl = $match.Matches[0].Value
      break
    }
  }
}

if (-not $localUrl) {
  throw "Vite dev server did not report a localhost URL. Check $devLog"
}

try {
  $response = Invoke-WebRequest -Uri $localUrl -UseBasicParsing -TimeoutSec 5
  if ($response.StatusCode -lt 200) {
    throw "Unexpected status code $($response.StatusCode)"
  }
} catch {
  throw "Vite dev server is not responding at $localUrl"
}

$tunnelProcess = Start-Process -FilePath $cloudflaredPath -ArgumentList 'tunnel', '--url', $localUrl, '--no-autoupdate' -WorkingDirectory $root -RedirectStandardOutput $tunnelLog -RedirectStandardError $tunnelErrLog -PassThru -WindowStyle Hidden
$tunnelProcess.Id | Set-Content -Path $tunnelPidFile

$publicUrl = $null
for ($i = 0; $i -lt 60; $i++) {
  Start-Sleep -Seconds 1
  if (Test-Path $tunnelLog) {
    $match = Select-String -Path $tunnelLog -Pattern 'https://[-a-z0-9]+\.trycloudflare\.com' | Select-Object -First 1
    if ($match) {
      $publicUrl = $match.Matches[0].Value
      break
    }
  }
}

if (-not $publicUrl) {
  throw "Cloudflare Tunnel did not return a public URL. Check $tunnelLog"
}

Write-Output "Public URL: $publicUrl"
Write-Output "Local URL: $localUrl"
Write-Output "Stop later with: powershell -ExecutionPolicy Bypass -File .\\stop-public-preview.ps1"
