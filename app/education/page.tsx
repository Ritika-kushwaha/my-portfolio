"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Award, Zap } from 'lucide-react';

const ProfessionalTimeline = () => {
  const milestones = [
    {
      year: "2020",
      title: "10th Grade Completion",
      organization: "Lucknow Public School", 
      description: "Completed 10th grade with a focus on foundational subjects, achieving a strong academic record.and got 92.4% marks.",
      icon: <Calendar className="text-green-400" />,
      color: "border-green-500/50"
    },
    {
      year: "2022",
      title: "12th Grade Completion",
      organization: "Lucknow Public School",  
      description: "Completed 12th grade specializing in Science stream with Physics, Chemistry, and Mathematics, securing 80% marks.",
      icon: <Calendar className="text-indigo-400" />,
      color: "border-indigo-500/50"
    },
    {
      year: "2023",
      title: "B.Tech in Computer Science & Engineering in Educational Technology (Ongoing)",
      organization: "VIT Bhopal",
      description: "Pursuing a Bachelor of Technology degree with a specialization in Computer Science and Engineering, focusing on software development and educational technology.",
      icon: <Briefcase className="text-red-400" />,
      color: "border-red-500/50"
    },
    {
      year: "2025",
      title: "Google Summer of Code (GSoC) Contributor",
      organization: "Google Summer of Code",
      description: "Selected as a contributor for GSoC 2025, working on open-source projects and contributing to large-scale codebases.",
      icon: <Award className="text-yellow-400" />,
      color: "border-yellow-500/50"
    },
    {
      year: "2025",
      title: "Industrial Visit - Chennai & Bangalore",
      organization: "VIT Bhopal",
      description: "Participated in a 10-day industrial visit exploring corporate ecosystems and technical infrastructures in major tech hubs.",
      icon: <Briefcase className="text-blue-400" />,
      color: "border-blue-500/50"
    },
    {
      year: "2021",
      title: "Community Service Volunteer",
      organization: "NGO",
      description: "Assisted in fundraising and awareness campaigns, managing digital outreach and resource distribution.",
      icon: <Briefcase className="text-red-400" />,
      color: "border-red-500/50"
    }
  ];

  return (
    <section className="bg-[#0f1115] text-white py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-10 right-0 text-[15rem] font-black text-white/5 pointer-events-none select-none italic">
        HISTORY
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter">
            PROFESSIONAL<br />
            <span className="text-transparent stroke-text">TIMELINE</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gradient-to-b from-gray-800 via-gray-700 to-transparent" />

          <div className="space-y-24">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-gray-900 z-10" />

                {/* Content Card */}
                <div className="w-full md:w-[45%] ml-8 md:ml-0">
                  <div className={`p-8 rounded-[2.5rem] bg-[#16181d] border ${item.color} backdrop-blur-xl hover:scale-[1.02] transition-transform cursor-default`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gray-800 rounded-2xl">
                        {item.icon}
                      </div>
                      <span className="text-3xl font-black italic text-gray-700">{item.year}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">{item.organization}</p>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for Desktop */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalTimeline;