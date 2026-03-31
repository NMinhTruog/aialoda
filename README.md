# Aloda Web

Frontend React + Vite cho website Aloda.

## Yeu cau

- Node.js 18+
- npm

## Cai dat

```powershell
cd "D:\New folder\apps\web"
npm install
```

## Chay local

```powershell
cd "D:\New folder\apps\web"
npm.cmd run dev
```

Mac dinh app chay o cong `3000`. Neu cong da duoc su dung, Vite se tu dong chuyen sang cong khac.

## Build

```powershell
cd "D:\New folder\apps\web"
node .\node_modules\vite\bin\vite.js build --outDir ..\..\dist\apps\web
```

## Public Preview Tam Thoi

Project da duoc chuan bi script de mo link public tam thoi qua Cloudflare Tunnel.

Bat public preview:

```powershell
cd "D:\New folder\apps\web"
powershell -ExecutionPolicy Bypass -File .\start-public-preview.ps1
```

Tat public preview:

```powershell
cd "D:\New folder\apps\web"
powershell -ExecutionPolicy Bypass -File .\stop-public-preview.ps1
```

Luu y:

- Link `trycloudflare.com` chi phu hop de demo tam thoi.
- May tinh can tiep tuc bat de link con hoat dong.
- `vite.config.js` da cho phep host `*.trycloudflare.com` de tranh loi `Blocked request`.

## Cau truc chinh

- `src/components`: cac component giao dien
- `src/pages`: cac trang chinh
- `src/seo`: metadata va JSON-LD schema
- `start-public-preview.ps1`: bat local dev + public preview
- `stop-public-preview.ps1`: tat public preview

## GitHub

Remote hien tai:

`https://github.com/NMinhTruog/aialoda`
