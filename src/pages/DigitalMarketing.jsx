import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Globe, Megaphone, MessageSquare, Target, PenTool, Zap, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';

const DigitalMarketing = () => {
  const services = [
    { icon: Search, title: 'SEO', desc: 'Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies.' },
    { icon: Globe, title: 'Local SEO', desc: 'Dominate local search results and attract customers in your area with targeted local SEO optimization.' },
    { icon: Megaphone, title: 'Google Ads', desc: 'Reach potential customers at the right moment with data-driven Google Ads campaigns.' },
    { icon: MessageSquare, title: 'Meta Ads', desc: 'Connect with your audience on Facebook and Instagram through targeted advertising.' },
    { icon: Target, title: 'Social Media Marketing', desc: 'Build brand awareness and engagement across all major social media platforms.' },
    { icon: Zap, title: 'Lead Generation', desc: 'Generate qualified leads that convert into customers with our proven lead generation strategies.' },
    { icon: PenTool, title: 'Content Marketing', desc: 'Create valuable content that attracts, engages and converts your target audience.' },
    { icon: MessageSquare, title: 'WhatsApp Marketing', desc: 'Leverage WhatsApp for direct customer communication and marketing campaigns.' },
    { icon: BarChart3, title: 'Performance Marketing', desc: 'Maximize your ROI with data-driven performance marketing campaigns.' }
  ];

  const benefits = [
    'Increased brand visibility and awareness',
    'Higher quality website traffic',
    'Improved lead generation and conversion rates',
    'Better customer engagement and loyalty',
    'Measurable results and ROI',
    'Competitive advantage in your market'
  ];

  const process = [
    { step: 1, title: 'Audit & Research', desc: 'We analyze your current digital presence and conduct thorough market research.' },
    { step: 2, title: 'Strategy Development', desc: 'We create a customized marketing strategy aligned with your business goals.' },
    { step: 3, title: 'Implementation', desc: 'We execute the strategy across all relevant channels and platforms.' },
    { step: 4, title: 'Optimization', desc: 'We continuously monitor performance and optimize campaigns for better results.' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Get Seen. Get Remembered. Get Chosen."
        subtitle="Digital Marketing"
        description="Drive growth with comprehensive digital marketing strategies that connect you with your audience and convert them into customers."
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Services"
            title="Comprehensive Digital Marketing Solutions"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-lightBg rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <service.icon className="text-accent mb-4" size={32} />
                <h3 className="text-lg font-heading font-bold text-midnight mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Why Digital Marketing"
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
                <CheckCircle className="text-teal mr-3 flex-shrink-0 mt-1" size={20} />
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
            title="How We Deliver Results"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <motion.div
                key={item.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.step * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-deepPurple flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
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
                title="Ready to Grow Your Business?"
                description="Contact us to discuss how our digital marketing services can help you achieve your goals."
              />
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all">
                  Contact Us <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <EnquiryForm title="Enquire About Digital Marketing" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;
