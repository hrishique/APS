'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Package, ChevronRight } from 'lucide-react';

export interface Product {
    id: string;
    name: string;
    description: string;
    specs: string[];
    image?: string;
    tag?: string;
}

export interface Category {
    id: string;
    name: string;
    products: Product[];
}

interface ProductsProps {
    products: Category[];
}

export default function Products({ products }: ProductsProps) {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>(products[0]?.id || '');

    const currentCategory = products.find(c => c.id === activeCategory) || products[0];

    return (
        <section id="products" className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#fff' }}>
            {/* Background pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(var(--primary) 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

            <div className="w-full max-w-[1280px] mx-auto relative z-10 px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-16 gap-6"
                >
                    <div className="max-w-2xl">
                        <span className="text-accent uppercase tracking-widest font-black text-sm mb-4 block">Our Solutions</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6" style={{ color: 'var(--primary)' }}>
                            World-Class <span style={{ color: 'var(--accent)' }}>Packaging.</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-xl mx-auto">
                            Comprehensive packaging solutions tailored to your industry needs.
                        </p>
                    </div>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12 overflow-x-auto pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:justify-center">
                    <div className="flex flex-nowrap md:flex-wrap gap-3 mx-auto">
                        {products.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap border ${activeCategory === category.id
                                    ? 'bg-primary text-white border-primary shadow-lg scale-105'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-primary/30 hover:bg-gray-50'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
                    >
                        {currentCategory?.products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                whileHover={{ y: -8 }}
                                onClick={() => setSelectedProduct(product)}
                                className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all cursor-pointer group flex flex-col h-full items-center text-center relative overflow-hidden"
                            >
                                <div className="mb-6 relative w-full flex justify-center aspect-square items-center overflow-hidden rounded-2xl bg-gray-50">
                                    {product.image ? (
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm"
                                            style={{ backgroundColor: 'rgba(var(--accent-rgb), 0.08)' }}
                                        >
                                            <Package size={32} style={{ color: 'var(--accent)' }} />
                                        </div>
                                    )}
                                </div>

                                {product.tag && (
                                    <div className="absolute top-4 right-4 bg-accent text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md z-10">
                                        {product.tag}
                                    </div>
                                )}

                                <h3 className="text-lg md:text-xl font-black mb-3 group-hover:text-accent transition-colors" style={{ color: 'var(--primary)' }}>
                                    {product.name}
                                </h3>

                                <p className="text-sm font-medium mb-6 leading-relaxed flex-grow text-gray-500 line-clamp-3">
                                    {product.description}
                                </p>

                                <div className="flex items-center justify-center gap-2 mt-auto pt-4 border-t border-gray-50 w-full">
                                    <span className="text-xs font-bold uppercase tracking-wider text-accent group-hover:mr-2 transition-all">Details</span>
                                    <ChevronRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Industrial Trust Banner */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-24 p-8 md:p-12 rounded-[2.5rem] bg-primary text-white overflow-hidden relative"
                >
                    <div className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }} />

                    <div className="relative z-10 flex flex-col items-center justify-center text-center gap-8">
                        <div className="max-w-xl">
                            <h3 className="text-2xl md:text-3xl font-black mb-4">Innovation & Advanced Approaches</h3>
                            <p className="text-white/70 text-base md:text-lg">We provide one-stop packaging solutions from concept designs to product rollout, ensuring your brand stands out on every shelf.</p>
                        </div>
                        <button
                            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="whitespace-nowrap px-8 py-4 bg-accent rounded-xl font-black text-white hover:scale-105 active:scale-95 transition-all shadow-xl text-sm md:text-base"
                        >
                            Get Quote Now
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Product Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProduct(null)}
                        className="fixed inset-0 bg-primary/40 backdrop-blur-md z-[60] flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-[2rem] max-w-5xl w-full p-0 relative shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
                        >
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 backdrop-blur hover:bg-white transition-colors shadow-sm"
                                aria-label="Close modal"
                            >
                                <X size={20} style={{ color: 'var(--primary)' }} />
                            </button>

                            {/* Image Section - Left/Top */}
                            <div className="w-full md:w-2/5 h-64 md:h-auto bg-gray-50 relative overflow-hidden">
                                {selectedProduct.image ? (
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                        <Package size={64} className="text-gray-300" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none md:hidden" />
                            </div>

                            {/* Content Section - Right/Bottom */}
                            <div className="w-full md:w-3/5 p-6 md:p-10 overflow-y-auto max-h-[50vh] md:max-h-[85vh]">
                                <div className="space-y-6 md:space-y-8">
                                    <div className="space-y-3 md:space-y-4">
                                        <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-black text-accent uppercase tracking-widest">Product Catalog</div>
                                        <h3 className="text-3xl md:text-3xl lg:text-4xl font-black" style={{ color: 'var(--primary)' }}>
                                            {selectedProduct.name}
                                        </h3>
                                        <p className="text-base md:text-lg font-medium leading-relaxed" style={{ color: 'var(--muted)' }}>
                                            {selectedProduct.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-black uppercase tracking-widest mb-4 md:mb-6" style={{ color: 'var(--primary)' }}>
                                            Technical Specifications
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                            {selectedProduct.specs.map((spec, idx) => (
                                                <div key={idx} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-gray-50 border border-gray-100">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-accent min-w-[6px]" />
                                                    <span className="text-sm font-bold text-gray-600">{spec}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => {
                                            setSelectedProduct(null);
                                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="w-full py-4 rounded-2xl font-black text-white text-base transition-all hover:shadow-xl active:scale-[0.98]"
                                        style={{
                                            background: 'linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)'
                                        }}
                                    >
                                        Request Bulk Quote
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
