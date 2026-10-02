"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Code2, Gamepad, Zap } from 'lucide-react';
import nxtstepImg from '../images/nxtstep.png';
import alphashotImg from '../images/alphashot.png';
import tryoImg from '../images/tryo.png';
import markdarshanImg from '../images/markdarshan.png';

export default function WorksGallery() {
  const projects = [
    {
      title: "PrimeCare",
      category: "Healthcare Platform",
      desc: "**PrimeCare** — AI-powered healthcare platform for appointment management, patient follow-ups, symptom triage, and automated healthcare workflows.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Google Gemini API", "Nodemailer", "Google Calendar API"],
      icon: <Gamepad size={40} className="text-blue-500" />,
      img: '/images/PrimeCare.png', // Replace with your screenshot
      github: "https://github.com/Ritika-kushwaha/PrimeCare",
    live: "https://primecare-app-jet.vercel.app/",
    },
    {
      title: "NxtStep",
      category: "Career Guidance Platform",
      desc: "Built an AI-powered career counseling platform that recommends personalized career paths, learning resources, and skill roadmaps based on student interests and academic background.",
      tech: ["Tailwind", "Python", "Next.js","Gemini AI"],
      icon: <Layers size={40} className="text-orange-500" />,
      img: '/images/nxtstep.png', // Replace with your screenshot
      github: "https://github.com/Ritika-kushwaha/NxtStep",
    live: "https://nxtstep31.vercel.app",
    },
    
    {
      title:"Tryo",
      category: "E Commerce Platform",
      desc:"Designed and developed a modern e-commerce application with secure authentication, Firebase backend, product management, and responsive user experience.",
      tech:["React", "Node.js", "Firebase","Tailwind"],
      icon:<Code2 size={40} className="text-green-500" />,
      img: '/images/tryo.png', // Replace with your screenshot
      github: "https://github.com/Ritika-kushwaha/tryo-skincare",
    live: "https://tryo-organic-beauty.vercel.app",
    },
    {
      title: "MarkDarshan",
      category: "Travel & Navigation Platform",
      desc: "Created a travel assistance platform featuring optimized routes, weather forecasting, expense tracking, emergency SOS, and owner dashboards for smarter trip planning.",
      tech: ["Next.js", "Typescript", "Firebase "],
      icon: <Layers size={40} className="text-purple-500" />,
      img: '/images/markdarshan.png', // Replace with your screenshot
      github: "https://github.com/Akshaj-mishra/MARGDARSHAN",
    live: "https://markdarshan-frontend.vercel.app",
    },
    {
      title: "SalesGenie AI",
      category: "AI • Full Stack Development",
      desc: "Developing an AI-powered Sales Intelligence Platform that analyzes companies, generates business insights, and helps sales teams identify potential opportunities using LLMs.",
      tech: ["Python", "React", "FastAPI", "PostgreSQL", "OpenAI API", "Git", "GitHub"],
      icon: <Zap size={40} className="text-yellow-500" />,
      img: '/images/salesgenie.png',
      github: "https://github.com/Ritika-kushwaha/Salesgenie_ai",
    live: "", // Leave empty if private
    }
  ];

  return (
    <section id="works" className="bg-[#0f1115] py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter mb-20 text-white/10">WORKS</h2>
        
        <div className="grid grid-cols-1 gap-32">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 group relative overflow-hidden rounded-[3rem] border border-white/10">
                <img src={project.img} alt={project.title} className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-12">
                   <div className="flex gap-4">
                      <div className="flex gap-4">
  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-black p-4 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
    >
      <ExternalLink size={20} />
    </a>
  )}

  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-black p-4 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
    >
      <Github size={20} />
    </a>
  )}
</div>
                   </div>
                </div>
              </div>
              
              <div className="flex-1 text-white">
                <span className="text-orange-500 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">{project.category}</span>
                <h3 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tight">{project.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">{project.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map(t => <span key={t} className="text-[10px] font-bold border border-gray-700 px-4 py-1 rounded-full uppercase text-gray-500">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}