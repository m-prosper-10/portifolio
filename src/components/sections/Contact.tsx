"use client"

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Gitlab } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/theme-context";
import { useToast } from "@/hooks/use-toast";
import { contactInfo } from "@/lib/data";

const Contact = () => {
  const { isDark } = useTheme();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to send message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: contactInfo.github },
    { name: "GitLab", icon: Gitlab, href: contactInfo.gitlab },
    { name: "Email", icon: Mail, href: `mailto:${contactInfo.email}` }
  ];

  return (
    <section id="contact" className="relative py-24 md:py-28">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className={`text-xs md:text-sm font-medium tracking-[0.22em] uppercase mb-3 ${
              isDark ? 'text-gray-500' : 'text-gray-500'
            }`}>
              Contact
            </p>
            <h2 className={`text-3xl md:text-4xl font-semibold tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Let&apos;s work together
            </h2>
            <p className={`text-base md:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="space-y-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className={`flex items-center gap-3 group ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">{contactInfo.email}</span>
                </a>

                <div className={`flex items-center gap-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">{contactInfo.location}</span>
                </div>
              </div>

              <div className={`h-px ${isDark ? 'bg-gray-900' : 'bg-gray-200'}`} />

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg border ${
                      isDark 
                        ? 'border-gray-800 text-gray-400 hover:text-white hover:border-gray-700' 
                        : 'border-gray-200 text-gray-600 hover:text-black hover:border-gray-300'
                    } transition-colors`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder=" "
                      id="name"
                      className={`peer w-full px-4 py-4 rounded-xl border text-sm bg-transparent transition-all duration-200 ${
                        isDark 
                          ? 'border-gray-800 text-white placeholder-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                          : 'border-gray-200 text-black placeholder-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                      } focus:outline-none`}
                    />
                    <label 
                      htmlFor="name"
                      className={`absolute left-4 top-4 text-sm transition-all duration-200 pointer-events-none ${
                        formData.name 
                          ? isDark ? '-top-2 text-xs text-blue-500 bg-[#0a0a0a] px-1' : '-top-2 text-xs text-blue-500 bg-white px-1'
                          : isDark ? 'text-gray-600 group-focus-within:-top-2 group-focus-within:text-xs group-focus-within:text-blue-500 group-focus-within:bg-[#0a0a0a] group-focus-within:px-1' : 'text-gray-400 group-focus-within:-top-2 group-focus-within:text-xs group-focus-within:text-blue-500 group-focus-within:bg-white group-focus-within:px-1'
                      }`}
                    >
                      Your Name
                    </label>
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 -z-10`} />
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder=" "
                      id="email"
                      className={`peer w-full px-4 py-4 rounded-xl border text-sm bg-transparent transition-all duration-200 ${
                        isDark 
                          ? 'border-gray-800 text-white placeholder-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                          : 'border-gray-200 text-black placeholder-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                      } focus:outline-none`}
                    />
                    <label 
                      htmlFor="email"
                      className={`absolute left-4 top-4 text-sm transition-all duration-200 pointer-events-none ${
                        formData.email 
                          ? isDark ? '-top-2 text-xs text-blue-500 bg-[#0a0a0a] px-1' : '-top-2 text-xs text-blue-500 bg-white px-1'
                          : isDark ? 'text-gray-600 group-focus-within:-top-2 group-focus-within:text-xs group-focus-within:text-blue-500 group-focus-within:bg-[#0a0a0a] group-focus-within:px-1' : 'text-gray-400 group-focus-within:-top-2 group-focus-within:text-xs group-focus-within:text-blue-500 group-focus-within:bg-white group-focus-within:px-1'
                      }`}
                    >
                      Email Address
                    </label>
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 -z-10`} />
                  </div>
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder=" "
                    id="message"
                    className={`peer w-full px-4 py-4 rounded-xl border text-sm resize-none bg-transparent transition-all duration-200 ${
                      isDark 
                        ? 'border-gray-800 text-white placeholder-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                        : 'border-gray-200 text-black placeholder-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                    } focus:outline-none`}
                  />
                  <label 
                    htmlFor="message"
                    className={`absolute left-4 top-4 text-sm transition-all duration-200 pointer-events-none ${
                      formData.message 
                        ? isDark ? '-top-2 text-xs text-blue-500 bg-[#0a0a0a] px-1' : '-top-2 text-xs text-blue-500 bg-white px-1'
                        : isDark ? 'text-gray-600 group-focus-within:-top-2 group-focus-within:text-xs group-focus-within:text-blue-500 group-focus-within:bg-[#0a0a0a] group-focus-within:px-1' : 'text-gray-400 group-focus-within:-top-2 group-focus-within:text-xs group-focus-within:text-blue-500 group-focus-within:bg-white group-focus-within:px-1'
                    }`}
                  >
                    Tell me about your project...
                  </label>
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 -z-10`} />
                  <div className="absolute bottom-4 right-4 text-xs text-gray-500">
                    {formData.message.length}/500 characters
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={loading}
                    className="modern-button-primary modern-button-lg disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                  
                  <div className="text-xs text-gray-500">
                    <span className={isDark ? 'text-gray-600' : 'text-gray-400'}>
                      I&apos;ll respond within 24 hours
                    </span>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
