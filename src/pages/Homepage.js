import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import blogsData from '../data/blogs.json';

const Homepage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  // Simulate API call
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setBlogs(blogsData);
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  // Get all unique tags
  const allTags = ['All', ...new Set(blogs.flatMap(blog => blog.tags))];

  // Filter blogs based on search term and selected tag
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag === 'All' || blog.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to BlogHub
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover amazing stories, knowledge, and insights from our writers community
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-lg text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500 transition-colors duration-200"
                />
                <svg
                  className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Tags */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            {filteredBlogs.length === 0 
              ? 'No blogs found matching your criteria.' 
              : `Showing ${filteredBlogs.length} ${filteredBlogs.length === 1 ? 'blog' : 'blogs'}`
            }
            {searchTerm && ` for "${searchTerm}"`}
            {selectedTag !== 'All' && ` in "${selectedTag}"`}
          </p>
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.306a7.962 7.962 0 00-6 0m6 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v1.306m8 0V7a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h8a2 2 0 012 2v1.306z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">No blogs found</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Try changing your search terms or browse all categories.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedTag('All');
              }}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}

        {/* Featured Section */}
        {filteredBlogs.length > 0 && searchTerm === '' && selectedTag === 'All' && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Featured Blogs
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogs.slice(0, 2).map((blog) => (
                <div key={blog.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-6">
                      <div className="mb-2">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <span>{blog.author}</span>
                        <span className="mx-2">•</span>
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
