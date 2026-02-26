'use client';

import { Mail, Phone, MapPin } from 'lucide-react';



export default function Footer() {
    return (
        <footer className="relative py-6 overflow-hidden" style={{ backgroundColor: 'var(--primary)' }}>
            {/* Glassmorphic overlay */}
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-md z-0"></div>

            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mt-48 z-0"></div>

            <div className="w-full max-w-[1280px] mx-auto relative z-10 px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">

                    {/* Brand & Tagline */}
                    <div className="text-center md:text-left flex flex-row items-center gap-4">
                        <img
                            src="/images/logo.png"
                            alt="APS Logo"
                            className="h-20 w-auto object-contain grayscale brightness-200 contrast-200"
                        />
                        <p className="text-[10px] font-medium opacity-60 max-w-[120px] leading-tight text-left" style={{ color: 'var(--muted-light)' }}>
                            Precision Labeling & Packaging Solutions.
                        </p>
                    </div>

                    {/* Quick Access & Socials */}
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        {/* Contact Info Compact */}
                        <div className="flex gap-6 text-sm font-bold opacity-80" style={{ color: 'var(--muted-light)' }}>
                            <a href="mailto:Info@anjaneyaprintpacksolutions.com" className="hover:text-white transition-colors flex items-center gap-2">
                                <Mail size={14} className="text-accent" />
                                <span>Info@anjaneyaprintpacksolutions.com</span>
                            </a>
                            <a href="tel:+917496961627" className="hover:text-white transition-colors flex items-center gap-2 hidden sm:flex">
                                <Phone size={14} className="text-accent" />
                                <span>+91-7496961627/28/29/30</span>
                            </a>
                        </div>

                        {/* Social Icons Removed */}
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Legal */}
                <div className="mt-4 pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase font-black tracking-widest opacity-40" style={{ color: 'var(--muted-light)' }}>
                    <p>© {new Date().getFullYear()} Anjaneya Print Pack Solutions.</p>
                </div>
            </div>
        </footer>
    );
}
