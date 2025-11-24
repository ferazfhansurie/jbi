'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Shield, Handshake, Lightbulb, CheckCircle } from 'lucide-react';

export default function About() {
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
            About JBI
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Driving Johor's growth through integrated maritime and logistics solutions.
          </motion.p>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#002B5C] mb-6">Who We Are</h2>
              <div className="w-20 h-1 bg-[#D00C27] mb-8"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Johor Bahru Integrated Sdn. Bhd. (JBI) is a strategic infrastructure, logistics, maritime, and economic facilitation company based in Johor, Malaysia.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We focus on strengthening Johor's regional competitiveness through integrated solutions across ferry terminal operations, coastal logistics, ship-to-ship activities, barter trade, special economic zones, and digital/telecommunications infrastructure.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Corporate Image Placeholder</span>
              </div>
              {/* <img src="/corporate-building.jpg" alt="JBI HQ" className="w-full h-full object-cover" /> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-[#002B5C]"
            >
              <div className="w-16 h-16 bg-[#002B5C]/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-[#002B5C]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#002B5C] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To accelerate Johor's economic growth through innovative maritime, logistics, and digital infrastructure solutions that create long-term value for the state and stakeholders.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-[#D00C27]"
            >
              <div className="w-16 h-16 bg-[#D00C27]/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-[#D00C27]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#002B5C] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading Johor-based integrated maritime and logistics company delivering sustainable impact across oceans, borders, and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values (Reused the sleek design) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#002B5C] mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-[#D00C27] mx-auto"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Integrity', 
                desc: 'Strong commitment to transparency and ethical conduct.',
                icon: Shield
              },
              { 
                title: 'Partnership', 
                desc: 'Building sustainable alliances with stakeholders.',
                icon: Handshake
              },
              { 
                title: 'Impact', 
                desc: 'Creating measurable and sustainable economic value.',
                icon: Target
              },
              { 
                title: 'Innovation', 
                desc: 'Pioneering smart technologies and future-ready models.',
                icon: Lightbulb
              },
              { 
                title: 'Accountability', 
                desc: 'Taking full ownership of our results and compliance.',
                icon: CheckCircle
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <value.icon className="w-10 h-10 text-[#D00C27] mb-6" />
                <h3 className="text-xl font-bold text-[#002B5C] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
