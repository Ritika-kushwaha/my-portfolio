import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaLink, FaRss, FaFacebookF } from 'react-icons/fa';
import { PiSuitcaseSimpleBold, PiCodeBlockBold, PiCloudArrowUpBold } from 'react-icons/pi';

// --- 1. TYPE DEFINITIONS (TypeScript Interfaces) ---

interface Skill {
  icon: React.ElementType; // Icon component type
  title: string;
  description: string;
}

interface Experience {
  company: string;
  title: string;
  duration: string;
  techStack: string[];
}

interface Project {
  title: string;
  description: string;
  category: string;
}

// --- 2. DATA (Mock Data based on the images) ---

const SKILLS_DATA: Skill[] = [
  {
    icon: PiSuitcaseSimpleBold,
    title: "Python & Java",
    description: "I develop scalable and maintainable web applications using Java and Python.",
  },
  {
    icon: PiCodeBlockBold,
    title: "JavaScript & React",
    description: "I build modern and responsive user interfaces using React and its ecosystem.",
  },
  {
    icon: PiCloudArrowUpBold,
    title: "2D/3D Game Development",
    description: "I create immersive and interactive 2D and 3D games using Unity and Blender.",
  },
  {
    icon: PiCloudArrowUpBold,
    title: "Web Development",
    description: "I design and develop dynamic and user-friendly websites using HTML, CSS, and JavaScript.",
  },
  {
    icon: PiCloudArrowUpBold,
    title: "Data Analysis with Python",
    description: "I use python for data analysis and visualization.",
  },
  {    icon: PiCloudArrowUpBold,
    title: "3D Modeling, Rendering, Animation",
    description: "I create detailed 3D models, renderings, and animations using Blender.",
  },
];

const EXPERIENCES_DATA: Experience[] = [
  { company: "Google Summer of Code 2025 Contributor", title: "CONTRIBUTOR", duration: "2025", techStack: ["Python", "Django", "Node.js"] },
  { company: "Collecteurs", title: "FRONTEND ENGINEER", duration: "MARCH 2022 - AUG 2022", techStack: ["JS", "TS", "React", "MobX"] },
  { company: "Filiz Security Systems", title: "FULL STACK ENGINEER", duration: "DEC 2019 - FEB 2022", techStack: ["JS", "TS", "React", "Node.js", "Express", "PostgreSQL"] },
];

const PROJECTS_DATA: Project[] = [
  { title: "Filiz Security Systems", description: "A security systems company's website built with Next.JS, Prisma ORM and Elastic UI.", category: "IZMIR KAMERA SİSTEMLERİ" },
  { title: "Enforto GmbH", description: "Enforto GmbH is an e-mobility company that provides engineering services for next generation e-powertrain. It is built by Next.JS with Stitches.JS.", category: "E-MOBILITY" },
  { title: "Normod Cyprus", description: "Modular, smart and high-quality modern sofa sets.", category: "KIBRIS MOBİLYA VE KOLTUK TAKIMLARI" },
  { title: "MCE Global", description: "Architecture company website that is designed and built by Webflow and hosted on a WordPress server.", category: "ARCHITECTURE" },
  { title: "Blogging Platforms", description: "Discover and compare the best blogging platforms.", category: "BLOGGING PLATFORMS" },
];

// --- 3. REUSABLE COMPONENTS ---

// Component for a skill card (Python, JS, AWS)
const SkillCard: React.FC<Skill> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col space-y-3 p-4">
    <Icon className="text-teal-400 w-8 h-8" />
    <h4 className="text-xl font-semibold text-white">{title}</h4>
    <p className="text-gray-400">{description}</p>
  </div>
);

