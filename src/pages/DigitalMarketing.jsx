import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Globe, Megaphone, MessageSquare, Target, PenTool, Zap, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';

const DigitalMarketing = () => {
  const services = [
    { icon: Search, title: 'On-Page SEO', desc: 'Improve your website elements including titles, meta descriptions, headings, and content for better search rankings.' },
    { icon: Globe, title: 'Off-Page SEO', desc: 'Build brand authority through quality link building, brand mentions, and content outreach strategies.' },
    { icon: Zap, title: 'Technical SEO', desc: 'Optimize site structure, page speed, mobile responsiveness, and technical health for better crawling.' },
    { icon: MessageSquare, title: 'Local SEO', desc: 'Dominate local search results with Google Business Profile optimization and location-based targeting.' },
    { icon: Target, title: 'AI-Driven SEO', desc: 'Integrate AEO and GEO to appear in AI-generated answers, voice search, and conversational queries.' },
    { icon: BarChart3, title: 'Analytics & Reporting', desc: 'Track performance with data-driven insights and comprehensive reporting on traffic and conversions.' }
  ];

  const benefits = [
    'Long-term rankings and consistent organic traffic unlike paid ads',
    'Higher quality traffic from search intent targeting',
    'Improved brand trust and authority in your industry',
    'Better ROI compared to traditional advertising',
    'Measurable results with clear tracking and reporting',
    'Sustainable growth even after budget stops'
  ];

  const process = [
    { step: 1, title: 'Site Audit & Keyword Discovery', desc: 'We analyze your business, competitors, customer searches, and website performance to identify improvement areas.' },
    { step: 2, title: 'Strategy & Launch', desc: 'We create a customized SEO strategy and optimize content, fix technical issues, and build quality backlinks.' },
    { step: 3, title: 'Turning Visitors into Customers', desc: 'We optimize your website to encourage action - forms, purchases, or contact - focusing on real results and conversions.' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="SEO Company in Chennai"
        subtitle="Digital Marketing"
        description="Improve your online visibility and reach the right audience with strategic SEO solutions. We use data-driven SEO techniques to boost search rankings, increase organic traffic, and drive long-term business growth."
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-midnight mb-6">Why SEO Is Essential for Your Business Growth</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                In today's competitive digital landscape, having a website alone is not enough. Your business needs visibility to succeed online. We ensure your brand appears exactly when potential customers are searching.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                With over 250,000+ websites created daily and 85% of pages receiving no organic traffic, standing out on Google has become more challenging than ever. That's where a strategic Digital Marketing approach makes the difference.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Unlike paid ads that stop the moment your budget ends, SEO builds long-term rankings, trust, and consistent traffic from search engines. We leverage advanced tools like SEMrush and Ubersuggest to perform in-depth keyword research, identify high-intent opportunities, and optimize your website for sustainable growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With the right SEO and Digital Marketing strategy, your website doesn't just exist - it performs, attracts the right audience, and consistently generates quality leads in Chennai's competitive market.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Services"
            title="Comprehensive SEO Solutions"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <service.icon className="text-accent mb-4" size={32} />
                <h3 className="text-lg font-heading font-bold text-midnight mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Why SEO"
            title="Benefits for Your Business"
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
            title="Strategies That Drive Real Business Growth"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {process.map((item) => (
              <motion.div
                key={item.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.step * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-deepPurple flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-heading font-bold text-midnight mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="AI-Driven SEO"
            title="Growing Your Online Presence"
          />
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Growing your online presence today requires more than traditional SEO - it demands an AI-driven strategy that aligns with how people search and how search engines respond. As a performance-focused SEO company, we help businesses improve visibility across search engines, answer engines, and AI-powered platforms.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We go beyond standard SEO by integrating AEO (Answer Engine Optimisation) and GEO (Generative Engine Optimisation), ensuring your brand appears not just in search results, but also in AI-generated answers, voice search, and conversational queries. This approach helps you capture high-intent traffic and stay ahead in the evolving search landscape.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By combining on-page, technical, and off-page SEO with AI search optimization, we build a strong digital foundation that improves rankings, enhances user experience, and drives long-term growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="FAQ"
            title="Answers to Your Common Questions"
          />
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: 'Which SEO agency is the best in Chennai?',
                a: 'The best SEO agency is the one with proven experience, transparent reporting and ethical methods that fit your business goals. We have years of experience and have supported numerous brands. We use data-driven SEO to improve rankings, organic traffic and lead generation.'
              },
              {
                q: 'What SEO services do you offer?',
                a: 'We offer on-page SEO, off-page SEO, technical SEO and local SEO, along with AEO and GEO for AI-powered search. We start with a site audit and keyword research, then optimise content, fix technical issues and build quality backlinks. We also integrate SEO with social media, performance marketing and website development for stronger results.'
              },
              {
                q: 'How much does SEO cost per month in Chennai?',
                a: 'SEO pricing depends on your industry competition, website condition, number of target keywords and content needs. Small businesses often invest roughly ₹15,000 to ₹50,000 per month across SEO and related digital marketing services, while competitive industries need more. We review your website first and then share a clear plan with transparent costing.'
              },
              {
                q: 'How long does it take to rank on the first page of Google?',
                a: 'There is no fixed timeline, because rankings depend on competition, keyword difficulty, website quality and content. Most businesses see measurable improvements within three to six months, while competitive keywords can take longer. We set realistic milestones for each keyword group and report progress regularly instead of making unrealistic promises.'
              },
              {
                q: 'Which company is best for SEO?',
                a: 'Choose a company that explains its process, shares real results and avoids guaranteed-ranking claims. We combine strategy, technical expertise and content in one team. We tailor each SEO plan to your audience and goals, and we track success through traffic, leads and conversions.'
              },
              {
                q: 'What is the difference between on-page, off-page and technical SEO?',
                a: 'On-page SEO improves content, titles, headings, images and internal links on your pages. Off-page SEO builds authority through quality backlinks and brand mentions. Technical SEO ensures your site is fast, mobile-friendly, secure and easy for search engines to crawl and index. We work on all three together because they support each other.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-heading font-bold text-midnight mb-3">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Process"
            title="How We Deliver Results"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <motion.div
                key={item.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.step * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-deepPurple flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-heading font-bold text-midnight mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                subtitle="Reach Us"
                title="Take the Next Step Toward Digital Growth"
                description="We help businesses build a strong online presence through SEO, social media marketing, performance marketing, website development, branding, video production, and creative digital solutions tailored for real business results."
              />
              <p className="text-gray-600 mt-4 mb-8">
                Whether you are a startup, local business, or growing brand, our team is ready to create strategies that increase visibility, generate quality leads, and drive long-term success. Let's connect and grow your brand together.
              </p>
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all">
                  Contact Us <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <EnquiryForm title="Enquire About SEO Services" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;
