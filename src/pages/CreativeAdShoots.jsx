import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Aperture, CheckCircle, ArrowRight, Clock, Users, Sparkles } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';
import FAQAccordion from '../components/common/FAQAccordion';
import Button from '../components/common/Button';

const CreativeAdShoots = () => {
  const services = [
    { title: 'Product Photography', desc: 'Professional product photography showcasing your products in the best light. Ideal for e-commerce, catalogs, and marketing materials.' },
    { title: 'Brand Video Shoots', desc: 'Creative brand videos that tell your company story and communicate your values to your target audience.' },
    { title: 'Commercial Photography', desc: 'High-quality commercial photography for advertisements, brochures, websites and promotional campaigns.' },
    { title: 'Model Photography', desc: 'Professional model photography for fashion, lifestyle, and product showcasing with professional models.' },
    { title: 'Location Shoots', desc: 'On-location photography at your business premises, outdoor locations, or custom settings to match your brand.' },
    { title: 'Studio Photography', desc: 'Professional studio photography with controlled lighting and backgrounds for consistent, high-quality results.' },
    { title: 'Creative Concept Development', desc: 'We help develop creative concepts, themes and visual directions for your advertising campaigns.' },
    { title: 'Post-Production & Editing', desc: 'Professional photo editing, retouching, color correction, and enhancement to deliver polished final images.' }
  ];

  const benefits = [
    'High-quality visual content',
    'Professional brand image',
    'Better product presentation',
    'Increased customer engagement',
    'Stronger marketing materials',
    'Competitive visual advantage'
  ];

  const process = [
    { step: '1', title: 'Concept Development', desc: 'We discuss your brand, products, target audience and creative goals.' },
    { step: '2', title: 'Planning & Pre-Production', desc: 'We plan the shoot locations, props, models, lighting and schedule.' },
    { step: '3', title: 'Photography Shoot', desc: 'We execute the professional photography session at the agreed location.' },
    { step: '4', title: 'Post-Production', desc: 'We edit, retouch and enhance the images to deliver polished final photos.' },
    { step: '5', title: 'Final Delivery', desc: 'We deliver the final images in agreed formats and resolutions for your use.' }
  ];

  const faqs = [
    {
      question: 'What types of products can you photograph?',
      answer: 'We can photograph a wide range of products including electronics, fashion, food, jewelry, furniture, cosmetics and more.'
    },
    {
      question: 'Do you provide on-location photography?',
      answer: 'Yes, we can shoot at your business location, outdoor locations, or custom settings based on your requirements.'
    },
    {
      question: 'How long does a photography shoot take?',
      answer: 'The timeline depends on the number of products, complexity of the shoot, and post-production requirements. We discuss the expected timeline before starting.'
    },
    {
      question: 'Do you provide models for the shoot?',
      answer: 'We can arrange professional models based on your requirements and budget, or you can provide your own models.'
    },
    {
      question: 'What file formats do you deliver?',
      answer: 'We deliver images in various formats including JPEG, PNG, TIFF, and other formats based on your requirements.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Creative Ad Shoots in Kallakurichi"
        subtitle="Professional Photography & Ad Shoot Services"
        description="At BalaNex Technologies, we provide creative ad shoot services in Kallakurichi including product photography, brand videos, and commercial content creation."
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
                High-quality visual content is essential for businesses to stand out in today's competitive market. At BalaNex Technologies, we provide creative ad shoot services in Kallakurichi including product photography, brand videos, and commercial content creation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you need product photography for your e-commerce store, brand videos for social media, or commercial shoots for advertising campaigns, we deliver professional visual content that represents your brand.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Services"
            title="Our Creative Ad Shoot Services"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Camera className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-heading font-bold text-midnight mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Benefits"
            title="Benefits of Professional Photography"
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

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Process"
            title="Our Photography Process"
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

      <section className="py-20 bg-midnight">
        <div className="container-custom text-center">
          <SectionHeading
            subtitle="Get Started"
            title="Bring Your Brand to Life with Professional Photography"
            description="Contact BalaNex Technologies today for creative ad shoot services in Kallakurichi."
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
                title="Ready to Discuss Your Photography Requirements?"
                description="Contact BalaNex Technologies for creative ad shoot services in Kallakurichi."
              />
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all">
                  Contact Us <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <EnquiryForm title="Creative Ad Shoots Enquiry" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreativeAdShoots;
