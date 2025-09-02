import React, { useState } from "react";

// External link icon
const ExternalLinkIcon = () => (
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
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

// GitHub icon
const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    desc: "A modern e-commerce platform built with React, TypeScript, and Tailwind CSS. Features include user authentication, shopping cart, and payment integration.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],

    githubUrl: "https://github.com/Maina-git/GizmoGalaxy-",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Portfolio Website",
    desc: "A responsive portfolio website showcasing modern design principles with smooth animations and interactive elements.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    technologies: ["React", "Framer Motion", "CSS3", "JavaScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project2",
    category: "UI/UX Design",
  },
  {
    id: 3,
    title: "Fitness and Healthcare App",
    desc: "This is a React Native application designed to help users track their fitness and healthcare activities. The app includes features such as user authentication, workout tracking, daily activity monitoring, and personalized greetings.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
    technologies: ["React Native", "Firebase", "Tailwind css"],

    githubUrl: "https://github.com/Tornshorts/fitnessapp",
    category: "Mobile Development",
  },
  {
    id: 4,
    title: " Document-based Q&A.",
    desc: "A simple Retrieval-Augmented Generation (RAG) system using LangChain, Ollama, and ChromaDB for document-based Q&A.",
    image:
      "https://media.istockphoto.com/id/2170466726/photo/creative-idea-or-problem-solving-concept-light-bulb-and-question-mark-on-speech-bubbles.webp?a=1&b=1&s=612x612&w=0&k=20&c=oB5DZMt3bXNV64BQ5WRQJV9i9qqUH5ahQjMNPj4N8mQ=",
    technologies: ["Python", "LangChain", "Ollama", "ChromaDB"],
    githubUrl: "https://github.com/Tornshorts/RAG-Tutorial",
    category: "AI / Machine Learning",
  },
  {
    id: 5,
    title: "Data Visualization Dashboard",
    desc: "An interactive dashboard for data visualization with real-time charts, filtering capabilities, and export functionality.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["D3.js", "Python", "Flask", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project5",
    category: "Data Science",
  },
  {
    id: 6,
    title: "Social Media Platform",
    desc: "A full-stack social media platform with real-time messaging, image sharing, and social networking features.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    technologies: [
      "Flask",
      "Python",
      "SQLAlchemy",
      "Flask-Migrate",
      "HTML/CSS",
      "JavaScript",
    ],
    liveUrl: "https://dashboard.render.com/web/srv-co606e779t8c738r8lvg",

    githubUrl: "https://github.com/username/project6",
    category: "Full Stack",
  },
];

const categories = [
  "All",
  "Web Development",
  "UI/UX Design",
  "Mobile Development",
  "Data Science",
  "Full Stack",
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="bg-gray-900 py-20 px-6 lg:px-12 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
            My Portfolio
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Showcasing my latest work and projects across various technologies
            and domains
          </p>

          {/* Large background text */}
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[8rem] lg:text-[12rem] font-black text-gray-800/10 select-none pointer-events-none whitespace-nowrap"
            style={{ letterSpacing: "-0.05em" }}
          >
            PORTFOLIO
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-green-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800/70 transition-all duration-300 group cursor-pointer transform hover:scale-105"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay buttons */}
                <div
                  className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
                    hoveredProject === project.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2"
                  }`}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200"
                  >
                    <ExternalLinkIcon />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-200"
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category badge */}
                <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-green-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-green-500 text-white font-semibold rounded-none hover:bg-green-600 transition-colors duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
