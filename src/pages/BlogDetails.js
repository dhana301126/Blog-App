import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import blogsData from '../data/blogs.json';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const foundBlog = blogsData.find(b => b.id === parseInt(id));
      if (foundBlog) {
        setBlog(foundBlog);
        
        // Find related blogs (same tags, excluding current blog)
        const related = blogsData
          .filter(b => 
            b.id !== foundBlog.id && 
            b.tags.some(tag => foundBlog.tags.includes(tag))
          )
          .slice(0, 3);
        setRelatedBlogs(related);
      }
      setLoading(false);
    };

    fetchBlog();
  }, [id]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-8"></div>
            <div className="h-64 bg-gray-300 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-200">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              </li>
              <li>
                <span className="text-gray-900 dark:text-white font-medium truncate max-w-xs">
                  {blog.title}
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {blog.tags[0]}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {blog.title}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            {blog.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-6 mb-8">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">
                    {blog.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{blog.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{formatDate(blog.date)}</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {blog.readTime}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {blog.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="bg-white dark:bg-gray-800 py-12 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  to={`/blog/${relatedBlog.id}`}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <img
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                        {relatedBlog.excerpt}
                      </p>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <span>{relatedBlog.author}</span>
                        <span className="mx-2">•</span>
                        <span>{relatedBlog.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetails;
