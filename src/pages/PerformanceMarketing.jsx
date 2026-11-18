import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BarChart3, Target, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';

const PerformanceMarketing = () => {
  const features = [
    'Google Ads Management',
    'Facebook & Instagram Ads',
    'LinkedIn Advertising',
    'Pay-Per-Click (PPC)',
    'Conversion Rate Optimization',
    'A/B Testing',
    'ROI Tracking & Analytics',
    'Campaign Optimization'
  ];

  const benefits = [
    'Immediate results',
    'Precise audience targeting',
    'Measurable ROI',
    'Scalable campaigns',
    'Data-driven decisions',
    'Cost-effective lead generation'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Performance Marketing"
        subtitle="Digital Marketing"
        description="Data-driven advertising campaigns optimized for maximum ROI and conversions."
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="What We Offer"
            title="Our Performance Marketing Services"
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
                <Target className="text-accent mb-4" size={32} />
                <h3 className="text-lg font-heading font-bold text-midnight mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Why Performance Marketing"
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
                title="Drive Results with Performance Marketing"
                description="Contact us to discuss how our performance marketing can help your business grow."
              />
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all">
                  Contact Us <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <EnquiryForm title="Performance Marketing Enquiry" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PerformanceMarketing;
