import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';

const TermsConditions = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Terms and Conditions"
        subtitle="Legal"
        description="Please read these terms and conditions carefully before using our website and services."
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
              <p className="text-sm text-gray-500 mb-8">Last updated: January {currentYear}</p>

              <h2 className="text-2xl font-heading font-bold text-midnight mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                These Terms and Conditions govern your use of the BalaNex Technologies website and services. By accessing or using our website, you agree to be bound by these terms.
              </p>

              <h2 className="text-2xl font-heading font-bold text-midnight mb-4">Services</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                BalaNex Technologies provides digital marketing, AI automation, web development, business growth consulting, and training services through BM Academy. Specific service terms will be provided in individual service agreements.
              </p>

              <h2 className="text-2xl font-heading font-bold text-midnight mb-4">User Responsibilities</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a user of our website and services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use our services for lawful purposes only</li>
                <li>Not attempt to interfere with website functionality</li>
                <li>Respect intellectual property rights</li>
                <li>Maintain confidentiality of account credentials</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-midnight mb-4">Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                All content on this website, including text, graphics, logos, images, and software, is the property of BalaNex Technologies or its content suppliers and is protected by intellectual property laws.
              </p>

              <h2 className="text-2xl font-heading font-bold text-midnight mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                BalaNex Technologies shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or services. Our liability is limited to the maximum extent permitted by applicable law.
              </p>

              <h2 className="text-2xl font-heading font-bold text-midnight mb-4">Training Services (BM Academy)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Specific terms for training programs include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Course fees and payment terms will be specified at enrollment</li>
                <li>We do not guarantee job placement or employment</li>
                <li>Certification availability depends on course and provider requirements</li>
                <li>Internship opportunities are subject to availability and performance</li>
                <li>Course schedules may be modified with prior notice</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-midnight mb-4">Privacy</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Your use of our website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.
              </p>

              <h2 className="text-2xl font-heading font-bold text-midnight mb-4">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We reserve the right to modify these terms at any time. Continued use of our website after changes constitutes acceptance of the updated terms.
              </p>

              <h2 className="text-2xl font-heading font-bold text-midnight mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <p className="text-gray-600">
                Email: balanextechnologies@gmail.com<br />
                Phone: +91 98765 43210
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;
