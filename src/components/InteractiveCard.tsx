import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';
import { 
  Code2, Github, Linkedin, Cpu, Terminal, QrCode, 
  Instagram, AtSign, MessageCircle, TrendingUp, 
  MapPin
} from 'lucide-react';

interface InteractiveCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

export default function InteractiveCard({ name, role, imageUrl }: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isInteracted, setIsInteracted] = useState(false);

  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);
  const idleY = useMotionValue(0);
  const idleRotate = useMotionValue(0);
  
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(dragX, { stiffness: 400, damping: 12 });
  const springY = useSpring(dragY, { stiffness: 400, damping: 12 });
  
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const clickStart = useRef({ x: 0, y: 0, time: 0 });

  // 🔥 MODE PRO: Resume Animation on Click Outside 🔥
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setIsInteracted(false);
      }
    };
    document.addEventListener('mousedown', handleGlobalClick);
    return () => document.removeEventListener('mousedown', handleGlobalClick);
  }, []);

  // Idle Animation Loop
  useEffect(() => {
    if (!isInteracted) {
      const animY = animate(idleY, [0, 20, 0], {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      });
      const animRotate = animate(idleRotate, [5, -5, 5], {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      });
      return () => {
        animY.stop();
        animRotate.stop();
      };
    } else {
      idleY.set(0);
      idleRotate.set(0);
    }
  }, [isInteracted]);

  // 🔥 MODE PRO: Kalkulasi Matematika Akurat 🔥
  const lanyardPath = useTransform(
    [springX, springY, idleY, idleRotate],
    ([sx, sy, iy, ir]) => {
      const x = Number(sx);
      const y = Number(sy) + Number(iy);
      const rot = Number(ir);
      
      const radius = 238; 
      const rad = (rot * Math.PI) / 180;
      
      const tipX = 400 + x + (Math.sin(rad) * radius);
      const tipY = 496 + y - (Math.cos(rad) * radius);

      const cpX1 = 360 + x * 0.3;
      const cpY1 = (tipY - 100) * 0.5;
      
      const cpX2 = 440 + x * 0.3;
      const cpY2 = (tipY - 100) * 0.5;

      return `M 320 -100 
              Q ${cpX1} ${cpY1} ${tipX} ${tipY} 
              Q ${cpX2} ${cpY2} 480 -100`;
    }
  );

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setIsInteracted(true);
    
    dragStart.current = {
      x: e.clientX - dragX.get(),
      y: e.clientY - dragY.get(),
    };
    
    clickStart.current = {
      x: e.clientX,
      y: e.clientY,
      time: Date.now()
    };
    
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      dragX.set(e.clientX - dragStart.current.x);
      dragY.set(e.clientY - dragStart.current.y);
      
      const flipMultiplier = isFlipped ? -1 : 1;
      rotateX.set(-dragY.get() * 0.05);
      rotateY.set(dragX.get() * 0.05 * flipMultiplier);
      
    } else if (isHovered && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / rect.width - 0.5;
      const yPct = mouseY / rect.height - 0.5;
      const flipMultiplier = isFlipped ? -1 : 1;

      rotateX.set(yPct * -25);
      rotateY.set(xPct * 25 * flipMultiplier);

      setGlare({
        x: (mouseX / rect.width) * 100,
        y: (mouseY / rect.height) * 100,
        opacity: 0.6,
      });
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    
    const dx = e.clientX - clickStart.current.x;
    const dy = e.clientY - clickStart.current.y;
    const dt = Date.now() - clickStart.current.time;
    const distance = Math.hypot(dx, dy);

    if (distance < 5 && dt < 300) {
      setIsFlipped(!isFlipped);
    }

    dragX.set(0);
    dragY.set(0);
    
    if (!isHovered) {
      rotateX.set(0);
      rotateY.set(0);
      setGlare((prev) => ({ ...prev, opacity: 0 }));
    } else {
      rotateX.set(0);
      rotateY.set(0);
    }
    
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const techLogos = [
    "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/vercel-logo.png",
    "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/gemini-logo.png",
    "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/google-aistudio_1.png",
    "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/github-logo.png",
    "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/supabase-logo.png",
    "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/v0-dev.png",
    "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/claude.png",
    "https://storage.googleapis.com/ai-studio-bucket-353083286262-us-west1/Logo%20developer/google-cloud-logo.png"
  ];

  return (
    <div className="relative w-full h-[650px] flex flex-col items-center justify-center overflow-hidden font-sans select-none z-20">
      <div 
        className="relative flex items-center justify-center w-full h-full"
        style={{ perspective: '1200px' }}
      >
        <svg className="absolute left-1/2 top-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          <defs>
            <linearGradient id="lanyardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#064e3b" />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="10" stdDeviation="5" floodOpacity="0.3" />
            </filter>
          </defs>
          
          <motion.path
            d={lanyardPath}
            stroke="url(#lanyardGradient)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            filter="url(#shadow)"
          />
        </svg>

        <motion.div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onMouseEnter={() => { setIsHovered(true); setIsInteracted(true); }}
          onMouseLeave={() => {
            setIsHovered(false);
            if (!isDragging) {
              rotateX.set(0);
              rotateY.set(0);
              setGlare((prev) => ({ ...prev, opacity: 0 }));
            }
          }}
          style={{
            x: springX,
            y: useTransform([springY, idleY], ([sy, iy]) => Number(sy) + Number(iy)),
            rotate: idleRotate,
          }}
          className="relative z-10 cursor-grab active:cursor-grabbing touch-none flex flex-col items-center mt-24"
        >
          {/* 🔥 FIX 1: KLIP BESI - Dikecilin dan diposisikan agar pas, tidak kayak jepitan jemuran */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-12 bg-gradient-to-b from-gray-300 to-gray-500 rounded-sm shadow-md z-20 border border-gray-400 flex flex-col items-center justify-start pt-2">
            <div className="w-3.5 h-3.5 border-2 border-gray-600 rounded-full bg-gray-400/20 shadow-inner"></div>
            <div className="w-5 h-1.5 bg-gray-400 mt-auto border-t border-gray-500 rounded-b-sm mb-0.5"></div>
          </div>

          <motion.div
            ref={cardRef}
            className="relative w-80 h-[480px] group"
            style={{ transformStyle: 'preserve-3d', rotateX: springRotateX }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* FRONT FACE */}
            <motion.div 
              className="absolute inset-0 bg-emerald-500/10 backdrop-blur-2xl border border-emerald-500/20 rounded-2xl shadow-2xl overflow-hidden"
              style={{ backfaceVisibility: 'hidden', rotateY: useTransform(springRotateY, y => y) }}
            >
              <div 
                className="absolute inset-0 transition-opacity duration-300 mix-blend-overlay pointer-events-none"
                style={{
                  background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
                  opacity: glare.opacity,
                }}
              />
              
              <div 
                className="absolute inset-0 flex flex-col items-center px-6 pt-6 pb-8 pointer-events-none"
                style={{ transform: 'translateZ(50px)' }}
              >
                <div className="w-12 h-1.5 bg-slate-900/50 rounded-full mb-6 shadow-inner border border-white/5"></div>

                <div className="relative mb-5">
                  <motion.div 
                    animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="absolute -top-2 -right-3 z-30 p-2 bg-emerald-500 rounded-lg shadow-lg text-white"
                  >
                    <TrendingUp className="w-4 h-4" />
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, 8, 0], rotate: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -bottom-2 -left-3 z-30 p-2 bg-cyan-500 rounded-lg shadow-lg text-white"
                  >
                    <Cpu className="w-4 h-4" />
                  </motion.div>

                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 to-lime-500 p-1.5 shadow-lg">
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden relative">
                      <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-emerald-500 text-slate-900 p-2 rounded-full border-2 border-slate-900 shadow-xl">
                    <Terminal className="w-5 h-5" />
                  </div>
                </div>

                <h2 className="text-3xl font-black text-white tracking-tight mb-2">{name}</h2>
                <div className="flex flex-row items-center justify-center gap-2 mb-2 w-full px-2">
                  <div className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full whitespace-nowrap">
                    <p className="text-emerald-400 font-bold text-[9px] tracking-widest uppercase">{role}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap">
                    <MapPin className="w-3 h-3 text-emerald-500" />
                    <p className="text-slate-400 font-bold text-[9px] tracking-widest uppercase">Tabanan, Bali</p>
                  </div>
                </div>

                {/* 🔥 FIX: LOGO TOOLS - Neon Box & 8 Logos */}
                <div className="w-full px-1 mb-2 mt-4">
                  <p className="text-emerald-400 font-bold text-[8px] tracking-[0.2em] uppercase mb-2 text-center opacity-70">Development Tools</p>
                  <div className="w-full border border-emerald-500/50 rounded-xl p-2.5 bg-emerald-500/5 shadow-[0_0_15px_rgba(16,185,129,0.2)] backdrop-blur-sm flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
                    {techLogos.map((logo, i) => (
                      <img 
                        key={i} 
                        src={logo} 
                        alt="tech" 
                        className="h-5 w-auto object-contain [filter:brightness(0)_invert(1)] opacity-80 hover:opacity-100 transition-opacity" 
                      />
                    ))}
                  </div>
                </div>

                <div className="flex gap-5 mt-auto pointer-events-auto">
                  <a href="https://instagram.com/dharmayanggg" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all group">
                    <Instagram className="w-4 h-4 text-white transition-colors" />
                  </a>
                  <a href="https://threads.net/@dharmayanggg" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all group">
                    <AtSign className="w-4 h-4 text-white transition-colors" />
                  </a>
                  <a href="https://wa.me/6282342344558" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all group">
                    <MessageCircle className="w-4 h-4 text-white transition-colors" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* BACK FACE */}
            <motion.div 
              className="absolute inset-0 bg-[#021b1a] border border-emerald-900/30 rounded-2xl shadow-2xl overflow-hidden"
              style={{ backfaceVisibility: 'hidden', rotateY: useTransform(springRotateY, y => y + 180) }}
            >
              {/* 🔥 FIX 3: STRIP HITAM - Dinaikkan jadi mt-8 agar pas di bawah klip, tidak kejauhan */}
              <div className="w-full h-10 bg-black/60 mt-8 shadow-inner flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <p className="text-emerald-400 font-black font-mono text-[10px] tracking-[0.2em] uppercase">Open to Work</p>
                </div>
              </div>

              <div 
                className="flex flex-col items-center justify-center p-6 mt-1 pointer-events-none"
                style={{ transform: 'translateZ(30px)' }}
              >
                <div className="bg-emerald-50/90 p-3 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.2)] mb-4 flex flex-col items-center">
                  {/* 🔥 FIX 4: QR CODE - Dikecilin jadi w-24 h-24 biar gak bikin sumpek teks di bawahnya */}
                  <QrCode className="w-24 h-24 text-slate-900" />
                  <div className="mt-2 text-center">
                    <p className="text-slate-900 font-black font-mono text-[8px] tracking-widest uppercase">Made by dharmayang</p>
                    <p className="text-slate-700 font-bold font-mono text-[7px] tracking-tight">dharmaaa.my.id</p>
                    <p className="text-slate-700 font-bold font-mono text-[7px] tracking-tight">082342344558</p>
                  </div>
                </div>

                <div className="bg-emerald-950/50 p-3 rounded-lg border border-emerald-500/20 text-center">
                  <p className="text-emerald-200/70 text-[9px] leading-relaxed">
                    This badge is the property of <strong className="text-emerald-400">DHARTECH</strong>. 
                    If found, please return to the nearest security desk.
                  </p>
                </div>
                
                <p className="mt-6 text-emerald-600 font-mono text-[8px] tracking-widest uppercase">ID: DHAR-2026-001</p>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
