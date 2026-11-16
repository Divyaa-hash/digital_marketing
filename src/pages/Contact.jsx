import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Tell Us What You're Building"
        subtitle="Contact Us"
        description="Whether you're planning a new website, exploring digital marketing, improving business processes or looking to develop new skills, we'd like to hear from you."
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                subtitle="Get in Touch"
                title="Contact Information"
                description="Reach out to us through any of these channels. We'll get back to you as soon as possible."
              />
              <div className="space-y-6 mt-8">
                <motion.div
                  className="flex items-start p-6 bg-lightBg rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Mail className="text-accent mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-midnight mb-1">Email</h3>
                    <a href="mailto:balanextechnologies@gmail.com" className="text-gray-600 hover:text-accent transition-colors">
                      balanextechnologies@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start p-6 bg-lightBg rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <Phone className="text-accent mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-midnight mb-1">Phone</h3>
                    <a href="tel:+919876543210" className="text-gray-600 hover:text-accent transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start p-6 bg-lightBg rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <MapPin className="text-accent mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-midnight mb-1">Location</h3>
                    <p className="text-gray-600">India</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start p-6 bg-green-50 rounded-xl border border-green-200"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <MessageSquare className="text-green-600 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-midnight mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            <EnquiryForm title="Send Us a Message" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
