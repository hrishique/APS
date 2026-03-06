'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        heading: "Premium Brand Presence",
        subheading: "Self-Adhesive Labels",
        description: "Versatile, high-performance labels with superior adhesion for food, pharma, and luxury goods.",
        images: [
            "/images/products/self-adhesive-dashmesh.png",
            "/images/products/self-adhesive.png",
            "/images/products/smart-labels-dashmesh.png"
        ],
        accentColor: "#f43f5e",
        bgGradient: "from-rose-500/10 to-transparent"
    },
    {
        id: 2,
        heading: "Ultra-Strong Bundle Protection",
        subheading: "LDPE Shrink Film",
        description: "Industrial-grade durability ensures secure transit and high-clarity branding for multipack collation.",
        images: [
            "/images/products/ldpe-shrink-dashmesh.png",
            "/images/products/shrink-wraps-dashmesh.png",
            "/images/products/laminated-films-dashmesh.png"
        ],
        accentColor: "#8b5cf6",
        bgGradient: "from-violet-500/10 to-transparent"
    },
    {
        id: 3,
        heading: "360° Branding & Shelf Impact",
        subheading: "High-Definition Shrink Sleeves",
        description: "Maximize your product visibility with full-body shrink sleeves that conform to any container shape.",
        images: [
            "/images/products/shrink-sleeve.png",
            "/images/products/shrink-sleeve-dashmesh.png",
            "/images/products/ldpe-shrink-dashmesh.png"
        ],
        accentColor: "#f97316", // Orange
        bgGradient: "from-orange-500/10 to-transparent"
    },
    {
        id: 4,
        heading: "Intelligent Security & Trackability",
        subheading: "Smart RFID/NFC Labels",
        description: "Protect your brand and streamline supply chains with advanced smart labeling technology.",
        images: [
            "/images/products/smart-labels.png",
            "/images/products/smart-labels-dashmesh.png",
            "/images/products/self-adhesive.png"
        ],
        accentColor: "#3b82f6",
        bgGradient: "from-blue-500/10 to-transparent"
    },
    {
        id: 5,
        heading: "Superior Barrier Protection",
        subheading: "Advanced Flexible Laminates",
        description: "Engineered multi-layer films ensuring prolonged freshness and robust protection for products.",
        images: [
            "/images/products/laminated-films.png",
            "/images/products/flexible-pouches.png",
            "/images/products/laminated-films-dashmesh.png"
        ],
        accentColor: "#10b981",
        bgGradient: "from-emerald-500/10 to-transparent"
    },
    {
        id: 6,
        heading: "Seamless Integration & Durability",
        subheading: "In-Mould Labels (IML)",
        description: "Labels fused directly into the packaging for a permanent, premium look without secondary application.",
        images: [
            "/images/products/in-mold.png",
            "/images/products/in-mold-dashmesh.png",
            "/images/products/lid-laminates-dashmesh.jpeg"
        ],
        accentColor: "#f59e0b",
        bgGradient: "from-amber-500/10 to-transparent"
    }
];

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Auto-advance slides
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000); // Increased to 5s for better readability
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section
            ref={containerRef}
            className="relative overflow-hidden pt-36 pb-20 min-h-[90vh] flex items-center"
            style={{ backgroundColor: 'var(--background)' }}
        >
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none transition-colors duration-1000 ease-in-out">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className={`absolute inset-0 bg-gradient-to-br ${slides[current].bgGradient} opacity-30`}
                    />
                </AnimatePresence>

                {/* Decorative Blobs */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="w-full max-w-[1400px] mx-auto relative z-10 px-6 sm:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                {/* Text Content Slider */}
                <div className="flex-1 w-full text-left max-w-2xl relative min-h-[400px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="space-y-6"
                        >
                            {/* Animated Tagline Badge */}
                            <div
                                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm"
                                style={{
                                    borderColor: `${slides[current].accentColor}30`,
                                    backgroundColor: `${slides[current].accentColor}10`,
                                    color: slides[current].accentColor
                                }}
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: slides[current].accentColor }}></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: slides[current].accentColor }}></span>
                                </span>
                                {slides[current].subheading}
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black leading-[1.05] tracking-tight text-primary">
                                {slides[current].heading.split(' ').map((word, i, arr) => (
                                    <span key={i} className={i >= arr.length - 2 ? 'inline-block' : ''} style={{ color: i >= arr.length - 2 ? slides[current].accentColor : 'inherit' }}>
                                        {word}{' '}
                                    </span>
                                ))}
                            </h1>

                            <p className="text-lg md:text-xl leading-relaxed font-medium text-muted max-w-lg">
                                {slides[current].description}
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <button
                                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-4 rounded-xl font-bold text-white shadow-xl flex items-center gap-3 transition-all hover:scale-105 active:scale-95"
                                    style={{
                                        background: `linear-gradient(135deg, ${slides[current].accentColor}, var(--primary))`
                                    }}
                                >
                                    Explore Solutions
                                    <ArrowRight size={18} />
                                </button>

                                <button
                                    onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-4 rounded-xl font-bold border flex items-center gap-3 transition-all hover:bg-gray-50 text-primary border-primary/20"
                                >
                                    View Catalog
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Circular Image Slider */}
                <div className="flex-1 w-full flex justify-center lg:justify-end relative">
                    <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px]">

                        {/* Rotating Decorative Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-20px] rounded-full border border-dashed border-primary/10 pointer-events-none"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-60px] rounded-full border border-primary/5 pointer-events-none"
                        />

                        {/* Image Container */}
                        {/* Image Composition Container */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                className="absolute inset-0 z-10"
                            >
                                {slides[current].images.map((img, idx) => (
                                    <motion.div
                                        key={`${current}-${idx}`}
                                        initial={{ opacity: 0, scale: 0.8, y: 50, rotate: idx % 2 === 0 ? -10 : 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0, rotate: idx === 0 ? 0 : (idx === 1 ? 15 : -15) }}
                                        exit={{ opacity: 0, scale: 0.8, y: -50 }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        className={`absolute overflow-hidden shadow-2xl bg-white border-4 border-white
                                            ${idx === 0 ? 'w-full h-full z-10 rounded-full inset-0' : ''}
                                            ${idx === 1 ? 'w-32 h-32 sm:w-48 sm:h-48 z-20 rounded-[2rem] -bottom-4 -right-4 md:-bottom-10 md:-right-10' : ''}
                                            ${idx === 2 ? 'w-24 h-24 sm:w-40 sm:h-40 z-0 rounded-[2rem] -top-4 -left-4 md:-top-10 md:-left-10 opacity-80' : ''}
                                        `}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${slides[current].subheading} ${idx + 1}`}
                                            fill
                                            priority={idx === 0}
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {/* Floating Label Badge */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, y: 20, x: 20 }}
                                animate={{ opacity: 1, y: 0, x: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.3 }}
                                className="absolute top-4 right-0 md:top-12 md:-right-8 z-20 bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-xl border border-white/50 max-w-[200px]"
                            >
                                <div className="text-[10px] font-black uppercase tracking-widest text-muted mb-1">Featured Technology</div>
                                <div className="text-lg font-black leading-tight text-primary">{slides[current].subheading}</div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Slider Navigation Controls */}
                <div className="absolute bottom-10 left-12 md:left-1/2 md:-translate-x-1/2 flex items-center gap-4 z-30">
                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-full bg-white border border-gray-100 shadow-lg hover:bg-gray-50 transition-all text-primary"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <div className="flex gap-2">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === current ? 'w-8' : 'w-2 bg-gray-300'}`}
                                style={{ backgroundColor: idx === current ? slides[current].accentColor : undefined }}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-full bg-white border border-gray-100 shadow-lg hover:bg-gray-50 transition-all text-primary"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

            </div>
        </section>
    );
}
