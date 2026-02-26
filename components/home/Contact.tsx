'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [formStatus, setFormStatus] = useState('');
    const [newsletterStatus, setNewsletterStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct WhatsApp Message with Form Data
        const whatsappNumber = '917496961628';
        const message = `*New Business Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Details:* ${formData.message}`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');

        // Reset Form and Show Success Message
        setFormData({ name: '', email: '', message: '' });
        setFormStatus('Redirecting you to WhatsApp...');
    };

    const handleNewsletter = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newsletterEmail.includes('@')) {
            setNewsletterStatus('Please enter a valid email');
            return;
        }
        setNewsletterStatus('Successfully subscribed!');
        setNewsletterEmail('');
    };

    return (
        <section id="contact" className="pt-16 md:pt-24 pb-8 md:pb-12 relative overflow-hidden" style={{ backgroundColor: '#fff' }}>
            {/* Background branding */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none overflow-hidden">
                <div className="text-[25rem] font-black leading-none uppercase tracking-tighter whitespace-nowrap">CONNECT</div>
            </div>

            <div className="w-full max-w-[1280px] mx-auto relative z-10" style={{ paddingLeft: 'clamp(20px, 5vw, 80px)', paddingRight: 'clamp(20px, 5vw, 80px)' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-24 gap-8"
                >
                    <div className="max-w-2xl">
                        <span className="text-accent uppercase tracking-widest font-black text-sm mb-4 block">Get In Touch</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black" style={{ color: 'var(--primary)' }}>
                            Contact & <span style={{ color: 'var(--accent)' }}>Consultation.</span>
                        </h2>
                    </div>
                </motion.div>

                <div className="flex flex-col items-center gap-16">
                    {/* Contact Info Hub */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                        <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <MapPin size={32} className="text-accent" />
                            </div>
                            <h4 className="text-xl font-black mb-2 text-primary">Headquarters</h4>
                            <p className="text-sm font-bold text-muted leading-relaxed">
                                Anjaneya Print Pack Solutions<br />
                                Phase 2, Bangalore, KA 560099
                            </p>
                        </div>

                        <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Phone size={32} className="text-accent" />
                            </div>
                            <h4 className="text-xl font-black mb-2 text-primary">Call Us</h4>
                            <p className="text-sm font-bold text-muted">+91-7496961627/28/29/30</p>
                            <p className="text-xs font-black text-accent mt-2 uppercase tracking-widest">Mon - Sat: 9 AM - 7 PM</p>
                        </div>

                        {/* Quick Subscribe */}
                        <div className="p-10 rounded-[2.5rem] bg-primary text-white relative overflow-hidden flex flex-col items-center text-center">
                            <div className="absolute inset-0 opacity-10 pointer-events-none"
                                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                            <h4 className="text-xl font-black mb-4 relative z-10">Insights Newsletter</h4>
                            <form onSubmit={handleNewsletter} className="relative z-10 space-y-4 w-full">
                                <input
                                    type="email"
                                    value={newsletterEmail}
                                    onChange={(e) => setNewsletterEmail(e.target.value)}
                                    placeholder="Enter Email"
                                    required
                                    className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent text-center"
                                />
                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-xl bg-accent font-black text-white hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-2"
                                >
                                    Subscribe <Send size={18} />
                                </button>
                                {newsletterStatus && (
                                    <p className="text-[10px] font-black uppercase text-accent mt-2 tracking-widest">
                                        {newsletterStatus}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Inquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-4xl bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
                    >
                        <h3 className="text-2xl font-black mb-10 pb-6 border-b border-gray-50 flex items-center justify-center gap-4 text-primary">
                            <div className="h-1 w-12 bg-gray-50 rounded-full" /> Business Inquiry Form <div className="h-1 w-12 bg-gray-50 rounded-full" />
                        </h3>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center sm:text-left">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted pl-1">Full Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-accent transition-all font-bold text-left"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted pl-1">Email Address</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-accent transition-all font-bold text-left"
                                />
                            </div>
                            <div className="md:col-span-2 space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted pl-1">Inquiry Details</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows={5}
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-accent transition-all font-bold resize-none text-left"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <button
                                    type="submit"
                                    className="w-full py-6 rounded-2xl bg-primary text-white font-black text-xl hover:shadow-2xl active:scale-[0.98] transition-all flex items-center justify-center gap-4 group"
                                    style={{
                                        background: 'linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)'
                                    }}
                                >
                                    Send Inquiry <Send size={24} className="group-hover:translate-x-2' transition-transform" />
                                </button>
                                {formStatus && (
                                    <p className="text-sm font-black text-accent mt-6 text-center uppercase tracking-widest">
                                        {formStatus}
                                    </p>
                                )}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
