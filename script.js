const foundation = [
  {
    title: "Academic Core",
    value: "S1 Informatika",
    note: "Universitas Palangka Raya • NIM 223020503162 • GPA 3.85/4.00",
  },
  {
    title: "Certified Psychogram",
    value: "IQ 121",
    note: "Wechsler scale • Superior category",
  },
  {
    title: "Cognitive Strengths",
    value: "High Adaptation",
    note: "Concept comprehension, consistency, integrity, and synergy",
  },
  {
    title: "Profile Ethos",
    value: "Build with discipline",
    note: "Engineering execution reinforced by athletic structure",
  },
];

const languages = [
  { name: "Bahasa Indonesia", level: "Native", width: "100%" },
  { name: "English", level: "Limited Working", width: "68%" },
  { name: "Japanese", level: "Elementary", width: "28%" },
  { name: "Latin", level: "Elementary", width: "18%" },
];

const stackCategories = [
  {
    key: "frontend",
    label: "Front-End Core",
    summary: "Core browser foundations and modern app interfaces.",
    items: [
      "Vanilla JavaScript (ES6+ Modules)",
      "HTML5",
      "CSS3",
      "TypeScript",
      "Next.js",
      "React",
    ],
  },
  {
    key: "backend",
    label: "Back-End & Web3",
    summary: "Server, data, and cryptographic integration layers.",
    items: [
      "Node.js",
      "Hono.js",
      "Prisma ORM",
      "PostgreSQL",
      "MySQL",
      "ethers.js",
      "bitcoinjs-lib",
    ],
  },
  {
    key: "quant",
    label: "Quant Trading & AI",
    summary: "Algorithmic systems and applied machine intelligence.",
    items: [
      "MQL5 Expert Advisor",
      "MetaTrader 5",
      "Grid Strategy",
      "Martingale Strategy",
      "YOLOv11",
      "Gemini API",
    ],
  },
  {
    key: "soft",
    label: "Soft Skills",
    summary: "Team execution, analysis, and operational leadership.",
    items: [
      "Cross-Functional Leadership",
      "Project Management",
      "Technical Data Analysis",
      "SPSS",
      "Corporate Finance Analysis",
      "Statistical Risk Analysis",
    ],
  },
];

const techSpotlights = {
  frontend: {
    title: "Front-End Instruments",
    copy: "Visual polish, interface speed, and component discipline are driven by these tools.",
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
    title: "Back-End & Web3 Signals",
    copy: "Server logic, data integrity, and client-side cryptographic workflows form the secure core.",
    items: [
      { name: "Node.js", icon: "devicon:nodejs" },
      { name: "PostgreSQL", icon: "devicon:postgresql" },
      { name: "MySQL", icon: "devicon:mysql" },
      { name: "Prisma", icon: "devicon:prisma" },
      { name: "Hono.js", glyph: "H" },
      { name: "ethers.js", glyph: "Ξ" },
      { name: "bitcoinjs-lib", glyph: "₿" },
      { name: "Web3", icon: "mdi:web" },
    ],
  },
  quant: {
    title: "Quant AI Arsenal",
    copy: "Trading automation, machine learning, and practical AI integrations sharpen execution speed.",
    items: [
      { name: "Python", icon: "devicon:python" },
      { name: "MQL5", glyph: "M5" },
      { name: "MetaTrader 5", glyph: "MT5" },
      { name: "YOLOv11", icon: "mdi:target" },
      { name: "Gemini API", glyph: "G" },
      { name: "DCA", icon: "mdi:chart-line" },
      { name: "Calisthenics", icon: "mdi:dumbbell" },
      { name: "SPSS", glyph: "S" },
    ],
  },
  soft: {
    title: "Leadership Toolkit",
    copy: "Cross-functional coordination, project steering, and analysis keep the work consistent and useful.",
    items: [
      { name: "Leadership", icon: "mdi:account-group" },
      { name: "Project Mgmt", icon: "mdi:clipboard-text-outline" },
      { name: "Data Analysis", icon: "mdi:chart-box-outline" },
      { name: "Integrity", glyph: "IQ" },
      { name: "Synergy", icon: "mdi:account-multiple" },
      { name: "Focus", icon: "mdi:target" },
      { name: "Planning", icon: "mdi:route" },
      { name: "Communication", icon: "mdi:message-text-outline" },
    ],
  },
};

