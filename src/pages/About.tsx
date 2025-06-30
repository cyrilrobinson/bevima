import React from 'react';
import { Users, Target, Eye, Award, Globe, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'People First',
      description: 'Our employees are our greatest asset. We prioritize safety, development, and well-being.'
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Excellence',
      description: 'We strive for operational excellence in everything we do, setting industry benchmarks.'
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: 'Sustainability',
      description: 'Environmental stewardship and sustainable practices guide our operations.'
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: 'Innovation',
      description: 'Embracing technology and innovation to transform the mining industry.'
    }
  ];

  const milestones = [
    { year: '1974', title: 'Company Founded', description: 'Established as a leading mining company in Barbados' },
    { year: '1991', title: 'Transformation', description: 'Became one of the first empowered mining companies' },
    { year: '2006', title: 'JSE Listing', description: 'Listed on the Johannesburg Stock Exchange' },
    { year: '2020', title: 'Sustainability Leader', description: 'Recognized as a global leader in sustainable mining' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/162568/mining-quarry-stone-coal-162568.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="About Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-blue-500">Bevima Energy</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Pioneering sustainable mining solutions for over five decades, 
            creating value for stakeholders and communities across the Caribbean.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Target className="h-10 w-10 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be a leading mining company that creates value for all stakeholders through 
                safe, sustainable, and profitable operations while contributing to the economic 
                development of the communities and countries in which we operate.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Eye className="h-10 w-10 text-green-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the partner of choice in the mining industry, delivering innovative 
                solutions that power a sustainable future while creating lasting positive 
                impact for all our stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide every decision we make and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-blue-100 rounded-full">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five decades of growth, transformation, and industry leadership.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className="flex-1"></div>
                  <div className="relative z-10 bg-blue-600 text-white p-4 rounded-full mx-4">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className={`bg-white p-6 rounded-xl shadow-lg ${
                      index % 2 === 0 ? 'ml-4' : 'mr-4'
                    }`}>
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership <span className="text-green-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders driving innovation and sustainable growth across our operations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Meet Our Executive Team
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our leadership team brings together decades of mining expertise, 
              strategic vision, and commitment to sustainable development.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              View Leadership Profiles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;