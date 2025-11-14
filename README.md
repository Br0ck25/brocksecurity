# Brock Security - Security Camera Installation Website

Professional security camera installation serving Eastern Kentucky including Pikeville, Hazard, Prestonsburg, Paintsville, Whitesburg, Harlan, London, Somerset, Corbin, and surrounding areas.

## 🔒 About

Brock Security is a locally owned and operated security camera installation company based in Eastern Kentucky. We provide professional surveillance solutions for both residential and commercial properties.

**Contact Information:**
- **Phone:** (606) 275-5449
- **Email:** support@brocksecurity.net
- **Website:** https://brocksecurity.net

## 🚀 Project Structure

```
brocksecurity/
├── index.html              # Main homepage
├── privacy-policy.html     # Privacy policy page
├── style.css              # Global stylesheet
├── script.js              # Client-side JavaScript
├── robots.txt             # Search engine crawler instructions
├── sitemap.xml            # XML sitemap for SEO
├── 404.html               # Custom error page
├── images/                # Image assets
│   ├── hero-bg.jpg        # Hero section background
│   ├── about-security.jpg # About section image
│   ├── logo.png          # Company logo (needs to be added)
│   └── favicon.png       # Site favicon (needs to be added)
├── pricing/               # Pricing page section
│   └── index.html
└── starlink/              # Starlink services section
    └── index.html
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with microdata for SEO
- **CSS3** - Modern styling with CSS custom properties and responsive design
- **Vanilla JavaScript** (ES6+) - No frameworks, pure JS for interactivity
- **Google Apps Script** - Backend integration for form submissions

## ✨ Features

### Current Features
- 📱 Fully responsive design (mobile-first approach)
- 🎨 Modern UI with smooth animations
- 🔍 SEO optimized with JSON-LD structured data
- 📞 Auto-formatting phone number input
- 📧 Contact form with Google Sheets integration
- ♿ Accessibility improvements (ARIA labels, skip navigation)
- 🖨️ Print-friendly stylesheet
- 📊 Intersection Observer for scroll animations
- 🎯 Active navigation highlighting based on scroll position

### SEO Features
- Open Graph tags for social media sharing
- Twitter Card metadata
- Geographic targeting for local search
- Schema.org LocalBusiness structured data
- XML sitemap
- Robots.txt configuration
- Canonical URLs

## 📋 Missing Assets

The following assets are referenced in the HTML but need to be created:

1. **images/logo.png** - Company logo (recommended: 200x50px PNG with transparent background)
2. **images/favicon.png** - Site favicon (recommended: 32x32px, 64x64px, 128x128px)

## 🚀 Deployment

This is a static website that can be deployed to any web hosting service:

### Recommended Hosting Options
- **Netlify** (Free tier, automatic HTTPS, CDN)
- **Vercel** (Free tier, excellent performance)
- **GitHub Pages** (Free for public repositories)
- **AWS S3 + CloudFront** (Scalable, CDN)
- **Traditional Web Hosting** (cPanel, shared hosting)

### Deployment Steps

#### Option 1: Netlify (Recommended)
1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Sign up for [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Deploy (no build command needed for static site)

#### Option 2: GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select branch (main) and folder (root)
4. Save and wait for deployment

#### Option 3: Traditional Hosting
1. Upload all files via FTP/SFTP
2. Ensure index.html is in the root directory
3. Set appropriate file permissions (644 for files, 755 for directories)

## 🔧 Development Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code recommended)
- Optional: Node.js for development tools

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Br0ck25/brocksecurity.git
   cd brocksecurity
   ```

2. **Open in browser:**
   Simply open `index.html` in your web browser, or use a local server:

   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **Using Node.js:**
   ```bash
   npx http-server
   ```

   **Using PHP:**
   ```bash
   php -S localhost:8000
   ```

3. **Visit:** http://localhost:8000

### Installing Development Dependencies (Optional)

```bash
npm install
```

This installs:
- **Prettier** - Code formatting
- **ESLint** - JavaScript linting
- **Stylelint** - CSS linting

## 📝 Customization Guide

### Updating Contact Information

1. **Phone Number:**
   - Update in `index.html` (multiple locations)
   - Update in JSON-LD structured data
   - Update in footer

2. **Email Address:**
   - Update in `index.html`
   - Update in JSON-LD structured data
   - Update in footer

3. **Service Areas:**
   - Update `areaServed` array in JSON-LD structured data
   - Update text content throughout site

### Updating Colors

Colors are defined as CSS custom properties in `style.css`:

```css
:root {
  --primary-color: #1975B0;      /* Main brand color */
  --primary-dark: #144070;        /* Darker shade */
  --primary-light: #2196F3;       /* Lighter shade */
  --secondary-color: #FF6B35;     /* Accent color */
}
```

### Updating Google Apps Script URL

To connect your own Google Sheets for form submissions:

1. Create a Google Apps Script (see documentation)
2. Update the `scriptURL` in `script.js` (line 90)

## 🔒 Security Considerations

- ✅ Form validation (client-side)
- ✅ HTTPS enforcement (add to web server config)
- ✅ Content Security Policy headers (add to web server config)
- ⚠️ Server-side validation recommended for form submissions
- ⚠️ Rate limiting recommended for contact form

## ♿ Accessibility

This website follows WCAG 2.1 Level AA guidelines:

- ✅ Semantic HTML5 elements
- ✅ ARIA landmarks and labels
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Sufficient color contrast
- ✅ Alt text for images
- ✅ Skip navigation link
- ✅ Proper form labels

## 📈 Performance Optimization

Current optimizations:
- ✅ CSS and JavaScript minification ready
- ✅ Image lazy loading implemented
- ✅ Intersection Observer for scroll animations
- ✅ Mobile-first responsive design
- ⚠️ Consider image optimization (WebP format)
- ⚠️ Consider implementing service worker for offline support

## 🧪 Browser Support

- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Analytics

To add Google Analytics:

1. Create a Google Analytics property
2. Add tracking code to `<head>` section of HTML files
3. Configure goals and conversions

Example:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Known Issues

1. **Missing logo images** - logo.png and favicon.png need to be created
2. **Image optimization** - Large image files (hero-bg.jpg is 2.9MB, should be optimized)
3. **No analytics** - No visitor tracking currently implemented

## 📝 TODO / Future Enhancements

- [ ] Add Google Analytics tracking
- [ ] Implement service worker for offline support
- [ ] Create and add logo.png and favicon.png
- [ ] Optimize images (convert to WebP, add compression)
- [ ] Add testimonial slider/carousel
- [ ] Create blog section for security tips
- [ ] Add before/after image gallery
- [ ] Implement live chat widget
- [ ] Add customer portal for existing clients
- [ ] Create email newsletter signup

## 📄 License

© 2025 Brock Security. All rights reserved.

## 🤝 Contributing

This is a private commercial website. For issues or suggestions, please contact support@brocksecurity.net.

## 📞 Support

For technical support or questions:
- **Email:** support@brocksecurity.net
- **Phone:** (606) 275-5449

---

**Built with ❤️ for Eastern Kentucky**
