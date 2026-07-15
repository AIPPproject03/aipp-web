const foundation = [
  {
    titleId: "Inti Akademik",
    titleEn: "Academic Core",
    value: "S1 Informatika",
    noteId: "Universitas Palangka Raya • NIM 223020503162 • IPK 3.85/4.00",
    noteEn: "Universitas Palangka Raya • NIM 223020503162 • GPA 3.85/4.00",
  },
  {
    titleId: "Psikogram Bersertifikat",
    titleEn: "Certified Psychogram",
    value: "IQ 121",
    noteId: "Skala Wechsler • Kategori Superior",
    noteEn: "Wechsler scale • Superior category",
  },
  {
    titleId: "Kekuatan Kognitif",
    titleEn: "Cognitive Strengths",
    valueId: "Adaptasi Tinggi",
    valueEn: "High Adaptation",
    noteId: "Pemahaman konsep, konsistensi, integritas, dan sinergi",
    noteEn: "Concept comprehension, consistency, integrity, and synergy",
  },
  {
    titleId: "Etos Profil",
    titleEn: "Profile Ethos",
    valueId: "Membangun dengan Disiplin",
    valueEn: "Build with discipline",
    noteId: "Eksekusi rekayasa yang diperkuat oleh struktur atletik",
    noteEn: "Engineering execution reinforced by athletic structure",
  },
];

const languages = [
  { name: "Bahasa Indonesia", levelId: "Bahasa Ibu", levelEn: "Native", width: "100%" },
  { name: "English", levelId: "Kerja Terbatas", levelEn: "Limited Working", width: "68%" },
  { name: "Japanese", levelId: "Dasar", levelEn: "Elementary", width: "28%" },
  { name: "Latin", levelId: "Dasar", levelEn: "Elementary", width: "18%" },
];

