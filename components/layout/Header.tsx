'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Markets', href: '#markets' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-md' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-20' : 'h-24'}`}>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center pl-2 md:pl-4"
          >
            <div className="flex flex-col">
              <img
                src="/images/logo.png"
                alt="APS Logo"
                className="h-24 md:h-28 lg:h-36 w-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-bold tracking-tight transition-all hover:text-accent relative group whitespace-nowrap"
                style={{ color: 'var(--primary)' }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div className="hidden md:flex items-center gap-6">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => scrollToSection('#contact')}
              className="px-14 py-3.5 rounded-full font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.5)] bg-gradient-to-br from-accent to-primary"
            >
              Get a Quote
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl transition-all hover:bg-gray-100/50"
            style={{ color: 'var(--primary)' }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 bg-white z-[60] flex flex-col"
          >
            <div className="flex items-center justify-between h-24 px-6 border-b">
              <div className="flex flex-col">
                <img
                  src="/images/logo.png"
                  alt="APS Logo"
                  className="h-28 w-auto object-contain"
                />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-gray-50"
              >
                <X size={28} style={{ color: 'var(--primary)' }} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col items-start justify-center px-10 space-y-10">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-4xl font-black transition-colors hover:text-accent"
                  style={{ color: 'var(--primary)' }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <div className="p-10 border-t">
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full py-6 rounded-2xl font-black text-white text-xl shadow-xl"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
