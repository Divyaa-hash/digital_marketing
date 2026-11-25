import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Gem, CheckCircle, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';
import FAQAccordion from '../components/common/FAQAccordion';
import Button from '../components/common/Button';

const Branding = () => {
  const services = [
    { title: 'Logo Design', desc: 'We create unique and meaningful logo designs that represent your business name, industry and personality. Simple, professional and easy to recognise.' },
    { title: 'Brand Identity Design', desc: 'We develop a consistent visual identity using suitable colours, typography, graphic elements and design styles for social media, websites and printed materials.' },
    { title: 'Brand Strategy', desc: 'We help identify your target audience, brand positioning, communication style and key values to give your branding a clear direction.' },
    { title: 'Business Profile Design', desc: 'We create well-structured company profiles that present your services, strengths and business information clearly.' },
    { title: 'Marketing Materials Design', desc: 'From business cards and brochures to flyers and promotional designs, we help maintain a consistent brand appearance.' },
    { title: 'Brand Guidelines', desc: 'Brand guidelines help your team use your logo, colours, fonts and visual elements correctly for consistent appearance.' }
  ];

  const benefits = [
    'Create a strong first impression',
    'Make your business different from competitors',
    'Build recognition among potential customers',
    'Communicate your business values clearly',
    'Maintain a consistent look across marketing platforms',
    'Develop a professional identity for long-term growth'
  ];

  const process = [
    { step: '1', title: 'Understanding Your Business', desc: 'We learn about your products, services, target audience and business goals.' },
    { step: '2', title: 'Research and Planning', desc: 'We study your industry and competitors to understand how your brand can stand out.' },
    { step: '3', title: 'Creative Development', desc: 'We work on logo concepts, colours, typography and visual direction.' },
    { step: '4', title: 'Review and Refinement', desc: 'We collect your feedback and make the necessary improvements.' },
    { step: '5', title: 'Final Brand Delivery', desc: 'We provide the approved branding materials for your business use.' }
  ];

  const faqs = [
    {
      question: 'Why does my business need branding?',
      answer: 'Branding helps customers recognise your business, understand what you offer and develop confidence in your company.'
    },
    {
      question: 'Do you provide logo design for new businesses?',
      answer: 'Yes. We help startups and newly established businesses create professional logo designs and brand identities.'
    },
    {
      question: 'Can you redesign my existing brand?',
      answer: 'Yes. We can help refresh your existing logo, colours and visual identity while considering your current brand recognition.'
    },
    {
      question: 'How long does branding take?',
      answer: 'The timeline depends on the project requirements, number of design concepts and feedback process. We will discuss the expected timeline before starting.'
    },
    {
      question: 'Do you provide branding for different industries?',
      answer: 'Yes. We work with different types of businesses and adapt the branding approach to suit their industry and audience.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Branding Services in Kallakurichi"
        subtitle="Build a Brand That People Remember!"
        description="At BalaNex Technologies, we provide creative branding services in Kallakurichi to help businesses build a unique identity and create a professional image."
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                Every successful business starts with an idea, but a strong brand is what helps people recognise and remember that business. Your brand is more than just a logo or a name. It represents your values, personality, quality, and the experience you offer your customers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At BalaNex Technologies, we provide creative branding services in Kallakurichi to help businesses build a unique identity and create a professional image. Whether you are starting a new business, expanding your existing company, or refreshing your current brand, we help you present your business clearly and consistently.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our goal is simple: to make your business look professional, communicate its value, and create a lasting impression on your audience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Why Is Branding Important"
            title="Why Is Branding Important for Your Business?"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
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
            subtitle="Our Services"
            title="Our Branding Services"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-lightBg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Sparkles className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-heading font-bold text-midnight mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Process"
            title="Our Branding Process"
            description="We follow a simple process to understand your business and develop the right brand identity."
          />
          <div className="max-w-4xl mx-auto mt-12 space-y-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-midnight mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Who Can Benefit"
            title="Who Can Benefit from Our Branding Services?"
          />
          <div className="max-w-4xl mx-auto mt-8">
            <motion.p
              className="text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our branding solutions are suitable for startups, retail shops, real estate companies, educational institutions, clinics, restaurants, manufacturers, professional service providers and growing businesses. Whether you operate a small local business or a company serving customers across different locations, a clear brand identity can help you communicate professionally.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-midnight">
        <div className="container-custom text-center">
          <SectionHeading
            subtitle="Get Started"
            title="Give Your Business an Identity That Stands Out!"
            description="Your business deserves to be recognised for what makes it special. Let's create a brand that communicates your values and leaves a positive impression."
            className="text-white"
          />
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <Button size="lg">Contact BalaNex Technologies</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="FAQ"
            title="Frequently Asked Questions"
          />
          <div className="max-w-4xl mx-auto mt-8">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                subtitle="Enquiry"
                title="Ready to Discuss Your Branding Requirements?"
                description="Contact BalaNex Technologies today to discuss your branding requirements in Kallakurichi."
              />
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all">
                  Contact Us <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <EnquiryForm title="Branding Enquiry" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Branding;
