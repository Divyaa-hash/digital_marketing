import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Target, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      industry: 'E-commerce',
      title: 'Digital Marketing Campaign for Online Retailer',
      subtitle: 'Client Draft Data - Not Yet Verified',
      challenge: 'The client needed to increase online sales and improve ROI from advertising spend.',
      objective: 'Achieve high return on ad spend while acquiring quality customers.',
      strategy: 'Implemented targeted Google Ads and Meta Ads campaigns with optimized landing pages.',
      execution: 'Created ad creatives, set up conversion tracking, and continuously optimized campaigns based on performance data.',
      results: 'Draft figures provided by client show positive performance. Metrics pending verification and evidence.',
      learnings: 'Continuous optimization and data-driven decisions are key to campaign success.',
      status: 'draft'
    },
    {
      id: 2,
      industry: 'Education',
      title: 'Lead Generation for Educational Institution',
      subtitle: 'Client Draft Data - Not Yet Verified',
      challenge: 'The institution needed to increase student enrollments for their programs.',
      objective: 'Generate qualified leads at a sustainable cost per acquisition.',
      strategy: 'Developed multi-channel lead generation strategy using Google Ads and social media marketing.',
      execution: 'Set up targeted campaigns, created compelling ad copy, and implemented lead nurturing workflows.',
      results: 'Draft figures provided by client show improved lead generation. Metrics pending verification and evidence.',
      learnings: 'Targeted messaging and proper lead qualification improve conversion rates.',
      status: 'draft'
    },
    {
      id: 3,
      industry: 'Local Business',
      title: 'Local SEO and Google Ads Campaign',
      subtitle: 'Client Draft Data - Not Yet Verified',
      challenge: 'A local business needed to increase visibility and attract more customers in their area.',
      objective: 'Improve local search presence and drive foot traffic to the business.',
      strategy: 'Implemented local SEO optimization and targeted Google Ads campaigns for the local area.',
      execution: 'Optimized Google Business Profile, created location-based ad campaigns, and tracked conversions.',
      results: 'Draft figures provided by client show strong performance. Metrics pending verification and evidence.',
      learnings: 'Local targeting combined with organic optimization yields best results for local businesses.',
      status: 'draft'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="The Work Behind the Growth."
        subtitle="Case Studies"
        description="See how we've helped businesses achieve their digital marketing and growth objectives."
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Work"
            title="Selected Case Studies"
          />
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="bg-lightBg rounded-2xl p-8 lg:p-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  {study.status === 'draft' && (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                      Draft - Pending Verification
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-heading font-bold text-midnight mb-2">{study.title}</h3>
                <p className="text-accent font-medium mb-6">{study.industry}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-midnight mb-2 flex items-center">
                        <Target className="mr-2 text-accent" size={20} />
                        Challenge
                      </h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-midnight mb-2 flex items-center">
                        <TrendingUp className="mr-2 text-accent" size={20} />
                        Objective
                      </h4>
                      <p className="text-gray-600">{study.objective}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-midnight mb-2 flex items-center">
                        <CheckCircle className="mr-2 text-accent" size={20} />
                        Strategy
                      </h4>
                      <p className="text-gray-600">{study.strategy}</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-midnight mb-2">Execution</h4>
                      <p className="text-gray-600">{study.execution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-midnight mb-2">Results</h4>
                      <p className="text-gray-600">{study.results}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-midnight mb-2">Key Learnings</h4>
                      <p className="text-gray-600">{study.learnings}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-midnight">
        <div className="container-custom text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Want Results Like These?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's discuss how we can help you achieve your business goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/contact">
              <button className="bg-gradient-to-r from-secondary via-accent to-lightAccent text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-accent/30 hover:scale-105 transition-all">
                Get in Touch
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
