'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function ServiceCard({ title, description, icon: Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={cn(
        "bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#D00C27]",
        "hover:shadow-2xl transition-all duration-300"
      )}
    >
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#002B5C]">
        <Icon className="text-white" size={32} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-[#002B5C]">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
