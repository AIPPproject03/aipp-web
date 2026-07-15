(function () {
  // Global configurations & selectors
  const projectGrid = document.getElementById("project-grid");
  const filtersContainer = document.getElementById("project-filters");

  window.currentLang = localStorage.getItem("aipp-lang") || "id";

  // Initialize Page
  document.addEventListener("DOMContentLoaded", () => {
    // Intercept return-home clicks in iframe view
    if (window.self !== window.top) {
      document.querySelectorAll('a[href="../index.html"]').forEach(link => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          if (window.parent && window.parent.closeProjectsPortal) {
            window.parent.closeProjectsPortal();
          }
        });
      });
    }

    initLanguage();
    renderFilterChips();
    renderProjects("all");
    setupLightboxEvents();
    setupCustomCursor();
    observeReveals();
    setupBackgroundMusic();
  });

  // Language management
  function initLanguage() {
    updateLanguageButtons();
    translateStaticElements();
  }

  window.setLanguage = function (lang) {
    window.currentLang = lang;
    localStorage.setItem("aipp-lang", lang);
    updateLanguageButtons();
    translateStaticElements();
    
    // Re-render project filters & active project grids
    const activeChip = filtersContainer.querySelector(".filter-chip.active");
    const activeKey = activeChip ? activeChip.getAttribute("data-key") : "all";
    renderFilterChips();
    renderProjects(activeKey);
  };

  function updateLanguageButtons() {
    const btnId = document.getElementById("lang-id");
    const btnEn = document.getElementById("lang-en");
    if (btnId && btnEn) {
      if (window.currentLang === "id") {
        btnId.classList.add("bg-cyan-500/25", "text-cyan-300");
        btnId.classList.remove("text-white/60");
        btnEn.classList.remove("bg-cyan-500/25", "text-cyan-300");
        btnEn.classList.add("text-white/60");
      } else {
        btnEn.classList.add("bg-cyan-500/25", "text-cyan-300");
        btnEn.classList.remove("text-white/60");
        btnId.classList.remove("bg-cyan-500/25", "text-cyan-300");
        btnId.classList.add("text-white/60");
      }
    }
  }

  function translateStaticElements() {
    const isEn = window.currentLang === "en";
    document.querySelectorAll("[data-lang-id]").forEach((el) => {
      el.textContent = isEn ? el.getAttribute("data-lang-en") : el.getAttribute("data-lang-id");
    });
  }

  // Filter chips rendering
  function renderFilterChips() {
    const isEn = window.currentLang === "en";
    const activeChip = filtersContainer.querySelector(".filter-chip.active");
    const activeKey = activeChip ? activeChip.getAttribute("data-key") : "all";

    filtersContainer.innerHTML = window.portfolioProjectFilters
      .map(
        (filter) => `
          <button 
            type="button" 
            class="filter-chip font-pixel text-[8px] sm:text-[9.5px] uppercase tracking-widest px-4 py-2 border border-white/10 bg-slate-900/60 transition-all ${filter.key === activeKey ? 'active bg-cyan-500/15 border-cyan-400/80 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.15)]' : 'text-white/60 hover:text-white hover:border-white/20'}" 
            data-key="${filter.key}"
            onclick="window.onFilterClick('${filter.key}', this)"
          >
            ${isEn ? filter.labelEn : filter.labelId}
          </button>
        `,
      )
      .join("");
  }

  window.onFilterClick = function (key, buttonEl) {
    // Set active state
    filtersContainer.querySelectorAll(".filter-chip").forEach((btn) => {
      btn.classList.remove("active", "bg-cyan-500/15", "border-cyan-400/80", "text-cyan-300", "shadow-[0_0_12px_rgba(6,182,212,0.15)]");
      btn.classList.add("text-white/60", "hover:text-white", "hover:border-white/20");
    });

    buttonEl.classList.add("active", "bg-cyan-500/15", "border-cyan-400/80", "text-cyan-300", "shadow-[0_0_12px_rgba(6,182,212,0.15)]");
    buttonEl.classList.remove("text-white/60", "hover:text-white", "hover:border-white/20");

    renderProjects(key);
  };

  // Projects rendering
  function renderProjects(activeKey = "all") {
    const cards = projectGrid.querySelectorAll(".project-card");
    if (cards.length > 0 && window.gsap) {
      window.gsap.to(cards, {
        opacity: 0,
        scale: 0.95,
        y: -15,
        duration: 0.25,
        stagger: 0.03,
        ease: "power2.in",
        onComplete: () => {
          executeRenderProjects(activeKey);
        }
      });
    } else {
      executeRenderProjects(activeKey);
    }
  }

  function executeRenderProjects(activeKey) {
    const isEn = window.currentLang === "en";
    const visibleProjects =
      activeKey === "all"
        ? window.portfolioProjects
        : window.portfolioProjects.filter((project) => project.category === activeKey);

    if (!visibleProjects.length) {
      projectGrid.innerHTML = `
        <div class="glass-panel p-8 text-white/70 lg:col-span-2 text-center font-mono text-xs">
          ${isEn ? "No projects match this filter." : "Tidak ada proyek yang sesuai dengan filter ini."}
        </div>
      `;
      return;
    }

    projectGrid.innerHTML = visibleProjects
      .map(
        (project) => `
          <article class="project-card reveal pixel-border-double" style="transform-style: preserve-3d; perspective: 1000px; background: rgba(15, 23, 42, 0.85);">
            <!-- High Tech Retro Grid & Overlay -->
            <div class="relative z-10 space-y-5">
              ${project.images && project.images.length > 0 ? `
                <!-- Project storytelling photo slider -->
                <div class="project-carousel relative overflow-hidden rounded-none w-full h-[220px] mb-5 bg-slate-950/60 border-b border-white/10 group-carousel">
                  <div class="project-slides flex transition-transform duration-500 w-full h-full" id="slides-${project.id}">
                    ${project.images.map(img => {
                      const isVid = img.toLowerCase().endsWith('.mp4');
                      return `
                      <div class="w-full h-full flex-shrink-0 relative cursor-zoom-in group">
                        ${isVid ? `
                          <video src="${img}" class="w-full h-full object-cover select-none" autoplay loop muted playsinline onclick="window.openLightbox('${img}', '${isEn ? project.labelEn : project.labelId} - ${project.title}', '${project.id}')"></video>
                        ` : `
                          <img src="${img}" alt="${project.title}" class="w-full h-full object-cover select-none transition-transform duration-[600ms] group-hover:scale-[1.02]" onclick="window.openLightbox('${img}', '${isEn ? project.labelEn : project.labelId} - ${project.title}', '${project.id}')">
                        `}
                        <div class="absolute bottom-3 left-3 bg-slateInk/85 backdrop-blur-md border border-cyan-400/25 px-2 py-0.5 rounded-none text-[6.5px] sm:text-[7.5px] font-pixel text-cyan-300 uppercase tracking-widest pointer-events-none z-10">
                          DIAGNOSTIC: SECURE
                        </div>
                      </div>
                      `;
                    }).join('')}
                  </div>
                  ${project.images.length > 1 ? `
                    <button type="button" class="carousel-nav prev-btn absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-none bg-slate-950/80 hover:bg-slate-900 border border-white/10 flex items-center justify-center text-white/90 z-20" onclick="window.moveSlide('${project.id}', -1, event)">
                      <iconify-icon icon="mdi:chevron-left" class="text-base"></iconify-icon>
                    </button>
                    <button type="button" class="carousel-nav next-btn absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-none bg-slate-950/80 hover:bg-slate-900 border border-white/10 flex items-center justify-center text-white/90 z-20" onclick="window.moveSlide('${project.id}', 1, event)">
                      <iconify-icon icon="mdi:chevron-right" class="text-base"></iconify-icon>
                    </button>
                    <div class="carousel-dots absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                      ${project.images.map((_, idx) => `
                        <span class="carousel-dot w-1.5 h-1.5 rounded-none bg-white/20 transition-all duration-300 ${idx === 0 ? 'bg-cyan-400 w-3.5' : ''}" onclick="window.setSlide('${project.id}', ${idx}, event)"></span>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              ` : ''}
              
              <div class="flex flex-wrap items-center gap-3">
                <span class="tag-pill font-pixel text-[8px] uppercase tracking-wider">${isEn ? project.labelEn : project.labelId}</span>
                <span class="tag-pill tag-pill-accent font-pixel text-[8px] uppercase tracking-wider">${project.title}</span>
              </div>
              <h3 class="project-title font-pixel text-lg text-white uppercase tracking-wider">${project.title}</h3>
              <p class="project-copy font-mono text-xs leading-relaxed text-white/70">${isEn ? project.descriptionEn : project.descriptionId}</p>
              <div class="flex flex-wrap gap-2">
                ${project.stack.map((item) => `<span class="project-chip font-mono text-[9px]">${item}</span>`).join("")}
              </div>
              <div class="flex flex-wrap gap-2">
                ${project.meta.map((item) => `<span class="project-chip project-chip-accent font-mono text-[9px]">${item}</span>`).join("")}
              </div>
              
              ${(project.story || project.github || project.demo) ? `
                <!-- Project action buttons footer -->
                <div class="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 text-left">
                  ${project.story ? `
                    <button type="button" class="flex items-center gap-1.5 text-[9px] sm:text-xs font-bold text-cyan-300 hover:text-cyan-200 transition-colors uppercase tracking-widest cursor-pointer font-pixel" onclick="window.toggleProjectStory('${project.id}', event)">
                      <iconify-icon icon="mdi:book-open-outline" class="text-xs sm:text-sm animate-pulse" id="story-icon-${project.id}"></iconify-icon>
                      <span id="story-text-${project.id}">${isEn ? "Read Project Story" : "Baca Cerita Proyek"}</span>
                    </button>
                  ` : '<div></div>'}
                  
                  <div class="flex flex-wrap items-center gap-3 sm:gap-4 justify-start sm:justify-end">
                    ${project.demo ? `
                      <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-[9px] sm:text-xs font-bold text-cyan-300 hover:text-cyan-200 transition-colors uppercase tracking-widest group/demo-link font-pixel" onclick="event.stopPropagation()">
                        <iconify-icon icon="mdi:web" class="text-xs sm:text-base group-hover/demo-link:scale-110 transition-transform duration-300"></iconify-icon>
                        <span>${isEn ? "Live Demo" : "Kunjungi"}</span>
                        <iconify-icon icon="mdi:arrow-top-right" class="text-[8px] sm:text-[10px] text-cyan-300/40 group-hover/demo-link:translate-x-0.5 group-hover/demo-link:-translate-y-0.5 transition-transform duration-300"></iconify-icon>
                      </a>
                    ` : ''}
                    
                    ${project.github ? `
                      <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-[9px] sm:text-xs font-bold text-white/80 hover:text-white transition-colors uppercase tracking-widest group/git-link font-pixel" onclick="event.stopPropagation()">
                        <iconify-icon icon="mdi:github" class="text-xs sm:text-base group-hover/git-link:rotate-12 transition-transform duration-300"></iconify-icon>
                        <span>${isEn ? "Repository" : "Repositori"}</span>
                        <iconify-icon icon="mdi:arrow-top-right" class="text-[8px] sm:text-[10px] text-white/40 group-hover/git-link:translate-x-0.5 group-hover/git-link:-translate-y-0.5 transition-transform duration-300"></iconify-icon>
                      </a>
                    ` : ''}
                  </div>
                </div>
                
                ${project.story ? `
                  <div id="story-content-${project.id}" class="mt-4 hidden overflow-hidden text-xs leading-6 text-white/70 space-y-4 font-normal">
                    <div class="rounded-none bg-white/5 border border-white/5 p-3.5 space-y-3.5 backdrop-blur-md">
                      <div>
                        <p class="font-bold text-cyan-200 uppercase tracking-widest text-[9px] mb-1 font-pixel">${isEn ? "Background" : "Latar Belakang"}</p>
                        <p class="text-white/60 leading-relaxed text-left sm:text-justify font-mono">${isEn ? project.story.backgroundEn : project.story.backgroundId}</p>
                      </div>
                      <div>
                        <p class="font-bold text-cyan-200 uppercase tracking-widest text-[9px] mb-1 font-pixel">${isEn ? "Key Objectives" : "Tujuan Utama"}</p>
                        <ul class="list-disc list-inside space-y-1.5 text-white/60 leading-relaxed text-left sm:text-justify pl-1 font-mono">
                          ${(isEn ? project.story.objectivesEn : project.story.objectivesId).map(obj => `<li>${obj}</li>`).join('')}
                        </ul>
                      </div>
                      <div>
                        <p class="font-bold text-cyan-200 uppercase tracking-widest text-[9px] mb-1 font-pixel">${isEn ? "Key Features" : "Fitur Utama"}</p>
                        <ul class="list-disc list-inside space-y-1.5 text-white/60 leading-relaxed text-left sm:text-justify pl-1 font-mono">
                          ${(isEn ? project.story.featuresEn : project.story.featuresId).map(feat => `<li>${feat}</li>`).join('')}
                        </ul>
                      </div>
                    </div>
                  </div>
                ` : ''}
              ` : ''}
            </div>
          </article>
        `,
      )
      .join("");

    if (window.gsap) {
      const newCards = projectGrid.querySelectorAll(".project-card");
      window.gsap.fromTo(
        newCards,
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.06,
          ease: "power3.out",
          clearProps: "transform,opacity"
        }
      );
    }

    setupCardTilt();
    observeReveals();
  }

  // Interactive Card Tilt Effect
  function setupCardTilt() {
    if (!window.gsap || !window.matchMedia("(pointer: fine)").matches) return;

    document.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const bounds = card.getBoundingClientRect();
        const mouseX = e.clientX - bounds.left;
        const mouseY = e.clientY - bounds.top;
        
        const xPercent = (mouseX / bounds.width - 0.5) * 15;
        const yPercent = (mouseY / bounds.height - 0.5) * -15;

        window.gsap.to(card, {
          rotateY: xPercent,
          rotateX: yPercent,
          transformPerspective: 1000,
          ease: "power1.out",
          duration: 0.3,
          overwrite: "auto",
        });
      });

      card.addEventListener("mouseleave", () => {
        window.gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          transformPerspective: 1000,
          ease: "power2.out",
          duration: 0.45,
          overwrite: "auto",
        });
      });
    });
  }

  // Story detail toggle panel
  window.toggleProjectStory = function (projectId, event) {
    if (event) event.stopPropagation();
    const content = document.getElementById(`story-content-${projectId}`);
    const icon = document.getElementById(`story-icon-${projectId}`);
    const text = document.getElementById(`story-text-${projectId}`);

    if (!content) return;

    const isHidden = content.classList.contains("hidden");
    const isEn = window.currentLang === "en";

    if (isHidden && window.gsap) {
      content.classList.remove("hidden");
      window.gsap.fromTo(content,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.45, ease: "power2.out" }
      );
      if (icon) {
        icon.setAttribute("icon", "mdi:book-open-page-variant-outline");
        icon.classList.remove("animate-pulse");
      }
      if (text) text.textContent = isEn ? "Hide Project Story" : "Sembunyikan Cerita";
    } else if (window.gsap) {
      window.gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          content.classList.add("hidden");
        }
      });
      if (icon) {
        icon.setAttribute("icon", "mdi:book-open-outline");
        icon.classList.add("animate-pulse");
      }
      if (text) text.textContent = isEn ? "Read Project Story" : "Baca Cerita Proyek";
    } else {
      content.classList.toggle("hidden");
    }
  };

  // Carousel dot/sliders controls
  const projectSlideIndices = {};

  window.moveSlide = function (projectId, direction, event) {
    if (event) event.stopPropagation();
    const proj = window.portfolioProjects.find(p => p.id === projectId);
    if (!proj || !proj.images) return;

    if (projectSlideIndices[projectId] === undefined) {
      projectSlideIndices[projectId] = 0;
    }

    let newIdx = projectSlideIndices[projectId] + direction;
    if (newIdx < 0) newIdx = proj.images.length - 1;
    if (newIdx >= proj.images.length) newIdx = 0;

    window.setSlide(projectId, newIdx);
  };

  window.setSlide = function (projectId, index, event) {
    if (event) event.stopPropagation();
    projectSlideIndices[projectId] = index;

    const slidesContainer = document.getElementById(`slides-${projectId}`);
    if (slidesContainer) {
      slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    const dotsContainer = slidesContainer.closest(".project-carousel")?.querySelector(".carousel-dots");
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll(".carousel-dot");
      dots.forEach((dot, idx) => {
        if (idx === index) {
          dot.classList.add("bg-cyan-400", "w-3.5");
          dot.classList.remove("bg-white/20");
        } else {
          dot.classList.remove("bg-cyan-400", "w-3.5");
          dot.classList.add("bg-white/20");
        }
      });
    }
  };

  // Lightbox Systems
  let activeLightboxImages = [];
  let activeLightboxIndex = 0;

  window.openLightbox = function (imageSrc, caption, projectId) {
    const lightboxModal = document.getElementById("lightbox-modal");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxVideo = document.getElementById("lightbox-video");
    const lightboxCaption = document.getElementById("lightbox-caption");

    if (!lightboxModal) return;

    const isVid = imageSrc.toLowerCase().endsWith('.mp4');

    if (isVid) {
      if (lightboxImg) lightboxImg.classList.add("hidden");
      if (lightboxVideo) {
        lightboxVideo.classList.remove("hidden");
        lightboxVideo.src = imageSrc;
        lightboxVideo.load();
        lightboxVideo.play().catch(err => console.log("Autoplay check:", err));
      }
    } else {
      if (lightboxVideo) {
        lightboxVideo.classList.add("hidden");
        lightboxVideo.src = "";
        lightboxVideo.load();
      }
      if (lightboxImg) {
        lightboxImg.classList.remove("hidden");
        lightboxImg.src = imageSrc;
      }
    }

    if (lightboxCaption) {
      lightboxCaption.textContent = caption;
    }

    if (projectId) {
      const proj = window.portfolioProjects.find(p => p.id === projectId);
      if (proj && proj.images) {
        activeLightboxImages = proj.images;
        activeLightboxIndex = proj.images.indexOf(imageSrc);

        const prevBtn = document.getElementById("lightbox-prev");
        const nextBtn = document.getElementById("lightbox-next");

        if (activeLightboxImages.length > 1) {
          if (prevBtn) prevBtn.classList.remove("hidden");
          if (nextBtn) nextBtn.classList.remove("hidden");
        } else {
          if (prevBtn) prevBtn.classList.add("hidden");
          if (nextBtn) nextBtn.classList.add("hidden");
        }
      }
    } else {
      activeLightboxImages = [];
      const prevBtn = document.getElementById("lightbox-prev");
      const nextBtn = document.getElementById("lightbox-next");
      if (prevBtn) prevBtn.classList.add("hidden");
      if (nextBtn) nextBtn.classList.add("hidden");
    }

    lightboxModal.classList.remove("pointer-events-none");

    if (window.gsap) {
      window.gsap.to(lightboxModal, { opacity: 1, duration: 0.3, ease: "power2.out" });
      const targetEl = isVid ? lightboxVideo : lightboxImg;
      if (targetEl) {
        window.gsap.fromTo(targetEl, { scale: 0.94 }, { scale: 1, duration: 0.4, ease: "back.out(1.4)" });
      }
    } else {
      lightboxModal.style.opacity = "1";
    }
  };

  window.closeLightbox = function () {
    const lightboxModal = document.getElementById("lightbox-modal");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxVideo = document.getElementById("lightbox-video");
    if (!lightboxModal) return;

    if (window.gsap) {
      window.gsap.to(lightboxModal, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          lightboxModal.classList.add("pointer-events-none");
          if (lightboxImg) lightboxImg.src = "";
          if (lightboxVideo) {
            lightboxVideo.src = "";
            lightboxVideo.load();
          }
        }
      });
    } else {
      lightboxModal.classList.add("pointer-events-none");
      lightboxModal.style.opacity = "0";
      if (lightboxImg) lightboxImg.src = "";
      if (lightboxVideo) {
        lightboxVideo.src = "";
        lightboxVideo.load();
      }
    }
  };

  function setupLightboxEvents() {
    const closeBtn = document.getElementById("lightbox-close");
    const modal = document.getElementById("lightbox-modal");
    const prevBtn = document.getElementById("lightbox-prev");
    const nextBtn = document.getElementById("lightbox-next");

    if (closeBtn) closeBtn.addEventListener("click", window.closeLightbox);
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) window.closeLightbox();
      });
    }

    const switchImage = (direction) => {
      if (!activeLightboxImages.length) return;
      activeLightboxIndex += direction;
      if (activeLightboxIndex < 0) activeLightboxIndex = activeLightboxImages.length - 1;
      if (activeLightboxIndex >= activeLightboxImages.length) activeLightboxIndex = 0;

      const newSrc = activeLightboxImages[activeLightboxIndex];
      const lightboxImg = document.getElementById("lightbox-img");
      const lightboxVideo = document.getElementById("lightbox-video");

      const isVid = newSrc.toLowerCase().endsWith('.mp4');

      if (isVid) {
        if (lightboxImg) lightboxImg.classList.add("hidden");
        if (lightboxVideo) {
          lightboxVideo.classList.remove("hidden");
          lightboxVideo.src = newSrc;
          lightboxVideo.load();
          lightboxVideo.play().catch(err => console.log("Autoplay check:", err));
          if (window.gsap) {
            window.gsap.fromTo(lightboxVideo, { opacity: 0.6, scale: 0.97 }, { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" });
          }
        }
      } else {
        if (lightboxVideo) {
          lightboxVideo.classList.add("hidden");
          lightboxVideo.src = "";
          lightboxVideo.load();
        }
        if (lightboxImg) {
          lightboxImg.classList.remove("hidden");
          lightboxImg.src = newSrc;
          if (window.gsap) {
            window.gsap.fromTo(lightboxImg, { opacity: 0.6, scale: 0.97 }, { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" });
          }
        }
      }
    };

    if (prevBtn) prevBtn.addEventListener("click", (e) => { e.stopPropagation(); switchImage(-1); });
    if (nextBtn) nextBtn.addEventListener("click", (e) => { e.stopPropagation(); switchImage(1); });

    document.addEventListener("keydown", (e) => {
      if (modal && !modal.classList.contains("pointer-events-none")) {
        if (e.key === "Escape") window.closeLightbox();
        if (e.key === "ArrowLeft") switchImage(-1);
        if (e.key === "ArrowRight") switchImage(1);
      }
    });
  }

  // Custom cursor movement logic
  function setupCustomCursor() {
    if (!window.gsap || !window.matchMedia("(pointer: fine)").matches) return;

    const cursor = document.querySelector(".custom-cursor");
    const cursorDot = document.querySelector(".custom-cursor-dot");
    const cursorGlow = document.querySelector(".cursor-glow");

    if (!cursor || !cursorDot) return;

    const hasGlow = !!cursorGlow;
    let moveGlowX, moveGlowY, glowFadeIn, glowFadeOut;
    
    if (hasGlow) {
      moveGlowX = window.gsap.quickTo(cursorGlow, "x", { duration: 0.45, ease: "power3.out" });
      moveGlowY = window.gsap.quickTo(cursorGlow, "y", { duration: 0.45, ease: "power3.out" });
      glowFadeIn = () => window.gsap.to(cursorGlow, { opacity: 1, duration: 0.2 });
      glowFadeOut = () => window.gsap.to(cursorGlow, { opacity: 0, duration: 0.35 });
    }

    const moveCursorX = window.gsap.quickTo(cursor, "x", { duration: 0.28, ease: "power3.out" });
    const moveCursorY = window.gsap.quickTo(cursor, "y", { duration: 0.28, ease: "power3.out" });
    const moveDotX = window.gsap.quickTo(cursorDot, "x", { duration: 0.08, ease: "power3.out" });
    const moveDotY = window.gsap.quickTo(cursorDot, "y", { duration: 0.08, ease: "power3.out" });

    window.gsap.set([cursor, cursorDot], { opacity: 0 });
    let cursorVisible = false;

    document.addEventListener("pointermove", (event) => {
      const { clientX, clientY } = event;

      if (hasGlow) {
        moveGlowX(clientX);
        moveGlowY(clientY);
        glowFadeIn();
      }

      moveCursorX(clientX);
      moveCursorY(clientY);
      moveDotX(clientX);
      moveDotY(clientY);

      if (!cursorVisible) {
        window.gsap.to([cursor, cursorDot], { opacity: 1, duration: 0.3 });
        cursorVisible = true;
      }
    });

    const onLeave = () => {
      if (hasGlow) glowFadeOut();
      window.gsap.to([cursor, cursorDot], { opacity: 0, duration: 0.35 });
      cursorVisible = false;
    };

    const onEnter = () => {
      window.gsap.to([cursor, cursorDot], { opacity: 1, duration: 0.25 });
      cursorVisible = true;
    };

    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("pointerenter", onEnter);
    document.addEventListener("mouseenter", onEnter);

    // Hover scales
    document.body.addEventListener("mouseover", (event) => {
      const target = event.target;
      if (!target) return;
      const hoverable = target.closest("a, button, .filter-chip, .project-card");
      if (hoverable) {
        cursor.classList.add("hovered");
      }
    });

    document.body.addEventListener("mouseout", (event) => {
      const target = event.target;
      if (!target) return;
      const hoverable = target.closest("a, button, .filter-chip, .project-card");
      if (hoverable) {
        cursor.classList.remove("hovered");
      }
    });
  }

  function setupBackgroundMusic() {
    if (window.self !== window.top) {
      const musicContainer = document.getElementById("music-container");
      if (musicContainer) {
        musicContainer.style.display = "none";
      }
      return;
    }

    const musicContainer = document.getElementById("music-container");
    const musicToggle = document.getElementById("music-toggle");
    const musicEqualizer = document.getElementById("music-equalizer");
    const musicRobot = document.getElementById("music-robot");
    const playIcon = document.getElementById("music-play-icon");
    const bgMusic = document.getElementById("bg-music");

    if (!musicContainer || !musicToggle || !musicEqualizer || !musicRobot || !playIcon || !bgMusic) return;

    const bar1 = musicEqualizer.querySelector(".bar-1");
    const bar2 = musicEqualizer.querySelector(".bar-2");
    const bar3 = musicEqualizer.querySelector(".bar-3");
    const bar4 = musicEqualizer.querySelector(".bar-4");
    const bar5 = musicEqualizer.querySelector(".bar-5");
    const bar6 = musicEqualizer.querySelector(".bar-6");
    const bar7 = musicEqualizer.querySelector(".bar-7");
    const bar8 = musicEqualizer.querySelector(".bar-8");
    const bar9 = musicEqualizer.querySelector(".bar-9");
    const bar10 = musicEqualizer.querySelector(".bar-10");

    const speakerLightL = musicRobot.querySelector("#speaker-light-l");
    const speakerLightR = musicRobot.querySelector("#speaker-light-r");
    const eyeL = musicRobot.querySelector("#robot-eye-l");
    const eyeR = musicRobot.querySelector("#robot-eye-r");
    const antenna = musicRobot.querySelector("#robot-antenna");
    const robotHead = musicRobot.querySelector("#robot-head");
    const robotBody = musicRobot.querySelector("#robot-body");

    // Set comfortable low volume for ambient play
    bgMusic.volume = 0.22;

    let isPlaying = false;
    let audioCtx = null;
    let analyser = null;
    let dataArray = null;
    let visualizerActive = false;
    let animationFrameId = null;

    // Auto-gain and physics states
    let currentHeights = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
    let bandMaxes = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50]; // Running band maximums for sensitivity normalization
    let smoothBass = 0;
    let entryAnimationComplete = false;

    const initAudioVisualizer = () => {
      try {
        if (!window.audioCtx) {
          window.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        audioCtx = window.audioCtx;

        if (!window.audioAnalyser) {
          analyser = audioCtx.createAnalyser();
          analyser.fftSize = 256; // 128 frequency bins, giving much finer resolution for 10 bands
          window.audioAnalyser = analyser;
        } else {
          analyser = window.audioAnalyser;
        }

        if (!bgMusic.sourceNode) {
          const source = audioCtx.createMediaElementSource(bgMusic);
          source.connect(analyser);
          analyser.connect(audioCtx.destination);
          bgMusic.sourceNode = source;
        }

        dataArray = new Uint8Array(analyser.frequencyBinCount);
        visualizerActive = true;
        musicContainer.classList.add("js-visualizer");
      } catch (e) {
        console.warn("Web Audio API visualizer failed to initialize. Falling back to CSS animation.", e);
        visualizerActive = false;
        musicContainer.classList.remove("js-visualizer");
      }
    };

    const updateVisualizer = () => {
      if (!isPlaying) return;

      if (visualizerActive && analyser && dataArray) {
        analyser.getByteFrequencyData(dataArray);

        // 10-Band detailed mapping using 128 bins (fftSize = 256)
        let b1 = (dataArray[0] + dataArray[1]) / 2; // Sub-bass
        let b2 = (dataArray[2] + dataArray[3]) / 2; // Bass
        let b3 = (dataArray[4] + dataArray[5]) / 2; // Low Mids
        let b4 = (dataArray[6] + dataArray[7] + dataArray[8]) / 3; // Mids
        let b5 = (dataArray[9] + dataArray[10] + dataArray[11]) / 3; // Mids-highs
        let b6 = (dataArray[12] + dataArray[13] + dataArray[14] + dataArray[15]) / 4; // High-mids
        let b7 = 0; // Highs
        for (let i = 16; i <= 21; i++) b7 += dataArray[i];
        b7 /= 6;
        let b8 = 0; // High presence
        for (let i = 22; i <= 28; i++) b8 += dataArray[i];
        b8 /= 7;
        let b9 = 0; // Treble
        for (let i = 29; i <= 37; i++) b9 += dataArray[i];
        b9 /= 9;
        let b10 = 0; // Very high presence
        for (let i = 38; i <= 50; i++) b10 += dataArray[i];
        b10 /= 13;

        let rawBands = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10];
        let normBands = [];

        for (let i = 0; i < 10; i++) {
          // Slowly decay the running maximum to adapt to quieter parts, keeping a floor of 30 to prevent noise gain
          bandMaxes[i] = Math.max(bandMaxes[i] * 0.996, rawBands[i], 30);
          // Normalize current band amplitude against its dynamic peak
          normBands.push(Math.min(1.0, rawBands[i] / bandMaxes[i]));
        }

        // Apply Dual-Rate Physics Easing: Fast snap-up (Attack) and smooth drop-down (Decay)
        for (let i = 0; i < 10; i++) {
          let targetH = 3 + normBands[i] * 17; // Container h-5 is 20px, so heights range 3px to 20px
          if (targetH > currentHeights[i]) {
            // Snappy Attack
            currentHeights[i] += (targetH - currentHeights[i]) * 0.55;
          } else {
            // Smooth Decay
            currentHeights[i] += (targetH - currentHeights[i]) * 0.16;
          }
        }

        // Update equalizer heights
        if (bar1) bar1.style.height = `${currentHeights[0]}px`;
        if (bar2) bar2.style.height = `${currentHeights[1]}px`;
        if (bar3) bar3.style.height = `${currentHeights[2]}px`;
        if (bar4) bar4.style.height = `${currentHeights[3]}px`;
        if (bar5) bar5.style.height = `${currentHeights[4]}px`;
        if (bar6) bar6.style.height = `${currentHeights[5]}px`;
        if (bar7) bar7.style.height = `${currentHeights[6]}px`;
        if (bar8) bar8.style.height = `${currentHeights[7]}px`;
        if (bar9) bar9.style.height = `${currentHeights[8]}px`;
        if (bar10) bar10.style.height = `${currentHeights[9]}px`;

        // Calculate bass beat factor for pulsing (decays slower for smooth bobbing)
        const normBass = (normBands[0] + normBands[1]) / 2;
        smoothBass += (normBass - smoothBass) * 0.25;

        // Bob the head: shifts down on beat for a rhythmic nod
        if (robotHead) {
          const headY = smoothBass * 2.2;
          robotHead.style.transform = `translateY(${headY}px)`;
        }

        // Pulse the body: scale body slightly on beat
        if (robotBody) {
          const bodyScale = 1 + smoothBass * 0.08;
          robotBody.style.transform = `scale(${bodyScale})`;
        }

        // Apply overall translations and sways to the main robot element
        if (entryAnimationComplete) {
          // Robot jumps up to -10px, scales up to 1.16, sways to the rhythm
          const robotY = -smoothBass * 10;
          const robotScale = 1 + smoothBass * 0.16;
          const robotRotation = Math.sin(Date.now() * 0.008) * (smoothBass * 9);
          musicRobot.style.transform = `translateY(${robotY}px) scale(${robotScale}) rotate(${robotRotation}deg)`;
          musicRobot.style.opacity = "1";
        }

        // Flash Speaker lights color based on bass intensity (Cyan to vibrant Pink/Purple or Yellow)
        if (speakerLightL && speakerLightR) {
          const r = Math.round(34 + smoothBass * (236 - 34));
          const g = Math.round(211 + smoothBass * (72 - 211));
          const b = Math.round(238 + smoothBass * (153 - 238));
          const color = `rgb(${r}, ${g}, ${b})`;
          speakerLightL.setAttribute("fill", color);
          speakerLightR.setAttribute("fill", color);
        }

        // Make Eyes glow brighter and slightly larger on beat
        if (eyeL && eyeR) {
          const r = Math.round(34 + smoothBass * (255 - 34));
          const g = Math.round(211 + smoothBass * (255 - 211));
          const b = Math.round(238 + smoothBass * (255 - 238));
          const color = `rgb(${r}, ${g}, ${b})`;
          eyeL.setAttribute("fill", color);
          eyeR.setAttribute("fill", color);
          
          // Apply widening scale to the eyes
          const eyeScaleY = 1 + smoothBass * 0.5;
          eyeL.style.transform = `scaleY(${eyeScaleY})`;
          eyeR.style.transform = `scaleY(${eyeScaleY})`;
        }

        // Sway Antenna dynamically based on beat
        if (antenna) {
          const swayAngle = Math.sin(Date.now() * 0.01) * (10 + smoothBass * 15);
          antenna.style.transform = `rotate(${swayAngle}deg)`;
        }

        // Pulse Music Toggle Button (Dramatic scale, bg shift, border glow, and outer shadow)
        if (musicToggle) {
          const glowRadius = 14 + smoothBass * 22;
          const glowOpacity = 0.3 + smoothBass * 0.65;
          // Pulse outer shadow and inner glow
          musicToggle.style.boxShadow = `0 0 ${glowRadius}px rgba(6, 182, 212, ${glowOpacity}), inset 0 0 ${8 + smoothBass * 10}px rgba(6, 182, 212, ${0.1 + smoothBass * 0.3})`;
          
          // Border color flashes bright white-cyan on beats
          const borderR = Math.round(34 + smoothBass * (255 - 34));
          const borderG = Math.round(211 + smoothBass * (255 - 211));
          const borderB = Math.round(238 + smoothBass * (255 - 238));
          musicToggle.style.borderColor = `rgb(${borderR}, ${borderG}, ${borderB})`;
          
          // Pulse transform (Smooth and highly dramatic scaling)
          musicToggle.style.transform = `scale(${1 + smoothBass * 0.14})`;

          // Shift background color to a nice cyan-blue under heavy bass
          const bgR = Math.round(15 + smoothBass * 25);
          const bgG = Math.round(23 + smoothBass * 55);
          const bgB = Math.round(42 + smoothBass * 110);
          const bgO = 0.85 - smoothBass * 0.2;
          musicToggle.style.backgroundColor = `rgba(${bgR}, ${bgG}, ${bgB}, ${bgO})`;
        }
      }

      animationFrameId = requestAnimationFrame(updateVisualizer);
    };

    const startVisualizer = () => {
      initAudioVisualizer();
      
      // Bypass animation lag on the button
      musicToggle.style.transition = "border-color 0.15s ease, opacity 0.3s ease, background-color 0.35s ease";
      
      if (visualizerActive && audioCtx && audioCtx.state === "suspended") {
        audioCtx.resume();
      }
      
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(updateVisualizer);
    };

    const resetVisuals = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }

      // Reset heights
      if (bar1) bar1.style.height = "3px";
      if (bar2) bar2.style.height = "3px";
      if (bar3) bar3.style.height = "3px";
      if (bar4) bar4.style.height = "3px";
      if (bar5) bar5.style.height = "3px";
      if (bar6) bar6.style.height = "3px";
      if (bar7) bar7.style.height = "3px";
      if (bar8) bar8.style.height = "3px";
      if (bar9) bar9.style.height = "3px";
      if (bar10) bar10.style.height = "3px";

      // Reset robot components transform
      musicRobot.style.transform = "";
      if (robotHead) robotHead.style.transform = "";
      if (robotBody) robotBody.style.transform = "";
      
      // Reset speakers and eyes fill color
      if (speakerLightL && speakerLightR) {
        speakerLightL.setAttribute("fill", "#22d3ee");
        speakerLightR.setAttribute("fill", "#22d3ee");
      }
      if (eyeL && eyeR) {
        eyeL.setAttribute("fill", "#22d3ee");
        eyeR.setAttribute("fill", "#22d3ee");
        eyeL.style.transform = "";
        eyeR.style.transform = "";
      }

      // Reset antenna
      if (antenna) {
        antenna.style.transform = "";
      }

      // Reset button glow & scale
      if (musicToggle) {
        musicToggle.style.boxShadow = "";
        musicToggle.style.borderColor = "";
        musicToggle.style.transform = "";
        musicToggle.style.transition = "";
        musicToggle.style.backgroundColor = "";
      }

      entryAnimationComplete = false;
      smoothBass = 0;
      currentHeights = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
    };

    const playMusic = () => {
      const savedTime = parseFloat(localStorage.getItem("aipp-music-time")) || 0;
      bgMusic.currentTime = savedTime;

      bgMusic.play().then(() => {
        isPlaying = true;
        musicContainer.classList.add("playing");
        musicContainer.classList.add("eq-active");

        startVisualizer();

        const gsapInstance = window.gsap || gsap;
        if (gsapInstance) {
          const tl = gsapInstance.timeline();
          gsapInstance.killTweensOf([musicToggle, musicRobot]);
          musicRobot.classList.remove("playing-robot");

          // Squish capsule
          tl.to(musicToggle, {
            scaleY: 0.72,
            scaleX: 1.28,
            duration: 0.15,
            ease: "power1.out"
          })
            // Bounce capsule back to normal
            .to(musicToggle, {
              scaleY: 1,
              scaleX: 1,
              duration: 0.35,
              ease: "elastic.out(1.2, 0.4)"
            }, "+=0.04")
            // Launch robot upward with spin rotation
            .fromTo(musicRobot,
              { opacity: 0, y: 35, scale: 0.4, rotation: -12, pointerEvents: "none" },
              {
                opacity: 1,
                y: -14,
                scale: 1.1,
                rotation: 8,
                pointerEvents: "auto",
                duration: 0.35,
                ease: "power2.out"
              },
              "<"
            )
            // Settle robot down to dancing state
            .to(musicRobot, {
              y: 0,
              scale: 1,
              rotation: 0,
              duration: 0.42,
              ease: "back.out(2.2)",
              onComplete: () => {
                if (isPlaying) {
                  entryAnimationComplete = true;
                }
              }
            });

          // Icon toggle
          gsapInstance.to(playIcon, { scale: 0, opacity: 0, duration: 0.25 });
        }

        localStorage.setItem("aipp-music-enabled", "true");
      }).catch((err) => {
        console.log("Autoplay blocked by browser policy, waiting for interaction:", err);
      });
    };

    const pauseMusic = () => {
      bgMusic.pause();
      bgMusic.currentTime = 0;
      localStorage.setItem("aipp-music-time", "0");
      isPlaying = false;
      musicContainer.classList.remove("playing");
      musicContainer.classList.remove("eq-active");
      musicRobot.classList.remove("playing-robot");
      musicContainer.classList.remove("js-visualizer");

      musicEqualizer.style.pointerEvents = "none";

      resetVisuals();

      const gsapInstance = window.gsap || gsap;
      if (gsapInstance) {
        gsapInstance.killTweensOf([musicToggle, musicRobot]);
        const tl = gsapInstance.timeline();

        // Robot anticipation hop
        tl.to(musicRobot, {
          y: -6,
          scaleY: 1.15,
          scaleX: 0.88,
          rotation: -6,
          duration: 0.15,
          ease: "power1.out"
        })
          // Dive back inside
          .to(musicRobot, {
            opacity: 0,
            y: 35,
            scale: 0.4,
            rotation: 12,
            pointerEvents: "none",
            duration: 0.4,
            ease: "power2.in"
          })
          // Squish the capsule when the robot lands inside
          .to(musicToggle, {
            scaleY: 0.78,
            scaleX: 1.22,
            duration: 0.12,
            ease: "power1.out"
          }, "-=0.15")
          // Rebound back to normal
          .to(musicToggle, {
            scaleY: 1,
            scaleX: 1,
            duration: 0.35,
            ease: "elastic.out(1.2, 0.4)"
          });

        // Icon toggle
        gsapInstance.to(playIcon, { scale: 1, opacity: 1, duration: 0.25 });
      }

      localStorage.setItem("aipp-music-enabled", "false");
    };

    musicToggle.addEventListener("click", () => {
      if (isPlaying) {
        pauseMusic();
      } else {
        playMusic();
      }
    });

    bgMusic.addEventListener("timeupdate", () => {
      if (isPlaying) {
        localStorage.setItem("aipp-music-time", bgMusic.currentTime);
      }
    });

    // Autoplay bypass on first user interaction if previously enabled
    const isEnabledBefore = localStorage.getItem("aipp-music-enabled");
    if (isEnabledBefore === "true") {
      const handleFirstInteraction = () => {
        playMusic();
        document.removeEventListener("click", handleFirstInteraction);
        document.removeEventListener("touchstart", handleFirstInteraction);
        document.removeEventListener("scroll", handleFirstInteraction);
      };
      document.addEventListener("click", handleFirstInteraction);
      document.addEventListener("touchstart", handleFirstInteraction);
      document.addEventListener("scroll", handleFirstInteraction);
    }
  }

  let revealObserver;
  function observeReveals() {
    if (revealObserver) {
      revealObserver.disconnect();
    }

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    document
      .querySelectorAll(".reveal")
      .forEach((node) => revealObserver.observe(node));
  }
})();
