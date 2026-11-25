import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, Users, CheckCircle, ArrowRight, TrendingUp, Camera, BarChart3 } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';
import FAQAccordion from '../components/common/FAQAccordion';
import Button from '../components/common/Button';

const SocialMediaMarketing = () => {
  const services = [
    { title: 'Instagram Marketing', desc: 'We help create Instagram content such as posts, reels, stories, promotional creatives and informative captions. We also support profile presentation and content planning.' },
    { title: 'Facebook Marketing', desc: 'We help manage business page content, plan promotional posts and develop campaigns according to your marketing objectives.' },
    { title: 'Social Media Account Management', desc: 'We help businesses organise their profiles, prepare content and maintain consistent communication based on the agreed service package.' },
    { title: 'Creative Post Design', desc: 'We create promotional posters, product creatives, festival designs, service highlights and informative graphics that follow your brand identity.' },
    { title: 'Reels and Short-Form Video Content', desc: 'We help develop reel ideas, hooks, scripts and creative directions that suit your audience and platform.' },
    { title: 'Meta Ads Management', desc: 'We help plan and manage Facebook and Instagram advertising campaigns based on your budget, audience and objectives, including audience selection, creative planning, campaign setup, monitoring and optimisation.' },
    { title: 'Content Calendar and Planning', desc: 'We prepare content calendars to organise topics, formats and publishing schedules, helping your business maintain a more consistent presence.' }
  ];

  const benefits = [
    'Increase brand awareness',
    'Reach audiences relevant to your business',
    'Showcase products and services',
    'Share offers and business updates',
    'Build customer relationships',
    'Encourage enquiries and conversations',
    'Support paid advertising campaigns'
  ];

  const process = [
    { step: '1', title: 'Business Discussion', desc: 'We understand your services, goals and preferred audience.' },
    { step: '2', title: 'Profile Review', desc: 'We check your existing social media profiles and identify improvement opportunities.' },
    { step: '3', title: 'Strategy Development', desc: 'We plan content themes, communication style and suitable platforms.' },
    { step: '4', title: 'Content Creation', desc: 'We prepare creatives, captions, reels ideas and other agreed content.' },
    { step: '5', title: 'Publishing and Campaign Support', desc: 'We support regular posting and advertising activities according to the selected package.' },
    { step: '6', title: 'Performance Review', desc: 'We review available insights, engagement and campaign performance to identify improvements.' }
  ];

  const industries = [
    'Real estate and construction companies',
    'Retail and clothing shops',
    'Restaurants and food businesses',
    'Clinics and healthcare providers',
    'Schools and educational institutions',
    'Manufacturers and service providers',
    'Startups and personal brands'
  ];

  const faqs = [
    {
      question: 'Which social media platforms should my business use?',
      answer: 'It depends on your audience and industry. Instagram and Facebook are useful for many businesses, while LinkedIn or YouTube may be more suitable for certain goals.'
    },
    {
      question: 'How often should I post on social media?',
      answer: 'The right schedule depends on your content resources and audience. Consistency and content quality are more important than posting excessively.'
    },
    {
      question: 'Do you create Instagram reels?',
      answer: 'Yes. We can support reel planning and video content creation based on the selected service.'
    },
    {
      question: 'Can social media marketing generate leads?',
      answer: 'Yes. Organic content and paid campaigns can encourage enquiries, but actual results depend on the offer, audience, creative and follow-up process.'
    },
    {
      question: 'Do you manage Facebook and Instagram ads?',
      answer: 'Yes. We offer Meta Ads support based on your campaign requirements and selected package.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Social Media Marketing in Kallakurichi"
        subtitle="Make Your Business More Visible on Social Media!"
        description="At BalaNex Technologies, we provide social media marketing services in Kallakurichi to help businesses build their online presence, communicate with customers and promote their products and services."
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
                Today, customers often visit social media before deciding whether to contact a business. They look at photos, videos, customer feedback, offers and the way a company communicates online. This makes social media an important part of business marketing.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you are a small shop owner, startup, service provider or established company, we help you use social media with a clear plan instead of posting randomly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Why Social Media"
            title="Why Does Your Business Need Social Media Marketing?"
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
            title="Our Social Media Marketing Services"
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
                <MessageSquare className="text-accent mb-4" size={32} />
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
            title="Our Social Media Marketing Process"
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
            title="Which Businesses Can Benefit?"
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
            title="Let's Make Your Social Media Work for Your Business!"
            description="Your customers are spending time online. Give them a reason to discover your business, follow your updates and connect with you."
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
                title="Ready to Discuss Your Social Media Strategy?"
                description="Contact BalaNex Technologies for social media marketing services in Kallakurichi."
              />
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all">
                  Contact Us <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <EnquiryForm title="Social Media Enquiry" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMediaMarketing;
