import React from 'react';
import { Leaf, Recycle, Users, Shield, Heart, TreePine } from 'lucide-react';

const Sustainability = () => {
  const initiatives = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: 'Environmental Stewardship',
      description: 'Comprehensive environmental management programs to minimize our ecological footprint.',
      achievements: ['40% reduction in water usage', '50% reduction in carbon emissions', 'Zero environmental incidents']
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Community Development',
      description: 'Empowering local communities through education, healthcare, and economic development.',
      achievements: ['50+ communities supported', '10,000+ jobs created', '100+ schools supported']
    },
    {
      icon: <Recycle className="h-8 w-8 text-purple-600" />,
      title: 'Circular Economy',
      description: 'Implementing circular economy principles to maximize resource efficiency and minimize waste.',
      achievements: ['90% waste recycling rate', 'Zero waste to landfill', 'Resource recovery programs']
    }
  ];

  const sdgGoals = [
    { number: 3, title: 'Good Health and Well-being', color: 'bg-green-500' },
    { number: 4, title: 'Quality Education', color: 'bg-red-500' },
    { number: 6, title: 'Clean Water and Sanitation', color: 'bg-blue-500' },
    { number: 8, title: 'Decent Work and Economic Growth', color: 'bg-purple-500' },
    { number: 13, title: 'Climate Action', color: 'bg-green-600' },
    { number: 15, title: 'Life on Land', color: 'bg-green-700' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-900 to-green-800 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Sustainability Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-green-400">Sustainability</span> at Our Core
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Building a sustainable future through responsible mining practices, 
            environmental stewardship, and community empowerment.
          </p>
        </div>
      </section>

      {/* Sustainability Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sustainability <span className="text-green-600">Pillars</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three fundamental pillars guide our approach to sustainable mining 
              and responsible business practices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-6">
                  <div className="p-3 bg-gray-100 rounded-full w-fit">
                    {initiative.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {initiative.description}
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {initiative.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Environmental <span className="text-green-600">Impact</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are committed to minimizing our environmental footprint through 
                innovative technologies, rehabilitation programs, and biodiversity conservation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                  <div className="text-sm text-gray-600">Carbon Reduction</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                  <div className="text-sm text-gray-600">Water Conservation</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
                  <div className="text-sm text-gray-600">Waste Recycling</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Land Rehabilitation</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Environmental Conservation"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-lg">
                <TreePine className="h-8 w-8 mb-2" />
                <div className="font-bold">Biodiversity</div>
                <div className="text-sm opacity-90">Conservation Leader</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Social <span className="text-blue-600">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating lasting positive change in the communities where we operate 
              through education, healthcare, and economic development programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Development</h3>
              <p className="text-gray-600">
                Supporting local communities through skills development, small business 
                support, and infrastructure development.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Healthcare</h3>
              <p className="text-gray-600">
                Providing healthcare facilities, mobile clinics, and health education 
                programs to improve community wellbeing.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
              <p className="text-gray-600">
                Building schools, providing scholarships, and supporting educational 
                programs to empower future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Goals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              UN Sustainable Development <span className="text-orange-600">Goals</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aligning our sustainability initiatives with the United Nations 
              Sustainable Development Goals for global impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sdgGoals.map((goal, index) => (
              <div
                key={index}
                className={`${goal.color} text-white p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="text-3xl font-bold mb-2">{goal.number}</div>
                <div className="text-sm font-medium">{goal.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Building a Sustainable Future
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how our sustainability initiatives are creating positive 
            impact for communities and the environment.
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
            Download Sustainability Report
          </button>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;