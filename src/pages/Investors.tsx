import React from 'react';
import { TrendingUp, FileText, Calendar, DollarSign, BarChart3, PieChart, Mail } from 'lucide-react';

const Investors = () => {
  const financialHighlights = [
    { label: 'Revenue', value: 'R 42.5B', change: '+12%' },
    { label: 'EBITDA', value: 'R 12.8B', change: '+18%' },
    { label: 'Net Income', value: 'R 8.2B', change: '+15%' },
    { label: 'Share Price', value: 'R 185.50', change: '+8%' }
  ];

  const reports = [
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: 'Annual Report 2023',
      description: 'Comprehensive annual financial and operational report',
      date: 'March 2024',
      size: '12.5 MB'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-green-600" />,
      title: 'Q4 2023 Results',
      description: 'Quarterly financial results and operational update',
      date: 'February 2024',
      size: '2.8 MB'
    },
    {
      icon: <PieChart className="h-6 w-6 text-blue-600" />,
      title: 'ESG Report 2023',
      description: 'Environmental, Social & Governance performance report',
      date: 'April 2024',
      size: '8.1 MB'
    }
  ];

  const upcomingEvents = [
    {
      date: '15 MAY',
      title: 'Q1 2024 Results Presentation',
      time: '10:00 AM',
      type: 'Webcast'
    },
    {
      date: '22 MAY',
      title: 'Annual General Meeting',
      time: '2:00 PM',
      type: 'Hybrid'
    },
    {
      date: '28 JUN',
      title: 'Mining Indaba Conference',
      time: '9:00 AM',
      type: 'In-person'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 to-green-800 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3943725/pexels-photo-3943725.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Investor Relations Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Investor <span className="text-blue-400">Relations</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Delivering sustainable value through operational excellence, 
            strategic growth, and transparent communication.
          </p>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Financial <span className="text-blue-600">Highlights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strong financial performance driven by operational excellence 
              and strategic market positioning.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {financialHighlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center"
              >
                <div className="text-sm text-gray-600 mb-2">{item.label}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
                <div className="text-green-600 font-semibold text-sm">{item.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stock Performance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Stock <span className="text-green-600">Performance</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Exxaro shares are listed on the Johannesburg Stock Exchange (JSE) 
                under the ticker symbol EXX. Our strong operational performance 
                and strategic vision continue to deliver value for shareholders.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Current Price</span>
                  <span className="text-2xl font-bold text-green-600">R 185.50</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">52-Week High</span>
                  <span className="text-gray-700">R 198.75</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">52-Week Low</span>
                  <span className="text-gray-700">R 142.30</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-900">Market Cap</span>
                  <span className="text-gray-700">R 85.2B</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Share Price Trend</h3>
              </div>
              <div className="h-64 bg-gradient-to-t from-green-100 to-green-50 rounded-lg flex items-end justify-center">
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive chart coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports & Presentations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reports & <span className="text-blue-600">Presentations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our latest financial reports, presentations, and regulatory filings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {report.icon}
                  <h3 className="text-lg font-bold text-gray-900 ml-3">{report.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{report.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>{report.date}</span>
                  <span>{report.size}</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200">
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming <span className="text-green-600">Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our investor presentations, earnings calls, and industry events.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 mb-6 flex items-center"
              >
                <div className="text-center mr-6">
                  <div className="bg-blue-100 text-blue-600 font-bold p-4 rounded-lg">
                    {event.date}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{event.time}</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">{event.type}</span>
                  </div>
                </div>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dividend Information */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Dividend <span className="text-blue-400">Information</span>
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Committed to delivering consistent returns to our shareholders 
                through a sustainable dividend policy.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-blue-800">
                  <span>Last Dividend</span>
                  <span className="font-bold">R 15.50 per share</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-blue-800">
                  <span>Dividend Yield</span>
                  <span className="font-bold">8.4%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span>Payment Date</span>
                  <span className="font-bold">31 March 2024</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <DollarSign className="h-24 w-24 text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Shareholder Value</h3>
              <p className="text-lg opacity-90 mb-6">
                Our disciplined capital allocation strategy focuses on sustainable 
                cash generation and returns to shareholders.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span className="text-sm">
                    Investor Relations: <strong>investors@bevimaenergyinternational.com</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investors;