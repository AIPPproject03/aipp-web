/**
 * AIPP PROTOCOL — CREATIVE ANIMATION & STORYTELLING ENGINE
 * Vanilla JS + GSAP 3.12.5 + ScrollTrigger
 * Mind • Muscle • Code Storytelling Arc
 */

(function () {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ==========================================================================
  // 1. GLOBAL SCROLL PROGRESS & SECTION TRACKER
  // ==========================================================================
  function initGlobalProgress() {
    const progressBar = document.getElementById('global-scroll-progress');
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    if (!progressBar || !gsap || !ScrollTrigger || reducedMotion) return;

    gsap.to(progressBar, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.15
      }
    });
  }

  // ==========================================================================
  // 2. HERO STORYTELLING & CHARACTER-BY-CHARACTER ENTRANCE
  // ==========================================================================
  function initHeroAnimations() {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap) return;

    const headline = document.getElementById('hero-headline');
    if (headline && !headline.dataset.splitDone) {
      const text = headline.textContent.trim();
      headline.innerHTML = '';
      headline.setAttribute('aria-label', text);

      // Split words and letters with preserved spacing
      const words = text.split(' ');
      words.forEach((word, wIdx) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'inline-block whitespace-nowrap';
        
        for (let char of word) {
          const charSpan = document.createElement('span');
          charSpan.className = 'hero-char inline-block';
          charSpan.textContent = char;
          wordSpan.appendChild(charSpan);
        }

        headline.appendChild(wordSpan);
        if (wIdx < words.length - 1) {
          headline.appendChild(document.createTextNode(' '));
        }
      });
      headline.dataset.splitDone = 'true';
    }

    if (reducedMotion) {
      // In reduced motion, ensure full visibility immediately
      gsap.set('.hero-char, .hero-kicker-badge, .hero-summary-text, .hero-action-buttons, .portrait-frame, .floating-telemetry-badge, .metric-pill', {
        opacity: 1,
        y: 0,
        rotateX: 0
      });
      const iqEl = document.querySelector('#metric-iq');
      const gpaEl = document.querySelector('#metric-gpa');
      const yearsEl = document.querySelector('#metric-athletic-count');
      if (iqEl) iqEl.textContent = 'IQ 121';
      if (gpaEl) gpaEl.textContent = '3.86/4.00';
      if (yearsEl) yearsEl.textContent = '6';
      return;
    }

    // Master Hero Entrance Timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Kicker entrance
    tl.fromTo('.hero-kicker-badge', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 })
      // Character-by-character letter wave
      .fromTo('.hero-char', {
        opacity: 0,
        y: 35,
        rotateX: -60,
        filter: 'blur(4px)'
      }, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: 'blur(0px)',
        duration: 0.7,
        stagger: 0.02,
        ease: 'back.out(1.5)'
      }, '-=0.2')
      // Role & summary reveal
      .fromTo('.hero-summary-text', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
      // Action buttons
      .fromTo('.hero-action-buttons', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.3')
      // Portrait frame with specular reveal
      .fromTo('.portrait-frame', { opacity: 0, scale: 0.94, y: 25 }, { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power2.out' }, '<')
      .fromTo('.portrait-glow-halo', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.2 }, '<')
      // Floating telemetry badges
      .fromTo('.floating-telemetry-badge', { opacity: 0, scale: 0.9, y: 10 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.12 }, '-=0.4')
      // Metric pills entrance
      .fromTo('.metric-pill', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, '-=0.3');

    // 3 Count-up Metric Counters
    if (ScrollTrigger) {
      const counters = [
        { el: document.querySelector('#metric-iq'), target: 121, template: 'IQ {val}', decimals: 0 },
        { el: document.querySelector('#metric-gpa'), target: 3.86, template: '{val}/4.00', decimals: 2 },
        { el: document.querySelector('#metric-athletic-count'), target: 6, template: '{val}', decimals: 0 }
      ];

      counters.forEach((item) => {
        if (!item.el) return;
        const countObj = { value: 0 };
        gsap.fromTo(countObj, { value: 0 }, {
          value: item.target,
          scrollTrigger: {
            trigger: item.el,
            start: 'top 95%',
            once: true
          },
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => {
            const formatted = item.decimals > 0 ? countObj.value.toFixed(item.decimals) : Math.round(countObj.value);
            item.el.textContent = item.template.replace('{val}', formatted);
          }
        });
      });
    }

    // Subtle 3D Mouse Parallax on Desktop
    setupHeroPortraitParallax();
  }

  function setupHeroPortraitParallax() {
    const hero = document.getElementById('hero');
    const portrait = document.querySelector('.portrait-frame');
    const halo = document.querySelector('.portrait-glow-halo');
    if (!hero || !portrait || reducedMotion) return;

    // Desktop Mouse Move Parallax
    if (window.matchMedia('(pointer: fine) and (min-width: 1024px)').matches) {
      hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

        window.gsap.to(portrait, {
          rotateY: mouseX * 12,
          rotateX: -mouseY * 10,
          x: mouseX * 16,
          y: mouseY * 12,
          duration: 0.8,
          ease: 'power2.out',
          transformPerspective: 1000
        });

        if (halo) {
          window.gsap.to(halo, {
            x: mouseX * 24,
            y: mouseY * 20,
            duration: 1.1,
            ease: 'power2.out'
          });
        }
      });

      hero.addEventListener('mouseleave', () => {
        window.gsap.to(portrait, {
          rotateY: 0,
          rotateX: 0,
          x: 0,
          y: 0,
          duration: 1.2,
          ease: 'power2.out'
        });
        if (halo) {
          window.gsap.to(halo, { x: 0, y: 0, duration: 1.4, ease: 'power2.out' });
        }
      });
    }

    // Mobile / Scroll Parallax
    if (window.ScrollTrigger && window.innerWidth < 1024) {
      window.gsap.to(portrait, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }

  // Expose to window for lifecycle initialization
  window.AippAnimations = {
    initGlobalProgress,
    initHeroAnimations
  };

})();
