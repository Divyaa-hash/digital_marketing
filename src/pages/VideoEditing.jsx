import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Video, Play, CheckCircle, ArrowRight, Camera, Clock, Users } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';
import FAQAccordion from '../components/common/FAQAccordion';
import Button from '../components/common/Button';

const VideoEditing = () => {
  const services = [
    { title: 'Business Promotional Videos', desc: 'We help plan content that presents your company, products, services and key business information.' },
    { title: 'Corporate Videos', desc: 'Corporate videos communicate your business identity, operations, team and values for websites, presentations and social media.' },
    { title: 'Product Videos', desc: 'We create product-focused video content that highlights features, uses and important details for customers to see before purchasing.' },
    { title: 'Social Media Reels', desc: 'We help develop reel concepts and create content suitable for platforms such as Instagram and Facebook for quick information sharing.' },
    { title: 'Event Videos', desc: 'We help document important moments from business events, product launches, celebrations and special occasions through video.' },
    { title: 'Interview and Testimonial Videos', desc: 'We support video planning, recording and editing to help businesses share real experiences and explain their services.' },
    { title: 'Professional Video Editing', desc: 'Our editing work includes selecting and arranging footage, trimming, transitions, background music, sound adjustments, text overlays, subtitles, colour adjustments and preparing videos in agreed formats.' },
    { title: 'Advertising Videos', desc: 'We help create video concepts with a clear opening, important information and a relevant call to action for promotional campaigns.' }
  ];

  const benefits = [
    'Introduce your business and services',
    'Showcase products in action',
    'Share your company story',
    'Create engaging social media content',
    'Support digital advertising campaigns',
    'Explain complex information visually',
    'Build familiarity with your brand'
  ];

  const process = [
    { step: '1', title: 'Project Discussion', desc: 'We understand your business, video purpose, target audience and expected deliverables.' },
    { step: '2', title: 'Concept and Script Planning', desc: 'We develop the video idea, key message, shooting plan and script where required.' },
    { step: '3', title: 'Video Shoot', desc: 'We record the agreed footage at the selected location and according to the project schedule.' },
    { step: '4', title: 'Video Editing', desc: 'We arrange the footage, add suitable visuals, audio and text elements, and prepare the first version.' },
    { step: '5', title: 'Review and Corrections', desc: 'We share the draft for feedback and complete the agreed revisions.' },
    { step: '6', title: 'Final Delivery', desc: 'We deliver the approved video in the agreed format and resolution.' }
  ];

  const industries = [
    'Real estate companies',
    'Construction businesses',
    'Retail shops',
    'Restaurants',
    'Educational institutions',
    'Clinics',
    'Manufacturers',
    'Service providers',
    'Personal brands'
  ];

  const faqs = [
    {
      question: 'Do you provide business promotional videos?',
      answer: 'Yes. We can plan and produce promotional videos that introduce your business, products and services.'
    },
    {
      question: 'Can you create Instagram reels?',
      answer: 'Yes. We support short-form video content for Instagram and other suitable social media platforms.'
    },
    {
      question: 'Do you provide video shooting at our business location?',
      answer: 'Location-based shooting can be arranged depending on the project, schedule and travel requirements.'
    },
    {
      question: 'Do you provide video editing separately?',
      answer: 'Yes. Video editing can be discussed as a separate requirement if you already have recorded footage.'
    },
    {
      question: 'How long does video production take?',
      answer: 'The timeline depends on the shooting requirements, footage length, editing complexity and feedback process. We will discuss the expected delivery date before starting.'
    },
    {
      question: 'Can videos be used for advertisements?',
      answer: 'Yes. Videos can be prepared in suitable formats for advertising campaigns, depending on the platform and campaign requirements.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Video Shoot & Video Editing Services in Kallakurichi"
        subtitle="Bring Your Business Story to Life Through Videos!"
        description="At BalaNex Technologies, we provide video shoot and video editing services in Kallakurichi to help businesses communicate their message through creative and professional video content."
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
                A good video can show what words and images alone may not fully explain. It can introduce your business, demonstrate your products, highlight your services and help customers understand what makes your company different.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, videos are widely used across websites, Instagram, Facebook, YouTube and digital advertising campaigns. Whether you need a promotional video, product showcase, business introduction or social media reel, we help plan and produce content according to your requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Why Video Marketing"
            title="Why Is Video Marketing Important?"
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
            title="Our Video Shoot and Editing Services"
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
                <Video className="text-accent mb-4" size={32} />
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
            title="Our Video Production Process"
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
            subtitle="Industries"
            title="Video Content for Different Industries"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                className="bg-lightBg rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="text-accent mb-3" size={24} />
                <h3 className="font-semibold text-midnight">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-midnight">
        <div className="container-custom text-center">
          <SectionHeading
            subtitle="Get Started"
            title="Let Your Business Be Seen and Heard!"
            description="Your business has something valuable to show. Let's turn your ideas, products and services into videos that communicate your story."
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
                title="Ready to Discuss Your Video Project?"
                description="Contact BalaNex Technologies today for video shoot and video editing services in Kallakurichi."
              />
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all">
                  Contact Us <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <EnquiryForm title="Video Editing Enquiry" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VideoEditing;