const stackCategories = [
  {
    key: "frontend",
    labelId: "Inti Front-End",
    labelEn: "Front-End Core",
    summaryId: "Fondasi utama browser dan antarmuka aplikasi modern.",
    summaryEn: "Core browser foundations and modern app interfaces.",
    items: [
      {
        name: "Vanilla JavaScript (ES6+ Modules)",
        descId: "Dasar pemrograman web murni, modular, cepat, dan tanpa beban dependensi eksternal.",
        descEn: "Modern modular JavaScript for lightweight, ultra-fast browser logic without external dependencies."
      },
      {
        name: "HTML5",
        descId: "Struktur semantik dokumen web modern yang ramah SEO dan mudah diakses semua pengguna.",
        descEn: "Semantic markup structures optimized for accessibility, performance, and SEO best practices."
      },
      {
        name: "CSS3",
        descId: "Styling tingkat lanjut, tata letak Grid/Flexbox, dan transisi animasi hardware-accelerated.",
        descEn: "Advanced layouts, animations, transitions, and responsive grid patterns using vanilla styling."
      },
      {
        name: "TypeScript",
        descId: "Pengetikan ketat statis di atas JavaScript untuk meminimalkan bug runtime pada proyek besar.",
        descEn: "Statically typed JavaScript to catch structural errors early and maintain clean codebases."
      },
      {
        name: "Next.js",
        descId: "Framework React dengan Server-Side Rendering (SSR) untuk performa loading secepat kilat.",
        descEn: "Production-ready React framework enabling server-side rendering and static site generation."
      },
      {
        name: "React",
        descId: "Arsitektur berbasis komponen reaktif untuk membangun antarmuka web interaktif yang dinamis.",
        descEn: "Component-based reactive architecture for rendering modular and dynamic user interfaces."
      }
    ],
  },
  {
    key: "backend",
    labelId: "Back-End & Web3",
    labelEn: "Back-End & Web3",
    summaryId: "Lapisan integrasi server, data, dan kriptografi sisi klien.",
    summaryEn: "Server, data, and cryptographic integration layers.",
    items: [
      {
        name: "Node.js",
        descId: "Runtime server JavaScript berkinerja tinggi berbasis event-driven untuk skalabilitas tinggi.",
        descEn: "High-performance JavaScript runtime for scalable backend services and asynchronous processing."
      },
      {
        name: "Hono.js",
        descId: "Framework web minimalis ultra-cepat untuk edge computing dan arsitektur serverless.",
        descEn: "Ultrafast, lightweight web framework designed for cloudflare workers and serverless edges."
      },
      {
        name: "Prisma ORM",
        descId: "Pemetaan basis data tipe-aman untuk menulis query database relasional yang bersih.",
        descEn: "Type-safe database client and query builder designed for clean and direct schema migrations."
      },
      {
        name: "PostgreSQL",
        descId: "Sistem database relasional tangguh kelas enterprise untuk konsistensi transaksi data.",
        descEn: "Enterprise-grade relational database management system for secure transactional consistency."
      },
      {
        name: "MySQL",
        descId: "Database relasional populer yang cepat, andal, dan efisien untuk berbagai beban kerja.",
        descEn: "Robust, widely adopted relational database for reliable storage and low-latency queries."
      },
      {
        name: "ethers.js",
        descId: "Pustaka Javascript untuk interaksi aman dengan blockchain Ethereum dan smart contract.",
        descEn: "Lightweight utility library to securely interact with Ethereum nodes and smart contracts."
      },
      {
        name: "bitcoinjs-lib",
        descId: "Pustaka tingkat rendah untuk manipulasi transaksi Bitcoin dan pembuatan dompet kripto.",
        descEn: "Low-level JavaScript library for building raw Bitcoin transactions and wallet integrations."
      }
    ],
  },
  {
    key: "quant",
    labelId: "Quant Trading & AI",
    labelEn: "Quant Trading & AI",
    summaryId: "Sistem algoritmik perdagangan dan kecerdasan mesin terapan.",
    summaryEn: "Algorithmic systems and applied machine intelligence.",
    items: [
      {
        name: "MQL5 Expert Advisor",
        descId: "Pemrograman sistem robot trading otomatis terstruktur untuk analisis pasar real-time.",
        descEn: "Programming automated algorithmic trading systems for structured real-time market execution."
      },
      {
        name: "MetaTrader 5",
        descId: "Platform analitik perdagangan multi-aset profesional untuk pengujian strategi historis.",
        descEn: "Multi-asset financial platform used for backtesting, optimization, and manual trade entry."
      },
      {
        name: "Grid Strategy",
        descId: "Algoritma eksekusi trading berdasarkan jaring harga untuk memanfaatkan pasar sideways.",
        descEn: "A systematic trading algorithm placing orders at set intervals to profit from market ranges."
      },
      {
        name: "Martingale Strategy",
        descId: "Manajemen lot dinamis dengan pengali matematika untuk mengamankan pemulihan kerugian.",
        descEn: "Dynamic lot sizing strategy with mathematical multipliers designed for loss recovery cycles."
      },
      {
        name: "YOLOv11",
        descId: "Deteksi objek real-time mutakhir untuk vision AI dengan akurasi dan kecepatan tinggi.",
        descEn: "State-of-the-art visual AI model engineered for rapid and accurate real-time object detection."
      },
      {
        name: "Gemini API",
        descId: "Integrasi model AI multimodal Google untuk pemrosesan teks dan penalaran cerdas.",
        descEn: "Integrating Google's elite multimodal AI models for reasoning, analysis, and generation."
      }
    ],
  },
  {
    key: "soft",
    labelId: "Soft Skills",
    labelEn: "Soft Skills",
    summaryId: "Eksekusi tim, analisis, dan kepemimpinan operasional.",
    summaryEn: "Team execution, analysis, and operational leadership.",
    items: [
      {
        name: "Cross-Functional Leadership",
        descId: "Memimpin tim lintas disiplin ilmu untuk menyatukan visi rekayasa dan kesuksesan operasional.",
        descEn: "Leading multidisciplinary teams to align engineering rigor with operational targets."
      },
      {
        name: "Project Management",
        descId: "Perencanaan siklus hidup proyek rekayasa secara tepat waktu dengan mitigasi risiko terukur.",
        descEn: "Planning project lifecycles, resource allocations, and risk mitigation profiles."
      },
      {
        name: "Technical Data Analysis",
        descId: "Mengolah data mentah menjadi wawasan bisnis menggunakan visualisasi terstruktur.",
        descEn: "Processing complex datasets into actionable operational dashboards and insight tables."
      },
      {
        name: "SPSS",
        descId: "Analisis statistik mendalam untuk validasi data penelitian sosial dan akademis desa.",
        descEn: "Advanced statistical analysis software used for validating academic and civic field data."
      },
      {
        name: "Corporate Finance Analysis",
        descId: "Pemodelan keuangan, analisis neraca, dan perencanaan alokasi anggaran modal.",
        descEn: "Financial modeling, balance sheet analytics, and capital budget projection methods."
      },
      {
        name: "Statistical Risk Analysis",
        descId: "Pemodelan risiko matematika untuk menilai ketidakpastian dalam proyek dan perdagangan.",
        descEn: "Applying probability distributions to model operational uncertainties and tail-end risks."
      }
    ],
  },
];