const projects = [
  {
    id: "wallet",
    category: "flagship",
    label: "Flagship Academic Project",
    title: "AIPP.Wallet",
    description:
      "A highly secure, non-custodial multi-chain crypto wallet prioritizing complete client-side security and independent user control over private keys.",
    stack: ["Vanilla JavaScript", "ethers.js", "bitcoinjs-lib"],
    meta: ["Client-side signing", "Multi-chain security", "Zero custody"],
    github: "https://github.com/AIPPproject03/aipp-wallet",
    images: [
      "img/AIPP-WALLET/logo-aipp-wallet.png",
      "img/AIPP-WALLET/aipp-wallet-1.png",
      "img/AIPP-WALLET/aipp-wallet-2.png",
      "img/AIPP-WALLET/aipp-wallet-3.png"
    ],
    story: {
      background: "AIPP.Wallet dikembangkan sebagai solusi pengamanan kunci privat secara mandiri (self-custody) berbasis web untuk mengatasi kerentanan dompet kustodian terhadap kegagalan tunggal (seperti kasus kolapsnya FTX) serta kelemahan validasi transaksi pada ekstensi browser konvensional.",
      objectives: [
        "Keamanan Self-Custody: Menghilangkan ketergantungan pada server backend untuk mengelola kunci privat sehingga meminimalisir risiko peretasan database.",
        "Kompatibilitas Multi-Chain: Membuktikan kelayakan client-side transaction signing pada model UTXO (Bitcoin Testnet) dan model Account-based (Ethereum Sepolia Testnet).",
        "Enkripsi Mnemonic Lokal: Mengamankan seed phrase pengguna di browser secara lokal dengan komputasi kriptografi intensif.",
        "Efisiensi Signing: Menjamin waktu eksekusi penandatanganan transaksi sangat instan di bawah ambang batas kenyamanan pengguna (500 ms)."
      ],
      features: [
        "Client-side secp256k1 Signing: Penandatanganan transaksi offline berjalan lokal dengan ECDSA secp256k1.",
        "Kriptografi PBKDF2 & AES-GCM 256-bit: Enkripsi mnemonic dengan 310.000 iterasi PBKDF2 sebelum disimpan di LocalStorage.",
        "Derivasi BIP-39/32/44/84: Standarisasi pembuatan seed phrase dan derivasi alamat multi-chain deterministik.",
        "Validasi Bech32 & Hex: Validasi real-time untuk alamat SegWit Bitcoin (Bech32) dan alamat Ethereum."
      ]
    }
  },
  {
    id: "adaapi",
    category: "hackathon",
    label: "3rd Place National Hackathon Permikomnas 2025",
    title: "ADAAPI",
    description:
      "An emergency fire acceleration and notification platform developed collaboratively with BPBD, featuring real-time alerting and visual detection.",
    stack: ["Next.js", "Hono.js", "PostgreSQL", "YOLOv11", "Gemini API"],
    meta: ["Team Leader", "Project Manager", "Team Pyrosentinel"],
    github: "https://github.com/orgs/PyroSentinel/repositories",
    images: [
      "img/HACKATHON/hackathon-1.jpg",
      "img/HACKATHON/hackathon-2.jpg",
      "img/HACKATHON/hackathon-3.jpg",
      "img/HACKATHON/hackathon-4.jpg",
      "img/HACKATHON/hackathon-5.jpg"
    ],
    story: {
      background: "ADAAPI (Aplikasi Digital Akselerasi Antisipasi Kebakaran Indonesia) dikembangkan dalam ajang Hackathon PERMIKOMNAS 2025 di BBPSDMP KOMDIGI Makassar (20-21 Juni 2025). Mengusung visi 'Satu detik sangat berharga untuk menyelamatkan nyawa', aplikasi ini dirancang untuk memangkas waktu tanggap pemadam kebakaran yang terhambat akibat pelaporan manual tak terintegrasi.",
      objectives: [
        "Akselerasi Waktu Tanggap: Mengurangi keterlambatan respons damkar yang rata-rata melebihi 15 menit.",
        "Verifikasi Laporan Cepat: Mencegah prank report dengan deteksi visual otomatis menggunakan kecerdasan buatan.",
        "Notifikasi Instan Terpadu: Mengintegrasikan posko pemadam kebakaran, BPBD, dan instansi terkait secara real-time.",
        "Pelakakan Lokasi Presisi: Mendeteksi geolokasi kebakaran secara otomatis melalui peta interaktif React Leaflet."
      ],
      features: [
        "Pelaporan Media & GPS: Kirim laporan visual instan dengan koordinat lokasi otomatis.",
        "YOLOv11 Fire & Smoke Detector: Pemindaian cerdas otomatis untuk mendeteksi tanda bahaya kebakaran.",
        "SMTP Gmail Alert Service: Jalur komunikasi instan langsung ke tim penanggulangan bencana.",
        "Diagnostic Log Dashboard: Laporan audit status penanganan kebakaran secara real-time bagi publik."
      ]
    }
  },
  {
    id: "siwaras",
    category: "internship",
    label: "Enterprise Internship Work",
    title: "SIWARAS",
    description:
      "An enterprise-grade integrated web inventory management system built during my internship at Universitas Terbuka (UT) Palangka Raya using Google Apps Script as backend and Google Spreadsheet as database.",
    stack: ["Google Apps Script", "Google Spreadsheet", "RESTful API", "Chart.js", "jsPDF"],
    meta: ["Enterprise workflows", "Asset control", "Sosprom Logistics"],
    github: "https://github.com/AIPPproject03/siwaras-ut-web",
    images: [
      "img/SIWARAS/siwaras-1.jpg",
      "img/SIWARAS/web-siwaras-1.png",
      "img/SIWARAS/web-siwaras-2.png",
      "img/SIWARAS/web-siwaras-3.png",
      "img/SIWARAS/web-siwaras-4.png",
      "img/SIWARAS/web-siwaras-5.png",
      "img/SIWARAS/web-siwaras-6.png",
      "img/SIWARAS/web-siwaras-7.png",
      "img/SIWARAS/siwaras-2.jpg"
    ],
    story: {
      background: "SIWARAS (Sistem Inventori Wisuda & Rangkaian Sosprom) diimplementasikan pada Universitas Terbuka (UT) Palangka Raya untuk menggantikan pencatatan logistik manual (wisuda, sosprom, ATK, backdrop, sound system) yang sebelumnya menggunakan dokumen fisik & spreadsheet lokal terpisah.",
      objectives: [
        "Digitalisasi & Sinkronisasi: Mencegah redundansi data logistik akibat pencatatan berulang di berbagai file lokal yang tidak terintegrasi.",
        "Serverless Server Ekonomi: Memanfaatkan integrasi gratis Google Spreadsheet (database) & Google Apps Script (RESTful API backend) untuk menghemat biaya hosting/VPS.",
        "Otomatisasi Tanda Terima: Mempercepat pembuatan tanda terima legal barang keluar yang sebelumnya dilakukan secara manual.",
        "Transparansi Real-time: Memberikan visibilitas ketersediaan stok perlengkapan secara instan bagi unit kerja terkait."
      ],
      features: [
        "Manajemen CRUD Inventori: Fitur lengkap pengelolaan master barang dan rekam barang masuk/keluar.",
        "Real-time Stock Monitoring: Monitoring ketersediaan perlengkapan operasional secara instan.",
        "Ekspor Tanda Terima PDF: Pembuatan surat tanda terima digital otomatis dengan ekstensi ekspor jsPDF.",
        "Interactive Data Dashboard: Visualisasi tren barang keluar-masuk menggunakan Chart.js."
      ]
    }
  },
  {
    id: "adanest",
    category: "finalist",
    label: "National Finalist GEMASTIK 2023",
    title: "Adanest",
    description:
      "A specialized web application designed to support individuals in recovering from PMO (Porn, Masturbation, Orgasm) addiction, offering custom habit tracking, motivational resources, educational blogs, chatbot assistants, and professional medical consultations.",
    stack: ["React", "Node.js", "PostgreSQL", "Chatbot System", "Blog Engine"],
    meta: ["National finalist", "Software Development", "Health & Recovery Tech"],
    github: "https://github.com/orgs/adanestapp/repositories",
    images: [
      "img/GEMASTIK/gemastik-4.png",
      "img/GEMASTIK/gemastik-2.jpg",
      "img/GEMASTIK/gemastik-3.jpg",
      "img/GEMASTIK/gemastik-1.jpg"
    ],
    story: {
      background: "Adanest, yang diambil dari pepatah bahasa Latin 'Aegroto dum anima est, spes est' (Selama orang sakit masih memiliki semangat, maka masih ada harapan), merupakan aplikasi perangkat lunak berbasis website yang didedikasikan untuk memberikan harapan, dukungan, dan sumber daya klinis bagi mereka yang berjuang memulihkan diri dari kecanduan PMO (Porn, Masturbation, Orgasm).",
      objectives: [
        "Memantau dan Mengelola Kebiasaan: Membantu pengguna memonitor kebiasaan terkait PMO dan mengidentifikasi faktor pemicu utama.",
        "Menawarkan Alternatif Positif: Memberikan latihan pengganti yang sehat untuk mengalihkan perhatian dari pemicu PMO.",
        "Menyediakan Dukungan & Motivasi: Memberikan asupan artikel inspiratif serta forum komunitas pemulihan yang aman.",
        "Layanan Konsultasi Profesional: Menghubungkan pengguna langsung dengan dokter dan profesional berkompeten untuk bimbingan personal."
      ],
      features: [
        "Forum Terbuka & Diskusi Medis: Tempat berinteraksi dan berkonsultasi langsung dengan profesional medis.",
        "Chatbot Asisten Pemulihan: Layanan asisten otomatis 24/7 yang memberikan motivasi dan informasi pemulihan.",
        "E-Learning & Blog Medis: Berisi artikel kesehatan fisik dan mental tervalidasi mengenai dampak PMO.",
        "Konsultasi Privat Berjadwal: Konsultasi tatap muka online yang terjadwal dengan psikolog atau dokter."
      ]
    }
  },
];

