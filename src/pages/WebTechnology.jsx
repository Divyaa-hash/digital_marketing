import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Layout, ShoppingCart, Code2, Wrench, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';

const WebTechnology = () => {
  const services = [
    { icon: Globe, title: 'Business Websites', desc: 'Professional, responsive websites that represent your brand and convert visitors into customers.' },
    { icon: Layout, title: 'Landing Pages', desc: 'High-converting landing pages designed for specific campaigns and lead generation.' },
    { icon: Code2, title: 'WordPress Development', desc: 'Custom WordPress solutions tailored to your business needs with flexibility and scalability.' },
    { icon: ShoppingCart, title: 'E-commerce', desc: 'Complete online stores with secure payment gateways and seamless shopping experiences.' },
    { icon: Code2, title: 'Web Applications', desc: 'Custom web applications built to solve specific business challenges and improve efficiency.' },
    { icon: Wrench, title: 'Website Maintenance', desc: 'Ongoing support, updates and security maintenance to keep your website running smoothly.' }
  ];

  const benefits = [
    'Professional online presence',
    'Mobile-responsive design',
    'Fast loading speeds',
    'Search engine friendly',
    'Secure and reliable',
    'Scalable for future growth'
  ];

  const workflow = [
    { step: 1, title: 'Requirement Analysis', desc: 'We understand your business needs and project requirements.' },
    { step: 2, title: 'UI/UX Design', desc: 'We create intuitive and visually appealing designs.' },
    { step: 3, title: 'Development', desc: 'We build your website using modern technologies and best practices.' },
    { step: 4, title: 'Testing', desc: 'We thoroughly test across devices and browsers.' },
    { step: 5, title: 'Deployment', desc: 'We launch your website and ensure smooth operation.' },
    { step: 6, title: 'Maintenance', desc: 'We provide ongoing support and updates.' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Digital Experiences Designed to Do More."
        subtitle="Web & Technology"
        description="Build powerful web experiences that engage your audience and drive business growth with our comprehensive web development services."
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Services"
            title="Web Development Solutions"
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
                <service.icon className="text-electricBlue mb-4" size={32} />
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
            subtitle="Why Choose Us"
            title="Benefits of Our Web Solutions"
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
            subtitle="Development Workflow"
            title="How We Build Your Website"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflow.map((item) => (
              <motion.div
                key={item.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.step * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electricBlue to-deepPurple flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
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
                title="Ready to Build Your Website?"
                description="Contact us to discuss your web development project and get a custom solution."
              />
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center text-electricBlue font-medium hover:gap-2 transition-all">
                  Contact Us <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <EnquiryForm title="Enquire About Web Development" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebTechnology;