const techSpotlights = {
  frontend: {
    titleId: "Instrumen Front-End",
    titleEn: "Front-End Instruments",
    copyId: "Polesan visual, kecepatan antarmuka, dan disiplin komponen digerakkan oleh alat-alat ini.",
    copyEn: "Visual polish, interface speed, and component discipline are driven by these tools.",
    items: [
      { name: "VS Code", icon: "devicon:vscode" },
      { name: "JavaScript", icon: "devicon:javascript" },
      { name: "TypeScript", icon: "devicon:typescript" },
      { name: "HTML5", icon: "devicon:html5" },
      { name: "CSS3", icon: "devicon:css3" },
      { name: "React", icon: "devicon:react" },
      { name: "Next.js", icon: "devicon:nextjs" },
      { name: "Tailwind", icon: "devicon:tailwindcss" },
    ],
  },
  backend: {
    titleId: "Sinyal Back-End & Web3",
    titleEn: "Back-End & Web3 Signals",
    copyId: "Logika server, integritas data, dan alur kerja kriptografi sisi klien membentuk inti yang aman.",
    copyEn: "Server logic, data integrity, and client-side cryptographic workflows form the secure core.",
    items: [
      { name: "Node.js", icon: "devicon:nodejs" },
      { name: "PostgreSQL", icon: "devicon:postgresql" },
      { name: "MySQL", icon: "devicon:mysql" },
      { name: "Prisma", icon: "devicon:prisma" },
      { name: "Hono.js", icon: "simple-icons:hono" },
      { name: "ethers.js", icon: "simple-icons:ethereum" },
      { name: "bitcoinjs-lib", icon: "simple-icons:bitcoin" },
      { name: "Web3", icon: "mdi:web" },
    ],
  },
  quant: {
    titleId: "Persenjataan Quant & AI",
    titleEn: "Quant AI Arsenal",
    copyId: "Otomatisasi perdagangan, pembelajaran mesin, dan integrasi AI praktis mempercepat eksekusi.",
    copyEn: "Trading automation, machine learning, and practical AI integrations sharpen execution speed.",
    items: [
      { name: "Python", icon: "devicon:python" },
      { name: "MQL5", icon: "ph:code-bold" },
      { name: "MetaTrader 5", icon: "mdi:finance" },
      { name: "YOLOv11", icon: "mdi:eye-outline" },
      { name: "Gemini API", icon: "simple-icons:googlegemini" },
      { name: "DCA", icon: "mdi:trending-up" },
      { name: "Calisthenics", icon: "mdi:dumbbell" },
      { name: "SPSS", icon: "mdi:chart-histogram" },
    ],
  },
  soft: {
    titleId: "Perangkat Kepemimpinan",
    titleEn: "Leadership Toolkit",
    copyId: "Koordinasi lintas fungsi, kemudi proyek, dan alur kerja strategis menjaga hasil tetap berdampak.",
    copyEn: "Cross-functional coordination, project steering, and strategic workflows keep outputs impactful.",
    items: [
      { name: "Leadership", icon: "mdi:account-group" },
      { name: "Project Mgmt", icon: "mdi:clipboard-text-outline" },
      { name: "Data Analysis", icon: "mdi:chart-box-outline" },
      { name: "Integrity", icon: "mdi:shield-check-outline" },
      { name: "Synergy", icon: "mdi:account-multiple" },
      { name: "Focus", icon: "mdi:target" },
      { name: "Planning", icon: "mdi:clipboard-edit-outline" },
      { name: "Communication", icon: "mdi:message-text-outline" },
    ],
  },
};

const athleticTimeline = [
  {
    titleId: "Juara I Beregu Putra & Juara I Ganda Taruna Putra",
    titleEn: "1st Place Men's Team & 1st Place Men's Junior Doubles",
    detailId: "PORPROV XII Kalimantan Tengah 2023",
    detailEn: "PORPROV XII Central Kalimantan 2023",
  },
  {
    titleId: "Atlet Delegasi",
    titleEn: "Delegate Athlete",
    detailId: "Seleksi Nasional (Seleknas) PBSI di Pelatnas Cipayung 2022",
    detailEn: "National Selection (Seleknas) PBSI at Pelatnas Cipayung 2022",
  },
  {
    titleId: "Kompetitor Nasional",
    titleEn: "National Competitor",
    detailId: "POMNAS XVII (2022) & XVIII (2023)",
    detailEn: "POMNAS XVII (2022) & XVIII (2023)",
  },
  {
    titleId: "Kompetitor Nasional",
    titleEn: "National Competitor",
    detailId: "O2SN SMP 2017",
    detailEn: "O2SN Junior High School 2017",
  },
];

const typingRoles = {
  id: [
    "Rekayasa Informatika",
    "Spesialis Web3",
    "Atlet Bulu Tangkis",
  ],
  en: [
    "Informatics Engineer",
    "Web3 Specialist",
    "Elite Athlete",
  ]
};

const foundationGrid = document.getElementById("foundation-grid");
const languageList = document.getElementById("language-list");
const stackTabs = document.getElementById("stack-tabs");
const stackPanel = document.getElementById("stack-panel");
const projectFiltersEl = document.getElementById("project-filters");
const projectGrid = document.getElementById("project-grid");
const athleticTimelineEl = document.getElementById("athletic-timeline");
const typingRoleEl = document.getElementById("typing-role");
const yearEl = document.getElementById("year");
const heroSection = document.getElementById("hero");
const cursorGlow = document.querySelector(".cursor-glow");
const techTitle = document.getElementById("tech-title");
const techCopy = document.getElementById("tech-copy");
const techGrid = document.getElementById("tech-grid");
const stackStage = document.getElementById("stack-stage");

