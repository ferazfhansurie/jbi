'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
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
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full',
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/98 backdrop-blur-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex items-center justify-between h-24 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <img 
              src="/jbi-logo.jpg" 
              alt="JBI - Johor Bahru Integrated Sdn. Bhd." 
              className="h-16 w-auto transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2 text-[#002B5C] hover:text-[#D00C27] transition-colors duration-300 font-normal text-[15px] relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-5 right-5 h-[2px] bg-[#D00C27] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-[#002B5C] text-white text-sm font-medium hover:bg-[#003d7a] transition-all duration-300 tracking-wide"
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#002B5C] p-2.5 hover:bg-gray-100 rounded-sm transition-colors touch-manipulation flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
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
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-[#002B5C] hover:text-[#D00C27] hover:bg-gray-50 transition-all duration-200 py-4 px-5 font-normal text-base rounded-sm touch-manipulation"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full bg-[#002B5C] hover:bg-[#003d7a] text-white px-6 py-4 text-base font-medium transition-colors touch-manipulation">
                    Get Started
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
