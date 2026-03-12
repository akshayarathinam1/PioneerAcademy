/**
 * Components.js
 * Handles shared Navbar and Footer across all pages
 */

document.addEventListener('DOMContentLoaded', () => {
    const isSubPage = window.location.pathname.includes('/classes/');
    const basePath = isSubPage ? '../' : '';

    const navbarHTML = `
    <!-- TOP INFO BAR -->
    <div class="topbar">
      <div class="container">
        <div class="topbar-left">
          <span class="topbar-item">
            <i class="fa fa-envelope"></i> info@pioneeracademy.in
          </span>
          <span class="topbar-item">
            <i class="fa fa-clock"></i> Mon – Sat &nbsp;09:00 AM – 07:00 PM
          </span>
          <span class="topbar-item">
            <i class="fa fa-location-dot"></i> 45 Arts Lane, Banjara Hills, Hyderabad
          </span>
        </div>
        <div class="topbar-right">
          <div class="topbar-social">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            <a href="#" aria-label="Pinterest"><i class="fab fa-pinterest-p"></i></a>
          </div>
        </div>
      </div>
    </div>

    <!-- NAVIGATION -->
    <nav class="navbar" id="navbar">
      <div class="container">
        <!-- Logo -->
        <a href="${basePath}index.html" class="nav-logo">
          <img src="${basePath}images/logo/logo.png" alt="Pioneer Academy Logo" class="nav-logo-img" />
          <div class="nav-logo-text">
            <span class="nav-logo-title">Pioneer</span>
            <span class="nav-logo-sub">Academy of Arts</span>
          </div>
        </a>

        <!-- Nav Links -->
        <ul class="nav-links" id="navLinks">
          <li><a href="${basePath}index.html">Home</a></li>
          <li><a href="${basePath}about.html">About Us</a></li>
          <li class="nav-item-dropdown">
            <a href="${basePath}classes.html">Classes <i class="fa fa-chevron-down nav-chevron" style="font-size: 0.75rem; margin-left: 4px;"></i></a>
            <ul class="dropdown-menu">
              <li><a href="${basePath}classes/piano-keyboard.html">Piano & Keyboard</a></li>
              <li><a href="${basePath}classes/guitar.html">Guitar</a></li>
              <li><a href="${basePath}classes/drums.html">Drums & Pad</a></li>
              <li><a href="${basePath}classes/western-dance.html">Western Dance</a></li>
              <li><a href="${basePath}classes/classical-dance.html">Classical Dance</a></li>
              <li><a href="${basePath}classes/art-drawing.html">Art & Drawing</a></li>
              <li><a href="${basePath}classes/carnatic-vocal.html">Carnatic Vocal</a></li>
              <li><a href="${basePath}classes/violin.html">Violin</a></li>
            </ul>
          </li>
          <li><a href="${basePath}gallery.html">Gallery</a></li>
          <li><a href="${basePath}contact.html">Contact Us</a></li>
        </ul>

        <!-- Right side -->
        <div class="nav-right">
          <a href="${basePath}contact.html" class="btn btn-primary nav-cta">
            Book Admission
          </a>
          <button class="hamburger" id="hamburger" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
    `;

    const footerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand -->
          <div class="footer-brand">
            <a href="${basePath}index.html" class="nav-logo">
              <div class="footer-logo-img-wrapper">
                <img src="${basePath}images/logo/logo.png" alt="Pioneer Academy Logo" />
              </div>
              <div class="nav-logo-text">
                <span class="nav-logo-title" style="color:var(--white)">Pioneer</span>
                <span class="nav-logo-sub">Academy of Arts</span>
              </div>
            </a>
            <p>Nurturing creativity and excellence since 1995. A premier destination for arts education across all disciplines.</p>
            <div class="footer-social">
              <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
              <a href="#" aria-label="Pinterest"><i class="fab fa-pinterest-p"></i></a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="${basePath}index.html">Home</a></li>
              <li><a href="${basePath}about.html">About Us</a></li>
              <li><a href="${basePath}classes.html">Classes</a></li>
              <li><a href="${basePath}gallery.html">Gallery</a></li>
              <li><a href="${basePath}contact.html">Contact Us</a></li>
            </ul>
          </div>

          <!-- Classes -->
          <div class="footer-col">
            <h5>Our Classes</h5>
            <ul>
              <li><a href="${basePath}classes/piano-keyboard.html">Piano & Keyboard</a></li>
              <li><a href="${basePath}classes/guitar.html">Guitar</a></li>
              <li><a href="${basePath}classes/drums.html">Drums & Pad</a></li>
              <li><a href="${basePath}classes/western-dance.html">Western Dance</a></li>
              <li><a href="${basePath}classes/classical-dance.html">Classical Dance</a></li>
              <li><a href="${basePath}classes/art-drawing.html">Art & Drawing</a></li>
              <li><a href="${basePath}classes/carnatic-vocal.html">Carnatic Vocal</a></li>
              <li><a href="${basePath}classes/violin.html">Violin</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="footer-col">
            <h5>Get In Touch</h5>
            <div class="footer-contact-item" style="display:flex; gap:12px; margin-bottom:15px;">
              <i class="fa fa-location-dot" style="color:var(--gold); margin-top:4px;"></i>
              <span>45 Arts Lane, Banjara Hills, Hyderabad – 500034</span>
            </div>
            <div class="footer-contact-item" style="display:flex; gap:12px; margin-bottom:15px;">
              <i class="fa fa-phone" style="color:var(--gold);"></i>
              <span>+91 98765 43210</span>
            </div>
            <div class="footer-contact-item" style="display:flex; gap:12px; margin-bottom:15px;">
              <i class="fa fa-envelope" style="color:var(--gold);"></i>
              <span>info@pioneeracademy.in</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="container" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
          <span>&copy; 2026 Pioneer Academy of Arts. All Rights Reserved.</span>
          <span>Designed by <a href="#">Akshaya R</a></span>
        </div>
      </div>
    </footer>

    <!-- Floating WhatsApp -->
    <a href="https://wa.me/919876543210" class="whatsapp-btn" target="_blank">
      <i class="fab fa-whatsapp"></i>
      <span>Chat with us</span>
    </a>
    `;

    // Inject Navbar
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = navbarHTML;
    }

    // Inject Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }

    // Update active link
    updateActiveLinks(basePath);
    
    // Re-initialize navbar logic (hamburger, scroll)
    initNavbarLogic();
});

function updateActiveLinks(basePath) {
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a, .footer-col a');
    
    navLinks.forEach(a => {
        let href = a.getAttribute('href');
        if (!href) return;
        
        // Remove basePath from href for comparison
        let cleanHref = href.replace(basePath, '');
        
        if (cleanHref === currentPage) {
            a.classList.add('active');
            
            // If it's a dropdown item, highlight the parent "Classes" link
            if (a.closest('.dropdown-menu')) {
                const parentLink = a.closest('.nav-item-dropdown').querySelector('a');
                if (parentLink) parentLink.classList.add('active');
            }
        }
    });
}

function initNavbarLogic() {
    // Navbar Scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 60);
        });
    }

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });

        // Mobile dropdown toggle: on small screens, clicking the parent
        // "Classes" link should expand/collapse the sub-menu, not navigate.
        navLinks.querySelectorAll('.nav-item-dropdown > a').forEach(parentLink => {
            parentLink.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const dropdownItem = parentLink.closest('.nav-item-dropdown');
                    const isOpen = dropdownItem.classList.contains('open');
                    // Close all other dropdowns first
                    navLinks.querySelectorAll('.nav-item-dropdown.open').forEach(d => d.classList.remove('open'));
                    if (!isOpen) dropdownItem.classList.add('open');
                }
            });
        });

        // Close menu when a leaf link (not a parent) is clicked
        navLinks.querySelectorAll('a').forEach(a => {
            if (!a.closest('.nav-item-dropdown') || a.closest('.dropdown-menu')) {
                a.addEventListener('click', () => {
                    hamburger.classList.remove('open');
                    navLinks.classList.remove('open');
                    navLinks.querySelectorAll('.nav-item-dropdown').forEach(d => d.classList.remove('open'));
                });
            }
        });
    }
}
