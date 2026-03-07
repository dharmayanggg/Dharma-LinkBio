import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ExternalLink, ChevronRight, Briefcase, Star, TrendingUp, Globe, Shield, Zap, CheckCircle2, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  { 
    id: 1, 
    title: 'Pegadaian Swasta', 
    url: 'https://solusi-utama-gadai.vercel.app',
    value: '3.500.000',
    category: 'Fintech & Tools',
    description: 'Platform landing page profesional yang dirancang khusus untuk industri gadai swasta. Dilengkapi dengan fitur kalkulator taksiran barang otomatis yang menggunakan algoritma real-time untuk memberikan estimasi harga barang jaminan berdasarkan fluktuasi pasar terkini, memberikan transparansi dan kemudahan bagi calon nasabah.',
    tech: ['Next.js', 'Tailwind', 'AI Studio'],
    image: 'https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Pribadi/Pegadaian-website'
  },
  { 
    id: 2, 
    title: 'UKM Penalaran & Riset', 
    url: 'https://ukmpr-hub.vercel.app', 
    value: '5.000.000',
    category: 'Community Platform',
    description: 'Ekosistem digital komprehensif untuk mendukung kegiatan riset mahasiswa. Memiliki fitur manajemen keanggotaan, forum diskusi akademik yang terintegrasi, sistem booking mentor ahli, serta modul brainstorming ide penelitian berbasis kecerdasan buatan (AI) untuk membantu mahasiswa merumuskan hipotesis dan metodologi riset secara lebih efisien.',
    tech: ['React', 'Firebase', 'AI'],
    image: 'https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Pribadi/Mahasiswa-apps'
  },
  { 
    id: 3, 
    title: 'Go Threads', 
    url: 'https://go-threads.vercel.app',
    value: '700.000',
    category: 'Productivity Tool',
    description: 'Solusi automasi konten untuk platform Threads. Aplikasi ini memungkinkan pengguna untuk mengubah ide atau artikel panjang menjadi rangkaian utas (threads) yang menarik dan terstruktur secara otomatis menggunakan teknologi pemrosesan bahasa alami (NLP) dari Gemini AI, mengoptimalkan engagement dan kehadiran digital di media sosial.',
    tech: ['TypeScript', 'Gemini AI', 'Vercel'],
    image: 'https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Pribadi/Gothreads_tools'
  },
  { 
    id: 4, 
    title: 'Personal LinkBio', 
    url: 'https://cianna-tau.vercel.app',
    value: '1.500.000',
    category: 'E-Commerce',
    description: 'Halaman profil personal yang dioptimasi untuk konversi penjualan produk digital. Terintegrasi dengan sistem manajemen lisensi otomatis yang memberikan key akses secara instan setelah transaksi berhasil, memudahkan kreator konten dalam mendistribusikan aset digital mereka tanpa perlu intervensi manual.',
    tech: ['Vite', 'CSS', 'Node.js'],
    image: 'https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Pribadi/Personal-linkbio'
  },
  { 
    id: 5, 
    title: 'Retail Memberships', 
    url: 'https://yeppa-mates.vercel.app',
    value: '8.500.000',
    category: 'Retail & AI',
    description: 'Sistem loyalitas pelanggan modern untuk bisnis retail. Menghadirkan kartu member digital dalam aplikasi, manajemen kampanye promosi berbasis lokasi, serta fitur inovatif pemindaian produk kosmetik menggunakan kamera ponsel yang didukung AI untuk memberikan informasi detail produk dan perbandingan harga secara instan.',
    tech: ['React', 'Node.js', 'Supabase'],
    image: 'https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Pribadi/Yeppa-mates'
  },
  { 
    id: 6, 
    title: 'Platform Kedokteran', 
    url: 'https://dokter-go.vercel.app',
    value: '1.000.000',
    category: 'Landing Page',
    description: 'Portal informasi medis yang bersih dan terpercaya. Menyajikan direktori layanan kesehatan, artikel edukasi medis yang diverifikasi, serta antarmuka yang intuitif untuk memudahkan pasien dalam mencari informasi mengenai jadwal dokter dan fasilitas kesehatan di sekitar mereka, dibangun dengan performa tinggi menggunakan Next.js.',
    tech: ['Next.js', 'PostgreSQL', 'Tailwind'],
    image: 'https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Pribadi/Kedokteran-platform'
  }
];

const PortfolioGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#010b0a] text-slate-300 font-sans pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#010b0a]/80 backdrop-blur-xl border-b border-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-emerald-500 transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </Link>
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 leading-none mb-1">Showcase</span>
            <h1 className="text-sm font-black text-white uppercase tracking-widest">Portfolio Gallery</h1>
          </div>
          <div className="w-10" /> {/* Spacer */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 mb-4">
            <Briefcase className="w-3 h-3" />
            <span className="text-[10px] font-black uppercase tracking-widest">Featured Projects</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
            Crafting Digital <br />
            <span className="text-emerald-500">Experiences.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Telah menyelesaikan puluhan web project berbasis customer service. Berikut adalah beberapa diantaranya:
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden transition-all shadow-none"
          >
            {/* Project Image */}
            <div 
              className="aspect-square overflow-hidden relative cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40" />
              
              {/* Category Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-widest text-white">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-emerald-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Actions */}
              <div className="pt-2">
                <Link 
                  to="/portfolio/preview" 
                  state={{ activeProjectIndex: index }}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-2xl bg-emerald-500 text-[#010b0a] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-400 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-32 px-4 max-w-4xl mx-auto">
        <a 
          href="https://wa.me/6282342344558" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative w-full flex flex-col md:flex-row items-center justify-between p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-emerald-500 to-teal-600 overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_20px_50px_rgba(16,185,129,0.3)]"
        >
          {/* Background Icon with Gradient */}
          <div className="absolute -right-10 -bottom-10 opacity-20 group-hover:scale-110 transition-transform duration-700">
            <div className="p-20 rounded-full bg-white/20 blur-3xl absolute inset-0"></div>
            <MessageCircle className="w-64 h-64 text-white" />
          </div>

          <div className="relative z-10 text-center md:text-left space-y-2 mb-8 md:mb-0">
            <h3 className="text-3xl md:text-5xl font-black text-[#010b0a] uppercase tracking-tighter leading-tight">
              Konsultasi <br className="hidden md:block" /> Website
            </h3>
            <p className="text-[#010b0a]/70 font-bold text-sm md:text-lg">
              Diskusikan keinginan kamu dengan Dharma
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-4 px-8 py-4 rounded-2xl bg-[#010b0a] text-emerald-500 font-black uppercase tracking-widest text-sm group-hover:bg-black transition-colors">
            Mulai Sekarang <Zap className="w-4 h-4 fill-emerald-500" />
          </div>
        </a>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Project Preview"
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioGallery;
