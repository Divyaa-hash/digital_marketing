import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sparkles, Zap, Target, BookOpen } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/common/Button';
import SectionHeading from '../components/common/SectionHeading';

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

      <Footer />
    </div>
  );
};

export default Home;
