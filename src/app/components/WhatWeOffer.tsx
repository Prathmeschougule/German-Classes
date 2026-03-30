import { BookOpen, Award } from 'lucide-react';
import { motion } from 'motion/react';

const courses = [
  {
    level: 'A1 Level',
    description: 'Beginner course for those starting their German language journey',
    duration: '8 weeks',
    color: 'bg-[#2F8AA3] bg-opacity-10 border-[#2F8AA3]',
  },
  {
    level: 'A2 Level',
    description: 'Elementary level for basic everyday communication',
    duration: '8 weeks',
    color: 'bg-[#F2C230] bg-opacity-10 border-[#F2C230]',
  },
  {
    level: 'B1 Level',
    description: 'Intermediate level for independent language use',
    duration: '10 weeks',
    color: 'bg-[#2F8AA3] bg-opacity-10 border-[#2F8AA3]',
  },
  {
    level: 'B2 Level',
    description: 'Upper intermediate for complex language tasks',
    duration: '12 weeks',
    color: 'bg-[#F2C230] bg-opacity-10 border-[#F2C230]',
  },
  {
    level: 'German Exam Preparation',
    description: 'Specialized courses for Goethe and TestDaF exams',
    duration: 'Flexible',
    color: 'bg-[#2F8AA3] bg-opacity-10 border-[#2F8AA3]',
  },
  {
    level: 'Spoken German',
    description: 'Focus on conversational skills and pronunciation',
    duration: '6 weeks',
    color: 'bg-[#F2C230] bg-opacity-10 border-[#F2C230]',
  },
];

export function WhatWeOffer() {
  return (
    <section id="courses" className="bg-white dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#2F8AA3] uppercase tracking-wide text-sm font-semibold mb-2">Our Courses</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What We Offer</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Structured courses designed for every proficiency level
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div 
              key={index} 
              className={`${course.color} dark:bg-gray-700 dark:border-gray-600 border-2 rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {index < 4 ? (
                  <BookOpen className="w-8 h-8 text-[#2F8AA3] mr-3" />
                ) : (
                  <Award className="w-8 h-8 text-[#2F8AA3] mr-3" />
                )}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{course.level}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Duration: {course.duration}</p>
              <button className="mt-6 w-full bg-[#2F8AA3] text-white py-2 rounded-md hover:bg-[#F2C230] hover:text-[#1F2A30] transition-colors font-semibold">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}