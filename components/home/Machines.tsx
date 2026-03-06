'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { X, Cog, ArrowRight, CheckCircle2, ShieldCheck, Microscope, ScanLine, Activity } from 'lucide-react';
import Image from 'next/image';

function CounterCard({ value, suffix = "", label, subtext }: { value: string, suffix?: string, label: string, subtext: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const rounded = useTransform(springValue, (latest) => Math.floor(latest));
    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
        if (inView) {
            motionValue.set(parseInt(value));
        }
    }, [inView, motionValue, value]);

    useEffect(() => {
        // Hydrate the visual value
        const unsubscribe = rounded.on("change", (latest) => {
            setDisplayValue(latest.toLocaleString());
        });
        return () => unsubscribe();
    }, [rounded]);

    return (
        <div ref={ref} className="h-full p-8 md:p-10 rounded-[2.5rem] border border-gray-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-shadow">
            <div className="text-5xl md:text-6xl font-black text-primary mb-3 tabular-nums tracking-tight">
                {displayValue}{suffix}
            </div>
            <div className="text-sm font-black text-accent uppercase tracking-widest mb-3">
                {label}
            </div>
            <p className="text-muted font-medium leading-relaxed">
                {subtext}
            </p>
        </div>
    );
}

export interface Machine {
    id: string;
    name: string;
    purpose?: string;
    capabilities?: string[];
    specs: string[];
    image?: string;
}

interface MachinesProps {
    machines: Machine[];
}

export default function Machines({ machines }: MachinesProps) {
    const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);

    return (
        <section id="infrastructure" className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Background branding */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none overflow-hidden">
                <div className="text-[25rem] font-black leading-none uppercase tracking-tighter whitespace-nowrap">INFRA</div>
            </div>

            <div className="w-full max-w-[1280px] mx-auto relative z-10" style={{ paddingLeft: 'clamp(20px, 5vw, 80px)', paddingRight: 'clamp(20px, 5vw, 80px)' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 flex flex-col items-center text-center"
                >
                    <span className="text-accent uppercase tracking-[0.3em] font-black text-sm mb-4 block">Manufacturing Excellence</span>
                    <h2 className="text-5xl md:text-6xl font-black mb-6" style={{ color: 'var(--primary)' }}>
                        Infrastructure <span style={{ color: 'var(--accent)' }}>& Capacity.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto font-medium" style={{ lineHeight: '1.6' }}>
                        Built for scale, engineered for reliability. Our future-ready facilities combine high-volume output with precision compliance.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-8 mb-24 items-stretch">
                    {/* R&D Spotlight Card - Spans 7 cols */}
                    <div className="lg:col-span-7 p-10 md:p-12 rounded-[2.5rem] bg-gray-50 border border-gray-100 relative overflow-hidden group flex flex-col justify-center text-left">
                        <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="bg-accent/10 border border-accent/20 text-accent px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest">
                                    R&D Spotlight
                                </span>
                            </div>

                            <h3 className="text-3xl font-black mb-6 text-primary">Advanced PP/PE Recycling</h3>

                            <p className="text-lg text-muted font-medium mb-8 leading-relaxed max-w-xl">
                                Pioneering the next generation of sustainable packaging with state-approved circular economy technologies. Our labs are fully equipped to bridge the gap between concept and commercial scale.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    <span className="text-primary font-bold">Circular Economy Compliant</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    <span className="text-primary font-bold">Commercial Deployment Ready</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Stats Column - Spans 5 cols */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <CounterCard
                            value="12000"
                            suffix="+"
                            label="Sq. Ft Facility"
                            subtext="Scalable infrastructure ready for enterprise surges."
                        />
                        <CounterCard
                            value="24"
                            suffix="/7"
                            label="Continuous Production"
                            subtext="Guaranteed uptime and rapid turnaround schedules."
                        />
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {machines.map((machine, index) => (
                        <motion.div
                            key={machine.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedMachine(machine)}
                            className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all cursor-pointer group"
                        >
                            <div className="h-56 bg-gray-50 rounded-2xl mb-8 flex items-center justify-center group-hover:bg-primary transition-all duration-500 overflow-hidden relative">
                                {machine.image ? (
                                    <div className="absolute inset-0 w-full h-full">
                                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 z-10 transition-colors" />
                                        <Image
                                            src={machine.image}
                                            alt={machine.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                        />
                                    </div>
                                ) : (
                                    <>
                                        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                                            style={{ backgroundImage: 'radial-gradient(var(--accent) 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                                        <Cog size={64} className="text-primary opacity-30 group-hover:text-white group-hover:opacity-40 group-hover:rotate-180 transition-all duration-1000 relative z-10" />
                                    </>
                                )}
                            </div>
                            <h3 className="text-xl font-black mb-4 transition-colors group-hover:text-accent" style={{ color: 'var(--primary)' }}>
                                {machine.name}
                            </h3>
                            <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                                <span className="text-xs font-black uppercase tracking-widest text-accent">Tech Specs</span>
                                <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all">
                                    <Cog size={14} className="group-hover:text-white transition-all" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedMachine && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMachine(null)}
                        className="fixed inset-0 bg-primary/40 backdrop-blur-md z-[60] flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-[2rem] max-w-2xl w-full p-10 relative shadow-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedMachine(null)}
                                className="absolute top-6 right-6 p-3 rounded-xl hover:bg-gray-100 transition-colors"
                                aria-label="Close lightbox"
                            >
                                <X size={24} style={{ color: 'var(--primary)' }} />
                            </button>

                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <span className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">Asset Details</span>
                                    <h3 className="text-3xl font-black" style={{ color: 'var(--primary)' }}>
                                        {selectedMachine.name}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-1 gap-3">
                                    {selectedMachine.specs.map((spec, idx) => (
                                        <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                                            <div className="w-2 h-2 rounded-full bg-accent" />
                                            <span className="text-sm font-bold text-muted">{spec}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
