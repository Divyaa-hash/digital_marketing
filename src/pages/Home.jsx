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
              BM Academy · Best Training Institute
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Best Digital Marketing Course in Chennai
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Learn Digital Marketing that opens doors to jobs, freelancing & business growth. Master SEO, Google Ads, Meta Ads, Content Marketing, and AI Tools through live projects. Job-ready in just 60 days.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/academy">
                <Button size="lg">Explore Curriculum</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Claim Offer</Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 max-w-4xl mx-auto hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">Academy Offer</h3>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-3xl font-bold text-lightAccent">₹30,000</span>
                  <span className="text-xl text-gray-400 line-through">₹50,000</span>
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">40% OFF</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: BookOpen, label: 'Live Online', value: 'Real Projects' },
                  { icon: Target, label: '3 Days/Week', value: '2 Hours class' },
                  { icon: Zap, label: '60 Days', value: 'Program Duration' },
                  { icon: Users, label: 'Tamil & English', value: 'Languages' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <stat.icon className="text-lightAccent mx-auto mb-2 group-hover:scale-110 transition-transform" size={32} />
                    <div className="text-lg font-bold text-white mb-1 group-hover:text-lightAccent transition-colors">{stat.value}</div>
                    <div className="text-gray-300 text-sm group-hover:text-white transition-colors">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
                  <span>✓ Complete AI Digital Marketing curriculum</span>
                  <span>✓ SEO, Google Ads, Meta Ads, Content & AI Tools</span>
                  <span>✓ Live projects & 5 industry certificates</span>
                  <span>✓ Resume, LinkedIn & mock interview prep</span>
                  <span>✓ Placement & freelance support</span>
                </div>
              </div>
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
            subtitle="Who It's For"
            title="Digital Marketing Training That Fits Your Goals"
            description="Whether you're a student, fresher, working professional, homemaker, business owner, or someone looking for a career change — this course helps you learn practical digital marketing skills and grow with confidence."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '💼', title: 'Career Switchers', desc: 'Perfect for professionals looking to move into digital marketing and build a rewarding career with in-demand skills.' },
              { icon: '🎓', title: 'Freshers', desc: 'Learn digital marketing from the ground up with hands-on projects, practical assignments, and industry-ready training.' },
              { icon: '📚', title: 'Students', desc: 'Gain valuable digital marketing skills, work on real campaigns, and strengthen your resume before graduation.' },
              { icon: '💻', title: 'Freelancers', desc: 'Learn how to attract clients, deliver results, and grow a successful freelance digital marketing career.' },
              { icon: '🏪', title: 'Business Owners', desc: 'Use digital marketing to generate leads, increase brand visibility, and grow your business online.' },
              { icon: '🏠', title: 'Homemakers', desc: 'Restart your career, explore freelance opportunities, or build a work-from-home income with digital marketing.' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="p-6 rounded-xl bg-lightBg hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-heading font-bold text-midnight mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-midnight">
        <div className="container-custom">
          <SectionHeading
            subtitle="Why Our Course Stands Out"
            title="Turn What You Learn into Work-Ready Skills"
            description="We don't just teach and stop. You'll work on practical assignments, live projects, and real-world marketing activities."
            className="text-white"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-12">
            {[
              { icon: '🔧', title: 'Learn by Doing', desc: 'Work on real campaigns instead of just theory.' },
              { icon: '🎯', title: 'Expert Mentorship', desc: 'Learn directly from industry professionals.' },
              { icon: '👥', title: 'Batch Learning', desc: 'Get personal attention and doubt clearing.' },
              { icon: '♾️', title: 'Lifetime Access', desc: 'Revisit content anytime, forever.' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Industries We Serve"
            title="Digital Solutions for Every Business"
            description="We work with diverse industries, understanding their unique challenges and delivering tailored solutions."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.slice(0, 10).map((industry, index) => (
              <motion.div
                key={industry.id}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <industry.icon className="text-accent mx-auto mb-3" size={28} />
                <h3 className="text-sm font-semibold text-midnight">{industry.title}</h3>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/industries">
              <Button variant="secondary">View All Industries</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="BM Academy"
            title="Learn • Build • Grow"
            description="Acquire practical skills in digital marketing, SAP, AI and automation with our comprehensive training programs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.slice(0, 4).map((course, index) => (
              <motion.div
                key={course.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-heading font-bold text-midnight mb-2 group-hover:text-accent transition-colors">{course.title}</h3>
                  <p className="text-accent font-medium text-xs mb-3">{course.tagline}</p>
                  <Link to={course.route} className="text-accent font-medium inline-flex items-center group-hover:gap-2 transition-all text-sm">
                    Explore <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/academy">
              <Button>Visit BM Academy</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Frequently Asked Questions"
            title="Got Questions? We've Got Answers"
          />
          <div className="max-w-3xl mx-auto">
            {faqData.map((category) => (
              <FAQAccordion key={category.category} category={category.category} questions={category.questions} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-midnight via-secondary to-accent">
        <div className="container-custom text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Become a Job-Ready Digital Marketer?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join the next batch and master SEO, Google Ads, Meta Ads, AI Tools and more. Seats are limited - enroll today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/contact">
              <Button size="lg">Enroll Now on WhatsApp</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
