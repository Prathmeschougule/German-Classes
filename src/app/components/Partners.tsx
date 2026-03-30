import { motion } from 'motion/react';

export function Partners() {
  const partners = [
    { name: 'Goethe Institut' },
    { name: 'TestDaF Institut' },
    { name: 'DAAD' },
    { name: 'Deutscher Akademischer Austauschdienst' },
    { name: 'Telc GmbH' },
  ];

  return (
    <section id="certification" className="bg-white dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#2F8AA3] uppercase tracking-wide text-sm font-semibold mb-2">Collaborations</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Partners</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Collaborating with leading German language organizations worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-[#2F8AA3] dark:hover:border-[#F2C230] rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-[#2F8AA3]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-[#2F8AA3]">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">{partner.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}