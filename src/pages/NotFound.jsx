import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="min-h-[80vh] flex items-center justify-center bg-lightBg">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-9xl font-heading font-bold text-gradient mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-midnight mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button size="lg">
                  <Home className="mr-2" size={20} />
                  Back to Home
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  Contact Us <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
