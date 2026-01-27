# Personal Portfolio

A modern, fully responsive personal portfolio built with React.js, featuring smooth animations, dark mode support, and a professional design.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-5.0.8-purple) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.6-06B6D4) ![Framer Motion](https://img.shields.io/badge/FramerMotion-10.16.16-black)

## ✨ Features

### 🎨 Design & UX
- **Fully Responsive**: Mobile, tablet, and desktop optimized
- **Dark/Light Mode**: Persistent theme toggle with system preference detection
- **Modern UI**: Clean, professional design with smooth interactions
- **Smooth Animations**: Fade-in, slide-in, and scroll reveal effects using Framer Motion
- **Hover Effects**: Interactive elements with delightful micro-interactions

### 📱 Sections
1. **Hero/Landing Page**: Eye-catching hero section with name, tagline, and CTA buttons
2. **About**: Bio, core skills, and profile image with scroll animations
3. **Projects**: Grid layout of 6 featured projects with:
   - Project images (lazy loaded)
   - Descriptions and technologies used
   - Links to GitHub repositories and live demos
   - Hover animations and image zoom effects
4. **Skills**: Categorized skills (Frontend, Backend, Tools) with animated progress bars
5. **Contact**: Contact form with validation and social media links
6. **Footer**: Navigation links and social profiles

### 🚀 Performance
- **Lazy Loading**: Images load on scroll for better performance
- **Code Splitting**: Optimized bundle size with Vite
- **Smooth Scrolling**: Native browser scroll behavior
- **SEO Optimized**: Meta tags and semantic HTML

### 🎯 Interactivity
- **Smooth Navigation**: Click-based smooth scrolling between sections
- **Mobile Menu**: Hamburger menu with smooth animations
- **Form Validation**: Real-time form validation with error messages
- **Scroll Animations**: Elements animate as they come into view
- **Scroll to Top**: Fixed button to quickly return to the top

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Styling**: Tailwind CSS 3.3.6 + PostCSS + Autoprefixer
- **Animation**: Framer Motion 10.16.16
- **Icons**: Lucide React 0.292.0
- **Language**: TypeScript 5.3.3
- **Dev Server**: Vite dev server with hot module replacement

## 📦 Installation

### Prerequisites
- Node.js (v18.19.0 or higher)
- npm or yarn

### Setup Instructions

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will automatically open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## 🎨 Customization

### Update Personal Information

#### In `src/components/Hero.tsx`:
- Replace "Hello, I'm Your Name" with your name
- Update the tagline
- Modify CTA button text and actions

#### In `src/components/About.tsx`:
- Update bio and skills
- Replace profile image URL with your image
- Modify the core skills list

#### In `src/components/Projects.tsx`:
- Add your actual projects
- Update project images, descriptions, and links
- Modify technologies used

#### In `src/components/Skills.tsx`:
- Update skill names and proficiency levels
- Modify skill categories
- Update stats (projects completed, years of experience, etc.)

#### In `src/components/Contact.tsx`:
- Replace email address
- Update social media links
- Modify contact methods

#### In `src/components/Footer.tsx`:
- Update footer text and year
- Modify social media links
- Update footer description

### Colors & Theme

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',      // Change primary color
      secondary: '#1E293B',     // Change secondary color
      accent: '#F97316',        // Change accent color
    },
  },
}
```

### Animations

Adjust animation timings and effects in individual component files or update global animation keyframes in `tailwind.config.js`.

## 📄 Project Structure

```
src/
├── components/
│   ├── About.tsx          # About section with skills
│   ├── Contact.tsx        # Contact form and links
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero/landing section
│   ├── LazyImage.tsx      # Lazy image loading component
│   ├── Navbar.tsx         # Navigation bar with mobile menu
│   ├── Projects.tsx       # Projects grid section
│   ├── ScrollReveal.tsx   # Scroll animation component
│   └── Skills.tsx         # Skills section with progress bars
├── context/
│   └── ThemeContext.tsx   # Dark/light mode context
├── App.tsx                # Main app component
├── main.tsx               # Entry point
└── index.css              # Global styles

public/
└── vite.svg               # Vite logo

Configuration files:
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel automatically detects it's a Vite project
5. Deploy!

### Deploy to Netlify

1. Build the project: `npm run build`
2. Go to [Netlify](https://netlify.com)
3. Drag and drop the `dist` folder
4. Or connect your GitHub repository

### Deploy to Other Platforms

The `dist` folder generated by `npm run build` is production-ready and can be deployed to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Google Cloud Storage
- Firebase Hosting
- etc.

## 🔍 SEO Optimization

The portfolio includes several SEO features:

- Meta tags for description, keywords, and author
- Open Graph tags for social sharing
- Twitter Card tags
- Semantic HTML structure
- Mobile-friendly responsive design
- Sitemap ready (can be added)
- Robots.txt ready (can be added)

To further optimize:
1. Update meta tags in `index.html`
2. Add a sitemap.xml file
3. Add a robots.txt file
4. Configure analytics

## ⚡ Performance Tips

1. **Image Optimization**: Replace placeholder images with optimized versions
2. **Lazy Loading**: Enabled by default for project images
3. **Code Splitting**: Vite automatically code-splits components
4. **Caching**: Configure server caching headers for production
5. **CDN**: Use a CDN for static assets

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. Some ideas:

- Add a blog section
- Integrate with a CMS
- Add a testimonials section
- Implement a newsletter signup
- Add a case studies section
- Integrate with analytics

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://www.framer.com/motion)
- Icons from [Lucide React](https://lucide.dev)
- Built with [Vite](https://vitejs.dev)

## 📧 Support

If you have any questions or need help:
1. Check the documentation above
2. Review the code comments
3. Open an issue in the repository
4. Reach out via the contact form

---

**Made with ❤️ using React, Framer Motion, and Tailwind CSS**