const projectFilters = [
  { key: "all", label: "All Projects" },
  { key: "flagship", label: "Flagship" },
  { key: "hackathon", label: "Hackathon" },
  { key: "internship", label: "Internship" },
  { key: "finalist", label: "Finalist" },
];

const athleticTimeline = [
  {
    title: "Juara I Beregu Putra & Juara I Ganda Taruna Putra",
    detail: "PORPROV XII Kalimantan Tengah 2023",
  },
  {
    title: "Delegate Athlete",
    detail: "Seleksi Nasional (Seleknas) PBSI at Pelatnas Cipayung 2022",
  },
  {
    title: "National Competitor",
    detail: "POMNAS XVII (2022) & XVIII (2023)",
  },
  {
    title: "National Competitor",
    detail: "O2SN SMP 2017",
  },
];

const typingRoles = [
  "Informatics Engineer",
  "Web3 Specialist",
  "Elite Athlete",
];

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
    { opacity: 0, y: 22 },
  );

  if (titleEl) {
    gsap.set(".hero-word", { yPercent: 102 });
  }

  // Play hero entrance timeline
  const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
  heroTimeline
    .to("[data-hero-badge]", { opacity: 1, y: 0, duration: 0.65 })
    .to("[data-hero-kicker]", { opacity: 1, y: 0, duration: 0.4 }, "-=0.35");

  if (titleEl) {
    heroTimeline.to(".hero-word", { yPercent: 0, duration: 0.8, stagger: 0.08, ease: "power4.out" }, "-=0.25");
  } else {
    heroTimeline.to("[data-hero-title]", { opacity: 1, y: 0, duration: 0.8 }, "-=0.2");
  }

  heroTimeline
    .to("[data-hero-subtitle]", { opacity: 1, y: 0, duration: 0.65 }, "-=0.5")
    .to("[data-hero-summary]", { opacity: 1, y: 0, duration: 0.65 }, "-=0.45")
    .to("[data-hero-actions]", { opacity: 1, y: 0, duration: 0.55 }, "-=0.35")
    .to("[data-hero-stats]", { opacity: 1, y: 0, duration: 0.55 }, "-=0.35")
    .to("[data-hero-panel]", { opacity: 1, y: 0, duration: 0.8 }, "-=0.65");

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

  animateOrbDrift(".orb-cyan", 15);
  animateOrbDrift(".orb-gold", 18);
  animateOrbDrift(".orb-slate", 22);

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

  if (scrollTrigger) {
    // Scroll trigger batches for card entry
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
    const dispVal = document.querySelector('.hero-panel p.font-mono');
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

  document.addEventListener("pointermove", (event) => {
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
  foundationGrid.innerHTML = foundation
    .map(
      (item) => `
        <article class="foundation-card">
          <p class="foundation-kicker">${item.title}</p>
          <h4 class="foundation-value">${item.value}</h4>
          <p class="foundation-note">${item.note}</p>
        </article>
      `,
    )
    .join("");
}

function renderLanguages() {
  languageList.innerHTML = languages
    .map(
      (language) => `
        <div class="language-item">
          <div class="language-row">
            <span class="language-name">${language.name}</span>
            <span class="language-level">${language.level}</span>
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
          <span class="stack-tab-title">${category.label}</span>
          <span class="stack-tab-desc">${category.summary}</span>
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
  const category =
    stackCategories.find((entry) => entry.key === activeKey) ??
    stackCategories[0];

  stackPanel.innerHTML = category.items
    .map(
      (skill, index) => `
        <article class="skill-card reveal">
          <p class="skill-index">Skill ${String(index + 1).padStart(2, "0")}</p>
          <h4 class="skill-title">${skill}</h4>
          <p class="skill-copy">Built for resilient product engineering, clean architecture, and production-grade execution.</p>
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

  setupCardTilt();
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
  const spotlight = techSpotlights[activeKey] ?? techSpotlights.frontend;
  techTitle.textContent = spotlight.title;
  techCopy.textContent = spotlight.copy;

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

  setupCardTilt();
  observeReveals();
}

function renderProjectFilters(activeKey = "all") {
  projectFiltersEl.innerHTML = projectFilters
    .map(
      (filter) => `
        <button
          class="filter-chip"
          type="button"
          aria-pressed="${filter.key === activeKey}"
          data-project-filter="${filter.key}"
        >
          ${filter.label}
        </button>
      `,
    )
    .join("");
}

function renderProjects(activeKey = "all") {
  const cards = projectGrid.querySelectorAll(".project-card");

  if (cards.length > 0) {
    gsap.to(cards, {
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
  const visibleProjects =
    activeKey === "all"
      ? projects
      : projects.filter((project) => project.category === activeKey);

  if (!visibleProjects.length) {
    projectGrid.innerHTML = `
      <div class="glass-panel p-8 text-white/70 lg:col-span-2">
        No projects match this filter.
      </div>
    `;
    return;
  }

  projectGrid.innerHTML = visibleProjects
    .map(
      (project) => `
        <article class="project-card reveal" style="transform-style: preserve-3d; perspective: 1000px;">
          <div class="relative z-10 space-y-5">
            ${project.images && project.images.length > 0 ? `
              <!-- Project storytelling photo slider -->
              <div class="project-carousel relative overflow-hidden rounded-2xl w-full h-[220px] mb-5 bg-slate-950/40 border border-white/5 group-carousel">
                <div class="project-slides flex transition-transform duration-500 w-full h-full" id="slides-${project.id}">
                  ${project.images.map(img => `
                    <div class="w-full h-full flex-shrink-0 relative cursor-zoom-in group">
                      <img src="${img}" alt="${project.title}" class="w-full h-full object-cover select-none transition-transform duration-[600ms] group-hover:scale-[1.02]" onclick="window.openLightbox('${img}', '${project.label} - ${project.title}', '${project.id}')">
                      <!-- High tech diagnostic label overlay -->
                      <div class="absolute bottom-3 left-3 bg-slateInk/85 backdrop-blur-md border border-cyan-400/20 px-2 py-0.5 rounded text-[8px] font-mono text-cyan-300 uppercase tracking-widest pointer-events-none z-10">
                        DIAGNOSTIC: SUCCESS
                      </div>
                    </div>
                  `).join('')}
                </div>
                ${project.images.length > 1 ? `
                  <button type="button" class="carousel-nav prev-btn absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-white/10 flex items-center justify-center text-white/90 z-20" onclick="window.moveSlide('${project.id}', -1, event)">
                    <iconify-icon icon="mdi:chevron-left" class="text-lg"></iconify-icon>
                  </button>
                  <button type="button" class="carousel-nav next-btn absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-white/10 flex items-center justify-center text-white/90 z-20" onclick="window.moveSlide('${project.id}', 1, event)">
                    <iconify-icon icon="mdi:chevron-right" class="text-lg"></iconify-icon>
                  </button>
                  <div class="carousel-dots absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                    ${project.images.map((_, idx) => `
                      <span class="carousel-dot w-1.5 h-1.5 rounded-full bg-white/20 transition-all duration-300 ${idx === 0 ? 'bg-cyan-400 w-3' : ''}" onclick="window.setSlide('${project.id}', ${idx}, event)"></span>
                    `).join('')}
                  </div>
                ` : ''}
              </div>
            ` : ''}
            
            <div class="flex flex-wrap items-center gap-3">
              <span class="tag-pill">${project.label}</span>
              <span class="tag-pill tag-pill-accent">${project.title}</span>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-copy">${project.description}</p>
            <div class="flex flex-wrap gap-2">
              ${project.stack.map((item) => `<span class="project-chip">${item}</span>`).join("")}
            </div>
            <div class="flex flex-wrap gap-2">
              ${project.meta.map((item) => `<span class="project-chip project-chip-accent">${item}</span>`).join("")}
            </div>
            
            ${(project.story || project.github) ? `
              <!-- Project action buttons footer -->
              <div class="mt-4 pt-4 border-t border-white/10 flex items-center justify-between gap-4 text-left">
                ${project.story ? `
                  <button type="button" class="flex items-center gap-2 text-xs font-bold text-cyan-300 hover:text-cyan-200 transition-colors uppercase tracking-widest cursor-pointer" onclick="window.toggleProjectStory('${project.id}', event)">
                    <iconify-icon icon="mdi:book-open-outline" class="text-sm animate-pulse" id="story-icon-${project.id}"></iconify-icon>
                    <span id="story-text-${project.id}">Read Project Story</span>
                  </button>
                ` : '<div></div>'}
                
                ${project.github ? `
                  <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-white transition-colors uppercase tracking-widest cursor-none-hover group/git-link" onclick="event.stopPropagation()">
                    <iconify-icon icon="mdi:github" class="text-base group-hover/git-link:rotate-12 transition-transform duration-300"></iconify-icon>
                    <span>Repository</span>
                    <iconify-icon icon="mdi:arrow-top-right" class="text-[10px] text-white/40 group-hover/git-link:translate-x-0.5 group-hover/git-link:-translate-y-0.5 transition-transform duration-300"></iconify-icon>
                  </a>
                ` : ''}
              </div>
              
              ${project.story ? `
                <div id="story-content-${project.id}" class="mt-4 hidden overflow-hidden text-xs leading-6 text-white/70 space-y-4 font-normal">
                  <div class="rounded-xl bg-white/5 border border-white/5 p-3.5 space-y-3.5 backdrop-blur-md">
                    <div>
                      <p class="font-bold text-cyan-200 uppercase tracking-widest text-[9px] mb-1">Latar Belakang</p>
                      <p class="text-white/60 leading-relaxed text-justify">${project.story.background}</p>
                    </div>
                    <div>
                      <p class="font-bold text-cyan-200 uppercase tracking-widest text-[9px] mb-1">Tujuan Utama</p>
                      <ul class="list-disc list-inside space-y-1.5 text-white/60 leading-relaxed text-justify pl-1">
                        ${project.story.objectives.map(obj => `<li>${obj}</li>`).join('')}
                      </ul>
                    </div>
                    <div>
                      <p class="font-bold text-cyan-200 uppercase tracking-widest text-[9px] mb-1">Fitur Utama</p>
                      <ul class="list-disc list-inside space-y-1.5 text-white/60 leading-relaxed text-justify pl-1">
                        ${project.story.features.map(feat => `<li>${feat}</li>`).join('')}
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

  const newCards = projectGrid.querySelectorAll(".project-card");
  gsap.fromTo(
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

  setupCardTilt();
  observeReveals();
}

function renderAthletics() {
  athleticTimelineEl.innerHTML = athleticTimeline
    .map(
      (item) => `
        <div class="timeline-item pb-4">
          <p class="timeline-title">${item.title}</p>
          <p class="timeline-detail">${item.detail}</p>
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
    const activeRole = typingRoles[roleIndex];
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
      roleIndex = (roleIndex + 1) % typingRoles.length;
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

function setupFilters() {
  projectFiltersEl.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project-filter]");
    if (!button) return;
    const { projectFilter } = button.dataset;
    renderProjectFilters(projectFilter);
    renderProjects(projectFilter);
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
    { threshold: 0.16 },
  );

  document
    .querySelectorAll(".reveal")
    .forEach((node) => revealObserver.observe(node));
}

function init() {
  renderFoundation();
  renderLanguages();
  renderStackTabs();
  renderStackPanel();
  renderProjectFilters();
  renderProjects();
  renderAthletics();
  setupTypingEffect();
  setupTabs();
  setupFilters();
  observeReveals();
  setupGsapAnimations();
  setupCursorGlow();
  setupMagneticInteractions();
  setupCardTilt();
  setupLightboxEvents();
  yearEl.textContent = new Date().getFullYear();
}

window.toggleProjectStory = function (projectId, event) {
  if (event) event.stopPropagation();
  const content = document.getElementById(`story-content-${projectId}`);
  const icon = document.getElementById(`story-icon-${projectId}`);
  const text = document.getElementById(`story-text-${projectId}`);

  if (!content) return;

  const isHidden = content.classList.contains("hidden");

  if (isHidden) {
    content.classList.remove("hidden");
    gsap.fromTo(content,
      { height: 0, opacity: 0 },
      { height: "auto", opacity: 1, duration: 0.45, ease: "power2.out" }
    );
    if (icon) {
      icon.setAttribute("icon", "mdi:book-open-page-variant-outline");
      icon.classList.remove("animate-pulse");
    }
    if (text) text.textContent = "Hide Project Story";
  } else {
    gsap.to(content, {
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
    if (text) text.textContent = "Read Project Story";
  }
};

// Carousel Slide Navigations
const projectSlideIndices = {};

window.moveSlide = function (projectId, direction, event) {
  if (event) event.stopPropagation();
  const proj = projects.find(p => p.id === projectId);
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
        dot.classList.add("bg-cyan-400", "w-3");
        dot.classList.remove("bg-white/20");
      } else {
        dot.classList.remove("bg-cyan-400", "w-3");
        dot.classList.add("bg-white/20");
      }
    });
  }
};

// Lightbox Modal System
let activeLightboxImages = [];
let activeLightboxIndex = 0;

window.openLightbox = function (imageSrc, caption, projectId) {
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");

  if (!lightboxModal || !lightboxImg) return;

  lightboxImg.src = imageSrc;
  if (lightboxCaption) {
    lightboxCaption.textContent = caption;
  }

  if (projectId) {
    const proj = projects.find(p => p.id === projectId);
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

  gsap.to(lightboxModal, { opacity: 1, duration: 0.3, ease: "power2.out" });
  gsap.fromTo(lightboxImg, { scale: 0.94 }, { scale: 1, duration: 0.4, ease: "back.out(1.4)" });
};

window.closeLightbox = function () {
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  if (!lightboxModal) return;

  gsap.to(lightboxModal, {
    opacity: 0,
    duration: 0.25,
    ease: "power2.in",
    onComplete: () => {
      lightboxModal.classList.add("pointer-events-none");
      if (lightboxImg) lightboxImg.src = "";
    }
  });
};

window.navigateLightbox = function (direction) {
  const lightboxImg = document.getElementById("lightbox-img");
  if (!lightboxImg || activeLightboxImages.length <= 1) return;

  activeLightboxIndex += direction;
  if (activeLightboxIndex < 0) activeLightboxIndex = activeLightboxImages.length - 1;
  if (activeLightboxIndex >= activeLightboxImages.length) activeLightboxIndex = 0;

  const nextSrc = activeLightboxImages[activeLightboxIndex];

  gsap.to(lightboxImg, {
    opacity: 0,
    scale: 0.96,
    duration: 0.15,
    ease: "power2.in",
    onComplete: () => {
      lightboxImg.src = nextSrc;
      gsap.to(lightboxImg, {
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: "power2.out"
      });
    }
  });
};

function setupLightboxEvents() {
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxClose = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  if (lightboxClose) {
    lightboxClose.addEventListener("click", window.closeLightbox);
  }
  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) {
        window.closeLightbox();
      }
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      window.navigateLightbox(-1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      window.navigateLightbox(1);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (lightboxModal && !lightboxModal.classList.contains("pointer-events-none")) {
      if (e.key === "Escape") window.closeLightbox();
      if (e.key === "ArrowLeft") window.navigateLightbox(-1);
      if (e.key === "ArrowRight") window.navigateLightbox(1);
    }
  });
}

init();
