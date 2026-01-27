import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
    { name: 'Next.js', level: 85, category: 'Frontend' },
    // Backend
    { name: 'Node.js', level: 90, category: 'Backend' },
    { name: 'Express', level: 88, category: 'Backend' },
    { name: 'PostgreSQL', level: 85, category: 'Backend' },
    { name: 'MongoDB', level: 85, category: 'Backend' },
    // Tools
    { name: 'Git', level: 90, category: 'Tools' },
    { name: 'Docker', level: 80, category: 'Tools' },
    { name: 'AWS', level: 75, category: 'Tools' },
    { name: 'CI/CD', level: 80, category: 'Tools' },
  ];

  const categories = ['Frontend', 'Backend', 'Tools'];

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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="section-title flex justify-center mb-16">Skills & Technologies</h2>
        </ScrollReveal>

        {categories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category);

          return (
            <ScrollReveal key={category} delay={100}>
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">{category}</h3>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {categorySkills.map((skill) => (
                    <motion.div key={skill.name} variants={itemVariants}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
                        <span className="text-sm text-blue-500 font-bold">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </ScrollReveal>
          );
        })}

        {/* Stats Section */}
        <ScrollReveal delay={300}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '5+', label: 'Years Experience' },
              { number: '30+', label: 'Happy Clients' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-4xl font-bold gradient-text mb-2">{stat.number}</h4>
                <p className="text-gray-600 dark:text-gray-400 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;
