"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Linkedin, Github, Globe, MessageSquare, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f1115] border-t border-gray-900 py-8 px-6 md:px-12">
      {/* --- FINAL FOOTER --- */}
<div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
  <><div>
    © {new Date().getFullYear()} <span className="font-semibold text-white">Ritika Kushwaha</span>. All Rights Reserved.
  </div><div className="flex items-center gap-2">
      <span>Built with</span>
      <span className="text-orange-500 font-medium">
        Next.js • Tailwind CSS • Framer Motion
      </span>
    </div><div>
      Designed & Developed by{" "}
      <span className="font-semibold text-white">Ritika Kushwaha</span>
    </div></>
</div>
</footer>
  );
};

export default Footer;