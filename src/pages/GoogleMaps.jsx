import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Star, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';

const GoogleMaps = () => {
  const features = [
    { icon: MapPin, title: 'Google My Business Optimization', desc: 'Optimize your business profile to appear in local search results and map listings.' },
    { icon: Star, title: 'Review Management', desc: 'Build and manage your online reputation through customer reviews and ratings.' },
    { icon: TrendingUp, title: 'Local SEO', desc: 'Improve your local search visibility and attract customers in your area.' },
    { icon: Users, title: 'Location-Based Marketing', desc: 'Target customers based on their geographic location and proximity.' }
  ];

  const benefits = [
    'Increased local visibility on Google Maps',
    'Better ranking in local search results',
    'More customer inquiries and foot traffic',
    'Improved online reputation through reviews',
    'Higher conversion rates from local searches',
    'Competitive advantage in your local market'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Get Found Locally with Google Maps"
        subtitle="Google Maps"
        description="Optimize your Google My Business profile, improve local search rankings, and attract customers in your area through strategic Google Maps marketing."
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Services"
            title="Google Maps Optimization Services"
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
            subtitle="Why Google Maps"
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
            title="How We Optimize Your Google Maps Presence"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Profile Setup', desc: 'Create and optimize your Google My Business profile with accurate information.' },
              { step: 2, title: 'Verification', desc: 'Verify your business to build trust and credibility with Google.' },
              { step: 3, title: 'Optimization', desc: 'Optimize categories, descriptions, and images for better visibility.' },
              { step: 4, title: 'Review Strategy', desc: 'Implement strategies to generate and manage customer reviews.' }
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
                title="Optimize Your Local Presence"
                description="Contact us to improve your Google Maps visibility and attract more local customers."
              />
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all">
                  Contact Us <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <EnquiryForm title="Google Maps Enquiry" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GoogleMaps;
