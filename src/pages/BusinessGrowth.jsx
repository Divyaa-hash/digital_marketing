import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, TrendingUp, Users, BarChart3, MessageSquare, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';

const BusinessGrowth = () => {
  const services = [
    { icon: Palette, title: 'Digital Branding', desc: 'Build a strong digital brand identity that resonates with your target audience and sets you apart from competitors.' },
    { icon: TrendingUp, title: 'Marketing Strategy', desc: 'Develop comprehensive marketing strategies aligned with your business goals and market opportunities.' },
    { icon: Users, title: 'Customer Acquisition', desc: 'Implement proven strategies to attract and acquire new customers efficiently.' },
    { icon: BarChart3, title: 'Conversion Optimization', desc: 'Optimize your digital assets to improve conversion rates and maximize ROI.' },
    { icon: MessageSquare, title: 'Analytics & Reporting', desc: 'Gain insights through data analytics and comprehensive reporting to make informed decisions.' },
    { icon: Briefcase, title: 'Marketing Consulting', desc: 'Get expert guidance on marketing decisions and strategy implementation.' }
  ];

  const benefits = [
    'Clearer marketing direction and focus',
    'Improved customer acquisition and retention',
    'Data-driven decision making',
    'Better understanding of your market',
    'Increased marketing efficiency',
    'Sustainable business growth'
  ];

  const process = [
    { step: 1, title: 'Business Analysis', desc: 'We analyze your current business situation and growth challenges.' },
    { step: 2, title: 'Strategy Development', desc: 'We create a customized growth strategy aligned with your objectives.' },
    { step: 3, title: 'Implementation', desc: 'We implement the strategy across relevant channels and touchpoints.' },
    { step: 4, title: 'Measurement & Optimization', desc: 'We track results and continuously optimize for better performance.' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Build a Clearer Path From Attention to Action."
        subtitle="Business Growth"
        description="Drive sustainable business growth with strategic marketing, branding and data-driven insights that convert attention into action."
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Services"
            title="Business Growth Solutions"
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
            subtitle="Why Growth Strategy"
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
            subtitle="Our Approach"
            title="How We Drive Growth"
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
                description="Contact us to discuss how our business growth services can help you achieve your goals."
              />
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all">
                  Contact Us <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <EnquiryForm title="Enquire About Business Growth" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessGrowth;
