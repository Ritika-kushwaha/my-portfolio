"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const navLinks = [
    { name: 'Works', href: '#work' },
    { name: 'Education', href: '#education' },
    { name: 'Socials', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12 bg-transparent">
      {/* Brand Name */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-bold tracking-tighter text-xl text-white border-b-2 border-white leading-none cursor-pointer uppercase"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        RITIKA KUSHWAHA
      </motion.div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="hover:text-white transition-colors relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Action Button */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="border border-gray-700 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
      >
        <a href="/images/resume.png" download="resume.png">DOWNLOAD CV</a>
      </motion.button>
    </nav>
  );
}