import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-800 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1746862932918-99cdc53157b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjBpbnRlcmlvciUyMGVtcHR5fGVufDF8fHx8MTc3MzA4MDQxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Our Classroom"
              className="w-full h-[450px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[#2F8AA3] uppercase tracking-wide text-sm font-semibold">About Us</p>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Excellence in German Language Education
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              With over 15 years of experience in teaching German language, we have established 
              ourselves as one of the leading German language institutes. Our dedicated team of 
              native German speakers and certified instructors use innovative teaching methods 
              to ensure effective learning.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              We follow international standards and our courses are designed to prepare students 
              for official German language certifications. Our state-of-the-art facilities and 
              interactive learning environment create the perfect atmosphere for language acquisition.
            </p>
            <button className="bg-[#2F8AA3] text-white px-8 py-3 rounded-md hover:bg-[#F2C230] hover:text-[#1F2A30] transition-colors duration-200 font-semibold shadow-md hover:shadow-lg">
              Know More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}