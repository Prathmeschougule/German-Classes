import { GraduationCap, Globe, Clock, Users, Monitor, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: GraduationCap,
    title: 'Experienced Teachers',
    description: 'Native German speakers with certified teaching credentials',
  },
  {
    icon: Globe,
    title: 'International Curriculum',
    description: 'Follow globally recognized CEFR standards',
  },
  {
    icon: Clock,
    title: 'Flexible Timings',
    description: 'Weekend and weekday batches to suit your schedule',
  },
  {
    icon: Users,
    title: 'Small Batches',
    description: 'Limited students per batch for personalized attention',
  },
  {
    icon: Monitor,
    title: 'Online + Offline Classes',
    description: 'Choose your preferred mode of learning',
  },
  {
    icon: BookOpen,
    title: 'Exam Preparation',
    description: 'Comprehensive preparation for Goethe and TestDaF',
  },
];

export function WhatWeProvide() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#2F8AA3] uppercase tracking-wide text-sm font-semibold mb-2">Our Features</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What We Provide</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Comprehensive German language education with modern facilities and expert guidance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-b-4 border-transparent hover:border-[#2F8AA3]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-[#2F8AA3]/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-[#2F8AA3]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}