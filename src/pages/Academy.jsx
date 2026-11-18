import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
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
        title="Best Digital Marketing Course in Chennai"
        subtitle="BM Academy · Best Training Institute"
        description="Learn Digital Marketing that opens doors to jobs, freelancing & business growth. Master SEO, Google Ads, Meta Ads, Content Marketing, and AI Tools through live projects. Job-ready in just 60 days."
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-midnight mb-6">Academy Offer</h2>
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className="text-4xl font-bold text-accent">₹30,000</span>
                <span className="text-2xl text-gray-400 line-through">₹50,000</span>
                <span className="bg-accent text-white px-4 py-2 rounded-full text-lg font-semibold">40% OFF</span>
              </div>
              <div className="bg-lightBg rounded-2xl p-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: BookOpen, label: 'Live Online', value: 'Real Projects' },
                    { icon: Users, label: '3 Days/Week', value: '2 Hours class' },
                    { icon: CheckCircle, label: '60 Days', value: 'Program Duration' },
                    { icon: Briefcase, label: 'Tamil & English', value: 'Languages' }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <stat.icon className="text-accent mx-auto mb-2" size={32} />
                      <div className="text-lg font-bold text-midnight mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-8">
                <span>✓ Complete AI Digital Marketing curriculum</span>
                <span>✓ SEO, Google Ads, Meta Ads, Content & AI Tools</span>
                <span>✓ Live projects & 5 industry certificates</span>
                <span>✓ Resume, LinkedIn & mock interview prep</span>
                <span>✓ Placement & freelance support</span>
              </div>
              <Link to="/academy/digital-marketing">
                <Button size="lg">Explore Curriculum</Button>
              </Link>
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

      <section className="py-20 bg-lightBg">
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
                    <span className="text-white text-sm font-medium bg-accent/90 px-3 py-1 rounded-full">
                      {course.modules.length} Modules
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-midnight mb-2 group-hover:text-accent transition-colors">{course.title}</h3>
                  <p className="text-accent font-medium text-sm mb-3">{course.tagline}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{course.description}</p>
                  <Link to={course.route} className="text-accent font-medium inline-flex items-center group-hover:gap-2 transition-all">
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
                <feature.icon className="text-accent mb-4" size={32} />
                <h3 className="text-lg font-heading font-bold text-midnight mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
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
