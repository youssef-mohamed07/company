import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBuilding, FaHome, FaIndustry, FaExchangeAlt, FaLandmark, FaHardHat, FaCogs, FaMicrochip, FaSeedling, FaHotel, FaGraduationCap, FaMedkit } from 'react-icons/fa';

// Define category icons mapping
const categoryIcons = {
  Commercial: FaBuilding,
  Residential: FaHome,
  Manufacturing: FaIndustry,
  Trade: FaExchangeAlt,
  'Real Estate': FaLandmark,
  Construction: FaHardHat,
  Services: FaCogs,
  Technology: FaMicrochip,
  Agriculture: FaSeedling,
  Hospitality: FaHotel,
  Education: FaGraduationCap,
  Health: FaMedkit,
};
const projects = [
  { id: 1, name: 'Commercial', address: '2715 Ash Dr. San Jose, South Dakota', image: 'a.avif', category: 'Commercial', description: 'A modern commercial complex with state-of-the-art facilities.' },
  { id: 2, name: 'Residential', address: '2972 Westheimer Rd. Santa Ana, Illinois', image: 'b.avif', category: 'Residential', description: 'Luxury residential apartments with scenic views.' },
  { id: 3, name: "Recycling Plant", address: '1234 Elm St. Springfield, Illinois', image: 'c.avif', category: 'Manufacturing', description: 'Advanced recycling facility processing various materials.' },
  { id: 4, name: "Electric Bikes", address: '5678 Oak St. Seattle, Washington', image: 'd.avif', category: 'Manufacturing', description: 'Eco-friendly electric bikes with cutting-edge technology.' },
  { id: 5, name: "Plastic Products", address: '9101 Pine St. Austin, Texas', image: 'e.avif', category: 'Manufacturing', description: 'Manufacturing of high-quality plastic goods for various industries.' },
  { id: 6, name: "Fish Products", address: '1112 Maple St. Orlando, Florida', image: 'f.avif', category: 'Manufacturing', description: 'Premium fish products with sustainable sourcing.' },
  { id: 7, name: "Gold Jewelry", address: '1314 Birch St. New York, New York', image: 'g.avif', category: 'Trade', description: 'Exclusive collection of handcrafted gold jewelry.' },
  { id: 8, name: "Used Vehicles", address: '1516 Cedar St. Boston, Massachusetts', image: 'h.avif', category: 'Trade', description: 'Wide range of certified used vehicles at competitive prices.' },
  { id: 9, name: "Real Estate", address: '1718 Redwood St. Denver, Colorado', image: 'i.avif', category: 'Real Estate', description: 'Premium real estate properties with attractive returns.' },
  { id: 10, name: "Construction", address: '1920 Willow St. Phoenix, Arizona', image: 'j.avif', category: 'Construction', description: 'High-quality construction services for residential and commercial projects.' },
  { id: 11, name: "Advertising", address: '2122 Elm St. Sacramento, California', image: 'k.avif', category: 'Services', description: 'Innovative advertising solutions to boost your brand visibility.' },
  { id: 12, name: "Vehicle Rentals", address: '2324 Oak St. Portland, Oregon', image: 'l.avif', category: 'Services', description: 'Affordable vehicle rental services with a variety of options.' },
  { id: 13, name: "Tour Operations", address: '2526 Pine St. Honolulu, Hawaii', image: 'm.avif', category: 'Services', description: 'Exciting tour packages to explore beautiful destinations.' },
  { id: 14, name: "Media Services", address: '2728 Maple St. Chicago, Illinois', image: 'n.avif', category: 'Services', description: 'Comprehensive media services including production and marketing.' },
  { id: 15, name: "Health Services", address: '2930 Birch St. Las Vegas, Nevada', image: 'o.avif', category: 'Health', description: 'Top-notch health services with state-of-the-art facilities.' },
  { id: 16, name: "Food Trade", address: '3132 Cedar St. Miami, Florida', image: 'p.avif', category: 'Trade', description: 'Wide range of food products with quality assurance.' },
  { id: 17, name: "Waste Management", address: '3334 Redwood St. Seattle, Washington', image: 'p1.avif', category: 'Services', description: 'Effective waste management solutions for a cleaner environment.' },
  { id: 18, name: "Used Goods", address: '3536 Willow St. St. Louis, Missouri', image: 'e1.avif', category: 'Services', description: 'Quality used goods for budget-friendly shopping.' },
  { id: 19, name: "Spare Parts", address: '3738 Elm St. Philadelphia, Pennsylvania', image: 'e2.avif', category: 'Trade', description: 'Wide variety of spare parts for different vehicle brands.' },
  { id: 20, name: "Vehicle Repair", address: '3940 Oak St. Detroit, Michigan', image: 'e3.avif', category: 'Services', description: 'Expert vehicle repair services with guaranteed quality.' },
  { id: 22, name: "Publicity", address: '4344 Maple St. Boston, Massachusetts', image: 'e5.avif', category: 'Services', description: 'Creative publicity campaigns to enhance brand awareness.' },
  { id: 23, name: "E-commerce", address: '4546 Birch St. Phoenix, Arizona', image: 'e6.avif', category: 'Technology', description: 'Innovative e-commerce solutions for seamless online shopping.' },
  { id: 24, name: "Agriculture", address: '4748 Cedar St. Denver, Colorado', image: 'e7.avif', category: 'Agriculture', description: 'Sustainable agricultural practices for high yield production.' },
  { id: 25, name: "Tourism", address: '4950 Redwood St. Honolulu, Hawaii', image: 'e8.avif', category: 'Hospitality', description: 'Unforgettable tourism experiences with guided tours and activities.' },
  { id: 26, name: "Restaurants", address: '5152 Willow St. Miami, Florida', image: 'e9.avif', category: 'Hospitality', description: 'Culinary delights from top-rated restaurants across the region.' },
  { id: 27, name: "Educational Services", address: '5354 Elm St. Portland, Oregon', image: 'e10.avif', category: 'Education', description: 'High-quality educational services for all age groups.' },
  { id: 28, name: "Laboratories", address: '5556 Oak St. Chicago, Illinois', image: 'e11.avif', category: 'Education', description: 'State-of-the-art laboratories for scientific research and development.' },
  { id: 29, name: "Aircraft Trade", address: '5758 Pine St. Seattle, Washington', image: 'e12.avif', category: 'Trade', description: 'Exclusive deals on aircraft and aviation equipment.' },
  { id: 31, name: "Oil Products", address: '6162 Birch St. Miami, Florida', image: 'e14.avif', category: 'Trade', description: 'High-quality oil products for various industries.' },
  { id: 32, name: "Industrial Workshops", address: '6364 Cedar St. Detroit, Michigan', image: 'e15.avif', category: 'Manufacturing', description: 'Advanced industrial workshops with modern machinery.' },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Filter projects based on the selected category
  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter(project => project.category === filter);
  }, [filter]);

  // Calculate the total number of pages
  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage);

  // Get the projects for the current page
  const currentProjects = useMemo(() => {
    const start = (currentPage - 1) * projectsPerPage;
    const end = start + projectsPerPage;
    return filteredProjects.slice(start, end);
  }, [filteredProjects, currentPage]);

  // Handle filter change
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  // Reset the page to 1 when the filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  return (
    <div className="container mx-auto p-4 bg-white text-black" id='projects'>
      <h2 className="text-4xl font-bold mb-8 text-center font-extrabold text-gray-900 ">Our Projects</h2>
     
      
      <div className="flex flex-col md:flex-row mb-8">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <div className="bg-gray-100 rounded-lg p-4">
            {['All', 'Commercial', 'Residential', 'Manufacturing', 'Trade', 'Real Estate', 'Construction', 'Services', 'Technology', 'Agriculture', 'Hospitality', 'Education', 'Health'].map((category) => {
              const Icon = categoryIcons[category] || FaCogs;
              return (
                <button
                  key={category}
                  className={`flex items-center w-full text-left py-2 px-4 rounded-md transition-colors duration-200 ${
                    filter === category ? 'bg-yellow-500 text-white font-bold' : 'text-black hover:bg-gray-200'
                  }`}
                  onClick={() => handleFilterChange(category)}
                >
                  <Icon className="mr-2" />
                  {category}
                </button>
              );
            })}
          </div>
        </div>
        
        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {currentProjects.map((project) => (
              <motion.div 
                key={project.id} 
                className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-yellow-500">{project.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{project.address}</p>
                  <p className="text-gray-800">{project.description}</p>
                  <div className="mt-4 flex items-center text-sm text-gray-600">
                    {categoryIcons[project.category] && React.createElement(categoryIcons[project.category], { className: "mr-2" })}
                    {project.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-8">
        <button
          className="bg-yellow-500 text-white px-6 py-2 rounded-full font-bold transition-colors duration-200 hover:bg-yellow-600"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ← Previous
        </button>
        <div className="flex space-x-2">
          {[...Array(pageCount)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentPage === i + 1 ? 'bg-yellow-500' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentPage(i + 1)}
            />
          ))}
        </div>
        <button
          className="bg-yellow-500 text-white px-6 py-2 rounded-full font-bold transition-colors duration-200 hover:bg-yellow-600"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
          disabled={currentPage === pageCount}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
