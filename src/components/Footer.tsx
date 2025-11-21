'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#002B5C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">JBI</h3>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4 opacity-90">
              Johor Bahru Integrated Sdn. Bhd.
            </p>
            <p className="text-xs sm:text-sm opacity-75 leading-relaxed">
              Syarikat infrastruktur strategik, logistik, maritim, dan fasilitasi ekonomi di Johor, Malaysia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#D00C27]">Pautan Pantas</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-xs sm:text-sm hover:text-[#D00C27] transition-colors block py-1">
                  Laman Utama
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-xs sm:text-sm hover:text-[#D00C27] transition-colors block py-1">
                  Mengenai Kami
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-xs sm:text-sm hover:text-[#D00C27] transition-colors block py-1">
                  Perkhidmatan
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs sm:text-sm hover:text-[#D00C27] transition-colors block py-1">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#D00C27]">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-[#D00C27] sm:w-[18px] sm:h-[18px]" />
                <span className="text-xs sm:text-sm leading-relaxed">
                  Suite 31-03, Level 31, Menara JLand,<br />
                  Johor Bahru City Centre,<br />
                  80888 Johor Bahru, Johor
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="flex-shrink-0 text-[#D00C27] sm:w-[18px] sm:h-[18px]" />
                <a href="tel:078277729" className="text-xs sm:text-sm hover:text-[#D00C27] transition-colors">
                  07-8277729
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="flex-shrink-0 text-[#D00C27] sm:w-[18px] sm:h-[18px]" />
                <a href="mailto:info@jbi.com.my" className="text-xs sm:text-sm hover:text-[#D00C27] transition-colors break-all">
                  info@jbi.com.my
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm opacity-75 px-4">
            © {currentYear} Johor Bahru Integrated Sdn. Bhd. (1592452-W). Hak Cipta Terpelihara.
          </p>
        </div>
      </div>
    </footer>
  );
}
