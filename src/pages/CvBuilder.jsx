import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Import the images
import template1 from '../assets/template1.png';
import template2 from '../assets/template2.png';
import template3 from '../assets/template3.png';

const CVBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const navigate = useNavigate();

  const templates = [
    {
      id: 1,
      name: 'Template 1',
      image: template1,  // Use the imported image
    },
    {
      id: 2,
      name: 'Template 2',
      image: template2,
    },
    {
      id: 3,
      name: 'Template 3',
      image: template3,
    },
  ];

  return (
    <div className="pt-20 px-8">
      {/* Progress Steps */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center space-x-4">
          <span className="text-blue-600 font-medium">1. Set up</span>
          <span className="text-gray-300">→</span>
          <span className="text-gray-400">2. Build</span>
          <span className="text-gray-300">→</span>
          <span className="text-gray-400">3. Finish</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Select a template</h1>
        <p className="text-gray-600 mb-8">
          You can customise the colour, font, sizing, and order of your content later.
        </p>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div key={template.id} className="relative">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="absolute top-2 right-2 text-sm text-gray-600 bg-white/80 px-2 py-1 rounded">
                  {index + 1}/3
                </div>
                <img 
                  src={template.image} 
                  alt={`Template ${template.id}`}
                  className="w-full h-auto object-contain"
                />
                <button
                  onClick={() => setSelectedTemplate(template.id)}
                  className={`w-full py-3 text-center text-white transition-colors duration-200 
                    ${selectedTemplate === template.id ? 'bg-blue-600' : 'bg-gray-500 hover:bg-gray-600'}`}
                >
                  {selectedTemplate === template.id ? 'Selected' : 'Select Template'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button - Only shows when a template is selected */}
        {selectedTemplate && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate('/build', { 
                state: { templateId: selectedTemplate } 
              })}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
            >
              Next: Build Your CV
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVBuilder;
