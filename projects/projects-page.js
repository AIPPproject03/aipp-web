/**
 * AIPP PROTOCOL — PROJECTS ARCHIVE CONTROLLER
 * Agustinus Irwin Putra Pangesti
 * Clean Liquid Glass • Multi-Language • Web Audio Companion • Media Lightbox
 */

(function () {
  'use strict';

  const limitedDevice = Boolean(
    navigator.connection?.saveData ||
    (navigator.deviceMemory && navigator.deviceMemory <= 4) ||
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)
  );
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const richMotion = !limitedDevice && !reducedMotion;

  const projectGrid = document.getElementById("project-grid");
  const filtersContainer = document.getElementById("project-filters");

  window.currentLang = localStorage.getItem("aipp-lang") || "id";

  document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
    renderFilterChips();
    renderProjects("all");
    setupLightboxEvents();
    setupCustomCursor();
    setupBackgroundMusic();

    const yearEl = document.getElementById("current-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });

  function initLanguage() {
    updateLanguageButtons();
    translateStaticElements();
  }

  window.setLanguage = function (lang) {
    window.currentLang = lang;
    localStorage.setItem("aipp-lang", lang);
    updateLanguageButtons();
    translateStaticElements();

    const activeChip = filtersContainer.querySelector(".skill-tab-btn.active");
    const activeKey = activeChip ? activeChip.getAttribute("data-key") : "all";
    renderFilterChips();
    renderProjects(activeKey);
  };

  function updateLanguageButtons() {
    const btnId = document.getElementById("lang-id");
    const btnEn = document.getElementById("lang-en");
    if (btnId && btnEn) {
      if (window.currentLang === "id") {
        btnId.classList.add("active");
        btnEn.classList.remove("active");
      } else {
        btnEn.classList.add("active");
        btnId.classList.remove("active");
      }
    }
  }

  function translateStaticElements() {
    const isEn = window.currentLang === "en";
    document.querySelectorAll("[data-lang-id]").forEach((el) => {
      const text = isEn ? el.getAttribute("data-lang-en") : el.getAttribute("data-lang-id");
      if (text) el.innerHTML = text;
    });
  }

  function renderFilterChips() {
    const isEn = window.currentLang === "en";
    const activeChip = filtersContainer.querySelector(".skill-tab-btn.active");
    const activeKey = activeChip ? activeChip.getAttribute("data-key") : "all";

    filtersContainer.innerHTML = window.portfolioProjectFilters
      .map(
        (filter) => `
          <button 
            type="button" 
            class="skill-tab-btn ${filter.key === activeKey ? 'active' : ''}" 
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
    filtersContainer.querySelectorAll(".skill-tab-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    buttonEl.classList.add("active");
    renderProjects(key);
  };

  function renderProjects(activeKey = "all") {
    const cards = projectGrid.querySelectorAll(".liquid-glass-card");
    if (cards.length > 0 && window.gsap && richMotion) {
      window.gsap.to(cards, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        stagger: 0.02,
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
        <div class="liquid-glass-card p-12 text-white/60 lg:col-span-2 text-center font-mono text-sm">
          ${isEn ? "No projects match this filter." : "Tidak ada proyek yang sesuai dengan filter ini."}
        </div>
      `;
      return;
    }

    projectGrid.innerHTML = visibleProjects
      .map(
        (project) => `
          <article class="liquid-glass-card p-6 sm:p-8 flex flex-col justify-between" id="card-${project.id}">
            <div class="space-y-5">
              ${project.images && project.images.length > 0 ? `
                <div class="project-carousel relative overflow-hidden rounded-2xl w-full h-[240px] sm:h-[280px] bg-[#090C10] border border-white/10 group-carousel">
                  <div class="project-slides flex transition-transform duration-500 w-full h-full" id="slides-${project.id}">
                    ${project.images.map(img => {
                      const isVid = img.toLowerCase().endsWith('.mp4');
                      return `
                      <div class="w-full h-full flex-shrink-0 relative cursor-zoom-in group">
                        ${isVid ? `
                          <div class="w-full h-full flex items-center justify-center bg-[#07090E] p-2">
                            <video src="${img}" class="h-full w-auto max-h-[260px] aspect-[372/810] object-contain rounded-xl select-none shadow-2xl border border-white/10" preload="auto" poster="../img/DESATAMPA/website-desa-tampa-mobile-poster.webp" autoplay loop muted playsinline onclick="window.openLightbox('${img}', '${isEn ? project.labelEn : project.labelId} - ${project.title}', '${project.id}')"></video>
                          </div>
                        ` : `
                          <img src="${img}" alt="${project.title}" loading="lazy" class="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105" onclick="window.openLightbox('${img}', '${isEn ? project.labelEn : project.labelId} - ${project.title}', '${project.id}')">
                        `}
                        <div class="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full text-[10px] font-mono text-cyan-300 uppercase tracking-widest pointer-events-none">
                          ${isVid ? "Video Demo" : "Asset"}
                        </div>
                      </div>
                      `;
                    }).join('')}
                  </div>
                  ${project.images.length > 1 ? `
                    <button type="button" class="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 hover:bg-black/90 border border-white/10 flex items-center justify-center text-white z-20 transition-transform hover:scale-110" onclick="window.moveSlide('${project.id}', -1, event)" aria-label="Previous">
                      <iconify-icon icon="solar:alt-arrow-left-linear" class="text-base"></iconify-icon>
                    </button>
                    <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 hover:bg-black/90 border border-white/10 flex items-center justify-center text-white z-20 transition-transform hover:scale-110" onclick="window.moveSlide('${project.id}', 1, event)" aria-label="Next">
                      <iconify-icon icon="solar:alt-arrow-right-linear" class="text-base"></iconify-icon>
                    </button>
                    <div class="carousel-dots absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                      ${project.images.map((_, idx) => `
                        <span class="carousel-dot w-2 h-2 rounded-full bg-white/20 transition-all duration-300 ${idx === 0 ? 'bg-cyan-400 w-5' : ''}" onclick="window.setSlide('${project.id}', ${idx}, event)"></span>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              ` : ''}
              
              <div>
                <span class="font-mono text-xs uppercase tracking-widest text-cyan-300 block mb-1">
                  ${isEn ? project.labelEn : project.labelId}
                </span>
                <h3 class="text-2xl font-bold text-white">${project.title}</h3>
              </div>

              <p class="text-sm text-white/70 leading-relaxed">${isEn ? project.descriptionEn : project.descriptionId}</p>

              <!-- Stack Tags -->
              <div class="flex flex-wrap gap-1.5">
                ${project.stack ? project.stack.map((item) => `<span class="stack-tag">${item}</span>`).join("") : ""}
              </div>

              <!-- Meta Tags -->
              <div class="flex flex-wrap gap-1.5">
                ${project.meta ? project.meta.map((item) => `<span class="font-mono text-[11px] text-white/50 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5">${item}</span>`).join("") : ""}
              </div>
            </div>

            <!-- Story and Links Footer -->
            <div class="mt-6 pt-5 border-t border-white/5 space-y-4">
              <div class="flex items-center justify-between gap-3">
                ${project.story ? `
                  <button type="button" class="btn-ghost text-xs text-cyan-300 flex items-center gap-1.5 font-mono" onclick="window.toggleProjectStory('${project.id}', event)">
                    <iconify-icon icon="solar:document-text-linear" class="text-base" id="story-icon-${project.id}"></iconify-icon>
                    <span id="story-text-${project.id}">${isEn ? "Read Case Study" : "Baca Studi Kasus"}</span>
                  </button>
                ` : '<div></div>'}

                <div class="flex items-center gap-2">
                  ${project.github ? `
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-secondary text-xs py-1.5 px-3">
                      <iconify-icon icon="mdi:github" class="text-sm"></iconify-icon>
                      <span>Code</span>
                    </a>
                  ` : ''}
                  ${project.demo ? `
                    <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn-primary text-xs py-1.5 px-3">
                      <iconify-icon icon="solar:link-circle-linear" class="text-sm"></iconify-icon>
                      <span>Live</span>
                    </a>
                  ` : ''}
                </div>
              </div>

              <!-- Story Collapsible Drawer -->
              ${project.story ? `
                <div id="story-content-${project.id}" class="hidden overflow-hidden text-xs leading-relaxed text-white/75 space-y-4 pt-3 border-t border-white/5">
                  <div class="p-4 rounded-xl bg-white/5 border border-white/5 space-y-3">
                    <div>
                      <p class="font-mono font-bold text-cyan-300 uppercase tracking-widest text-[10px] mb-1">${isEn ? "Background" : "Latar Belakang"}</p>
                      <p class="text-white/70 leading-relaxed">${isEn ? project.story.backgroundEn : project.story.backgroundId}</p>
                    </div>
                    <div>
                      <p class="font-mono font-bold text-cyan-300 uppercase tracking-widest text-[10px] mb-1">${isEn ? "Key Objectives" : "Tujuan Utama"}</p>
                      <ul class="list-disc list-inside space-y-1 text-white/70 pl-1">
                        ${(isEn ? project.story.objectivesEn : project.story.objectivesId).map(obj => `<li>${obj}</li>`).join('')}
                      </ul>
                    </div>
                    <div>
                      <p class="font-mono font-bold text-cyan-300 uppercase tracking-widest text-[10px] mb-1">${isEn ? "Key Features" : "Fitur Utama"}</p>
                      <ul class="list-disc list-inside space-y-1 text-white/70 pl-1">
                        ${(isEn ? project.story.featuresEn : project.story.featuresId).map(feat => `<li>${feat}</li>`).join('')}
                      </ul>
                    </div>
                  </div>
                </div>
              ` : ''}
            </div>
          </article>
        `,
      )
      .join("");

    if (window.gsap && richMotion) {
      const newCards = projectGrid.querySelectorAll(".liquid-glass-card");
      window.gsap.fromTo(
        newCards,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.05,
          ease: "power3.out",
          clearProps: "transform,opacity"
        }
      );
    }
  }

  // Story toggle
  window.toggleProjectStory = function (projectId, event) {
    if (event) event.stopPropagation();
    const content = document.getElementById(`story-content-${projectId}`);
    const text = document.getElementById(`story-text-${projectId}`);
    if (!content) return;

    const isHidden = content.classList.contains("hidden");
    const isEn = window.currentLang === "en";

    if (isHidden) {
      content.classList.remove("hidden");
      if (text) text.textContent = isEn ? "Hide Case Study" : "Sembunyikan";
    } else {
      content.classList.add("hidden");
      if (text) text.textContent = isEn ? "Read Case Study" : "Baca Studi Kasus";
    }
  };

  // Carousel sliders
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

    const dotsContainer = slidesContainer?.closest(".project-carousel")?.querySelector(".carousel-dots");
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll(".carousel-dot");
      dots.forEach((dot, idx) => {
        if (idx === index) {
          dot.classList.add("bg-cyan-400", "w-5");
          dot.classList.remove("bg-white/20");
        } else {
          dot.classList.remove("bg-cyan-400", "w-5");
          dot.classList.add("bg-white/20");
        }
      });
    }
  };

  // Lightbox
  let activeLightboxImages = [];
  let activeLightboxIndex = 0;
  let preLightboxScrollY = 0;

  window.openLightbox = function (imageSrc, caption, projectId) {
    const modal = document.getElementById("lightbox-modal");
    const img = document.getElementById("lightbox-img");
    const vid = document.getElementById("lightbox-video");
    const cap = document.getElementById("lightbox-caption");
    if (!modal) return;

    preLightboxScrollY = window.scrollY || document.documentElement.scrollTop || 0;

    const isVid = imageSrc.toLowerCase().endsWith('.mp4');

    if (isVid) {
      if (img) img.classList.add("hidden");
      if (vid) {
        vid.classList.remove("hidden");
        vid.src = imageSrc;
        vid.load();
        vid.play().catch(e => console.log(e));
      }
    } else {
      if (vid) {
        vid.classList.add("hidden");
        vid.src = "";
      }
      if (img) {
        img.classList.remove("hidden");
        img.src = imageSrc;
      }
    }

    if (cap) cap.textContent = caption || "";

    if (projectId) {
      const proj = window.portfolioProjects.find(p => p.id === projectId);
      if (proj && proj.images) {
        activeLightboxImages = proj.images;
        activeLightboxIndex = proj.images.indexOf(imageSrc);
        if (activeLightboxIndex === -1) activeLightboxIndex = 0;

        const prevBtn = document.getElementById("lightbox-prev");
        const nextBtn = document.getElementById("lightbox-next");
        if (proj.images.length > 1) {
          if (prevBtn) prevBtn.classList.remove("hidden");
          if (nextBtn) nextBtn.classList.remove("hidden");
        } else {
          if (prevBtn) prevBtn.classList.add("hidden");
          if (nextBtn) nextBtn.classList.add("hidden");
        }
      }
    }

    modal.classList.add("open");
    modal.classList.remove("opacity-0", "pointer-events-none");
    document.documentElement.classList.add("modal-open");
    document.body.classList.add("modal-open");
  };

  window.closeLightbox = function () {
    const modal = document.getElementById("lightbox-modal");
    const vid = document.getElementById("lightbox-video");
    if (!modal) return;

    if (vid) {
      vid.pause();
      vid.src = "";
    }

    modal.classList.remove("open");
    modal.classList.add("opacity-0", "pointer-events-none");
    document.documentElement.classList.remove("modal-open");
    document.body.classList.remove("modal-open");
    window.scrollTo({ top: preLightboxScrollY, behavior: "instant" });
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

    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!activeLightboxImages.length) return;
        activeLightboxIndex = (activeLightboxIndex - 1 + activeLightboxImages.length) % activeLightboxImages.length;
        window.openLightbox(activeLightboxImages[activeLightboxIndex], document.getElementById("lightbox-caption").textContent);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!activeLightboxImages.length) return;
        activeLightboxIndex = (activeLightboxIndex + 1) % activeLightboxImages.length;
        window.openLightbox(activeLightboxImages[activeLightboxIndex], document.getElementById("lightbox-caption").textContent);
      });
    }

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") window.closeLightbox();
    });
  }

  // Custom Cursor
  function setupCustomCursor() {
    if (!window.matchMedia("(pointer: fine)").matches || window.innerWidth < 1024) return;

    const follower = document.querySelector(".custom-cursor-follower");
    const dot = document.querySelector(".custom-cursor-dot");
    if (!follower || !dot) return;

    let mouseX = -100, mouseY = -100, followerX = -100, followerY = -100;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      if (!follower.classList.contains("is-visible")) {
        follower.classList.add("is-visible");
        dot.classList.add("is-visible");
      }
    });

    const render = () => {
      followerX += (mouseX - followerX) * 0.18;
      followerY += (mouseY - followerY) * 0.18;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      requestAnimationFrame(render);
    };
    render();

    document.querySelectorAll("a, button, [role='button']").forEach((el) => {
      el.addEventListener("mouseenter", () => follower.classList.add("hovered"));
      el.addEventListener("mouseleave", () => follower.classList.remove("hovered"));
    });
  }

  // Audio Hub
  function setupBackgroundMusic() {
    const bgMusic = document.getElementById("bg-music");
    const toggle = document.getElementById("floating-audio-toggle");
    const statusLabel = document.getElementById("audio-status-label");
    const icon = document.getElementById("audio-toggle-icon");
    const robot = document.getElementById("robot-companion");
    const bars = document.querySelectorAll(".spectrum-bar");

    if (!bgMusic || !toggle) return;

    let isPlaying = false;
    let audioCtx = null;
    let analyser = null;
    let dataArray = null;
    let animFrame = null;

    bgMusic.volume = 0.25;

    const initAudio = () => {
      try {
        if (!window.audioCtx) {
          window.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        audioCtx = window.audioCtx;

        if (!window.audioAnalyser) {
          analyser = audioCtx.createAnalyser();
          analyser.fftSize = 64;
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
      } catch (e) {
        console.warn("Audio Context init:", e);
      }
    };

    const updateVisuals = () => {
      if (!isPlaying) return;

      if (analyser && dataArray) {
        analyser.getByteFrequencyData(dataArray);

        for (let i = 0; i < bars.length; i++) {
          const val = dataArray[i] || 0;
          bars[i].style.height = `${Math.max(3, (val / 255) * 18)}px`;
        }

        const bass = (dataArray[0] + dataArray[1]) / (2 * 255);
        if (robot && robot.classList.contains("active")) {
          robot.style.transform = `translateY(${-bass * 8}px)`;
        }
      }

      animFrame = requestAnimationFrame(updateVisuals);
    };

    const play = () => {
      initAudio();
      if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();

      bgMusic.play().then(() => {
        isPlaying = true;
        if (statusLabel) statusLabel.textContent = window.currentLang === "en" ? "PLAYING" : "MEMUTAR";
        if (icon) icon.setAttribute("icon", "solar:pause-bold");
        if (robot) robot.classList.add("active");

        cancelAnimationFrame(animFrame);
        animFrame = requestAnimationFrame(updateVisuals);
        localStorage.setItem("aipp-music-enabled", "true");
      }).catch(e => console.log(e));
    };

    const pause = () => {
      bgMusic.pause();
      isPlaying = false;
      if (statusLabel) statusLabel.textContent = "AUDIO OST";
      if (icon) icon.setAttribute("icon", "solar:play-bold");
      if (robot) robot.classList.remove("active");

      cancelAnimationFrame(animFrame);
      bars.forEach(b => { b.style.height = "3px"; });
      localStorage.setItem("aipp-music-enabled", "false");
    };

    toggle.addEventListener("click", () => {
      if (isPlaying) pause();
      else play();
    });

    if (localStorage.getItem("aipp-music-enabled") === "true") {
      const start = () => {
        play();
        window.removeEventListener("click", start);
        window.removeEventListener("scroll", start);
      };
      window.addEventListener("click", start, { once: true });
      window.addEventListener("scroll", start, { once: true });
    }
  }

})();