function animateFreshContent(root, selector) {
  if (!window.gsap) return;

  const elements = root.querySelectorAll(selector);
  if (!elements.length) return;

  gsap.fromTo(
    elements,
    { y: 20, opacity: 0, scale: 0.96 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.65,
      ease: "power3.out",
      stagger: 0.06,
      clearProps: "transform,opacity",
    },
  );
}

function setupGsapAnimations() {
  if (!window.gsap) return;

  const scrollTrigger = window.ScrollTrigger;
  const isMobile = window.innerWidth < 768;
  const dFactor = isMobile ? 0.7 : 1; // Speed up animations on mobile

  if (scrollTrigger) {
    gsap.registerPlugin(scrollTrigger);
  }

  // Text split word reveal effect for hero title
  const titleEl = document.querySelector("[data-hero-title]");
  if (titleEl) {
    const originalText = titleEl.textContent.trim();
    const words = originalText.split(/\s+/);
    titleEl.innerHTML = words
      .map(
        (word) =>
          `<span class="inline-block overflow-hidden pb-1"><span class="hero-word inline-block">${word}</span></span>`
      )
      .join(" ");
  }

  // Hide hero elements initially
  gsap.set(
    [
      "[data-hero-badge]",
      "[data-hero-kicker]",
      "[data-hero-subtitle]",
      "[data-hero-summary]",
      "[data-hero-actions]",
      "[data-hero-stats]",
      "[data-hero-panel]",
    ],
    { opacity: 0, y: 18 },
  );

  if (titleEl) {
    gsap.set(".hero-word", { yPercent: 102 });
  }

  // Simplified hero entrance timeline (fewer sequential steps)
  const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
  heroTimeline
    .to("[data-hero-badge]", { opacity: 1, y: 0, duration: 0.5 * dFactor });

  if (titleEl) {
    heroTimeline.to(".hero-word", { yPercent: 0, duration: 0.7 * dFactor, stagger: 0.06, ease: "power4.out" }, "-=0.15");
  } else {
    heroTimeline.to("[data-hero-title]", { opacity: 1, y: 0, duration: 0.6 * dFactor }, "-=0.1");
  }

  // Batch the remaining hero elements together for snappier feel
  heroTimeline
    .to(
      ["[data-hero-kicker]", "[data-hero-summary]", "[data-hero-actions]"],
      { opacity: 1, y: 0, duration: 0.5 * dFactor, stagger: 0.08 },
      "-=0.3"
    )
    .to(
      ["[data-hero-stats]", "[data-hero-panel]"],
      { opacity: 1, y: 0, duration: 0.6 * dFactor, stagger: 0.1 },
      "-=0.35"
    );

  // Drifting Background Orbs with Mouse Parallax
  function animateOrbDrift(selector, duration) {
    const orb = document.querySelector(selector);
    if (!orb) return;

    const randomX = () => gsap.utils.random(-80, 80);
    const randomY = () => gsap.utils.random(-80, 80);
    const randomScale = () => gsap.utils.random(0.85, 1.25);

    const driftCycle = () => {
      gsap.to(orb, {
        x: randomX(),
        y: randomY(),
        scale: randomScale(),
        duration: duration,
        ease: "sine.inOut",
        onComplete: driftCycle,
      });
    };

    driftCycle();

    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", (e) => {
        const shiftX = (e.clientX - window.innerWidth / 2) * -0.015;
        const shiftY = (e.clientY - window.innerHeight / 2) * -0.015;

        gsap.to(orb, {
          xPercent: shiftX,
          yPercent: shiftY,
          duration: 2.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    }
  }

  if (window.innerWidth >= 1024) {
    animateOrbDrift(".orb-cyan", 15);
    animateOrbDrift(".orb-gold", 18);
    animateOrbDrift(".orb-slate", 22);
  }

  // Parallax hero panel scroll trigger
  gsap.to("[data-hero-panel]", {
    y: -14,
    ease: "none",
    scrollTrigger: scrollTrigger
      ? {
        trigger: heroSection,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      }
      : undefined,
  });

  // Section titles reveal trigger
  gsap.utils
    .toArray(".section-kicker, .section-title, .section-copy")
    .forEach((element) => {
      gsap.fromTo(
        element,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: scrollTrigger
            ? {
              trigger: element,
              start: "top 88%",
              once: true,
            }
            : undefined,
        },
      );
    });

  if (scrollTrigger && window.innerWidth >= 1024) {
    // Scroll trigger batches for card entry (Desktop only)
    scrollTrigger.batch(
      ".glass-panel, .foundation-card, .skill-card, .project-card, .stat-card, .metric-card",
      {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { y: 32, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              ease: "power3.out",
              stagger: 0.06,
            },
          ),
      },
    );
  }

  if (scrollTrigger) {
    // Pinned Stack section
    const matchMedia = gsap.matchMedia();
    matchMedia.add("(min-width: 1024px)", () => {
      const pin = scrollTrigger.create({
        trigger: stackStage,
        start: "top top+=90",
        end: "+=120%",
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });

      return () => pin.kill();
    });

    // Metric Count-ups
    const counters = [
      { el: document.querySelector('.metric-card:nth-child(1) .metric-value'), target: 121, template: 'IQ {val}', decimals: 0 },
      { el: document.querySelector('.metric-card:nth-child(2) .metric-value'), target: 3.85, template: '{val}/4.00', decimals: 2 },
      { el: document.querySelector('.stat-card:nth-child(1) .stat-value'), target: 15, template: '{val}', decimals: 0 },
      { el: document.querySelector('.stat-card:nth-child(2) .stat-value'), target: 75, template: '{val}%+', decimals: 0 },
      { el: document.querySelector('.stat-card:nth-child(3) .stat-value'), target: 1, template: '{val}', decimals: 0 }
    ];

    counters.forEach(item => {
      if (!item.el) return;

      const obj = { value: 0 };
      gsap.fromTo(obj, { value: 0 }, {
        value: item.target,
        scrollTrigger: {
          trigger: item.el,
          start: "top 92%",
          once: true
        },
        duration: 1.8,
        ease: "power2.out",
        onUpdate: () => {
          const valFormatted = obj.value.toFixed(item.decimals);
          item.el.textContent = item.template.replace('{val}', valFormatted);
        }
      });
    });

    // Discipline index fill & value text count up
    const dispVal = document.querySelector('.hero-panel p.font-pixel');
    const dispBar = document.querySelector('.hero-panel .mt-3 div > div');
    if (dispVal && dispBar) {
      gsap.set(dispBar, { width: "0%" });
      const obj = { val: 0 };
      gsap.fromTo(obj, { val: 0 }, {
        val: 92,
        scrollTrigger: {
          trigger: dispVal,
          start: "top 92%",
          once: true
        },
        duration: 1.6,
        ease: "power3.out",
        onUpdate: () => {
          dispVal.textContent = Math.round(obj.val) + "%";
          dispBar.style.width = obj.val + "%";
        }
      });
    }

    // SVG Timeline line-drawing path
    const timelinePath = document.getElementById("timeline-path");
    if (timelinePath) {
      const pathLength = timelinePath.getTotalLength();

      gsap.set(timelinePath, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength
      });

      gsap.to(timelinePath, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-svg-container",
          start: "top 60%",
          end: "bottom 70%",
          scrub: 0.5
        }
      });

      const timelineItems = document.querySelectorAll(".timeline-item");
      timelineItems.forEach((item) => {
        scrollTrigger.create({
          trigger: item,
          start: "top 65%",
          end: "bottom 70%",
          onEnter: () => item.classList.add("active"),
          onLeaveBack: () => item.classList.remove("active"),
          onEnterBack: () => item.classList.add("active")
        });
      });
    }

    scrollTrigger.refresh();
  }
}

