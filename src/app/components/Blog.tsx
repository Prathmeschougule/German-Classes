import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const blogPosts = [
  {
    image: 'https://images.unsplash.com/photo-1746862932918-99cdc53157b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjBpbnRlcmlvciUyMGVtcHR5fGVufDF8fHx8MTc3MzA4MDQxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Tips for Learning German Efficiently',
    description: 'Discover proven strategies and techniques to accelerate your German language learning journey.',
    date: 'March 5, 2026',
  },
  {
    image: 'https://images.unsplash.com/photo-1643982102543-bc057db646cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMGVkdWNhdGlvbiUyMHRlYWNoZXIlMjB3aGl0ZWJvYXJkfGVufDF8fHx8MTc3MzA4MDQxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Understanding CEFR Language Levels',
    description: 'A comprehensive guide to the Common European Framework of Reference for Languages.',
    date: 'February 28, 2026',
  },
  {
    image: 'https://images.unsplash.com/photo-1758874572744-26aa02a8f5c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjB2aWRlbyUyMGNvbmZlcmVuY2UlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzMwODA0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Preparing for Your German Language Exam',
    description: 'Essential tips and resources to help you succeed in your Goethe or TestDaF examination.',
    date: 'February 20, 2026',
  },
];

export function Blog() {
  return (
    <section id="blog" className="bg-gray-50 dark:bg-gray-800 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#2F8AA3] uppercase tracking-wide text-sm font-semibold mb-2">Resources</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Latest Blog Articles</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Insights, tips, and updates from our language experts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-b-4 border-transparent hover:border-[#2F8AA3]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-[#2F8AA3] dark:text-[#F2C230]/80 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.description}</p>
                <button className="text-[#2F8AA3] hover:text-[#F2C230] dark:text-[#F2C230] dark:hover:text-white flex items-center font-semibold transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}