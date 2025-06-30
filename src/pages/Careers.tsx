import React from 'react';
import { Users, Award, TrendingUp, Heart, Search, MapPin, Clock, Mail } from 'lucide-react';

const Careers = () => {
  const benefits = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Competitive Compensation',
      description: 'Market-leading salaries, performance bonuses, and comprehensive benefits packages.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: 'Career Development',
      description: 'Structured career progression paths with mentorship and leadership development programs.'
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and comprehensive wellness programs for all employees.'
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Inclusive Culture',
      description: 'Diverse and inclusive workplace that values different perspectives and backgrounds.'
    }
  ];

  const jobOpenings = [
    {
      title: 'Senior Mining Engineer',
      department: 'Operations',
      location: 'Limpopo Province',
      type: 'Full-time',
      experience: '5+ years',
      posted: '2 days ago'
    },
    {
      title: 'Environmental Specialist',
      department: 'Sustainability',
      location: 'Centurion',
      type: 'Full-time',
      experience: '3+ years',
      posted: '1 week ago'
    },
    {
      title: 'Financial Analyst',
      department: 'Finance',
      location: 'Centurion',
      type: 'Full-time',
      experience: '2+ years',
      posted: '3 days ago'
    },
    {
      title: 'Safety Officer',
      department: 'Health & Safety',
      location: 'Mpumalanga',
      type: 'Full-time',
      experience: '4+ years',
      posted: '5 days ago'
    },
    {
      title: 'Graduate Trainee Program',
      department: 'Various',
      location: 'Multiple Locations',
      type: 'Graduate Program',
      experience: 'Entry Level',
      posted: '1 day ago'
    }
  ];

  const values = [
    'Safety First - Zero harm to people and environment',
    'Integrity - Honest and ethical in all our dealings',
    'Excellence - Continuous improvement and innovation',
    'Respect - Valuing diversity and treating everyone with dignity',
    'Accountability - Taking ownership of our actions and results'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 to-green-800 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Careers Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Build Your <span className="text-blue-400">Career</span> With Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Join a dynamic team of professionals who are shaping the future of mining 
            through innovation, sustainability, and excellence.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why <span className="text-blue-600">Join Exxaro?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we provide a platform for professional 
              growth, meaningful work, and the opportunity to make a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-6">
                  <div className="p-4 bg-gray-100 rounded-full w-fit mx-auto">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-green-600">Values</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our values guide everything we do and define the culture we've built. 
                They represent our commitment to excellence, integrity, and positive impact.
              </p>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Team Values"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current <span className="text-green-600">Openings</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover exciting career opportunities across our operations and support functions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search jobs by title, department, or location..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-4">Experience: {job.experience}</span>
                      <span>Posted: {job.posted}</span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              View All Openings
            </button>
          </div>
        </div>
      </section>

      {/* Graduate Program */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Graduate Development Program
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Kick-start your career with our comprehensive graduate program designed 
              to develop the next generation of mining professionals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">12</div>
                <div className="opacity-90">Month Program</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">4</div>
                <div className="opacity-90">Department Rotations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="opacity-90">Graduates Annually</div>
              </div>
            </div>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 text-lg">
              Learn More About Our Graduate Program
            </button>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined application process is designed to identify the best talent 
              while providing a positive candidate experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Apply Online', description: 'Submit your application through our careers portal' },
              { step: '2', title: 'Initial Review', description: 'Our recruitment team reviews your application' },
              { step: '3', title: 'Assessment', description: 'Complete skills assessment and interviews' },
              { step: '4', title: 'Join Our Team', description: 'Welcome to Exxaro - begin your journey with us' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Careers */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Have questions about our career opportunities? Get in touch with our HR team.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 mr-3" />
              <span className="text-lg font-semibold">careers@bevimaenergyinternational.com</span>
            </div>
            <p className="text-blue-200">
              Send us your CV and cover letter, or reach out with any questions about our opportunities.
            </p>
          </div>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
            Contact HR Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;