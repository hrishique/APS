'use client';

import { motion } from 'framer-motion';
import {
    Utensils,
    Pill,
    Milk,
    PaintBucket,
    Factory,
    Sparkles,
    ArrowUpRight
} from 'lucide-react';
import Image from 'next/image';

const markets = [
    {
        name: 'Food & Beverage',
        icon: Utensils,
        challenge: 'Freshness & Shelf Life',
        solution: 'High-barrier films & laminates'
    },
    {
        name: 'Pharmaceutical',
        icon: Pill,
        challenge: 'Safety & Compliance',
        solution: 'Tamper-evident, sterilized packs'
    },
    {
        name: 'Dairy',
        icon: Milk,
        challenge: 'Cold Chain Integrity',
        solution: 'Moisture-resistant flexible pouches'
    },
    {
        name: 'Paints & Coatings',
        icon: PaintBucket,
        challenge: 'Chemical Resistance',
        solution: 'Robust, leak-proof industrial packaging'
    },
    {
        name: 'Industrial',
        icon: Factory,
        challenge: 'Durability & Load',
        solution: 'Heavy-duty protection films'
    },
    {
        name: 'Personal Care',
        icon: Sparkles,
        challenge: 'Aesthetics & Shelf Appeal',
        solution: 'Premium holographic & metallic finishes'
    },
];

export interface Client {
    name: string;
    logo?: string;
}

interface MarketsClientsProps {
    clients: Client[];
}

export default function MarketsClients({ clients }: MarketsClientsProps) {
    return (
        <section id="markets" className="py-24 px-6 sm:px-8 lg:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Markets */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: 'var(--primary)' }}>
                        Markets We <span style={{ color: 'var(--accent)' }}>Serve</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted font-medium max-w-2xl mx-auto">
                        Trusted packaging solutions engineered for diverse industrial challenges.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
                    {markets.map((market, index) => (
                        <motion.div
                            key={market.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group p-8 rounded-[2rem] border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-primary/10 transition-all cursor-default relative overflow-hidden"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                                    <market.icon size={24} />
                                </div>
                                <ArrowUpRight className="text-gray-300 group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100" />
                            </div>

                            <h3 className="text-xl font-black mb-3 text-primary">{market.name}</h3>

                            <div className="space-y-1">
                                <p className="text-xs font-bold uppercase tracking-wider text-muted/80">Challenge: <span className="text-primary">{market.challenge}</span></p>
                                <p className="text-xs font-bold uppercase tracking-wider text-muted/80">Solution: <span className="text-accent">{market.solution}</span></p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Clients */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                    id="clients"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: 'var(--primary)' }}>
                        Trusted by <span style={{ color: 'var(--accent)' }}>Industry Leaders</span>
                    </h2>
                    <p className="text-lg text-muted font-medium mb-12">
                        Partnering with global brands to deliver excellence at scale.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center mb-8 px-4">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, filter: 'grayscale(0%)' }}
                            className="w-full max-w-[160px] aspect-[4/3] relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 flex items-center justify-center p-4 bg-white rounded-xl border border-transparent hover:border-gray-50 hover:shadow-lg"
                        >
                            {client.logo ? (
                                <Image
                                    src={client.logo}
                                    alt={`${client.name} logo`}
                                    width={120}
                                    height={80}
                                    className="object-contain w-full h-full mix-blend-multiply"
                                />
                            ) : (
                                <span className="text-md font-bold text-muted text-center leading-tight">
                                    {client.name}
                                </span>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-[10px] font-medium text-muted/50 uppercase tracking-widest">
                        Logos shown for representation of served brands and partnerships.
                    </p>
                </div>
            </div>
        </section>
    );
}
