# Bilal Arshad Portfolio

A modern, animated portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **4 Pages**: Home, About, Projects, Contact
- **3D Card Effects**: Hover transforms with perspective and depth
- **Smooth Animations**: Framer Motion page transitions and scroll animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Contact Form**: With submission feedback
- **Animated Counters**: Stats that count up on scroll
- **Floating Shapes**: Animated background elements
- **Mobile Menu**: Full-screen overlay navigation

## Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- React Router DOM
- Framer Motion (animations)
- Tailwind CSS (styling)
- Lucide React (icons)
- React CountUp (animated counters)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd bilal-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Project Structure

```
src/
  components/       # Reusable UI components
    AnimatedSection.tsx
    Card3D.tsx
    FloatingShapes.tsx
    Footer.tsx
    Navbar.tsx
    ProjectCard.tsx
    StatCounter.tsx
    TechTag.tsx
  pages/            # Page components
    Home.tsx
    About.tsx
    Projects.tsx
    Contact.tsx
  hooks/            # Custom React hooks
    useCountUp.ts
    useNavbarScroll.ts
    useScrollAnimation.ts
  styles/           # Global styles
    index.css
  App.tsx           # Main app component
  main.tsx          # Entry point
```

## Customization

### Update Personal Info

Edit the content in the page components (`src/pages/*.tsx`) to update your personal information, projects, and contact details.

### Update Photo

Replace `/public/images/bilal.jpg` with your own photo.

### Colors

Update the color scheme in `tailwind.config.js` under the `brand` colors.

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Vercel

1. Import your repository to Vercel
2. Build command: `npm run build`
3. Output directory: `dist`

## License

MIT License - feel free to use this template for your own portfolio!

---

Crafted with passion by Muhammad Bilal Arshad
