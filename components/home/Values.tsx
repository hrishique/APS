'use client';

import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, Lightbulb } from 'lucide-react';

const values = [
    {
        icon: Award,
        title: 'Quality Service',
        description: 'ISO-certified processes ensuring consistent excellence in every product we deliver.',
    },
    {
        icon: TrendingUp,
        title: 'Intrinsic Growth',
        description: 'Continuous improvement and innovation driving sustainable business expansion.',
    },
    {
        icon: Users,
        title: 'Synergy',
        description: 'Collaborative partnerships with clients to deliver tailored packaging solutions.',
    },
    {
        icon: Lightbulb,
        title: 'R&D Innovation',
        description: 'Cutting-edge research in sustainable materials and advanced printing technologies.',
    },
];

export default function Values() {
    return (
        <section className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden bg-white z-10">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10 skew-x-12 transform translate-x-1/2"></div>

            <div className="w-full max-w-[1280px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-accent uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Core Principles</span>
                    <h2 className="text-5xl md:text-6xl font-black mb-8" style={{ color: 'var(--primary)' }}>
                        Why Choose <span style={{ color: 'var(--accent)' }}>APS</span>?
                    </h2>
                    <div className="w-24 h-1.5 bg-accent mx-auto mb-8 rounded-full"></div>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted)' }}>
                        Four pillars of excellence that define our commitment to industrial innovation and client success.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -15, transition: { duration: 0.3 } }}
                                className="group p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all bg-white border border-gray-50 flex flex-col items-center text-center h-full"
                            >
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform shadow-inner"
                                    style={{ backgroundColor: 'rgba(245, 158, 11, 0.08)' }}
                                >
                                    <Icon size={32} style={{ color: 'var(--accent)' }} />
                                </div>
                                <h3 className="text-xl font-black mb-4" style={{ color: 'var(--primary)' }}>
                                    {value.title}
                                </h3>
                                <p className="leading-relaxed font-medium text-sm flex-grow" style={{ color: 'var(--muted)' }}>
                                    {value.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
