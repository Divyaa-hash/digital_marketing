import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Gem, CheckCircle, ArrowRight, Clock, TrendingUp, Palette, FileText, Target, Layers } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';
import FAQAccordion from '../components/common/FAQAccordion';
import Button from '../components/common/Button';

const Branding = () => {
  const services = [
    { title: 'Brand Strategy and Positioning', desc: 'Brand strategy defines how your business should be presented to its target audience. We identify your unique value, brand personality and the message you want customers to remember.' },
    { title: 'Logo Design and Brand Identity', desc: 'Your logo is often one of the first visual elements customers associate with your business. We create memorable, relevant and easy-to-recognise identities suitable for websites, social media, business cards, packaging and advertisements.' },
    { title: 'Brand Colours and Typography', desc: 'Colours and fonts influence how customers experience your brand. We help select a suitable brand colour palette and typography system that reflects your identity.' },
    { title: 'Brand Guidelines and Visual Identity System', desc: 'Brand guidelines explain how your visual identity should be used across different platforms. They help your team, designers and marketing partners maintain a consistent brand appearance.' },
    { title: 'Business Stationery and Corporate Branding', desc: 'We design business cards, letterheads, envelopes, company profiles and other corporate branding materials that follow your visual identity.' },
    { title: 'Packaging and Product Branding', desc: 'Packaging is an important part of the customer experience. We focus on visual presentation, product information, brand consistency and customer expectations.' },
    { title: 'Social Media and Digital Branding', desc: 'We create social media templates, promotional graphics, digital advertisements and other creative assets that follow your brand colours, typography and visual style.' },
    { title: 'Website and Marketing Material Branding', desc: 'We help maintain visual consistency across website designs, brochures, presentations, banners and other marketing materials.' },
    { title: 'Brand Refresh and Rebranding Services', desc: 'A brand refresh improves selected visual elements while retaining familiar features. Rebranding involves a broader change that may include the logo, colours, messaging and overall identity.' }
  ];

  const process = [
    { step: '1', title: 'Understanding Your Business', desc: 'We discuss your products, services, target audience, industry and branding goals.' },
    { step: '2', title: 'Market and Competitor Research', desc: 'We review your market and identify opportunities to make your brand distinct.' },
    { step: '3', title: 'Creative Direction', desc: 'We develop suitable design concepts based on your brand personality and requirements.' },
    { step: '4', title: 'Visual Identity Development', desc: 'We create the logo and supporting visual elements.' },
    { step: '5', title: 'Review and Refinement', desc: 'We collect feedback and make agreed changes to refine the designs.' },
    { step: '6', title: 'Final Delivery', desc: 'We provide approved design files and the agreed branding materials.' }
  ];

  const benefits = [
    'Build recognition among target customers',
    'Present a professional and organised image',
    'Communicate products and services clearly',
    'Differentiate your business from competitors',
    'Maintain consistency across marketing channels',
    'Create a strong foundation for future marketing activities'
  ];

  const industries = [
    'Startups and small businesses',
    'Retail and e-commerce',
    'Restaurants and food businesses',
    'Healthcare and clinics',
    'Educational institutions',
    'Real estate and construction',
    'Manufacturing and B2B businesses'
  ];

  const trends = [
    { title: 'AI-Assisted Branding and Creative Design', desc: 'AI tools can support brainstorming, visual exploration and early concept development. Designers can use them to explore creative directions more efficiently.' },
    { title: 'Digital-First Brand Identity', desc: 'Logos and visual elements should remain clear and adaptable across smaller screens and different digital formats.' },
    { title: 'Regional Language and Local Branding', desc: 'Regional language communication can make a brand more familiar to local audiences. Businesses targeting Tamil Nadu can use Tamil messaging and locally relevant design elements.' },
    { title: 'Short-Form Video and Motion Branding', desc: 'Animated logos, branded Reels and short promotional videos give businesses additional ways to communicate their identity.' },
    { title: 'Minimal and Flexible Logo Systems', desc: 'Simple and adaptable logos can work across websites, social media profiles, packaging and printed materials.' },
    { title: 'Consistent and Responsible Branding', desc: 'Using consistent colours, typography and messaging across digital and physical channels creates a familiar brand experience.' }
  ];

  const locations = [
    { title: 'Branding Company in Kallakurichi', desc: 'Local businesses need a professional identity that helps customers recognise their products and services. Our branding services in Kallakurichi support shops, startups, educational institutions, restaurants and other businesses.' },
    { title: 'Branding Agency in Chennai', desc: 'Businesses in Chennai operate across competitive industries and customer segments. We help them develop consistent brand identities and creative materials that support their marketing and business communication goals.' },
    { title: 'Branding Services in Coimbatore', desc: 'From manufacturing companies to retail businesses and startups, organisations in Coimbatore have different branding requirements. Our solutions help create visual identities that can be used across websites, business communication and digital platforms.' },
    { title: 'Branding Solutions Across India', desc: 'Businesses serving customers in multiple locations need a consistent identity across their communication channels. We support branding projects for companies across India with solutions based on their target audiences, industry and project requirements.' }
  ];

  const faqs = [
    {
      question: 'What are branding services, and why does my business need them?',
      answer: 'Branding services help businesses create a recognisable identity through strategy, logo design, colours, typography and marketing materials. They help communicate what your business represents and maintain consistency across customer interactions.'
    },
    {
      question: 'What is included in a complete brand identity package?',
      answer: 'A complete package may include logo variations, colour palettes, typography, brand messaging, visual elements and brand guidelines. Business cards, packaging and social media designs can also be included depending on project requirements.'
    },
    {
      question: 'How much do branding services cost in India?',
      answer: 'The cost depends on whether you need a logo, basic brand identity or complete branding solution. Design complexity, research requirements and the number of deliverables also influence pricing.'
    },
    {
      question: 'How long does it take to create a brand identity?',
      answer: 'The timeline depends on project scope, design requirements and feedback. A basic logo project generally requires less work than a complete identity with guidelines and multiple marketing assets.'
    },
    {
      question: 'What is the difference between logo design and branding?',
      answer: 'Logo design focuses on creating a visual symbol or wordmark. Branding is broader and includes strategy, messaging, colours, typography and the overall identity customers experience.'
    },
    {
      question: 'Can a small business in Kallakurichi benefit from professional branding?',
      answer: 'Yes. Professional branding helps small businesses present their products and services clearly, maintain a consistent image and become easier for customers to recognise.'
    },
    {
      question: 'When should a business consider rebranding?',
      answer: 'A business may consider rebranding when its audience, products, services or market position changes, or when its existing identity no longer represents the business effectively.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Branding Services in Kallakurichi"
        subtitle="Build a Memorable Business Identity"
        description="Looking for professional Branding Services in Kallakurichi to create a memorable identity for your business? BalaNex Technologies helps businesses build strong brands through logo design, brand strategy, visual identity, packaging design and creative solutions."
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
                Your brand is more than a logo or business name. It represents how customers recognise your business, understand your products or services and remember you. A consistent brand identity helps your business communicate professionally across websites, social media, advertisements, packaging and other customer touchpoints.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                At BalaNex Technologies, we develop branding solutions based on your business goals, target audience and industry. Whether you are launching a startup, improving an existing identity or preparing to expand your business, we help create a visual identity that reflects what makes your brand different.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We provide branding support for businesses in Kallakurichi, Chennai and Coimbatore, as well as companies across India through remote consultations and digital design delivery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Build Strong Brand"
            title="Build a Strong Brand Identity That Customers Remember"
          />
          <div className="max-w-4xl mx-auto mt-8">
            <motion.p
              className="text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              A strong brand helps customers understand what your business offers and what makes it different from competitors. It creates a consistent impression whenever someone interacts with your business. Effective branding starts with understanding business requirements. It brings together brand positioning, visual design and communication to create an identity that customers can recognise.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Services"
            title="Our Branding Services for Businesses"
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
            subtitle="Complete Brand Identity"
            title="What Does a Complete Brand Identity Include?"
          />
          <div className="max-w-4xl mx-auto mt-8">
            <motion.p
              className="text-gray-700 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              A complete brand identity combines different visual and communication elements to create a recognisable business image. The deliverables depend on your requirements and selected branding scope.
            </motion.p>
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ul className="space-y-3">
                {['Brand positioning: A clear direction that communicates your business value and target audience.', 'Logo variations: Primary and secondary logos for different backgrounds and applications.', 'Brand colour palette: Defined colours for consistent visual communication.', 'Typography system: Font styles for headings, body text and supporting materials.', 'Brand messaging: Key messages and communication style that represent your business.', 'Visual elements: Icons, patterns and supporting graphic styles.', 'Brand guidelines: Instructions for applying the identity across different platforms.', 'Marketing assets: Agreed digital and print materials such as business cards, brochures and social media templates.'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-accent mr-3 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Branding Trends"
            title="Branding Trends Shaping Indian Businesses in 2026"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {trends.map((trend, index) => (
              <motion.div
                key={trend.title}
                className="bg-lightBg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TrendingUp className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-heading font-bold text-midnight mb-3">{trend.title}</h3>
                <p className="text-gray-600 text-sm">{trend.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Industries"
            title="Branding Solutions for Different Industries"
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
            title="Branding Services in Kallakurichi, Chennai and Coimbatore"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {locations.map((location, index) => (
              <motion.div
                key={location.title}
                className="bg-lightBg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Layers className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-heading font-bold text-midnight mb-3">{location.title}</h3>
                <p className="text-gray-600 text-sm">{location.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Process"
            title="Our Branding Process: From Business Idea to Brand Identity"
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
            subtitle="Consistent Branding"
            title="Why Is Consistent Branding Important for Business Growth?"
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
            subtitle="Why Choose Us"
            title="Why Choose BalaNex Technologies for Branding Services?"
          />
          <div className="max-w-4xl mx-auto mt-8">
            <motion.p
              className="text-gray-700 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Choosing a branding partner means finding a team that understands your business and can turn your ideas into useful creative designs. At BalaNex Technologies, we focus on:
            </motion.p>
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ul className="space-y-3">
                {['Business-focused design: Creative concepts based on your goals, audience and industry.', 'Customised brand identity: Designs developed around your business requirements rather than a one-size-fits-all approach.', 'Consistent visual communication: Brand elements designed to work across digital and print materials.', 'Multiple creative services: Support for logo design, packaging, stationery and social media graphics.', 'Local market understanding: Branding support for businesses in Kallakurichi, Chennai and Coimbatore.', 'Clear project deliverables: Agreed design assets, file formats and project requirements before final delivery.'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-accent mr-3 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Pricing"
            title="Branding Cost in India: What Should Businesses Expect?"
          />
          <div className="max-w-4xl mx-auto mt-8">
            <motion.p
              className="text-gray-700 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Branding costs depend on the type of project, design complexity and number of deliverables. The following table provides indicative branding price ranges in India for budget planning.
            </motion.p>
            <motion.div
              className="overflow-x-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <table className="w-full bg-lightBg rounded-xl overflow-hidden shadow-lg">
                <thead className="bg-midnight text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading font-bold">Branding Service</th>
                    <th className="px-6 py-4 text-left font-heading font-bold">Estimated Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Basic Logo Design', '₹2,000–₹8,000'],
                    ['Professional Logo Design', '₹5,000–₹15,000'],
                    ['Basic Brand Identity Package', '₹8,000–₹20,000'],
                    ['Complete Brand Identity', '₹15,000–₹40,000'],
                    ['Brand Guidelines', '₹5,000–₹15,000'],
                    ['Business Card and Stationery Design', '₹1,000–₹5,000'],
                    ['Brochure and Company Profile Design', '₹2,000–₹10,000'],
                    ['Product Packaging Design', '₹3,000–₹15,000+'],
                    ['Social Media Branding Package', '₹3,000–₹10,000'],
                    ['Complete Branding and Rebranding', '₹25,000–₹60,000+']
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-gray-200">
                      <td className="px-6 py-4 text-gray-700">{row[0]}</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
            <motion.p
              className="text-gray-600 text-sm mt-4 italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              These are indicative market estimates, not confirmed BalaNex Technologies package prices. Actual costs may vary based on project scope, number of concepts, design complexity, deliverables and revision requirements.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Cost Factors"
            title="Factors That Affect Branding Costs"
          />
          <div className="max-w-4xl mx-auto mt-8">
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ul className="space-y-3">
                {['Project scope: A logo project differs from a complete brand identity or rebranding project.', 'Research and strategy: Market research, competitor analysis and brand positioning can add to the project scope.', 'Design complexity: Custom illustrations, logo variations and detailed design systems may require additional work.', 'Number of deliverables: Packaging, stationery, social media templates and marketing materials affect the overall cost.', 'Brand guidelines: Detailed documentation requires additional planning and design work.', 'Revisions and timelines: The agreed revision limits and delivery schedule can influence pricing.'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-accent mr-3 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-midnight">
        <div className="container-custom text-center">
          <SectionHeading
            subtitle="Get Started"
            title="Build a Memorable Brand with BalaNex Technologies"
            description="Your brand should communicate what makes your business valuable and give customers a reason to remember it. A consistent identity helps your business present itself professionally across websites, social media, packaging and marketing materials."
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
                description="Contact BalaNex Technologies to discuss your branding requirements and create a brand identity that reflects your business."
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
