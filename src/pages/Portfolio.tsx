import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, ArrowLeft, ExternalLink, Globe, RefreshCw, AlertCircle, ChevronRight, X, Info } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const toolDescriptions: Record<string, { name: string, description: string, logo: string }> = {
  'github-logo.png': { 
    name: 'GitHub', 
    description: 'Digunakan untuk manajemen repositori, version control, dan kolaborasi tim dalam pengembangan website ini.',
    logo: "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/github-logo.png"
  },
  'vercel-logo.png': { 
    name: 'Vercel', 
    description: 'Platform hosting performa tinggi yang digunakan untuk deployment otomatis dan optimasi frontend secara real-time.',
    logo: "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/vercel-logo.png"
  },
  'google-aistudio_1.png': { 
    name: 'Google AI Studio', 
    description: 'Tools utama untuk prototyping dan integrasi model AI Gemini ke dalam fitur-fitur cerdas aplikasi.',
    logo: "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/google-aistudio_1.png"
  },
  'next-js-logo.svg': { 
    name: 'Next.js', 
    description: 'Framework React yang digunakan untuk membangun aplikasi web yang cepat dengan Server-Side Rendering (SSR).',
    logo: "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/next-js-logo.svg"
  },
  'firebase-logo.png': { 
    name: 'Firebase', 
    description: 'Layanan backend dari Google untuk real-time database, autentikasi user, dan cloud storage.',
    logo: "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/firebase-logo.png"
  },
  'supabase-logo.png': { 
    name: 'Supabase', 
    description: 'Alternatif open-source Firebase yang menggunakan PostgreSQL untuk manajemen data yang lebih kompleks.',
    logo: "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/supabase-logo.png"
  },
  'gemini-logo.png': { 
    name: 'Gemini AI', 
    description: 'Model AI tercanggih dari Google yang digunakan untuk pemrosesan bahasa alami dan fitur cerdas lainnya.',
    logo: "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/gemini-logo.png"
  },
  'chatgpt-logo.png': { 
    name: 'ChatGPT', 
    description: 'Integrasi API OpenAI untuk asisten virtual dan pengolahan teks otomatis di dalam platform.',
    logo: "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/chatgpt-logo.png"
  },
  'v0-dev.png': { 
    name: 'v0.dev', 
    description: 'Tools AI-powered UI generation yang digunakan untuk mempercepat proses prototyping desain antarmuka.',
    logo: "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/v0-dev.png"
  },
  'cursor.png': { 
    name: 'Cursor', 
    description: 'AI Code Editor yang membantu mempercepat penulisan kode dan debugging secara efisien.',
    logo: "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/cursor.png"
  },
  'claude.png': { 
    name: 'Claude AI', 
    description: 'Asisten AI untuk penalaran kompleks dan optimasi logika pemrograman di sisi backend.',
    logo: "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/claude.png"
  }
};

