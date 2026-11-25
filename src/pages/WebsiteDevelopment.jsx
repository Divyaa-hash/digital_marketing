import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, Layout, CheckCircle, ArrowRight, TrendingUp, MapPin, Clock, DollarSign, Smartphone, Zap, Shield, Globe } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';
import FAQAccordion from '../components/common/FAQAccordion';
import Button from '../components/common/Button';

const WebsiteDevelopment = () => {
  const services = [
    {
      icon: Layout,
      title: 'Business Website Design and Development',
      description: 'Structured websites with Home, About Us, Services, Products and Contact pages. Features include custom layouts, enquiry forms, WhatsApp and call integration, mobile-friendly design and clear navigation.'
    },
    {
      icon: Code2,
      title: 'Custom Website Design and Development',
      description: 'When ready-made templates cannot meet your requirements, custom development offers greater flexibility. Suitable for unique page structures, specialised forms, custom functionality or third-party integrations.'
    },
    {
      icon: Globe,
      title: 'E-commerce Website Development',
      description: 'Features include product categories and pages, shopping cart and checkout, payment gateway integration, order management, customer accounts and mobile-friendly shopping experience.'
    },
    {
      icon: Layout,
      title: 'WordPress Website Design and Development',
      description: 'WordPress development for businesses, service providers, blogs, portfolios and online stores. Setup focuses on responsive layouts, organised content and manageable website updates.'
    },
    {
      icon: Code2,
      title: 'Landing Page Design and Development',
      description: 'Landing pages with strong headlines, service benefits, relevant visuals, enquiry forms and clear calls to action. Supports advertising campaigns, product launches and lead generation.'
    },
    {
      icon: Layout,
      title: 'Website Redesign and Modernisation',
      description: 'Improving layouts, mobile responsiveness, navigation, content organisation and calls to action. We review your existing website before recommending changes.'
    },
    {
      icon: Code2,
      title: 'Custom Web Application Development',
      description: 'Customer portals, booking systems, dashboards and workflow-based applications. We discuss required features, users and business processes before planning development.'
    }
  ];

  const features = [
    { icon: Smartphone, title: 'UI/UX Design and User-Friendly Navigation', desc: 'We plan layouts, menus, buttons and content sections to help users find information without unnecessary steps.' },
    { icon: Smartphone, title: 'Mobile-Responsive Website Design', desc: 'Responsive design allows pages to adjust to different screen sizes across smartphones, tablets and desktops.' },
    { icon: Zap, title: 'Website Speed and Performance Optimisation', desc: 'We consider image optimization and suitable technical practices to support a smoother browsing experience.' },
    { icon: Globe, title: 'SEO-Friendly Website Structure', desc: 'Clear URLs, proper heading structure, descriptive metadata, image alt text, internal linking and XML sitemap setup.' },
    { icon: Shield, title: 'Enquiry Integration, Security and Content Management', desc: 'Contact forms, WhatsApp links, click-to-call options, SSL configuration, security settings, backups and CMS.' }
  ];

  const trends = [
    'AI-powered chatbots',
    'AI-assisted development',
    'AI search-friendly content',
    'Core Web Vitals',
    'Personalised experiences',
    'Bento grid layouts',
    'Micro-interactions',
    'Accessibility-first design',
    'Privacy and security'
  ];

  const industries = [
    'Manufacturing and industrial businesses',
    'Retail and textile businesses',
    'Schools and colleges',
    'Hospitals and clinics',
    'Real estate and construction',
    'Restaurants and hotels',
    'Startups and professional services'
  ];

  const process = [
    { step: '1', title: 'Understanding Requirements', desc: 'Discuss your business, target audience, website goals and required features.' },
    { step: '2', title: 'Website Planning', desc: 'Organise pages, navigation and important user journeys.' },
    { step: '3', title: 'UI/UX Design', desc: 'Plan layouts, colours, typography and visual elements for review.' },
    { step: '4', title: 'Development', desc: 'Build the website and implement the agreed features and integrations.' },
    { step: '5', title: 'Testing', desc: 'Review links, forms, navigation, mobile layouts and functionality.' },
    { step: '6', title: 'Launch and Handover', desc: 'Prepare the website for launch and provide the agreed access and deliverables.' }
  ];

  const pricing = [
    { type: 'Basic Business Website', price: '₹10,000–₹25,000' },
    { type: 'Professional Business Website', price: '₹25,000–₹50,000' },
    { type: 'WordPress Website', price: '₹15,000–₹45,000' },
    { type: 'E-commerce Website', price: '₹40,000–₹1,00,000+' },
    { type: 'Custom Website Development', price: '₹50,000–₹2,00,000+' },
    { type: 'Custom Web Application', price: '₹1,00,000+' }
  ];

  const faqs = [
    {
      question: 'How much do web design and development services cost in Kallakurichi?',
      answer: 'The cost depends on page count, design requirements, platform and functionality. A basic business website costs differently from a custom e-commerce platform. Share your requirements to receive an estimate.'
    },
    {
      question: 'How long does it take to develop a business website?',
      answer: 'The timeline depends on website size, features, content readiness and approvals. We can discuss the expected timeline after reviewing your requirements.'
    },
    {
      question: 'Which is better: WordPress or custom website development?',
      answer: 'WordPress suits many business and content-managed websites. Custom development is useful when specialised functionality or a unique application is required.'
    },
    {
      question: 'Do you provide mobile-responsive website design?',
      answer: 'Yes. We consider different screen sizes so visitors can use your website across smartphones, tablets and desktops.'
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Yes. We can review your existing website and discuss improvements to its layout, navigation, mobile responsiveness and content structure.'
    },
    {
      question: 'Do you offer e-commerce website development?',
      answer: 'Yes. E-commerce projects can include product pages, shopping carts, checkout and payment gateway integration, based on the agreed requirements.'
    },
    {
      question: 'Will my website be SEO-friendly?',
      answer: 'We consider page structure, headings, URLs, responsiveness and metadata setup within the project scope. Development alone cannot guarantee search rankings.'
    },
    {
      question: 'Do you serve businesses in Chennai and Coimbatore?',
      answer: 'Yes. Businesses in Chennai and Coimbatore can discuss website design, development, e-commerce and other project requirements with Balanex Technologies.'
    },
    {
      question: 'Can you develop websites for businesses across India?',
      answer: 'Yes. Suitable projects can be managed remotely through online communication, design reviews and digital file sharing.'
    },
    {
      question: 'Do you provide website maintenance after launch?',
      answer: 'Maintenance can be discussed separately or included in a project agreement. It may cover updates, backups, security checks and technical support.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Web Design and Development Services in Kallakurichi"
        subtitle="Professional Website Solutions"
        description="Looking for web design and development services in Kallakurichi? Balanex builds responsive, SEO-friendly business websites, e-commerce stores and custom websites."
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
              <p className="text-gray-700 leading-relaxed">
                Looking for professional web design and development services in Kallakurichi to take your business online? Balanex Technologies creates modern, responsive and user-friendly websites that help businesses showcase their services, connect with customers and generate enquiries.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you run a local business, manufacturing company, educational institution, retail store or startup, your website should do more than display information. It should explain what you offer, build customer confidence and make it easy for visitors to contact you.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We provide website design and development solutions for businesses in Kallakurichi, Chennai, Coimbatore and across India. From business websites to customized e-commerce platforms, we plan websites around your business goals and requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Services"
            title="Build a Professional Website That Helps Your Business Grow"
            description="Customers often search online before choosing a product or service. A professional website helps them understand your business, explore your offerings and find the information they need."
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
                <service.icon className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-heading font-bold text-midnight mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="What's Included"
            title="What Is Included in Our Website Design and Development Services?"
            description="A useful website needs design, functionality and technical elements working together."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
                <h3 className="text-lg font-heading font-bold text-midnight mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="2026 Trends"
            title="Modern Website Design and Development Trends in 2026"
            description="Website technology continues to evolve as customer expectations change."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            {trends.map((trend, index) => (
              <motion.div
                key={trend}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TrendingUp className="text-accent mb-3" size={24} />
                <h3 className="font-semibold text-midnight">{trend}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Industries We Serve"
            title="Website Solutions for Different Industries"
            description="A manufacturing website has different requirements from a school or retail website."
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

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Locations"
            title="Website Design and Development Services in Kallakurichi, Chennai and Coimbatore"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="bg-white rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <MapPin className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-heading font-bold text-midnight mb-3">Kallakurichi</h3>
              <p className="text-gray-600 text-sm">Businesses in Kallakurichi need a clear online presence. We help with business websites, rice mill and manufacturing websites, educational institution websites, clinic websites, product catalogues and e-commerce platforms.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <MapPin className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-heading font-bold text-midnight mb-3">Chennai</h3>
              <p className="text-gray-600 text-sm">Businesses in Chennai across technology, healthcare, education, manufacturing and professional services need websites. We support corporate websites, IT company websites, healthcare and educational websites, e-commerce platforms and landing pages.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <MapPin className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-heading font-bold text-midnight mb-3">Coimbatore</h3>
              <p className="text-gray-600 text-sm">Coimbatore has businesses across manufacturing, engineering, textiles, education, healthcare and retail. We plan manufacturing websites, textile business websites, product catalogues, educational websites and e-commerce platforms.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Process"
            title="Our Website Design and Development Process"
            description="We follow an organised process to keep website projects clear from planning to launch."
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
            subtitle="Why Choose Us"
            title="Why Choose Balanex Technologies for Web Design and Development?"
            description="Choosing a website development partner means finding a team that understands your business requirements."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            {[
              'Business-focused planning',
              'Design and development together',
              'Responsive design',
              'SEO-conscious development',
              'Clear communication',
              'Flexible solutions'
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="text-accent mb-3" size={24} />
                <h3 className="font-semibold text-midnight">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Pricing"
            title="Website Design and Development Cost in India"
            description="Website development cost in India depends on the number of pages, design complexity, platform and required functionality."
          />
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-lightBg rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-midnight text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Website Type</th>
                    <th className="text-right p-4 font-semibold">Indicative Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((item, index) => (
                    <tr key={item.type} className="border-t">
                      <td className="p-4 text-gray-700">{item.type}</td>
                      <td className="p-4 text-right text-accent font-semibold">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              These are indicative market estimates, not confirmed Balanex Technologies package prices. Actual quotations depend on project requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-midnight">
        <div className="container-custom text-center">
          <SectionHeading
            subtitle="Get Started"
            title="Let's Build a Professional Website for Your Business"
            description="Your website is often one of the first places potential customers visit to learn about your business. Make that experience clear, useful and professional."
            className="text-white"
          />
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <Button size="lg">Contact Balanex Technologies</Button>
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
                title="Ready to Take Your Business Online?"
                description="Whether you need a business website, e-commerce store, WordPress website, custom web application or website redesign, Balanex Technologies can help plan a solution around your requirements."
              />
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all">
                  Contact Us <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <EnquiryForm title="Website Development Enquiry" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;
