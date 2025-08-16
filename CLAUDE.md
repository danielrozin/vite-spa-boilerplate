# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an iPhone product showcase SPA (Single Page Application) built with Vite and vanilla JavaScript, mimicking Apple's design aesthetic. The application presents iPhone models in a product grid with interactive purchase buttons and smooth animations.

## Common Commands

### Development
- `npm install` - Install dependencies (required before first run)
- `npm run dev` - Start development server (runs on http://localhost:5173/)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Architecture

### Core Structure
- **Entry Point**: `src/main.js` - Contains all HTML template injection and JavaScript functionality
- **Styling**: `src/style.css` - Complete CSS styling using Apple's design system
- **Static Assets**: `public/` directory for static files

### Application Design Pattern
The app uses a vanilla JavaScript approach with:
- **Template Rendering**: HTML is injected via `innerHTML` in main.js
- **Event-Driven Interactions**: DOM event listeners for buy buttons, navigation, and scroll effects
- **CSS-First Styling**: Extensive use of CSS Grid, Flexbox, and modern CSS features
- **Progressive Enhancement**: Intersection Observer API for scroll animations

### Key Components
- **Navigation Bar**: Fixed header with Apple-style navigation
- **Hero Section**: Large branding area with gradient background
- **Product Grid**: Responsive grid showcasing iPhone models with prices
- **Interactive Elements**: Buy buttons with animation feedback and cart simulation
- **Feature Highlights**: Grid layout highlighting iPhone capabilities

### JavaScript Functionality
All interactivity is contained in main.js:
- Buy button animations and cart simulation
- Smooth scrolling navigation
- Parallax effects on hero section
- Fade-in animations using Intersection Observer
- Responsive design handled purely through CSS

### Styling Architecture
- Uses Apple's design system colors (`#1d1d1f`, `#007aff`, etc.)
- System font stack (`-apple-system, BlinkMacSystemFont`)
- Mobile-first responsive design with breakpoints
- Smooth transitions and hover effects throughout
- Modern CSS features (backdrop-filter, CSS Grid, custom properties)