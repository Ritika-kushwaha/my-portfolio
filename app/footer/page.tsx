"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Linkedin, Github, Globe, MessageSquare, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0f1115] text-white pt-32 pb-12 px-6 md:px-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* --- MAIN CALL TO ACTION --- */}
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-500 font-bold tracking-widest text-xs mb-6 uppercase"
          >
            Need a Developer?
          </motion.p>
          
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-[8rem] font-black tracking-tighter mb-12 flex flex-wrap justify-center items-center gap-x-6 leading-none"
          >
            Let's work 
            <span className="inline-flex items-center justify-center bg-gray-800 px-8 py-2 rounded-full transform -rotate-2 border border-gray-700">
              🤝
            </span> 
            together.
          </motion.h2>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:ritikakushwaha62@gmail.com"
              className="flex items-center justify-center gap-3 border border-gray-700 rounded-full px-12 py-5 text-lg font-medium hover:bg-white hover:text-black transition-all"
            >
              <MessageSquare size={20} /> Message
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 border border-gray-700 rounded-full px-12 py-5 text-lg font-medium hover:bg-white hover:text-black transition-all"
            >
              Discuss project
            </motion.button>
          </div>
        </div>

        {/* --- QUICK CONTACT INFO --- */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-24 py-12 border-y border-gray-900">
          <a href="mailto:ritikakushwaha62@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
            <div className="p-3 bg-gray-900 rounded-xl group-hover:text-orange-500 transition-colors border border-gray-800">
              <Mail size={24} />
            </div>
            <span className="text-xl">ritikakushwaha62@gmail.com</span>
          </a>
          
          <div className="hidden md:block w-px h-8 bg-gray-800"></div>

          <div className="flex items-center gap-4 text-gray-400">
            <div className="p-3 bg-gray-900 rounded-xl border border-gray-800">
              <Phone size={24} />
            </div>
            <span className="text-xl">+91 9569317220</span>
          </div>
        </div>

        {/* --- SOCIAL GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {[
            { label: 'LinkedIn', username: 'Ritika Kushwaha', icon: <Linkedin size={18} />, url: 'https://linkedin.com/in/ritika-kushwaha' },
            { label: 'GitHub', username: 'Ritika-Kushwaha', icon: <Github size={18} />, url: 'https://github.com/Ritika-Kushwaha' },
            { label: 'Instagram', username: '@ritika.dev', icon: <Instagram size={18} />, url: '#' },
            { label: 'Portfolio', username: 'v1.ritika.io', icon: <Globe size={18} />, url: '#' }
          ].map((social) => (
            <motion.a 
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              className="group block p-6 border-l border-gray-800 hover:border-orange-500 transition-all bg-transparent"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-lg text-white group-hover:text-orange-500 transition-colors">{social.label}</span>
                <div className="text-gray-600 group-hover:text-white transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <p className="text-sm text-gray-500">{social.username}</p>
            </motion.a>
          ))}
        </div>

        {/* --- FINAL FOOTER --- */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold border-t border-gray-900">
          <div className="flex items-center gap-4">
            <p>© 2026 RITIKA KUSHWAHA</p>
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
            <p>ALL RIGHTS RESERVED</p>
          </div>
          <div className="mt-4 md:mt-0 italic flex items-center gap-2">
            MADE IN <span className="text-gray-400">REACT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;