import React from 'react';
import { Calendar, Clock, ArrowRight, FileText, Video, Mic, Mail } from 'lucide-react';

const News = () => {
  const featuredNews = {
    id: 1,
    title: 'Exxaro Reports Strong Q4 2023 Financial Results',
    excerpt: 'Company delivers robust financial performance with record revenue and improved operational efficiency across all mining operations.',
    image: 'https://images.pexels.com/photos/3943725/pexels-photo-3943725.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    date: '2024-02-15',
    category: 'Financial Results',
    readTime: '5 min read'
  };

  const newsArticles = [
    {
      id: 2,
      title: 'New Sustainability Initiative Launched at Grootegeluk Mine',
      excerpt: 'Comprehensive environmental program aims to reduce carbon footprint by 40% over the next five years.',
      image: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: '2024-02-12',
      category: 'Sustainability',
      readTime: '3 min read',
      type: 'article'
    },
    {
      id: 3,
      title: 'Exxaro Wins Mining Excellence Award 2024',
      excerpt: 'Recognition for outstanding safety performance and innovative mining practices across our operations.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: '2024-02-10',
      category: 'Awards',
      readTime: '2 min read',
      type: 'article'
    },
    {
      id: 4,
      title: 'Q4 2023 Results Presentation',
      excerpt: 'CEO presents quarterly financial results and strategic outlook for 2024.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: '2024-02-08',
      category: 'Investor Relations',
      readTime: '45 min watch',
      type: 'video'
    },
    {
      id: 5,
      title: 'Community Development Program Expansion',
      excerpt: 'New healthcare and education initiatives launched in mining communities across South Africa.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: '2024-02-05',
      category: 'Community',
      readTime: '4 min read',
      type: 'article'
    },
    {
      id: 6,
      title: 'Technology Innovation Podcast Series',
      excerpt: 'Listen to our latest podcast discussing AI and automation in modern mining operations.',
      image: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: '2024-02-01',
      category: 'Technology',
      readTime: '30 min listen',
      type: 'podcast'
    }
  ];

  const categories = [
    'All News',
    'Financial Results',
    'Sustainability',
    'Operations',
    'Community',
    'Awards',
    'Technology'
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="h-4 w-4" />;
      case 'podcast':
        return <Mic className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 to-green-800 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="News Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            News & <span className="text-blue-400">Media</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Stay updated with the latest news, developments, and insights 
            from Exxaro's mining operations and corporate activities.
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Featured <span className="text-blue-600">News</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div>
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {featuredNews.category}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {featuredNews.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {featuredNews.excerpt}
              </p>
              <div className="flex items-center text-gray-500 mb-6">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="mr-4">{formatDate(featuredNews.date)}</span>
                <Clock className="h-4 w-4 mr-2" />
                <span>{featuredNews.readTime}</span>
              </div>
              <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Read Full Article
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                  category === 'All News'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white bg-opacity-90 p-2 rounded-full">
                      {getTypeIcon(article.type)}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(article.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-semibold transition-colors duration-200">
                    {article.type === 'video' ? 'Watch Now' : 
                     article.type === 'podcast' ? 'Listen Now' : 'Read More'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Informed
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter and get the latest news, updates, 
            and insights delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto mb-6">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-r-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-70 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2" />
              <span className="text-sm">
                For media inquiries: <strong>media@bevimaenergyinternational.com</strong>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;