import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const germanImages = [
  'https://images.unsplash.com/photo-1707416144692-cd2b1b6ac8dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXVzY2h3YW5zdGVpbiUyMGNhc3RsZSUyMEdlcm1hbnl8ZW58MXx8fHwxNzczMDgyNjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1640603799331-15e3d8b14ada?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcmFuZGVuYnVyZyUyMEdhdGUlMjBCZXJsaW58ZW58MXx8fHwxNzcyOTkxMTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1727691165307-69ac64d2ebd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHZXJtYW4lMjBwcmV0emVsJTIwZm9vZHxlbnwxfHx8fDE3NzMwODI2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1756638425687-64a8f76c9368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHZXJtYW4lMjBBbHBzJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MzA4MjYyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1761853320997-a37b66280f5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMEdlcm1hbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzMwODI2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1760822402889-1317a4eb43c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHZXJtYW4lMjBiZWVyJTIwZ2FyZGVuJTIwY3VsdHVyZXxlbnwxfHx8fDE3NzMwODI2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
];

const stats = [
  { number: '2000+', label: 'Students prepared' },
  { number: '10,000+', label: 'Conducted lessons' },
  { number: '7+ years', label: 'Teaching experience' },
  { number: '20+', label: 'Free materials' },
];

export function Hero() {
  // State for each image position in the grid
  const [imageIndices, setImageIndices] = useState([0, 1, 2, 3, 4, 5]);

  useEffect(() => {
    const intervals = imageIndices.map((_, position) => {
      return setInterval(() => {
        setImageIndices(prev => {
          const newIndices = [...prev];
          newIndices[position] = (newIndices[position] + 1) % germanImages.length;
          return newIndices;
        });
      }, 4000 + position * 700); // Slowed down: 4s to ~7.5s stagger per position
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  return (
    <>
      <section id="home" className="bg-white dark:bg-gray-900 pt-32 pb-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Small Label Badge */}
              <div className="inline-block">
                <span className="bg-[#2F8AA3]/10 dark:bg-[#2F8AA3]/20 text-[#2F8AA3] dark:text-[#F2C230] px-4 py-2 rounded-full text-sm font-medium border border-[#2F8AA3]/20">
                  German lessons for all levels
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Learn German confidently and effectively
              </h1>

              {/* Paragraph */}
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Master the German language with experienced teachers and practical materials. 
                Our personalized approach ensures you learn efficiently, whether you're preparing 
                for exams, work, or travel.
              </p>

              {/* CTA Button */}
              <motion.button 
                className="bg-[#2F8AA3] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-[#F2C230] hover:text-[#1F2A30] transition-all duration-300 hover:scale-105 hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign up for a lesson
              </motion.button>
            </motion.div>

            {/* Right Side - Masonry Image Grid */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="grid grid-cols-3 gap-4 h-[600px]">
                {/* Large Image - Top Left */}
                <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl shadow-lg">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={imageIndices[0]}
                      src={germanImages[imageIndices[0]]}
                      alt="German culture"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                </div>

                {/* Small Image - Top Right */}
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={imageIndices[1]}
                      src={germanImages[imageIndices[1]]}
                      alt="German landmark"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                </div>

                {/* Medium Image - Middle Right */}
                <div className="row-span-2 overflow-hidden rounded-2xl shadow-lg">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={imageIndices[2]}
                      src={germanImages[imageIndices[2]]}
                      alt="German tradition"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                </div>

                {/* Small Image - Bottom Left */}
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={imageIndices[3]}
                      src={germanImages[imageIndices[3]]}
                      alt="German landscape"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                </div>

                {/* Medium Image - Bottom Middle */}
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={imageIndices[4]}
                      src={germanImages[imageIndices[4]]}
                      alt="German architecture"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                </div>

                {/* Small Image - Bottom Right */}
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={imageIndices[5]}
                      src={germanImages[imageIndices[5]]}
                      alt="German food"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#1F2A30] py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 hover:border-[#F2C230]/50 p-6 rounded-xl text-center transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-4xl font-bold text-[#F2C230] mb-2">
                  {stat.number}
                </h3>
                <p className="text-white/80 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}