const Portfolio: React.FC = () => {
  const location = useLocation();
  const initialProjectIndex = location.state?.activeProjectIndex ?? 0;
  
  const [activeProject, setActiveProject] = useState<number>(initialProjectIndex);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTool, setSelectedTool] = useState<{ name: string, description: string, logo: string } | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update active project if state changes (e.g. navigating back and forth)
  useEffect(() => {
    if (location.state?.activeProjectIndex !== undefined) {
      setActiveProject(location.state.activeProjectIndex);
    }
  }, [location.state]);

  const projects = [
    { 
      id: 1, 
      title: 'Pegadaian Swasta', 
      url: 'https://solusi-utama-gadai.vercel.app',
      value: '3.500.000',
      description: 'Platform landing page profesional yang dirancang khusus untuk industri gadai swasta. Dilengkapi dengan fitur kalkulator taksiran barang otomatis yang menggunakan algoritma real-time untuk memberikan estimasi harga barang jaminan berdasarkan fluktuasi pasar terkini, memberikan transparansi dan kemudahan bagi calon nasabah.',
      tech: ['Next.js', 'Tailwind'],
      image: 'https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Pribadi/Pegadaian-website',
      logos: [
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/github-logo.png",
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/vercel-logo.png",
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/google-aistudio_1.png",
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/cursor.png"
      ]
    },
    { 
      id: 2, 
      title: 'UKM Penalaran & Riset', 
      url: 'https://ukmpr-hub.vercel.app', 
      value: '5.000.000',
      description: 'Ekosistem digital komprehensif untuk mendukung kegiatan riset mahasiswa. Memiliki fitur manajemen keanggotaan, forum diskusi akademik yang terintegrasi, sistem booking mentor ahli, serta modul brainstorming ide penelitian berbasis kecerdasan buatan (AI) untuk membantu mahasiswa merumuskan hipotesis dan metodologi riset secara lebih efisien.',
      tech: ['React', 'Firebase'],
      image: 'https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Pribadi/Mahasiswa-apps',
      logos: [
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/github-logo.png",
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/vercel-logo.png",
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/google-aistudio_1.png",
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/firebase-logo.png",
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/v0-dev.png"
      ]
    },
    { 
      id: 3, 
      title: 'Go Threads', 
      url: 'https://go-threads.vercel.app',
      value: '700.000',
      description: 'Solusi automasi konten untuk platform Threads. Aplikasi ini memungkinkan pengguna untuk mengubah ide atau artikel panjang menjadi rangkaian utas (threads) yang menarik dan terstruktur secara otomatis menggunakan teknologi pemrosesan bahasa alami (NLP) dari Gemini AI, mengoptimalkan engagement dan kehadiran digital di media sosial.',
      tech: ['TypeScript', 'AI'],
      image: 'https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Pribadi/Gothreads_tools',
      logos: [
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/github-logo.png",
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/vercel-logo.png",
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/google-aistudio_1.png",
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/gemini-logo.png",
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/chatgpt-logo.png"
      ]
    },
    { 
      id: 4, 
      title: 'Personal LinkBio', 
      url: 'https://cianna-tau.vercel.app',
      value: '1.500.000',
      description: 'Halaman profil personal yang dioptimasi untuk konversi penjualan produk digital. Terintegrasi dengan sistem manajemen lisensi otomatis yang memberikan key akses secara instan setelah transaksi berhasil, memudahkan kreator konten dalam mendistribusikan aset digital mereka tanpa perlu intervensi manual.',
      tech: ['Vite', 'CSS'],
      image: 'https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Pribadi/Personal-linkbio',
      logos: [
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/github-logo.png",
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/vercel-logo.png",
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/google-aistudio_1.png",
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/v0-dev.png"
      ]
    },
    { 
      id: 5, 
      title: 'Retail Memberships', 
      url: 'https://yeppa-mates.vercel.app',
      value: '8.500.000',
      description: 'Sistem loyalitas pelanggan modern untuk bisnis retail. Menghadirkan kartu member digital dalam aplikasi, manajemen kampanye promosi berbasis lokasi, serta fitur inovatif pemindaian produk kosmetik menggunakan kamera ponsel yang didukung AI untuk memberikan informasi detail produk dan perbandingan harga secara instan.',
      tech: ['React', 'Node.js'],
      image: 'https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Pribadi/Yeppa-mates',
      logos: [
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/github-logo.png",
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/vercel-logo.png",
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/google-aistudio_1.png",
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/supabase-logo.png"
      ]
    },
    { 
      id: 6, 
      title: 'Platform Kedokteran', 
      url: 'https://dokter-go.vercel.app',
      value: '1.000.000',
      description: 'Portal informasi medis yang bersih dan terpercaya. Menyajikan direktori layanan kesehatan, artikel edukasi medis yang diverifikasi, serta antarmuka yang intuitif untuk memudahkan pasien dalam mencari informasi mengenai jadwal dokter dan fasilitas kesehatan di sekitar mereka, dibangun dengan performa tinggi menggunakan Next.js.',
      tech: ['Next.js', 'PostgreSQL'],
      image: 'https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Pribadi/Kedokteran-platform',
      logos: [
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/github-logo.png",
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/vercel-logo.png",
        "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/google-aistudio_1.png"
      ]
    }
  ];

  const currentProject = projects[activeProject];

  return (
    <div className="min-h-screen bg-[#010b0a] text-slate-300 font-sans flex flex-col overflow-hidden">
      {/* Top Navigation */}
      <nav className="h-14 border-b border-emerald-900/20 bg-[#010b0a]/90 backdrop-blur-md flex items-center justify-between px-4 shrink-0 z-50">
        <Link to="/portfolio" className="p-2 -ml-2 text-slate-400 hover:text-emerald-500 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 leading-none mb-1">Previewing</span>
          <span className="text-xs font-bold text-white truncate max-w-[150px]">{currentProject.title}</span>
        </div>

        <a 
          href={currentProject.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 -mr-2 text-emerald-500 hover:text-emerald-400 transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </nav>

      {/* Main Content Container */}
      <main className="flex-1 relative flex flex-col items-center p-4 overflow-y-auto">
        {/* Info Section */}
        <div className="w-full max-w-2xl space-y-6 py-8">
          <div className="p-6 md:p-10 rounded-[2.5rem] bg-white/5 border border-white/10 relative overflow-hidden space-y-10">
            {/* 1. Thumbnail Image */}
            <div 
              className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
              onClick={() => setSelectedImage(currentProject.image)}
            >
              <img 
                src={(currentProject as any).image} 
                alt={currentProject.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 2. Explanation and Description */}
            <div className="space-y-4">
              <h4 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight">{currentProject.title}</h4>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed">{currentProject.description}</p>
            </div>

            {/* 3. Live Preview Button */}
            <a 
              href={currentProject.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-emerald-500 text-[#010b0a] font-black uppercase tracking-widest text-sm hover:bg-emerald-400 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_30px_rgba(16,185,129,0.2)]"
            >
              Visit Live Site <ExternalLink className="w-5 h-5" />
            </a>

            {/* 4. Project Value */}
            <div className="pt-8 border-t border-white/5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-slate-500">Project Value</span>
                <span className="text-2xl font-black text-emerald-500">Rp {currentProject.value}</span>
              </div>
            </div>
            
            {/* 5. Tools Used */}
            <div className="space-y-6 pt-8 border-t border-white/5">
              <div className="flex items-center gap-2">
                <p className="text-xs font-black uppercase tracking-widest text-emerald-500">Tech Stack & Tools</p>
                <Info className="w-4 h-4 text-emerald-500/50" />
              </div>
              <div className="flex flex-wrap gap-8 items-center">
                {(currentProject as any).logos.map((logo: string, i: number) => {
                  const fileName = logo.split('/').pop() || '';
                  const toolInfo = toolDescriptions[fileName] || { 
                    name: 'Tool', 
                    description: 'Digunakan dalam pengembangan project ini.',
                    logo: logo
                  };
                  
                  return (
                    <motion.button 
                      key={i} 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedTool(toolInfo)}
                      className="relative group"
                    >
                      <img 
                        src={logo} 
                        alt="tool" 
                        className="h-12 w-auto object-contain transition-all [filter:brightness(0)_invert(1)] opacity-80 group-hover:opacity-100" 
                        referrerPolicy="no-referrer" 
                      />
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Tool Info Modal */}
      <AnimatePresence>
        {selectedTool && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTool(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-sm bg-[#010b0a] border border-emerald-500/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(16,185,129,0.1)]"
            >
              <button 
                onClick={() => setSelectedTool(null)}
                className="absolute top-4 right-4 p-2 text-slate-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-2 p-4">
                  <img 
                    src={selectedTool.logo} 
                    alt={selectedTool.name} 
                    className="w-full h-full object-contain [filter:brightness(0)_invert(1)]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-wider">{selectedTool.name}</h3>
                <div className="w-12 h-1 bg-emerald-500 rounded-full" />
                <p className="text-slate-400 leading-relaxed text-sm">
                  {selectedTool.description}
                </p>
                <button 
                  onClick={() => setSelectedTool(null)}
                  className="mt-4 w-full py-3 rounded-xl bg-emerald-500 text-[#010b0a] font-black uppercase tracking-widest text-xs hover:bg-emerald-400 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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

export default Portfolio;
