"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Gamepad2, Code2 } from 'lucide-react';
import { easeOut } from 'framer-motion';
import ContactSection from './contact/page';
import EducationJourney from './education/page';
import WorksGallery from './work/page';
import Footer from './footer/page';
import Navbar from './components/navbar/page';
import { img } from 'framer-motion/client';

const Portfolio = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  // Inline Certifications Component as you had it
  const Certifications = () => {
    const certs = [
      { title: "GSoC 2025 Badge", issuer: "Google Summer of Code", date: "2025", type: "Badge" , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9U6Bmi1rYLZjOMmaDjeQsjawxdtIo44Fvg&s"},
      { title: "Fundamentals of AI & ML", issuer: "Vityarthi", date: "2024", type: "Certificate", img: "/images/AI ML Certificate.png" },
      { title: "5-Star JAVA Basics", issuer: "HackerRank", date: "2024", type: "Skill Badge", img: "/images/java.png" },
      { title: "AWS Solutions Architecture", issuer: "Job Simulation", date: "2024", type: "Simulation" , img: "/images/AWSJ.png"},
      {title:"AWS Cloud Practitioner", issuer:"Amazon Web Services", date:"2024", type:"Certificate", img:"/images/AWSC.png"},
      { title: "Python Essentials", issuer: "Vityarthi", date: "2024", type: "Certificate", img: "/images/python.png" },
      {title: "AWS Technical Essentials", issuer: "Amazon Web Services", date: "2024", type: "Certificate", img:"/images/AWST.png"},
      {title:"Data Analysis with Python", issuer:"IBM", date:"2025", type:"Certificate", img:"/images/DA.png"},
      {title: "JavaScript Essentials", issuer: "CodeSignal", date: "2025", type: "Certificate", img: "/images/JS.png" },
      {title:"Applied Machine Learning in Python", issuer:"Coursera", date:"2025", type:"Certificate", img:"/images/ML.png"},
    ];
    return (
      <section id="certifications" className="bg-[#0f1115] py-32 px-6 md:px-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black italic mb-16 text-white">CERTIFICATIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certs.map((cert, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-[#16181d] p-8 rounded-[2rem] border border-gray-800 flex flex-col justify-between h-64 group hover:border-orange-500 transition-colors">
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">{cert.type}</p>
                  <h4 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors">{cert.title}</h4>
                  <div className="mt-4">
                    <button >
                      <a href={cert.img} >
                        <img src={cert.img} alt={cert.title} className="w-full h-32 object-contain rounded-lg border border-gray-700" />
                      </a>
                    </button>
                    
                    </div>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-sm text-gray-600 italic">{cert.issuer}</span>
                  <span className="text-xs font-black text-gray-800">{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-[#0f1115] text-white selection:bg-orange-500 selection:text-white overflow-x-hidden">
      
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-7xl mx-auto w-full">
          <motion.p variants={fadeInUp} className="text-orange-500 font-bold mb-4 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-orange-500"></span> B.Tech Student 
          </motion.p>
          <motion.h1 variants={fadeInUp} className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] mb-8">
            Engineering<br />
            <span className="text-transparent stroke-text italic">STUDENT</span>
          </motion.h1>
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12">
            <div className="max-w-md text-gray-400 leading-relaxed italic text-lg">
              "Highly motivated and skilled Computer Science student specializing in Educational Technology with experience in game development, web development, and 3D modeling."
            </div>
            <div className="flex gap-4">
               <div className="bg-gray-800/50 p-6 rounded-3xl border border-gray-700 backdrop-blur-sm text-center">
                  <div className="text-3xl font-bold italic">8.46</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">GPA </div>
               </div>
               <div className="bg-gray-800/50 p-6 rounded-3xl border border-gray-700 backdrop-blur-sm text-center">
                  <div className="text-3xl font-bold italic">GSoC</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Contributor 2025 </div>
               </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Wrap components with IDs that match Navbar hrefs */}
      <section id="education">
        <EducationJourney />
      </section>

      <section id="work">
        <WorksGallery />
      </section>

      <Certifications />

      <section id="contact">
        <Footer />
      </section>

      <style>{`
        .stroke-text { -webkit-text-stroke: 1px white; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default Portfolio;