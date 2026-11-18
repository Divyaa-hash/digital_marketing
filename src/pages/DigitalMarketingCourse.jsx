import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, BookOpen, Target, Users, ArrowRight, MessageSquare } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';
import { courses } from '../data/courses';

const DigitalMarketingCourse = () => {
  const course = courses.find(c => c.id === 'digital-marketing');
  const [openModule, setOpenModule] = useState(null);

  const toggleModule = (index) => {
    setOpenModule(openModule === index ? null : index);
  };

  const learningOutcomes = [
    'Master SEO, Google Ads, Meta Ads, Content Marketing, and AI Tools',
    'Work on real campaigns instead of just theory',
    'Learn directly from industry professionals',
    'Get personal attention and doubt clearing in batch learning',
    'Get lifetime access to course content',
    'Work on practical assignments and live projects',
    'Receive 5 industry certificates upon completion',
    'Get resume, LinkedIn & mock interview preparation',
    'Receive placement & freelance support',
    'Job-ready in just 60 days with hands-on training'
  ];

  const whoCanJoin = [
    'Career Switchers - Professionals looking to move into digital marketing',
    'Freshers - Learn digital marketing from the ground up with hands-on projects',
    'Students - Gain valuable digital marketing skills and strengthen your resume',
    'Freelancers - Learn how to attract clients and grow a successful freelance career',
    'Business Owners - Use digital marketing to generate leads and grow your business',
    'Homemakers - Restart your career with work-from-home opportunities'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title={course.title}
        subtitle="BM Academy Course"
        description={course.tagline}
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-midnight mb-6">Course Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {course.description} Complete AI Digital Marketing curriculum with SEO, Google Ads, Meta Ads, Content & AI Tools. Includes live projects, 5 industry certificates, resume & LinkedIn preparation, and placement support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Who It's For"
            title="Digital Marketing Training That Fits Your Goals"
            description="Whether you're a student, fresher, working professional, homemaker, business owner, or someone looking for a career change — this course helps you learn practical digital marketing skills and grow with confidence."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
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
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
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

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="What You'll Learn"
            title="Step-by-step training, basics to advanced"
            description="Ten real-world modules that take you from zero to job-ready."
          />
          <div className="max-w-4xl mx-auto space-y-4">
            {course.modules.map((module, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => toggleModule(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-secondary text-white flex items-center justify-center text-sm font-bold mr-4">
                      {index + 1}
                    </span>
                    <span className="font-semibold text-midnight">{module}</span>
                  </div>
                  {openModule === index ? <ChevronUp className="text-accent" /> : <ChevronDown className="text-accent" />}
                </button>
                <AnimatePresence>
                  {openModule === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 pt-0 text-gray-600"
                    >
                      <p className="text-sm">Hands-on training with live projects, practical assignments, and industry-tested methodologies used in real client campaigns.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Why Our Course Stands Out"
            title="Turn What You Learn into Work-Ready Skills"
            description="We don't just teach and stop. You'll work on practical assignments, live projects, and real-world marketing activities."
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
                className="bg-lightBg rounded-xl p-6 hover:shadow-lg transition-all duration-300"
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

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                subtitle="Ready to Start?"
                title="Become a Job-Ready Digital Marketer"
                description="Join the next batch and master SEO, Google Ads, Meta Ads, AI Tools and more. Seats are limited - enroll today."
              />
              <div className="mt-8 space-y-4">
                <div className="bg-lightBg rounded-xl p-6">
                  <h4 className="font-semibold text-midnight mb-2">Program Details</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 60-day program duration</li>
                    <li>• 3 days/week, 2 hours class</li>
                    <li>• Live online with real projects</li>
                    <li>• Tamil & English languages</li>
                    <li>• 3 part easy payments available</li>
                  </ul>
                </div>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-600 font-medium hover:gap-2 transition-all">
                  <MessageSquare className="mr-2" size={20} />
                  Enquire via WhatsApp
                </a>
                <Link to="/academy" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all">
                  <ArrowRight size={16} className="mr-1" />
                  Back to Academy
                </Link>
              </div>
            </div>
            <EnquiryForm title="Course Enquiry" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketingCourse;