function setupCursorGlow() {
  if (!window.gsap) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;
  if (window.innerWidth < 1024) return; // Skip on small screens

  const cursor = document.querySelector(".custom-cursor");
  const cursorDot = document.querySelector(".custom-cursor-dot");

  const hasGlow = !!cursorGlow;
  const hasCursor = !!cursor && !!cursorDot;

  let moveGlowX, moveGlowY, glowFadeIn, glowFadeOut;
  if (hasGlow) {
    moveGlowX = gsap.quickTo(cursorGlow, "x", { duration: 0.45, ease: "power3.out" });
    moveGlowY = gsap.quickTo(cursorGlow, "y", { duration: 0.45, ease: "power3.out" });
    glowFadeIn = () => gsap.to(cursorGlow, { opacity: 1, duration: 0.2 });
    glowFadeOut = () => gsap.to(cursorGlow, { opacity: 0, duration: 0.35 });
  }

  let moveCursorX, moveCursorY, moveDotX, moveDotY;
  if (hasCursor) {
    moveCursorX = gsap.quickTo(cursor, "x", { duration: 0.28, ease: "power3.out" });
    moveCursorY = gsap.quickTo(cursor, "y", { duration: 0.28, ease: "power3.out" });
    moveDotX = gsap.quickTo(cursorDot, "x", { duration: 0.08, ease: "power3.out" });
    moveDotY = gsap.quickTo(cursorDot, "y", { duration: 0.08, ease: "power3.out" });

    gsap.set([cursor, cursorDot], { opacity: 0 });
  }

  let cursorVisible = false;
  let rafId = null;

  document.addEventListener("pointermove", (event) => {
    if (rafId) return; // RAF throttle: skip if a frame is already queued
    rafId = requestAnimationFrame(() => {
      const { clientX, clientY } = event;

      if (hasGlow) {
        moveGlowX(clientX);
        moveGlowY(clientY);
        glowFadeIn();
      }

      if (hasCursor) {
        moveCursorX(clientX);
        moveCursorY(clientY);
        moveDotX(clientX);
        moveDotY(clientY);

        if (!cursorVisible) {
          gsap.to([cursor, cursorDot], { opacity: 1, duration: 0.3 });
          cursorVisible = true;
        }
      }
      rafId = null;
    });
  });

  const onLeave = () => {
    if (hasGlow) glowFadeOut();
    if (hasCursor) {
      gsap.to([cursor, cursorDot], { opacity: 0, duration: 0.35 });
      cursorVisible = false;
    }
  };

  const onEnter = () => {
    if (hasCursor) {
      gsap.to([cursor, cursorDot], { opacity: 1, duration: 0.25 });
      cursorVisible = true;
    }
  };

  document.addEventListener("pointerleave", onLeave);
  document.addEventListener("mouseleave", onLeave);
  document.addEventListener("pointerenter", onEnter);
  document.addEventListener("mouseenter", onEnter);

  // Use event delegation on document body to handle hover state scale-up
  document.body.addEventListener("mouseover", (event) => {
    const target = event.target;
    if (!target) return;
    const hoverable = target.closest("a, button, .stack-tab, .filter-chip, .tech-card, .project-card, .foundation-card, .metric-card, .mini-ribbon");
    if (hoverable && hasCursor) {
      cursor.classList.add("hovered");
    }
  });

  document.body.addEventListener("mouseout", (event) => {
    const target = event.target;
    if (!target) return;
    const hoverable = target.closest("a, button, .stack-tab, .filter-chip, .tech-card, .project-card, .foundation-card, .metric-card, .mini-ribbon");
    if (hoverable && hasCursor) {
      cursor.classList.remove("hovered");
    }
  });
}

