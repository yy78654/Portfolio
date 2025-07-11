# Cyberpunk Portfolio Website

A stunning, modern portfolio website with a cyberpunk theme built using React, Vite, and Framer Motion. Features neon colors, glitch effects, smooth animations, and a fully responsive design.

## 🚀 Features

### Design & Aesthetics
- **Cyberpunk Theme**: Dark background with neon colors (pink, blue, purple, green, cyan)
- **Glitch Effects**: Animated glitch effects on titles and navigation
- **Neon Glow**: Glowing effects on buttons, cards, and interactive elements
- **Futuristic Fonts**: Orbitron and Press Start 2P for headings, Roboto for body text

### Pages & Sections
- **Home**: Full-screen landing with animated background and hero section
- **About**: Bio, animated skill bars, services, and professional timeline
- **Projects**: Filterable project grid with hover effects and category filtering
- **Contact**: Contact form with validation and social media links

### Technical Features
- **React Router**: Smooth navigation between pages
- **Framer Motion**: Advanced animations and page transitions
- **Responsive Design**: Mobile-first approach with breakpoints
- **React Icons**: Comprehensive icon library
- **CSS Custom Properties**: Easy theme customization

### Interactive Elements
- **Hover Effects**: Neon glow and transform effects
- **Animated Skill Bars**: Progress bars with shimmer effects
- **Project Cards**: Hover overlays with GitHub and live demo links
- **Contact Form**: Form validation with loading states
- **Mobile Navigation**: Collapsible hamburger menu

## 🛠️ Technology Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **CSS3** - Custom styling with animations

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-v2.git
   cd portfolio-v2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/docs" folder
   - Click Save

3. **Build and Deploy**
   ```bash
   npm run build
   ```
   
   The build files will be in the `dist` folder. Copy them to a `docs` folder in your repository root.

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Create docs folder**
   ```bash
   mkdir docs
   cp -r dist/* docs/
   ```

3. **Commit and push**
   ```bash
   git add docs/
   git commit -m "Add build files for GitHub Pages"
   git push origin main
   ```

## 🎨 Customization

### Colors
Edit the CSS custom properties in `src/index.css`:
```css
:root {
  --bg-primary: #0d0d0d;
  --bg-secondary: #1a1a1a;
  --neon-pink: #ff0077;
  --neon-blue: #00f9ff;
  --neon-purple: #9c3bff;
  --neon-green: #00ff90;
  --neon-cyan: #00ffff;
}
```

### Content
- **Personal Info**: Update contact information in `src/pages/Contact.jsx`
- **Projects**: Modify project data in `src/pages/Projects.jsx`
- **Skills**: Edit skill levels in `src/pages/About.jsx`
- **Timeline**: Update professional experience in `src/pages/About.jsx`

### Fonts
Change Google Fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Press+Start+2P&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎭 Animation Features

- **Page Transitions**: Smooth fade and slide transitions
- **Scroll Animations**: Elements animate on scroll
- **Hover Effects**: Interactive hover states with neon glow
- **Loading States**: Animated loading spinners
- **Glitch Effects**: Cyberpunk-style glitch animations

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
portfolio-v2/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🌟 Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Optimized Images**: Placeholder images for fast loading
- **CSS Optimization**: Minimal CSS with efficient selectors
- **Lazy Loading**: Components load on demand

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Vite Team** - For the fast build tool
- **Framer Motion** - For smooth animations
- **React Icons** - For the comprehensive icon library
- **Google Fonts** - For the beautiful typography

---

**Built with ❤️ and lots of neon glow** 