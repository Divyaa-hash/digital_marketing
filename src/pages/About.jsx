import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Users, Zap, Heart, Eye, Lightbulb, ArrowRight } from 'lucide-react';
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
        title="Technology, Creativity and Growth – Working Together"
        subtitle="About Us"
        description="BalaNex Technologies is a digital solutions and technology company helping businesses strengthen their online presence, improve operations and explore new opportunities through digital innovation."
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
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                At BalaNex Technologies, we believe in the power of digital transformation. We help businesses navigate the complex digital landscape with confidence, providing comprehensive solutions that drive growth and efficiency.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our team combines technical expertise with creative thinking to deliver solutions that not only meet today's needs but also prepare businesses for tomorrow's challenges. From digital marketing to AI automation, from web development to business growth strategies, we offer end-to-end support for your digital journey.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We also believe in empowering individuals with practical skills through BM Academy, our learning division focused on digital marketing, SAP, AI and automation training.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Purpose"
            title="Vision & Mission"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Eye className="text-accent mb-4" size={40} />
              <h3 className="text-2xl font-heading font-bold text-midnight mb-4">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become a trusted technology and digital growth partner for businesses and learners, enabling them to achieve their full potential in the digital world.
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Target className="text-secondary mb-4" size={40} />
              <h3 className="text-2xl font-heading font-bold text-midnight mb-4">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To help businesses grow digitally and empower individuals with practical, future-ready skills that open new career opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="What We Stand For"
            title="Core Values"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lightbulb, title: 'Innovation', desc: 'We embrace new ideas and technologies to deliver cutting-edge solutions.' },
              { icon: Heart, title: 'Integrity', desc: 'We maintain transparency and honesty in all our interactions.' },
              { icon: Users, title: 'Collaboration', desc: 'We believe in working together to achieve shared success.' },
              { icon: Zap, title: 'Excellence', desc: 'We strive for the highest quality in everything we do.' }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="p-6 rounded-xl bg-lightBg hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <value.icon className="text-accent mb-4" size={32} />
                <h3 className="text-lg font-heading font-bold text-midnight mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-midnight">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Approach"
            title="Working Philosophy"
            description="We follow a systematic approach to ensure clarity, efficiency and exceptional results."
            className="text-white"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {['Understand', 'Strategize', 'Build', 'Automate', 'Measure', 'Grow'].map((step, index) => (
              <motion.div
                key={step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-white font-semibold">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Why Choose Us"
            title="The BalaNex Advantage"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Holistic Solutions', desc: 'We offer comprehensive digital services under one roof, saving you time and ensuring consistency.' },
              { title: 'Expert Team', desc: 'Our team brings together diverse expertise in marketing, technology, automation and business growth.' },
              { title: 'Custom Approach', desc: 'We don\'t believe in one-size-fits-all. Every solution is tailored to your specific needs.' },
              { title: 'Proven Results', desc: 'Our strategies are data-driven and focused on delivering measurable outcomes.' },
              { title: 'Continuous Support', desc: 'We build long-term partnerships and provide ongoing support for your digital initiatives.' },
              { title: 'Learning Focus', desc: 'Through BM Academy, we also help individuals build practical skills for career growth.' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-heading font-bold text-midnight mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
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
            Let's Build Something Great Together
          </motion.h2>
          <motion.p
            className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Whether you're looking to grow your business or develop new skills, we're here to help.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/contact">
              <Button size="lg">Get in Touch</Button>
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
