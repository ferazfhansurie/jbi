'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Laman Utama' },
    { href: '/about', label: 'Mengenai Kami' },
    { href: '/services', label: 'Perkhidmatan' },
    { href: '/contact', label: 'Hubungi Kami' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        isScrolled
          ? 'bg-[#002B5C] shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 sm:h-20 w-full">
          {/* Brand/Logo Text */}
          <Link href="/" className="flex items-center space-x-2 group flex-shrink-0">
       
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#D00C27] transition-colors duration-200 font-medium text-xs lg:text-sm uppercase tracking-wide relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D00C27] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <div className="flex items-center space-x-3 lg:space-x-4 pl-3 lg:pl-4 border-l border-white/20">
              <a href="tel:+60782277729" className="flex items-center space-x-2 text-white hover:text-[#D00C27] transition-colors">
                <Phone size={14} className="lg:w-4 lg:h-4" />
                <span className="font-semibold text-xs lg:text-sm">07-8277729</span>
              </a>
           
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors touch-manipulation active:scale-95 flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#002B5C] border-t border-white/10"
          >
            <div className="px-4 py-4 sm:py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white hover:bg-white/10 hover:text-[#D00C27] transition-all duration-200 py-3 px-4 font-medium rounded-lg text-base touch-manipulation active:scale-98"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-white/10">
                <a href="tel:+60782277729" className="flex items-center space-x-3 text-white hover:bg-white/10 py-3 px-4 rounded-lg transition-all touch-manipulation active:scale-98">
                  <Phone size={20} />
                  <span className="font-semibold text-base">07-8277729</span>
                </a>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full mt-3 bg-[#D00C27] hover:bg-[#b00a20] active:bg-[#900818] text-white px-6 py-3.5 rounded-lg font-bold text-base uppercase tracking-wider transition-colors touch-manipulation active:scale-98 shadow-lg">
                    Dapatkan Sebut Harga
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
