/**
 * AIPP PROTOCOL — CORE DIGITAL EXPERIENCE ENGINE
 * Agustinus Irwin Putra Pangesti — Master Portfolio Architecture
 * Visual Identity • Liquid Glass • Web Audio API Spectrum • Case Study Engine
 */

(function () {
  'use strict';

  // 1. PERFORMANCE & DEVICE HEURISTICS
  const limitedDevice = Boolean(
    navigator.connection?.saveData ||
    (navigator.deviceMemory && navigator.deviceMemory <= 4) ||
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)
  );
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const richMotion = !reducedMotion && !limitedDevice;

  // 2. DATA ARCHITECTURE
  const foundation = [
    {
      titleId: "Inti Akademik",
      titleEn: "Academic Core",
      value: "S1 Informatika",
      noteId: "Universitas Palangka Raya • NIM 223020503162 • IPK 3.86/4.00",
      noteEn: "Universitas Palangka Raya • NIM 223020503162 • GPA 3.86/4.00",
      icon: "solar:diploma-outline"
    },
    {
      titleId: "Psikogram Bersertifikat",
      titleEn: "Certified Psychogram",
      value: "IQ 121",
      noteId: "Skala Wechsler • Kategori Superior",
      noteEn: "Wechsler Scale • Superior Category",
      icon: "solar:brain-outline"
    },
    {
      titleId: "Kekuatan Kognitif",
      titleEn: "Cognitive Strengths",
      valueId: "Adaptif & Analitis",
      valueEn: "Adaptive & Analytical",
      noteId: "Pemahaman konsep mendalam, konsistensi sikap, integritas, dan sinergi kelompok",
      noteEn: "High concept comprehension, attitude consistency, integrity, and team synergy",
      icon: "solar:chart-square-outline"
    },
    {
      titleId: "Etos Profil",
      titleEn: "Profile Ethos",
      valueId: "Membangun dengan Disiplin",
      valueEn: "Build with Discipline",
      noteId: "Eksekusi rekayasa perangkat lunak yang diperkuat oleh disiplin atletik kompetitif",
      noteEn: "Software engineering execution reinforced by competitive athletic discipline",
      icon: "solar:medal-ribbons-star-outline"
    }
  ];

  const languages = [
    { name: "Bahasa Indonesia", levelId: "Bahasa Ibu", levelEn: "Native", width: "100%" },
    { name: "English", levelId: "Kerja Terbatas", levelEn: "Limited Working", width: "68%" },
    { name: "Japanese", levelId: "Dasar", levelEn: "Elementary", width: "28%" },
    { name: "Latin", levelId: "Dasar", levelEn: "Elementary", width: "18%" }
  ];

  const stackCategories = [
    {
      key: "frontend",
      labelId: "Front-End Core",
      labelEn: "Front-End Core",
      summaryId: "Fondasi browser murni, performa render tinggi, dan arsitektur komponen modern.",
      summaryEn: "Core browser foundations, high-performance rendering, and modular architecture.",
      items: [
        {
          name: "Vanilla JavaScript (ES6+)",
          descId: "Pemrograman web modular murni tanpa overhead dependensi, cepat dan efisien.",
          descEn: "Modern modular JavaScript for lightweight, ultra-fast browser logic without runtime overhead."
        },
        {
          name: "TypeScript",
          descId: "Pengetikan statis ketat untuk arsitektur kode berskala besar yang aman dari bug.",
          descEn: "Statically typed JavaScript to catch structural errors early and maintain clean codebases."
        },
        {
          name: "Next.js & React",
          descId: "Pengembangan web reaktif modern dengan SSR, optimalisasi SEO, dan rendering dinamis.",
          descEn: "Component-based reactive architecture with server-side rendering and static optimization."
        },
        {
          name: "HTML5 & Semantic SEO",
          descId: "Struktur semantik dokumen web modern yang ramah aksesibilitas dan mesin pencari.",
          descEn: "Semantic markup structures optimized for accessibility, SEO, and structural integrity."
        },
        {
          name: "CSS3 & Tailwind CSS",
          descId: "Desain antarmuka hardware-accelerated, sistem Liquid Glass, dan tata letak responsif.",
          descEn: "Hardware-accelerated layouts, responsive grid patterns, and refined Liquid Glass styling."
        }
      ]
    },
    {
      key: "backend",
      labelId: "Back-End & Web3",
      labelEn: "Back-End & Web3",
      summaryId: "Layanan server, basis data relasional, dan eksplorasi kriptografi sisi klien.",
      summaryEn: "Server services, relational databases, and client-side cryptography exploration.",
      items: [
        {
          name: "Node.js & Hono.js",
          descId: "Runtime cepat dan framework backend modern untuk layanan API berlatensi rendah.",
          descEn: "Ultra-fast JavaScript runtime and lightweight framework for low-latency backend APIs."
        },
        {
          name: "PostgreSQL & Prisma ORM",
          descId: "Manajemen basis data relasional bertipe aman dengan integritas skema data terjamin.",
          descEn: "Type-safe database modeling and low-overhead SQL queries for robust applications."
        },
        {
          name: "Client-Side Cryptography (ethers.js / bitcoinjs-lib)",
          descId: "Eksplorasi penandatanganan transaksi mandiri offline (secp256k1, BIP-39/44/84).",
          descEn: "Implementation of offline ECDSA key derivation, PBKDF2, and non-custodial wallet flows."
        },
        {
          name: "RESTful API Architecture",
          descId: "Perancangan endpoint standar industri dengan validasi payload dan struktur respons bersih.",
          descEn: "Standardized API design with secure payload validations and clean resource serialization."
        }
      ]
    },
    {
      key: "quant",
      labelId: "Quant & Terapan AI",
      labelEn: "Quant & Applied AI",
      summaryId: "Sistem otomasi perdagangan algoritmik dan integrasi computer vision terapan.",
      summaryEn: "Algorithmic trading systems and applied computer vision integrations.",
      items: [
        {
          name: "MQL5 & MetaTrader 5",
          descId: "Pemrograman sistem robot trading otomatis terstruktur dengan manajemen risiko kuantitatif.",
          descEn: "Algorithmic Expert Advisor systems with mathematical risk controls and live market execution."
        },
        {
          name: "YOLOv11 Computer Vision",
          descId: "Deteksi objek visual real-time yang diterapkan pada sistem verifikasi bahaya kebakaran darurat.",
          descEn: "Real-time object detection models applied to instant emergency fire and smoke verification."
        },
        {
          name: "Gemini API",
          descId: "Integrasi model kecerdasan buatan Google untuk pemrosesan konteks dan asistensi bahasa alami.",
          descEn: "Applied natural language processing and intelligent multimodal query augmentation."
        },
        {
          name: "Systematic DCA & Risk Analytics",
          descId: "Pola pikir kuantitatif jangka panjang dengan alokasi modal dan pemodelan statistik.",
          descEn: "Disciplined capital allocation models and quantitative probabilistic risk assessment."
        }
      ]
    },
    {
      key: "leadership",
      labelId: "Kepemimpinan & Analisis",
      labelEn: "Leadership & Analytics",
      summaryId: "Manajemen tim lintas disiplin, ketegasan operasional, dan analisis data bisnis.",
      summaryEn: "Cross-functional team coordination, operational rigor, and structured data analysis.",
      items: [
        {
          name: "Cross-Functional Leadership",
          descId: "Memimpin tim mahasiswa multi-disiplin dalam proyek sipil dan pengabdian masyarakat.",
          descEn: "Steering multidisciplinary teams to deliver civic technology impact and measurable outcomes."
        },
        {
          name: "Project Lifecycle Management",
          descId: "Perencanaan alur kerja rekayasa, mitigasi hambatan teknis, dan eksekusi tepat sasaran.",
          descEn: "Structuring product milestones, technical risk assessments, and timely delivery schedules."
        },
        {
          name: "Statistical Analysis (SPSS)",
          descId: "Pengolahan data empiris dan visualisasi analitik untuk validasi riset akademik.",
          descEn: "Empirical data modeling and statistical significance testing for academic publications."
        },
        {
          name: "Tournament Resilience",
          descId: "Ketangguhan mental dan eksekusi presisi di bawah tekanan yang ditempa lewat bulu tangkis.",
          descEn: "Mental fortitude and decisive precision under pressure honed through national competition."
        }
      ]
    }
  ];

  const athleticTimeline = [
    {
      year: "2025",
      titleId: "Ketua KKN 204 TAMPA BERAKSI",
      titleEn: "Leader of Community Service Program (KKN 204)",
      detailId: "Memimpin tim 15 mahasiswa di Desa Tampa, membangun portal digital desa dan publikasi akademik.",
      detailEn: "Led 15-student multidisciplinary team in Tampa Village, built civic portal and authored academic report.",
      tag: "Leadership"
    },
    {
      year: "2025",
      titleId: "Juara 3 Hackathon Nasional PERMIKOMNAS",
      titleEn: "3rd Place National Hackathon PERMIKOMNAS",
      detailId: "BBPSDMP KOMDIGI Makassar — Team Leader Pyrosentinel, platform darurat ADAAPI & YOLOv11.",
      detailEn: "BBPSDMP KOMDIGI Makassar — Team Leader Pyrosentinel, ADAAPI fire emergency detection platform.",
      tag: "Competition"
    },
    {
      year: "2024",
      titleId: "Juara 1 Ganda Campuran & Beregu Dewasa",
      titleEn: "1st Place Mixed Doubles & Men's Team",
      detailId: "Kejuaraan Bulu Tangkis Rektor UPR Cup 2024 & Pengayoman Cup Se-Kalteng 2024.",
      detailEn: "UPR Rector Cup 2024 & Central Kalimantan Inter-Agency Pengayoman Cup 2024.",
      tag: "Badminton"
    },
    {
      year: "2023",
      titleId: "Finalis Nasional GEMASTIK XVI",
      titleEn: "National Finalist GEMASTIK XVI",
      detailId: "Divisi Pengembangan Perangkat Lunak (Software Development) — Aplikasi Pemulihan Adanest.",
      detailEn: "Software Development Division — Adanest Health & PMO Recovery Web Platform.",
      tag: "Academic Tech"
    },
    {
      year: "2023",
      titleId: "Juara 1 Beregu Putra & Juara 1 Ganda Taruna",
      titleEn: "1st Place Men's Team & Junior Doubles Gold",
      detailId: "Pekan Olahraga Provinsi (PORPROV) XII Kalimantan Tengah 2023.",
      detailEn: "PORPROV XII Central Kalimantan Provincial Games 2023.",
      tag: "Badminton"
    },
    {
      year: "2022",
      titleId: "Atlet Delegasi Seleksi Nasional (Seleknas) PBSI",
      titleEn: "Delegate Athlete — National Selection (Seleknas) PBSI",
      detailId: "Pelatnas PBSI Cipayung, Jakarta Timur — mewakili atlet terbaik daerah ke pusat pelatihan nasional.",
      detailEn: "PBSI National Training Center, Cipayung — regional delegate for national squad selection.",
      tag: "National PBSI"
    },
    {
      year: "2022 – 2023",
      titleId: "Kompetitor Pekan Olahraga Mahasiswa Nasional (POMNAS)",
      titleEn: "National Competitor — POMNAS XVII & XVIII",
      detailId: "Padang (2022) & Kalimantan Selatan (2023) mewakili Kontingen Universitas Palangka Raya.",
      detailEn: "Padang (2022) & South Kalimantan (2023) representing Universitas Palangka Raya contingent.",
      tag: "Badminton"
    }
  ];

  const typingRoles = {
    id: [
      "Application Specialist",
      "Informatics Engineer (IPK 3.86)",
      "Atlet Bulu Tangkis Nasional",
      "Web & AI Builder"
    ],
    en: [
      "Application Specialist",
      "Informatics Engineer (GPA 3.86)",
      "National Badminton Athlete",
      "Web & AI Builder"
    ]
  };

  // 3. LANGUAGE STATE & PERSISTENCE
  window.currentLang = localStorage.getItem("aipp-lang") || "id";

  window.setLanguage = function (lang) {
    window.currentLang = lang;
    localStorage.setItem("aipp-lang", lang);

    // Update Language Toggle Switch
    const btnId = document.getElementById("lang-id");
    const btnEn = document.getElementById("lang-en");
    if (btnId && btnEn) {
      if (lang === "id") {
        btnId.classList.add("active");
        btnEn.classList.remove("active");
      } else {
        btnEn.classList.add("active");
        btnId.classList.remove("active");
      }
    }

    // Translate DOM elements with data-lang attributes
    document.querySelectorAll("[data-lang-id]").forEach((el) => {
      const translation = lang === "id" ? el.getAttribute("data-lang-id") : el.getAttribute("data-lang-en");
      if (translation) {
        el.innerHTML = translation;
      }
    });

    // Toggle active quote words language in Section 01
    const quoteId = document.getElementById("quote-words-id");
    const quoteEn = document.getElementById("quote-words-en");
    if (quoteId && quoteEn) {
      if (lang === "en") {
        quoteId.classList.add("hidden");
        quoteEn.classList.remove("hidden");
      } else {
        quoteEn.classList.add("hidden");
        quoteId.classList.remove("hidden");
      }
    }

    // Re-render dynamic sections
    renderFoundation();
    renderLanguages();
    if (window.AippTechStack) {
      window.AippTechStack.setLanguage(lang);
    } else {
      renderStackTabs(window.activeStackTab || "frontend");
      renderStackPanel(window.activeStackTab || "frontend");
    }
    renderAthletics();
    renderFeaturedProjects();
  };

  // 4. RENDERERS
  function renderFoundation() {
    const container = document.getElementById("foundation-grid");
    if (!container) return;
    const isEn = window.currentLang === "en";

    container.innerHTML = foundation
      .map((item) => `
        <article class="liquid-glass-card p-6 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="font-mono text-xs uppercase tracking-widest text-cyan-300">${isEn ? item.titleEn : item.titleId}</span>
              <iconify-icon icon="${item.icon}" class="text-xl text-white/50"></iconify-icon>
            </div>
            <h4 class="text-2xl font-bold text-white mb-2">${isEn ? (item.valueEn || item.value) : (item.valueId || item.value)}</h4>
          </div>
          <p class="text-xs text-white/60 leading-relaxed pt-3 border-t border-white/5">${isEn ? item.noteEn : item.noteId}</p>
        </article>
      `)
      .join("");
  }

  function renderLanguages() {
    const container = document.getElementById("language-list");
    if (!container) return;
    const isEn = window.currentLang === "en";

    container.innerHTML = languages
      .map((lang) => `
        <div class="space-y-1.5">
          <div class="flex justify-between text-xs font-mono">
            <span class="text-white/85 font-medium">${lang.name}</span>
            <span class="text-white/50">${isEn ? lang.levelEn : lang.levelId}</span>
          </div>
          <div class="h-1.5 w-full rounded-full bg-white/5 overflow-hidden border border-white/5">
            <div class="h-full rounded-full bg-gradient-to-r from-cyan-400 to-white" style="width: ${lang.width};"></div>
          </div>
        </div>
      `)
      .join("");
  }

  function renderStackTabs(activeKey = "frontend") {
    const container = document.getElementById("stack-tabs");
    if (!container) return;
    const isEn = window.currentLang === "en";
    window.activeStackTab = activeKey;

    container.innerHTML = stackCategories
      .map((cat) => `
        <button
          type="button"
          class="skill-tab-btn ${cat.key === activeKey ? 'active' : ''}"
          onclick="window.onStackTabClick('${cat.key}')"
        >
          ${isEn ? cat.labelEn : cat.labelId}
        </button>
      `)
      .join("");
  }

  window.onStackTabClick = function (key) {
    window.activeStackTab = key;
    if (window.AippTechStack) {
      window.AippTechStack.selectTab(key);
    } else {
      renderStackTabs(key);
      renderStackPanel(key);
    }
  };

  function renderStackPanel(activeKey = "frontend") {
    const container = document.getElementById("stack-panel");
    if (!container) return;
    const isEn = window.currentLang === "en";
    const category = stackCategories.find((c) => c.key === activeKey) || stackCategories[0];

    container.innerHTML = category.items
      .map((item, idx) => `
        <article class="skill-card">
          <div>
            <div class="skill-header">
              <span class="skill-badge">${category.key.toUpperCase()} // 0${idx + 1}</span>
            </div>
            <h4 class="skill-title">${item.name}</h4>
          </div>
          <p class="skill-desc">${isEn ? item.descEn : item.descId}</p>
        </article>
      `)
      .join("");
  }

  function renderAthletics() {
    const container = document.getElementById("athletic-timeline");
    if (!container) return;
    const isEn = window.currentLang === "en";

    container.innerHTML = athleticTimeline
      .map((item) => `
        <div class="timeline-node">
          <div class="timeline-marker"></div>
          <article class="timeline-card">
            <div class="flex items-center justify-between mb-1.5">
              <span class="timeline-year">${item.year}</span>
              <span class="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-white/60 border border-white/5">${item.tag}</span>
            </div>
            <h4 class="timeline-title">${isEn ? item.titleEn : item.titleId}</h4>
            <p class="timeline-desc">${isEn ? item.detailEn : item.detailId}</p>
          </article>
        </div>
      `)
      .join("");
  }

  // 5. FEATURED PROJECTS CASE STUDIES RENDERER
  function renderFeaturedProjects() {
    const container = document.getElementById("featured-projects-list");
    if (!container || !window.portfolioProjects) return;
    const isEn = window.currentLang === "en";

    container.innerHTML = window.portfolioProjects
      .map((project, idx) => {
        const isDesaTampa = project.id === "desatampa";
        const isWallet = project.id === "wallet";
        const primaryImg = project.images && project.images[0] ? project.images[0].replace("../", "") : "img/aipp-logo.webp";

        // Layout media: For Desa Tampa, render the custom Liquid Glass video player!
        let mediaHtml = "";
        if (isDesaTampa) {
          mediaHtml = `
            <div class="mobile-showcase-stage">
              <!-- Ambient Halo Glow -->
              <div class="mobile-ambient-halo"></div>

              <!-- Stage Top Badges -->
              <div class="absolute top-3.5 left-4 z-10 flex items-center gap-2 pointer-events-none">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="font-mono text-[10px] uppercase tracking-widest text-cyan-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  ${isEn ? "MOBILE VIEW DEMO" : "DEMO TAMPILAN MOBILE"}
                </span>
              </div>
              <div class="absolute top-3.5 right-4 z-10 font-mono text-[10px] text-white/50 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 pointer-events-none">
                372×810 PWA
              </div>

              <!-- Titanium Smartphone Mockup (Ambient Autoplay Living Showcase) -->
              <div class="smartphone-chassis cursor-pointer group/phone" id="desa-tampa-video-wrapper" onclick="window.openProjectModal('desatampa')" title="${isEn ? 'Inspect Case Study' : 'Lihat Studi Kasus'}">
                <div class="smartphone-notch">
                  <span class="w-2 h-2 rounded-full bg-[#151515] border border-cyan-400/20"></span>
                </div>
                <div class="smartphone-screen">
                  <video id="desa-tampa-video" class="video-player-element" autoplay loop muted playsinline preload="auto" poster="img/DESATAMPA/website-desa-tampa-mobile-poster.webp">
                    <source src="img/DESATAMPA/website-desa-tampa-vid.mp4" type="video/mp4">
                    Your browser does not support video playback.
                  </video>
                </div>
              </div>

              <!-- Bottom Inspect Pill -->
              <div class="absolute bottom-3.5 right-4 z-10 pointer-events-auto">
                <button type="button" class="liquid-glass-pill px-3 py-1 text-xs text-white/90 flex items-center gap-1.5" onclick="window.openProjectModal('desatampa')">
                  <span>${isEn ? "Inspect Case Study" : "Lihat Studi Kasus"}</span>
                  <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                </button>
              </div>
            </div>
          `;
        } else {
          mediaHtml = `
            <div class="project-media-col cursor-pointer" onclick="window.openProjectModal('${project.id}')">
              <img src="${primaryImg}" alt="${project.title}" class="project-media-preview" loading="lazy">
              <div class="absolute inset-0 bg-gradient-to-t from-[#080A0D]/90 via-transparent to-transparent pointer-events-none"></div>
              <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span class="font-mono text-[11px] text-white/70 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  ${project.images ? project.images.length : 1} ${isEn ? "Assets & Docs" : "Dokumentasi & Aset"}
                </span>
                <span class="liquid-glass-pill px-3 py-1 text-xs text-white/90 flex items-center gap-1.5">
                  ${isEn ? "Inspect Case Study" : "Lihat Studi Kasus"}
                  <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                </span>
              </div>
            </div>
          `;
        }

        return `
          <article class="project-case-card" id="project-${project.id}">
            <div class="project-inner-grid ${idx % 2 === 1 ? 'lg:[&>.project-media-col]:order-2' : ''}">
              ${mediaHtml}
              <div class="project-info-col">
                <div class="flex items-center justify-between">
                  <span class="project-category-tag">
                    <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
                    ${isEn ? project.labelEn : project.labelId}
                  </span>
                  <span class="font-mono text-xs text-white/40">// 0${idx + 1}</span>
                </div>
                <h3 class="project-case-title">${project.title}</h3>
                <p class="project-case-summary">${isEn ? project.descriptionEn : project.descriptionId}</p>

                <!-- Key Tech Stack Tags -->
                <div class="project-stack-tags">
                  ${project.stack ? project.stack.map(s => `<span class="stack-tag">${s}</span>`).join("") : ""}
                </div>

                <!-- Action Links -->
                <div class="project-action-row pt-3 border-t border-white/5">
                  <button type="button" class="btn-primary" onclick="window.openProjectModal('${project.id}')">
                    <span>${isEn ? "Case Study & Architecture" : "Studi Kasus & Arsitektur"}</span>
                    <iconify-icon icon="solar:document-text-linear" class="text-base"></iconify-icon>
                  </button>
                  ${project.github ? `
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-secondary" aria-label="GitHub Repository">
                      <iconify-icon icon="mdi:github" class="text-base"></iconify-icon>
                      <span>GitHub</span>
                    </a>
                  ` : ""}
                  ${project.demo ? `
                    <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn-secondary" aria-label="Live Demo">
                      <iconify-icon icon="solar:link-circle-linear" class="text-base"></iconify-icon>
                      <span>Live Demo</span>
                    </a>
                  ` : ""}
                </div>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    initDesaTampaVideoPlayer();
  }

  // 6. BESPOKE DESATAMPA AMBIENT AUTOPLAY ENGINE
  function initDesaTampaVideoPlayer() {
    const video = document.getElementById("desa-tampa-video");
    if (!video) return;

    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    const startAutoplay = () => {
      video.play().catch(() => {
        const resumeOnGesture = () => {
          video.play().catch(() => {});
          window.removeEventListener("scroll", resumeOnGesture);
          window.removeEventListener("touchstart", resumeOnGesture);
          window.removeEventListener("click", resumeOnGesture);
        };
        window.addEventListener("scroll", resumeOnGesture, { once: true });
        window.addEventListener("touchstart", resumeOnGesture, { once: true });
        window.addEventListener("click", resumeOnGesture, { once: true });
      });
    };

    startAutoplay();

    // IntersectionObserver: smoothly plays while in viewport and pauses when scrolled away
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      }, { threshold: 0.15 });
      observer.observe(video);
    }
  }

  // 7. PROJECT CASE STUDY MODAL ENGINE (WITH ACCURATE SCROLL RESTORATION)
  let preModalScrollY = 0;

  window.openProjectModal = function (projectId) {
    if (!window.portfolioProjects) return;
    const project = window.portfolioProjects.find(p => p.id === projectId);
    if (!project) return;
    const isEn = window.currentLang === "en";

    // 0. Remember the exact scroll position before opening the modal
    preModalScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    const modalBackdrop = document.getElementById("project-modal-backdrop");
    const modalContent = document.getElementById("project-modal-content");
    const modalBadge = document.getElementById("project-modal-badge");
    const modalBody = document.getElementById("project-modal-body");
    if (!modalBackdrop || !modalContent) return;

    if (modalBadge) {
      modalBadge.textContent = isEn ? project.labelEn : project.labelId;
    }

    modalContent.innerHTML = `
      <div class="space-y-6">
        <div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">${project.title}</h2>
          <p class="text-sm sm:text-base text-white/75 mt-2.5 leading-relaxed">${isEn ? project.descriptionEn : project.descriptionId}</p>
        </div>

        <!-- Tech Stack -->
        <div>
          <h4 class="font-mono text-xs uppercase tracking-widest text-white/40 mb-2.5">${isEn ? "Engineering Stack" : "Tumpukan Teknologi"}</h4>
          <div class="flex flex-wrap gap-2">
            ${project.stack ? project.stack.map(s => `<span class="stack-tag text-xs">${s}</span>`).join("") : ""}
          </div>
        </div>

        <!-- Story Background -->
        ${project.story && (project.story.backgroundId || project.story.backgroundEn) ? `
          <div class="liquid-glass-card p-5 sm:p-6 border border-white/10">
            <h4 class="font-mono text-xs uppercase tracking-widest text-cyan-300 mb-2">${isEn ? "Context & Background" : "Konteks & Latar Belakang"}</h4>
            <p class="text-xs sm:text-sm text-white/80 leading-relaxed">${isEn ? project.story.backgroundEn : project.story.backgroundId}</p>
          </div>
        ` : ""}

        <!-- Objectives & Architecture -->
        ${project.story && (project.story.objectivesId || project.story.objectivesEn) ? `
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="liquid-glass-card p-5">
              <h4 class="font-mono text-xs uppercase tracking-widest text-white/40 mb-2.5">${isEn ? "Architectural Goals" : "Tujuan Arsitektur"}</h4>
              <ul class="space-y-1.5 text-xs text-white/75 leading-relaxed list-disc list-inside">
                ${(isEn ? project.story.objectivesEn : project.story.objectivesId).map(obj => `<li>${obj}</li>`).join("")}
              </ul>
            </div>
            <div class="liquid-glass-card p-5">
              <h4 class="font-mono text-xs uppercase tracking-widest text-cyan-300 mb-2.5">${isEn ? "Core Technical Features" : "Fitur Teknis Unggulan"}</h4>
              <ul class="space-y-1.5 text-xs text-white/75 leading-relaxed list-disc list-inside">
                ${(isEn ? project.story.featuresEn : project.story.featuresId).map(feat => `<li>${feat}</li>`).join("")}
              </ul>
            </div>
          </div>
        ` : ""}

        <!-- Image & Media Showcase -->
        ${project.images && project.images.length > 0 ? `
          <div>
            <h4 class="font-mono text-xs uppercase tracking-widest text-white/40 mb-3">${isEn ? "Visual Assets & Proof of Work" : "Dokumentasi Visual & Bukti Proyek"}</h4>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              ${project.images.map(img => {
                const cleanImg = img.replace("../", "");
                const isVideo = cleanImg.toLowerCase().endsWith(".mp4");
                if (isVideo) {
                  return `
                    <div class="col-span-2 sm:col-span-3 rounded-2xl overflow-hidden border border-cyan-400/25 bg-gradient-to-b from-[#141A23] to-[#0A0D12] shadow-xl p-5 sm:p-7 flex flex-col md:flex-row items-center gap-6">
                      <!-- Smartphone Frame with Full Vertical Mobile Demo (372 / 810) -->
                      <div class="smartphone-chassis w-[210px] sm:w-[230px] flex-shrink-0">
                        <div class="smartphone-notch">
                          <span class="w-2 h-2 rounded-full bg-[#151515] border border-cyan-400/20"></span>
                        </div>
                        <div class="smartphone-screen">
                          <video src="${cleanImg}" autoplay loop muted playsinline preload="auto" poster="img/DESATAMPA/website-desa-tampa-mobile-poster.webp" class="w-full h-full object-cover bg-black"></video>
                        </div>
                      </div>

                      <!-- Mobile Architecture & Proof Context -->
                      <div class="space-y-4 text-left flex-1">
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 font-mono text-xs">
                          <iconify-icon icon="solar:smartphone-linear" class="text-base"></iconify-icon>
                          <span>${isEn ? "Mobile-First Civic Architecture" : "Arsitektur Ramah Seluler (Mobile View)"}</span>
                        </div>
                        <h3 class="text-xl sm:text-2xl font-bold text-white tracking-tight">${isEn ? "Mobile Web Application Demo" : "Demonstrasi Antarmuka Web Seluler"}</h3>
                        <p class="text-xs sm:text-sm text-white/75 leading-relaxed">
                          ${isEn
                            ? "This application demonstration video documents the live mobile interface designed for village residents. Every view, including interactive Leaflet maps and UMKM cooperatives, was architected for optimal performance on low-bandwidth rural smartphone connections."
                            : "Video demonstrasi ini merekam pengujian langsung antarmuka mobile portal Desa Tampa. Seluruh modul navigasi, peta batas wilayah Leaflet Maps, dan katalog digital UMKM singkong dirancang khusus agar ringan, responsif, dan mudah dioperasikan warga melalui smartphone."
                          }
                        </p>
                        <div class="grid grid-cols-2 gap-2 text-[11px] font-mono text-white/60 pt-1">
                          <div class="p-2.5 rounded-xl bg-white/5 border border-white/5">
                            <span class="text-cyan-300 font-bold block text-xs">9:19.5 (372×810)</span>
                            <span>${isEn ? "Native Mobile View" : "Rasio Layar Ponsel"}</span>
                          </div>
                          <div class="p-2.5 rounded-xl bg-white/5 border border-white/5">
                            <span class="text-cyan-300 font-bold block text-xs">PWA & Leaflet</span>
                            <span>${isEn ? "Touch Geo-Mapping" : "Navigasi Sentuh"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  `;
                }
                return `
                  <div class="aspect-video rounded-xl overflow-hidden border border-white/10 cursor-pointer group bg-black/40" onclick="window.openLightbox('${cleanImg}')">
                    <img src="${cleanImg}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy">
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        ` : ""}

        <!-- External Links & Return to Projects Button -->
        <div class="flex flex-wrap items-center gap-3 pt-5 border-t border-white/10">
          ${project.github ? `
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-primary text-xs py-2 px-4">
              <iconify-icon icon="mdi:github" class="text-base"></iconify-icon>
              <span>GitHub Code</span>
            </a>
          ` : ""}
          ${project.demo ? `
            <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn-secondary text-xs py-2 px-4">
              <iconify-icon icon="solar:link-circle-linear" class="text-base"></iconify-icon>
              <span>Live Application</span>
            </a>
          ` : ""}
          <button type="button" class="liquid-glass-pill px-3.5 py-2 text-xs text-cyan-300 border-cyan-400/30 hover:border-cyan-400 flex items-center gap-1.5 ml-auto" onclick="window.closeProjectModal()">
            <iconify-icon icon="solar:arrow-left-linear" class="text-sm"></iconify-icon>
            <span>${isEn ? "Back to Projects List" : "Kembali ke Daftar Proyek"}</span>
          </button>
        </div>
      </div>
    `;

    // 1. Pause Lenis virtual scrolling
    if (window.lenis) {
      window.lenis.stop();
    }

    // 2. Lock scroll without resetting scroll position
    document.documentElement.classList.add("modal-open");
    document.body.classList.add("modal-open");

    // 3. Reset modal body scroll position to top
    if (modalBody) {
      modalBody.scrollTop = 0;
    }

    // 4. Reveal modal
    modalBackdrop.classList.add("open");
  };

  window.closeProjectModal = function () {
    const modalBackdrop = document.getElementById("project-modal-backdrop");
    if (modalBackdrop) {
      modalBackdrop.classList.remove("open");
    }

    // Release strict scroll lock
    document.documentElement.classList.remove("modal-open");
    document.body.classList.remove("modal-open");

    // Instantly restore the exact scroll position before modal was opened
    window.scrollTo({ top: preModalScrollY, behavior: "instant" });

    // Resume Lenis smooth scroll and synchronize position
    if (window.lenis) {
      window.lenis.start();
      window.lenis.scrollTo(preModalScrollY, { immediate: true });
    }
  };

  // 8. IMAGE LIGHTBOX ENGINE
  window.openLightbox = function (imgSrc) {
    const lightbox = document.getElementById("lightbox-backdrop");
    const lightboxImg = document.getElementById("lightbox-img");
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = imgSrc;
    lightbox.classList.add("open");

    // Preserve scroll position if modal is not already holding it
    const modalBackdrop = document.getElementById("project-modal-backdrop");
    if (!modalBackdrop || !modalBackdrop.classList.contains("open")) {
      preModalScrollY = window.scrollY || document.documentElement.scrollTop || 0;
    }

    if (window.lenis) {
      window.lenis.stop();
    }
    document.documentElement.classList.add("modal-open");
    document.body.classList.add("modal-open");
  };

  window.closeLightbox = function () {
    const lightbox = document.getElementById("lightbox-backdrop");
    if (lightbox) {
      lightbox.classList.remove("open");
    }

    // Only restore scroll if case study modal is not still open
    const modalBackdrop = document.getElementById("project-modal-backdrop");
    if (!modalBackdrop || !modalBackdrop.classList.contains("open")) {
      document.documentElement.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
      window.scrollTo({ top: preModalScrollY, behavior: "instant" });
      if (window.lenis) {
        window.lenis.start();
        window.lenis.scrollTo(preModalScrollY, { immediate: true });
      }
    }
  };

  // 8.5 MOBILE NAVIGATION DRAWER & BOTTOM QUICK-DOCK ENGINE
  window.toggleMobileNav = function () {
    const drawer = document.getElementById("mobile-nav-drawer");
    const toggleBtn = document.getElementById("mobile-nav-toggle");
    if (!drawer) return;
    const isOpen = drawer.classList.contains("open");
    if (isOpen) {
      window.closeMobileNav();
    } else {
      drawer.classList.add("open");
      drawer.setAttribute("aria-hidden", "false");
      if (toggleBtn) {
        toggleBtn.classList.add("active");
        toggleBtn.setAttribute("aria-expanded", "true");
      }
      document.documentElement.classList.add("drawer-open");
      document.body.classList.add("drawer-open");
    }
  };

  window.closeMobileNav = function () {
    const drawer = document.getElementById("mobile-nav-drawer");
    const toggleBtn = document.getElementById("mobile-nav-toggle");
    if (!drawer) return;
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    if (toggleBtn) {
      toggleBtn.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
    document.documentElement.classList.remove("drawer-open");
    document.body.classList.remove("drawer-open");
  };

  function setupMobileNavigation() {
    // Mobile Quick Dock Scroll-Spy Active Indicator
    const quickDock = document.getElementById("mobile-quick-dock");
    if (!quickDock) return;

    const dockItems = quickDock.querySelectorAll(".dock-item[data-section]");
    const trackedSections = [
      { id: "hero", target: "hero" },
      { id: "about", target: "about" },
      { id: "athletics", target: "about" },
      { id: "stack", target: "stack" },
      { id: "projects", target: "projects" },
      { id: "impact", target: "projects" },
      { id: "contact", target: "projects" }
    ];

    const updateActiveDock = () => {
      const scrollPos = (window.scrollY || window.pageYOffset || 0) + 160;
      let currentSection = "hero";

      for (let i = trackedSections.length - 1; i >= 0; i--) {
        const item = trackedSections[i];
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const docTop = rect.top + (window.scrollY || window.pageYOffset || 0);
          if (scrollPos >= docTop) {
            currentSection = item.target;
            break;
          }
        }
      }

      dockItems.forEach((btn) => {
        if (btn.getAttribute("data-section") === currentSection) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", updateActiveDock, { passive: true });
    updateActiveDock();
  }

  // 9. REDESIGNED FUTURISTIC MUSIC PLAYER & WEB AUDIO API SPECTRUM
  function setupAudioHub() {
    const bgMusic = document.getElementById("bg-music");
    const audioToggle = document.getElementById("floating-audio-toggle");
    const audioLabel = document.getElementById("audio-status-label");
    const audioIcon = document.getElementById("audio-toggle-icon");
    const robotCompanion = document.getElementById("robot-companion");
    const robotHead = document.getElementById("robot-head-group");
    const robotBody = document.getElementById("robot-body-group");
    const robotVisor = document.getElementById("robot-visor-eye");
    const robotAntenna = document.getElementById("robot-antenna-group");
    const spectrumBars = document.querySelectorAll(".spectrum-bar");

    if (!bgMusic || !audioToggle) return;

    let isPlaying = false;
    let audioCtx = null;
    let analyser = null;
    let dataArray = null;
    let animFrame = null;
    let smoothBass = 0;

    bgMusic.volume = 0.25;

    const initWebAudio = () => {
      try {
        if (!window.audioCtx) {
          window.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        audioCtx = window.audioCtx;

        if (!window.audioAnalyser) {
          analyser = audioCtx.createAnalyser();
          analyser.fftSize = 64; // 32 bins, perfect for 16 bands
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
        console.warn("Web Audio API not supported or blocked by sandbox:", e);
      }
    };

    const updateAudioVisualization = () => {
      if (!isPlaying) return;

      if (analyser && dataArray) {
        analyser.getByteFrequencyData(dataArray);

        // Update 16 spectrum bars
        for (let i = 0; i < spectrumBars.length; i++) {
          const val = dataArray[i] || 0;
          const heightPx = Math.max(3, (val / 255) * 18);
          spectrumBars[i].style.height = `${heightPx}px`;
        }

        // Bass frequency for companion mascot physics (bins 0-3)
        const bassVal = (dataArray[0] + dataArray[1] + dataArray[2]) / (3 * 255);
        smoothBass += (bassVal - smoothBass) * 0.28;

        // Animate companion mascot
        if (robotCompanion && robotCompanion.classList.contains("active")) {
          // Subtle hover bob & slight tilt with bass beat
          const bobY = -smoothBass * 8;
          const swayRot = Math.sin(Date.now() * 0.006) * (smoothBass * 6);
          robotCompanion.style.transform = `translateY(${bobY}px) rotate(${swayRot}deg)`;

          // Bob head
          if (robotHead) {
            robotHead.style.transform = `translateY(${smoothBass * 1.5}px)`;
          }

          // Pulse body scale
          if (robotBody) {
            robotBody.style.transform = `scale(${1 + smoothBass * 0.08})`;
          }

          // Visor eye brightness & scale
          if (robotVisor) {
            const glowOpacity = 0.5 + smoothBass * 0.5;
            robotVisor.style.filter = `drop-shadow(0 0 ${4 + smoothBass * 8}px rgba(120, 201, 245, ${glowOpacity}))`;
          }

          // Antenna sway
          if (robotAntenna) {
            const antAngle = Math.sin(Date.now() * 0.008) * (8 + smoothBass * 12);
            robotAntenna.style.transform = `rotate(${antAngle}deg)`;
          }
        }
      }

      animFrame = requestAnimationFrame(updateAudioVisualization);
    };

    const play = () => {
      initWebAudio();
      if (audioCtx && audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      bgMusic.play().then(() => {
        isPlaying = true;
        const floatingAudioHub = document.getElementById("floating-audio-hub");
        if (floatingAudioHub) floatingAudioHub.classList.add("is-playing");
        if (audioToggle) audioToggle.classList.add("is-playing");
        if (audioLabel) audioLabel.textContent = window.currentLang === "en" ? "PLAYING" : "MEMUTAR";
        if (audioIcon) audioIcon.setAttribute("icon", "solar:pause-bold");
        if (robotCompanion) robotCompanion.classList.add("active");

        cancelAnimationFrame(animFrame);
        animFrame = requestAnimationFrame(updateAudioVisualization);
        localStorage.setItem("aipp-music-enabled", "true");
      }).catch(err => {
        console.log("Audio autoplay prevented by user-interaction policy:", err);
      });
    };

    const pause = () => {
      bgMusic.pause();
      isPlaying = false;
      const floatingAudioHub = document.getElementById("floating-audio-hub");
      if (floatingAudioHub) floatingAudioHub.classList.remove("is-playing");
      if (audioToggle) audioToggle.classList.remove("is-playing");
      if (audioLabel) audioLabel.textContent = window.currentLang === "en" ? "AUDIO OST" : "AUDIO OST";
      if (audioIcon) audioIcon.setAttribute("icon", "solar:play-bold");
      if (robotCompanion) robotCompanion.classList.remove("active");

      cancelAnimationFrame(animFrame);
      spectrumBars.forEach(bar => { bar.style.height = "3px"; });

      if (robotCompanion) {
        robotCompanion.style.transform = "";
      }

      localStorage.setItem("aipp-music-enabled", "false");
    };

    audioToggle.addEventListener("click", () => {
      if (isPlaying) {
        pause();
      } else {
        play();
      }
    });

    // Autoplay check if user previously engaged
    if (localStorage.getItem("aipp-music-enabled") === "true") {
      const startOnGesture = () => {
        play();
        window.removeEventListener("click", startOnGesture);
        window.removeEventListener("scroll", startOnGesture);
        window.removeEventListener("touchstart", startOnGesture);
      };
      window.addEventListener("click", startOnGesture, { once: true });
      window.addEventListener("scroll", startOnGesture, { once: true });
      window.addEventListener("touchstart", startOnGesture, { once: true });
    }
  }

  // 10. TYPING EFFECT
  function setupTypingEffect() {
    const el = document.getElementById("typing-role");
    if (!el) return;

    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    const tick = () => {
      const list = typingRoles[window.currentLang] || typingRoles.en;
      const currentWord = list[roleIdx % list.length];
      const targetText = isDeleting
        ? currentWord.substring(0, charIdx - 1)
        : currentWord.substring(0, charIdx + 1);

      el.textContent = targetText;
      charIdx = isDeleting ? charIdx - 1 : charIdx + 1;

      if (!isDeleting && charIdx === currentWord.length) {
        isDeleting = true;
        setTimeout(tick, 1800);
        return;
      }

      if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % list.length;
        setTimeout(tick, 300);
        return;
      }

      setTimeout(tick, isDeleting ? 45 : 75);
    };

    tick();
  }

  // 11. CUSTOM CURSOR
  function setupCustomCursor() {
    if (!window.matchMedia("(pointer: fine)").matches || window.innerWidth < 1024) return;

    const follower = document.querySelector(".custom-cursor-follower");
    const dot = document.querySelector(".custom-cursor-dot");
    if (!follower || !dot) return;

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;

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

    document.querySelectorAll("a, button, [role='button'], input, textarea").forEach((el) => {
      el.addEventListener("mouseenter", () => follower.classList.add("hovered"));
      el.addEventListener("mouseleave", () => follower.classList.remove("hovered"));
    });
  }

  // 12. LENIS SMOOTH SCROLL & GSAP ANIMATIONS
  function setupSmoothScrollAndGsap() {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    // Lenis integration
    if (typeof window.Lenis !== "undefined" && richMotion) {
      const lenis = new window.Lenis({
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        smoothTouch: false, // Native touch inertia on mobile devices
        touchMultiplier: 1.5
      });
      window.lenis = lenis;

      // Ensure ONLY one driver calls lenis.raf to prevent double-stepping and stutter
      if (ScrollTrigger && gsap) {
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      } else {
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }

      // Unified High-Performance Smooth Scroll for all in-page anchors
      window.scrollToAnchor = function (targetId, customOffset) {
        if (!targetId || targetId === "#") return;
        const targetEl = document.querySelector(targetId);
        if (!targetEl) return;

        window.closeMobileNav();

        const isMobile = window.innerWidth < 768;
        const offset = customOffset !== undefined ? customOffset : (isMobile ? -58 : -75);

        if (window.lenis) {
          window.lenis.scrollTo(targetEl, {
            offset: offset,
            duration: 1.05,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        } else {
          const targetY = targetEl.getBoundingClientRect().top + window.pageYOffset + offset;
          window.scrollTo({
            top: targetY,
            behavior: "smooth"
          });
        }
      };

      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
          const targetId = this.getAttribute('href');
          if (targetId && targetId !== '#') {
            e.preventDefault();
            window.scrollToAnchor(targetId);
          }
        });
      });
    } else {
      // Fallback anchor scroll without Lenis
      window.scrollToAnchor = function (targetId, customOffset) {
        if (!targetId || targetId === "#") return;
        const targetEl = document.querySelector(targetId);
        if (!targetEl) return;
        window.closeMobileNav();
        const isMobile = window.innerWidth < 768;
        const offset = customOffset !== undefined ? customOffset : (isMobile ? -58 : -75);
        const targetY = targetEl.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: targetY, behavior: "smooth" });
      };

      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
          const targetId = this.getAttribute('href');
          if (targetId && targetId !== '#') {
            e.preventDefault();
            window.scrollToAnchor(targetId);
          }
        });
      });
    }

    if (!gsap || !richMotion) return;

    if (ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Initialize Animations Module (Global reading progress & Hero character entrance)
    if (window.AippAnimations) {
      window.AippAnimations.initGlobalProgress();
      window.AippAnimations.initHeroAnimations();
    }
  }

  // 13. COPY EMAIL TOAST NOTIFICATION
  window.copyEmailToClipboard = function (email = "aippirwin@gmail.com") {
    navigator.clipboard.writeText(email).then(() => {
      const toast = document.getElementById("copy-toast");
      if (toast) {
        toast.classList.add("show");
        setTimeout(() => {
          toast.classList.remove("show");
        }, 2200);
      }
    }).catch(err => {
      console.log("Failed to copy email:", err);
    });
  };

  // 14. MODAL TOUCH & WHEEL SCROLL ISOLATION
  function setupModalScrollIsolation() {
    const modalBackdrop = document.getElementById("project-modal-backdrop");
    const modalBody = document.getElementById("project-modal-body");

    if (modalBackdrop) {
      modalBackdrop.addEventListener("touchmove", function (e) {
        // Prevent background page touch scrolling when dragging outside the scrollable body
        if (!e.target.closest("#project-modal-body")) {
          e.preventDefault();
        }
      }, { passive: false });
    }

    if (modalBody) {
      // Isolate wheel and touch events within the modal dialog
      modalBody.addEventListener("wheel", function (e) {
        e.stopPropagation();
      }, { passive: true });

      modalBody.addEventListener("touchmove", function (e) {
        e.stopPropagation();
      }, { passive: true });
    }
  }

  // ==========================================================================
  // SECTION 01: COGNITIVE FOUNDATION SCROLL STORYTELLING
  // 4 Scenes • Pinned Stage • Three.js 3D Exploded View + CSS 3D Fallback
  // ==========================================================================
  function setupSection01Storytelling() {
    const section = document.getElementById("about");
    if (!section) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !window.gsap) {
      section.classList.add("reduced-motion");
      const arc = document.getElementById("gauge-arc-path");
      if (arc) arc.style.strokeDashoffset = "10.45";
      const gpa = document.getElementById("gauge-gpa-count");
      if (gpa) gpa.textContent = "3.86";
      const line = document.getElementById("timeline-active-line");
      if (line) line.style.height = "100%";
      const spark = document.getElementById("sparkline-path");
      if (spark) spark.style.strokeDashoffset = "0";
      const dot = document.getElementById("sparkline-dot");
      if (dot) dot.style.opacity = "1";
      document.querySelectorAll(".lang-fill-bar").forEach(bar => {
        bar.style.width = bar.getAttribute("data-target") || "100%";
      });
      return;
    }

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!ScrollTrigger) return;

    // Check WebGL support
    function isWebGLAvailable() {
      try {
        const c = document.createElement("canvas");
        return !!(window.WebGLRenderingContext && (c.getContext("webgl") || c.getContext("experimental-webgl")));
      } catch (e) {
        return false;
      }
    }

    // 3D Engine Variables
    let threeScene = null;
    let threeCamera = null;
    let threeRenderer = null;
    let foundationGroup = null;
    let layerMeshes = [];
    let isThreeRendering = false;
    let threeRafId = null;
    let threeLoaded = false;
    let threeFailed = false;

    const canvasWrapper = document.getElementById("foundation-canvas-wrapper");
    const canvas = document.getElementById("foundation-canvas");
    const css3dFallback = document.getElementById("foundation-css3d");

    // Slabs initial compact and exploded positions
    const compactY = [0.58, 0.19, -0.19, -0.58];
    const explodedY = [1.85, 0.62, -0.62, -1.85];
    const explodeState = { progress: 0 };

    function activateCss3dFallback() {
      threeFailed = true;
      if (canvas) canvas.style.display = "none";
      if (css3dFallback) css3dFallback.classList.remove("hidden");
    }

    function initThreeScene(THREE) {
      if (!canvas || !canvasWrapper) return;
      try {
        const rect = canvasWrapper.getBoundingClientRect();
        const width = rect.width || 480;
        const height = rect.height || 420;

        threeScene = new THREE.Scene();
        threeCamera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
        threeCamera.position.set(0, 0, window.innerWidth < 768 ? 9.2 : 7.6);

        threeRenderer = new THREE.WebGLRenderer({
          canvas: canvas,
          alpha: true,
          antialias: true,
          powerPreference: "high-performance"
        });
        threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        threeRenderer.setSize(width, height);

        // Lighting
        const ambient = new THREE.AmbientLight(0xffffff, 0.7);
        threeScene.add(ambient);

        const dir1 = new THREE.DirectionalLight(0x78c9f5, 1.4);
        dir1.position.set(5, 8, 6);
        threeScene.add(dir1);

        const dir2 = new THREE.DirectionalLight(0x38bdf8, 0.8);
        dir2.position.set(-6, -4, -4);
        threeScene.add(dir2);

        const point = new THREE.PointLight(0x00f0ff, 1.5, 10);
        point.position.set(0, 0, 3.5);
        threeScene.add(point);

        foundationGroup = new THREE.Group();
        foundationGroup.rotation.x = 0.24;
        foundationGroup.rotation.y = -0.32;
        threeScene.add(foundationGroup);

        // Create 4 Glass Slabs
        const layerConfigs = [
          { base: 0x0a1c2a, edge: 0x78c9f5, core: 0x38bdf8 },
          { base: 0x082233, edge: 0x38bdf8, core: 0x0ea5e9 },
          { base: 0x062130, edge: 0x22d3ee, core: 0x06b6d4 },
          { base: 0x0c1e2b, edge: 0xa4dfff, core: 0x78c9f5 }
        ];

        function createSlabGeom() {
          try {
            const shape = new THREE.Shape();
            const w = 3.2, d = 1.8, r = 0.22;
            const hw = w / 2 - r, hd = d / 2 - r;
            shape.moveTo(-hw, -d / 2);
            shape.lineTo(hw, -d / 2);
            shape.quadraticCurveTo(w / 2, -d / 2, w / 2, -hd);
            shape.lineTo(w / 2, hd);
            shape.quadraticCurveTo(w / 2, d / 2, hw, d / 2);
            shape.lineTo(-hw, d / 2);
            shape.quadraticCurveTo(-w / 2, d / 2, -w / 2, hd);
            shape.lineTo(-w / 2, -hd);
            shape.quadraticCurveTo(-w / 2, -d / 2, -hw, -d / 2);
            const geom = new THREE.ExtrudeGeometry(shape, {
              depth: 0.30,
              bevelEnabled: true,
              bevelSegments: 2,
              steps: 1,
              bevelSize: 0.04,
              bevelThickness: 0.04
            });
            geom.center();
            return geom;
          } catch (e) {
            return new THREE.BoxGeometry(3.2, 0.34, 1.8);
          }
        }

        const slabGeom = createSlabGeom();

        layerMeshes = [];
        for (let i = 0; i < 4; i++) {
          const cfg = layerConfigs[i];
          const mat = new THREE.MeshPhysicalMaterial({
            color: cfg.base,
            metalness: 0.12,
            roughness: 0.12,
            transmission: 0.78,
            transparent: true,
            opacity: 0.85,
            reflectivity: 0.9,
            clearcoat: 0.85
          });

          const mesh = new THREE.Mesh(slabGeom, mat);
          mesh.position.y = compactY[i];

          // Edge outline
          const edges = new THREE.EdgesGeometry(slabGeom, 20);
          const line = new THREE.LineSegments(
            edges,
            new THREE.LineBasicMaterial({
              color: cfg.edge,
              transparent: true,
              opacity: 0.8,
              linewidth: 1.5
            })
          );
          mesh.add(line);

          // Glowing inner core plate
          const coreGeom = new THREE.PlaneGeometry(2.4, 1.1);
          const coreMat = new THREE.MeshBasicMaterial({
            color: cfg.core,
            transparent: true,
            opacity: 0.24,
            side: THREE.DoubleSide
          });
          const coreMesh = new THREE.Mesh(coreGeom, coreMat);
          coreMesh.rotation.x = Math.PI / 2;
          mesh.add(coreMesh);

          foundationGroup.add(mesh);
          layerMeshes.push(mesh);
        }

        threeLoaded = true;
        updateExplodedVisuals(explodeState.progress);
        startThreeRender();
      } catch (err) {
        console.warn("Three.js init error, switching to CSS 3D fallback:", err);
        activateCss3dFallback();
      }
    }

    function startThreeRender() {
      if (!isThreeRendering && threeScene && threeCamera && threeRenderer) {
        isThreeRendering = true;
        threeLoop();
      }
    }

    function stopThreeRender() {
      isThreeRendering = false;
      if (threeRafId) {
        cancelAnimationFrame(threeRafId);
        threeRafId = null;
      }
    }

    let idleClock = 0;
    function threeLoop() {
      if (!isThreeRendering) return;
      threeRafId = requestAnimationFrame(threeLoop);
      idleClock += 0.012;
      if (foundationGroup) {
        foundationGroup.position.y = Math.sin(idleClock) * 0.05;
      }
      threeRenderer.render(threeScene, threeCamera);
    }

    // Lazy load Three.js via CDN when section is approached
    function lazyLoadThreeJs(cb) {
      if (window.THREE) {
        cb(window.THREE);
        return;
      }
      if (!isWebGLAvailable()) {
        activateCss3dFallback();
        cb(null);
        return;
      }
      const s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
      s.async = true;
      s.onload = () => cb(window.THREE);
      s.onerror = () => {
        activateCss3dFallback();
        cb(null);
      };
      document.head.appendChild(s);
    }

    // Intersection observer for lazy load
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            lazyLoadThreeJs((THREE) => {
              if (THREE) initThreeScene(THREE);
            });
            io.disconnect();
          }
        });
      }, { rootMargin: "600px 0px" });
      io.observe(section);
    } else {
      lazyLoadThreeJs((THREE) => {
        if (THREE) initThreeScene(THREE);
      });
    }

    // Update 3D or CSS 3D exploded view
    function updateExplodedVisuals(p) {
      // If Three.js is loaded
      if (threeLoaded && layerMeshes.length === 4 && foundationGroup) {
        for (let i = 0; i < 4; i++) {
          layerMeshes[i].position.y = compactY[i] + (explodedY[i] - compactY[i]) * p;
        }
        foundationGroup.rotation.y = -0.32 + p * 0.70;
        foundationGroup.rotation.x = 0.24 + p * 0.12;
        if (!isThreeRendering) {
          threeRenderer.render(threeScene, threeCamera);
        }
      }
      // If CSS 3D fallback is active
      if (threeFailed || !threeLoaded) {
        const s0 = document.getElementById("css-slab-0");
        const s1 = document.getElementById("css-slab-1");
        const s2 = document.getElementById("css-slab-2");
        const s3 = document.getElementById("css-slab-3");
        if (s0 && s1 && s2 && s3) {
          const rx = 24 + p * 8;
          const ry = -18 + p * 36;
          s0.style.transform = `translateY(${-p * 75}px) translateZ(${p * 35}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
          s1.style.transform = `translateY(${-p * 25}px) translateZ(${p * 12}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
          s2.style.transform = `translateY(${p * 25}px) translateZ(${-p * 12}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
          s3.style.transform = `translateY(${p * 75}px) translateZ(${-p * 35}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        }
      }
    }

    // Pause Three.js render loop when out of viewport
    ScrollTrigger.create({
      trigger: "#about",
      start: "top bottom",
      end: "bottom top",
      onEnter: () => startThreeRender(),
      onLeave: () => stopThreeRender(),
      onEnterBack: () => startThreeRender(),
      onLeaveBack: () => stopThreeRender()
    });

    // MASTER STORYTELLING PINNED TIMELINE
    const storyTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
        end: () => (window.innerWidth < 768 ? "+=2200" : "+=3400"),
        pin: true,
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress;

          // Update mini progress bar
          const miniBar = document.getElementById("story-mini-bar");
          if (miniBar) miniBar.style.width = `${Math.min(100, Math.max(0, p * 100))}%`;

          // Update active HUD step and label
          const stepNum = document.getElementById("story-step-num");
          const stepLabel = document.getElementById("story-step-label");
          const isEn = window.currentLang === "en";

          let num = "01 / 04";
          let labelId = "INKUIRI";
          let labelEn = "INQUIRY";

          if (p < 0.24) {
            num = "01 / 04";
            labelId = "INKUIRI";
            labelEn = "INQUIRY";
          } else if (p < 0.49) {
            num = "02 / 04";
            labelId = "FONDASI 3D";
            labelEn = "3D FOUNDATION";
          } else if (p < 0.74) {
            num = "03 / 04";
            labelId = "BUKTI TERUKUR";
            labelEn = "EMPIRICAL METRICS";
          } else {
            num = "04 / 04";
            labelId = "DISIPLIN HARIAN";
            labelEn = "DAILY DISCIPLINE";
          }

          if (stepNum) stepNum.textContent = num;
          if (stepLabel) {
            stepLabel.setAttribute("data-lang-id", labelId);
            stepLabel.setAttribute("data-lang-en", labelEn);
            stepLabel.textContent = isEn ? labelEn : labelId;
          }

          // Active pointer events & visibility toggle (prevents any ghosting between scenes)
          const s1 = document.getElementById("story-scene-1");
          const s2 = document.getElementById("story-scene-2");
          const s3 = document.getElementById("story-scene-3");
          const s4 = document.getElementById("story-scene-4");

          if (s1) {
            const v1 = p < 0.24;
            s1.style.visibility = v1 ? "visible" : "hidden";
            s1.style.pointerEvents = v1 ? "auto" : "none";
          }
          if (s2) {
            const v2 = p >= 0.24 && p < 0.49;
            s2.style.visibility = v2 ? "visible" : "hidden";
            s2.style.pointerEvents = v2 ? "auto" : "none";
          }
          if (s3) {
            const v3 = p >= 0.49 && p < 0.74;
            s3.style.visibility = v3 ? "visible" : "hidden";
            s3.style.pointerEvents = v3 ? "auto" : "none";
          }
          if (s4) {
            const v4 = p >= 0.74;
            s4.style.visibility = v4 ? "visible" : "hidden";
            s4.style.pointerEvents = v4 ? "auto" : "none";
          }
        }
      }
    });

    // --------------------------------------------------------------------------
    // SCENE INITIAL STATES
    // --------------------------------------------------------------------------
    gsap.set("#story-scene-1", { opacity: 1, scale: 1, y: 0, visibility: "visible" });
    gsap.set(["#story-scene-2", "#story-scene-3", "#story-scene-4"], {
      opacity: 0,
      scale: 0.95,
      y: 25,
      visibility: "hidden"
    });

    // --------------------------------------------------------------------------
    // ADEGAN 1: PERTANYAAN (0.00 - 1.00)
    // --------------------------------------------------------------------------
    // Word by word reveal on non-accent q-word elements cleanly without blur
    storyTl.fromTo(
      "#story-scene-1 .q-word:not(.q-accent)",
      { opacity: 0.22, y: 6, color: "rgba(255, 255, 255, 0.35)" },
      { opacity: 1, y: 0, color: "#FFFFFF", stagger: 0.015, ease: "power2.out", duration: 0.22 },
      0.02
    );

    // Accent keyword reveal (dipertanyakan / unexamined)
    storyTl.fromTo(
      "#story-scene-1 .q-word.q-accent",
      { opacity: 0.25, y: 6, color: "rgba(120, 201, 245, 0.45)" },
      { opacity: 1, y: 0, color: "#78C9F5", ease: "power2.out", duration: 0.22 },
      0.10
    );

    // Scene 1 description reveals
    storyTl.fromTo(
      ".scene1-desc",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, ease: "power2.out", duration: 0.2 },
      0.20
    );

    // Scene 1 holds from 0.35 to 0.75, then exits smoothly
    storyTl.to(
      "#story-scene-1",
      { opacity: 0, scale: 0.94, y: -25, ease: "power2.inOut", duration: 0.18 },
      0.75
    );
    storyTl.set("#story-scene-1", { visibility: "hidden" }, 0.98);

    // --------------------------------------------------------------------------
    // ADEGAN 2: FONDASI TERBUKA (1.00 - 2.00)
    // --------------------------------------------------------------------------
    storyTl.set("#story-scene-2", { visibility: "visible" }, 1.00);
    // Scene 2 enters (fade in, scale 0.96 -> 1, y 25 -> 0)
    storyTl.fromTo(
      "#story-scene-2",
      { opacity: 0, scale: 0.96, y: 25 },
      { opacity: 1, scale: 1, y: 0, ease: "power2.out", duration: 0.18 },
      1.02
    );

    // Explode 3D layers
    storyTl.to(
      explodeState,
      {
        progress: 1,
        ease: "power1.inOut",
        duration: 0.42,
        onUpdate: () => updateExplodedVisuals(explodeState.progress)
      },
      1.15
    );

    // SVG leader lines draw
    storyTl.to(
      ".leader-path",
      { strokeDashoffset: 0, ease: "power1.inOut", duration: 0.42 },
      1.15
    );

    // Callout cards reveal
    storyTl.fromTo(
      ".callout-card",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, stagger: 0.08, ease: "power2.out", duration: 0.32 },
      1.22
    );

    // Scene 2 holds from 1.55 to 1.78, then exits
    storyTl.to(
      "#story-scene-2",
      { opacity: 0, scale: 0.92, y: -25, ease: "power2.inOut", duration: 0.18 },
      1.78
    );
    storyTl.set("#story-scene-2", { visibility: "hidden" }, 1.98);

    // --------------------------------------------------------------------------
    // ADEGAN 3: BUKTI TERUKUR (2.00 - 3.00)
    // --------------------------------------------------------------------------
    storyTl.set("#story-scene-3", { visibility: "visible" }, 2.00);
    // Scene 3 enters
    storyTl.fromTo(
      "#story-scene-3",
      { opacity: 0, scale: 0.96, y: 25 },
      { opacity: 1, scale: 1, y: 0, ease: "power2.out", duration: 0.18 },
      2.02
    );

    // Gauge arc fills to 96.5% (stroke-dashoffset from 298.45 to 10.45)
    storyTl.to(
      "#gauge-arc-path",
      { strokeDashoffset: 10.45, ease: "power2.out", duration: 0.42 },
      2.15
    );

    // GPA counter count-up
    const gpaCountObj = { val: 0 };
    storyTl.to(
      gpaCountObj,
      {
        val: 3.86,
        ease: "power2.out",
        duration: 0.42,
        onUpdate: () => {
          const el = document.getElementById("gauge-gpa-count");
          if (el) el.textContent = gpaCountObj.val.toFixed(2);
        }
      },
      2.15
    );

    // Psychometric rows stagger in
    storyTl.fromTo(
      ".psych-metric-row",
      { opacity: 0, x: -15 },
      { opacity: 1, x: 0, stagger: 0.07, ease: "power2.out", duration: 0.32 },
      2.22
    );

    // Multilingual progress bars fill
    storyTl.to(
      ".lang-fill-bar",
      {
        width: (idx, target) => target.getAttribute("data-target") || "100%",
        stagger: 0.05,
        ease: "power2.out",
        duration: 0.38
      },
      2.28
    );

    // Scene 3 holds from 2.58 to 2.78, then exits
    storyTl.to(
      "#story-scene-3",
      { opacity: 0, scale: 0.92, y: -25, ease: "power2.inOut", duration: 0.18 },
      2.78
    );
    storyTl.set("#story-scene-3", { visibility: "hidden" }, 2.98);

    // --------------------------------------------------------------------------
    // ADEGAN 4: DISIPLIN HARIAN (3.00 - 4.00)
    // --------------------------------------------------------------------------
    storyTl.set("#story-scene-4", { visibility: "visible" }, 3.00);
    // Scene 4 enters
    storyTl.fromTo(
      "#story-scene-4",
      { opacity: 0, scale: 0.96, y: 25 },
      { opacity: 1, scale: 1, y: 0, ease: "power2.out", duration: 0.18 },
      3.02
    );

    // Timeline stem fill height
    storyTl.to(
      "#timeline-active-line",
      { height: "100%", ease: "none", duration: 0.55 },
      3.10
    );

    // Step cards stagger in
    storyTl.fromTo(
      "#timeline-step-1",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, ease: "power2.out", duration: 0.22 },
      3.12
    );

    storyTl.fromTo(
      "#timeline-step-2",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, ease: "power2.out", duration: 0.22 },
      3.26
    );

    storyTl.fromTo(
      "#timeline-step-3",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, ease: "power2.out", duration: 0.22 },
      3.40
    );

    // Bitcoin DCA Sparkline path draws
    storyTl.to(
      "#sparkline-path",
      { strokeDashoffset: 0, ease: "power1.inOut", duration: 0.25 },
      3.46
    );

    // Sparkline peak dot
    storyTl.to(
      "#sparkline-dot",
      { opacity: 1, duration: 0.12 },
      3.60
    );

    // Closing Climax Banner
    storyTl.fromTo(
      "#story-closing-banner",
      { opacity: 0, scale: 0.95, y: 15 },
      { opacity: 1, scale: 1, y: 0, ease: "power2.out", duration: 0.25 },
      3.65
    );

    // Resize listener for 3D canvas
    window.addEventListener("resize", () => {
      if (threeLoaded && threeCamera && threeRenderer && canvasWrapper) {
        const r = canvasWrapper.getBoundingClientRect();
        const w = r.width || 480;
        const h = r.height || 420;
        threeCamera.aspect = w / h;
        threeCamera.position.z = window.innerWidth < 768 ? 9.2 : 7.6;
        threeCamera.updateProjectionMatrix();
        threeRenderer.setSize(w, h);
        if (!isThreeRendering) {
          threeRenderer.render(threeScene, threeCamera);
        }
      }
      ScrollTrigger.refresh();
    });
  }

  // 14.5 HEADER SCROLL OBSERVER (SOLID LIQUID GLASS DOCK)
  function setupHeaderScrollObserver() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      if (scrollY > 20) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // 15. INITIALIZATION LIFECYCLE
  function init() {
    // Set Year
    const yearEl = document.getElementById("current-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Setup Components
    window.setLanguage(window.currentLang);
    setupAudioHub();
    setupMobileNavigation();
    setupHeaderScrollObserver();
    setupTypingEffect();
    setupCustomCursor();
    setupSmoothScrollAndGsap();
    setupSection01Storytelling();
    setupModalScrollIsolation();

    // Close Modals & Drawers on ESC key
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        window.closeProjectModal();
        window.closeLightbox();
        window.closeMobileNav();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
