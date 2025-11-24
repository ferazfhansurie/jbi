'use client';

import { motion } from 'framer-motion';
import { Ship, TrendingUp, Package, Warehouse, Wifi, Handshake, ChevronRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Maritime Operations & Ferry Terminals',
      description: 'Developing and operating ferry terminal solutions across Johor, connecting to Singapore, Batam, and regional routes. We ensure smooth and efficient operations for passengers and cargo.',
      icon: Ship,
      features: ['Terminal Management', 'Ferry Services', 'Facility Maintenance']
    },
    {
      title: 'Barter Trade & Coastal Logistics',
      description: 'Leading coastal logistics and barter trade initiatives to support regional supply chains. Connecting small and medium ports to enhance market access.',
      icon: TrendingUp,
      features: ['Coastal Logistics', 'Barter Trade', 'Supply Chain']
    },
    {
      title: 'Ship-to-Ship (STS) Operations',
      description: 'Petroleum, chemical, LNG/LPG transfer operations in Johor waters with full regulatory compliance. Providing facilities and expertise for safe cargo transfers.',
      icon: Package,
      features: ['Petroleum Transfer', 'LNG/LPG Operations', 'Safety Compliance']
    },
    {
      title: 'Logistics & Warehousing',
      description: 'Development of bonded warehouse ecosystems, cross-border logistics, and industrial supply chain services. Providing secure storage space and modern inventory management systems.',
      icon: Warehouse,
      features: ['Bonded Warehouses', 'Cross-Border Logistics', 'Inventory Management']
    },
    {
      title: 'Telecommunications & Digital Infrastructure',
      description: 'Provision of network facilities (NFP), radio frequency engineering, and fiber optic infrastructure deployment. Ensuring fast and reliable digital connectivity.',
      icon: Wifi,
      features: ['NFP Infrastructure', 'RF Engineering', 'Fiber Optics']
    },
    {
      title: 'Investment Facilitation',
      description: 'Strategic advisory services and government agency coordination for domestic and foreign investors. Helping investors navigate Johor\'s business landscape with ease.',
      icon: Handshake,
      features: ['Strategic Advisory', 'Government Relations', 'Project Coordination']
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-[#002B5C] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/corporate.png')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4"
          >
            Comprehensive solutions driving efficiency and growth across maritime and logistics sectors.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 sm:gap-8 lg:gap-12 items-center`}
              >
                {/* Image/Visual Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                      <span className="text-gray-500 text-sm sm:text-base">Service Image Placeholder</span>
                    </div>
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C]/80 to-transparent opacity-60"></div>
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 bg-[#D00C27] rounded-xl flex items-center justify-center shadow-lg z-10">
                      <service.icon className="text-white" size={28} />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#002B5C] mb-4 sm:mb-6">{service.title}</h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#D00C27] rounded-full flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-8 sm:mt-10 text-[#D00C27] font-bold flex items-center hover:space-x-2 transition-all text-sm sm:text-base">
                    <span>Learn More</span>
                    <ChevronRight size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
