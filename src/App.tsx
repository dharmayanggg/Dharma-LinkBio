import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { ChevronRight, MessageCircle, Code, Palette, Smartphone, BarChart3, ExternalLink, Briefcase, Layers, Sun, Moon, Calculator, ArrowRight, TrendingUp, Cpu, Zap, Target, Rocket, CheckCircle2, Globe, Database, ChevronDown, ArrowUp, FileText, ShoppingBag, Video, Package, Laptop, Instagram, AtSign } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Import Pages
import Portfolio from './pages/Portfolio';
import PortfolioGallery from './pages/PortfolioGallery';
import Services from './pages/Services';
import DigitalProducts from './pages/DigitalProducts';

import InteractiveCard from './components/InteractiveCard';

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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioGallery />} />
        <Route path="/portfolio/preview" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/digital-products" element={<DigitalProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  // State for selected skill details
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
  
  // Hardcoded Dark Mode for the requested Emerald/Black theme
  const isDarkMode = true;

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
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
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

      <InteractiveCard 
        name="Dharma Budiyasa" 
        role="Digital Enthusiast" 
        imageUrl="https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Pribadi/1772540751342.png" 
      />

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-6 pb-12 flex flex-col items-center gap-10">
        
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

        {/* Action & Stats Container */}
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 mt-8">
          {/* Project Stats Section */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 w-full">
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

          {/* New Buttons Section: Service, Product Digital */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 w-full">
            <Link 
              to="/services"
              className={`p-3 rounded-xl font-bold text-[10px] md:text-sm flex flex-col items-center justify-center gap-2 transition-all duration-300 border backdrop-blur-md group hover:-translate-y-1 active:scale-95 text-center h-full w-full ${
                isDarkMode 
                  ? 'bg-white/5 border-white/10 text-slate-300 hover:border-emerald-500 hover:text-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]' 
                  : 'bg-white/60 border-slate-200 text-slate-600 hover:border-emerald-500 hover:text-emerald-600 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]'
              }`}
            >
              <Laptop className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110" />
              <span>Service</span>
            </Link>

            <Link 
              to="/digital-products"
              className={`p-3 rounded-xl font-bold text-[10px] md:text-sm flex flex-col items-center justify-center gap-2 transition-all duration-300 border backdrop-blur-md group hover:-translate-y-1 active:scale-95 text-center h-full w-full ${
                isDarkMode 
                  ? 'bg-white/5 border-white/10 text-slate-300 hover:border-purple-500 hover:text-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]' 
                  : 'bg-white/60 border-slate-200 text-slate-600 hover:border-purple-500 hover:text-purple-600 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]'
              }`}
            >
              <Package className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110" />
              <span>Product Digital</span>
            </Link>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link 
              to="/portfolio"
              className={`p-4 rounded-xl font-bold text-sm flex items-center justify-start px-6 gap-3 transition-all duration-300 border backdrop-blur-md group hover:-translate-y-1 active:scale-[0.98] ${
                isDarkMode 
                  ? 'bg-emerald-500 border-emerald-500 text-[#010b0a] hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                  : 'bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-700 shadow-sm'
              }`}
            >
              <Briefcase className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Web Portofolio</span>
              <ArrowRight className="w-4 h-4 ml-auto" />
            </Link>
            <a 
              href="https://drive.google.com/file/d/1wQWC5AW_ZGwKkTomy6CgOi1ZWEhf2x9t/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-xl font-bold text-sm flex items-center justify-start px-6 gap-3 transition-all duration-300 border backdrop-blur-md group hover:-translate-y-1 active:scale-[0.98] ${
                isDarkMode 
                  ? 'bg-white/5 border-white/10 text-slate-300 hover:border-emerald-500/50 hover:bg-white/10' 
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm'
              }`}
            >
              <FileText className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Design Portfolio (Pdf)</span>
              <ExternalLink className="w-4 h-4 opacity-50 ml-auto" />
            </a>
          </div>
        </div>

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

        {/* SECTION 5: Experience */}
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

        {/* SECTION 6: Web Projects Showcase */}
        <section className="w-full space-y-6">
          <div className="flex items-center justify-between">
            <h3 className={`text-xs font-bold tracking-widest uppercase flex items-center gap-3 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              <span className={`w-6 h-[2px] ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></span>
              Web Projects
              <span className={`w-6 h-[2px] ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></span>
            </h3>
            <Link to="/portfolio" className="text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:text-emerald-400 flex items-center gap-1 transition-colors">
              View All <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { 
                title: 'Retail Memberships', 
                desc: 'Platform kartu member digital & AI scan produk.',
                value: '8.5M',
                icon: <ShoppingBag className="w-5 h-5" />,
                color: 'from-emerald-500/20 to-teal-500/20'
              },
              { 
                title: 'UKM Penalaran Hub', 
                desc: 'Platform komunitas riset & forum diskusi AI.',
                value: '5.0M',
                icon: <Globe className="w-5 h-5" />,
                color: 'from-blue-500/20 to-cyan-500/20'
              },
              { 
                title: 'Pegadaian Swasta', 
                desc: 'Landing page & tools taksiran barang otomatis.',
                value: '3.5M',
                icon: <Calculator className="w-5 h-5" />,
                color: 'from-amber-500/20 to-orange-500/20'
              }
            ].map((p, i) => (
              <Link key={i} to="/portfolio" className={`group p-5 rounded-2xl border border-white/10 bg-gradient-to-br ${p.color} hover:border-emerald-500/30 transition-all relative overflow-hidden`}>
                <div className="relative z-10 flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="p-2 w-fit rounded-lg bg-white/10 text-white mb-2">
                      {p.icon}
                    </div>
                    <h4 className="font-black text-white uppercase tracking-tight text-sm">{p.title}</h4>
                    <p className="text-[10px] text-slate-400 leading-relaxed max-w-[180px]">{p.desc}</p>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 opacity-10 group-hover:scale-110 transition-transform">
                   {React.cloneElement(p.icon as React.ReactElement, { className: "w-20 h-20" })}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* SECTION 6: Logo Marquee */}
        <div className="w-full overflow-hidden py-10 space-y-8">
          <div className="flex flex-col gap-6">
            {/* Row 1: Right to Left */}
            <div className="flex overflow-hidden group">
              <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="flex items-center gap-12 whitespace-nowrap px-6 shrink-0"
              >
                {[
                  "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/claude.png",
                  "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/cursor.png",
                  "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/firebase-logo.png",
                  "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/gemini-logo.png",
                  "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/github-logo.png"
                ].map((url, i) => (
                  <img key={i} src={url} alt="tech-logo" className="h-12 md:h-16 w-auto object-contain transition-all [filter:brightness(0)_invert(1)] opacity-60 hover:opacity-100" referrerPolicy="no-referrer" />
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/claude.png",
                  "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/cursor.png",
                  "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/firebase-logo.png",
                  "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/gemini-logo.png",
                  "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/github-logo.png"
                ].map((url, i) => (
                  <img key={`dup-${i}`} src={url} alt="tech-logo" className="h-12 md:h-16 w-auto object-contain transition-all [filter:brightness(0)_invert(1)] opacity-60 hover:opacity-100" referrerPolicy="no-referrer" />
                ))}
              </motion.div>
            </div>

            {/* Row 2: Left to Right */}
            <div className="flex overflow-hidden group">
              <motion.div 
                animate={{ x: [-1000, 0] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex items-center gap-12 whitespace-nowrap px-6 shrink-0"
              >
                {[
                  "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/google-aistudio_1.png",
                  "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/google-cloud-logo.png",
                  "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/supabase-logo.png",
                  "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/v0-dev.png",
                  "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/vercel-logo.png"
                ].map((url, i) => (
                  <img key={i} src={url} alt="tech-logo-2" className="h-12 md:h-16 w-auto object-contain transition-all [filter:brightness(0)_invert(1)] opacity-60 hover:opacity-100" referrerPolicy="no-referrer" />
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/google-aistudio_1.png",
                  "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/google-cloud-logo.png",
                  "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/supabase-logo.png",
                  "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/v0-dev.png",
                  "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/vercel-logo.png"
                ].map((url, i) => (
                  <img key={`dup2-${i}`} src={url} alt="tech-logo-2" className="h-12 md:h-16 w-auto object-contain transition-all [filter:brightness(0)_invert(1)] opacity-60 hover:opacity-100" referrerPolicy="no-referrer" />
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* SECTION 6: Social Links */}
           <div className="flex flex-col items-center gap-4 mt-4">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-white">Let's Connect:</p>
              <div className="flex items-center gap-8">
                <a href="https://instagram.com/dharmayanggg" target="_blank" rel="noopener noreferrer" 
                   className="transition-all hover:scale-110 active:scale-95 group">
                  <Instagram className="w-6 h-6 text-slate-400 group-hover:text-pink-500 transition-colors" />
                </a>
                <a href="https://threads.net/@dharmayanggg" target="_blank" rel="noopener noreferrer" 
                   className="transition-all hover:scale-110 active:scale-95 group">
                  <AtSign className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                </a>
                <a href={`https://wa.me/${waNumber}?text=${waMessage}`} target="_blank" rel="noopener noreferrer" 
                   className="transition-all hover:scale-110 active:scale-95 group">
                  <MessageCircle className="w-6 h-6 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                </a>
              </div>
           </div>

        {/* Footer */}
        <footer className="mt-6 mb-4 text-center space-y-2 text-white/60">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white">© {new Date().getFullYear()} Dharmayanggg.</p>
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
