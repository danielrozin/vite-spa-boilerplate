(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&p(r)}).observe(document,{childList:!0,subtree:!0});function c(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function p(o){if(o.ep)return;o.ep=!0;const s=c(o);fetch(o.href,s)}})();document.querySelector("#app").innerHTML=`
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
`;const E=document.getElementById("loadingSkeleton");E&&E.remove();document.addEventListener("DOMContentLoaded",()=>{B(),S(),k(),document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",i=>{i.preventDefault();const n=i.target.getAttribute("href");if(n.startsWith("#")){const d=document.querySelector(n);d&&d.scrollIntoView({behavior:"smooth"})}})}),document.querySelectorAll(".buy-button").forEach(e=>{e.addEventListener("click",i=>{const n=i.target.closest(".product-card"),d=n.querySelector(".product-name").textContent,y=n.querySelector(".product-price").textContent;e.style.transform="scale(0.95)",e.textContent="Added!",e.style.backgroundColor="#30d158",e.setAttribute("aria-label",`${d} added to cart`);const a=document.getElementById("announcements");a&&(a.textContent=`${d} ${y} has been added to your cart`),setTimeout(()=>{e.style.transform="scale(1)",e.textContent="Buy",e.style.backgroundColor="#0071e3",e.setAttribute("aria-label",`Buy ${d} starting at ${y}`)},1500)})}),window.addEventListener("scroll",()=>{const e=window.pageYOffset,i=e*-.5,n=e*.3,d=document.querySelector(".hero"),y=document.querySelector(".hero-content");d&&(d.style.transform=`translateY(${n}px)`),y&&(y.style.transform=`translateY(${i}px)`);const a=document.querySelector(".navbar");if(a){const m=window.matchMedia("(prefers-color-scheme: dark)").matches,f=Math.min(e/100,.95);m?a.style.backgroundColor=`rgba(0, 0, 0, ${f})`:a.style.backgroundColor=`rgba(255, 255, 255, ${f})`}});const c={threshold:.1,rootMargin:"0px 0px -100px 0px"},p=new IntersectionObserver(e=>{e.forEach((i,n)=>{i.isIntersecting&&setTimeout(()=>{i.target.style.opacity="1",i.target.style.transform="translateY(0) scale(1)"},n*150)})},c);document.querySelectorAll(".product-card, .feature-item, .section-title, .qa-item, .waitlist-content").forEach(e=>{e.style.opacity="0",e.style.transform="translateY(30px) scale(0.9)",e.style.transition="opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",p.observe(e)});let s=[];document.addEventListener("mousemove",e=>{s.push({x:e.clientX,y:e.clientY,time:Date.now()}),s.length>10&&s.shift(),s=s.filter(i=>Date.now()-i.time<1e3)});const r=document.querySelector(".hero-title");if(r){const e=r.textContent;r.textContent="",r.style.borderRight="3px solid #ffffff";let i=0;const n=()=>{i<e.length?(r.textContent+=e.charAt(i),i++,setTimeout(n,150)):setTimeout(()=>{r.style.borderRight="none"},1e3)};setTimeout(n,500)}const l=document.getElementById("waitlistForm"),g=document.getElementById("emailInput"),h=document.getElementById("successMessage");l&&l.addEventListener("submit",e=>{e.preventDefault();const i=g.value.trim();if(i&&i.includes("@")){const n=l.querySelector(".subscribe-button");n.textContent="Joining...",n.disabled=!0,setTimeout(()=>{l.style.display="none",h.style.display="block",h.style.opacity="0",h.style.transform="translateY(20px)",setTimeout(()=>{h.style.transition="opacity 0.5s ease, transform 0.5s ease",h.style.opacity="1",h.style.transform="translateY(0)"},100);const d=JSON.parse(localStorage.getItem("waitlistEmails")||"[]");d.push({email:i,timestamp:new Date().toISOString()}),localStorage.setItem("waitlistEmails",JSON.stringify(d)),console.log("Email stored in mock data:",i)},1500)}})});function B(){document.querySelectorAll("button, a, .product-card, .feature-item").forEach(c=>{!c.hasAttribute("tabindex")&&!["A","BUTTON"].includes(c.tagName)&&c.setAttribute("tabindex","0"),c.addEventListener("keydown",p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),c.click())})});const t=document.createElement("div");t.setAttribute("aria-live","polite"),t.setAttribute("aria-atomic","true"),t.className="visually-hidden",t.id="announcements",document.body.appendChild(t)}function S(){const u=document.getElementById("basicCompare"),t=document.getElementById("detailedCompare"),c=document.getElementById("comparisonTableBody");if(!u||!t||!c)return;const p=[["Display",'6.1" Pro Display','6.1" Super Retina XDR','6.1" Super Retina XDR','4.7" Retina HD'],["Chip","A17 Pro","A16 Bionic","A15 Bionic","A15 Bionic"],["Camera","Pro camera system","Advanced dual-camera","Dual-camera system","Single camera"]],o=[["Display",`6.1" Pro Display
120Hz ProMotion`,`6.1" Super Retina XDR
60Hz`,`6.1" Super Retina XDR
60Hz`,`4.7" Retina HD
60Hz`],["Chip",`A17 Pro
3nm process`,`A16 Bionic
4nm process`,`A15 Bionic
5nm process`,`A15 Bionic
5nm process`],["Camera",`Pro camera system
48MP Main, 12MP Ultra Wide
12MP Telephoto`,`Advanced dual-camera
48MP Main, 12MP Ultra Wide`,`Dual-camera system
12MP Main, 12MP Ultra Wide`,`Single camera
12MP Wide`],["Battery","Up to 23 hours video","Up to 20 hours video","Up to 20 hours video","Up to 15 hours video"],["Storage","128GB, 256GB, 512GB, 1TB","128GB, 256GB, 512GB","128GB, 256GB, 512GB","64GB, 128GB, 256GB"],["Weight","187g","171g","172g","144g"]];function s(r){c.innerHTML="",r.forEach(g=>{const h=document.createElement("tr");g.forEach((e,i)=>{const n=i===0?document.createElement("th"):document.createElement("td");i===0&&n.setAttribute("scope","row"),n.innerHTML=e.replace(/\n/g,"<br>"),h.appendChild(n)}),c.appendChild(h)});const l=document.getElementById("announcements");l&&(l.textContent=`Comparison table updated to show ${r===p?"basic":"detailed"} specifications`)}u.addEventListener("click",()=>{u.classList.add("active"),u.setAttribute("aria-pressed","true"),t.classList.remove("active"),t.setAttribute("aria-pressed","false"),s(p)}),t.addEventListener("click",()=>{t.classList.add("active"),t.setAttribute("aria-pressed","true"),u.classList.remove("active"),u.setAttribute("aria-pressed","false"),s(o)})}function k(){const u=document.getElementById("findIphoneBtn"),t=document.getElementById("quizModal"),c=document.getElementById("closeQuiz"),p=document.querySelectorAll(".quiz-option"),o=document.querySelectorAll(".quiz-step"),s=document.getElementById("quizResult");if(!u||!t)return;let r=1,l={};const g={"budget-camera-basic":{name:"iPhone SE",image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202204-midnight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1645572315195",reason:"Perfect for essential tasks with excellent value and reliable performance."},"budget-performance-gaming":{name:"iPhone SE",image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202204-midnight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1645572315195",reason:"A15 Bionic chip delivers great gaming performance at an affordable price."},"mid-camera-photo":{name:"iPhone 15",image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923777972",reason:"Advanced dual-camera system perfect for photography enthusiasts."},"mid-performance-work":{name:"iPhone 14",image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027785330",reason:"Reliable performance and proven track record for professional use."},"premium-camera-photo":{name:"iPhone 15 Pro",image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702774",reason:"Pro camera system with advanced features for professional photography."},"premium-performance-gaming":{name:"iPhone 15 Pro",image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702774",reason:"A17 Pro chip delivers unmatched performance for demanding games and apps."}};function h(){t.style.display="flex",t.setAttribute("aria-hidden","false"),c.focus(),document.body.style.overflow="hidden",n(t)}function e(){t.style.display="none",t.setAttribute("aria-hidden","true"),document.body.style.overflow="",u.focus(),i()}function i(){r=1,l={},o.forEach((a,m)=>{a.classList.toggle("active",m===0)}),s.style.display="none"}function n(a){const m=a.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),f=m[0],v=m[m.length-1];a.addEventListener("keydown",b=>{b.key==="Tab"&&(b.shiftKey?document.activeElement===f&&(b.preventDefault(),v.focus()):document.activeElement===v&&(b.preventDefault(),f.focus()))})}function d(){const a=`${l.budget}-${l.priority}-${l.usage}`;return g[a]||g["mid-camera-basic"]}function y(){const a=d(),m=document.getElementById("resultImage"),f=document.getElementById("resultName"),v=document.getElementById("resultReason"),b=document.getElementById("resultCta");m.src=a.image,m.alt=`${a.name} product image`,f.textContent=a.name,v.textContent=a.reason,o.forEach(q=>q.classList.remove("active")),s.style.display="block",b.addEventListener("click",()=>{e(),document.querySelectorAll(".product-card").forEach(P=>{P.querySelector(".product-name").textContent===a.name&&(P.scrollIntoView({behavior:"smooth",block:"center"}),P.focus())})});const w=document.getElementById("announcements");w&&(w.textContent=`Based on your preferences, we recommend the ${a.name}. ${a.reason}`)}u.addEventListener("click",h),c.addEventListener("click",e),t.addEventListener("click",a=>{a.target===t&&e()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&t.style.display==="flex"&&e()}),p.forEach(a=>{a.addEventListener("click",m=>{const f=m.target.closest(".quiz-step").dataset.step,v=m.target.dataset.value;f==="1"?l.budget=v:f==="2"?l.priority=v:f==="3"&&(l.usage=v),r<3?(o[r-1].classList.remove("active"),o[r].classList.add("active"),r++):y()})})}
