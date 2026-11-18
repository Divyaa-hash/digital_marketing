import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Calendar, ArrowRight, Filter } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Digital Marketing Guides', 'SEO Tips', 'Google Ads', 'Meta Ads', 'AI Tools', 'n8n Automation', 'Business Growth', 'SAP Learning', 'Career Development'];

  const articles = [
    {
      id: 1,
      title: 'Getting Started with Digital Marketing: A Complete Guide',
      excerpt: 'Learn the fundamentals of digital marketing and how to create an effective strategy for your business.',
      category: 'Digital Marketing Guides',
      date: '2024-01-15',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'SEO Best Practices for 2024',
      excerpt: 'Discover the latest SEO techniques to improve your search engine rankings and drive organic traffic.',
      category: 'SEO Tips',
      date: '2024-01-10',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Google Ads Campaign Optimization Tips',
      excerpt: 'Maximize your Google Ads ROI with these proven optimization strategies and best practices.',
      category: 'Google Ads',
      date: '2024-01-05',
      readTime: '5 min read'
    },
    {
      id: 4,
      title: 'Meta Advertising Strategies for Better Results',
      excerpt: 'Learn how to create effective Facebook and Instagram ads that convert viewers into customers.',
      category: 'Meta Ads',
      date: '2024-01-02',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'AI Tools Transforming Digital Marketing',
      excerpt: 'Explore how artificial intelligence is revolutionizing the way we approach digital marketing.',
      category: 'AI Tools',
      date: '2023-12-28',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Introduction to n8n Workflow Automation',
      excerpt: 'A beginner-friendly guide to automating your workflows using n8n.',
      category: 'n8n Automation',
      date: '2023-12-20',
      readTime: '10 min read'
    },
    {
      id: 7,
      title: 'Business Growth Strategies for 2024',
      excerpt: 'Key strategies to scale your business and achieve sustainable growth in the coming year.',
      category: 'Business Growth',
      date: '2023-12-15',
      readTime: '8 min read'
    },
    {
      id: 8,
      title: 'SAP Career Path: Opportunities and Growth',
      excerpt: 'Understanding the career opportunities available in the SAP ecosystem and how to grow.',
      category: 'SAP Learning',
      date: '2023-12-10',
      readTime: '7 min read'
    },
    {
      id: 9,
      title: 'Building a Successful Career in Digital Marketing',
      excerpt: 'Tips and strategies to launch and grow your career in the digital marketing industry.',
      category: 'Career Development',
      date: '2023-12-05',
      readTime: '9 min read'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Ideas and Insights for the Digital World"
        subtitle="Resources & Blog"
        description="Stay updated with the latest trends, tips, and insights in digital marketing, technology, and business growth."
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-secondary via-accent to-lightAccent text-white'
                    : 'bg-lightBg text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                className="bg-lightBg rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={16} />
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="text-xl font-heading font-bold text-midnight mb-3 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                <Link
                  to={`/resources/${article.id}`}
                  className="inline-flex items-center text-accent font-medium group-hover:gap-2 transition-all"
                >
                  Read More <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
