'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#002B5C] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/corporate.png')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A subsidiary of Johor Bahru Integrated Sdn Bhd. Connect with our team to discuss how we can support your business.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-[#002B5C] mb-8">Get in Touch with Us</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-[#D00C27]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#D00C27]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Suite 31-03, Level 31, Menara JLand,<br />
                      Johor Bahru City Centre,<br />
                      80888 Johor Bahru, Johor
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-[#D00C27]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#D00C27]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-1">
                      <a href="tel:078277729" className="hover:text-[#D00C27] transition-colors">07-8277729</a>
                    </p>
                    <p className="text-sm text-gray-500">Monday-Friday from 9 AM to 6 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-[#D00C27]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#D00C27]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@jbi.com.my" className="hover:text-[#D00C27] transition-colors">info@jbi.com.my</a>
                    </p>
                    <p className="text-sm text-gray-500">We will respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Google Maps Placeholder
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-[#002B5C] mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D00C27] focus:border-transparent outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D00C27] focus:border-transparent outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D00C27] focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D00C27] focus:border-transparent outline-none transition-all bg-white">
                    <option>General Inquiry</option>
                    <option>Partnership Opportunities</option>
                    <option>Service Request</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D00C27] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#D00C27] text-white font-bold py-4 rounded-lg hover:bg-[#b00a20] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