function setupMagneticInteractions() {
  if (!window.gsap) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;
  if (window.innerWidth < 1024) return; // Desktop-only interaction

  document
    .querySelectorAll(
      ".btn-primary, .btn-secondary, .nav-link, .footer-link, .stack-tab, .filter-chip, .tech-card",
    )
    .forEach((element) => {
      element.addEventListener("mousemove", (event) => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.15;

        gsap.to(element, {
          x: x,
          y: y,
          scale: 1.02,
          duration: 0.3,
          ease: "power3.out"
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          scale: 1.0,
          duration: 0.5,
          ease: "power3.out"
        });
      });
    });
}

function setupCardTilt() {
  if (!window.gsap) return;
  if (window.innerWidth < 768) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const cards = document.querySelectorAll(".project-card, .glass-panel, .foundation-card, .metric-card");
  cards.forEach((card) => {
    card.classList.add("tilt-card");

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformOrigin: "center center",
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto"
      });

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.65,
        ease: "power3.out",
        overwrite: "auto"
      });
    });
  });
}

function renderFoundation() {
  const isEn = window.currentLang === "en";
  foundationGrid.innerHTML = foundation
    .map(
      (item) => `
        <article class="foundation-card">
          <p class="foundation-kicker">${isEn ? item.titleEn : item.titleId}</p>
          <h4 class="foundation-value">${isEn ? (item.valueEn || item.value) : (item.valueId || item.value)}</h4>
          <p class="foundation-note">${isEn ? item.noteEn : item.noteId}</p>
        </article>
      `,
    )
    .join("");
}

