# Portfolio — Setup from ZIP

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later (npm comes with it)
- [Git](https://git-scm.com/)

## Steps

```bash
# 1. Unzip the folder and cd into it
cd portfolio

# 2. Install dependencies (recreates node_modules and .next)
npm install

# 3. Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Push to GitHub

```bash
git init
git add .
git commit -m "feat: portfolio site with Next.js, Three.js particles, and project pages"
git branch -M main
git remote add origin https://github.com/prakhar00007/portfolio.git
git push -u origin main
```

## Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Import Project" and select the `portfolio` repo
3. Click Deploy — live URL ready in ~1 minute

## Production Build (optional)

```bash
npm run build
npm start
```
