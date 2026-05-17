# Deployment Guide - Bilal Arshad Portfolio

## Quick Start (3 Steps)

### Step 1: Install Dependencies
```bash
cd bilal-portfolio-react
npm install
```

### Step 2: Add Your Photo
Replace `public/images/bilal.jpg` with your own professional photo.

### Step 3: Run & Build
```bash
# Development server
npm run dev

# Production build
npm run build
```

---

## Deployment Options

### Option 1: Netlify (Recommended)
1. Create account at [netlify.com](https://netlify.com)
2. Drag & drop the `dist` folder after running `npm run build`
3. Or connect your GitHub repo for auto-deploy

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Option 3: GitHub Pages
1. Update `vite.config.ts` with base URL:
```ts
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest
})
```
2. Install gh-pages: `npm i -D gh-pages`
3. Add to package.json scripts:
```json
"deploy": "gh-pages -d dist"
```
4. Run: `npm run build && npm run deploy`

---

## Customization Checklist

- [ ] Update `public/images/bilal.jpg` with your photo
- [ ] Update email in `src/pages/Contact.tsx`
- [ ] Update GitHub link in `src/pages/Home.tsx` and `Contact.tsx`
- [ ] Update LinkedIn link in `src/pages/Home.tsx` and `Contact.tsx`
- [ ] Update project links in `src/pages/Projects.tsx`
- [ ] Update meta tags in `index.html`
- [ ] Update favicon (replace `public/vite.svg`)

---

## SEO Optimization Tips

1. Update `<title>` and `<meta name="description">` in `index.html`
2. Add Open Graph tags for social sharing
3. Create a `robots.txt` file in `public/`
4. Submit sitemap to Google Search Console
