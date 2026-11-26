import { motion } from 'framer-motion';

const PageHero = ({ title, subtitle, description, className = '', children }) => {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent ${className}`}>
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-lightAccent rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>

      <div className="container-custom relative pt-32 pb-24 md:pt-40 md:pb-32">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          {children && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {children}
            </motion.div>
          )}
          {subtitle && (
            <motion.p
              className="text-lightAccent font-semibold text-sm uppercase tracking-wider mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {subtitle}
            </motion.p>
          )}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 80 }}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              className="text-xl text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
