// PortfolioPage.tsx - Designed to mimic the dark, neon-aesthetic of the provided image.
import React from 'react';
import ProjectsPage from './app/project.tsx';

// --- Data Structure (Optional but good practice) ---
const resumeData = {
  name: "RITIKA KUSHWAHA",
  title: "STUDENT | BACHELORS OF TECHNOLOGY",
  heroTagline: "Innovating at the intersection of Gaming, Web, and AI.",
  about: "A highly motivated and skilled Computer Science student specializing in Educational Technology with expertise in game development, web development, and 3D modeling. Passionate about creating engaging user experiences and interactive learning tools. Proficient in Python, Java, Unity, Blender, and web technologies, with strong problem-solving skills and a keen interest in AI and data analytics.",
  education: [
    {
      institution: "VIT BHOPAL UNIVERSITY, KOTHRI KALAN",
      degree: "Bachelor of Technology in Computer Science (Educational Technology)",
      years: "2023 - 2027",
      details: "Departments Dean's List (All Semesters), Cumulative GPA: 8.36"
    },
    {
      institution: "LUCKNOW PUBLIC SCHOOL, CBSE LUCKNOW",
      degree: "Degree: Class XII",
      years: "2022",
      details: "Percentage: 80%"
    },
    {
      institution: "LUCKNOW PUBLIC SCHOOL, CBSE LUCKNOW",
      degree: "Degree: Class X",
      years: "2020",
      details: "Percentage: 92.4%"
    }
  ],
  skills: {
    programming: ["Python, Java", "JavaScript, HTML, CSS", "Django", "PWA", "OOP"],
    gameDev: ["Unity (C#) (Unreal Engine)", "2D/3D Game Development"],
    data: ["Blender (3D Modeling, Rendering, Animation)", "Data Analysis with Python", "AI & Machine Learning Fundamentals", "Asset Optimization for Games"]
  },
  projects: [
    {
      name: "NxtStep (Career Counseling Website)",
      description: "Developed a 0-to-1 Career Counseling platform using Django, Python, HTML, and CSS, integrating secure authentication and a structured recommendation system.",
      focus: "Gained expertise in backend development, UI/UX design, database management, and user authentication."
    },
    {
      name: "AlphaShot (Educational Game)",
      description: "Designed and developed a 2D educational game in Unity, enhancing interactive learning through letter-based gameplay and physics-based mechanics.",
      focus: "Gained expertise in C# programming, game physics, UI/UX design, and 3D modeling with Blender."
    },
    {
      name: "Lappy (3D Educational Game)",
      description: "Developed a 3D educational game in Unity, integrating an intuitive shooter mechanism for interactive learning.",
      focus: "Enhanced skills in C# programming, 3D graphics, UI/UX design, and gameplay mechanics."
    }
  ],
  workExperience: [
    {
      title: "Volunteer at NGO",
      details: [
        "Assisted in fundraising efforts through online platforms and social media.",
        "Organized and promoted virtual donation drives to collect monetary and in-kind donations.",
        "Created awareness campaigns to increase outreach and participation in donation initiatives.",
        "Collaborated with a team to ensure efficient distribution of collected resources."
      ]
    }
  ],
  certifications: [
    { name: "Fundamentals of AI & ML - Vityarthi", link: "https://drive.google.com/file/d/1ALFk5j2BmWPhtuvbbaJDx1ZFeCpbAh3R/view?usp=sharing" },
    { name: "Python Essentials - Vityarthi", link: "https://drive.google.com/file/d/1chfa0VWPGtNC0R3T7n3G01V132uz1fEi/view?usp=sharing" },
    { name: "MATLAB Onramp Course", link: "https://drive.google.com/file/d/1OAmW04cuNHuxsUI86u95xz5Zw2FvclTp/view?usp=sharing" },
    { name: "5-Star JAVA Badge - HackerRank", link: "https://www.hackerrank.com/certificates/iframe/7b7fe22a569f" },
    // { name: "GSOC Badge for Contributions - Google Summer of Code 2024", link: "https://summerofcode.withgoogle.com/ritika-gsoc" },
    { name: "AWS Solutions Architecture Job Simulation", link: "https://drive.google.com/file/d/1Rz4ib2w6MsGATRVS-liLnrYr4PYrGoUv/view?usp=sharing" },
    { name: "Data Analysis with Python", link: "https://drive.google.com/file/d/1Rz4ib2w6MsGATRVS-liLnrYr4PYrGoUv/view?usp=sharing" },
    { name: "AWS Technical Essentials", link: "https://drive.google.com/file/d/1LbJlKr_Fr20bJPCyQlBy4Ckx3q6z_AKX/view?usp=sharing" },
    { name: "Official Practice Question Set: AWS Certified ", link: "https://drive.google.com/file/d/1yIWDO0LUO2FLXG8nlq_iJYhpJlw4taLk/view?usp=sharing" },
    { name: "Full-Stack Engineering with JavaScript", link: " https://codesignal.com/learn/certificates/cmcri5jfe000yjv0466dwxsl6/course-paths/14" }
  ],
  activities: [
    "Google Summer of Code 2025 Contributor",
    "Participated in various hackathons & coding competitions",
    "Community Service Volunteer at NGO",
    "Member of university coding & game development clubs"
  ]
};

