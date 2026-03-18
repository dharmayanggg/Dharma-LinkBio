import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Laptop, ArrowLeft, ChevronDown, ArrowRight, Rocket, Zap, Smartphone, Code, Layers, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const waNumber = "6282342344558";
  const [selectedService, setSelectedService] = useState<number | null>(null);

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
            <Laptop className="w-5 h-5 text-black" />
            <span className="font-black tracking-tighter text-lg text-black">Services</span>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-12 space-y-16">
        {/* SERVICES SECTION */}
        <section className="w-full space-y-8">
          <div className="text-center">
            <h3 className="text-xs font-bold mb-2 tracking-widest uppercase flex items-center justify-center gap-3 text-slate-400">
              <span className="w-6 h-[2px] bg-slate-200"></span>
              Services for Company
              <span className="w-6 h-[2px] bg-slate-200"></span>
            </h3>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Solusi Digital Strategis</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {services.map((service, i) => {
               const isSelected = selectedService === service.id;
               const colors = [
                 { border: 'hover:border-black/30', icon: 'text-black', bg: 'bg-black', btn: 'bg-black' },
                 { border: 'hover:border-black/30', icon: 'text-black', bg: 'bg-black', btn: 'bg-black' },
                 { border: 'hover:border-black/30', icon: 'text-black', bg: 'bg-black', btn: 'bg-black' },
                 { border: 'hover:border-black/30', icon: 'text-black', bg: 'bg-black', btn: 'bg-black' },
               ];
               const color = colors[i % colors.length];

               return (
                 <div key={service.id} className={`group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:shadow-md backdrop-blur-md overflow-hidden bg-white border-gray-200 ${color.border}`}>
                   <button 
                     onClick={() => setSelectedService(isSelected ? null : service.id)}
                     className="flex items-center justify-between w-full text-left"
                   >
                     <div className="flex-1">
                       <div className="flex items-center gap-3 mb-1.5">
                         <div className={`${color.icon} shrink-0`}>
                           {React.cloneElement(service.icon as React.ReactElement, { className: "w-5 h-5" })}
                         </div>
                         <h4 className="font-bold text-sm md:text-base transition-colors leading-tight text-slate-800 group-hover:text-black">{service.title}</h4>
                       </div>
                       <p className="text-sm font-black ml-8 text-slate-500">{service.price}</p>
                     </div>
                     
                     <div className={`p-2 rounded-lg transition-all transform duration-300 ${isSelected ? 'rotate-180' : ''} text-slate-400`}>
                       <ChevronDown className="w-4 h-4" />
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
                           {service.description}
                         </p>
                         
                         <button 
                            onClick={() => window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(`Halo Dharma, saya tertarik untuk Book Now layanan ${service.title}.`)}`, '_blank')}
                            className="w-full py-2.5 rounded-xl transition-all text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm active:scale-95 bg-black text-white hover:bg-gray-800"
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

        {/* ENTERPRISE PACKAGE SECTION */}
        <section className="w-full space-y-4">
          <div className="p-8 rounded-3xl border relative overflow-hidden bg-white border-gray-200 shadow-sm">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Rocket className="w-32 h-32 text-black" />
            </div>
            
            <div className="relative z-10 flex flex-col items-start gap-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-black/5 text-black">
                  <Zap className="w-3 h-3" />
                  Most Premium
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                  Enterprise Development Package
                </h3>
                <p className="text-sm font-medium max-w-md text-slate-500">
                  AI Pro Integration + Premium Development + SaaS Management + Complex Apps + Server & Backend Automation
                </p>
              </div>

              <button 
                onClick={() => window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent("Hi Dharma, I am interested in the Enterprise Development Package.")}`, '_blank')}
                className="px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-sm hover:scale-105 active:scale-95 bg-black text-white hover:bg-gray-800"
              >
                By pitching and offering
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
