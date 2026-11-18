import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navigation } from '../../data/navigation';
import { services } from '../../data/services';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-midnight via-secondary to-midnight text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-lightAccent rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
                <img
                  src="/images/balanex-logo.png"
                  alt="BalaNex Technologies Logo"
                  className="h-20 w-auto object-contain mx-auto mb-4"
                />
                <p className="text-center text-accent font-semibold text-sm tracking-widest uppercase mb-3">
                  INNOVATE | AUTOMATE | ELEVATE
                </p>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Building Next-Gen Solutions for businesses through AI, automation, digital growth, and technology innovation.
              </p>
            </motion.div>
          </div>

          <div>
            <motion.h4
              className="font-heading font-semibold text-lg mb-6 relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Quick Links
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-lightAccent"></span>
            </motion.h4>
            <motion.ul
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {navigation.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.route}
                    className="text-gray-400 hover:text-accent hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          <div>
            <motion.h4
              className="font-heading font-semibold text-lg mb-6 relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-lightAccent"></span>
            </motion.h4>
            <motion.ul
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={service.route}
                    className="text-gray-400 hover:text-accent hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          <div>
            <motion.h4
              className="font-heading font-semibold text-lg mb-6 relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-lightAccent"></span>
            </motion.h4>
            <motion.ul
              className="space-y-4 text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-sm">✉</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-500 mb-1">Email</span>
                  <a href="mailto:balanextechnologies@gmail.com" className="hover:text-accent transition-colors">
                    balanextechnologies@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-sm">📞</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-500 mb-1">Phone</span>
                  <a href="tel:+919876543210" className="hover:text-accent transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-sm">📍</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-500 mb-1">Location</span>
                  <span className="hover:text-accent transition-colors">India</span>
                </div>
              </li>
            </motion.ul>
          </div>
        </div>

        <motion.div
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} BalaNex Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-accent text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-gray-400 hover:text-accent text-sm transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
