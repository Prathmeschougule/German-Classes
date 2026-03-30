import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

const roadmapLevels = [
  {
    level: 'A1',
    title: 'Beginner German',
    description: 'Basic greetings, introductions, simple conversations.',
    color: 'bg-blue-500',
    position: 'left',
  },
  {
    level: 'A2',
    title: 'Elementary German',
    description: 'Daily communication, simple grammar, everyday situations.',
    color: 'bg-green-500',
    position: 'right',
  },
  {
    level: 'B1',
    title: 'Intermediate German',
    description: 'Conversation skills, writing emails, expressing opinions.',
    color: 'bg-yellow-500',
    position: 'left',
  },
  {
    level: 'B2',
    title: 'Upper Intermediate German',
    description: 'Fluent conversation, understanding news and discussions.',
    color: 'bg-orange-500',
    position: 'right',
  },
  {
    level: 'C1',
    title: 'Advanced German',
    description: 'Professional communication, academic language skills.',
    color: 'bg-purple-500',
    position: 'left',
  },
  {
    level: 'C2',
    title: 'Mastery Level',
    description: 'Near-native fluency and advanced comprehension.',
    color: 'bg-red-500',
    position: 'right',
  },
];

export function LearningRoadmap() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#2F8AA3] uppercase tracking-wide text-sm font-semibold mb-2">Your Path to Fluency</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            German Language Learning Roadmap
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Your journey from beginner to fluent German speaker.
          </p>
        </motion.div>

        {/* Roadmap Path */}
        <div className="relative">
          {/* Curved Path Line - SVG */}
          <motion.svg 
            className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-full hidden md:block"
            viewBox="0 0 100 1200"
            preserveAspectRatio="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <motion.path
              d="M 50 0 Q 30 100 50 200 Q 70 300 50 400 Q 30 500 50 600 Q 70 700 50 800 Q 30 900 50 1000 Q 70 1100 50 1200"
              stroke="#2F8AA3"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10 5"
              className="dark:stroke-[#F2C230]"
            />
          </motion.svg>

          {/* Mobile Straight Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#2F8AA3] dark:bg-[#F2C230] -translate-x-1/2 md:hidden"></div>

          {/* Roadmap Milestones */}
          <div className="relative space-y-24">
            {roadmapLevels.map((level, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  level.position === 'left' 
                    ? 'md:flex-row flex-col' 
                    : 'md:flex-row-reverse flex-col'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${level.position === 'left' ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} text-center mb-4 md:mb-0`}>
                  <motion.div 
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#2F8AA3] dark:border-[#F2C230]"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {level.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {level.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Badge */}
                <div className="relative z-10 flex items-center justify-center w-full md:w-2/12">
                  <motion.div 
                    className={`${level.color} w-20 h-20 rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 200 
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    <span className="text-white font-bold text-xl">
                      {level.level}
                    </span>
                  </motion.div>
                </div>

                {/* Empty space for alignment */}
                <div className="w-full md:w-5/12 hidden md:block"></div>
              </motion.div>
            ))}
          </div>

          {/* End of Journey Icon */}
          <motion.div 
            className="relative flex flex-col items-center justify-center mt-16"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-[#2F8AA3] to-[#F2C230] rounded-full flex items-center justify-center shadow-2xl">
              <GraduationCap className="w-12 h-12 text-white" />
            </div>
            <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-200">
              Fluent German Speaker
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}