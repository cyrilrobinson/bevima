import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import { TrendingUp, Shield, Users, Leaf, ArrowRight, Award } from 'lucide-react';

const Home = () => {
  const stats = [
    { label: 'Years of Excellence', value: '50+' },
    { label: 'Employees', value: '8,000+' },
    { label: 'Communities Impacted', value: '50+' },
    { label: 'Annual Production', value: '40Mt+' }
  ];

  const services = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: 'Coal Operations',
      description: 'Leading coal producer with high-quality thermal and metallurgical coal operations across the Caribbean.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Iron Ore Mining',
      description: 'Premium iron ore products meeting international standards for global steel production.'
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: 'Sustainability',
      description: 'Environmental stewardship and sustainable mining practices for a better tomorrow.'
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Community Impact',
      description: 'Empowering local communities through job creation and socio-economic development programs.'
    }
  ];

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leading the Future of <span className="text-blue-600">Mining</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                For over five decades, Bevima Energy International has been at the forefront of the Caribbean's mining industry. 
                We are committed to responsible mining practices that create value for all our stakeholders 
                while contributing to the sustainable development of our communities.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our integrated approach to mining combines operational excellence with environmental 
                stewardship and social responsibility, positioning us as a leader in the global mining sector.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Mining Operations"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg">
                <Award className="h-8 w-8 mb-2" />
                <div className="font-bold">Industry Leader</div>
                <div className="text-sm opacity-90">Award Winning Company</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-blue-600">Operations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering excellence across our mining operations while maintaining the highest 
              standards of safety, sustainability, and community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-200">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Journey Towards Sustainable Mining
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover career opportunities, partnership possibilities, and investment potential 
            with the Caribbean's leading mining company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/careers"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Explore Careers
            </Link>
            <Link
              to="/investors"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Investor Relations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;