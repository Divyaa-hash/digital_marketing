import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import { industries } from '../data/industries';

const Industries = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Digital Solutions for Different Business Environments."
        subtitle="Industries We Serve"
        description="We work with diverse industries, understanding their unique challenges and delivering tailored digital solutions."
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Expertise"
            title="Industries We Work With"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.id}
                  className="bg-lightBg rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="text-electricBlue mb-4 group-hover:scale-110 transition-transform" size={40} />
                  <h3 className="text-xl font-heading font-bold text-midnight mb-3">{industry.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-midnight via-deepPurple to-electricBlue">
        <div className="container-custom text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Your Industry Not Listed?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We work with businesses across various sectors. Contact us to discuss how we can help your specific industry.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a href="/contact" className="inline-block bg-white text-midnight px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