// Component for an experience card
const ExperienceCard: React.FC<Experience> = ({ company, title, duration, techStack }) => (
  <div className="p-6 bg-gray-800/30 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition duration-300">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-xl font-semibold text-white">{company}</h3>
      <span className="text-xs text-gray-400">{duration}</span>
    </div>
    <p className="text-sm font-medium text-purple-400 mb-4">{title}</p>
    {/* Simplified tech stack display for this example */}
    <div className="flex space-x-2 text-xs text-gray-500">
      {/* In a real app, you would use icons instead of text */}
      {techStack.map(tech => <span key={tech} className="bg-gray-700 px-2 py-0.5 rounded">{tech}</span>)}
    </div>
  </div>
);

// Component for a client project card
const ProjectCard: React.FC<Project> = ({ title, description, category }) => (
  <div className="p-6 bg-gray-900/40 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition duration-300 min-h-[160px]">
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <span className="text-xs tracking-widest uppercase text-blue-400">{category}</span>
  </div>
);


// --- 4. MAIN PORTFOLIO PAGE COMPONENT ---

const PortfolioPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans" style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.08) 0%, rgba(0, 0, 0, 0.8) 70%)' }}>

      {/* Navigation */}
      <header className="py-6 px-8 flex justify-end">
        <nav className="space-x-8 text-lg font-medium">
          <a href="#home" className="hover:text-purple-400 transition">Home</a>
          <a href="#blog" className="hover:text-purple-400 transition">Blog</a>
        </nav>
      </header>

      <main className="container mx-auto px-8 py-16">

        {/* 1. Hero Section */}
        <section id="home" className="mb-32">
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">FULLSTACK WEB DEVELOPER</p>
          <h1 className="text-6xl md:text-8xl font-light mb-4 leading-tight">
            Hi, I'm Can. 👋
          </h1>
          <h2 className="text-6xl md:text-8xl font-serif italic mb-8 leading-tight text-purple-300">
            I enjoy programming.
          </h2>
          <p className="max-w-xl text-xl text-gray-300">
            A highly motivated and skilled Computer Science student specializing in Educational Technology with experience in game development, web development, and 3D modeling. Passionate about creating engaging user experiences and interactive learning tools.         
          </p>
        </section>

        {/* 2. Skills/Expertise Section */}
        <section id="skills" className="mb-32">
          <h2 className="text-4xl md:text-6xl font-light mb-4">
            I solve problems
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif italic mb-12 text-teal-400">
            with Python, Java, Unity, Blender, and web technologies
          </h3>
          <p className="max-w-3xl text-lg text-gray-300 mb-16">
            With strong problem-solving skills and a keen interest in AI and data analytics, I excel at confidently solving problems using Django, React, game development, web development, and 3D modeling.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SKILLS_DATA.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </section>

        {/* 3. Professional Experiences Section */}
        <section id="experience" className="mb-32">
          <h2 className="text-2xl tracking-widest uppercase text-gray-400 mb-10">
            PROFESSIONAL EXPERIENCES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EXPERIENCES_DATA.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </section>

        {/* 4. Client Projects Section */}
        <section id="projects" className="mb-32">
          <h2 className="text-2xl tracking-widest uppercase text-gray-400 mb-10">
            CLIENT PROJECTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS_DATA.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </main>

      {/* 5. Footer */}
      <footer className="py-8 px-8 border-t border-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500">
          <div className="flex items-center space-x-2 text-lg">
            {/* Placeholder for the gradient logo/icon */}
            <div className="w-6 h-6 rounded-full" style={{ background: 'linear-gradient(45deg, #FF69B4, #8A2BE2)' }}></div>
            <p>Crafted by Can Burak Sodyakoglu with ❤️</p>
          </div>

          <div className="flex space-x-6 text-2xl mt-4 md:mt-0">
            <a href="#" aria-label="Facebook" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition"><FaLinkedin /></a>
            <a href="#" aria-label="GitHub" className="hover:text-white transition"><FaGithub /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" aria-label="RSS Feed" className="hover:text-white transition"><FaRss /></a>
          </div>

          <div className="flex space-x-6 text-sm mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Contact</a>
            <a href="#" className="hover:text-white transition">Blog</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;