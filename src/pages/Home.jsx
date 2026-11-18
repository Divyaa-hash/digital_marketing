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

      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/balanex-logo.png"
                alt="BalaNex Technologies Logo"
                className="w-auto h-32 md:h-40 lg:h-48 object-contain mb-8"
              />
              <motion.p
                className="text-accent font-semibold text-sm uppercase tracking-wider mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                BM Academy · Best Training Institute
              </motion.p>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-midnight mb-6 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Best Digital Marketing Course in Chennai
              </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Learn Digital Marketing that opens doors to jobs, freelancing & business growth. Master SEO, Google Ads, Meta Ads, Content Marketing, and AI Tools through live projects. Job-ready in just 60 days.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
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
            className="mt-12 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 max-w-md mx-auto hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-midnight mb-2">Academy Offer</h3>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-3xl font-bold text-accent">₹30,000</span>
                  <span className="text-xl text-gray-400 line-through">₹50,000</span>
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">40% OFF</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
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
                    <stat.icon className="text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" size={28} />
                    <div className="text-base font-bold text-midnight mb-1 group-hover:text-accent transition-colors">{stat.value}</div>
                    <div className="text-gray-600 text-xs group-hover:text-midnight transition-colors">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-600">
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
            subtitle="Meet Our Founder"
            title="Training Shaped by Industry Experience"
          />
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
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
                  <h3 className="text-2xl font-heading font-bold text-midnight mb-2">Founder · CEO</h3>
                  <p className="text-gray-600 mb-4">
                    Bringing over 25 years of industry experience and a proven track record of delivering 300+ successful digital marketing projects. Has helped D2C brands, B2B companies, startups, and enterprises achieve measurable growth through strategic digital marketing solutions including SEO, Google Ads, Meta Ads, Content Marketing, and Performance Marketing.
                  </p>
                  <p className="text-gray-600">
                    Driven by a passion for mentoring the next generation of marketers, established BM Academy to bridge the gap between theory and real-world execution. Students learn the same practical frameworks, strategies, and industry-tested methodologies used in live client projects.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">25+</div>
                  <div className="text-sm text-gray-600">Years in Digital Marketing</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">300+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">200+</div>
                  <div className="text-sm text-gray-600">Learners Mentored</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="What You'll Learn"
            title="Step-by-step Training, Basics to Advanced"
            description="Ten real-world modules that take you from zero to job-ready."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              'Social Media Marketing',
              'SEO and Keyword Research',
              'Google Ads',
              'Meta Ads',
              'Content Marketing',
              'Email Marketing',
              'Performance Marketing',
              'Brand Marketing',
              'Graphic Design',
              'Website Development',
              'Video Editing',
              'AI Tools for Digital Marketing',
              'Analytics and Reporting',
              'Lead Generation',
              'Freelancing and Business Growth',
              'Resume Building and Interview Prep',
              'Live Projects and Case Studies'
            ].map((module, index) => (
              <motion.div
                key={module}
                className="bg-lightBg rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-midnight mb-1">{module}</h3>
                    <p className="text-xs text-gray-600">Hands-on • Live Project • Certificate</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="Tools You'll Master"
            title="Hands-on with the Tools the Industry Actually Uses"
            description="Work with the full marketing stack — from paid ad platforms and SEO suites to AI assistants."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              'Meta Ads', 'Google Ads', 'Google Analytics', 'Google Search Console',
              'Semrush', 'Microsoft Clarity', 'PageSpeed Insights', 'Screaming Frog',
              'Claude AI', 'ChatGPT', 'Google My Business', 'Ahrefs'
            ].map((tool, index) => (
              <motion.div
                key={tool}
                className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="text-3xl mb-2">🔧</div>
                <h3 className="text-sm font-semibold text-midnight">{tool}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Results That Speak"
            title="Stories from Learners Who Got Real Outcomes"
            description="Real projects, practical frameworks, and mentorship from people building brands."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Priya K.', result: 'Cracked 2 offers', desc: 'My job search felt endless after graduation. Changed that journey completely.' },
              { name: 'Arun R.', result: 'Placed in 3 weeks', desc: 'Learning in Tamil made everything easier. The AI tools module was a game-changer.' },
              { name: 'Sowmya M.', result: '4 direct interviews', desc: 'They connected me with 4 companies directly. Interview prep was thorough.' },
              { name: 'Nithya P.', result: 'Freelancer · 5 clients', desc: 'After a 6-year career break, gave me confidence to restart my career.' },
              { name: 'Samantha', result: '2 offers in 2 weeks', desc: 'Received 2 job offers within just 2 weeks. Practical training made all the difference.' },
              { name: 'Jayasri R.', result: 'First DM job', desc: 'No prior experience but practical training helped me learn quickly.' }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-lightBg rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-midnight">{testimonial.name}</h3>
                    <p className="text-sm text-accent">{testimonial.result}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">"{testimonial.desc}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="container-custom">
          <SectionHeading
            subtitle="FAQ"
            title="Everything You Need to Know Before Enrolling"
          />
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: 'Do I need any prior experience to join this course?',
                a: 'No. This program is built for complete beginners. The only requirements are basic English and a willingness to learn. No technical background, no prior knowledge, and no coding experience needed.'
              },
              {
                q: 'What will I learn in this course?',
                a: 'You will master SEO, Google Ads, Meta Ads, Content Marketing, Social Media Marketing, Email Marketing, Performance Marketing, Brand Marketing, Graphic Design, Website Development, Video Editing, AI Tools for Digital Marketing, Analytics and Reporting, Lead Generation, Freelancing and Business Growth, Resume Building and Interview Prep, and Live Projects.'
              },
              {
                q: 'How long is the course?',
                a: 'The program is 60 days with classes 3 days per week, 2 hours per session. Live online with real projects.'
              },
              {
                q: 'What languages are available?',
                a: 'Classes are conducted in both Tamil and English.'
              },
              {
                q: 'Do you provide placement support?',
                a: 'Yes, we provide placement support, resume and LinkedIn preparation, mock interview prep, and connect you with companies for direct interviews.'
              },
              {
                q: 'Can I learn while working?',
                a: 'Yes, the schedule is designed for working professionals with flexible timing and part-payment options.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
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
