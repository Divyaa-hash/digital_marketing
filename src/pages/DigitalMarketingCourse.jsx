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
    'Understand digital marketing fundamentals and strategy',
    'Build and optimize websites using WordPress',
    'Master SEO techniques and keyword research',
    'Create compelling content for digital platforms',
    'Design graphics and edit videos with Canva',
    'Set up Google Analytics and Google Tag Manager',
    'Run effective Google Ads campaigns',
    'Execute social media marketing strategies',
    'Create and manage Meta paid advertising',
    'Implement email marketing campaigns',
    'Optimize LinkedIn profiles for professional branding',
    'Stay updated with AI tools and digital trends',
    'Explore passive income and freelancing opportunities',
    'Build a professional portfolio and resume',
    'Find and apply for digital marketing jobs'
  ];

  const whoCanJoin = [
    'Students and fresh graduates',
    'Marketing professionals',
    'Business owners and entrepreneurs',
    'Freelancers and consultants',
    'Anyone wanting to learn digital marketing',
    'Career changers entering digital field'
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
                {course.description} This comprehensive program covers all aspects of digital marketing from fundamentals to advanced strategies with practical projects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Curriculum"
            title="Course Modules"
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
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-deepPurple text-white flex items-center justify-center text-sm font-bold mr-4">
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
                      <p className="text-sm">Detailed coverage of {module} with hands-on exercises and practical examples.</p>
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
            subtitle="What You'll Learn"
            title="Learning Outcomes"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {learningOutcomes.map((outcome, index) => (
              <motion.div
                key={outcome}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BookOpen className="text-teal mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">{outcome}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Who Can Join"
            title="Target Audience"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whoCanJoin.map((item, index) => (
              <motion.div
                key={item}
                className="bg-white rounded-xl p-6 flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Users className="text-accent mr-3 flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-700">{item}</span>
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
                subtitle="Get Started"
                title="Enquire About This Course"
                description="Fill out the form to get more information about course schedule, fees, and enrollment."
              />
              <div className="mt-8 flex flex-col gap-4">
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
