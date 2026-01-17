"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Code2, Gamepad } from 'lucide-react';
import nxtstepImg from '../images/nxtstep.png';
import alphashotImg from '../images/alphashot.png';
import tryoImg from '../images/tryo.png';
import markdarshanImg from '../images/markdarshan.png';

export default function WorksGallery() {
  const projects = [
    {
      title: "NxtStep",
      category: "Web Development",
      desc: "A career counseling platform using Django, Python, HTML, and CSS with secure authentication.",
      tech: ["Django", "Python", "PostgreSQL"],
      icon: <Layers size={40} className="text-orange-500" />,
      img: '/images/nxtstep.png' // Replace with your screenshot
    },
    {
      title: "AlphaShot",
      category: "Game Design",
      desc: "3D educational game in Unity with letter-based gameplay and physics-based mechanics.",
      tech: ["Unity", "C#", "Blender"],
      icon: <Gamepad size={40} className="text-blue-500" />,
      img: '/images/alphashot.png' // Replace with your screenshot
    },
    {
      title:"Tryo",
      category: "Web Development",
      desc:"A e commerce web application built with React, Node.js, and Firebase featuring e-commerce functionality.",
      tech:["React", "Node.js", "Firebase"],
      icon:<Code2 size={40} className="text-green-500" />,
      img: '/images/tryo.png', // Replace with your screenshot
    },
    {
      title: "MarkDarshan",
      category: "Web Development",
      desc: "A community platform offering resources and tools for peoples to know there vehicle capabilities.",
      tech: ["React", "Node.js", "Firebase"],
      icon: <Layers size={40} className="text-purple-500" />,
      img: '/images/markdarshan.png' // Replace with your screenshot
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
                      <button className="bg-white text-black p-4 rounded-full hover:bg-orange-500 hover:text-white transition-colors"><ExternalLink size={20}/></button>
                      <button className="bg-white text-black p-4 rounded-full hover:bg-orange-500 hover:text-white transition-colors"><Github size={20}/></button>
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