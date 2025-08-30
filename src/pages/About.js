import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About BlogHub
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We're passionate about sharing knowledge and connecting writers with readers 
            who are eager to learn and grow.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12 transition-colors duration-200">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              BlogHub was created with a simple mission: to provide a platform where 
              developers, designers, and tech enthusiasts can share their knowledge, 
              experiences, and insights with the world. We believe that learning is 
              a collaborative process, and the best way to grow is by sharing what we know.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What We Offer</h2>
            <ul className="text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              <li>• High-quality articles on web development, design, and technology</li>
              <li>• Tutorials and guides for developers of all skill levels</li>
              <li>• Industry insights and best practices</li>
              <li>• A community-driven platform for knowledge sharing</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Quality Content</h3>
                <p className="text-blue-800">
                  We're committed to publishing well-researched, accurate, and 
                  helpful content that adds real value to our readers.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Community First</h3>
                <p className="text-green-800">
                  Our community is at the heart of everything we do. We foster 
                  an inclusive environment where everyone can learn and contribute.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Continuous Learning</h3>
                <p className="text-purple-800">
                  Technology evolves rapidly, and we're committed to staying 
                  current with the latest trends and best practices.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">Open Source</h3>
                <p className="text-orange-800">
                  We believe in the power of open source and contribute back 
                  to the community whenever possible.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">JD</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">John Doe</h3>
              <p className="text-blue-600 mb-2">Founder & Editor</p>
              <p className="text-gray-600 text-sm">
                Passionate about React and modern web development. 
                Loves sharing knowledge through writing and teaching.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">JS</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Jane Smith</h3>
              <p className="text-green-600 mb-2">Lead Developer</p>
              <p className="text-gray-600 text-sm">
                Expert in CSS and UI/UX design. Creates beautiful and 
                functional web experiences.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">MJ</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mike Johnson</h3>
              <p className="text-purple-600 mb-2">Technical Writer</p>
              <p className="text-gray-600 text-sm">
                JavaScript enthusiast and technical writer. 
                Makes complex concepts easy to understand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
