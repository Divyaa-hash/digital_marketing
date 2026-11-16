import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Database, BookOpen, Settings, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';

const SAPSolutions = () => {
  const services = [
    { icon: Database, title: 'SAP FICO', desc: 'Financial Accounting and Controlling implementation, configuration and support.' },
    { icon: BookOpen, title: 'SAP ABAP', desc: 'ABAP programming, custom development, reports and interface programming.' },
    { icon: Users, title: 'SAP SuccessFactors', desc: 'Employee Central implementation, configuration and HR system integration.' },
    { icon: Zap, title: 'SAP S/4HANA', desc: 'Migration, implementation and optimization of SAP S/4HANA systems.' },
    { icon: Settings, title: 'SAP Consulting', desc: 'Expert consulting for SAP implementation, upgrades and optimization.' },
    { icon: BookOpen, title: 'SAP Training', desc: 'Comprehensive SAP training programs for individuals and corporate teams.' }
  ];

  const benefits = [
    'Certified SAP consultants with industry experience',
    'End-to-end SAP implementation support',
    'Custom SAP development to meet your needs',
    'Seamless integration with existing systems',
    'Ongoing support and maintenance',
    'Training for your team'
  ];

  const process = [
    { step: 1, title: 'Requirement Analysis', desc: 'We analyze your business requirements and SAP needs.' },
    { step: 2, title: 'Solution Design', desc: 'We design a customized SAP solution architecture.' },
    { step: 3, title: 'Implementation', desc: 'We implement SAP modules with expert configuration.' },
    { step: 4, title: 'Testing & Go-Live', desc: 'We test thoroughly and support your go-live.' },
    { step: 5, title: 'Training & Support', desc: 'We train your team and provide ongoing support.' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Enterprise Solutions with SAP"
        subtitle="SAP Solutions"
        description="Transform your business with comprehensive SAP solutions including FICO, ABAP, SuccessFactors, and S/4HANA implementation and consulting."
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Services"
            title="SAP Solutions We Offer"
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
            subtitle="Why SAP"
            title="Benefits of SAP Solutions"
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
            subtitle="Implementation Process"
            title="How We Deliver SAP Solutions"
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
                title="Ready to Implement SAP?"
                description="Contact us to discuss how our SAP solutions can transform your business operations."
              />
              <div className="mt-8">
                <Link to="/academy" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all">
                  Explore SAP Training <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <EnquiryForm title="Enquire About SAP Solutions" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SAPSolutions;
