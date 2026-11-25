import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Users, Zap, Heart, Eye, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="One Vision. Two Divisions. Endless Opportunities to Grow."
        subtitle="Innovate • Guide • Grow • Succeed"
        description="At BalaNex, we believe growth comes from the right ideas, the right technology and the willingness to keep learning."
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
                At BalaNex, we believe growth comes from the right ideas, the right technology and the willingness to keep learning.
                We bring together digital marketing, technology solutions, AI-powered automation and practical education under one vision — helping businesses move forward and helping individuals build skills for their future.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Through our two divisions, BalaNex Technologies and BM Academy by BalaNex, we work towards two important goals: supporting business growth and developing future-ready professionals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Two Divisions"
            title="One Vision. Two Divisions."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-heading font-bold text-midnight mb-2">1. BalaNex Technologies</h3>
              <p className="text-accent font-semibold mb-4">Digital Growth & Technology Solutions</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We help businesses build a stronger online presence, connect with the right audience and turn digital opportunities into meaningful results.
                From marketing and website development to AI solutions and automation, we focus on understanding each business's needs and finding practical ways to help it grow.
              </p>
              <div className="border-t pt-4 mt-4">
                <h4 className="font-semibold text-midnight mb-3">What we do:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start"><CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={16} />Digital Marketing: SEO, Local SEO, Google Ads, Meta Ads and Social Media Marketing.</li>
                  <li className="flex items-start"><CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={16} />Lead Generation & Performance Marketing: Campaigns designed to attract relevant enquiries and improve results.</li>
                  <li className="flex items-start"><CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={16} />Website Design & Development: Business websites, landing pages and website improvements.</li>
                  <li className="flex items-start"><CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={16} />AI Solutions: AI-powered tools, chatbots and marketing automation.</li>
                  <li className="flex items-start"><CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={16} />Workflow Automation: n8n automation, API integration and process improvements.</li>
                  <li className="flex items-start"><CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={16} />Digital Strategy & Analytics: Marketing strategy, performance tracking and business growth consulting.</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-heading font-bold text-midnight mb-2">2. BM Academy by BalaNex</h3>
              <p className="text-accent font-semibold mb-4">Practical Learning & Career Development</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                BM Academy is the learning and career development division of BalaNex. We help students, freshers, job seekers and aspiring professionals develop skills that are useful in today's workplace.
                We believe learning becomes more valuable when people get the chance to practise what they learn. That's why our focus goes beyond theory, with an emphasis on practical knowledge, hands-on projects and career guidance.
              </p>
              <div className="border-t pt-4 mt-4">
                <h4 className="font-semibold text-midnight mb-3">Our learning areas include:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start"><CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={16} />Digital Marketing, SEO and Local SEO.</li>
                  <li className="flex items-start"><CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={16} />Google Ads, Meta Ads and Social Media Marketing.</li>
                  <li className="flex items-start"><CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={16} />Lead Generation, Content Strategy and Marketing Analytics.</li>
                  <li className="flex items-start"><CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={16} />AI Tools, Prompt Engineering and AI-powered Marketing.</li>
                  <li className="flex items-start"><CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={16} />n8n Automation and Productivity Tools.</li>
                  <li className="flex items-start"><CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={16} />Freelancing, Personal Branding and Professional Skills.</li>
                  <li className="flex items-start"><CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={16} />Practical Projects, Internships and Workshops.</li>
                  <li className="flex items-start"><CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={16} />Career Guidance, Mentorship and Interview Preparation.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Leadership"
            title="Balamurugan M. - Founder & Managing Director"
          />
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-lightBg rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center mx-auto">
                    <Users className="text-white" size={64} />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    BalaNex is led by Balamurugan M., Founder & Managing Director, with hands-on experience in Digital Marketing, Performance Marketing, SEO, AI Marketing, Lead Generation and Marketing Analytics.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Over the course of his professional journey, he has worked with 30+ brands across different industries, including Real Estate, Education, Healthcare, Construction, Retail, Engineering, Travel and other service-based businesses. This experience has shaped his approach to understanding business needs and creating marketing strategies around real goals.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    His professional portfolio features selected campaign results, including a best reported ROAS of 134X, a lowest reported cost per lead of ₹19.90 and campaign revenue reported up to ₹1.20 crore.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    He has also trained 13+ students and guided 10+ career mentees, helping them improve their digital marketing knowledge, prepare for interviews and understand practical industry requirements.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    With an M.E. in Artificial Intelligence & Machine Learning and a B.E. in Computer Science & Engineering, he brings together a technical background and practical experience in digital marketing.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Approach"
            title="We don't believe in one-size-fits-all solutions."
            description="Every business has different goals, and every learner has a different starting point. We take the time to understand those needs and focus on steady, meaningful progress."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-heading font-bold text-midnight mb-4">For Businesses</h4>
              <p className="text-gray-600 text-lg font-semibold">Research → Strategy → Execute → Measure → Optimize → Scale</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-heading font-bold text-midnight mb-4">For Learners</h4>
              <p className="text-gray-600 text-lg font-semibold">Learn → Practice → Build → Gain Experience → Grow</p>
            </motion.div>
          </div>
          <div className="max-w-4xl mx-auto mt-8">
            <p className="text-gray-700 text-center leading-relaxed">
              Whether we're helping a business improve its digital performance or supporting someone who is starting a career, our focus remains on practical work, continuous improvement and long-term growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Vision & Mission"
            title="Let's Build Something That Moves You Forward!"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            <motion.div
              className="bg-lightBg rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Eye className="text-accent mb-4" size={40} />
              <h3 className="text-xl font-heading font-bold text-midnight mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To build a trusted brand that brings together digital innovation, business growth and professional education — creating better opportunities for businesses and individuals.
              </p>
            </motion.div>
            <motion.div
              className="bg-lightBg rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Target className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-heading font-bold text-midnight mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To help businesses grow through effective digital and technology solutions, while preparing individuals with practical skills, industry knowledge and the confidence to pursue their career goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-midnight">
        <div className="container-custom text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            BalaNex
          </motion.h2>
          <motion.p
            className="text-2xl text-lightAccent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Innovate • Guide • Grow • Succeed
          </motion.p>
          <motion.p
            className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Building Digital Solutions. Empowering Future Careers.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/contact">
              <Button size="lg">Contact BalaNex</Button>
            </Link>
            <Link to="/academy">
              <Button variant="outline" size="lg">Explore BM Academy</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
