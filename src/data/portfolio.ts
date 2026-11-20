export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  stats: { label: string; value: string }[];
  problem: string;
  solution: string;
  background: string;
  features: string[];
  metrics: string;
}

export interface JourneyMilestone {
  year: string;
  type: string;
  role: string;
  organization: string;
  description: string;
  highlights: string[];
  image?: string;
}

export const PORTFOLIO_DATA = {
  author: {
    name: "Gilang Ramadan",
    handle: "gilangggra",
    role: "Web & Mobile Developer",
    location: "Indonesia",
    email: "mynameisgilangr@gmail.com",
    github: "https://github.com/gilangggra",
    linkedin: "https://www.linkedin.com/in/gilang-ramadan-75382633a/",
    bio: "Software developer dengan fokus merancang arsitektur sistem web terstruktur, performa tinggi, dan antarmuka pengguna yang bersih dan intuitif.",
    availability: "Open to Work",
    todayStatus: "Available for freelance & full-time roles",
  },
  skills: {
    coreLanguages: ["TypeScript", "JavaScript", "Dart", "Python", "Go", "SQL"],
    frameworks: ["React 19", "Next.js 16", "Flutter", "Tailwind CSS", "Node.js", "Express"],
    tools: ["Git & GitHub", "Docker", "PostgreSQL", "Supabase", "Prisma", "Linux/Bash"],
  },
  focusAreas: [
    {
      title: "Requirements & System Architecture",
      description: "Menganalisis kebutuhan pengguna menjadi alur sistem teknis, skema relasional terstruktur, dan arsitektur modular yang terukur.",
    },
    {
      title: "Iterative Full-Stack Engineering",
      description: "Membangun aplikasi web dan mobile end-to-end dengan penekanan pada stabilitas backend dan antarmuka responsif 60fps.",
    },
    {
      title: "Data Accuracy & Code Quality",
      description: "Menerapkan type safety ketat, validasi skema runtime, penanganan error terstruktur, dan standar aksesibilitas WCAG AA.",
    },
  ],
  projects: [
    {
      id: "ramu",
      title: "RAMU - Creative Opportunity Engine",
      category: "Full-Stack Web / Creative Economy",
      summary:
        "Platform kolaborasi ekonomi kreatif berbasis analisis komplementaritas resource deterministik untuk mempertemukan brand, fotografer, dan talent.",
      description:
        "Mesin pembentuk peluang kolaborasi bagi ekosistem industri kreatif. Sistem mengidentifikasi kapasitas aset yang menganggur, spesialisasi keahlian, dan jadwal produksi untuk mencocokkan mitra kolaborasi komersial secara terukur tanpa spekulasi.",
      image: "/projects/ramu_mockup.png",
      techStack: ["Next.js 16", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
      githubUrl: "https://github.com/gilangggra/RAMU",
      demoUrl: "https://ramu-gamma.vercel.app/",
      stats: [
        { label: "Core Engine", value: "Opportunity Matching" },
        { label: "Architecture", value: "Deterministic Resource" },
        { label: "Collab Roles", value: "5 Ecosystem Roles" },
      ],
      problem:
        "Industri kreatif fashion dan visual sering terhambat oleh idle capacity perlengkapan studio dan ketidaksesuaian talenta, di mana kolaborasi biasanya hanya terjadi secara manual dan spekulatif tanpa jaminan komersial yang terukur.",
      solution:
        "Membangun sistem opportunity engine berbasis analisis komplementaritas resource deterministik yang memetakan ketersediaan aset studio, keahlian, dan jadwal produksi secara terpadu antar 5 peran industri mode.",
      background:
        "Arsitektur Next.js 16 App Router dengan React Server Components, Server Actions untuk alur mutasi data langsung, dan basis data PostgreSQL relasional untuk query matching berkecepatan tinggi.",
      features: [
        "Algoritma pencocokan multi-entitas berbasis kapasitas menganggur (idle capacity).",
        "Validasi skema runtime ketat dengan Zod untuk seluruh transaksi kontrak data.",
        "Dasbor pemantauan alur produksi kolaboratif real-time antar pelaku kreatif.",
        "Integrasi manajemen persetujuan hak cipta dan royalti digital transparan.",
      ],
      metrics: "Pemuatan halaman awal di bawah 0.7 detik dengan rendering komponen 60fps tanpa jeda.",
    },
    {
      id: "sigap",
      title: "SIGAP Mobile - Civic Mutual-Aid Network",
      category: "Mobile Application / Civic Safety",
      summary:
        "Aplikasi kesiapsiagaan lingkungan rukun tetangga dengan tombol darurat SOS satu sentuhan dan koordinasi relawan berbasis geospasial.",
      description:
        "Platform mobile kesiapsiagaan warga yang menghubungkan lansia, keluarga, relawan tetangga, dan pengurus lingkungan dalam jaringan tanggap darurat dan saling bantu berbasis geospasial PostGIS dan Supabase.",
      image: "/projects/sigap_mockup.png",
      techStack: ["Flutter", "Dart", "Supabase", "PostGIS", "WCAG AA"],
      githubUrl: "https://github.com/gilangggra/Sigap",
      stats: [
        { label: "Emergency Dispatch", value: "One-Tap SOS" },
        { label: "Spatial Engine", value: "PostGIS Radius" },
        { label: "Accessibility", value: "WCAG AA High-Contrast" },
      ],
      problem:
        "Dalam situasi darurat medis lansia atau keamanan lingkungan warga, proses panggilan bantuan sering terhambat oleh aplikasi rumit atau kepanikan, sementara warga terdekat tidak mengetahui adanya insiden darurat.",
      solution:
        "Menghadirkan aplikasi mobile kesiapsiagaan warga rukun tetangga dengan tombol darurat One-Tap SOS berukuran 120dp dan sistem dispatch notifikasi relawan terdekat berbasis geospasial PostGIS.",
      background:
        "Dibangun menggunakan Flutter dan Dart untuk performa native 60fps, terhubung ke backend Supabase dengan ekstensi PostGIS untuk perhitungan query radius spasial presisi tinggi.",
      features: [
        "Tombol SOS berukuran ramah lansia dengan umpan balik multi-sensoris dan pembatalan hitung mundur aman.",
        "Penentuan rute dan notifikasi instan relawan terdekat berbasis query geospasial radius.",
        "Dukungan mode luring untuk memastikan kontak darurat utama tetap dapat diakses saat koneksi internet lemah.",
        "Antarmuka dengan standar rasio kontras tinggi WCAG AA untuk kenyamanan penglihatan lansia.",
      ],
      metrics: "Pengiriman sinyal darurat ke perangkat relawan tetangga selesai dalam waktu kurang dari 2 detik.",
    },
    {
      id: "vokalink",
      title: "VokaLink SMK - PKL Competency Ecosystem",
      category: "Full-Stack PWA / EdTech & Civic",
      summary:
        "Ekosistem digital multi-tenant PKL SMK Kurikulum Merdeka 792 JP dengan logbook offline-first, verifikasi zero-login mentor DUDI, dan live competency heatmap.",
      description:
        "Solusi digital terpadu standardisasi pelaksanaan, pemantauan, dan sertifikasi Praktik Kerja Lapangan (PKL) SMK. Menghubungkan siswa, guru pembimbing, dan mentor industri DUDI tanpa friksi melalui PWA offline-first, verifikasi mentor tanpa registrasi akun via QR/PIN, serta deteksi dini penyimpangan penugasan (competency drift).",
      image: "/projects/vokalink_mockup.png",
      techStack: ["Next.js 15", "Express 5", "TypeScript", "PWA Serwist", "Dexie.js", "Supabase PostgreSQL"],
      githubUrl: "https://github.com/hfzfjr/VokaLink",
      demoUrl: "https://vokalink.vercel.app/",
      stats: [
        { label: "Curriculum Standard", value: "792 JP Fase F" },
        { label: "Mentor Verification", value: "<10s Zero-Login" },
        { label: "Offline Engine", value: "Dexie & PWA Sync" },
      ],
      problem:
        "Pelaksanaan PKL SMK sering mengalami competency drift di mana siswa ditugaskan di luar kompetensi kejuruan, ditambah tingginya friksi mentor industri yang enggan mendaftar akun aplikasi baru serta jurnal kertas yang rentan manipulasi.",
      solution:
        "Membangun platform PWA offline-first dengan katalog Job Cards siap pakai, verifikasi mentor DUDI tanpa registrasi akun (< 10 detik via QR/link terenkripsi PIN), serta live 2D competency heatmap berperingatan dini untuk guru pembimbing.",
      background:
        "Arsitektur monorepo pnpm workspaces dengan Next.js 15 App Router untuk frontend PWA offline-first (Dexie.js + Serwist), backend Express 5 TypeScript, isolasi database multi-tenant Prisma Client Extension, serta segel kriptografis HMAC-SHA256 untuk paspor kompetensi publik.",
      features: [
        "Logbook harian bebas-ketik berbasis Job Cards dengan kompresi WebP Canvas (< 60 KB) dan 100% offline sync.",
        "Verifikasi jurnal mentor industri DUDI tanpa registrasi akun melalui QR code atau link WhatsApp dalam waktu < 10 detik.",
        "Live 2D Competency Heatmap dan deteksi dini Competency Drift untuk intervensi langsung guru pembimbing.",
        "Paspor Kompetensi Publik ber-QR dengan stempel kriptografis HMAC-SHA256 dan ekspor otomatis e-Rapor / CV standar ATS.",
      ],
      metrics: "Verifikasi mentor selesai dalam waktu < 10 detik tanpa pendaftaran akun, dengan sinkronisasi luring 100% stabil.",
    },
    {
      id: "jagawarga",
      title: "JagaWarga - Community Security Ecosystem",
      category: "Full-Stack Web / Civic Platform",
      summary:
        "Sistem koordinasi keamanan lingkungan warga untuk monitoring jadwal ronda, pelaporan insiden, dan transparansi iuran kas.",
      description:
        "Platform terintegrasi untuk pengurus lingkungan dan warga guna memantau aktivitas pos ronda malam, koordinasi pelaporan keadaan darurat lingkungan, serta rekonsiliasi iuran keamanan secara transparan.",
      image: "/projects/jagawarga_mockup.png",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "REST API", "PostgreSQL"],
      githubUrl: "https://github.com/gilangggra/JagaWarga",
      stats: [
        { label: "Incident Dispatch", value: "Realtime Report" },
        { label: "Transparency", value: "Public Ledger" },
        { label: "Coordination", value: "Patrol Schedule" },
      ],
      problem:
        "Koordinasi jadwal pos ronda lingkungan dan transparansi pencatatan iuran kas warga masih dikelola secara manual lewat buku fisik, menyulitkan audit dan mengurangi partisipasi aktif warga lingkungan.",
      solution:
        "Platform digital warga terpadu yang memadukan dasbor absensi pos ronda dengan verifikasi lokasi, sistem laporan insiden prioritas, dan buku kas lingkungan terbuka yang dapat dipantau bersama.",
      background:
        "Full-stack Next.js dan TypeScript dengan basis data relasional PostgreSQL dan API terstruktur untuk pembaruan status pos keamanan secara real-time.",
      features: [
        "Dasbor ronda malam dengan validasi waktu dan geolokasi petugas jaga pos ronda.",
        "Sistem pelaporan insiden darurat warga dengan broadcast notifikasi prioritas tinggi ke pengurus RT.",
        "Laporan pembukuan kas bulanan yang transparan dan dapat diaudit seluruh warga terdaftar.",
        "Manajemen data warga rukun tetangga berbasis otorisasi peran berjenjang (RBAC).",
      ],
      metrics: "Meningkatkan tingkat kepatuhan jadwal ronda lingkungan dan transparansi pencatatan iuran.",
    },
    {
      id: "librava",
      title: "Librava - Peer-to-Peer Book Sharing & Exchange",
      category: "Mobile Application / Social Reading & EdTech",
      summary:
        "Platform mobile peminjaman dan barter buku antar mahasiswa dengan alur persetujuan transaksi interaktif, integrasi event Book Exchange, dan katalog buku terkurasi.",
      description:
        "Aplikasi mobile komunitas pembaca kampus yang memfasilitasi pertukaran dan peminjaman buku peer-to-peer. Dilengkapi pelacakan status transaksi real-time (approval pemilik buku), integrasi kegiatan Book Exchange Day di perpustakaan universitas, serta katalog buku terkurasi lintas genre.",
      image: "/projects/librava_preview.png",
      techStack: ["Flutter", "Dart", "Node.js", "Express", "PostgreSQL"],
      githubUrl: "https://github.com/gilangggra/Librava",
      stats: [
        { label: "Transaction Engine", value: "P2P Owner Approval" },
        { label: "Community Event", value: "Book Exchange Day" },
        { label: "Mobile Framework", value: "Flutter 60fps Native" },
      ],
      problem:
        "Mahasiswa dan pembaca kampus sering kesulitan mengakses buku bacaan dan literatur terkini dengan biaya terjangkau, sementara proses peminjaman personal antar mahasiswa sering tidak terorganisir tanpa pencatatan status dan jadwal pengembalian yang jelas.",
      solution:
        "Membangun aplikasi mobile Flutter terpadu untuk peminjaman buku P2P dengan alur persetujuan pemilik langsung (Waiting for Owner's Response), integrasi agenda kegiatan literasi Book Exchange Day di perpustakaan kampus, serta eksplorasi koleksi Featured Books.",
      background:
        "Frontend mobile dibangun menggunakan Flutter dan Dart untuk pengalaman antarmuka 60fps dengan palet lavender modern (#EEF0FB), terhubung ke backend Express dan basis data PostgreSQL dengan sistem otentikasi identitas mahasiswa kampus.",
      features: [
        "Alur peminjaman buku P2P dengan status persetujuan pemilik buku dan kartu riwayat transaksi (View Transaction).",
        "Banner interaktif kegiatan komunitas Book Exchange Day dengan titik kumpul perpustakaan universitas.",
        "Koleksi Featured Books lintas genre (The Unknown, Fruit Fly, Adversary to the Villain) yang siap dipinjam.",
        "Navigasi 5 modul inti: Beranda (Home), Rak Buku (Library), Pencarian (Search), Pesan Obrolan, dan Profil Pengguna.",
      ],
      metrics: "Menghemat biaya pembelian buku mahasiswa hingga 70% dengan alur peminjaman P2P transparan.",
    },
    {
      id: "funfram",
      title: "Funfram - Real-Time Video Chat & Gaming",
      category: "Full-Stack WebRTC / Real-Time Systems",
      summary:
        "Platform web interaktif real-time untuk video chat acak berbasis lobby, invite room, dan multiplayer mini-games tersinkronisasi.",
      description:
        "Platform video chat dan interaksi sosial real-time dengan matchmaking acak dan ruang privat (lobby invite). Menggabungkan streaming video peer-to-peer latensi rendah via WebRTC dan Cloudflare TURN dengan backend WebSocket Go berkinerja tinggi untuk sinkronisasi state mini-games kanvas gambar dan tebak kata.",
      image: "/projects/funfram_mockup.png",
      techStack: ["Next.js", "Go (Golang)", "Node.js", "WebRTC", "WebSockets", "Cloudflare TURN", "PostgreSQL"],
      githubUrl: "https://github.com/hfzfjr/Funfram",
      stats: [
        { label: "Media Latency", value: "<100ms P2P" },
        { label: "Backend Engine", value: "Go + Node Signaling" },
        { label: "TURN Routing", value: "Cloudflare Calls" },
      ],
      problem:
        "Aplikasi video chat acak sering mengalami latensi tinggi, kegagalan koneksi NAT/firewall pada ISP tanpa IP publik statis, serta kurangnya fitur keterlibatan sosial interaktif selain obrolan tatap muka pasif.",
      solution:
        "Merancang arsitektur terdistribusi 3 service: frontend Next.js dengan WebRTC client, backend signaling Node.js dengan fallback Cloudflare Realtime TURN, dan server Go WebSocket berkapasitas throughput tinggi untuk matchmaking instan dan sinkronisasi game kanvas.",
      background:
        "Monorepo modular dengan Next.js App Router (Tailwind CSS, Zustand) untuk manajemen state WebRTC, Go (gorilla/websocket, pgx) untuk matchmaking queue dan sinkronisasi mini-games real-time, Node.js untuk protokol negosiasi ICE/SDP, dan orkestrasi Coolify + Cloudflare Tunnel.",
      features: [
        "Video call peer-to-peer latensi rendah dengan integrasi Cloudflare Realtime TURN untuk traversal NAT/CGNAT terandal.",
        "Matchmaking antrean video acak instan dan sistem ruang privat dengan kode undangan (lobby invite).",
        "Multiplayer mini-games tersinkronisasi (live canvas drawing & guessing) ditenagai server WebSocket Go.",
        "Sinkronisasi status perangkat audio/video dan obrolan teks real-time dalam satu sesi streaming.",
      ],
      metrics: "Latensi audio-video real-time di bawah 100ms dengan stabilitas transmisi TURN fallback 99.9%.",
    },
  ] as Project[],
  journey: [
    {
      year: "Agu 2026 - Okt 2026",
      type: "Internship / Research Lab",
      role: "Intern Mobile Programming",
      organization: "Advance Software Engineering Laboratory",
      description:
        "Menjalani program magang pemrograman mobile di Advance Software Engineering Laboratory. Berfokus pada perancangan arsitektur aplikasi mobile, implementasi state management terstruktur, dan riset optimalisasi performa antarmuka.",
      highlights: [
        "Mengembangkan modul antarmuka dan logika bisnis aplikasi mobile dengan standar clean architecture.",
        "Mengimplementasikan integrasi REST API dan optimasi rendering komponen untuk pengalaman pengguna 60fps.",
        "Berkolaborasi dalam riset laboratorium rekayasa perangkat lunak dan pengujian kode terstruktur.",
      ],
      image: "/projects/sigap_mockup.png",
    },
    {
      year: "2026",
      type: "Professional",
      role: "Full-Stack Web & Mobile Developer",
      organization: "Independent Software Development",
      description:
        "Merancang dan mengembangkan aplikasi web dan mobile end-to-end. Membangun RAMU (creative opportunity engine) dan SIGAP Mobile (civic mutual-aid network) dengan standar clean code dan performa tinggi.",
      highlights: [
        "Mengembangkan arsitektur Next.js 16 App Router dan Flutter dengan integrasi database terstruktur.",
        "Menerapkan standar aksesibilitas WCAG AA dan penanganan offline-first pada aplikasi mobile.",
      ],
      image: "/projects/ramu_mockup.png",
    },
    {
      year: "2025 - 2026",
      type: "WebRTC & Civic Tech",
      role: "Full-Stack & Systems Engineer",
      organization: "Open Source Real-Time Platforms",
      description:
        "Membangun ekosistem web terdistribusi seperti VokaLink SMK (standarisasi PKL & verifikasi zero-login) dan Funfram (platform real-time WebRTC video chat & multiplayer mini-games).",
      highlights: [
        "Merancang arsitektur multi-service WebRTC dengan server Go WebSocket dan Cloudflare Realtime TURN pada Funfram.",
        "Membangun sistem offline-first PWA dan verifikasi zero-login mentor DUDI pada VokaLink SMK.",
      ],
      image: "/projects/funfram_mockup.png",
    },
    {
      year: "2024 - 2025",
      type: "Technical",
      role: "Frontend & Full-Stack Engineer",
      organization: "Web Applications & API Systems",
      description:
        "Fokus pada rekayasa antarmuka web performa tinggi menggunakan TypeScript, React, dan integrasi backend berbasis Node.js serta PostgreSQL.",
      highlights: [
        "Mengurangi waktu rendering komponen web dan pemuatan data menggunakan Server Actions dan caching berkala.",
        "Membangun sistem desain modular dengan kontrak antarmuka tipe data yang konsisten.",
      ],
      image: "/projects/librava_preview.png",
    },
    {
      year: "2023 - 2024",
      type: "Academic & Foundations",
      role: "Software Engineering & Computer Science",
      organization: "University Foundations & Algorithmic Projects",
      description:
        "Mendalami algoritma struktur data, pemrograman berorientasi objek, perancangan basis data relasional, dan arsitektur sistem perangkat lunak modern.",
      highlights: [
        "Menyelesaikan implementasi algoritma dan struktur data (C++, Go, Dart, dan TypeScript).",
        "Membangun fondasi logika rekayasa perangkat lunak yang tangguh untuk pengembangan aplikasi skala produksi.",
      ],
    },
  ] as JourneyMilestone[],
};