function renderLanguages() {
  const isEn = window.currentLang === "en";
  languageList.innerHTML = languages
    .map(
      (language) => `
        <div class="language-item">
          <div class="language-row">
            <span class="language-name">${language.name}</span>
            <span class="language-level">${isEn ? language.levelEn : language.levelId}</span>
          </div>
          <div class="language-bar">
            <div class="language-fill" style="width: ${language.width}"></div>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderStackTabs(activeKey = "frontend") {
  const isEn = window.currentLang === "en";
  stackTabs.innerHTML = stackCategories
    .map(
      (category) => `
        <button
          class="stack-tab"
          type="button"
          role="tab"
          aria-selected="${category.key === activeKey}"
          data-stack-tab="${category.key}"
        >
          <span class="stack-tab-title">${isEn ? category.labelEn : category.labelId}</span>
          <span class="stack-tab-desc">${isEn ? category.summaryEn : category.summaryId}</span>
        </button>
      `,
    )
    .join("");
}

function renderStackPanel(activeKey = "frontend") {
  const cards = stackPanel.querySelectorAll(".skill-card");
  if (cards.length > 0) {
    gsap.to(cards, {
      opacity: 0,
      scale: 0.95,
      y: -10,
      duration: 0.2,
      stagger: 0.02,
      ease: "power2.in",
      onComplete: () => {
        executeRenderStackPanel(activeKey);
      }
    });
  } else {
    executeRenderStackPanel(activeKey);
  }
}

function executeRenderStackPanel(activeKey) {
  const isEn = window.currentLang === "en";
  const category =
    stackCategories.find((entry) => entry.key === activeKey) ??
    stackCategories[0];

  stackPanel.innerHTML = category.items
    .map(
      (item, index) => `
        <article class="skill-card reveal">
          <p class="skill-index">Skill ${String(index + 1).padStart(2, "0")}</p>
          <h4 class="skill-title">${item.name}</h4>
          <p class="skill-copy">${isEn ? item.descEn : item.descId}</p>
        </article>
      `,
    )
    .join("");

  const newCards = stackPanel.querySelectorAll(".skill-card");
  gsap.fromTo(
    newCards,
    { opacity: 0, scale: 0.95, y: 15 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power3.out",
      clearProps: "transform,opacity"
    }
  );

  renderTechSpotlight(activeKey);
  observeReveals();
}

function renderTechSpotlight(activeKey = "frontend") {
  const cards = techGrid.querySelectorAll(".tech-card");
  if (cards.length > 0) {
    gsap.to(cards, {
      opacity: 0,
      scale: 0.92,
      duration: 0.18,
      stagger: 0.02,
      ease: "power2.in",
      onComplete: () => {
        executeRenderTechSpotlight(activeKey);
      }
    });
  } else {
    executeRenderTechSpotlight(activeKey);
  }
}

function executeRenderTechSpotlight(activeKey) {
  const isEn = window.currentLang === "en";
  const spotlight = techSpotlights[activeKey] ?? techSpotlights.frontend;
  techTitle.textContent = isEn ? spotlight.titleEn : spotlight.titleId;
  techCopy.textContent = isEn ? spotlight.copyEn : spotlight.copyId;

  techGrid.innerHTML = spotlight.items
    .map(
      (item) => `
        <article class="tech-card reveal">
          ${item.icon ? `<iconify-icon icon="${item.icon}" class="tech-icon"></iconify-icon>` : `<span class="tech-glyph">${item.glyph}</span>`}
          <span class="tech-name">${item.name}</span>
        </article>
      `,
    )
    .join("");

  const newCards = techGrid.querySelectorAll(".tech-card");
  gsap.fromTo(
    newCards,
    { opacity: 0, scale: 0.92, y: 10 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.45,
      stagger: 0.04,
      ease: "power3.out",
      clearProps: "transform,opacity"
    }
  );

  observeReveals();
}



function renderAthletics() {
  const isEn = window.currentLang === "en";
  athleticTimelineEl.innerHTML = athleticTimeline
    .map(
      (item) => `
        <div class="timeline-item pb-4">
          <p class="timeline-title">${isEn ? item.titleEn : item.titleId}</p>
          <p class="timeline-detail">${isEn ? item.detailEn : item.detailId}</p>
        </div>
      `,
    )
    .join("");
}

function setupTypingEffect() {
  let roleIndex = 0;
  let charIndex = 0;
  let removing = false;

  const tick = () => {
    const roles = typingRoles[window.currentLang] || typingRoles.en;
    const activeRole = roles[roleIndex % roles.length];
    const nextText = removing
      ? activeRole.slice(0, Math.max(0, charIndex - 1))
      : activeRole.slice(0, charIndex + 1);
    typingRoleEl.textContent = nextText;
    charIndex = removing ? charIndex - 1 : charIndex + 1;

    if (!removing && charIndex === activeRole.length) {
      removing = true;
      setTimeout(tick, 1300);
      return;
    }

    if (removing && charIndex === 0) {
      removing = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(tick, 280);
      return;
    }

    setTimeout(tick, removing ? 55 : 85);
  };

  tick();
}

function setupTabs() {
  stackTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-stack-tab]");
    if (!button) return;
    const { stackTab } = button.dataset;
    renderStackTabs(stackTab);
    renderStackPanel(stackTab);
    observeReveals();
  });
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
    { threshold: 0.12 },
  );

  document
    .querySelectorAll(".reveal")
    .forEach((node) => revealObserver.observe(node));
}

window.currentLang = localStorage.getItem("aipp-lang") || "id";

window.setLanguage = function (lang) {
  window.currentLang = lang;
  localStorage.setItem("aipp-lang", lang);

  // Update navbar language switcher buttons active states
  const btnId = document.getElementById("lang-id");
  const btnEn = document.getElementById("lang-en");
  if (btnId && btnEn) {
    if (lang === "id") {
      btnId.className = "px-1.5 py-0.5 rounded-none transition-colors text-cyan-300 bg-cyan-400/15";
      btnEn.className = "px-1.5 py-0.5 rounded-none transition-colors text-white/40 hover:text-white/80";
    } else {
      btnEn.className = "px-1.5 py-0.5 rounded-none transition-colors text-cyan-300 bg-cyan-400/15";
      btnId.className = "px-1.5 py-0.5 rounded-none transition-colors text-white/40 hover:text-white/80";
    }
  }

  // Update all static HTML elements with translation attributes
  document.querySelectorAll("[data-lang-id]").forEach((el) => {
    el.innerHTML = lang === "id" ? el.getAttribute("data-lang-id") : el.getAttribute("data-lang-en");
  });

  // Re-render dynamic elements
  renderFoundation();
  renderLanguages();

  // Pick active stack panel keys to preserve selection
  const activeTabBtn = document.querySelector("[data-stack-tab][aria-selected='true']");
  const activeTabKey = activeTabBtn ? activeTabBtn.getAttribute("data-stack-tab") : "frontend";
  renderStackTabs(activeTabKey);
  renderStackPanel(activeTabKey);



  renderAthletics();
};

function updateActiveNavOnScroll() {
  const sections = ["foundation", "stack", "projects", "athletics", "impact"];
  const navLinks = document.querySelectorAll(".mobile-nav-link");
  if (!navLinks.length) return;

  let currentSectionId = "";
  // Check the section occupying the top third of the viewport
  const scrollPosition = window.scrollY + window.innerHeight / 3;

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop;
      const height = el.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSectionId = id;
      }
    }
  });

  // Force active state for the final section when scrolled to the very bottom
  if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 80) {
    currentSectionId = "impact";
  }

  if (currentSectionId) {
    navLinks.forEach((link) => {
      const href = link.getAttribute("href").substring(1);
      if (href === currentSectionId) {
        if (!link.classList.contains("active")) {
          link.classList.add("active");
          const icon = link.querySelector("iconify-icon");
          if (icon) {
            gsap.fromTo(icon,
              { scale: 0.7, y: 0 },
              { scale: 1.15, y: -3, duration: 0.45, ease: "back.out(2.2)" }
            );
          }
        }
      } else {
        if (link.classList.contains("active")) {
          link.classList.remove("active");
          const icon = link.querySelector("iconify-icon");
          if (icon) {
            gsap.to(icon, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" });
          }
        }
      }
    });
  }
}

function setupMobileActiveNav() {
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const icon = link.querySelector("iconify-icon");
      if (icon) {
        gsap.fromTo(icon,
          { scale: 0.6, y: 0 },
          { scale: 1.25, y: -5, duration: 0.4, ease: "back.out(2.5)" }
        );
      }
    });
  });

  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveNavOnScroll();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  updateActiveNavOnScroll();
}

function setupBackgroundMusic() {
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
      console.warn("Web Audio API visualizer failed to initialize (likely CORS, file:// protocol, or browser restriction). Falling back to CSS animation.", e);
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
        const r = Math.round(34 + smoothBass * (236 - 34));   // 0x22 -> 0xEC
        const g = Math.round(211 + smoothBass * (72 - 211));  // 0xD3 -> 0x48
        const b = Math.round(238 + smoothBass * (153 - 238)); // 0xEE -> 0x99
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
    currentHeights = [3, 3, 3, 3, 3, 3, 3];
  };

  const playMusic = () => {
    const savedTime = parseFloat(localStorage.getItem("aipp-music-time")) || 0;
    bgMusic.currentTime = savedTime;

    bgMusic.play().then(() => {
      isPlaying = true;
      musicContainer.classList.add("playing");
      musicContainer.classList.add("eq-active");

      startVisualizer();

      // GSAP Squash and Stretch Launch Timeline
      const tl = gsap.timeline();
      gsap.killTweensOf([musicToggle, musicRobot]);
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
          "<" // start exactly when capsule rebounds
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
      gsap.to(playIcon, { scale: 0, opacity: 0, duration: 0.25 });

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

    // Retract robot back inside capsule bubble
    gsap.killTweensOf([musicToggle, musicRobot]);
    const tl = gsap.timeline();

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
    gsap.to(playIcon, { scale: 1, opacity: 1, duration: 0.25 });

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



function setupProjectsPortal() {
  const portalLink = document.querySelector('a[href="projects/projects.html"]');
  const portalOverlay = document.getElementById("portal-overlay");
  const portalLoader = document.getElementById("portal-loader");
  const portalIframe = document.getElementById("portal-iframe");

  if (portalLink && portalOverlay && portalIframe) {
    portalLink.addEventListener("click", (e) => {
      e.preventDefault();

      // Show portal overlay
      portalOverlay.classList.remove("pointer-events-none");
      gsap.to(portalOverlay, { opacity: 1, duration: 0.4, ease: "power2.out" });

      // Show loader
      if (portalLoader) {
        portalLoader.style.opacity = "1";
        portalLoader.style.pointerEvents = "auto";
      }

      // Load iframe
      portalIframe.src = "projects/projects.html";

      // When iframe loads, hide loading screen
      portalIframe.onload = () => {
        if (portalLoader) {
          gsap.to(portalLoader, {
            opacity: 0,
            duration: 0.5,
            delay: 0.3,
            onComplete: () => {
              portalLoader.style.pointerEvents = "none";
            }
          });
        }
      };
    });
  }

  // Global window function so iframe can call it to close itself
  window.closeProjectsPortal = function () {
    if (portalOverlay && portalIframe) {
      gsap.to(portalOverlay, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          portalOverlay.classList.add("pointer-events-none");
          portalIframe.src = ""; // unload iframe to save resources
        }
      });
    }
  };
}

function init() {
  window.setLanguage(window.currentLang);
  setupMobileActiveNav();
  setupBackgroundMusic();
  setupTypingEffect();
  setupTabs();
  observeReveals();
  setupGsapAnimations();
  setupCursorGlow();
  setupMagneticInteractions();
  setupCardTilt();
  setupProjectsPortal();
  yearEl.textContent = new Date().getFullYear();
}

init();
