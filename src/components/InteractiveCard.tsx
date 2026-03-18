import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';
import { 
  Code2, Github, Linkedin, Cpu, Terminal, QrCode, 
  Instagram, AtSign, MessageCircle, TrendingUp, 
  MapPin, Lightbulb
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
      const x = Number(sx) || 0;
      const y = (Number(sy) || 0) + (Number(iy) || 0);
      const rot = Number(ir) || 0;
      const rad = (rot * Math.PI) / 180;
      
      // Card center is at (400, 496) in SVG space
      // distanceToHole is the distance from card center to the clip attachment point
      const distanceToHole = 235; 
      const tipX = 400 + x + Math.sin(rad) * distanceToHole;
      const tipY = 496 + y - Math.cos(rad) * distanceToHole;

      // Two strands meeting at the clip - stiffer curve
      return `M 300 0 
              C 300 50, ${tipX - 10} ${tipY - 50}, ${tipX} ${tipY}
              M 500 0
              C 500 50, ${tipX + 10} ${tipY - 50}, ${tipX} ${tipY}`;
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
        <svg 
          viewBox="0 0 800 800"
          className="absolute left-1/2 top-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 overflow-visible"
        >
          <defs>
            <linearGradient id="lanyardGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#333333" />
              <stop offset="50%" stopColor="#111111" />
              <stop offset="100%" stopColor="#333333" />
            </linearGradient>
            <filter id="lanyardShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="15" stdDeviation="8" floodOpacity="0.4" />
            </filter>
          </defs>
          
          <motion.path
            d={lanyardPath}
            stroke="url(#lanyardGradient)"
            strokeWidth="22"
            fill="none"
            strokeLinecap="round"
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
          {/* 🔥 REFINED SIMPLE METAL CLIP */}
          <div className="absolute -top-[38px] left-1/2 -translate-x-1/2 w-[36px] h-[54px] flex flex-col items-center z-20 pointer-events-none">
            {/* Polished Swivel */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 border border-gray-400 shadow-md mb-[-14px] z-30 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gray-600/40"></div>
            </div>
            {/* Clean Body */}
            <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-300 rounded-md shadow-xl border border-gray-200 flex flex-col items-center pt-4">
              <div className="w-4 h-1 bg-gray-400/30 rounded-full mb-1"></div>
              <div className="w-1 h-1 rounded-full bg-gray-400/50"></div>
            </div>
          </div>

          <motion.div
            ref={cardRef}
            className="relative w-[280px] h-[420px] group"
            style={{ transformStyle: 'preserve-3d', rotateX: springRotateX }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* FRONT FACE - 70% Black Gradient Theme */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border border-white/10 rounded-xl shadow-2xl overflow-hidden"
              style={{ backfaceVisibility: 'hidden', rotateY: useTransform(springRotateY, y => y) }}
            >
              {/* Lightbulb Silhouette */}
              <div className="absolute -right-10 -bottom-10 opacity-[0.1] pointer-events-none rotate-[-45deg]">
                <Lightbulb className="w-64 h-64 text-white" />
              </div>

              <div 
                className="absolute inset-0 transition-opacity duration-300 mix-blend-overlay pointer-events-none"
                style={{
                  background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)`,
                  opacity: glare.opacity,
                }}
              />
              
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8 pointer-events-none scale-[0.85] md:scale-90"
                style={{ transform: 'translateZ(50px)' }}
              >
                <div className="w-10 h-1 bg-white/10 rounded-full mb-5 shadow-inner"></div>

                <div className="relative mb-5">
                  <motion.div 
                    animate={{ y: [0, -3, 0], rotate: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="absolute -top-1 -right-2 z-30 p-1 bg-white rounded-md shadow-lg text-black"
                  >
                    <TrendingUp className="w-3.5 h-3.5" />
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, 3, 0], rotate: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -bottom-1 -left-2 z-30 p-1 bg-gray-200 rounded-md shadow-lg text-black"
                  >
                    <Cpu className="w-3.5 h-3.5" />
                  </motion.div>

                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 p-1 shadow-lg">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden relative">
                      <img src={imageUrl} alt={name} className="w-full h-full object-cover transition-all duration-500" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-white text-black p-1.5 rounded-full border border-black shadow-xl">
                    <Terminal className="w-4 h-4" />
                  </div>
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">{name}</h2>
                <div className="flex flex-row items-center justify-center gap-1.5 mb-6 w-full px-2">
                  <div className="bg-white/20 backdrop-blur-md border border-white/20 px-2 py-1 rounded-full whitespace-nowrap flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-white animate-pulse shadow-[0_0_5px_rgba(255,255,255,0.4)]"></div>
                    <p className="text-white font-medium text-[8px] md:text-[10px] tracking-widest uppercase">{role}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md border border-white/20 px-2 py-1 rounded-full flex items-center gap-1 whitespace-nowrap">
                    <MapPin className="w-2.5 h-2.5 text-gray-300" />
                    <p className="text-white font-medium text-[8px] md:text-[10px] tracking-widest uppercase">Tabanan, Bali</p>
                  </div>
                </div>

                {/* General Skills Section */}
                <div className="flex flex-col items-center gap-1.5 mb-8 w-full">
                  <p className="text-[10px] md:text-xs font-black text-gray-400 tracking-[0.2em] mb-1.5 uppercase">GENERAL SKILL</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['Graphic Design', 'Web/Apps Development', 'Social Media Specialist'].map((skill) => (
                      <span key={skill} className="text-[11px] md:text-xs font-bold px-2.5 py-1.5 bg-white/20 backdrop-blur-md border border-white/20 rounded-sm text-white tracking-tighter uppercase">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mb-2 pointer-events-auto relative z-50">
                  <a href="https://instagram.com/dharmayanggg" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/30 hover:scale-110 transition-all group backdrop-blur-md">
                    <Instagram className="w-4 h-4 text-white transition-colors" />
                  </a>
                  <a href="https://threads.net/@dharmayanggg" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/30 hover:scale-110 transition-all group backdrop-blur-md">
                    <AtSign className="w-4 h-4 text-white transition-colors" />
                  </a>
                  <a href="https://wa.me/6282342344558" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/30 hover:scale-110 transition-all group backdrop-blur-md">
                    <MessageCircle className="w-4 h-4 text-white transition-colors" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* BACK FACE - Dark Theme */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 border border-white/10 rounded-xl shadow-2xl overflow-hidden"
              style={{ backfaceVisibility: 'hidden', rotateY: useTransform(springRotateY, y => y + 180) }}
            >
              {/* 🔥 FIX 3: STRIP HITAM - Vercel Dark Style */}
              <div className="w-full h-7 bg-white/5 mt-10 shadow-inner flex items-center justify-center border-y border-white/5">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                  <p className="text-white font-bold font-mono text-[9px] tracking-[0.2em] uppercase">Open to Work</p>
                </div>
              </div>

              <div 
                className="flex flex-col items-center justify-start p-6 mt-8 pointer-events-none h-full scale-[0.85] md:scale-90"
                style={{ transform: 'translateZ(30px)' }}
              >
                <div className="bg-white/5 backdrop-blur-md p-3 rounded-xl shadow-xl mb-3 flex flex-col items-center border border-white/10">
                  {/* Real QR Code for WhatsApp */}
                  <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/6282342344558" 
                      alt="WhatsApp QR" 
                      className="w-full h-full p-0.5"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-white font-bold font-mono text-[9px] md:text-[10px] tracking-widest uppercase">Made by dharmayang</p>
                  </div>
                </div>

                <div className="mt-auto mb-20 flex flex-col items-center w-full">
                  <div className="bg-white/5 p-2.5 rounded-lg border border-white/10 text-center backdrop-blur-md w-full max-w-[180px] shadow-lg">
                    <p className="text-gray-300 text-[9px] md:text-[10px] leading-relaxed font-medium">
                      This badge is the property of <strong className="text-white font-bold">DHARTECH</strong>. 
                      If found, please return to the nearest security desk.
                    </p>
                  </div>
                  
                  <p className="mt-2 text-gray-500 font-mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold">ID: DHAR-2026-001</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
