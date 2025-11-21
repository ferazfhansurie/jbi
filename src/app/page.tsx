'use client';

import { motion } from 'framer-motion';
import { 
  Ship, 
  TrendingUp, 
  Package, 
  Warehouse, 
  Wifi, 
  Handshake,
  ChevronRight,
  Target,
  Eye,
  Phone,
  Shield,
  Lightbulb,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  const services = [
    {
      title: 'Operasi Maritim & Terminal Feri',
      description: 'Membangun dan mengendalikan penyelesaian terminal feri di seluruh Johor, menghubungkan ke Singapura, Batam, dan laluan serantau.',
      icon: Ship,
      image: '/pillar1.png',
    },
    {
      title: 'Perdagangan Barter & Logistik Pantai',
      description: 'Memimpin inisiatif logistik pantai dan perdagangan barter untuk menyokong rantaian bekalan serantau.',
      icon: TrendingUp,
      image: '/pillar2.png',
    },
    {
      title: 'Operasi Ship-to-Ship (STS)',
      description: 'Operasi pemindahan petroleum, kimia, LNG/LPG dalam perairan Johor dengan pematuhan peraturan penuh.',
      icon: Package,
      image: '/pillar3.png',
    },
    {
      title: 'Logistik & Pergudangan',
      description: 'Pembangunan ekosistem gudang berikat, logistik rentas sempadan, dan perkhidmatan rantaian bekalan industri.',
      icon: Warehouse,
      image: '/pillar4.png',
    },
    {
      title: 'Telekomunikasi & Infrastruktur Digital',
      description: 'Penyediaan kemudahan rangkaian (NFP), kejuruteraan frekuensi radio, dan penerapan infrastruktur gentian optik.',
      icon: Wifi,
      image: '/pillar5.png',
    },
    {
      title: 'Fasilitasi Pelaburan',
      description: 'Khidmat nasihat strategik dan penyelarasan agensi kerajaan untuk pelabur domestik dan asing.',
      icon: Handshake,
      image: '/pillar6.png',
    },
  ];

  const partners = [
    'Unit Pengurusan Perbadanan Setiausaha Kerajaan Johor (SSI)',
    'Permodalan Darul Ta\'zim Sdn. Bhd (PDTH)',
    'Perbadanan Pengangkutan Awam Johor (PAJ)',
    'AWH Group Sdn Bhd',
  ];

  const stats = [
    { value: '2025', label: 'Edisi' },
    { value: '6+', label: 'Teras Perniagaan' },
    { value: '100%', label: 'Berasaskan Johor' },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <LoadingScreen />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden w-full">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#002B5C]/70 z-10"></div>
          {/* Hero Video Background */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
            poster="/hero-poster.jpg"
          >
            <source src="/hero.mp4" type="video/mp4" />
            {/* Fallback if video fails or isn't present */}
            <div className="w-full h-full bg-[url('/hero-bg.jpg')] bg-cover bg-center"></div>
          </video>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }} // Delay after loading screen
          >
        

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4 max-w-full break-words">
              Mengintegrasikan Lautan, Perdagangan <br className="hidden sm:block"/>
              <span className="text-[#D00C27]">& Teknologi</span> untuk Masa Depan Johor
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto font-light px-4">
              Syarikat maritim dan logistik bersepadu terkemuka berpangkalan di Johor yang memberikan impak mampan.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
              <Link href="/services" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-[#D00C27] text-white px-6 sm:px-8 py-4 rounded-lg font-bold hover:bg-[#b00a20] transition-colors flex items-center justify-center space-x-2 min-w-[180px] text-sm sm:text-base uppercase tracking-wide shadow-lg"
                >
                  <span>Terokai Perkhidmatan</span>
                  <ChevronRight size={20} />
                </motion.button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#002B5C] transition-all flex items-center justify-center space-x-2 min-w-[180px] text-sm sm:text-base uppercase tracking-wide"
                >
                  <Phone size={20} />
                  <span>Hubungi Kami</span>
                </motion.button>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6 max-w-2xl mx-auto border-t border-white/20 pt-6 px-3 sm:px-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center min-w-0">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 truncate">{stat.value}</div>
                  <div className="text-[9px] sm:text-[10px] md:text-xs text-gray-300 uppercase tracking-wider break-words leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Overview Section */}
      <section className="py-20 bg-white relative overflow-hidden w-full">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-10"
          >
            <source src="/corporate.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 px-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002B5C] mb-4 sm:mb-6">Gambaran Korporat</h2>
            <div className="w-16 sm:w-20 h-1 bg-[#D00C27] mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Johor Bahru Integrated Sdn. Bhd. (JBI) adalah sebuah syarikat infrastruktur strategik, logistik, maritim, dan fasilitasi ekonomi yang berpangkalan di Johor, Malaysia. JBI memberi tumpuan kepada pengukuhan daya saing serantau Johor melalui penyelesaian bersepadu merentas operasi terminal feri, logistik pantai, aktiviti kapal-ke-kapal, perdagangan barter, zon ekonomi khas, dan infrastruktur digital/telekomunikasi.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mt-4">
              Dengan penglibatan kukuh merentas agensi kerajaan, pelabur, dan rakan industri, JBI menyokong visi Johor untuk menjadi hab maritim dan logistik terkemuka dalam Zon Ekonomi Khas Johor-Singapura (JS-SEZ) dan koridor ekonomi selatan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden w-full">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#002B5C] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D00C27] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 px-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002B5C] mb-4">Hala Tuju Kami</h2>
            <div className="w-16 sm:w-20 h-1 bg-[#D00C27] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#002B5C] to-[#003d7a]"></div>
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNjAgMTAgTSAxMCAwIEwgMTAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
              
              <div className="relative z-10 p-6 sm:p-8 lg:p-10 text-white">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Target className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold ml-3 sm:ml-4">Misi</h3>
                </div>
                <p className="text-base sm:text-lg leading-relaxed text-gray-100">
                  Untuk mempercepatkan pertumbuhan ekonomi Johor melalui penyelesaian infrastruktur maritim, logistik, dan digital yang inovatif yang mencipta nilai jangka panjang untuk negeri dan pihak berkepentingan.
                </p>
                <div className="mt-6 h-1 w-20 bg-white/30 group-hover:w-40 transition-all duration-500"></div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D00C27] to-[#a00a20]"></div>
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNjAgMTAgTSAxMCAwIEwgMTAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
              
              <div className="relative z-10 p-6 sm:p-8 lg:p-10 text-white">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Eye className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold ml-3 sm:ml-4">Visi</h3>
                </div>
                <p className="text-base sm:text-lg leading-relaxed text-gray-100">
                  Untuk menjadi syarikat maritim dan logistik bersepadu terkemuka yang berasaskan Johor yang memberikan impak mampan merentas lautan, sempadan, dan komuniti.
                </p>
                <div className="mt-6 h-1 w-20 bg-white/30 group-hover:w-40 transition-all duration-500"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            {/* Title Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[#D00C27] font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 block">Budaya Kami</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002B5C] mb-4 sm:mb-6 leading-tight">
                  Prinsip Yang <br/>
                  <span className="text-[#D00C27]">Mendefinisikan Kami</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Kami mematuhi piawaian tertinggi dalam kelakuan dan prestasi, memastikan setiap projek yang kami laksanakan memberikan nilai yang berkekalan untuk Johor.
                </p>
                <div className="hidden lg:block w-20 h-1.5 bg-[#002B5C] rounded-full"></div>
              </motion.div>
            </div>

            {/* Values Grid */}
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { 
                    title: 'Integriti', 
                    desc: 'Komitmen teguh terhadap ketelusan dan kelakuan beretika dalam semua urusan.',
                    icon: Shield
                  },
                  { 
                    title: 'Perkongsian', 
                    desc: 'Membina pakatan yang berkekalan dan saling menguntungkan dengan pihak berkepentingan dan komuniti.',
                    icon: Handshake
                  },
                  { 
                    title: 'Impak', 
                    desc: 'Memberi tumpuan kepada penyelesaian yang mencipta nilai ekonomi yang boleh diukur dan mampan.',
                    icon: Target
                  },
                  { 
                    title: 'Inovasi', 
                    desc: 'Mempelopori teknologi pintar dan model infrastruktur yang bersedia untuk masa depan.',
                    icon: Lightbulb
                  },
                  { 
                    title: 'Akauntabiliti', 
                    desc: 'Mengambil pemilikan penuh terhadap hasil, pematuhan, dan kualiti pelaksanaan kami.',
                    icon: CheckCircle
                  },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group p-6 sm:p-8 bg-gray-50 hover:bg-[#002B5C] transition-all duration-300 rounded-xl border border-gray-100 hover:border-[#002B5C] hover:shadow-xl"
                  >
                    <div className="mb-4 sm:mb-6 flex justify-between items-start">
                      <div className="p-2.5 sm:p-3 bg-white rounded-lg shadow-sm group-hover:bg-white/10 transition-colors">
                        <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#D00C27] group-hover:text-white transition-colors" strokeWidth={2} />
                      </div>
                      <span className="text-3xl sm:text-4xl font-bold text-gray-200 group-hover:text-white/10 transition-colors">0{index + 1}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#002B5C] group-hover:text-white mb-2 sm:mb-3 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors leading-relaxed">
                      {value.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Pillars */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#002B5C] text-white relative overflow-hidden w-full">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
           <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#D00C27] blur-3xl"></div>
           <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="text-[#D00C27] font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 block">Kepakaran Kami</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Teras Perniagaan</h2>
            <div className="w-20 sm:w-24 h-1.5 bg-[#D00C27] mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-light px-4">
              Menyampaikan penyelesaian bersepadu strategik merentas enam teras utama untuk memacu enjin ekonomi Johor.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-[#D00C27]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D00C27]/10 hover:-translate-y-1"
              >
                {/* Image Placeholder Area */}
                <div className="h-40 sm:h-48 bg-gray-800 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                  {/* Pillar Image */}
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C] to-transparent opacity-80"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#D00C27] flex items-center justify-center shadow-lg z-10 group-hover:rotate-6 transition-transform duration-300">
                    <service.icon className="text-white" size={24} />
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-8 sm:pt-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-[#D00C27] transition-colors">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm">{service.description}</p>
                  
                  <Link href="/services" className="flex items-center text-[#D00C27] font-semibold text-sm uppercase tracking-wide group/btn cursor-pointer">
                    <span>Ketahui Lebih Lanjut</span>
                    <ChevronRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002B5C] mb-4">Rakan Strategik</h2>
            <div className="w-16 sm:w-20 h-1 bg-[#D00C27] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Bekerjasama dengan badan kerajaan utama dan pemimpin industri untuk memacu pertumbuhan yang mampan.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto items-center">
            {[
              { name: 'PDTH', logo: '/partner1.png' },
              { name: 'Johor Government', logo: '/partner2.png' },
              { name: 'PAJ', logo: '/partner3.png' },
              { name: 'AWH Group', logo: '/partner4.png' },
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-white p-4 sm:p-6 lg:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center h-32 sm:h-36 lg:h-40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="relative z-10 w-full h-full object-contain max-h-16 sm:max-h-20 lg:max-h-24 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 sm:mt-16 text-center">
             <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide sm:tracking-widest px-4">Dipercayai oleh organisasi terkemuka di Johor</p>
          </div>
        </div>
      </section>

      {/* Future Direction */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#002B5C] text-white relative overflow-hidden w-full">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IndoaXRlIi8+PC9zdmc+')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#D00C27] font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 block">Visi 2030</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                Merancang Laluan untuk <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Masa Depan Maritim Johor</span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                {[
                  'Menjadikan Johor sebagai alternatif maritim terkemuka kepada Singapura.',
                  'Meningkatkan perkapalan pantai dan hubungan Indonesia',
                  'Menambat aktiviti kapal-ke-kapal dan bunkering di perairan Johor.',
                  'Menyokong pengembangan rantaian bekalan industri Johor.',
                  'Menjadi rakan infrastruktur digital utama untuk aset maritim & SEZ.',
                ].map((direction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3 sm:space-x-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#D00C27] flex items-center justify-center">
                        <ChevronRight size={14} className="text-white" />
                      </div>
                    </div>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">{direction}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 sm:mt-10">
                <button className="w-full sm:w-auto bg-white text-[#002B5C] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base">
                  <span>Lihat Peta Jalan Strategik</span>
                  <TrendingUp size={20} />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src="/corporate.png" 
                  alt="Future Direction" 
                  className="w-full h-auto object-cover min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C] via-transparent to-transparent opacity-60"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-8 w-full">
                  <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-gray-300 uppercase">Target Growth</span>
                      <span className="text-[#D00C27] font-bold text-sm sm:text-base">+150%</span>
                    </div>
                    <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#D00C27] h-full w-3/4"></div>
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-400 mt-2">Projected maritime traffic increase by 2030</p>
                  </div>
                </div>

                {/* AI Prompt Hint */}
                <div className="absolute top-4 right-4 bg-black/70 text-[10px] text-gray-300 p-2 rounded max-w-[200px] backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-bold text-[#D00C27]">AI Image Prompt:</span> Futuristic concept art of Johor port city with advanced green ships, drones, and smart infrastructure, sunset, photorealistic
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D00C27] rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose JBI */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002B5C] mb-4">Mengapa Pilih JBI?</h2>
            <div className="w-16 sm:w-20 h-1 bg-[#D00C27] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Rakan terpercaya anda untuk penyelesaian maritim dan logistik bersepadu di Johor.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Lokasi Strategik',
                desc: 'Akses utama kepada laluan perkapalan utama dan berdekatan dengan Singapura.',
                icon: Target
              },
              {
                title: 'Penyelesaian Bersepadu',
                desc: 'Perkhidmatan menyeluruh dari operasi maritim hingga infrastruktur digital.',
                icon: Package
              },
              {
                title: 'Sokongan Kerajaan',
                desc: 'Perkongsian kukuh dengan agensi negeri Johor dan badan pengawalseliaan.',
                icon: Handshake
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-t-4 border-[#D00C27] group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#D00C27] transition-colors duration-300">
                  <item.icon className="text-[#002B5C] group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#002B5C] mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#D00C27] w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">Mari Bekerjasama</h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Hubungi kami untuk membincangkan bagaimana JBI boleh menyokong projek dan inisiatif anda
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <a href="tel:078277729" className="text-white text-lg sm:text-xl font-bold hover:text-gray-200 transition-colors">
                07-8277729
              </a>
              <span className="text-white/50 hidden sm:inline">|</span>
              <a href="mailto:info@jbi.com.my" className="text-white text-lg sm:text-xl font-bold hover:text-gray-200 transition-colors break-all">
                info@jbi.com.my
              </a>
            </div>
            <p className="text-white/80 mt-4 sm:mt-6 text-xs sm:text-sm">Edisi 2025</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
