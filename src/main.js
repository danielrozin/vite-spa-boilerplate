import './style.css'

document.querySelector('#app').innerHTML = `
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <header class="navbar" role="banner">
    <div class="nav-container">
      <div class="apple-logo" role="img" aria-label="Apple">🍎</div>
      <nav class="nav-links" role="navigation" aria-label="Main navigation">
        <a href="#" class="nav-link">Mac</a>
        <a href="#" class="nav-link">iPad</a>
        <a href="#" class="nav-link active" aria-current="page">iPhone</a>
        <a href="#" class="nav-link">Watch</a>
        <a href="#" class="nav-link">AirPods</a>
        <a href="#" class="nav-link">TV & Home</a>
        <a href="#" class="nav-link">Support</a>
      </nav>
    </div>
  </header>

  <main id="main-content" role="main">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-content">
        <h1 id="hero-title" class="hero-title">iPhone</h1>
        <p class="hero-subtitle">Designed to be loved.</p>
      </div>
    </section>

    <section class="product-lineup" aria-labelledby="products-title">
      <div class="container">
        <h2 id="products-title" class="section-title">Which iPhone is right for you?</h2>
        
        <div class="product-grid" role="grid" aria-label="iPhone product lineup">
          <article class="product-card" role="gridcell">
            <div class="product-image-container">
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702774" 
                   alt="iPhone 15 Pro in Natural Titanium finish" 
                   class="product-image" 
                   loading="lazy" 
                   width="300" 
                   height="300">
            </div>
            <h3 class="product-name">iPhone 15 Pro</h3>
            <p class="product-description">Titanium. So strong. So light. So Pro.</p>
            <p class="product-price" aria-label="Starting price $999">From $999</p>
            <button class="buy-button" aria-label="Buy iPhone 15 Pro starting at $999">Buy</button>
          </article>

          <article class="product-card" role="gridcell">
            <div class="product-image-container">
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923777972" 
                   alt="iPhone 15 in Pink finish" 
                   class="product-image" 
                   loading="lazy" 
                   width="300" 
                   height="300">
            </div>
            <h3 class="product-name">iPhone 15</h3>
            <p class="product-description">New camera. New design. Newphoria.</p>
            <p class="product-price" aria-label="Starting price $799">From $799</p>
            <button class="buy-button" aria-label="Buy iPhone 15 starting at $799">Buy</button>
          </article>

          <article class="product-card" role="gridcell">
            <div class="product-image-container">
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027785330" 
                   alt="iPhone 14 in Blue finish" 
                   class="product-image" 
                   loading="lazy" 
                   width="300" 
                   height="300">
            </div>
            <h3 class="product-name">iPhone 14</h3>
            <p class="product-description">As amazing as ever.</p>
            <p class="product-price" aria-label="Starting price $699">From $699</p>
            <button class="buy-button" aria-label="Buy iPhone 14 starting at $699">Buy</button>
          </article>

          <article class="product-card" role="gridcell">
            <div class="product-image-container">
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202204-midnight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1645572315195" 
                   alt="iPhone SE in Midnight finish" 
                   class="product-image" 
                   loading="lazy" 
                   width="300" 
                   height="300">
            </div>
            <h3 class="product-name">iPhone SE</h3>
            <p class="product-description">Serious power. Serious value.</p>
            <p class="product-price" aria-label="Starting price $429">From $429</p>
            <button class="buy-button" aria-label="Buy iPhone SE starting at $429">Buy</button>
          </article>
        </div>
        
        <div class="find-iphone-container">
          <button class="find-iphone-button" id="findIphoneBtn" aria-describedby="quiz-description">
            <span class="button-icon" role="img" aria-label="Quiz icon">🧭</span>
            Find your iPhone
          </button>
          <p id="quiz-description" class="visually-hidden">Take our quick quiz to get personalized iPhone recommendations based on your needs</p>
        </div>
      </div>
    </section>

    <section class="comparison-section" aria-labelledby="comparison-title">
      <div class="container">
        <h2 id="comparison-title" class="section-title">Compare iPhone models</h2>
        <div class="comparison-toggle">
          <button class="toggle-button active" id="basicCompare" aria-pressed="true">Basic specs</button>
          <button class="toggle-button" id="detailedCompare" aria-pressed="false">Detailed specs</button>
        </div>
        
        <div class="comparison-table-container" role="region" aria-live="polite">
          <table class="comparison-table" role="table" aria-label="iPhone comparison table">
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col">iPhone 15 Pro</th>
                <th scope="col">iPhone 15</th>
                <th scope="col">iPhone 14</th>
                <th scope="col">iPhone SE</th>
              </tr>
            </thead>
            <tbody id="comparisonTableBody">
              <tr>
                <th scope="row">Display</th>
                <td>6.1" Pro Display</td>
                <td>6.1" Super Retina XDR</td>
                <td>6.1" Super Retina XDR</td>
                <td>4.7" Retina HD</td>
              </tr>
              <tr>
                <th scope="row">Chip</th>
                <td>A17 Pro</td>
                <td>A16 Bionic</td>
                <td>A15 Bionic</td>
                <td>A15 Bionic</td>
              </tr>
              <tr>
                <th scope="row">Camera</th>
                <td>Pro camera system</td>
                <td>Advanced dual-camera</td>
                <td>Dual-camera system</td>
                <td>Single camera</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    
    <section class="features" aria-labelledby="features-title">
      <div class="container">
        <h2 id="features-title" class="section-title">Why iPhone</h2>
        <div class="feature-grid" role="list">
          <div class="feature-item" role="listitem">
            <div class="feature-icon" role="img" aria-label="Performance icon">⚡</div>
            <h3>Performance</h3>
            <p>Powered by the most advanced chip technology</p>
          </div>
          <div class="feature-item" role="listitem">
            <div class="feature-icon" role="img" aria-label="Camera icon">📸</div>
            <h3>Camera</h3>
            <p>Professional-quality photos and videos</p>
          </div>
          <div class="feature-item" role="listitem">
            <div class="feature-icon" role="img" aria-label="Battery icon">🔋</div>
            <h3>Battery</h3>
            <p>All-day battery life that keeps up with you</p>
          </div>
          <div class="feature-item" role="listitem">
            <div class="feature-icon" role="img" aria-label="Security icon">🔐</div>
            <h3>Security</h3>
            <p>Your privacy is protected every step of the way</p>
          </div>
        </div>
      </div>
    </section>

    <section class="qa-section">
      <div class="container">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="qa-grid">
          <div class="qa-item">
            <h3>What's included with every iPhone?</h3>
            <p>Every iPhone comes with a USB-C to Lightning cable, documentation, and industry-leading support. The box is designed to be as small as possible to reduce environmental impact.</p>
          </div>
          <div class="qa-item">
            <h3>How long is the warranty?</h3>
            <p>Every iPhone comes with one year of hardware repair coverage and 90 days of complimentary technical support. You can also purchase AppleCare+ for extended coverage.</p>
          </div>
          <div class="qa-item">
            <h3>Can I trade in my current phone?</h3>
            <p>Yes! Apple Trade In lets you recycle any device at any Apple Store location and on apple.com for free. If your device has trade-in value, you'll receive credit toward a new purchase.</p>
          </div>
          <div class="qa-item">
            <h3>What payment options are available?</h3>
            <p>You can pay with Apple Card Monthly Installments, carrier financing, or pay in full. We also accept all major credit cards and Apple Pay.</p>
          </div>
          <div class="qa-item">
            <h3>Is my data secure on iPhone?</h3>
            <p>iPhone is designed to protect your privacy and security. Features like Face ID, Touch ID, and end-to-end encryption help keep your personal information safe.</p>
          </div>
          <div class="qa-item">
            <h3>How do I transfer data from my old phone?</h3>
            <p>Use Quick Start to transfer data from your current device to your new iPhone. You can also restore from an iCloud backup or use the Move to iOS app on Android.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="waitlist-section">
      <div class="container">
        <div class="waitlist-content">
          <h2 class="waitlist-title">Be the first to know</h2>
          <p class="waitlist-subtitle">Get notified about new iPhone releases, exclusive offers, and the latest Apple news.</p>
          <form class="waitlist-form" id="waitlistForm">
            <div class="email-input-group">
              <input type="email" class="email-input" placeholder="Enter your email address" required id="emailInput">
              <button type="submit" class="subscribe-button">Join Waitlist</button>
            </div>
          </form>
          <div class="success-message" id="successMessage" style="display: none;">
            <div class="success-icon">✓</div>
            <h3>Successfully signed up!</h3>
            <p>You'll be the first to know about new iPhone releases and exclusive offers.</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer" role="contentinfo">
    <div class="container">
      <p>&copy; 2024 Apple Inc. All rights reserved.</p>
      <nav class="footer-links" aria-label="Footer navigation">
        <a href="#" class="footer-link">Privacy Policy</a>
        <a href="#" class="footer-link">Terms of Service</a>
        <a href="#" class="footer-link">Accessibility</a>
      </nav>
    </div>
  </footer>

  <!-- iPhone Quiz Modal -->
  <div class="modal-overlay" id="quizModal" role="dialog" aria-modal="true" aria-labelledby="quiz-modal-title" style="display: none;">
    <div class="modal-content">
      <div class="modal-header">
        <h2 id="quiz-modal-title" class="modal-title">Find your perfect iPhone</h2>
        <button class="modal-close" id="closeQuiz" aria-label="Close quiz">&times;</button>
      </div>
      <div class="modal-body" id="quizContent">
        <div class="quiz-step active" data-step="1">
          <h3>What's your budget?</h3>
          <div class="quiz-options">
            <button class="quiz-option" data-value="budget">Under $500</button>
            <button class="quiz-option" data-value="mid">$500 - $800</button>
            <button class="quiz-option" data-value="premium">$800+</button>
          </div>
        </div>
        <div class="quiz-step" data-step="2">
          <h3>What's most important to you?</h3>
          <div class="quiz-options">
            <button class="quiz-option" data-value="camera">Best camera</button>
            <button class="quiz-option" data-value="performance">Top performance</button>
            <button class="quiz-option" data-value="battery">All-day battery</button>
            <button class="quiz-option" data-value="display">Large display</button>
          </div>
        </div>
        <div class="quiz-step" data-step="3">
          <h3>How do you use your phone?</h3>
          <div class="quiz-options">
            <button class="quiz-option" data-value="basic">Calls, texts, web</button>
            <button class="quiz-option" data-value="photo">Photography enthusiast</button>
            <button class="quiz-option" data-value="gaming">Mobile gaming</button>
            <button class="quiz-option" data-value="work">Professional work</button>
          </div>
        </div>
        <div class="quiz-result" id="quizResult" style="display: none;">
          <div class="result-content">
            <h3>Perfect match!</h3>
            <div class="recommended-phone">
              <img id="resultImage" src="" alt="" class="result-phone-image">
              <h4 id="resultName"></h4>
              <p id="resultReason"></p>
              <button class="result-cta" id="resultCta">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

// Remove loading skeleton once content is loaded
const loadingSkeleton = document.getElementById('loadingSkeleton');
if (loadingSkeleton) {
  loadingSkeleton.remove();
}

// Add interactive functionality
document.addEventListener('DOMContentLoaded', () => {
  // Initialize accessibility features
  initializeAccessibility();
  
  // Initialize comparison table functionality
  initializeComparison();
  
  // Initialize quiz modal
  initializeQuiz();
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

  // Buy button interactions with enhanced accessibility
  const buyButtons = document.querySelectorAll('.buy-button');
  buyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const productCard = e.target.closest('.product-card');
      const productName = productCard.querySelector('.product-name').textContent;
      const productPrice = productCard.querySelector('.product-price').textContent;
      
      // Simulate purchase flow with accessibility
      button.style.transform = 'scale(0.95)';
      button.textContent = 'Added!';
      button.style.backgroundColor = '#30d158';
      button.setAttribute('aria-label', `${productName} added to cart`);
      
      // Announce to screen readers
      const announcer = document.getElementById('announcements');
      if (announcer) {
        announcer.textContent = `${productName} ${productPrice} has been added to your cart`;
      }
      
      setTimeout(() => {
        button.style.transform = 'scale(1)';
        button.textContent = 'Buy';
        button.style.backgroundColor = '#0071e3';
        button.setAttribute('aria-label', `Buy ${productName} starting at ${productPrice}`);
      }, 1500);
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
    
    // Navbar background opacity based on scroll with dark mode support
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const opacity = Math.min(scrolled / 100, 0.95);
      if (isDarkMode) {
        navbar.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
      } else {
        navbar.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
      }
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
  const animatedElements = document.querySelectorAll('.product-card, .feature-item, .section-title, .qa-item, .waitlist-content');
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

  // Waitlist form functionality
  const waitlistForm = document.getElementById('waitlistForm');
  const emailInput = document.getElementById('emailInput');
  const successMessage = document.getElementById('successMessage');

  if (waitlistForm) {
    waitlistForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = emailInput.value.trim();
      if (email && email.includes('@')) {
        // Mock API call simulation
        const submitButton = waitlistForm.querySelector('.subscribe-button');
        submitButton.textContent = 'Joining...';
        submitButton.disabled = true;
        
        setTimeout(() => {
          // Hide form and show success message
          waitlistForm.style.display = 'none';
          successMessage.style.display = 'block';
          successMessage.style.opacity = '0';
          successMessage.style.transform = 'translateY(20px)';
          
          // Animate success message
          setTimeout(() => {
            successMessage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            successMessage.style.opacity = '1';
            successMessage.style.transform = 'translateY(0)';
          }, 100);
          
          // Store email in mock data (localStorage for persistence)
          const existingEmails = JSON.parse(localStorage.getItem('waitlistEmails') || '[]');
          existingEmails.push({
            email: email,
            timestamp: new Date().toISOString()
          });
          localStorage.setItem('waitlistEmails', JSON.stringify(existingEmails));
          
          console.log('Email stored in mock data:', email);
        }, 1500);
      }
    });
  }
});

// Accessibility initialization
function initializeAccessibility() {
  // Add keyboard navigation for all interactive elements
  const interactiveElements = document.querySelectorAll('button, a, .product-card, .feature-item');
  
  interactiveElements.forEach(element => {
    if (!element.hasAttribute('tabindex') && !['A', 'BUTTON'].includes(element.tagName)) {
      element.setAttribute('tabindex', '0');
    }
    
    // Add keyboard support
    element.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        element.click();
      }
    });
  });
  
  // Announce page changes to screen readers
  const announceRegion = document.createElement('div');
  announceRegion.setAttribute('aria-live', 'polite');
  announceRegion.setAttribute('aria-atomic', 'true');
  announceRegion.className = 'visually-hidden';
  announceRegion.id = 'announcements';
  document.body.appendChild(announceRegion);
}

// Comparison table functionality
function initializeComparison() {
  const basicBtn = document.getElementById('basicCompare');
  const detailedBtn = document.getElementById('detailedCompare');
  const tableBody = document.getElementById('comparisonTableBody');
  
  if (!basicBtn || !detailedBtn || !tableBody) return;
  
  const basicData = [
    ['Display', '6.1" Pro Display', '6.1" Super Retina XDR', '6.1" Super Retina XDR', '4.7" Retina HD'],
    ['Chip', 'A17 Pro', 'A16 Bionic', 'A15 Bionic', 'A15 Bionic'],
    ['Camera', 'Pro camera system', 'Advanced dual-camera', 'Dual-camera system', 'Single camera']
  ];
  
  const detailedData = [
    ['Display', '6.1" Pro Display\n120Hz ProMotion', '6.1" Super Retina XDR\n60Hz', '6.1" Super Retina XDR\n60Hz', '4.7" Retina HD\n60Hz'],
    ['Chip', 'A17 Pro\n3nm process', 'A16 Bionic\n4nm process', 'A15 Bionic\n5nm process', 'A15 Bionic\n5nm process'],
    ['Camera', 'Pro camera system\n48MP Main, 12MP Ultra Wide\n12MP Telephoto', 'Advanced dual-camera\n48MP Main, 12MP Ultra Wide', 'Dual-camera system\n12MP Main, 12MP Ultra Wide', 'Single camera\n12MP Wide'],
    ['Battery', 'Up to 23 hours video', 'Up to 20 hours video', 'Up to 20 hours video', 'Up to 15 hours video'],
    ['Storage', '128GB, 256GB, 512GB, 1TB', '128GB, 256GB, 512GB', '128GB, 256GB, 512GB', '64GB, 128GB, 256GB'],
    ['Weight', '187g', '171g', '172g', '144g']
  ];
  
  function updateTable(data) {
    tableBody.innerHTML = '';
    data.forEach(row => {
      const tr = document.createElement('tr');
      row.forEach((cell, index) => {
        const element = index === 0 ? document.createElement('th') : document.createElement('td');
        if (index === 0) {
          element.setAttribute('scope', 'row');
        }
        element.innerHTML = cell.replace(/\n/g, '<br>');
        tr.appendChild(element);
      });
      tableBody.appendChild(tr);
    });
    
    // Announce table update
    const announcer = document.getElementById('announcements');
    if (announcer) {
      announcer.textContent = `Comparison table updated to show ${data === basicData ? 'basic' : 'detailed'} specifications`;
    }
  }
  
  basicBtn.addEventListener('click', () => {
    basicBtn.classList.add('active');
    basicBtn.setAttribute('aria-pressed', 'true');
    detailedBtn.classList.remove('active');
    detailedBtn.setAttribute('aria-pressed', 'false');
    updateTable(basicData);
  });
  
  detailedBtn.addEventListener('click', () => {
    detailedBtn.classList.add('active');
    detailedBtn.setAttribute('aria-pressed', 'true');
    basicBtn.classList.remove('active');
    basicBtn.setAttribute('aria-pressed', 'false');
    updateTable(detailedData);
  });
}

// Quiz modal functionality
function initializeQuiz() {
  const findIphoneBtn = document.getElementById('findIphoneBtn');
  const quizModal = document.getElementById('quizModal');
  const closeQuizBtn = document.getElementById('closeQuiz');
  const quizOptions = document.querySelectorAll('.quiz-option');
  const quizSteps = document.querySelectorAll('.quiz-step');
  const quizResult = document.getElementById('quizResult');
  
  if (!findIphoneBtn || !quizModal) return;
  
  let currentStep = 1;
  let answers = {};
  
  const phoneRecommendations = {
    'budget-camera-basic': { name: 'iPhone SE', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202204-midnight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1645572315195', reason: 'Perfect for essential tasks with excellent value and reliable performance.' },
    'budget-performance-gaming': { name: 'iPhone SE', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202204-midnight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1645572315195', reason: 'A15 Bionic chip delivers great gaming performance at an affordable price.' },
    'mid-camera-photo': { name: 'iPhone 15', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923777972', reason: 'Advanced dual-camera system perfect for photography enthusiasts.' },
    'mid-performance-work': { name: 'iPhone 14', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027785330', reason: 'Reliable performance and proven track record for professional use.' },
    'premium-camera-photo': { name: 'iPhone 15 Pro', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702774', reason: 'Pro camera system with advanced features for professional photography.' },
    'premium-performance-gaming': { name: 'iPhone 15 Pro', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702774', reason: 'A17 Pro chip delivers unmatched performance for demanding games and apps.' }
  };
  
  function openModal() {
    quizModal.style.display = 'flex';
    quizModal.setAttribute('aria-hidden', 'false');
    closeQuizBtn.focus();
    document.body.style.overflow = 'hidden';
    
    // Trap focus within modal
    trapFocus(quizModal);
  }
  
  function closeModal() {
    quizModal.style.display = 'none';
    quizModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    findIphoneBtn.focus();
    resetQuiz();
  }
  
  function resetQuiz() {
    currentStep = 1;
    answers = {};
    quizSteps.forEach((step, index) => {
      step.classList.toggle('active', index === 0);
    });
    quizResult.style.display = 'none';
  }
  
  function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    });
  }
  
  function getRecommendation() {
    const key = `${answers.budget}-${answers.priority}-${answers.usage}`;
    return phoneRecommendations[key] || phoneRecommendations['mid-camera-basic'];
  }
  
  function showResult() {
    const recommendation = getRecommendation();
    const resultImage = document.getElementById('resultImage');
    const resultName = document.getElementById('resultName');
    const resultReason = document.getElementById('resultReason');
    const resultCta = document.getElementById('resultCta');
    
    resultImage.src = recommendation.image;
    resultImage.alt = `${recommendation.name} product image`;
    resultName.textContent = recommendation.name;
    resultReason.textContent = recommendation.reason;
    
    // Hide all steps and show result
    quizSteps.forEach(step => step.classList.remove('active'));
    quizResult.style.display = 'block';
    
    // Set up CTA button
    resultCta.addEventListener('click', () => {
      closeModal();
      // Scroll to the recommended product
      const productCards = document.querySelectorAll('.product-card');
      productCards.forEach(card => {
        const productName = card.querySelector('.product-name').textContent;
        if (productName === recommendation.name) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.focus();
        }
      });
    });
    
    // Announce result
    const announcer = document.getElementById('announcements');
    if (announcer) {
      announcer.textContent = `Based on your preferences, we recommend the ${recommendation.name}. ${recommendation.reason}`;
    }
  }
  
  // Event listeners
  findIphoneBtn.addEventListener('click', openModal);
  closeQuizBtn.addEventListener('click', closeModal);
  
  // Close modal on escape key or background click
  quizModal.addEventListener('click', (e) => {
    if (e.target === quizModal) closeModal();
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && quizModal.style.display === 'flex') {
      closeModal();
    }
  });
  
  // Quiz option handling
  quizOptions.forEach(option => {
    option.addEventListener('click', (e) => {
      const step = e.target.closest('.quiz-step').dataset.step;
      const value = e.target.dataset.value;
      
      // Store answer
      if (step === '1') answers.budget = value;
      else if (step === '2') answers.priority = value;
      else if (step === '3') answers.usage = value;
      
      // Move to next step or show result
      if (currentStep < 3) {
        quizSteps[currentStep - 1].classList.remove('active');
        quizSteps[currentStep].classList.add('active');
        currentStep++;
      } else {
        showResult();
      }
    });
  });
}