$ErrorActionPreference = 'SilentlyContinue'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$stateDir = Join-Path $root '.public-preview'
$devPidFile = Join-Path $stateDir 'vite.pid'
$tunnelPidFile = Join-Path $stateDir 'cloudflared.pid'

foreach ($pidFile in @($tunnelPidFile, $devPidFile)) {
  if (Test-Path $pidFile) {
    $pid = Get-Content -Path $pidFile | Select-Object -First 1
    if ($pid) {
      Stop-Process -Id $pid -Force
    }
    Remove-Item -LiteralPath $pidFile -Force
  }
}

Write-Output 'Stopped public preview processes.'
