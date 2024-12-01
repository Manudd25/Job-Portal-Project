import { useState } from "react";
import { MdAccountCircle } from "react-icons/md";

const CVTemplate1 = ({ onDataChange }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [data, setData] = useState({
    contactInfo: {
      website: "your-portfolio.com",
      email: "your@email.com",
      phone: "0802859999",
    },
    sectionTitles: {
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      tools: "Tools",
    },
    experience: [
      {
        company: "Geeglo",
        bullet: "•",
        position: "Project Manager",
        dates: "January 2019 - Present",
        description:
          "It would be good if you can include responsibilities and achievements, as well as the extra miles that you have done. Don't make it too long, keep it short but meaningful. Maximum 10 lines?",
      },
      {
        company: "Ficebook",
        bullet: "•",
        position: "Assistant Project Manager",
        dates: "January 2018 - January 2019",
        description:
          "Some stuff about the work that you've done here. It would be good if you can include responsibilities and achievements, as well as the extra miles that you have done. Don't make it too long, keep it short but meaningful. Maximum 10 lines?",
      },
      {
        company: "Ficebook",
        bullet: "•",
        position: "Assistant Project Manager",
        dates: "January 2018 - January 2019",
        description:
          "Some stuff about the work that you've done here. It would be good if you can include responsibilities and achievements, as well as the extra miles that you have done. Don't make it too long, keep it short but meaningful. Maximum 10 lines?",
      },
    ],
    education: [
      {
        institution: "Harvard",
        bullet: "•",
        degree: "BA in Computer Science",
        dates: "January 2012 - January 2017",
        description:
          "Some stuff about the work that you've done here. It would be good if you can include responsibilities and achievements, as well as the extra miles that you have done. Don't make it too long, keep it short but meaningful. Maximum 10 lines?",
      },
    ],
    skills:
      "Management, Analytics, Design Thinking, Writing, Ideation, Research, Prototyping, Presentation, Leading Workshops.",
    tools: {
      management: "Spreadsheet, JIRA, Confluence, Notion.",
      analytics: "Google Analytics, HotJar.",
      design: "Figma, Zeplin, Sketch, InVision, MarvelApp, ProtoPie.",
    },
  });

  const handleEdit = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
    onDataChange?.({ ...data, [field]: value });
  };

  return (
    <div className="max-w-[800px] mx-auto p-8">
      {/* Profile Image and Contact Info */}
      <div className="flex justify-between mb-16">
        {/* Profile Image */}
        <div className="w-32 h-40">
          <MdAccountCircle className="w-full h-full text-gray-400" />
        </div>

        {/* Contact Info - Right Aligned */}
        <div className="text-right">
          {Object.entries(data.contactInfo).map(([key, value]) => (
            <p
              key={key}
              className="text-sm text-gray-600 mb-1 cursor-pointer text-right"
              onClick={() => setIsEditing(`contact-${key}`)}
            >
              {isEditing === `contact-${key}` ? (
                <input
                  type="text"
                  value={value}
                  onChange={(e) => {
                    const newContactInfo = {
                      ...data.contactInfo,
                      [key]: e.target.value,
                    };
                    handleEdit("contactInfo", newContactInfo);
                  }}
                  onBlur={() => setIsEditing(null)}
                  className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-right"
                  autoFocus
                />
              ) : (
                value
              )}
            </p>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-[150px_1fr] gap-8">
        {/* Left Column - Section Titles */}
        <div className="text-left">
          <h2 className="text-gray-800 font-medium mb-[26.5rem]">Experience</h2>
          <h2 className="text-gray-800 font-medium mb-[9.5rem]">Education</h2>
          <h2 className="text-gray-800 font-medium mb-[5.5rem]">Skills</h2>
          <h2 className="text-gray-800 font-medium">Tools</h2>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-16">
          {/* Experience Content */}
          <div className="space-y-6 text-left">
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-center text-gray-800">
                  <span
                    className="font-medium cursor-pointer"
                    onClick={() => setIsEditing(`experience-${index}-company`)}
                  >
                    {isEditing === `experience-${index}-company` ? (
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) =>
                          handleEdit(
                            "experience",
                            data.experience.map((item, idx) =>
                              idx === index
                                ? { ...item, company: e.target.value }
                                : item
                            )
                          )
                        }
                        onBlur={() => setIsEditing(null)}
                        autoFocus
                        className="bg-transparent border-b border-gray-300 focus:outline-none"
                      />
                    ) : (
                      exp.company
                    )}
                  </span>
                  <span className="mx-2 text-gray-400">{exp.bullet}</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => setIsEditing(`experience-${index}-position`)}
                  >
                    {isEditing === `experience-${index}-position` ? (
                      <input
                        type="text"
                        value={exp.position}
                        onChange={(e) =>
                          handleEdit(
                            "experience",
                            data.experience.map((item, idx) =>
                              idx === index
                                ? { ...item, position: e.target.value }
                                : item
                            )
                          )
                        }
                        onBlur={() => setIsEditing(null)}
                        autoFocus
                        className="bg-transparent border-b border-gray-300 focus:outline-none"
                      />
                    ) : (
                      exp.position
                    )}
                  </span>
                </div>
                <p
                  className="text-sm text-gray-500 cursor-pointer"
                  onClick={() => setIsEditing(`experience-${index}-dates`)}
                >
                  {isEditing === `experience-${index}-dates` ? (
                    <input
                      type="text"
                      value={exp.dates}
                      onChange={(e) =>
                        handleEdit(
                          "experience",
                          data.experience.map((item, idx) =>
                            idx === index
                              ? { ...item, dates: e.target.value }
                              : item
                          )
                        )
                      }
                      onBlur={() => setIsEditing(null)}
                      autoFocus
                      className="bg-transparent border-b border-gray-300 focus:outline-none"
                    />
                  ) : (
                    exp.dates
                  )}
                </p>
                <p
                  className="text-sm text-gray-600 mt-2 cursor-pointer"
                  onClick={() =>
                    setIsEditing(`experience-${index}-description`)
                  }
                >
                  {isEditing === `experience-${index}-description` ? (
                    <textarea
                      value={exp.description}
                      onChange={(e) =>
                        handleEdit(
                          "experience",
                          data.experience.map((item, idx) =>
                            idx === index
                              ? { ...item, description: e.target.value }
                              : item
                          )
                        )
                      }
                      onBlur={() => setIsEditing(null)}
                      autoFocus
                      className="w-full bg-transparent border-b border-gray-300 focus:outline-none"
                    />
                  ) : (
                    exp.description
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* Education Content */}
          <div className="space-y-6 text-left">
            {data.education.map((edu, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-center text-gray-800">
                  <span className="font-medium">{edu.institution}</span>
                  <span className="mx-2 text-gray-400">{edu.bullet}</span>
                  <span>{edu.degree}</span>
                </div>
                <div className="text-gray-500 text-sm">{edu.dates}</div>
                <p 
                  className="text-gray-600 mt-2 text-sm cursor-pointer"
                  onClick={() => setIsEditing(`edu-${index}-description`)}
                >
                  {isEditing === `edu-${index}-description` ? (
                    <input
                      type="text"
                      value={edu.description}
                      onChange={(e) => {
                        const newEdu = [...data.education];
                        newEdu[index] = { ...newEdu[index], description: e.target.value };
                        handleEdit('education', newEdu);
                      }}
                      onBlur={() => setIsEditing(null)}
                      className="w-full bg-transparent border-b border-gray-300 focus:outline-none"
                      autoFocus
                    />
                  ) : edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* Skills Content */}
          <div className="mb-16 text-left">
            <p 
              className="text-gray-600 cursor-pointer"
              onClick={() => setIsEditing('skills')}
            >
              {isEditing === 'skills' ? (
                <input
                  type="text"
                  value={data.skills}
                  onChange={(e) => handleEdit('skills', e.target.value)}
                  onBlur={() => setIsEditing(null)}
                  className="w-full bg-transparent border-b border-gray-300 focus:outline-none"
                  autoFocus
                />
              ) : data.skills}
            </p>
          </div>

          {/* Tools Content */}
          <div className="space-y-2 text-left text-black">
            {Object.entries(data.tools).map(([category, tools]) => (
              <div key={category}>
                <span 
                  className="font-medium capitalize cursor-pointer"
                  onClick={() => setIsEditing(`tool-${category}`)}
                >
                  {category}
                </span>
                <span className="mx-2 text-gray-400">•</span>
                <span 
                  className="text-gray-600 cursor-pointer"
                  onClick={() => setIsEditing(`tool-${category}-content`)}
                >
                  {isEditing === `tool-${category}-content` ? (
                    <input
                      type="text"
                      value={tools}
                      onChange={(e) => {
                        const newTools = { ...data.tools, [category]: e.target.value };
                        handleEdit('tools', newTools);
                      }}
                      onBlur={() => setIsEditing(null)}
                      className="bg-transparent border-b border-gray-300 focus:outline-none"
                      autoFocus
                    />
                  ) : tools}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVTemplate1;
