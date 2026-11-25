import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, CheckCircle, ArrowRight, MapPin, Clock, BarChart3 } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';
import FAQAccordion from '../components/common/FAQAccordion';
import Button from '../components/common/Button';

const SEO = () => {
  const services = [
    { title: 'Keyword Research', desc: 'We research the search terms that are relevant to your products and services, considering search intent, competition and business relevance.' },
    { title: 'On-Page SEO', desc: 'SEO title and meta description optimisation, heading structure improvement, relevant keyword placement, image alt text recommendations, internal linking and content readability.' },
    { title: 'Technical SEO', desc: 'Website crawlability and indexing, mobile usability, page loading performance, XML sitemap availability, robots.txt configuration, broken links and redirect issues, HTTPS and security, structured data.' },
    { title: 'Local SEO', desc: 'Local keyword research, location-focused website content, business information consistency and Google Business Profile optimisation for businesses serving Kallakurichi.' },
    { title: 'Google Business Profile Optimisation', desc: 'Business information review, appropriate category selection, service and product details, business description improvement, photo and update recommendations, customer review response guidance.' },
    { title: 'Off-Page SEO', desc: 'Genuine business listings, suitable industry directories, brand mentions and quality link-building approaches. We avoid relying on spammy or irrelevant links.' },
    { title: 'SEO Content Optimisation', desc: 'Review existing pages and identify opportunities to improve their usefulness, clarity and keyword relevance. Updating service pages, adding FAQs, improving headings and creating relevant blog topics.' },
    { title: 'SEO Reporting and Monitoring', desc: 'Monitor available performance information such as organic clicks, impressions, search queries, indexing and keyword visibility. Reports help understand progress and identify next improvements.' }
  ];

  const benefits = [
    'Improve your website\'s visibility in relevant searches',
    'Help potential customers discover your services',
    'Attract visitors who are already looking for information',
    'Strengthen your online credibility',
    'Support local search discovery',
    'Improve the quality and structure of website content',
    'Create opportunities for enquiries over time'
  ];

  const process = [
    { step: '1', title: 'Website Audit', desc: 'We review your website to identify existing issues and improvement opportunities.' },
    { step: '2', title: 'Keyword Research', desc: 'We select keywords based on your services, target audience and location.' },
    { step: '3', title: 'Competitor Analysis', desc: 'We study relevant competitors to understand the search landscape and identify content opportunities.' },
    { step: '4', title: 'SEO Implementation', desc: 'We work on on-page, technical and local SEO improvements based on the agreed scope.' },
    { step: '5', title: 'Content Optimisation', desc: 'We improve existing pages and recommend useful new content.' },
    { step: '6', title: 'Monitoring and Reporting', desc: 'We review performance and plan further improvements based on available data.' }
  ];

  const faqs = [
    {
      question: 'How long does SEO take to show results?',
      answer: 'SEO takes time. The timeline depends on competition, website condition, content quality and the work required. Some improvements may be visible earlier, while meaningful organic growth often takes several months.'
    },
    {
      question: 'Can you guarantee first-page Google rankings?',
      answer: 'No responsible SEO provider can guarantee a specific Google ranking. We focus on best practices, measurable improvements and transparent reporting.'
    },
    {
      question: 'What is local SEO?',
      answer: 'Local SEO improves a business\'s visibility for searches connected to a particular location or service area.'
    },
    {
      question: 'Is Google Business Profile important for local businesses?',
      answer: 'Yes. It helps customers discover your business information, location, services, photos and reviews on Google.'
    },
    {
      question: 'Do I need SEO if I already run Google Ads?',
      answer: 'SEO and Google Ads serve different purposes. Ads can provide paid visibility, while SEO works towards improving organic visibility over time. They can complement each other.'
    },
    {
      question: 'Do you provide monthly SEO services?',
      answer: 'Monthly SEO support can include optimisation, content improvements, local SEO activities and performance reporting, depending on the selected package.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="SEO Services in Kallakurichi"
        subtitle="Help Your Business Get Found on Google!"
        description="At BalaNex Technologies, we provide SEO services in Kallakurichi to help businesses improve their organic search visibility, attract relevant visitors and build a stronger online presence."
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
                Imagine someone searching Google for a product or service that your business offers. Your website should have a chance to appear when that person is looking for a solution.
                But simply having a website is not enough. Your pages need to be properly structured, relevant to customer searches and easy for search engines to understand.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our approach focuses on understanding your business, researching the right keywords and improving your website step by step. We aim to make your website useful for customers while following search engine best practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="What Is SEO"
            title="What Is Search Engine Optimisation (SEO)?"
          />
          <div className="max-w-4xl mx-auto mt-8">
            <motion.p
              className="text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Search Engine Optimisation, commonly called SEO, is the process of improving a website so that it can appear more prominently in unpaid search results. When customers search for information, products or services, search engines try to show pages that are relevant and helpful. SEO helps your website communicate its topic, purpose and value more clearly. SEO is a long-term process. Results depend on factors such as competition, website quality, content relevance, technical performance and search demand.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Services"
            title="Our SEO Services"
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
                <Search className="text-accent mb-4" size={32} />
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
            subtitle="Benefits"
            title="Benefits of SEO for Your Business"
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
            subtitle="Our Process"
            title="Our SEO Process"
          />
          <div className="max-w-4xl mx-auto mt-12 space-y-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                className="bg-lightBg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
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

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Industries"
            title="SEO for Different Industries"
          />
          <div className="max-w-4xl mx-auto mt-8">
            <motion.p
              className="text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our SEO services are suitable for real estate businesses, construction companies, clinics, educational institutions, retail shops, restaurants, manufacturers and professional service providers. Whether your business serves customers in Kallakurichi or has a wider service area, we can develop an SEO strategy based on your actual business locations and goals.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-midnight">
        <div className="container-custom text-center">
          <SectionHeading
            subtitle="Get Started"
            title="Make Your Website Easier to Discover!"
            description="Your potential customers are already searching online. Give your website the opportunity to reach them with a clear and consistent SEO strategy."
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
                title="Ready to Discuss Your SEO Requirements?"
                description="Contact BalaNex Technologies today for SEO services in Kallakurichi."
              />
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all">
                  Contact Us <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <EnquiryForm title="SEO Enquiry" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEO;
