import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, Send, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: import.meta.env.VITE_CONTACT_TO,
          reply_to: formData.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const socialLinks = [
    { icon: Github, url: 'https://github.com/Empasis4', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/Empasis4', label: 'LinkedIn' },
    { icon: Phone, url: 'tel:+639150042749', label: 'Phone' },
    { icon: Mail, url: 'mailto:jeffer.empasis@urios.edu.ph', label: 'Email' },
  ];

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
    <section id="contact" className="py-20 md:py-28 bg-gray-50 dark:bg-slate-800">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="section-title flex justify-center mb-16">Get In Touch</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal delay={100}>
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Have a project in mind or want to collaborate? Feel free to reach out! I'm always interested
                  in hearing about new opportunities and creative projects.
                </p>
              </motion.div>

              {/* Contact Methods */}
              <motion.div className="space-y-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {[
                  { icon: Mail, text: 'jeffer.empasis@urios.edu.ph', href: 'mailto:jeffer.empasis@urios.edu.ph' },
                  { icon: Github, text: 'github.com/Empasis4', href: 'https://github.com/Empasis4' },
                  { icon: Linkedin, text: 'linkedin.com/in/Empasis4', href: 'https://linkedin.com/in/Empasis4' },
                  { icon: Phone, text: '+63 9150042749', href: 'tel:+639150042749' },
                ].map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <motion.a
                      key={index}
                      variants={itemVariants}
                      href={contact.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300"
                      whileHover={{ x: 10 }}
                    >
                      <Icon className="w-6 h-6 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
                        {contact.text}
                      </span>
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="pt-4 border-t border-gray-200 dark:border-slate-700">
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-4">Follow Me</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={social.label}
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={200}>
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-green-700 dark:text-green-300 font-semibold">
                    Message sent successfully!
                  </span>
                </motion.div>
              )}

              {/* Name Field */}
              <motion.div className="mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                    errors.name
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800'
                  } text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </motion.div>

              {/* Email Field */}
              <motion.div className="mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                    errors.email
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800'
                  } text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </motion.div>

              {/* Message Field */}
              <motion.div className="mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 resize-none ${
                    errors.message
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800'
                  } text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Your message..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full btn btn-primary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
