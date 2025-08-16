import './style.css'

document.querySelector('#app').innerHTML = `
  <nav class="navbar">
    <div class="nav-container">
      <div class="apple-logo">🍎</div>
      <div class="nav-links">
        <a href="#" class="nav-link">Mac</a>
        <a href="#" class="nav-link">iPad</a>
        <a href="#" class="nav-link active">iPhone</a>
        <a href="#" class="nav-link">Watch</a>
        <a href="#" class="nav-link">AirPods</a>
        <a href="#" class="nav-link">TV & Home</a>
        <a href="#" class="nav-link">Support</a>
      </div>
    </div>
  </nav>

  <main>
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">iPhone</h1>
        <p class="hero-subtitle">Designed to be loved.</p>
      </div>
    </section>

    <section class="product-lineup">
      <div class="container">
        <h2 class="section-title">Which iPhone is right for you?</h2>
        
        <div class="product-grid">
          <div class="product-card">
            <div class="product-image">📱</div>
            <h3 class="product-name">iPhone 15 Pro</h3>
            <p class="product-description">Titanium. So strong. So light. So Pro.</p>
            <p class="product-price">From $999</p>
            <button class="buy-button">Buy</button>
          </div>

          <div class="product-card">
            <div class="product-image">📱</div>
            <h3 class="product-name">iPhone 15</h3>
            <p class="product-description">New camera. New design. Newphoria.</p>
            <p class="product-price">From $799</p>
            <button class="buy-button">Buy</button>
          </div>

          <div class="product-card">
            <div class="product-image">📱</div>
            <h3 class="product-name">iPhone 14</h3>
            <p class="product-description">As amazing as ever.</p>
            <p class="product-price">From $699</p>
            <button class="buy-button">Buy</button>
          </div>

          <div class="product-card">
            <div class="product-image">📱</div>
            <h3 class="product-name">iPhone SE</h3>
            <p class="product-description">Serious power. Serious value.</p>
            <p class="product-price">From $429</p>
            <button class="buy-button">Buy</button>
          </div>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <div class="feature-grid">
          <div class="feature-item">
            <h3>Performance</h3>
            <p>Powered by the most advanced chip technology</p>
          </div>
          <div class="feature-item">
            <h3>Camera</h3>
            <p>Professional-quality photos and videos</p>
          </div>
          <div class="feature-item">
            <h3>Battery</h3>
            <p>All-day battery life that keeps up with you</p>
          </div>
          <div class="feature-item">
            <h3>Security</h3>
            <p>Your privacy is protected every step of the way</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 Apple Inc. All rights reserved.</p>
    </div>
  </footer>
`

// Add interactive functionality
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target.getAttribute('href');
      if (target.startsWith('#')) {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Buy button interactions
  const buyButtons = document.querySelectorAll('.buy-button');
  buyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const productCard = e.target.closest('.product-card');
      const productName = productCard.querySelector('.product-name').textContent;
      const productPrice = productCard.querySelector('.product-price').textContent;
      
      // Simulate purchase flow
      button.style.transform = 'scale(0.95)';
      button.textContent = 'Added!';
      button.style.backgroundColor = '#28a745';
      
      setTimeout(() => {
        button.style.transform = 'scale(1)';
        button.textContent = 'Buy';
        button.style.backgroundColor = '#007aff';
      }, 1500);
      
      // Show alert with product info
      setTimeout(() => {
        alert(`${productName} ${productPrice} has been added to your cart!`);
      }, 100);
    });
  });

  // Enhanced parallax effects
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    const rateHero = scrolled * 0.3;
    
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero) {
      hero.style.transform = `translateY(${rateHero}px)`;
    }
    
    if (heroContent) {
      heroContent.style.transform = `translateY(${rate}px)`;
    }
    
    // Navbar background opacity based on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      const opacity = Math.min(scrolled / 100, 0.95);
      navbar.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
    }
  });

  // Enhanced fade-in animations with staggered effect
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) scale(1)';
        }, index * 150); // Staggered animation
      }
    });
  }, observerOptions);

  // Observe all animated elements
  const animatedElements = document.querySelectorAll('.product-card, .feature-item, .section-title');
  animatedElements.forEach((element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px) scale(0.9)';
    element.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(element);
  });

  // Add cursor trail effect
  let mouseTrail = [];
  document.addEventListener('mousemove', (e) => {
    mouseTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    if (mouseTrail.length > 10) mouseTrail.shift();
    
    // Clean old trail points
    mouseTrail = mouseTrail.filter(point => Date.now() - point.time < 1000);
  });

  // Add typing animation to hero title
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.borderRight = '3px solid #ffffff';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
      } else {
        // Remove cursor after typing
        setTimeout(() => {
          heroTitle.style.borderRight = 'none';
        }, 1000);
      }
    };
    
    // Start typing after page load
    setTimeout(typeWriter, 500);
  }
});