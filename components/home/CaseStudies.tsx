'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export interface CaseStudy {
    id: string;
    title: string;
    client: string;
    metric: string;
    description: string;
    image?: string;
}

interface CaseStudiesProps {
    caseStudies: CaseStudy[];
}

export default function CaseStudies({ caseStudies }: CaseStudiesProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <section id="case-studies" className="py-32 px-6 sm:px-8 lg:px-12 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-accent uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Proven Experience</span>
                    <h2 className="text-5xl md:text-6xl font-black mb-8" style={{ color: 'var(--primary)' }}>
                        Case <span style={{ color: 'var(--accent)' }}>Studies</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-accent mx-auto mb-8 rounded-full"></div>
                    <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted)' }}>
                        Real-world results from our specialized packaging and labelling solutions.
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-6">
                            {caseStudies.map((study, index) => (
                                <motion.div
                                    key={study.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
                                >
                                    <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all h-full border border-gray-100/50 group">
                                        <div className="h-64 bg-slate-100 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                            {study.image ? (
                                                <>
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                                                    <Image
                                                        src={study.image}
                                                        alt={study.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                    <div className="absolute bottom-6 left-6 z-20">
                                                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest text-primary shadow-sm border border-white/50">
                                                            {study.client}
                                                        </span>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="text-primary text-9xl font-black opacity-[0.03] absolute -bottom-10 -right-10 leading-none">{study.client[0]}</span>
                                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5"></div>
                                                    <motion.div
                                                        whileHover={{ scale: 1.1 }}
                                                        className="w-24 h-24 rounded-2xl bg-white shadow-xl flex items-center justify-center z-10 border border-white"
                                                    >
                                                        <span className="text-primary text-4xl font-black">{study.client[0]}</span>
                                                    </motion.div>
                                                </>
                                            )}
                                        </div>
                                        <div className="p-10 space-y-6">
                                            <div>
                                                {!study.image && (
                                                    <p className="text-xs uppercase tracking-widest font-black mb-2" style={{ color: 'var(--accent)' }}>
                                                        {study.client}
                                                    </p>
                                                )}
                                                <h3 className="text-2xl font-black leading-tight" style={{ color: 'var(--primary)' }}>
                                                    {study.title}
                                                </h3>
                                            </div>
                                            <div className="py-6 px-8 rounded-3xl group-hover:bg-accent group-hover:text-primary transition-all duration-300" style={{ backgroundColor: '#F8FAFC' }}>
                                                <p className="text-4xl font-black mb-1 text-primary">
                                                    {study.metric}
                                                </p>
                                                <p className="text-xs uppercase tracking-widest opacity-70 text-muted group-hover:text-primary/70">Performance Gain</p>
                                            </div>
                                            <p className="text-base leading-relaxed font-medium" style={{ color: 'var(--muted)' }}>
                                                {study.description}
                                            </p>

                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={scrollPrev}
                        disabled={!canScrollPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-transform"
                        style={{ color: 'var(--primary)' }}
                        aria-label="Previous case study"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={scrollNext}
                        disabled={!canScrollNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-transform"
                        style={{ color: 'var(--primary)' }}
                        aria-label="Next case study"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}
