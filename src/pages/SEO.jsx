import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';

const SEO = () => {
  const features = [
    'On-Page SEO Optimization',
    'Off-Page SEO & Link Building',
    'Technical SEO & Site Speed',
    'Local SEO for Local Businesses',
    'Keyword Research & Strategy',
    'SEO Audits & Analysis',
    'Content Optimization',
    'Performance Tracking & Reporting'
  ];

  const benefits = [
    'Higher search engine rankings',
    'Increased organic traffic',
    'Better brand visibility',
    'Quality lead generation',
    'Long-term sustainable results',
    'Cost-effective marketing'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="SEO Services"
        subtitle="Digital Marketing"
        description="We help businesses rank higher on search engines with result-driven SEO strategies as the Best Digital Marketing Agency in Chennai."
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="What We Offer"
            title="Our SEO Services"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                className="bg-lightBg rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Search className="text-accent mb-4" size={32} />
                <h3 className="text-lg font-heading font-bold text-midnight mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Why SEO"
            title="Benefits for Your Business"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="text-accent mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                subtitle="Get Started"
                title="Improve Your Search Rankings"
                description="Contact us to discuss how our SEO services can help your business grow."
              />
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all">
                  Contact Us <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <EnquiryForm title="SEO Enquiry" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEO;
