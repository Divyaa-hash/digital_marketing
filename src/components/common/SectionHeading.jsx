import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, description, className = '' }) => {
  return (
    <motion.div
      className={`text-center mb-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {subtitle && (
        <motion.p
          className="text-electricBlue font-semibold text-sm uppercase tracking-wider mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-midnight mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className="text-gray-600 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
