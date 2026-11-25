import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BarChart3, Target, CheckCircle, ArrowRight, MessageSquare, Globe, Smartphone, DollarSign } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';
import FAQAccordion from '../components/common/FAQAccordion';
import Button from '../components/common/Button';

const PerformanceMarketing = () => {
  const services = [
    { title: 'Facebook and Instagram Lead Ads', desc: 'We help plan campaigns, prepare advertising creatives, define suitable audiences and set up lead forms. The form can collect relevant information such as name, phone number and enquiry requirements.' },
    { title: 'Google Ads Lead Generation', desc: 'We plan campaigns around relevant search terms and business objectives. Potential customers can contact your business through a website, call or enquiry form.' },
    { title: 'WhatsApp Lead Generation', desc: 'We can help create campaigns that encourage people to start a WhatsApp conversation with your business, making it easier for potential customers to ask questions and receive information.' },
    { title: 'Landing Page Development', desc: 'We help structure landing pages with clear headlines, useful details, benefits and enquiry options to make it easier for visitors to understand what you offer and take the next step.' },
    { title: 'Lead Form Setup', desc: 'We help create forms with relevant questions and a clear submission process, avoiding unnecessary questions to make the enquiry experience easier for potential customers.' },
    { title: 'Audience Research and Targeting', desc: 'We study your business, target market, service area and customer profile to develop an appropriate targeting strategy, reviewed according to campaign performance.' },
    { title: 'Campaign Monitoring and Optimisation', desc: 'We monitor important metrics such as spending, clicks, enquiries and cost per lead, making suitable adjustments based on available performance data.' }
  ];

  const industries = [
    'Real estate and property businesses',
    'Construction companies',
    'Educational institutions and training centres',
    'Clinics and healthcare services',
    'Retail and product businesses',
    'Manufacturing companies',
    'Professional and local service providers'
  ];

  const process = [
    { step: '1', title: 'Understand Your Business', desc: 'We learn about your products, services, target customers and business goals.' },
    { step: '2', title: 'Define the Target Audience', desc: 'We identify the people and locations that are relevant to your offering.' },
    { step: '3', title: 'Plan the Campaign', desc: 'We select suitable platforms, advertising objectives and enquiry methods.' },
    { step: '4', title: 'Create Ad Content', desc: 'We prepare headlines, descriptions, visuals and calls to action.' },
    { step: '5', title: 'Launch the Campaign', desc: 'We set up and launch the approved advertising campaign.' },
    { step: '6', title: 'Monitor and Improve', desc: 'We review campaign performance and identify opportunities for improvement.' },
    { step: '7', title: 'Review Lead Quality', desc: 'We use available feedback about enquiries to understand which campaigns are generating relevant prospects.' }
  ];

  const faqs = [
    {
      question: 'What is the difference between leads and customers?',
      answer: 'A lead is someone who has shown interest or shared an enquiry. A customer is someone who has actually purchased your product or service.'
    },
    {
      question: 'Which platform is best for lead generation?',
      answer: 'It depends on your industry and audience. Google Ads can reach people actively searching, while Meta Ads can introduce your offer to relevant audiences.'
    },
    {
      question: 'Can you generate leads through WhatsApp?',
      answer: 'Yes. Campaigns can be designed to encourage potential customers to contact your business through WhatsApp.'
    },
    {
      question: 'Are all generated leads genuine?',
      answer: 'Not every enquiry will become a qualified prospect. Lead quality depends on targeting, offer relevance, form design and follow-up.'
    },
    {
      question: 'Do you provide monthly campaign reports?',
      answer: 'Reporting can be included according to the selected package and may cover campaign spending, enquiries and other available performance metrics.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Lead Generation Services in Kallakurichi"
        subtitle="Reach Potential Customers and Generate More Business Enquiries!"
        description="At BalaNex Technologies, we provide lead generation services in Kallakurichi to help businesses reach relevant audiences and encourage potential customers to enquire about their products or services."
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
                Getting attention online is a good start, but businesses also need opportunities to connect with potential customers. You may have a great product, a useful service or an attractive offer. But if the right people don't discover it, generating enquiries can become difficult.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We use digital advertising, audience research and conversion-focused marketing activities to support your lead generation goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="What Is Lead Generation"
            title="What Is Lead Generation?"
          />
          <div className="max-w-4xl mx-auto mt-8">
            <motion.p
              className="text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Lead generation is the process of attracting people who may be interested in your products or services and encouraging them to share their contact details or make an enquiry. These enquiries become opportunities for your sales team to start a conversation and understand the customer's needs.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Services"
            title="Our Lead Generation Services"
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
                <Target className="text-accent mb-4" size={32} />
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
            subtitle="Industries"
            title="Lead Generation for Different Industries"
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
            subtitle="Our Process"
            title="Our Lead Generation Process"
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

      <section className="py-20 bg-midnight">
        <div className="container-custom text-center">
          <SectionHeading
            subtitle="Get Started"
            title="Let's Connect Your Business With Potential Customers!"
            description="The right marketing campaign can create opportunities for meaningful conversations with potential buyers."
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
                title="Ready to Discuss Your Lead Generation Requirements?"
                description="Contact BalaNex Technologies today for lead generation services in Kallakurichi."
              />
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all">
                  Contact Us <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <EnquiryForm title="Lead Generation Enquiry" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PerformanceMarketing;
