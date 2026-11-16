import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';

const BlogDetail = () => {
  const { id } = useParams();

  const blogPosts = {
    1: {
      title: 'Getting Started with Digital Marketing: A Complete Guide',
      category: 'Digital Marketing Guides',
      date: 'January 15, 2024',
      readTime: '8 min read',
      content: `
        <p class="mb-4">Digital marketing has become an essential component of business growth in today's digital age. Whether you're a small business owner or a marketing professional, understanding the fundamentals of digital marketing is crucial for success.</p>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">What is Digital Marketing?</h3>
        <p class="mb-4">Digital marketing encompasses all marketing efforts that use an electronic device or the internet. Businesses leverage digital channels such as search engines, social media, email, and websites to connect with current and prospective customers.</p>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">Key Components of Digital Marketing</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Search Engine Optimization (SEO)</li>
          <li>Content Marketing</li>
          <li>Social Media Marketing</li>
          <li>Pay-Per-Click (PPC) Advertising</li>
          <li>Email Marketing</li>
          <li>Affiliate Marketing</li>
        </ul>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">Creating Your Digital Marketing Strategy</h3>
        <p class="mb-4">A successful digital marketing strategy starts with understanding your target audience, setting clear goals, and choosing the right channels to reach them. It's important to measure your results and continuously optimize your approach.</p>
        
        <p class="mb-4">Remember, digital marketing is not a one-time effort but an ongoing process of learning, testing, and improving to achieve your business objectives.</p>
      `
    },
    2: {
      title: 'SEO Best Practices for 2024',
      category: 'SEO Tips',
      date: 'January 10, 2024',
      readTime: '6 min read',
      content: `
        <p class="mb-4">Search Engine Optimization (SEO) continues to evolve, and staying updated with the latest best practices is essential for maintaining and improving your search rankings.</p>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">Core SEO Fundamentals</h3>
        <p class="mb-4">The foundation of good SEO hasn't changed much - quality content, technical optimization, and building authority remain key pillars of success.</p>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">2024 SEO Trends</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Focus on user experience (UX) signals</li>
          <li>Optimize for voice search</li>
          <li>Embrace E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)</li>
          <li>Mobile-first indexing is now standard</li>
          <li>AI-generated content considerations</li>
        </ul>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">Technical SEO Checklist</h3>
        <p class="mb-4">Ensure your website is fast, mobile-friendly, has clean URL structure, proper meta tags, and is easily crawlable by search engines.</p>
      `
    },
    3: {
      title: 'Google Ads Campaign Optimization Tips',
      category: 'Google Ads',
      date: 'January 5, 2024',
      readTime: '5 min read',
      content: `
        <p class="mb-4">Google Ads can be a powerful tool for driving targeted traffic to your website, but optimization is key to maximizing your return on investment.</p>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">Campaign Structure</h3>
        <p class="mb-4">Start with a well-organized campaign structure. Separate campaigns by product, service, or target audience to maintain clear focus and better control over budgets.</p>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">Ad Copy Best Practices</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Include relevant keywords in your headlines</li>
          <li>Highlight unique selling propositions</li>
          <li>Use clear call-to-actions</li>
          <li>A/B test different ad variations</li>
        </ul>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">Bidding Strategies</h3>
        <p class="mb-4">Choose the right bidding strategy based on your goals - whether it's maximizing clicks, conversions, or targeting a specific cost per acquisition.</p>
      `
    },
    4: {
      title: 'Meta Advertising Strategies for Better Results',
      category: 'Meta Ads',
      date: 'January 2, 2024',
      readTime: '7 min read',
      content: `
        <p class="mb-4">Meta advertising (Facebook and Instagram) offers powerful targeting options to reach your ideal audience. Here's how to make the most of your campaigns.</p>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">Audience Targeting</h3>
        <p class="mb-4">Meta's targeting capabilities are extensive. Use demographic, interest, and behavior targeting to reach the right people. Consider creating custom audiences and lookalike audiences for better results.</p>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">Creative Best Practices</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Use eye-catching visuals</li>
          <li>Keep text minimal and impactful</li>
          <li>Test different ad formats</li>
          <li>Use video content for higher engagement</li>
        </ul>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">Campaign Optimization</h3>
        <p class="mb-4">Regularly review your campaign performance, pause underperforming ads, and scale what's working. Use Meta's analytics tools to gain insights into audience behavior.</p>
      `
    },
    5: {
      title: 'AI Tools Transforming Digital Marketing',
      category: 'AI Tools',
      date: 'December 28, 2023',
      readTime: '6 min read',
      content: `
        <p class="mb-4">Artificial Intelligence is revolutionizing digital marketing, offering new ways to personalize experiences, automate tasks, and make data-driven decisions.</p>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">AI for Content Creation</h3>
        <p class="mb-4">AI-powered tools can help generate blog posts, social media content, and ad copy. These tools can save time and provide inspiration, though human oversight remains important.</p>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">AI in Analytics</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Predictive analytics for forecasting</li>
          <li>Customer behavior analysis</li>
          <li>Automated reporting</li>
          <li>Sentiment analysis</li>
        </ul>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">Chatbots and Customer Service</h3>
        <p class="mb-4">AI chatbots can handle customer inquiries 24/7, providing instant responses and freeing up your team for more complex tasks.</p>
      `
    },
    6: {
      title: 'Introduction to n8n Workflow Automation',
      category: 'n8n Automation',
      date: 'December 20, 2023',
      readTime: '10 min read',
      content: `
        <p class="mb-4">n8n is a powerful workflow automation tool that lets you connect different apps and services to automate repetitive tasks without coding.</p>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">What is n8n?</h3>
        <p class="mb-4">n8n is an open-source workflow automation tool that allows you to visually create workflows connecting various applications and services. It's designed to be easy to use while remaining powerful and flexible.</p>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">Getting Started</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Install n8n (self-hosted or cloud)</li>
          <li>Connect your apps and services</li>
          <li>Create your first workflow</li>
          <li>Test and deploy</li>
        </ul>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">Common Use Cases</h3>
        <p class="mb-4">n8n can automate lead management, social media posting, email campaigns, data synchronization, and much more. The possibilities are nearly endless.</p>
      `
    },
    7: {
      title: 'Business Growth Strategies for 2024',
      category: 'Business Growth',
      date: 'December 15, 2023',
      readTime: '8 min read',
      content: `
        <p class="mb-4">Growing a business in 2024 requires a combination of digital strategies, customer focus, and operational efficiency.</p>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">Digital Presence</h3>
        <p class="mb-4">A strong digital presence is no longer optional. Ensure your website is optimized, your social media is active, and you're leveraging digital marketing channels effectively.</p>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">Customer Experience</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Focus on customer satisfaction</li>
          <li>Implement feedback loops</li>
          <li>Personalize interactions</li>
          <li>Build loyalty programs</li>
        </ul>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">Data-Driven Decisions</h3>
        <p class="mb-4">Use analytics to understand customer behavior, track performance, and make informed decisions about where to invest your resources.</p>
      `
    },
    8: {
      title: 'SAP Career Path: Opportunities and Growth',
      category: 'SAP Learning',
      date: 'December 10, 2023',
      readTime: '7 min read',
      content: `
        <p class="mb-4">SAP skills are in high demand across industries. Understanding the career opportunities and growth potential in the SAP ecosystem can help you plan your professional development.</p>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">SAP Career Paths</h3>
        <p class="mb-4">SAP offers various career paths including functional consultants, technical consultants, developers, architects, and project managers. Each path requires different skills and offers unique opportunities.</p>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">Skills in Demand</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>SAP S/4HANA expertise</li>
          <li>SAP Fiori development</li>
          <li>Cloud integration skills</li>
          <li>Industry-specific knowledge</li>
        </ul>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">Certification and Growth</h3>
        <p class="mb-4">SAP certifications can validate your skills and open doors to better opportunities. Continuous learning and staying updated with new SAP technologies is essential for career growth.</p>
      `
    },
    9: {
      title: 'Building a Successful Career in Digital Marketing',
      category: 'Career Development',
      date: 'December 5, 2023',
      readTime: '9 min read',
      content: `
        <p class="mb-4">Digital marketing offers diverse career opportunities for those willing to learn and adapt to this rapidly evolving field.</p>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">Career Options in Digital Marketing</h3>
        <p class="mb-4">From SEO specialist to social media manager, content strategist to PPC expert, digital marketing offers various specializations. Find the area that aligns with your interests and strengths.</p>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">Building Your Skills</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Learn the fundamentals of each channel</li>
          <li>Get hands-on experience with real projects</li>
          <li>Stay updated with industry trends</li>
          <li>Build a portfolio of your work</li>
        </ul>
        
        <h3 class="text-xl font-bold text-midnight mt-8 mb-4">Networking and Growth</h3>
        <p class="mb-4">Connect with other professionals, attend industry events, and continuously learn. A strong network can lead to job opportunities and collaborations.</p>
      `
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-20 bg-lightBg">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-heading font-bold text-midnight mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/resources" className="text-accent font-medium inline-flex items-center">
              <ArrowLeft size={16} className="mr-2" />
              Back to Resources
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title={post.title}
        subtitle={post.category}
        description=""
      />

      <article className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                {post.readTime}
              </div>
            </div>

            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <Link to="/resources" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all">
                  <ArrowLeft size={16} className="mr-2" />
                  Back to Resources
                </Link>
                <button className="inline-flex items-center text-gray-600 hover:text-accent transition-colors">
                  <Share2 size={16} className="mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetail;
