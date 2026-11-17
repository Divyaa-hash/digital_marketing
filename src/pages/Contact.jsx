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
        title="Enroll in the Best Digital Marketing Course"
        subtitle="Contact Us"
        description="Ready to start your digital marketing career? Talk to us on WhatsApp to confirm your seat, ask questions, and complete enrollment for the next batch."
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                subtitle="Join The Program"
                title="Start Your Digital Marketing Career"
                description="Seats are limited. Enroll today and start mastering AI-powered digital marketing with real projects, expert mentorship, and job-focused training."
              />
              <div className="space-y-6 mt-8">
                <div className="bg-lightBg rounded-xl p-6">
                  <h4 className="font-semibold text-midnight mb-4">Program Details</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Next batch: Starting soon</li>
                    <li>• 60-day program duration</li>
                    <li>• 3 days/week, 2 hours class</li>
                    <li>• Live online with real projects</li>
                    <li>• Tamil & English languages</li>
                    <li>• 3 part easy payments available</li>
                  </ul>
                </div>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-600 font-medium hover:gap-2 transition-all">
                  <MessageSquare className="mr-2" size={20} />
                  Enroll Now on WhatsApp
                </a>
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

export default Contact;
