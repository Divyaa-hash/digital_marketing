import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';

const PrivacyPolicy = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Privacy Policy"
        subtitle="Legal"
        description="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
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
                BalaNex Technologies ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-heading font-bold text-midnight mb-4">Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect information about you in various ways, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Personal information you provide directly (name, email, phone number, company details)</li>
                <li>Information collected through enquiry forms and contact submissions</li>
                <li>Usage data and analytics information</li>
                <li>Device and browser information</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-midnight mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Respond to your enquiries and provide requested services</li>
                <li>Improve our website and services</li>
                <li>Communicate with you about our products and services</li>
                <li>Analyze usage patterns and trends</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-midnight mb-4">Data Security</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure.
              </p>

              <h2 className="text-2xl font-heading font-bold text-midnight mb-4">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-midnight mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
