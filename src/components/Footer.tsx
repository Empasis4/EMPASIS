import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Phone, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/Empasis4', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/Empasis4', label: 'LinkedIn' },
    { icon: Phone, url: 'tel:+639150042749', label: 'Phone' },
    { icon: Mail, url: 'mailto:jeffer.empasis@urios.edu.ph', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 gradient-text">Portfolio</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A modern, fully responsive personal portfolio built with React, Framer Motion, and Tailwind CSS.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Projects', id: 'projects' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 md:mb-0 flex items-center gap-1">
              © {currentYear} Your Name. Designed & Built with{' '}
              <Heart size={14} className="text-red-500 fill-red-500" /> by You.
            </p>
            <p>Made with React • Framer Motion • Tailwind CSS</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
