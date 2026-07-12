window.portfolioProjects = [
  {
    id: "wallet",
    category: "flagship",
    labelId: "Proyek Akademik Unggulan",
    labelEn: "Flagship Academic Project",
    title: "AIPP.Wallet",
    descriptionId: "Dompet kripto multi-chain non-kustodian yang sangat aman, memprioritaskan keamanan penuh sisi klien dan kontrol pengguna secara mandiri atas kunci privat.",
    descriptionEn: "A highly secure, non-custodial multi-chain crypto wallet prioritizing complete client-side security and independent user control over private keys.",
    stack: ["Vanilla JavaScript", "ethers.js", "bitcoinjs-lib"],
    meta: ["Client-side signing", "Multi-chain security", "Zero custody"],
    github: "https://github.com/AIPPproject03/aipp-wallet",
    images: [
      "../img/AIPP-WALLET/logo-aipp-wallet.png",
      "../img/AIPP-WALLET/aipp-wallet-1.png",
      "../img/AIPP-WALLET/aipp-wallet-2.png",
      "../img/AIPP-WALLET/aipp-wallet-3.png"
    ],
    story: {
      backgroundId: "AIPP.Wallet dikembangkan sebagai solusi pengamanan kunci privat secara mandiri (self-custody) berbasis web untuk mengatasi kerentanan dompet kustodian terhadap kegagalan tunggal (seperti kasus kolapsnya FTX) serta kelemahan validasi transaksi pada ekstensi browser konvensional.",
      backgroundEn: "AIPP.Wallet was developed as a web-based self-custody private key management solution to address the vulnerability of custodial wallets to single points of failure (such as the FTX collapse) and transactional validation weaknesses in conventional browser extensions.",
      objectivesId: [
        "Keamanan Self-Custody: Menghilangkan ketergantungan pada server backend untuk mengelola kunci privat sehingga meminimalisir risiko peretasan database.",
        "Kompatibilitas Multi-Chain: Membuktikan kelayakan client-side transaction signing pada model UTXO (Bitcoin Testnet) dan model Account-based (Ethereum Sepolia Testnet).",
        "Enkripsi Mnemonic Lokal: Mengamankan seed phrase pengguna di browser secara lokal dengan komputasi kriptografi intensif.",
        "Efisiensi Signing: Menjamin waktu eksekusi penandatanganan transaksi sangat instan di bawah ambang batas kenyamanan pengguna (500 ms)."
      ],
      objectivesEn: [
        "Self-Custody Security: Eliminates reliance on backend servers for private key management, minimizing database breach risks.",
        "Multi-Chain Compatibility: Proves client-side transaction signing viability on UTXO model (Bitcoin Testnet) and Account-based model (Ethereum Sepolia Testnet).",
        "Local Mnemonic Encryption: Securely stores user seed phrases locally in the browser using intensive cryptographic calculations.",
        "Signing Efficiency: Guarantees near-instant transaction signing execution time well below the user comfort threshold (500 ms)."
      ],
      featuresId: [
        "Client-side secp256k1 Signing: Penandatanganan transaksi offline berjalan lokal dengan ECDSA secp256k1.",
        "Kriptografi PBKDF2 & AES-GCM 256-bit: Enkripsi mnemonic dengan 310.000 iterasi PBKDF2 sebelum disimpan di LocalStorage.",
        "Derivasi BIP-39/32/44/84: Standarisasi pembuatan seed phrase dan derivasi alamat multi-chain deterministik.",
        "Validasi Bech32 & Hex: Validasi real-time untuk alamat SegWit Bitcoin (Bech32) dan alamat Ethereum."
      ],
      featuresEn: [
        "Client-Side secp256k1 Signing: Offline transaction signing runs locally using ECDSA secp256k1.",
        "PBKDF2 & AES-GCM 256-bit Cryptography: Encrypts mnemonics with 310,000 PBKDF2 iterations before LocalStorage persistence.",
        "BIP-39/32/44/84 Derivation: Standardized seed phrase generation and deterministic multi-chain address derivation.",
        "Bech32 & Hex Validation: Real-time address validation for Bitcoin SegWit (Bech32) and Ethereum formats."
      ]
    }
  },
  {
    id: "adaapi",
    category: "hackathon",
    labelId: "Juara 3 Hackathon Nasional Permikomnas 2025",
    labelEn: "3rd Place National Hackathon Permikomnas 2025",
    title: "ADAAPI",
    descriptionId: "Platform akselerasi dan notifikasi darurat kebakaran terintegrasi dengan BPBD, menampilkan sistem peringatan real-time dan deteksi visual otomatis.",
    descriptionEn: "An emergency fire acceleration and notification platform developed collaboratively with BPBD, featuring real-time alerting and visual detection.",
    stack: ["Next.js", "Hono.js", "PostgreSQL", "YOLOv11", "Gemini API"],
    meta: ["Team Leader", "Project Manager", "Team Pyrosentinel"],
    github: "https://github.com/orgs/PyroSentinel/repositories",
    images: [
      "../img/HACKATHON/hackathon-1.jpg",
      "../img/HACKATHON/hackathon-2.jpg",
      "../img/HACKATHON/hackathon-3.jpg",
      "../img/HACKATHON/hackathon-4.jpg",
      "../img/HACKATHON/hackathon-5.jpg"
    ],
    story: {
      backgroundId: "ADAAPI (Aplikasi Digital Akselerasi Antisipasi Kebakaran Indonesia) dikembangkan dalam ajang Hackathon PERMIKOMNAS 2025 di BBPSDMP KOMDIGI Makassar (20-21 Juni 2025). Mengusung visi 'Satu detik sangat berharga untuk menyelamatkan nyawa', aplikasi ini dirancang untuk memangkas waktu tanggap pemadam kebakaran yang terhambat akibat pelaporan manual tak terintegrasi.",
      backgroundEn: "ADAAPI (Indonesian Digital Fire Anticipation & Acceleration Application) was developed during the PERMIKOMNAS 2025 Hackathon at BBPSDMP KOMDIGI Makassar (June 20-21, 2025). Built under the vision 'One second is precious to save lives', it is designed to slash fire response times delayed by manual and unintegrated reporting.",
      objectivesId: [
        "Akselerasi Waktu Tanggap: Mengurangi keterlambatan respons damkar yang rata-rata melebihi 15 menit.",
        "Verifikasi Laporan Cepat: Mencegah prank report dengan deteksi visual otomatis menggunakan kecerdasan buatan.",
        "Notifikasi Instan Terpadu: Mengintegrasikan posko pemadam kebakaran, BPBD, dan instansi terkait secara real-time.",
        "Pelakakan Lokasi Presisi: Mendeteksi geolokasi kebakaran secara otomatis melalui peta interaktif React Leaflet."
      ],
      objectivesEn: [
        "Response Time Acceleration: Slashes dispatch delays, which average over 15 minutes.",
        "Fast Report Verification: Curbs false reports via automatic computer vision detection.",
        "Unified Instant Alerts: Connects local fire stations, BPBD, and relevant agencies in real-time.",
        "Precision Location Tracking: Automatically detects fire geolocations via interactive React Leaflet maps."
      ],
      featuresId: [
        "Pelaporan Media & GPS: Kirim laporan visual instan dengan koordinat lokasi otomatis.",
        "YOLOv11 Fire & Smoke Detector: Pemindaian cerdas otomatis untuk mendeteksi tanda bahaya kebakaran.",
        "SMTP Gmail Alert Service: Jalur komunikasi instan langsung ke tim penanggulangan bencana.",
        "Diagnostic Log Dashboard: Laporan audit status penanganan kebakaran secara real-time bagi publik."
      ],
      featuresEn: [
        "Media & GPS Reporting: Submit instant visual alerts with automatic geolocation metadata.",
        "YOLOv11 Fire & Smoke Detector: Automatic computer vision scanning to identify early fire and smoke signatures.",
        "SMTP Gmail Alert Service: Direct instant email communication dispatch routes to emergency teams.",
        "Diagnostic Log Dashboard: Real-time public audit logs tracking fire hazard status and resolution."
      ]
    }
  },
  {
    id: "siwaras",
    category: "internship",
    labelId: "Kerja Magang Korporat",
    labelEn: "Enterprise Internship Work",
    title: "SIWARAS",
    descriptionId: "Sistem manajemen inventori web terintegrasi kelas korporat yang dibangun selama magang di Universitas Terbuka (UT) Palangka Raya menggunakan Google Apps Script sebagai backend dan Google Spreadsheet sebagai database.",
    descriptionEn: "An enterprise-grade integrated web inventory management system built during my internship at Universitas Terbuka (UT) Palangka Raya using Google Apps Script as backend and Google Spreadsheet as database.",
    stack: ["Google Apps Script", "Google Spreadsheet", "RESTful API", "Chart.js", "jsPDF"],
    meta: ["Enterprise workflows", "Asset control", "Sosprom Logistics"],
    github: "https://github.com/AIPPproject03/siwaras-ut-web",
    images: [
      "../img/SIWARAS/siwaras-1.jpg",
      "../img/SIWARAS/web-siwaras-1.png",
      "../img/SIWARAS/web-siwaras-2.png",
      "../img/SIWARAS/web-siwaras-3.png",
      "../img/SIWARAS/web-siwaras-4.png",
      "../img/SIWARAS/web-siwaras-5.png",
      "../img/SIWARAS/web-siwaras-6.png",
      "../img/SIWARAS/web-siwaras-7.png",
      "../img/SIWARAS/siwaras-2.jpg"
    ],
    story: {
      backgroundId: "SIWARAS (Sistem Inventori Wisuda & Rangkaian Sosprom) diimplementasikan pada Universitas Terbuka (UT) Palangka Raya untuk menggantikan pencatatan logistik manual (wisuda, sosprom, ATK, backdrop, sound system) yang sebelumnya menggunakan dokumen fisik & spreadsheet lokal terpisah.",
      backgroundEn: "SIWARAS (Graduation & Sosprom Campaign Inventory System) was deployed at Universitas Terbuka (UT) Palangka Raya to replace manual logistics logging (for graduation, promotional campaigns, office stationeries) which previously relied on paper slips and fragmented local spreadsheets.",
      objectivesId: [
        "Digitalisasi & Sinkronisasi: Mencegah redundansi data logistik akibat pencatatan berulang di berbagai file lokal yang tidak terintegrasi.",
        "Serverless Server Ekonomi: Memanfaatkan integrasi gratis Google Spreadsheet (database) & Google Apps Script (RESTful API backend) untuk menghemat biaya hosting/VPS.",
        "Otomatisasi Tanda Terima: Mempercepat pembuatan tanda terima legal barang keluar yang sebelumnya dilakukan secara manual.",
        "Transparansi Real-time: Memberikan visibilitas ketersediaan stok perlengkapan secara instan bagi unit kerja terkait."
      ],
      objectivesEn: [
        "Digitalization & Synchronization: Eliminates structural data redundancies caused by duplicate records across non-integrated files.",
        "Cost-Effective Serverless Stack: Leverages Google Sheets (database) & Google Apps Script (RESTful API backend) to save hosting overheads.",
        "Receipt Automation: Accelerates legal dispatch receipt generation which was previously typed manually.",
        "Real-Time Transparency: Grants instant inventory visibility for coordinating academic departments."
      ],
      featuresId: [
        "Manajemen CRUD Inventori: Fitur lengkap pengelolaan master barang dan rekam barang masuk/keluar.",
        "Real-time Stock Monitoring: Monitoring ketersediaan perlengkapan operasional secara instan.",
        "Ekspor Tanda Terima PDF: Pembuatan surat tanda terima digital otomatis dengan ekspresi ekspor jsPDF.",
        "Interactive Data Dashboard: Visualisasi tren barang keluar-masuk menggunakan Chart.js."
      ],
      featuresEn: [
        "CRUD Inventory Management: Full features for managing master items and tracking inward/outward asset flows.",
        "Real-time Stock Monitoring: Instant live tracking of operational supply levels.",
        "jsPDF Receipt Export: Automatic generation of legal digital dispatch receipts exportable to PDF formats.",
        "Interactive Data Dashboard: Interactive analytics showcasing inbound and outbound trends using Chart.js."
      ]
    }
  },
  {
    id: "adanest",
    category: "finalist",
    labelId: "Finalis Nasional GEMASTIK 2023",
    labelEn: "National Finalist GEMASTIK 2023",
    title: "Adanest",
    descriptionId: "Aplikasi web khusus untuk mendukung individu memulihkan diri dari kecanduan PMO (Porn, Masturbation, Orgasm), menawarkan pemantauan kebiasaan, artikel motivasi, konsultasi medis, dan bantuan chatbot.",
    descriptionEn: "A specialized web application designed to support individuals in recovering from PMO (Porn, Masturbation, Orgasm) addiction, offering custom habit tracking, motivational resources, educational blogs, chatbot assistants, and professional medical consultations.",
    stack: ["React", "Node.js", "PostgreSQL", "Chatbot System", "Blog Engine"],
    meta: ["National finalist", "Software Development", "Health & Recovery Tech"],
    github: "https://github.com/orgs/adanestapp/repositories",
    images: [
      "../img/GEMASTIK/gemastik-4.png",
      "../img/GEMASTIK/gemastik-2.jpg",
      "../img/GEMASTIK/gemastik-3.jpg",
      "../img/GEMASTIK/gemastik-1.jpg"
    ],
    story: {
      backgroundId: "Adanest, yang diambil dari pepatah bahasa Latin 'Aegroto dum anima est, spes est' (Selama orang sakit masih memiliki semangat, maka masih ada harapan), merupakan aplikasi perangkat lunak berbasis website yang didedikasikan untuk memberikan harapan, dukungan, dan sumber daya klinis bagi mereka yang berjuang memulihkan diri dari kecanduan PMO (Porn, Masturbation, Orgasm).",
      backgroundEn: "Adanest, taken from the Latin proverb 'Aegroto dum anima est, spes est' (While the sick person has soul, there is hope), is a dedicated web application providing hope, support, and clinical resources for those recovering from PMO (Porn, Masturbation, Orgasm) addiction.",
      objectivesId: [
        "Memantau dan Mengelola Kebiasaan: Membantu pengguna memonitor kebiasaan terkait PMO dan mengidentifikasi faktor pemicu utama.",
        "Menawarkan Alternatif Positif: Memberikan latihan pengganti yang sehat untuk mengalihkan perhatian dari pemicu PMO.",
        "Menyediakan Dukungan & Motivasi: Memberikan asupan artikel inspiratif serta forum komunitas pemulihan yang aman.",
        "Layanan Konsultasi Profesional: Menghubungkan pengguna langsung dengan dokter dan profesional berkompeten untuk bimbingan personal."
      ],
      objectivesEn: [
        "Habit Tracking & Management: Assists users in logging behaviors and identifying triggers.",
        "Healthy Alternatives: Suggests replacement activities to divert focus from PMO urges.",
        "Community & Motivation: Delivers motivational articles and safe anonymous forums.",
        "Professional Consulting: Connects users directly to verified medical experts and therapists."
      ],
      featuresId: [
        "Forum Terbuka & Diskusi Medis: Tempat berinteraksi dan berkonsultasi langsung dengan profesional medis.",
        "Chatbot Asisten Pemulihan: Layanan asisten otomatis 24/7 yang memberikan motivasi dan informasi pemulihan.",
        "E-Learning & Blog Medis: Berisi artikel kesehatan fisik dan mental tervalidasi mengenai dampak PMO.",
        "Konsultasi Privat Berjadwal: Konsultasi tatap muka online yang terjadwal dengan psikolog atau dokter."
      ],
      featuresEn: [
        "Open Forum & Medical Discussions: Direct interactions and consulting channels with medical practitioners.",
        "24/7 Recovery Chatbot Assistant: Automated assistant delivering recovery guides and guidance.",
        "Validated E-Learning & Health Blog: Articles covering the physical and mental science of recovery.",
        "Private Scheduled Consultations: Virtual scheduled appointments with licensed therapists and counselors."
      ]
    }
  }
];

window.portfolioProjectFilters = [
  { key: "all", labelId: "Semua Proyek", labelEn: "All Projects" },
  { key: "flagship", labelId: "Unggulan", labelEn: "Flagship" },
  { key: "hackathon", labelId: "Hackathon", labelEn: "Hackathon" },
  { key: "internship", labelId: "Magang", labelEn: "Internship" },
  { key: "finalist", labelId: "Finalis", labelEn: "Finalist" }
];
