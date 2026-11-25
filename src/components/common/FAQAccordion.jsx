import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = ({ category, questions, faqs }) => {
  const [openId, setOpenId] = useState(null);

  // Support both old format (category + questions) and new format (faqs)
  const faqList = faqs || questions;

  return (
    <div className="mb-8">
      {category && <h3 className="text-2xl font-heading font-bold text-midnight mb-6">{category}</h3>}
      <div className="space-y-4">
        {faqList.map((faq, index) => (
          <motion.div
            key={faq.id || index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setOpenId(openId === (faq.id || index) ? null : (faq.id || index))}
              className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              aria-expanded={openId === (faq.id || index)}
            >
              <span className="font-semibold text-midnight pr-4">{faq.question}</span>
              <motion.div
                animate={{ rotate: openId === (faq.id || index) ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-accent flex-shrink-0" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openId === (faq.id || index) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-5 pt-0 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
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
