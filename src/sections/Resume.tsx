import React from "react";

// Calendar icon
const CalendarIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

// Location icon
const LocationIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University Of Embu",
    location: "Embu",
    period: "2022 - ",
 
  },
 
];

const skills = {
  "Frontend Technologies": [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "SASS/SCSS",
  ],
  "Backend Technologies": [
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "PostgreSQL",
    "MongoDB",
  ],
  "Tools & Platforms": [
    "Git",
    "Docker",
    "AWS",
    "Figma",
    "Adobe Creative Suite",
    "Webpack",
    "Vite",
  ],
  "Soft Skills": [
    "Team Leadership",
    "Project Management",
    "Problem Solving",
    "Communication",
    "Agile/Scrum",
  ],
};

const Resume: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20 px-6 lg:px-12 relative overflow-hidden">
      <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Education */}
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </span>
              Education
            </h3>

            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <div key={idx} className="bg-gray-800/50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white mb-2">
                    {edu.degree}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 text-gray-300">
                    <span className="font-semibold text-green-400">
                      {edu.school}
                    </span>
                    <span className="hidden sm:block">•</span>
                    <span className="flex items-center gap-1">
                      <LocationIcon />
                      {edu.location}
                    </span>
                    <span className="hidden sm:block">•</span>
                    <span className="flex items-center gap-1">
                      <CalendarIcon />
                      {edu.period}
                    </span>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Skills */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            Skills
          </h3>

          <div className="space-y-6">
            {Object.entries(skills).map(([category, skillList], idx) => (
              <div key={idx} className="bg-gray-800/50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-green-400 mb-4">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full hover:bg-gray-600 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
