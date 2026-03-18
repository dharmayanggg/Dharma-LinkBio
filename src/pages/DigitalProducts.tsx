import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Package, ArrowLeft, Globe, Cpu, Target, Briefcase, Layers, Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalProducts: React.FC = () => {
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
    <div className="min-h-screen font-sans pb-20 bg-white text-slate-800">
      {/* Background Ornaments */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-gray-50 to-transparent"></div>
      </div>

      <nav className="sticky top-0 z-50 w-full border-b backdrop-blur-md bg-white/80 border-gray-200">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-black/5 border border-black/10 text-slate-400 hover:text-black transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-black" />
            <span className="font-black tracking-tighter text-lg text-black">Digital Products</span>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-12 space-y-20">
        {/* COPYWRITING SECTION */}
        <section className="space-y-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md mx-auto bg-black/5 text-black border border-black/10">
              Bangun Aset Digital
            </div>
            
            <div className="relative inline-block w-full">
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute left-4 -top-2 md:left-20 md:-top-4 text-black/20 opacity-80 hidden md:block"
              >
                 <Globe className="w-5 h-5 md:w-6 md:h-6" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter text-slate-900">
                Bikin Aset Digital yang Menghasilkan <span className="text-black">Cuan 24/7</span>!
              </h2>

              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }}
                className="absolute right-4 -top-2 md:right-20 md:-top-4 text-black/20 opacity-80 hidden md:block"
              >
                 <Cpu className="w-5 h-5 md:w-6 md:h-6" />
              </motion.div>
            </div>

            <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-slate-500">
              Lupakan produk digital lama seperti PDF ebook dan lainnya. Saatnya bikin produk multifungsi dengan <span className="text-black font-bold">NoCode Development</span>. Saatnya bangun sistem yang bekerja otomatis untukmu.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 rounded-3xl border relative overflow-hidden backdrop-blur-md max-w-3xl mx-auto bg-white border-gray-200 shadow-sm"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Target className="w-24 h-24 text-black" />
            </div>
            <div className="flex flex-col gap-5 items-start relative z-10 text-left">
              <div className="p-4 text-black rounded-2xl shrink-0 bg-black/5">
                <Briefcase className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Masih Terjebak Rutinitas?</h4>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                  Capek kerja lembur tapi penghasilan segitu-gitu aja? Bingung mau mulai bisnis tapi nggak punya produk fisik atau ribet urus stok & pengiriman? <span className="font-bold text-black">Itu tandanya kamu butuh Aset Digital.</span>
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
              color: 'text-black',
              bgColor: 'bg-black/5'
            },
            { 
              title: 'Potensi AI (Artificial Intelligence)', 
              desc: 'Proses pembuatan konten & produk jadi 10x lebih cepat. AI adalah asisten pribadimu untuk skalabilitas bisnis tanpa batas.', 
              icon: <Cpu className="w-6 h-6" />,
              color: 'text-black',
              bgColor: 'bg-black/5'
            },
            { 
              title: 'Potensi Web & Aplikasi', 
              desc: 'Website & Landing Page adalah "Salesman" digitalmu yang nggak pernah tidur. Siap closing kapanpun, dimanapun, 24 jam sehari!', 
              icon: <Globe className="w-6 h-6" />,
              color: 'text-black',
              bgColor: 'bg-black/5'
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border flex flex-col items-start text-left gap-5 group hover:shadow-md transition-all backdrop-blur-md bg-white border-gray-200 hover:border-black/30"
            >
              <div className={`p-3 rounded-xl shrink-0 transition-transform group-hover:scale-110 ${item.color} ${item.bgColor}`}>
                {item.icon}
              </div>
              <div>
                <h5 className="font-bold text-base md:text-lg mb-2 text-slate-800">{item.title}</h5>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* CALCULATOR SECTION */}
        <section id="calculator" className="p-8 md:p-12 rounded-3xl border relative overflow-hidden w-full bg-white border-gray-200 shadow-sm">
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[100px] bg-black/5"></div>
          
          <div className="relative z-10 md:grid md:grid-cols-2 md:gap-12 md:items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-black/5 text-black">
                  <Calculator className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-black/50">Income Simulator</h4>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black mb-3 tracking-tight text-slate-900">
                Hitung Potensi Cuanmu 💸
              </h3>
              <p className="text-sm mb-8 leading-relaxed text-slate-600">
                Gunakan simulator ini untuk melihat seberapa besar potensi penghasilan pasif dari produk digitalmu setiap bulannya.
              </p>

              <div className="space-y-6 mb-8 md:mb-0">
                <div className="space-y-2.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Harga Produk (Rp)</label>
                  <input 
                    type="number" 
                    placeholder="Contoh: 99000"
                    value={calcPrice}
                    onChange={(e) => setCalcPrice(e.target.value === '' ? '' : Number(e.target.value))}
                    className="w-full px-4 py-4 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-black/20 transition-all bg-white border-gray-200 text-slate-900 placeholder-slate-400"
                  />
                </div>
                <div className="space-y-2.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Terjual / Hari</label>
                  <input 
                    type="number" 
                    placeholder="Contoh: 2"
                    value={calcSales}
                    onChange={(e) => setCalcSales(e.target.value === '' ? '' : Number(e.target.value))}
                    className="w-full px-4 py-4 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-black/20 transition-all bg-white border-gray-200 text-slate-900 placeholder-slate-400"
                  />
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border flex flex-col items-center justify-center h-full transition-all bg-gray-50 border-gray-200 shadow-inner">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-slate-500">Potensi Income Bulanan</span>
              <span className="text-4xl md:text-5xl font-black text-black">
                Rp {monthlyIncome.toLocaleString('id-ID')}
              </span>
            </div>
          </div>
        </section>

        {/* LIST PRODUCTS SECTION */}
        <section id="digital-products" className="w-full space-y-8">
          <div className="text-center">
            <h3 className="text-xs font-bold mb-2 tracking-widest uppercase flex items-center justify-center gap-3 text-slate-400">
              <span className="w-6 h-[2px] bg-slate-200"></span>
              Available Products
              <span className="w-6 h-[2px] bg-slate-200"></span>
            </h3>
            <h2 className="text-3xl font-black text-slate-900">Katalog Produk Digital</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map((product, i) => {
              const isSelected = selectedProduct === product.id;
              const color = { border: 'hover:border-black/30', icon: 'text-black', bg: 'bg-black', btn: 'bg-black' };

              let discount = 0;
              if (product.originalPrice) {
                 const p = parseInt(product.price.replace(/[^0-9]/g, ''));
                 const op = parseInt(product.originalPrice.replace(/[^0-9]/g, ''));
                 discount = Math.round(((op - p) / op) * 100);
              }

              return (
                <div key={product.id} className={`group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:shadow-md backdrop-blur-md overflow-hidden bg-white border-gray-200 ${color.border}`}>
                  <button 
                    onClick={() => setSelectedProduct(isSelected ? null : product.id)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle2 className={`w-5 h-5 ${color.icon} shrink-0 mt-0.5`} />
                        <div className="flex flex-col gap-1 min-w-0">
                          <h4 className="font-bold text-sm md:text-base transition-colors leading-tight text-slate-800 group-hover:text-black">{product.title}</h4>
                          
                          <div className="flex flex-wrap gap-1.5">
                            {product.status === 'On Hold' && (
                              <span className="text-[8px] px-1.5 py-0.5 rounded font-black uppercase tracking-tighter bg-red-50 text-red-500 border border-red-100 whitespace-nowrap">
                                On Hold
                              </span>
                            )}
                            {/* @ts-ignore */}
                            {product.label && (
                              <span className="text-[8px] px-1.5 py-0.5 rounded font-black uppercase tracking-tighter bg-black/5 text-black border border-black/10 whitespace-nowrap">
                                {/* @ts-ignore */}
                                {product.label}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 pl-8">
                         <p className="text-sm font-black text-black">{product.price}</p>
                         {/* @ts-ignore */}
                         {product.originalPrice && (
                           <div className="flex items-center gap-1.5">
                             {/* @ts-ignore */}
                             <span className="text-[10px] line-through text-slate-400">{product.originalPrice}</span>
                             <span className="text-[9px] font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded-md border border-red-100">
                               Save {discount}%
                             </span>
                           </div>
                         )}
                      </div>
                    </div>
                    
                    <div className={`p-2 rounded-lg transition-all transform duration-300 ${isSelected ? 'rotate-180' : ''} text-slate-400`}>
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
                        <p className="text-xs leading-relaxed mb-4 text-slate-500">
                          {product.description}
                        </p>
                        
                        {product.status !== 'On Hold' ? (
                          <button 
                             onClick={() => window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(`Halo Dharma, saya mau order produk digital: ${product.title}.`)}`, '_blank')}
                             className="w-full py-2.5 rounded-xl transition-all text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm active:scale-95 bg-black text-white hover:bg-gray-800"
                          >
                             Order Sekarang
                             <ArrowRight className="w-3 h-3" />
                          </button>
                        ) : (
                          <button 
                             disabled
                             className="w-full py-2.5 rounded-xl transition-all text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-not-allowed opacity-50 bg-gray-100 text-slate-400"
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
