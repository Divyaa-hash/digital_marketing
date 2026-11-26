import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = ({ category, questions, faqs }) => {
  const [openId, setOpenId] = useState(null);

  // Support both old format (category + questions) and new format (faqs)
  const faqList = faqs || questions;

  return (
    <div className="mb-8">
      {category && (
        <motion.h3
          className="text-2xl font-heading font-bold text-midnight mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {category}
        </motion.h3>
      )}
      <div className="space-y-4">
        {faqList.map((faq, index) => (
          <motion.div
            key={faq.id || index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <button
              onClick={() => setOpenId(openId === (faq.id || index) ? null : (faq.id || index))}
              className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              aria-expanded={openId === (faq.id || index)}
            >
              <motion.span
                className="font-semibold text-midnight pr-4"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {faq.question}
              </motion.span>
              <motion.div
                animate={{ rotate: openId === (faq.id || index) ? 180 : 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
              >
                <ChevronDown className="text-accent flex-shrink-0" />
              </motion.div>
            </button>
            <AnimatePresence mode="wait">
              {openId === (faq.id || index) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <motion.div
                    className="px-6 pb-5 pt-0 text-gray-600 leading-relaxed"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
