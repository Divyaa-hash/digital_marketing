import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navigation } from '../../data/navigation';
import { services } from '../../data/services';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src="/images/logo.png" 
                alt="BalaNex Technologies Logo" 
                className="h-16 w-auto mb-4"
              />
            </motion.div>
            <p className="text-gray-400 mb-6 font-medium">
              INNOVATE | AUTOMATE | ELEVATE
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building Next-Gen Solutions for businesses through AI, automation, digital growth, and technology innovation.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.route}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={service.route}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <span className="block text-sm">Email</span>
                <a href="mailto:balanextechnologies@gmail.com" className="hover:text-white transition-colors">
                  balanextechnologies@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-sm">Phone</span>
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <span className="block text-sm">Location</span>
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} BalaNex Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
