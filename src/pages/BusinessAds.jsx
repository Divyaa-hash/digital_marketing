import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Megaphone, Target, BarChart3, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';

const BusinessAds = () => {
  const features = [
    { icon: Megaphone, title: 'Google Ads', desc: 'Reach potential customers searching for your products and services on Google.' },
    { icon: Target, title: 'Facebook & Instagram Ads', desc: 'Connect with your audience on social media with targeted advertising campaigns.' },
    { icon: BarChart3, title: 'LinkedIn Ads', desc: 'Reach professionals and decision-makers with B2B advertising on LinkedIn.' },
    { icon: TrendingUp, title: 'Performance Marketing', desc: 'Data-driven campaigns optimized for maximum ROI and conversions.' }
  ];

  const benefits = [
    'Precise audience targeting based on demographics and interests',
    'Increased brand awareness and visibility',
    'High-quality lead generation',
    'Measurable results and ROI tracking',
    'Quick scaling of successful campaigns',
    'Cost-effective advertising with budget control'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Grow Your Business with Strategic Advertising"
        subtitle="Business Ads"
        description="Drive results with data-driven advertising campaigns across Google, Facebook, Instagram, and LinkedIn. Generate quality leads and maximize your ROI."
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Services"
            title="Business Advertising Solutions"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-lightBg rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <feature.icon className="text-accent mb-4" size={32} />
                <h3 className="text-lg font-heading font-bold text-midnight mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Why Business Ads"
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
          <SectionHeading
            subtitle="Our Process"
            title="How We Create Effective Ad Campaigns"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Strategy & Planning', desc: 'Define campaign objectives, target audience, and budget allocation.' },
              { step: 2, title: 'Creative Development', desc: 'Design compelling ad creatives and copy that convert.' },
              { step: 3, title: 'Campaign Launch', desc: 'Launch campaigns across selected platforms with precision targeting.' },
              { step: 4, title: 'Optimization & Reporting', desc: 'Monitor performance, optimize bids, and provide detailed reports.' }
            ].map((item) => (
              <motion.div
                key={item.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.step * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-heading font-bold text-midnight mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                subtitle="Get Started"
                title="Launch Your Ad Campaign"
                description="Contact us to discuss your advertising goals and create campaigns that drive results."
              />
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all">
                  Contact Us <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <EnquiryForm title="Business Ads Enquiry" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessAds;
