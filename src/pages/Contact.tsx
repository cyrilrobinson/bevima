import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, Building, Users, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Building className="h-6 w-6 text-blue-600" />,
      title: 'Head Office',
      details: ['Exxaro Place, 53 Andries Street', 'Centurion Central, 0157', 'South Africa'],
      contact: '+27 12 307 5000'
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: 'Investor Relations',
      details: ['For investor inquiries', 'Financial reports & presentations', 'Shareholder services'],
      contact: 'investors@bevimaenergyinternational.com'
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-blue-600" />,
      title: 'Media Inquiries',
      details: ['Press releases', 'Media interviews', 'Corporate communications'],
      contact: 'media@bevimaenergyinternational.com'
    }
  ];

  const offices = [
    {
      name: 'Grootegeluk Operations',
      address: 'Lephalale, Limpopo Province',
      phone: '+27 14 763 8000',
      type: 'Mining Operation'
    },
    {
      name: 'Matla Operations',
      address: 'Kriel, Mpumalanga Province',
      phone: '+27 17 648 4000',
      type: 'Mining Operation'
    },
    {
      name: 'Sishen Iron Ore',
      address: 'Kathu, Northern Cape',
      phone: '+27 53 723 8000',
      type: 'Mining Operation'
    },
    {
      name: 'Cape Town Office',
      address: 'V&A Waterfront, Cape Town',
      phone: '+27 21 417 4000',
      type: 'Regional Office'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Contact Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="text-blue-400">Us</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Get in touch with our team for inquiries, partnerships, 
            or to learn more about our mining operations.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a <span className="text-blue-600">Message</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>Business Partnership</option>
                    <option>Investor Relations</option>
                    <option>Media Inquiry</option>
                    <option>Career Opportunities</option>
                    <option>Supplier Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in <span className="text-green-600">Touch</span>
              </h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1 text-gray-600">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex}>{detail}</p>
                        ))}
                      </div>
                      <p className="text-blue-600 font-semibold mt-2">
                        {info.contact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-12 bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-gray-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Locations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find us across South Africa with mining operations and offices 
              strategically located throughout the country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {office.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {office.name}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-sm">{office.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find <span className="text-blue-600">Us</span>
            </h2>
            <p className="text-xl text-gray-600">
              Visit our head office in Centurion Central, South Africa
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-700 mb-2">Interactive Map</h3>
              <p className="text-gray-600">
                Exxaro Place, 53 Andries Street<br />
                Centurion Central, 0157, South Africa
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;