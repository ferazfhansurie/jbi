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
            Mengenai JBI
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Memacu pertumbuhan Johor melalui penyelesaian maritim dan logistik bersepadu.
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
              <h2 className="text-3xl font-bold text-[#002B5C] mb-6">Siapa Kami</h2>
              <div className="w-20 h-1 bg-[#D00C27] mb-8"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Johor Bahru Integrated Sdn. Bhd. (JBI) adalah sebuah syarikat infrastruktur strategik, logistik, maritim, dan fasilitasi ekonomi yang berpangkalan di Johor, Malaysia.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kami memberi tumpuan kepada pengukuhan daya saing serantau Johor melalui penyelesaian bersepadu merentas operasi terminal feri, logistik pantai, aktiviti kapal-ke-kapal, perdagangan barter, zon ekonomi khas, dan infrastruktur digital/telekomunikasi.
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
              <h3 className="text-2xl font-bold text-[#002B5C] mb-4">Misi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Untuk mempercepatkan pertumbuhan ekonomi Johor melalui penyelesaian infrastruktur maritim, logistik, dan digital yang inovatif yang mencipta nilai jangka panjang untuk negeri dan pihak berkepentingan.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-[#D00C27]"
            >
              <div className="w-16 h-16 bg-[#D00C27]/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-[#D00C27]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#002B5C] mb-4">Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Untuk menjadi syarikat maritim dan logistik bersepadu terkemuka yang berasaskan Johor yang memberikan impak mampan merentas lautan, sempadan, dan komuniti.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values (Reused the sleek design) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#002B5C] mb-4">Nilai Teras Kami</h2>
            <div className="w-20 h-1 bg-[#D00C27] mx-auto"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Integriti', 
                desc: 'Komitmen teguh terhadap ketelusan dan kelakuan beretika.',
                icon: Shield
              },
              { 
                title: 'Perkongsian', 
                desc: 'Membina pakatan yang berkekalan dengan pihak berkepentingan.',
                icon: Handshake
              },
              { 
                title: 'Impak', 
                desc: 'Mencipta nilai ekonomi yang boleh diukur dan mampan.',
                icon: Target
              },
              { 
                title: 'Inovasi', 
                desc: 'Mempelopori teknologi pintar dan model yang bersedia untuk masa depan.',
                icon: Lightbulb
              },
              { 
                title: 'Akauntabiliti', 
                desc: 'Mengambil pemilikan penuh terhadap hasil dan pematuhan kami.',
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
