import React, { useState, useMemo } from 'react';

const projects = [
  {
    id: 1,
    name: 'Commercial',
    address: '2715 Ash Dr. San Jose, South Dakota',
    image: 'background.jpg',
    category: 'Commercial',
  },
  {
    id: 2,
    name: 'Residential',
    address: '2972 Westheimer Rd. Santa Ana, Illinois',
    image: 'background.jpg',
    category: 'Residential',
  },
  {
    id: 3,
    name: "None1",
    address: '3517 W. Gray St. Utica, Pennsylvania',
    image: 'background.jpg',
    category: 'none',
  },
  {
    id: 4,
    name: "None2",
    address: '3517 W. Gray St. Utica, Pennsylvania',
    image: 'background.jpg',
    category: 'none',
  },
  // Add more projects as needed
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;

  const filteredProjects = useMemo(() => {
    if (filter === 'All') {
      return projects;
    } else if (filter === 'Other') {
      return projects.filter(project => project.category === 'none');
    } else {
      return projects.filter(project => project.category === filter);
    }
  }, [filter]);
  

  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage, 
    currentPage * projectsPerPage
  );

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      
      <div className="flex mb-4">
        <div className="w-1/4">
          {['All', 'Commercial', 'Residential', 'Other'].map((category) => (
            <button
              key={category}
              className={`block w-full text-left py-2 px-4 ${
                filter === category ? 'text-blue-600 font-bold' : 'text-gray-600'
              }`}
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="w-3/4 grid grid-cols-2 gap-4">
          {currentProjects.map((project) => (
            <div key={project.id} className="bg-white shadow rounded-lg overflow-hidden">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-4 bg-yellow-600 text-white">
                <h3 className="font-bold">{project.name}</h3>
                <p className="text-sm">{project.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ← Back
        </button>
        <div className="flex space-x-2">
          {[...Array(pageCount)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                currentPage === i + 1 ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
          disabled={currentPage === pageCount}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
