import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sparkles, Zap, Target, Users, BookOpen, MessageSquare, ArrowUpRight } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/common/Button';
import SectionHeading from '../components/common/SectionHeading';
import FAQAccordion from '../components/common/FAQAccordion';
import { services } from '../data/services';
import { industries } from '../data/industries';
import { courses } from '../data/courses';
import { faqData } from '../data/faq';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-midnight via-secondary to-accent pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-lightAccent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-lightAccent font-semibold text-sm uppercase tracking-wider mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              BALANEX TECHNOLOGIES
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-4 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              INNOVATE • AUTOMATE • ELEVATE
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              Building Digital Solutions. Empowering Future Careers.
            </motion.h2>
            <motion.p
              className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We help businesses grow through innovative digital marketing, website development, AI and automation solutions. We also empower students and professionals with practical skills, industry-oriented training and career development opportunities.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/services">
                <Button size="lg">Explore Our Services</Button>
              </Link>
              <Link to="/academy">
                <Button variant="outline" size="lg">Explore BM Academy</Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-heading font-bold text-white mb-4">One Vision. Two Divisions.</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <h4 className="text-2xl font-heading font-bold text-white mb-2">BalaNex Technologies</h4>
                <p className="text-gray-300 mb-4">Digital Marketing | Web Development | AI & Automation | Business Growth</p>
                <Link to="/services">
                  <Button size="lg" className="w-full">Explore Business Solutions →</Button>
                </Link>
              </motion.div>
              <motion.div
                className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                <h4 className="text-2xl font-heading font-bold text-white mb-2">BM Academy by BalaNex</h4>
                <p className="text-gray-300 mb-4">Digital Marketing | SAP | AI | Practical Training | Internships</p>
                <Link to="/academy">
                  <Button variant="outline" size="lg" className="w-full">Explore Academy →</Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Solutions"
            title="Everything You Need to Grow"
            description="Comprehensive digital solutions designed to help your business thrive in the modern digital landscape."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <ArrowUpRight className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-heading font-bold text-midnight mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <Link to={service.route} className="text-accent font-medium inline-flex items-center group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Why Choose BalaNex?"
            title="One Vision. Two Divisions. One Destination: Growth."
            description="BalaNex Technologies – Innovate • Automate • Elevate"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-12">
            {[
              { icon: Sparkles, title: 'Two Specialized Divisions', desc: 'Business solutions and professional education under one brand.' },
              { icon: Zap, title: 'Innovation & Technology', desc: 'Modern technologies, AI tools and automation solutions.' },
              { icon: Target, title: 'Growth-Oriented Approach', desc: 'Practical strategies focused on business and career growth.' },
              { icon: BookOpen, title: 'Practical Learning', desc: 'Skill development, hands-on projects and career guidance.' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-lightBg rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="text-accent mb-4" size={32} />
                <h3 className="text-lg font-heading font-bold text-midnight mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-2xl font-heading font-bold text-midnight">One Vision. Two Divisions. One Destination: Growth.</p>
            <p className="text-lg text-accent mt-2">BalaNex Technologies – Innovate • Automate • Elevate</p>
            <p className="text-lg text-accent">BM Academy – Learn • Build • Grow</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="About Us"
            title="One Vision. Two Divisions. Endless Opportunities to Grow."
            description="Innovate • Guide • Grow • Succeed"
          />
          <div className="max-w-4xl mx-auto mt-8">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                At BalaNex, we believe growth comes from the right ideas, the right technology and the willingness to keep learning.
                We bring together digital marketing, technology solutions, AI-powered automation and practical education under one vision — helping businesses move forward and helping individuals build skills for their future.
                Through our two divisions, BalaNex Technologies and BM Academy by BalaNex, we work towards two important goals: supporting business growth and developing future-ready professionals.
              </p>
              <div className="border-t pt-6 mt-6">
                <h4 className="text-xl font-heading font-bold text-midnight mb-4">Our Two Divisions</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-accent mb-2">1. BalaNex Technologies</h5>
                    <p className="text-gray-600 text-sm">Digital Growth & Technology Solutions</p>
                    <p className="text-gray-600 text-sm mt-1">We help businesses build a stronger online presence, connect with the right audience and turn digital opportunities into meaningful results.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-accent mb-2">2. BM Academy by BalaNex</h5>
                    <p className="text-gray-600 text-sm">Practical Learning & Career Development</p>
                    <p className="text-gray-600 text-sm mt-1">We help students, freshers, job seekers and aspiring professionals develop skills that are useful in today's workplace.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-midnight">
        <div className="container-custom">
          <SectionHeading
            subtitle="Meet Our Leadership"
            title="Balamurugan M. - Founder & Managing Director"
            className="text-white"
          />
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
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
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Balamurugan M. - Founder & Managing Director</h3>
                  <p className="text-gray-300 mb-4">
                    His professional journey includes working with more than 30 brands across industries such as real estate, education, healthcare, construction, retail, engineering and travel.
                    His selected campaign portfolio includes reported performance figures such as 134X ROAS, a cost per lead of ₹19.90 and campaign revenue of up to ₹1.20 crore.
                  </p>
                  <p className="text-gray-300">
                    He has also trained more than 13 students and guided over 10 career mentees, helping them understand digital marketing and prepare for professional opportunities.
                    With an M.E. in Artificial Intelligence and Machine Learning and a B.E. in Computer Science and Engineering, he brings together technical knowledge and practical marketing experience.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">30+</div>
                  <div className="text-sm text-gray-300">Brands Worked With</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">13+</div>
                  <div className="text-sm text-gray-300">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">10+</div>
                  <div className="text-sm text-gray-300">Career Mentees Guided</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Approach"
            title="Understand, Plan, Execute and Improve"
            description="We don't believe in using the same approach for every business or learner."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            <motion.div
              className="bg-lightBg rounded-xl p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-heading font-bold text-midnight mb-4">For Businesses</h4>
              <p className="text-gray-600">Research → Strategy → Execute → Measure → Optimise → Grow</p>
            </motion.div>
            <motion.div
              className="bg-lightBg rounded-xl p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-heading font-bold text-midnight mb-4">For Learners</h4>
              <p className="text-gray-600">Learn → Practise → Build → Gain Experience → Grow</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Vision & Mission"
            title="Let's Build Something That Moves You Forward!"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-heading font-bold text-midnight mb-4">Our Vision</h4>
              <p className="text-gray-600">To build a trusted brand that brings together digital innovation, business growth and professional education — creating better opportunities for businesses and individuals.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-xl font-heading font-bold text-midnight mb-4">Our Mission</h4>
              <p className="text-gray-600">To help businesses grow through effective digital and technology solutions, while preparing individuals with practical skills, industry knowledge and the confidence to pursue their career goals.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-midnight">
        <div className="container-custom">
          <SectionHeading
            subtitle="Frequently Asked Questions"
            title="Common Questions About BalaNex"
            className="text-white"
          />
          <div className="max-w-3xl mx-auto mt-8">
            <FAQAccordion
              faqs={[
                {
                  question: 'What services does BalaNex Technologies offer?',
                  answer: 'BalaNex Technologies offers digital marketing, SEO, Local SEO, Google Ads, Meta Ads, social media marketing, lead generation, website development, branding, video production, AI solutions and workflow automation.'
                },
                {
                  question: 'Is BalaNex Technologies a digital marketing company in Kallakurichi?',
                  answer: 'Yes. BalaNex Technologies provides digital marketing and technology solutions for businesses in Kallakurichi, with support for suitable projects in other locations.'
                },
                {
                  question: 'What is BM Academy by BalaNex?',
                  answer: 'BM Academy is the learning and career development division of BalaNex. It focuses on practical training, technology skills, digital marketing, internships and career guidance.'
                },
                {
                  question: 'Who can join BM Academy?',
                  answer: 'Students, freshers, job seekers and aspiring professionals interested in developing digital marketing and technology-related skills can explore the available learning programmes.'
                }
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom text-center">
          <SectionHeading
            subtitle="Get Started"
            title="Let's Build Something That Moves You Forward!"
            description="Whether you want to grow your business online or develop practical skills for your career, BalaNex brings digital solutions and learning opportunities together under one vision."
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg">Contact BalaNex</Button>
            </Link>
            <Link to="/academy">
              <Button variant="outline" size="lg">Explore BM Academy</Button>
            </Link>
          </div>
          <div className="mt-12">
            <p className="text-2xl font-heading font-bold text-midnight">BalaNex Technologies – Innovate. Automate. Elevate.</p>
            <p className="text-xl font-heading font-bold text-accent mt-2">BM Academy by BalaNex – Learn. Build. Grow.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