// --- Helper Components ---

// Reusable pill/tag component
const SkillPill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-700 hover:bg-purple-800/60 transition duration-300 cursor-pointer">
    {children}
  </span>
);

// Section Header component
const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-wider uppercase">
    {title}
  </h2>
);

// --- Main Portfolio Component ---

const PortfolioPage: React.FC = () => {
  return (
    // Mimic the dark background and overall structure
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans p-4 sm:p-8">
      
      
      
      {/* 1. Header/Hero Section */}
      <header className="py-60 text-center relative overflow-hidden">
        
        
        {/* Abstract background grid effect */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          {/* Simple grid pattern */}
          <div className="w-full h-full bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_30%,transparent_100%)]" />
          
        </div>
        
        
        
       <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-50">
        
        {/* Profile Image Container */}
        <div className="w-40 h-40 md:w-70 md:h-70 rounded-full overflow-hidden border-4 border-cyan-400 p-1 shadow-2xl shadow-cyan-500/50 flex-shrink-0">
            {/*  */}
            <img 
                src="https://drive.google.com/file/d/1ocKuSghr9CPZredwl1eOSdDIc2d0SFsE/view?usp=sharing" // *** IMPORTANT: CHANGE THIS PATH ***
                alt="Ritika Kushwaha Profile Picture" 
                className="w-full h-full object-cover rounded-full"
            />
        </div>

        {/* Text Content */}
        <div className='text-center md:text-left'> 
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
              Hey, I am {resumeData.name}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl font-light mb-4 text-cyan-300">
            {resumeData.heroTagline}
          </p>
          <p className="text-md text-gray-400 italic mb-6">
            {resumeData.title}
          </p>
          {/* Example CTA button */}
          <button className="mx-auto md:mx-0">
            <a 
            href="/app/project.tsx" // CHANGE: Added href to link to the projects section
            className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition duration-300 shadow-xl shadow-cyan-500/30"
          >
            View My Projects
          </a>
          </button>
        </div>
    </div>
        
      </header>

      <main className="max-w-7xl mx-auto space-y-24 pt-10">

        {/* 2. About Me Section */}
        <section id="about">
          <SectionHeader title="About Me" />
          <div className="bg-gray-800/70 p-8 rounded-xl shadow-2xl shadow-purple-900/50 border border-purple-700/50 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-300">
              {resumeData.about}
            </p>
          </div>
        </section>

        {/* 3. Skills and Certifications (Side-by-Side in the resume, adapting to a split layout) */}
        <section id="skills-certs" className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Skills */}
          <div className="p-6 bg-gray-800/70 rounded-xl shadow-xl border border-cyan-700/50">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400 border-b border-cyan-700 pb-2">Tools and Skills</h3>
            <div className="space-y-6">
              
              <div className=''>
                <h4 className="text-xl font-medium mb-3 text-purple-400">Programming & Web</h4>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.programming.map(skill => <SkillPill key={skill}>{skill}</SkillPill>)}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-medium mb-3 text-purple-400">Game Development</h4>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.gameDev.map(skill => <SkillPill key={skill}>{skill}</SkillPill>)}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-medium mb-3 text-purple-400">Data & 3D Modeling</h4>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.data.map(skill => <SkillPill key={skill}>{skill}</SkillPill>)}
                </div>
              </div>
            </div>
          </div>
          
          {/* Certifications and Activities */}
          <div className="p-6 bg-gray-800/70 rounded-xl shadow-xl border border-cyan-700/50">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400 border-b border-cyan-700 pb-2">Certifications & Activities</h3>
            <div className="space-y-6">
              
              <div>
                <h4 className="text-xl font-medium mb-3 text-purple-400">Certifications</h4>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
                  {/* MODIFIED RENDERING LOGIC */}
                  {resumeData.certifications.map((cert, index) => (
                    <li key={index} className="transition duration-300">
                      <a 
                        href={cert.link} // Use the link from the data object
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-300 hover:text-cyan-300 hover:underline" // Added hover styles for link
                      >
                        {cert.name}
                      </a>
                    </li>
                  ))}
                  {/* END MODIFIED LOGIC */}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-medium mb-3 text-purple-400">Activities</h4>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
                  {resumeData.activities.map((activity, index) => (
                    <li key={index} className="hover:text-cyan-300 transition duration-300">{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* 4. Education Section */}
        <section id="education">
          <SectionHeader title="Academic Journey" />
          <div className="space-y-8 max-w-5xl mx-auto">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="relative bg-gray-800/80 p-6 rounded-lg shadow-lg border-l-4 border-purple-500 hover:shadow-purple-500/30 transition duration-300">
                <p className="absolute -top-3 right-4 text-sm font-mono text-purple-400 bg-gray-900 px-2 py-0.5 rounded-full">{edu.years}</p>
                <h3 className="text-xl font-semibold text-cyan-300">{edu.degree}</h3>
                <p className="text-lg text-gray-300 italic mb-2">{edu.institution}</p>
                <p className="text-sm text-gray-400">{edu.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Projects Section */}
        <section id="projects">
          <SectionHeader title="My Key Projects" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resumeData.projects.map((project, index) => (
              <div key={index} className="bg-gray-800/70 p-6 rounded-xl shadow-2xl hover:shadow-cyan-500/40 transition duration-500 border border-gray-700/50">
                <h3 className="text-xl font-bold mb-3 text-purple-400">{project.name}</h3>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <p className="text-xs italic text-cyan-300 border-t border-gray-700 pt-3">
                  <span className="font-semibold">Key Focus:</span> {project.focus}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Work Experience Section (Volunteer/Internship) */}
        <section id="experience">
          <SectionHeader title="Work & Volunteer Experience" />
          <div className="max-w-4xl mx-auto space-y-6">
            {resumeData.workExperience.map((work, index) => (
                <div key={index} className="bg-gray-800/70 p-6 rounded-xl shadow-xl border-2 border-purple-900">
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-2">{work.title}</h3>
                    <ul className="list-disc list-outside space-y-2 ml-6 text-gray-300">
                        {work.details.map((detail, i) => (
                            <li key={i} className="text-base">{detail}</li>
                        ))}
                    </ul>
                </div>
            ))}
          </div>
        </section>

      </main>

      {/* 7. Footer */}
      <footer className="mt-20 py-8 text-center border-t border-gray-700/50">
        <p className="text-sm text-gray-500">
          Designed and Coded by Ritika Kushwaha | Built with React & Tailwind CSS
        </p>
        <div className="mt-4 flex justify-center space-x-6 text-xl">
            {/* Replace # with actual links */}
            <a href="https://github.com/Ritika-kushwaha" className="text-cyan-400 hover:text-white transition duration-300">GitHub</a>
            <span className="text-gray-600">|</span>
            <a href="https://www.linkedin.com/in/ritikakushwaha/" className="text-cyan-400 hover:text-white transition duration-300">LinkedIn</a>
            <span className="text-gray-600">|</span>
            <a href={`mailto:ritikakushwaha62@gmail.com`} className="text-cyan-400 hover:text-white transition duration-300">Email</a>
        </div>
      </footer>

    </div>
  );
};

export default PortfolioPage;

// Note: To make the grid effect work, you would need to define a custom utility class 
// or use a utility from a library like tailwind-shades/pattern-fills. 
// For this example, assume the following CSS is available or use a library:
// .bg-grid-white\/\[0\.05\] {
//   background-image: linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%);
//   background-size: 100px 100px;
// }