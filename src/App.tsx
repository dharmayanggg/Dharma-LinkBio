import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { ChevronRight, MessageCircle, Code, Palette, Smartphone, BarChart3, ExternalLink, Briefcase, Layers, Sun, Moon, Calculator, ArrowRight, TrendingUp, Cpu, Zap, Target, Rocket, CheckCircle2, Globe, Database, ChevronDown, ArrowUp, FileText } from 'lucide-react';

// Counter Component for Stats
const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function App() {
  // State for selected skill details
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  
  // Hardcoded Dark Mode for the requested Emerald/Black theme
  const isDarkMode = true;

  // State for Income Calculator - Initialized as empty strings
  const [calcPrice, setCalcPrice] = useState<number | ''>('');
  const [calcSales, setCalcSales] = useState<number | ''>('');
  const [monthlyIncome, setMonthlyIncome] = useState<number>(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (calcPrice !== '' && calcSales !== '') {
      setMonthlyIncome(Number(calcPrice) * Number(calcSales) * 30);
    } else {
      setMonthlyIncome(0);
    }
  }, [calcPrice, calcSales]);

  // Disable Right Click & Selection
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's')) {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Data Skills
  const currentYear = 2026;
  const skills = [
    { 
      id: 4, 
      title: 'UI/UX Design', 
      startYear: 2022, 
      icon: <Smartphone className="w-5 h-5" />,
      description: "Fokus pada desain yang ramah pengguna sejak 2022. Merancang tampilan aplikasi dan dashboard yang mudah digunakan, intuitif, dan enak dipandang mata." 
    },
    { 
      id: 2, 
      title: 'Web/App Development', 
      startYear: 2019, 
      icon: <Code className="w-5 h-5" />,
      description: "Pengalaman 7 tahun bikin web dan aplikasi. Membangun sistem yang stabil, cepat, dan bisa diandalkan menggunakan teknologi modern." 
    },
    { 
      id: 3, 
      title: 'Social Media Management', 
      startYear: 2020, 
      icon: <BarChart3 className="w-5 h-5" />,
      description: "Mengelola konten strategis sejak 2020. Meningkatkan interaksi, membangun komunitas yang loyal, dan membuat brand makin dikenal." 
    },
    { 
      id: 1, 
      title: 'Graphic Design', 
      startYear: 2009, 
      icon: <Palette className="w-5 h-5" />,
      description: "17 tahun berkarya di dunia visual. Menggabungkan kreativitas dengan tools modern seperti Canva dan AI untuk hasil desain yang maksimal dan efisien." 
    },
  ];

  // Data Experience
  const experiences = [
    { company: 'PT HANGGADA DIGITAL KREASI', role: 'Divisi Web/App Development', period: '2025 - 2026' },
    { company: 'PT INDODHARMA NUSA RAHAYU', role: 'Community & Talent Manager', period: '2021 - 2025' },
    { company: 'AGENCY LOMBOK & BALI INFLUENCER', role: 'Sosmed Management', period: '2020 - 2025' },
    { company: 'FREELANCER', role: 'Graphic Design', period: '2009 - 2025' },
  ];

  // Data Services
  const services = [
    { 
      id: 1, 
      title: 'UI/UX Design', 
      price: 'Starts from Rp 1.000.000', 
      icon: <Smartphone className="w-5 h-5" />,
      description: 'Desain antarmuka yang estetis dan pengalaman pengguna yang intuitif untuk aplikasi web dan mobile Anda.'
    },
    { 
      id: 2, 
      title: 'Web Development', 
      price: 'Starts from Rp 1.500.000', 
      icon: <Code className="w-5 h-5" />,
      description: 'Pembuatan website responsif, cepat, dan modern menggunakan teknologi terbaru seperti React dan Next.js.'
    },
    { 
      id: 3, 
      title: 'Apps Development (Full Stack)', 
      price: 'Starts from Rp 5.000.000', 
      icon: <Layers className="w-5 h-5" />,
      description: 'Pengembangan aplikasi mobile dan web end-to-end, dari backend yang kuat hingga frontend yang memukau.'
    },
    { 
      id: 4, 
      title: 'SaaS Management', 
      price: 'Starts from Rp 8.500.000', 
      icon: <Briefcase className="w-5 h-5" />,
      description: 'Pengelolaan dan optimasi layanan SaaS Anda untuk memastikan performa maksimal dan pertumbuhan bisnis.'
    },
  ];

  // Data Products
  const products = [
    { 
      id: 4, 
      title: 'Modifikasi Landing Page Lynk.id/Scalev', 
      price: 'Rp 349.000',
      originalPrice: 'Rp 650.000',
      label: 'Garansi Beda!',
      description: 'Kustomisasi tampilan menggunakan metode VibeCoding. Lynk.id/Scalev hanya digunakan sebagai payment gateway agar transaksi aman & otomatis.'
    },
    { 
      id: 2, 
      title: 'Belajar 1on1 UI/UX Design untuk Pemula', 
      price: 'Rp 359.000',
      originalPrice: 'Rp 500.000',
      description: 'Pelajari fundamental desain antarmuka dan pengalaman pengguna. Dari wireframing hingga prototyping, siap kerja di industri kreatif.'
    },
    { 
      id: 6, 
      title: 'Jasa Pembuatan Tools Web untuk Kreator Produk Digital', 
      price: 'Rp 499.000',
      originalPrice: 'Rp 999.000',
      description: 'Solusi pembuatan tools berbasis web untuk mendukung bisnis produk digital Anda. Otomatisasi, efisiensi, dan skalabilitas.'
    },
    { 
      id: 1, 
      title: 'Belajar 1on1 Buat Website & Aplikasi VibeCoding', 
      price: 'Rp 449.000',
      originalPrice: 'Rp 500.000',
      description: 'Bimbingan privat intensif membuat website dan aplikasi dari nol menggunakan metode VibeCoding yang efisien dan modern. Cocok untuk pemula yang ingin hasil cepat.'
    },
    { 
      id: 3, 
      title: 'Belajar Full Stack Development', 
      price: 'Rp 669.000', 
      status: 'On Hold',
      description: 'Kurikulum lengkap menjadi Full Stack Developer handal. Menguasai frontend, backend, dan database untuk membangun aplikasi kompleks.'
    },
  ];

  const waNumber = "6282342344558";
  const waMessage = encodeURIComponent("Hi Dharma, I'd like to discuss a project.");

  return (
    <div className={`min-h-screen font-sans pb-20 transition-colors duration-300 select-none ${isDarkMode ? 'bg-[#010b0a] text-slate-300' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* Background Ornaments */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-0 w-full h-96 bg-gradient-to-b ${isDarkMode ? 'from-[#021b1a] to-transparent' : 'from-slate-100 to-transparent'}`}></div>
        <div className={`absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] ${isDarkMode ? 'bg-emerald-900/20' : 'bg-cyan-100/50'}`}></div>
        <div className={`absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] ${isDarkMode ? 'bg-teal-900/20' : 'bg-blue-100/50'}`}></div>
      </div>

      {/* Marquee Animation */}
      <div className={`w-full overflow-hidden py-2 border-y ${isDarkMode ? 'bg-[#021b1a]/50 border-emerald-900/30' : 'bg-white border-slate-200'} relative z-20`}>
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className={`flex whitespace-nowrap gap-10 text-[10px] font-bold uppercase tracking-[0.2em] ${isDarkMode ? 'text-emerald-500/50' : 'text-cyan-500/50'}`}
        >
          <span>• UI/UX DESIGN • WEB DEVELOPMENT • APP DEVELOPMENT • SOCIAL MEDIA MANAGEMENT • GRAPHIC DESIGN • DIGITAL PRODUCTS • AI AUTOMATION • </span>
          <span>• UI/UX DESIGN • WEB DEVELOPMENT • APP DEVELOPMENT • SOCIAL MEDIA MANAGEMENT • GRAPHIC DESIGN • DIGITAL PRODUCTS • AI AUTOMATION • </span>
        </motion.div>
      </div>

      {/* SaaS Style Header */}
      <nav className={`sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all ${isDarkMode ? 'bg-[#010b0a]/80 border-emerald-900/20' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-lg md:max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-emerald-500 text-[#010b0a]' : 'bg-cyan-600 text-white'}`}>
              <Zap className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className={`font-black tracking-tighter text-lg leading-none ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>DHAR<span className="text-emerald-500 font-black">TECH</span></span>
              <span className={`text-[8px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Digital Enthusiast</span>
            </div>
          </div>
          <button 
            onClick={() => window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              isDarkMode 
                ? 'bg-emerald-600 text-[#010b0a] hover:bg-emerald-500 shadow-lg shadow-emerald-900/20' 
                : 'bg-cyan-600 text-white hover:bg-cyan-700 shadow-lg shadow-cyan-200/50'
            }`}
          >
            WhatsApp
          </button>
        </div>
      </nav>

      <main className="relative z-10 max-w-lg md:max-w-7xl mx-auto px-6 pt-6 pb-12 flex flex-col items-center gap-10">
        
        {/* HERO SECTION (SaaS Style) */}
        <section className="w-full text-center space-y-6 md:py-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-cyan-50 text-cyan-600 border border-cyan-100'}`}
          >
            <FileText className="w-3 h-3" />
            Digital Portfolio 2026
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
          >
            Building the Future of <span className="text-emerald-500">Digital Experiences.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-sm md:text-lg leading-relaxed max-w-[320px] md:max-w-2xl mx-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}
          >
            Suka bikin sesuatu yang bermanfaat lewat digital. Fokus ngebantu bisnis biar lebih jalan otomatis dan efisien.
          </motion.p>
        </section>

        {/* SECTION 1: Profile Header */}
        <header className="flex flex-col items-center w-full">
          <div className="relative w-32 h-32 flex justify-center items-center mb-6">
            {/* Floating Icons around Profile */}
            <motion.div 
              animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 z-30 p-2 bg-emerald-500 rounded-lg shadow-lg text-white"
            >
              <TrendingUp className="w-4 h-4" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 12, 0], rotate: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-2 z-30 p-2 bg-cyan-500 rounded-lg shadow-lg text-white"
            >
              <Cpu className="w-4 h-4" />
            </motion.div>

            {/* Cleaner Rings */}
            <div className={`absolute inset-0 border rounded-full animate-[spin_10s_linear_infinite] ${isDarkMode ? 'border-emerald-500/20' : 'border-cyan-500/30'}`}></div>
            <div className={`absolute inset-2 border rounded-full animate-[spin_12s_linear_infinite_reverse] ${isDarkMode ? 'border-teal-500/20' : 'border-blue-500/30'}`}></div>
            
            <div className={`w-28 h-28 rounded-full overflow-hidden relative z-10 border-4 shadow-xl flex items-center justify-center ${isDarkMode ? 'bg-[#021b1a] border-[#021b1a]' : 'bg-white border-white'}`}>
              <img 
                src="https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Pribadi/1772540751342.png" 
                alt="Dharma Budiyasa" 
                className="w-full h-full object-cover pointer-events-none"
                onContextMenu={(e) => e.preventDefault()}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = isDarkMode 
                    ? "https://api.dicebear.com/9.x/avataaars/svg?seed=Dharmayanggg&backgroundColor=0f172a"
                    : "https://api.dicebear.com/9.x/avataaars/svg?seed=Dharmayanggg&backgroundColor=e2e8f0";
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <a href="https://instagram.com/dharmayanggg" target="_blank" rel="noopener noreferrer" className={`text-2xl font-bold hover:text-emerald-500 transition-colors tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Dharma Budiyasa
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className={`text-xs border px-4 py-1.5 rounded-full font-bold flex items-center gap-2 transition-all shadow-sm ${
                 isDarkMode 
                   ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                   : 'bg-cyan-50 border-cyan-100 text-cyan-600'
               }`}>
              <Rocket className="w-3 h-3" />
              Digital Kreator
            </div>
            <div 
               className={`text-sm border px-4 py-1.5 rounded-full font-medium flex items-center gap-2 transition-all shadow-sm ${
                 isDarkMode 
                   ? 'bg-[#021b1a] border-emerald-900/50 text-emerald-400' 
                   : 'bg-white border-slate-200 text-slate-600'
               }`}
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Tabanan, Bali
            </div>
          </div>

          {/* Project Stats Section */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 w-full max-w-4xl mx-auto mt-8">
            {[
              { label: 'Project', value: 100, suffix: '+' },
              { label: 'Websites', value: 50, suffix: '+' },
              { label: 'Apps', value: 20, suffix: '+' },
            ].map((stat, i) => (
              <div key={i} className={`p-3 rounded-xl border text-center transition-all duration-300 group hover:-translate-y-1 ${
                isDarkMode 
                  ? 'bg-[#021b1a]/50 border-emerald-900/30 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                  : 'bg-white border-slate-100 shadow-sm hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]'
              }`}>
                <div className={`text-xl font-black mb-1 transition-colors ${
                  isDarkMode 
                    ? 'text-white group-hover:text-emerald-400' 
                    : 'text-slate-900 group-hover:text-cyan-600'
                }`}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className={`text-[10px] uppercase tracking-wider font-bold transition-colors ${
                  isDarkMode 
                    ? 'text-slate-500 group-hover:text-emerald-500/70' 
                    : 'text-slate-500 group-hover:text-cyan-500/70'
                }`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </header>

        {/* SECTION 2: Expertise */}
        <section className="w-full space-y-4">
          <h3 className={`text-xs font-bold mb-2 tracking-widest uppercase flex items-center gap-3 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            <span className={`w-6 h-[2px] ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></span>
            Expertise
            <span className={`w-6 h-[2px] ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></span>
          </h3>

          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {skills.map((skill, index) => {
              const years = currentYear - skill.startYear + (skill.startYear === currentYear ? 1 : 0);
              const isSelected = selectedSkill === skill.id;
              
              // Variasi warna untuk setiap kartu
              const colors = [
                { border: 'hover:border-sky-500/50', icon: 'text-sky-400', bg: 'bg-sky-500', btn: 'bg-sky-500' },
                { border: 'hover:border-emerald-500/50', icon: 'text-emerald-400', bg: 'bg-emerald-500', btn: 'bg-emerald-500' },
                { border: 'hover:border-amber-500/50', icon: 'text-amber-400', bg: 'bg-amber-500', btn: 'bg-amber-500' },
                { border: 'hover:border-purple-500/50', icon: 'text-purple-400', bg: 'bg-purple-500', btn: 'bg-purple-500' },
              ];
              const color = colors[index % colors.length];

              return (
                <div key={skill.id} className={`group relative flex flex-col p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg backdrop-blur-md overflow-hidden ${
                  isDarkMode 
                    ? `bg-white/5 border-white/10 ${color.border}` 
                    : 'bg-white border-slate-200 hover:border-cyan-500'
                }`}>
                  <button 
                    onClick={() => setSelectedSkill(isSelected ? null : skill.id)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1.5">
                        <div className={`${color.icon} shrink-0`}>
                          {React.cloneElement(skill.icon as React.ReactElement, { className: "w-4 h-4" })}
                        </div>
                        <h4 className={`font-bold text-sm transition-colors leading-tight ${
                          isDarkMode ? 'text-slate-200 group-hover:text-white' : 'text-slate-800 group-hover:text-cyan-700'
                        }`}>{skill.title}</h4>
                      </div>
                      <p className={`text-xs font-black ml-7 ${isDarkMode ? color.icon : 'text-emerald-600'}`}>
                        {skill.startYear} - {currentYear} • {years} Years
                      </p>
                    </div>
                    
                    <div className={`p-2 rounded-lg transition-all transform duration-300 ${isSelected ? 'rotate-180' : ''} ${isDarkMode ? 'text-slate-400' : 'text-slate-400'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isSelected && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="overflow-hidden ml-7"
                      >
                        <p className={`text-xs leading-relaxed mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          {skill.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3: Experience */}
        <section className="w-full space-y-4">
          <h3 className={`text-xs font-bold mb-2 tracking-widest uppercase flex items-center gap-3 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            <span className={`w-6 h-[2px] ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></span>
            Experience
            <span className={`w-6 h-[2px] ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></span>
          </h3>
          
          <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-2 gap-4">
            {experiences.map((exp, i) => (
              <div key={i} className={`p-5 rounded-xl border transition-all duration-300 flex flex-col items-start w-full group hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] backdrop-blur-md relative overflow-hidden ${
                isDarkMode 
                  ? 'bg-sky-500/5 border-sky-500/10 hover:border-sky-400/40 hover:bg-sky-500/10' 
                  : 'bg-white/80 border-sky-100 hover:border-sky-300 hover:bg-sky-50'
              }`}>
                 <div className="flex justify-between w-full items-start mb-1 relative z-10">
                   <h4 className={`text-sm font-bold transition-colors ${
                     isDarkMode ? 'text-slate-200 group-hover:text-sky-300' : 'text-slate-800 group-hover:text-sky-600'
                   }`}>{exp.company}</h4>
                   <span className={`text-[10px] font-bold px-2 py-1 rounded-md border backdrop-blur-sm transition-colors ${
                     isDarkMode 
                       ? 'text-sky-300 bg-sky-500/10 border-sky-500/20 group-hover:bg-sky-500/20 group-hover:border-sky-400/40' 
                       : 'text-sky-700 bg-sky-100 border-sky-200'
                   }`}>{exp.period}</span>
                 </div>
                 <p className={`text-xs font-medium relative z-10 transition-colors ${isDarkMode ? 'text-slate-400 group-hover:text-sky-200/80' : 'text-slate-500 group-hover:text-sky-700/80'}`}>{exp.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Copywriting & Calculator */}
        <section className="w-full space-y-4">

          {/* COPYWRITING SECTION */}
          <div className="mt-2 space-y-10 relative max-w-4xl mx-auto">
            
            {/* Hook & Pain Point */}
            <div className="space-y-10">
              {/* Hook */}
              <div className="text-center space-y-6 relative z-10">
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md mx-auto ${isDarkMode ? 'bg-white/5 text-blue-400 border border-blue-500/20' : 'bg-cyan-50 text-cyan-600 border border-cyan-100'}`}>
                  Bangun Aset Digital
                </div>
                
                <div className="relative inline-block w-full">
                  <motion.div 
                    animate={{ y: [0, -10, 0] }} 
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="absolute left-4 -top-2 md:left-20 md:-top-4 text-blue-400 opacity-80 hidden md:block"
                  >
                     <Globe className="w-5 h-5 md:w-6 md:h-6" />
                  </motion.div>

                  <h2 className={`text-4xl md:text-5xl font-black leading-tight tracking-tighter ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Bikin Aset Digital yang Menghasilkan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Cuan 24/7</span>!
                  </h2>

                  <motion.div 
                    animate={{ y: [0, -10, 0] }} 
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }}
                    className="absolute right-4 -top-2 md:right-20 md:-top-4 text-emerald-400 opacity-80 hidden md:block"
                  >
                     <Cpu className="w-5 h-5 md:w-6 md:h-6" />
                  </motion.div>
                </div>

                <p className={`text-sm md:text-base max-w-2xl mx-auto leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                  Lupakan produk digital lama seperti PDF ebook dan lainnya. Saatnya bikin produk multifungsi dengan <span className="text-blue-400 font-bold">NoCode Development</span>. Saatnya bangun sistem yang bekerja otomatis untukmu.
                </p>
              </div>

              {/* Pain Point */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`p-8 rounded-3xl border relative overflow-hidden backdrop-blur-md max-w-3xl mx-auto ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-slate-100 shadow-xl shadow-slate-200/50'}`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Target className="w-24 h-24 text-red-500" />
                </div>
                <div className="flex flex-col gap-5 items-start relative z-10 text-left">
                  <div className="p-4 text-red-500 rounded-2xl shrink-0 bg-red-500/10">
                    <Briefcase className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h4 className={`text-lg md:text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Masih Terjebak Rutinitas?</h4>
                    <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                      Capek kerja lembur tapi penghasilan segitu-gitu aja? Bingung mau mulai bisnis tapi nggak punya produk fisik atau ribet urus stok & pengiriman? <span className="font-bold text-red-400">Itu tandanya kamu butuh Aset Digital.</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Potensi & Calculator Link */}
            <div className="space-y-10">
              {/* Potensi Sections */}
              <div className="grid gap-5 md:grid-cols-3">
                {[
                  { 
                    title: 'Potensi Produk Digital', 
                    desc: 'Sekali buat, jual berkali-kali. Margin 100% karena nggak ada biaya produksi ulang. Aset yang terus tumbuh tanpa batas ruang dan waktu!', 
                    icon: <Layers className="w-6 h-6" />,
                    color: 'text-emerald-400',
                    bgColor: 'bg-emerald-400/10'
                  },
                  { 
                    title: 'Potensi AI (Artificial Intelligence)', 
                    desc: 'Proses pembuatan konten & produk jadi 10x lebih cepat. AI adalah asisten pribadimu untuk skalabilitas bisnis tanpa batas.', 
                    icon: <Cpu className="w-6 h-6" />,
                    color: 'text-blue-400',
                    bgColor: 'bg-blue-400/10'
                  },
                  { 
                    title: 'Potensi Web & Aplikasi', 
                    desc: 'Website & Landing Page adalah "Salesman" digitalmu yang nggak pernah tidur. Siap closing kapanpun, dimanapun, 24 jam sehari!', 
                    icon: <Globe className="w-6 h-6" />,
                    color: 'text-orange-400',
                    bgColor: 'bg-orange-400/10'
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`p-6 rounded-2xl border flex flex-col items-start text-left gap-5 group hover:shadow-lg transition-all backdrop-blur-md ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-slate-50 shadow-sm hover:border-cyan-200'}`}
                  >
                    <div className={`p-3 rounded-xl shrink-0 transition-transform group-hover:scale-110 ${item.color} ${item.bgColor}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h5 className={`font-bold text-base md:text-lg mb-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>{item.title}</h5>
                      <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA to Calculator */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center pt-6"
              >
                <p className={`text-sm font-bold mb-6 tracking-wide ${isDarkMode ? 'text-emerald-400' : 'text-slate-600'}`}>
                  PENASARAN DENGAN POTENSINYA? 🚀
                </p>
                <button 
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-4 mx-auto transition-all shadow-2xl hover:scale-105 active:scale-95 group ${
                    isDarkMode 
                      ? 'bg-emerald-600 text-[#010b0a] hover:bg-emerald-500 shadow-emerald-900/40' 
                      : 'bg-cyan-500 text-white hover:bg-cyan-600 shadow-cyan-200'
                  }`}
                >
                  Hitung Potensi Cuan
                  <Calculator className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>

          {/* Income Calculator */}
          <div id="calculator" className={`mt-16 md:mt-24 p-8 md:p-12 rounded-3xl border relative overflow-hidden max-w-4xl mx-auto w-full ${
            isDarkMode 
              ? 'bg-[#021b1a] border-emerald-900/20 shadow-2xl' 
              : 'bg-gradient-to-br from-white to-slate-50 border-slate-200 shadow-xl shadow-slate-200/50'
          }`}>
            <div className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-[100px] ${isDarkMode ? 'bg-emerald-500/5' : 'bg-emerald-500/10'}`}></div>
            
            <div className="relative z-10 md:grid md:grid-cols-2 md:gap-12 md:items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-xl ${isDarkMode ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}`}>
                    <Calculator className="w-5 h-5" />
                  </div>
                  <h4 className={`font-bold text-[10px] uppercase tracking-[0.2em] ${isDarkMode ? 'text-emerald-500' : 'text-emerald-600'}`}>Income Simulator</h4>
                </div>
                
                <h3 className={`text-2xl md:text-3xl font-black mb-3 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Hitung Potensi Cuanmu 💸
                </h3>
                <p className={`text-sm mb-8 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Gunakan simulator ini untuk melihat seberapa besar potensi penghasilan pasif dari produk digitalmu setiap bulannya.
                </p>

                <div className="space-y-6 mb-8 md:mb-0">
                  <div className="space-y-2.5">
                    <label className={`text-[10px] font-black uppercase tracking-widest ${isDarkMode ? 'text-emerald-900' : 'text-slate-500'}`}>Harga Produk (Rp)</label>
                    <input 
                      type="number" 
                      placeholder="Contoh: 99000"
                      value={calcPrice}
                      onChange={(e) => setCalcPrice(e.target.value === '' ? '' : Number(e.target.value))}
                      className={`w-full px-4 py-4 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all ${
                        isDarkMode 
                          ? 'bg-[#010b0a] border-emerald-900/50 text-white placeholder-emerald-900/50' 
                          : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label className={`text-[10px] font-black uppercase tracking-widest ${isDarkMode ? 'text-emerald-900' : 'text-slate-500'}`}>Terjual / Hari</label>
                    <input 
                      type="number" 
                      placeholder="Contoh: 2"
                      value={calcSales}
                      onChange={(e) => setCalcSales(e.target.value === '' ? '' : Number(e.target.value))}
                      className={`w-full px-4 py-4 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all ${
                        isDarkMode 
                          ? 'bg-[#010b0a] border-emerald-900/50 text-white placeholder-emerald-900/50' 
                          : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>
              </div>

              <div className={`p-8 rounded-2xl border flex flex-col items-center justify-center h-full transition-all ${
                isDarkMode 
                  ? 'bg-[#010b0a] border-emerald-900/30 shadow-inner' 
                  : 'bg-white border-slate-200 shadow-inner'
              }`}>
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${isDarkMode ? 'text-emerald-900' : 'text-slate-500'}`}>Potensi Income Bulanan</span>
                <span className={`text-4xl md:text-5xl font-black ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  Rp {monthlyIncome.toLocaleString('id-ID')}
                </span>
              </div>
            </div>
          </div>

          {/* Post Calculator Copywriting */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-10 text-center space-y-4"
          >
            <p className={`text-sm leading-relaxed font-medium ${isDarkMode ? 'text-emerald-50' : 'text-slate-600'}`}>
              Sudah tau hasilnya? Seandainya kamu mulai tahun lalu, mungkin kamu sudah memiliki <span className="text-emerald-500 font-bold">income settle</span>. Jangan tunda lagi dan menyesal, coba upskill dirimu di sini.
            </p>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex justify-center"
            >
              <ArrowRight className="w-6 h-6 text-emerald-500 rotate-90" />
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION 5: Digital Products */}
        <section id="digital-products" className="w-full space-y-4">
          <h3 className={`text-xs font-bold mb-2 tracking-widest uppercase flex items-center gap-3 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            <span className={`w-6 h-[2px] ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></span>
            Digital Products
            <span className={`w-6 h-[2px] ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></span>
          </h3>

          <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, i) => {
              const isSelected = selectedProduct === product.id;
              // Variasi warna untuk products
              const colors = [
                { border: 'hover:border-purple-500/50', icon: 'text-purple-400', bg: 'bg-purple-500', btn: 'bg-purple-500' },
                { border: 'hover:border-sky-500/50', icon: 'text-sky-400', bg: 'bg-sky-500', btn: 'bg-sky-500' },
                { border: 'hover:border-amber-500/50', icon: 'text-amber-400', bg: 'bg-amber-500', btn: 'bg-amber-500' },
                { border: 'hover:border-emerald-500/50', icon: 'text-emerald-400', bg: 'bg-emerald-500', btn: 'bg-emerald-500' },
                { border: 'hover:border-pink-500/50', icon: 'text-pink-400', bg: 'bg-pink-500', btn: 'bg-pink-500' },
              ];
              const color = colors[i % colors.length];

              // Calculate discount
              let discount = 0;
              if (product.originalPrice) {
                 const p = parseInt(product.price.replace(/[^0-9]/g, ''));
                 const op = parseInt(product.originalPrice.replace(/[^0-9]/g, ''));
                 discount = Math.round(((op - p) / op) * 100);
              }

              return (
                <div key={product.id} className={`group relative flex flex-col p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg backdrop-blur-md overflow-hidden ${
                  isDarkMode 
                    ? `bg-white/5 border-white/10 ${color.border}` 
                    : 'bg-white border-slate-200 hover:border-cyan-500'
                }`}>
                  <button 
                    onClick={() => setSelectedProduct(isSelected ? null : product.id)}
                    className="flex md:flex-col md:items-center md:text-center md:justify-center items-center justify-between w-full text-left"
                  >
                    <div className="flex-1 md:w-full md:flex md:flex-col md:items-center">
                      <div className="flex flex-wrap md:flex-col items-center gap-2 mb-1.5 md:mb-3">
                        <CheckCircle2 className={`w-4 h-4 md:w-8 md:h-8 ${color.icon} shrink-0 mr-1`} />
                        <h4 className={`font-bold text-sm md:text-lg transition-colors leading-tight ${
                          isDarkMode ? 'text-slate-200 group-hover:text-white' : 'text-slate-800 group-hover:text-cyan-700'
                        }`}>{product.title}</h4>
                        
                        {product.status === 'On Hold' && (
                          <span className="text-[8px] px-1.5 py-0.5 rounded font-black uppercase tracking-tighter bg-red-500/20 text-red-500 border border-red-500/30 whitespace-nowrap">
                            On Hold
                          </span>
                        )}
                        {/* @ts-ignore */}
                        {product.label && (
                          <span className="text-[8px] px-1.5 py-0.5 rounded font-black uppercase tracking-tighter bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 whitespace-nowrap">
                            {/* @ts-ignore */}
                            {product.label}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 md:justify-center">
                         <p className={`text-sm md:text-base font-black ${isDarkMode ? color.icon : 'text-emerald-600'}`}>{product.price}</p>
                         {/* @ts-ignore */}
                         {product.originalPrice && (
                           <div className="flex items-center gap-1.5">
                             {/* @ts-ignore */}
                             <span className="text-[10px] line-through text-slate-500">{product.originalPrice}</span>
                             <span className="text-[9px] font-bold text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded-md border border-red-500/20">
                               Save {discount}%
                             </span>
                           </div>
                         )}
                      </div>
                    </div>
                    
                    <div className={`p-2 rounded-lg transition-all transform duration-300 ${isSelected ? 'rotate-180' : ''} ${isDarkMode ? 'text-slate-400' : 'text-slate-400'} md:mt-4`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isSelected && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="overflow-hidden ml-7 md:ml-0 md:text-center"
                      >
                        <p className={`text-xs leading-relaxed mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          {product.description}
                        </p>
                        
                        {product.status !== 'On Hold' ? (
                          <button 
                             onClick={() => window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(`Halo Dharma, saya mau order produk digital: ${product.title}.`)}`, '_blank')}
                             className={`w-full py-2.5 rounded-xl transition-all text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm active:scale-95 ${
                               isDarkMode 
                                 ? `${color.btn} text-white hover:bg-white/20` 
                                 : 'bg-slate-50 text-slate-500 hover:bg-cyan-600 hover:text-white border border-slate-100'
                             }`}
                          >
                             Order Sekarang
                             <ArrowRight className="w-3 h-3" />
                          </button>
                        ) : (
                          <button 
                             disabled
                             className={`w-full py-2.5 rounded-xl transition-all text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-not-allowed opacity-50 ${
                               isDarkMode 
                                 ? 'bg-slate-800 text-slate-500' 
                                 : 'bg-slate-100 text-slate-400'
                             }`}
                          >
                             Tidak Tersedia
                          </button>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION: Services & Pricing (Moved) */}
        <section className="w-full space-y-4">
          <h3 className={`text-xs font-bold mb-2 tracking-widest uppercase flex items-center gap-3 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            <span className={`w-6 h-[2px] ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></span>
            Services & Pricing
            <span className={`w-6 h-[2px] ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
             {services.map((service, i) => {
               const isSelected = selectedService === service.id;
               // Variasi warna untuk services
               const colors = [
                 { border: 'hover:border-orange-500/50', icon: 'text-orange-400', bg: 'bg-orange-500', btn: 'bg-orange-500' },
                 { border: 'hover:border-blue-500/50', icon: 'text-blue-400', bg: 'bg-blue-500', btn: 'bg-blue-500' },
                 { border: 'hover:border-pink-500/50', icon: 'text-pink-400', bg: 'bg-pink-500', btn: 'bg-pink-500' },
                 { border: 'hover:border-teal-500/50', icon: 'text-teal-400', bg: 'bg-teal-500', btn: 'bg-teal-500' },
               ];
               const color = colors[i % colors.length];

               return (
                 <div key={service.id} className={`group relative flex flex-col p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg backdrop-blur-md overflow-hidden ${
                   isDarkMode 
                     ? `bg-white/5 border-white/10 ${color.border}` 
                     : 'bg-white border-slate-200 hover:border-cyan-500'
                 }`}>
                   <button 
                     onClick={() => setSelectedService(isSelected ? null : service.id)}
                     className="flex md:flex-col md:items-center md:text-center md:justify-center items-center justify-between w-full text-left"
                   >
                     <div className="flex-1 md:w-full md:flex md:flex-col md:items-center">
                       <div className="flex md:flex-col items-center gap-3 mb-1.5 md:mb-3">
                         <div className={`${color.icon} shrink-0`}>
                           {React.cloneElement(service.icon as React.ReactElement, { className: "w-4 h-4 md:w-8 md:h-8" })}
                         </div>
                         <h4 className={`font-bold text-sm md:text-lg transition-colors leading-tight ${
                           isDarkMode ? 'text-slate-200 group-hover:text-white' : 'text-slate-800 group-hover:text-cyan-700'
                         }`}>{service.title}</h4>
                       </div>
                       <p className={`text-sm md:text-base font-black ml-7 md:ml-0 ${isDarkMode ? color.icon : 'text-emerald-600'}`}>{service.price}</p>
                     </div>
                     
                     <div className={`p-2 rounded-lg transition-all transform duration-300 ${isSelected ? 'rotate-180' : ''} ${isDarkMode ? 'text-slate-400' : 'text-slate-400'} md:mt-4`}>
                       <ChevronDown className="w-4 h-4" />
                     </div>
                   </button>

                   <AnimatePresence>
                     {isSelected && (
                       <motion.div 
                         initial={{ opacity: 0, height: 0, marginTop: 0 }}
                         animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                         exit={{ opacity: 0, height: 0, marginTop: 0 }}
                         className="overflow-hidden ml-7 md:ml-0 md:text-center"
                       >
                         <p className={`text-xs leading-relaxed mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                           {service.description}
                         </p>
                         
                         <button 
                            onClick={() => window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(`Halo Dharma, saya tertarik untuk Book Now layanan ${service.title}.`)}`, '_blank')}
                            className={`w-full py-2.5 rounded-xl transition-all text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm active:scale-95 ${
                              isDarkMode 
                                ? `${color.btn} text-white hover:bg-white/20` 
                                : 'bg-slate-50 text-slate-500 hover:bg-cyan-600 hover:text-white border border-slate-100'
                            }`}
                         >
                            Book Now
                            <ArrowRight className="w-3 h-3" />
                         </button>
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </div>
               );
             })}
          </div>
        </section>

        {/* SECTION: Enterprise Package */}
        <section className="w-full space-y-4 mt-4 max-w-4xl mx-auto">
          <div className={`p-8 rounded-3xl border relative overflow-hidden ${
            isDarkMode 
              ? 'bg-gradient-to-br from-[#021b1a] to-emerald-900/20 border-emerald-500/30' 
              : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'
          }`}>
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Rocket className="w-32 h-32 text-emerald-500" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 text-center md:text-left">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                  isDarkMode ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-600'
                }`}>
                  <Zap className="w-3 h-3" />
                  Most Premium
                </div>
                <h3 className={`text-2xl md:text-3xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Enterprise Development Package
                </h3>
                <p className={`text-sm font-medium max-w-md ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  AI Pro Integration + Premium Development + SaaS Management + Complex Apps + Server & Backend Automation
                </p>
              </div>

              <button 
                onClick={() => window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent("Hi Dharma, I am interested in the Enterprise Development Package.")}`, '_blank')}
                className={`px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-105 active:scale-95 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-emerald-900/50' 
                    : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-cyan-200/50'
                }`}
              >
                By pitching and offering
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 6: Social Links */}
        <section className="w-full space-y-4 mt-4 max-w-4xl mx-auto">
           <h3 className={`text-xs font-bold mb-2 tracking-widest uppercase text-center ${isDarkMode ? 'text-emerald-900' : 'text-slate-400'}`}>Connect</h3>
           <div className="grid grid-cols-3 gap-3 md:gap-6">
              <a href="https://instagram.com/dharmayanggg" target="_blank" rel="noopener noreferrer" 
                 className={`flex flex-col items-center justify-center py-5 md:py-8 rounded-2xl border transition-all group hover:shadow-lg hover:-translate-y-1 ${
                   isDarkMode 
                     ? 'bg-[#021b1a] border-emerald-900/30 hover:border-pink-500/50 hover:bg-[#032d2b]' 
                     : 'bg-white border-slate-200 hover:border-pink-500 shadow-sm'
                 }`}>
                <span className={`text-sm md:text-base font-bold transition-colors ${
                  isDarkMode ? 'text-slate-300 group-hover:text-pink-400' : 'text-slate-600 group-hover:text-pink-600'
                }`}>Instagram</span>
              </a>
              <a href="https://threads.net/@dharmayanggg" target="_blank" rel="noopener noreferrer" 
                 className={`flex flex-col items-center justify-center py-5 md:py-8 rounded-2xl border transition-all group hover:shadow-lg hover:-translate-y-1 ${
                   isDarkMode 
                     ? 'bg-[#021b1a] border-emerald-900/30 hover:border-slate-400/50 hover:bg-[#032d2b]' 
                     : 'bg-white border-slate-200 hover:border-slate-800 shadow-sm'
                 }`}>
                <span className={`text-sm md:text-base font-bold transition-colors ${
                  isDarkMode ? 'text-slate-300 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'
                }`}>Threads</span>
              </a>
              <a href={`https://wa.me/${waNumber}?text=${waMessage}`} target="_blank" rel="noopener noreferrer" 
                 className={`flex flex-col items-center justify-center py-5 md:py-8 rounded-2xl border transition-all group hover:shadow-lg hover:-translate-y-1 ${
                   isDarkMode 
                     ? 'bg-[#021b1a] border-emerald-900/30 hover:border-emerald-500/50 hover:bg-[#032d2b]' 
                     : 'bg-white border-slate-200 hover:border-emerald-500 shadow-sm'
                 }`}>
                <span className={`text-sm md:text-base font-bold transition-colors ${
                  isDarkMode ? 'text-slate-300 group-hover:text-emerald-400' : 'text-slate-600 group-hover:text-emerald-600'
                }`}>WhatsApp</span>
              </a>
           </div>
        </section>

        {/* Footer */}
        <footer className={`mt-8 mb-8 text-center space-y-2 ${isDarkMode ? 'text-slate-700' : 'text-slate-400'}`}>
          <p className="text-[10px] font-black uppercase tracking-[0.3em]">© {new Date().getFullYear()} Dharmayanggg.</p>
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">This linkbio design by dharmayang</p>
        </footer>

      </main>

      {/* Global CSS for Security & Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-touch-callout: none;
        }
        img {
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          user-drag: none;
          pointer-events: none;
        }
        input {
          -webkit-user-select: text;
          -moz-user-select: text;
          -ms-user-select: text;
          user-select: text;
        }
      `}} />
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-50 transition-all ${
              isDarkMode 
                ? 'bg-emerald-500 text-[#010b0a] hover:bg-emerald-400 shadow-emerald-900/50' 
                : 'bg-cyan-600 text-white hover:bg-cyan-700 shadow-cyan-200/50'
            }`}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
