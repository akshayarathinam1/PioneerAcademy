/* =============================================
   PIONEER ACADEMY — MAIN JAVASCRIPT
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ── NAVBAR SCROLL ──
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // ── HAMBURGER MENU ──
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    // close on link click (mobile)
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // ── ACTIVE NAV LINK ──
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ── SCROLL REVEAL ──
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (revealEls.length) {
    // Prime GPU compositing layer before animation starts
    revealEls.forEach(el => { el.style.willChange = 'opacity, transform'; });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          // Release will-change after animation to free GPU memory
          e.target.addEventListener('transitionend', () => {
            e.target.style.willChange = 'auto';
          }, { once: true });
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0,
      rootMargin: '0px 0px 120px 0px'  // Expand zone 120px below viewport — triggers BEFORE element enters screen
    });
    revealEls.forEach(el => io.observe(el));
  }

  // ── ABOUT IMAGE LAZY-LOAD BLUR-UP ──
  document.querySelectorAll('.about-img img').forEach(img => {
    const reveal = () => img.classList.add('img-loaded');
    if (img.complete && img.naturalWidth > 0) {
      reveal(); // already cached — show instantly
    } else {
      img.addEventListener('load', reveal, { once: true });
    }
  });

  // ── ABOUT IMAGES PARALLAX SCROLL-UP ──
  const aboutImages  = document.querySelector('.about-images');
  const aboutSection = document.querySelector('.about-section');
  if (aboutImages && aboutSection) {
    let rafId = null;

    const runParallax = () => {
      const rect   = aboutSection.getBoundingClientRect();
      const viewH  = window.innerHeight;

      // Only calculate when section is anywhere near the viewport
      if (rect.bottom > 0 && rect.top < viewH) {
        // progress: 0 = section top just entered, 1 = section bottom just left
        const progress  = 1 - rect.bottom / (viewH + rect.height);
        const maxLift   = 55;                          // max upward shift in px
        const translateY = -(progress * maxLift);      // negative = move up
        aboutImages.style.transform = `translateY(${translateY.toFixed(2)}px)`;
      }
      rafId = null;
    };

    window.addEventListener('scroll', () => {
      if (!rafId) rafId = requestAnimationFrame(runParallax);
    }, { passive: true });

    runParallax(); // set initial position on load
  }

  // ── TESTIMONIAL CAROUSEL ──
  document.querySelectorAll('.testimonials-track').forEach(track => {
    const carousel = track.querySelector('.testimonials-carousel');
    const dots     = track.parentElement.querySelectorAll('.t-dot');
    if (!carousel || !dots.length) return;

    const cards = carousel.querySelectorAll('.testimonial-card');
    const total = cards.length;
    let current = 0;
    let timer   = null;

    function goTo(idx) {
      current = (idx + total) % total;
      const card = cards[current];
      // Offset by 16px to match padding/gap
      carousel.style.transform = `translateX(${-card.offsetLeft + 16}px)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function startAuto() {
      if (timer) clearInterval(timer);
      timer = setInterval(() => goTo(current + 1), 5000);
    }

    function stopAuto() {
      if (timer) clearInterval(timer);
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        goTo(i);
        startAuto(); // Reset timer on manual click
      });
    });

    track.addEventListener('mouseenter', stopAuto);
    track.addEventListener('mouseleave', startAuto);

    // Initial state
    goTo(0);
    startAuto();
  });
  
  // ── GALLERY FILTER LOGIC ──
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (filterBtns.length && galleryItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons and add to clicked
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          
          if (filterValue === 'all' || filterValue === category) {
            item.classList.remove('hide');
            item.classList.add('show');
          } else {
            item.classList.remove('show');
            item.classList.add('hide');
          }
        });
      });
    });
  }


  // ── HERO SLIDE (dummy prev/next for visual effect) ──
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    const prevBtn = document.querySelector('.hero-arrow-prev');
    const nextBtn = document.querySelector('.hero-arrow-next');
    if (prevBtn) prevBtn.addEventListener('click', () => {
      heroBg.style.transform = 'scale(1.04)';
      setTimeout(() => heroBg.style.transform = '', 400);
    });
    if (nextBtn) nextBtn.addEventListener('click', () => {
      heroBg.style.transform = 'scale(1.04)';
      setTimeout(() => heroBg.style.transform = '', 400);
    });
  }

  // ── SMOOTH SCROLL for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
