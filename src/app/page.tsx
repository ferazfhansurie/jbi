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
      title: 'Maritime Operations & Ferry Terminals',
      description: 'Developing and operating ferry terminal solutions across Johor, connecting to Singapore, Batam, and regional routes.',
      icon: Ship,
      image: '/pillar1.png',
    },
    {
      title: 'Barter Trade & Coastal Logistics',
      description: 'Leading coastal logistics and barter trade initiatives to support regional supply chains.',
      icon: TrendingUp,
      image: '/pillar2.png',
    },
    {
      title: 'Ship-to-Ship (STS) Operations',
      description: 'Petroleum, chemical, LNG/LPG transfer operations in Johor waters with full regulatory compliance.',
      icon: Package,
      image: '/pillar3.png',
    },
    {
      title: 'Logistics & Warehousing',
      description: 'Development of bonded warehouse ecosystems, cross-border logistics, and industrial supply chain services.',
      icon: Warehouse,
      image: '/pillar4.png',
    },
    {
      title: 'Telecommunications & Digital Infrastructure',
      description: 'Provision of network facilities (NFP), radio frequency engineering, and fiber optic infrastructure deployment.',
      icon: Wifi,
      image: '/pillar5.png',
    },
    {
      title: 'Investment Facilitation',
      description: 'Strategic advisory services and government agency coordination for domestic and foreign investors.',
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
    { value: '2025', label: 'Edition' },
    { value: '6+', label: 'Business Pillars' },
    { value: '100%', label: 'Johor Based' },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <LoadingScreen />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden w-full">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
            poster="/hero-poster.jpg"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          {/* Darker overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content - Centered */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.5 }}
              className="text-white text-sm sm:text-base font-light tracking-[0.3em] uppercase mb-6"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
            >
              Johor Bahru Integrated
            </motion.p>

            {/* Main Headline */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-[1.15] tracking-tight"
              style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}
            >
              INTEGRATING OCEANS,<br/>
              TRADE & TECHNOLOGY
            </h1>

            {/* Subheadline */}
            <p 
              className="text-lg sm:text-xl md:text-2xl text-white font-light mb-12 max-w-3xl mx-auto leading-relaxed"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
            >
              Creating Value and Enabling Sustainable Communities
            </p>

            {/* CTA Button */}
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-transparent border-2 border-white text-white text-base font-normal tracking-wider hover:bg-white hover:text-[#002B5C] transition-all duration-300 uppercase"
              >
                Discover More
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/60 text-xs tracking-widest"
          >
            ↓
          </motion.div>
        </motion.div>
      </section>

      {/* Corporate Overview Section */}
      <section className="py-32 lg:py-40 bg-white relative overflow-hidden w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-[#002B5C]/60 font-light tracking-[0.3em] text-xs uppercase mb-6 block">
              Who We Are
            </span>
            <h2 className="text-4xl lg:text-6xl font-light text-[#002B5C] mb-12 leading-tight">
              Building Johor's Maritime Future
            </h2>
            <div className="space-y-8 text-xl text-gray-600 font-light leading-relaxed">
              <p>
                Johor Bahru Integrated Sdn. Bhd. (JBI) is a strategic infrastructure, logistics, maritime, and economic facilitation company driving Johor's transformation into a premier regional hub.
              </p>
              <p>
                Through integrated solutions spanning ferry terminals, coastal logistics, ship-to-ship operations, and digital infrastructure, we strengthen Johor's competitive edge within the Johor-Singapore Special Economic Zone.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 lg:py-40 bg-gray-50 relative overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-[#002B5C]/60 font-light tracking-[0.3em] text-xs uppercase mb-6 block">
              Our Direction
            </span>
            <h2 className="text-4xl lg:text-6xl font-light text-[#002B5C] leading-tight">
              Mission & Vision
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-12 lg:p-16 group hover:shadow-xl transition-all duration-500"
            >
              <div className="mb-8">
                <Target className="text-[#002B5C] w-12 h-12" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-light text-[#002B5C] mb-6">
                Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                To accelerate Johor's economic growth through innovative maritime, logistics, and digital infrastructure solutions that create long-term value for the state and stakeholders.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-12 lg:p-16 group hover:shadow-xl transition-all duration-500"
            >
              <div className="mb-8">
                <Eye className="text-[#D00C27] w-12 h-12" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-light text-[#002B5C] mb-6">
                Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                To become the leading Johor-based integrated maritime and logistics company delivering sustainable impact across oceans, borders, and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 lg:py-40 bg-white w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-[#002B5C]/60 font-light tracking-[0.3em] text-xs uppercase mb-6 block">
              Our Values
            </span>
            <h2 className="text-4xl lg:text-6xl font-light text-[#002B5C] leading-tight max-w-3xl mx-auto">
              Principles That Define Us
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
                {[
                  { 
                    title: 'Integrity', 
                    desc: 'Strong commitment to transparency and ethical conduct in all dealings.',
                    icon: Shield
                  },
                  { 
                    title: 'Partnership', 
                    desc: 'Building lasting and mutually beneficial alliances with stakeholders and communities.',
                    icon: Handshake
                  },
                  { 
                    title: 'Impact', 
                    desc: 'Focusing on solutions that create measurable and sustainable economic value.',
                    icon: Target
                  },
                  { 
                    title: 'Innovation', 
                    desc: 'Pioneering smart technologies and future-ready infrastructure models.',
                    icon: Lightbulb
                  },
                  { 
                    title: 'Accountability', 
                    desc: 'Taking full ownership of our results, compliance, and execution quality.',
                    icon: CheckCircle
                  },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group p-10 bg-white border border-gray-100 hover:border-[#002B5C] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="mb-6">
                      <value.icon className="w-10 h-10 text-[#002B5C] group-hover:text-[#D00C27] transition-colors" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-light text-[#002B5C] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed font-light">
                      {value.desc}
                    </p>
                  </motion.div>
                ))}
          </div>
        </div>
      </section>

      {/* Business Pillars */}
      <section className="py-32 lg:py-40 bg-[#002B5C] text-white relative overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-white/60 font-light tracking-[0.3em] text-xs uppercase mb-6 block">
              Our Expertise
            </span>
            <h2 className="text-4xl lg:text-6xl font-light mb-6 leading-tight">
              Business Pillars
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Six integrated solutions driving Johor's maritime and logistics transformation
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white text-[#002B5C] overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="h-56 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C]/80 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute bottom-6 left-6 w-14 h-14 bg-white flex items-center justify-center">
                    <service.icon className="text-[#002B5C]" size={28} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-light mb-4 leading-tight">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 font-light">{service.description}</p>
                  
                  <Link href="/services" className="inline-flex items-center text-[#002B5C] font-normal text-sm uppercase tracking-wider group/btn hover:text-[#D00C27] transition-colors">
                    <span>Learn More</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002B5C] mb-4">Strategic Partners</h2>
            <div className="w-16 sm:w-20 h-1 bg-[#D00C27] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Collaborating with key government bodies and industry leaders to drive sustainable growth.
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
             <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide sm:tracking-widest px-4">Trusted by leading organizations in Johor</p>
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
              <span className="text-[#D00C27] font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 block">Vision 2030</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                Charting the Path for <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Johor's Maritime Future</span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                {[
                  'Position Johor as the premier maritime alternative to Singapore.',
                  'Enhance coastal shipping and Indonesian connectivity',
                  'Anchor ship-to-ship and bunkering activities in Johor waters.',
                  'Support expansion of Johor\'s industrial supply chains.',
                  'Become the key digital infrastructure partner for maritime assets & SEZ.',
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
                  <span>View Strategic Roadmap</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002B5C] mb-4">Why Choose JBI?</h2>
            <div className="w-16 sm:w-20 h-1 bg-[#D00C27] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Your trusted partner for integrated maritime and logistics solutions in Johor.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Strategic Location',
                desc: 'Prime access to major shipping routes and proximity to Singapore.',
                icon: Target
              },
              {
                title: 'Integrated Solutions',
                desc: 'Comprehensive services from maritime operations to digital infrastructure.',
                icon: Package
              },
              {
                title: 'Government Support',
                desc: 'Strong partnerships with Johor state agencies and regulatory bodies.',
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">Let's Work Together</h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Contact us to discuss how JBI can support your projects and initiatives
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
            <p className="text-white/80 mt-4 sm:mt-6 text-xs sm:text-sm">Edition 2025</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
