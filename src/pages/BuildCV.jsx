/* eslint-disable no-unused-vars */
import { useLocation, useNavigate } from 'react-router-dom';
import Template1 from '../components/CVTemplates/CVTemplate1';
// Import other templates as needed

const BuildCV = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedTemplate = location.state?.templateId;

  const demoData = {
    name: "Kim Mustermann",
    description: "B2B Product Manager",
    contactInfo: ["kim@gmail.com", "+49 176 123 45 67", "Musterstraße 55, 12345 Musterstadt"],
    skills: "Marketing planning, Global Project Management, Teambuilding, Market research",
    tools: ["Management • Spreadsheet, JIRA, Confluence, Notion.", "Analytics • Google Analytics, HotJar.", "Design • Figma, Zeplin, Sketch, InVision, MarvelApp, ProtoPie."],
    experience: [
      {
        position: "B2B Product Manager",
        company: "Musterfirma GmbH",
        dates: "May 2022 - Present",
        description: "Independent organization and support of trade fairs and customer events, compilation of sales and marketing materials. Management of the marketing team and reporting."
      }
    ],
    education: [
      {
        institution: "Berlin University",
        degree: "Master in Business Administration",
        dates: "2018"
      }
    ],
  };

  const handleDataChange = (newData) => {
    // Handle the updated CV data
    console.log('CV Data Updated:', newData);
  };

  return (
    <div className="pt-20 px-8">
      {/* Progress Steps */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center space-x-4">
          <span className="text-gray-400">1. Set up</span>
          <span className="text-gray-300">→</span>
          <span className="text-blue-600 font-medium">2. Build</span>
          <span className="text-gray-300">→</span>
          <span className="text-gray-400">3. Finish</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">Build Your CV</h1>
          <p className="text-gray-600">
            Customize your CV content below. Click on any section to edit.
          </p>
        </div>

        {/* Template Display */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <Template1 {...demoData} onDataChange={handleDataChange} />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8 mb-12">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-6 py-3 text-white hover:bg-blue-700 rounded-lg transition-colors duration-200"
          >
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
                d="M15 19l-7-7 7-7" 
              />
            </svg>
            Back to Templates
          </button>

          {/* You might want to add a "Next" button here later */}
          <button
            onClick={() => navigate('/finish')}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Next: Finish
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
      </div>
    </div>
  );
};

export default BuildCV;