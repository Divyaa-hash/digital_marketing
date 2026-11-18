import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import { services } from '../data/services';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Our Services"
        subtitle="What We Do"
        description="Comprehensive digital solutions designed to help your business thrive in the modern digital landscape."
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Solutions"
            title="Everything You Need to Grow"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-gradient-to-br from-midnight to-secondary rounded-2xl p-8 text-white hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <ArrowRight className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <Link to={service.route} className="text-accent font-medium inline-flex items-center group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom text-center">
          <SectionHeading
            subtitle="Get Started"
            title="Ready to Transform Your Business?"
          />
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Let's discuss how our services can help you achieve your business goals. Contact us for a free consultation.
          </p>
          <Link to="/contact">
            <button className="bg-gradient-to-r from-secondary via-accent to-lightAccent text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-accent/30 hover:scale-105 transition-all">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
