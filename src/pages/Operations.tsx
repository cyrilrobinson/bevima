import React from 'react';
import { MapPin, BarChart3, Truck, Factory } from 'lucide-react';

const Operations = () => {
  const operations = [
    {
      name: 'Grootegeluk Coal Mine',
      location: 'Limpopo Province',
      type: 'Coal Mining',
      capacity: '25 million tonnes per annum',
      image: 'https://images.pexels.com/photos/162568/mining-quarry-stone-coal-162568.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Our flagship coal mining operation, one of the largest in the southern hemisphere.'
    },
    {
      name: 'Matla Coal Mine',
      location: 'Mpumalanga Province',
      type: 'Coal Mining',
      capacity: '15 million tonnes per annum',
      image: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Strategic coal mining operation supplying power generation and export markets.'
    },
    {
      name: 'Sishen Iron Ore Mine',
      location: 'Northern Cape',
      type: 'Iron Ore Mining',
      capacity: '35 million tonnes per annum',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Premium iron ore production for global steel manufacturing industry.'
    }
  ];

  const products = [
    {
      icon: <Factory className="h-8 w-8 text-orange-600" />,
      name: 'Thermal Coal',
      description: 'High-quality thermal coal for power generation and industrial applications.',
      specifications: ['Low ash content', 'High calorific value', 'Consistent quality']
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-600" />,
      name: 'Metallurgical Coal',
      description: 'Premium coking coal for steel production and metallurgical processes.',
      specifications: ['Low sulfur content', 'High carbon content', 'Superior coking properties']
    },
    {
      icon: <Truck className="h-8 w-8 text-orange-600" />,
      name: 'Iron Ore',
      description: 'High-grade iron ore products meeting international quality standards.',
      specifications: ['High iron content', 'Low impurities', 'Consistent sizing']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Operations Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-orange-500">Operations</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            World-class mining operations across South Africa, delivering premium 
            coal and iron ore products to global markets.
          </p>
        </div>
      </section>

      {/* Operations Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mining <span className="text-orange-600">Operations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic locations across South Africa's mineral-rich provinces, 
              leveraging optimal geology and infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {operations.map((operation, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={operation.image}
                    alt={operation.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {operation.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {operation.name}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{operation.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {operation.description}
                  </p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm font-semibold text-gray-900">Production Capacity</div>
                    <div className="text-orange-600 font-bold">{operation.capacity}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-600">Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium coal and iron ore products engineered to meet the exacting 
              requirements of global industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-6">
                  <div className="p-3 bg-orange-100 rounded-full w-fit">
                    {product.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Specifications:</h4>
                  <ul className="space-y-2">
                    {product.specifications.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Technology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Safety & <span className="text-orange-600">Technology</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our operations are guided by an unwavering commitment to safety and the 
                continuous adoption of innovative mining technologies that enhance efficiency 
                while minimizing environmental impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Zero Harm Philosophy</h4>
                    <p className="text-gray-600">Comprehensive safety protocols ensuring the wellbeing of all employees.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Advanced Automation</h4>
                    <p className="text-gray-600">State-of-the-art mining equipment and automated systems.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Environmental Monitoring</h4>
                    <p className="text-gray-600">Real-time environmental monitoring and impact mitigation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Mining Technology"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Operations;