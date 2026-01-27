# Deployment Guide

## 🚀 Ready to Deploy Your Portfolio

Your portfolio is production-ready! Follow one of these guides to share it with the world.

---

## Option 1: Vercel (Recommended) ⭐

Vercel is the creators of Vite and is perfect for deploying React apps.

### Steps:

1. **Initialize Git** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personal portfolio"
   ```

2. **Push to GitHub**
   - Create a repository on GitHub
   - Push your code:
   ```bash
   git remote add origin https://github.com/yourusername/personal-portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite, no configuration needed!
   - Click "Deploy"

4. **Done!** Your portfolio is live at `https://your-portfolio.vercel.app`

---

## Option 2: Netlify

Another excellent option with great free tier.

### Steps:

1. **Build Locally**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with production files.

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder, OR
   - Connect your GitHub repository for auto-deployment

3. **Custom Domain**
   - Go to Site settings
   - Add your custom domain
   - Follow DNS configuration

---

## Option 3: GitHub Pages

Free hosting directly from GitHub.

### Steps:

1. **Update vite.config.ts** for GitHub Pages:
   ```typescript
   export default defineConfig({
     base: '/personal-portfolio/', // Replace with your repo name
     // ... rest of config
   })
   ```

2. **Update package.json**:
   ```json
   "scripts": {
     "build": "tsc && vite build && echo '/* /index.html 200' > dist/_redirects",
     // ... rest of scripts
   }
   ```

3. **Build and Deploy**
   ```bash
   npm run build
   git add dist -f
   git commit -m "Add production build"
   git push origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/dist" folder
   - Save

---

## Option 4: Docker + Any Hosting

For advanced deployment scenarios.

### Create Dockerfile:
```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Create nginx.conf:
```nginx
server {
    listen 80;
    server_name _;

    location / {
        root /usr/share/nginx/html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Deploy:
```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

---

## Pre-Deployment Checklist

Before deploying, make sure:

- [ ] Update all your personal information
- [ ] Replace placeholder images with real ones
- [ ] Update project links (GitHub, live demos)
- [ ] Test dark mode works correctly
- [ ] Test mobile responsiveness
- [ ] Check all links work (both internal and external)
- [ ] Verify contact form works (if integrated)
- [ ] Test form validation
- [ ] Check performance with Lighthouse
- [ ] Update meta tags in `index.html`
- [ ] Remove any console.log statements (optional)
- [ ] Build locally: `npm run build`
- [ ] Preview build: `npm run preview`

---

## Performance Optimization

Before deploying, consider:

1. **Image Optimization**
   ```bash
   # Use online tools or imagemin
   npm install -g imagemin-cli
   ```

2. **Remove Unused CSS**
   - Tailwind already does this!

3. **Minify Code**
   - Vite handles this automatically

4. **Enable Caching**
   - Configure your hosting provider

5. **Add Analytics**
   - Google Analytics
   - Vercel Analytics (included with Vercel)

---

## Setting Up Custom Domain

### For Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration
4. It's free!

### For Netlify:
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records
4. Free with free tier!

---

## Environment Variables (If Needed)

Create `.env.local` for sensitive data:

```env
VITE_API_URL=https://api.example.com
VITE_EMAIL_SERVICE_ID=your_service_id
```

Build automatically includes `VITE_*` variables.

---

## Troubleshooting Deployment

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
# Check what's using port 3000
lsof -i :3000
# Or use different port
npm run dev -- --port 3001
```

### White Screen on Live Site
- Check browser console for errors
- Verify `base` in `vite.config.ts`
- Check if routes need configuration
- Test locally first: `npm run preview`

### Images Not Loading
- Use absolute paths or CDN
- Check image URLs in components
- Verify images exist in public folder

---

## Post-Deployment

### Monitor Your Site
- Check Google Search Console
- Set up analytics
- Monitor performance
- Monitor error rates

### Keep It Updated
- Update dependencies regularly
- Fix security vulnerabilities
- Update content as needed
- Test after updates

### SEO Tips
- Add meta descriptions
- Submit sitemap.xml
- Add robots.txt
- Monitor search performance

---

## Useful Resources

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://pages.github.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Web Vitals](https://web.dev/vitals/)

---

## Quick Deployment Commands

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel (if installed)
vercel deploy --prod

# Deploy to Netlify (if installed)
netlify deploy --prod --dir=dist
```

---

## 🎉 You're Ready!

Your portfolio is production-ready. Choose your deployment platform and share your amazing work with the world!

Need help? Refer to the platform-specific documentation linked above.

**Good luck! 🚀**
