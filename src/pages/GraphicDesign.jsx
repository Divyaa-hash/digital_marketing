import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PenTool, Palette, CheckCircle, ArrowRight, TrendingUp, MapPin, Clock, DollarSign } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';
import FAQAccordion from '../components/common/FAQAccordion';
import Button from '../components/common/Button';

const GraphicDesign = () => {
  const services = [
    {
      icon: Palette,
      title: 'Logo Design and Brand Identity',
      description: 'Custom logo design, brand colour selection, typography, logo variations and visual identity elements for startups and established businesses.'
    },
    {
      icon: PenTool,
      title: 'Social Media Graphic Design',
      description: 'Instagram and Facebook posts, promotional creatives, festival designs, Instagram stories, LinkedIn creatives, YouTube thumbnails and advertising creatives.'
    },
    {
      icon: Palette,
      title: 'Brochure and Flyer Design',
      description: 'Business brochures, company profiles, product catalogues, promotional flyers, service brochures and event leaflets with clear layouts.'
    },
    {
      icon: PenTool,
      title: 'Business Card and Stationery',
      description: 'Business cards, letterheads, envelopes, company ID cards, corporate stationery and digital business cards following your brand identity.'
    },
    {
      icon: Palette,
      title: 'Banner and Poster Design',
      description: 'Advertising banners, event posters, retail offer banners, promotional posters, digital campaign banners and exhibition graphics.'
    },
    {
      icon: PenTool,
      title: 'Packaging and Product Design',
      description: 'Product labels, packaging artwork, box and pouch designs, product information layouts and brand elements based on printer specifications.'
    },
    {
      icon: Palette,
      title: 'Website and Digital Graphics',
      description: 'Website banners, landing page visuals, display advertising banners, email marketing graphics, presentation designs and infographics.'
    }
  ];

  const trends = [
    'AI-assisted creative workflows',
    'Bold typography',
    'Minimalist designs with vibrant colours',
    'Hand-drawn illustrations and organic textures',
    '3D graphics',
    'Regional and culture-inspired designs',
    'Motion graphics'
  ];

  const industries = [
    'Retail and e-commerce',
    'Restaurants and food businesses',
    'Healthcare',
    'Education',
    'Real estate',
    'Startups and IT companies',
    'Manufacturing businesses'
  ];

  const process = [
    { step: '1', title: 'Understanding Your Requirements', desc: 'We discuss your business, target audience, design preferences, project objectives and where the designs will be used.' },
    { step: '2', title: 'Research and Creative Planning', desc: 'We review your brand identity, design references and project requirements before deciding on a creative direction.' },
    { step: '3', title: 'Design Development', desc: 'We develop design concepts based on the agreed scope, focusing on layout, colours, typography, images and visual consistency.' },
    { step: '4', title: 'Feedback and Refinement', desc: 'You can review the proposed designs and share feedback. We make the agreed changes to bring the final design closer to your expectations.' },
    { step: '5', title: 'Final Design Delivery', desc: 'After approval, we prepare the final designs in the required digital or print-ready formats based on the project scope.' }
  ];

  const pricing = [
    { service: 'Logo Design', price: '₹2,000–₹10,000' },
    { service: 'Basic Brand Identity', price: '₹5,000–₹20,000' },
    { service: 'Social Media Post Design', price: '₹300–₹1,000 per design' },
    { service: 'Social Media Design Package', price: '₹3,000–₹10,000 per month' },
    { service: 'Brochure and Flyer Design', price: '₹1,500–₹8,000' },
    { service: 'Business Card Design', price: '₹500–₹2,000' },
    { service: 'Banner and Poster Design', price: '₹500–₹3,000' },
    { service: 'Product Packaging Design', price: '₹3,000–₹15,000+' },
    { service: 'Website and Digital Marketing Graphics', price: '₹500–₹3,000 per design' },
    { service: 'Complete Branding Package', price: '₹15,000–₹50,000+' }
  ];

  const faqs = [
    {
      question: 'How much do graphic design services cost in India?',
      answer: 'The cost depends on the design type, project complexity, number of creatives and customisation requirements. A logo, brochure and monthly social media package have different pricing. Contact us for a project-specific quote.'
    },
    {
      question: 'How do I choose a graphic design company in Kallakurichi?',
      answer: 'Look for a company that understands your requirements, shares relevant design samples, communicates clearly and can deliver the formats you need. Reviewing genuine previous work can help you evaluate its design approach.'
    },
    {
      question: 'Do you provide graphic design services in Chennai and Coimbatore?',
      answer: 'Yes. We support businesses looking for graphic design services in Chennai, Coimbatore and other locations. Projects can be discussed and managed remotely.'
    },
    {
      question: 'Can I get a custom logo for my business?',
      answer: 'Yes. We can create logo concepts based on your business name, industry, audience and brand preferences.'
    },
    {
      question: 'Do you design social media posts for businesses?',
      answer: 'Yes. We create Instagram, Facebook and LinkedIn graphics, including promotional posts, announcements, offer creatives and business updates.'
    },
    {
      question: 'Do you provide both digital and print graphic design?',
      answer: 'Yes. We work on digital graphics such as social media posts and website banners, as well as print materials such as brochures, flyers, business cards and posters.'
    },
    {
      question: 'How long does a graphic design project take?',
      answer: 'The timeline depends on the type and complexity of the design. A simple creative may take less time than a complete brand identity or multi-page brochure. We discuss the expected timeline before starting.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Graphic Design Services in Kallakurichi"
        subtitle="Professional Creative Solutions"
        description="Looking for graphic design services in Kallakurichi? Balanex Technologies creates logos, branding, social media creatives, brochures and custom designs for businesses across India."
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
                A good design does more than make your business look attractive. It helps people recognise your brand, understand what you offer and remember your business. Whether you are starting a company, promoting products or building an online presence, professional visuals can make a difference.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At Balanex Technologies, we provide professional graphic design services in Kallakurichi to help businesses communicate their ideas through clear, creative and meaningful designs. From logo creation and brand identity to social media posts, brochures, banners and marketing materials, we create designs based on your business requirements.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We also support businesses looking for graphic design services in Chennai, Coimbatore and across India. Whether you need a single creative or a complete set of branding materials, our focus is on designs that represent your business and connect with your target audience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Services"
            title="Professional Graphic Design Services for Growing Businesses"
            description="Your logo, website, advertisements, social media posts and printed materials all contribute to how customers recognise your brand."
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
            subtitle="2026 Trends"
            title="Latest Graphic Design Trends in 2026 for Indian Businesses"
            description="Graphic design continues to evolve as customer preferences, digital platforms and creative tools change."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            {trends.map((trend, index) => (
              <motion.div
                key={trend}
                className="bg-lightBg rounded-xl p-6 hover:shadow-lg transition-all duration-300"
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

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Industries We Serve"
            title="Graphic Design Solutions for Different Industries"
            description="Different industries communicate with customers in different ways."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
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

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Locations"
            title="Graphic Design Services in Kallakurichi, Chennai and Coimbatore"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="bg-lightBg rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <MapPin className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-heading font-bold text-midnight mb-3">Kallakurichi</h3>
              <p className="text-gray-600 text-sm">Local businesses need designs that represent their products and services clearly. We support retail shops, restaurants, educational institutions, clinics and startups with professional visuals.</p>
            </motion.div>
            <motion.div
              className="bg-lightBg rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <MapPin className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-heading font-bold text-midnight mb-3">Chennai</h3>
              <p className="text-gray-600 text-sm">Businesses in Chennai operate across IT, retail, healthcare, education, real estate and manufacturing. We support Chennai businesses with logo design, corporate branding, brochures and social media graphics.</p>
            </motion.div>
            <motion.div
              className="bg-lightBg rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <MapPin className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-heading font-bold text-midnight mb-3">Coimbatore</h3>
              <p className="text-gray-600 text-sm">Coimbatore has a diverse business environment that includes manufacturing, textiles, education, retail and startups. We provide graphic design solutions for product packaging, catalogues and corporate brochures.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Process"
            title="Our Graphic Design Process"
            description="A clear design process helps keep projects organised and reduces confusion during development."
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
            subtitle="Why Choose Us"
            title="Why Choose Balanex Technologies for Graphic Design Services?"
            description="Choosing a graphic design partner is about finding a team that understands your business."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            {[
              'Custom design solutions',
              'Consistent brand identity',
              'Business-focused creativity',
              'Digital and print solutions',
              'Industry-specific understanding',
              'Flexible project requirements'
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                className="bg-lightBg rounded-xl p-6 hover:shadow-lg transition-all duration-300"
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

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Pricing"
            title="Graphic Design Pricing in India: What Affects the Cost?"
            description="The cost of graphic design services in India depends on the type of design, project complexity, number of creatives and customisation requirements."
          />
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-midnight text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Graphic Design Service</th>
                    <th className="text-right p-4 font-semibold">Estimated Cost in India</th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((item, index) => (
                    <tr key={item.service} className="border-t">
                      <td className="p-4 text-gray-700">{item.service}</td>
                      <td className="p-4 text-right text-accent font-semibold">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Note: These are indicative market estimates, not confirmed Balanex Technologies package prices. Actual pricing may vary based on project scope, design complexity and delivery requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-midnight">
        <div className="container-custom text-center">
          <SectionHeading
            subtitle="Get Started"
            title="Give Your Business a Professional Look with Balanex Technologies"
            description="Your business deserves designs that communicate its value and create a consistent impression across customer touchpoints."
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
            title="Frequently Asked Questions About Graphic Design Services"
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
                title="Ready to Discuss Your Project?"
                description="Contact us to discuss your graphic design requirements and get a project quotation."
              />
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all">
                  Contact Us <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <EnquiryForm title="Graphic Design Enquiry" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GraphicDesign;
