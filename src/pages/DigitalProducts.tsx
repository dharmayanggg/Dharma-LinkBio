import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Package, ArrowLeft, Globe, Cpu, Target, Briefcase, Layers, Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalProducts: React.FC = () => {
  const isDarkMode = true;
  const waNumber = "6282342344558";
  
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [calcPrice, setCalcPrice] = useState<number | ''>('');
  const [calcSales, setCalcSales] = useState<number | ''>('');
  const [monthlyIncome, setMonthlyIncome] = useState<number>(0);

  useEffect(() => {
    if (calcPrice !== '' && calcSales !== '') {
      setMonthlyIncome(Number(calcPrice) * Number(calcSales) * 30);
    } else {
      setMonthlyIncome(0);
    }
  }, [calcPrice, calcSales]);

  const products = [
    { 
      id: 2, 
      title: 'Modul Belajar UI/UX Design untuk Pemula', 
      price: 'Rp 67.000',
      originalPrice: 'Rp 399.000',
      description: 'Pelajari fundamental desain antarmuka dan pengalaman pengguna. Dari wireframing hingga prototyping, siap kerja di industri kreatif.'
    },
    { 
      id: 1, 
      title: 'Modul Belajar Buat Website & Aplikasi VibeCoding', 
      price: 'Rp 67.000',
      originalPrice: 'Rp 399.000',
      description: 'Bimbingan privat intensif membuat website dan aplikasi dari nol menggunakan metode VibeCoding yang efisien dan modern. Cocok untuk pemula yang ingin hasil cepat.'
    },
    { 
      id: 4, 
      title: 'Modifikasi Landing Page Lynk.id/Scalev', 
      price: 'Rp 349.000',
      originalPrice: 'Rp 650.000',
      label: 'Garansi Beda!',
      description: 'Kustomisasi tampilan menggunakan metode VibeCoding. Lynk.id/Scalev hanya digunakan sebagai payment gateway agar transaksi aman & otomatis.'
    },
    { 
      id: 6, 
      title: 'Jasa Pembuatan Tools Web untuk Kreator Produk Digital', 
      price: 'Rp 499.000',
      originalPrice: 'Rp 999.000',
      description: 'Solusi pembuatan tools berbasis web untuk mendukung bisnis produk digital Anda. Otomatisasi, efisiensi, dan skalabilitas.'
    },
    { 
      id: 3, 
      title: 'Belajar Full Stack Development', 
      price: 'Rp 669.000', 
      status: 'On Hold',
      description: 'Kurikulum lengkap menjadi Full Stack Developer handal. Menguasai frontend, backend, dan database untuk membangun aplikasi kompleks.'
    },
  ];

  return (
    <div className={`min-h-screen font-sans pb-20 transition-colors duration-300 ${isDarkMode ? 'bg-[#010b0a] text-slate-300' : 'bg-slate-50 text-slate-800'}`}>
      {/* Background Ornaments */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-0 w-full h-96 bg-gradient-to-b ${isDarkMode ? 'from-[#021b1a] to-transparent' : 'from-slate-100 to-transparent'}`}></div>
        <div className={`absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] ${isDarkMode ? 'bg-emerald-900/20' : 'bg-cyan-100/50'}`}></div>
        <div className={`absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] ${isDarkMode ? 'bg-teal-900/20' : 'bg-blue-100/50'}`}></div>
      </div>

      <nav className={`sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all ${isDarkMode ? 'bg-[#010b0a]/80 border-emerald-900/20' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-500 transition-colors font-bold text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-emerald-500" />
            <span className="font-black tracking-tighter text-lg text-white">Digital Products</span>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-12 space-y-20">
        {/* COPYWRITING SECTION */}
        <section className="space-y-10">
          <div className="text-center space-y-6">
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
        </section>

        {/* POTENSI SECTION */}
        <section className="grid gap-5 md:grid-cols-3">
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
        </section>

        {/* CALCULATOR SECTION */}
        <section id="calculator" className={`p-8 md:p-12 rounded-3xl border relative overflow-hidden w-full ${
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
        </section>

        {/* LIST PRODUCTS SECTION */}
        <section id="digital-products" className="w-full space-y-8">
          <div className="text-center">
            <h3 className={`text-xs font-bold mb-2 tracking-widest uppercase flex items-center justify-center gap-3 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              <span className={`w-6 h-[2px] ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></span>
              Available Products
              <span className={`w-6 h-[2px] ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></span>
            </h3>
            <h2 className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Katalog Produk Digital</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map((product, i) => {
              const isSelected = selectedProduct === product.id;
              const colors = [
                { border: 'hover:border-purple-500/50', icon: 'text-purple-400', bg: 'bg-purple-500', btn: 'bg-purple-500' },
                { border: 'hover:border-sky-500/50', icon: 'text-sky-400', bg: 'bg-sky-500', btn: 'bg-sky-500' },
                { border: 'hover:border-amber-500/50', icon: 'text-amber-400', bg: 'bg-amber-500', btn: 'bg-amber-500' },
                { border: 'hover:border-emerald-500/50', icon: 'text-emerald-400', bg: 'bg-emerald-500', btn: 'bg-emerald-500' },
                { border: 'hover:border-pink-500/50', icon: 'text-pink-400', bg: 'bg-pink-500', btn: 'bg-pink-500' },
              ];
              const color = colors[i % colors.length];

              let discount = 0;
              if (product.originalPrice) {
                 const p = parseInt(product.price.replace(/[^0-9]/g, ''));
                 const op = parseInt(product.originalPrice.replace(/[^0-9]/g, ''));
                 discount = Math.round(((op - p) / op) * 100);
              }

              return (
                <div key={product.id} className={`group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg backdrop-blur-md overflow-hidden ${
                  isDarkMode 
                    ? `bg-white/5 border-white/10 ${color.border}` 
                    : 'bg-white border-slate-200 hover:border-cyan-500'
                }`}>
                  <button 
                    onClick={() => setSelectedProduct(isSelected ? null : product.id)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle2 className={`w-5 h-5 ${color.icon} shrink-0 mt-0.5`} />
                        <div className="flex flex-col gap-1 min-w-0">
                          <h4 className={`font-bold text-sm md:text-base transition-colors leading-tight ${
                            isDarkMode ? 'text-slate-200 group-hover:text-white' : 'text-slate-800 group-hover:text-cyan-700'
                          }`}>{product.title}</h4>
                          
                          <div className="flex flex-wrap gap-1.5">
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
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 pl-8">
                         <p className={`text-sm font-black ${isDarkMode ? color.icon : 'text-emerald-600'}`}>{product.price}</p>
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
                    
                    <div className={`p-2 rounded-lg transition-all transform duration-300 ${isSelected ? 'rotate-180' : ''} ${isDarkMode ? 'text-slate-400' : 'text-slate-400'}`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isSelected && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="overflow-hidden ml-8"
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
      </main>
    </div>
  );
};

export default DigitalProducts;
