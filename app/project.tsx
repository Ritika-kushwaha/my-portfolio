// ProjectsPage.tsx - Detailed view of Ritika's projects

import React from 'react';

// Reusing the data structure for projects from the main component
const projectData = [
  {
    name: "NxtStep (Career Counseling Website)",
    type: "Web Development / Backend",
    stack: ["Django", "Python", "HTML", "CSS"],
    description: "Developed a 0-to-1 Career Counseling platform integrating secure authentication and a structured recommendation system.",
    focus: "Gained expertise in backend development, UI/UX design, database management, and user authentication.",
    link: "https://github.com/RitikaKushwaha/NxtStep", // Placeholder
    liveLink: null,
  },
  {
    name: "AlphaShot (2D Educational Game)",
    type: "Game Development / Educational Technology",
    stack: ["Unity", "C#", "Blender"],
    description: "Designed and developed a 2D educational game in Unity, enhancing interactive learning through letter-based gameplay and physics-based mechanics.",
    focus: "Gained expertise in C# programming, game physics, UI/UX design, and 3D modeling with Blender.",
    link: "https://github.com/RitikaKushwaha/AlphaShot", // Placeholder
    liveLink: "https://ritika-games.com/alphashot", // Placeholder
  },
  {
    name: "Lappy (3D Educational Game)",
    type: "Game Development / 3D Graphics",
    stack: ["Unity", "C#", "3D Graphics"],
    description: "Developed a 3D educational game in Unity, integrating an intuitive shooter mechanism for interactive learning.",
    focus: "Enhanced skills in C# programming, 3D graphics, UI/UX design, and gameplay mechanics.",
    link: "https://github.com/RitikaKushwaha/Lappy", // Placeholder
    liveLink: "https://ritika-games.com/lappy", // Placeholder
  }
];

// Helper component for the section header
const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 tracking-wider uppercase">
    {title}
  </h2>
);

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans p-4 sm:p-10">
      
      {/* Back Button/Navigation (Placeholder for real routing) */}
      <a 
        href="/" // If using Next.js or React Router, this should be Link component or router.push
        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition duration-300 mb-10 text-lg font-medium"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Back to Home
      </a>

      <SectionHeader title="My Portfolio of Creative Projects" />

      <main className="max-w-7xl mx-auto space-y-16">
        {projectData.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-800/80 p-8 md:p-12 rounded-xl shadow-2xl border-l-4 border-cyan-500 hover:shadow-cyan-500/40 transition duration-500 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10"
          >
            
            {/* Project Details */}
            <div className="md:w-3/4">
              <h3 className="text-3xl font-bold mb-2 text-purple-400">{project.name}</h3>
              <p className="text-md text-cyan-300 italic mb-4">{project.type}</p>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-lg text-gray-200 mb-2">Key Learnings & Focus:</h4>
                <p className="text-gray-400 text-base">{project.focus}</p>
              </div>

              {/* Stack/Technologies */}
              <div>
                <h4 className="font-semibold text-lg text-gray-200 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-lg text-sm font-medium border border-purple-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links and CTA */}
            <div className="md:w-1/4 flex flex-col space-y-4 pt-4 md:pt-0">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-center py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition duration-300 shadow-lg shadow-cyan-500/30"
              >
                View Code (GitHub)
              </a>
              
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-center py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300 shadow-lg shadow-purple-500/30"
                >
                  View Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </main>

      {/* Footer can be included here if desired */}

    </div>
  );
};

export default ProjectsPage;