import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import { courses } from '../data/courses';

const Academy = () => {
  const learningJourney = ['Learn', 'Practice', 'Build', 'Gain Experience', 'Grow'];

  const features = [
    { icon: BookOpen, title: 'Practical Learning', desc: 'Hands-on training with real-world projects and case studies.' },
    { icon: Users, title: 'Expert Guidance', desc: 'Learn from experienced instructors with industry knowledge.' },
    { icon: Briefcase, title: 'Career Support', desc: 'Guidance on building portfolios and finding opportunities.' },
    { icon: CheckCircle, title: 'Industry Relevant', desc: 'Curriculum updated to match current industry requirements.' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Learn Skills. Build Projects. Move Forward."
        subtitle="BM Academy by BalaNex"
        description="BM Academy is the learning and career-development division of BalaNex Technologies. We aim to help students and professionals build practical knowledge in digital marketing, SAP, AI and automation."
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="About BM Academy"
            title="Learn • Build • Grow"
          />
          <div className="max-w-4xl mx-auto">
            <motion.p
              className="text-lg text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              BM Academy is dedicated to providing practical, industry-relevant training that prepares learners for real-world challenges. Our courses are designed to bridge the gap between theoretical knowledge and practical application.
            </motion.p>
            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Whether you're a student looking to start your career or a professional wanting to upgrade your skills, our programs are structured to help you achieve your goals.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Learning Journey"
            title="How You'll Learn"
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {learningJourney.map((step, index) => (
              <motion.div
                key={step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electricBlue to-deepPurple flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-white font-semibold">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Courses"
            title="Available Training Programs"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white text-sm font-medium bg-electricBlue/90 px-3 py-1 rounded-full">
                      {course.modules.length} Modules
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-midnight mb-2 group-hover:text-electricBlue transition-colors">{course.title}</h3>
                  <p className="text-electricBlue font-medium text-sm mb-3">{course.tagline}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{course.description}</p>
                  <Link to={course.route} className="text-electricBlue font-medium inline-flex items-center group-hover:gap-2 transition-all">
                    View Course <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Why Choose Us"
            title="Academy Features"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <feature.icon className="text-electricBlue mb-4" size={32} />
                <h3 className="text-lg font-heading font-bold text-midnight mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-midnight via-deepPurple to-electricBlue">
        <div className="container-custom text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Start Learning?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Explore our courses and take the first step towards building practical skills.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a href="#courses" className="inline-block bg-white text-midnight px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all">
              Browse Courses
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academy;
