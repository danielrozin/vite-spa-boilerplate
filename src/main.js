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

  // Add parallax effect to hero section
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Add fade-in animation for product cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe product cards for animations
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});