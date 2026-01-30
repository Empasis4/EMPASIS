import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { useTheme } from '../context/ThemeContext';
import mata from '../../mata.png';
import piyong from '../../piyong.png';

const About: React.FC = () => {
  const { isDark } = useTheme();
  const skills = ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Docker'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="section-title flex justify-center mb-16">About Me</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <ScrollReveal delay={100}>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={isDark ? piyong : mata}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onLoad={() => console.log(`Image loaded: ${isDark ? 'piyong' : 'mata'}`)}
                  onError={(e) => {
                    const src = (e.target as HTMLImageElement).src;
                    console.error(`Image failed to load: ${src}`);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </ScrollReveal>

          {/* Bio and Skills */}
          <ScrollReveal delay={200}>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p
                variants={itemVariants}
                className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed"
              >
                I'm a passionate full-stack developer with 5+ years of experience building web applications.
                I love crafting elegant solutions to complex problems and creating seamless user experiences.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed"
              >
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the dev community.
              </motion.p>

              {/* Skills */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-4">Core Skills</h3>
                <motion.div
                  className="grid grid-cols-2 gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={itemVariants}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg font-semibold text-center border border-blue-200 dark:border-blue-800"
                      whileHover={{ scale: 1.05, backgroundColor: '#3B82F6', color: '#fff' }}
                      transition={{ duration: 0.3 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
