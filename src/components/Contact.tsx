import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Github, Linkedin, Twitter, Send, Shield, Key } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [encrypted, setEncrypted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.contact-card',
      { opacity: 0, y: 50, rotationX: -15 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      }
    );

  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const encryptMessage = (message: string): string => {
    // Simple Caesar cipher for demonstration
    return message.split('').map(char => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const base = code >= 65 && code <= 90 ? 65 : 97;
        return String.fromCharCode(((code - base + 3) % 26) + base);
      }
      return char;
    }).join('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Simulate encryption process
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Animate form submission
    gsap.to(formRef.current, {
      scale: 0.95,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut'
    });

    setSending(false);
    setEncrypted(true);

    // Reset form after animation
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setEncrypted(false);
    }, 3000);
  };
                    {/* CHANGE*/}
  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/alexchen-cybersec',
      color: 'hover:text-white'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/alex-chen-cybersec',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com/alexchen_sec',
      color: 'hover:text-cyan-400'
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:alex.chen@cybersec.edu',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-white">
            <span className="text-cyan-400">[</span>Contact<span className="text-cyan-400">]</span>
          </h2>
                              {/* CHANGE*/}
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on cybersecurity projects or discuss potential opportunities? 
            Send me an encrypted message!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="contact-card">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/30">
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-mono font-bold text-white">Secure Message</h3>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 font-mono text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-mono text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-mono text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    placeholder="Your secure message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-mono py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {sending ? (
                    <>
                      <Key className="w-5 h-5 animate-spin" />
                      <span>Encrypting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Encrypted Message</span>
                    </>
                  )}
                </button>
              </form>

              {encrypted && (
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Shield className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-green-400 font-mono text-sm">Message Encrypted & Sent!</span>
                  </div>
                  <div className="bg-gray-900/50 p-3 rounded border border-gray-700 font-mono text-xs text-gray-300 break-all">
                    {encryptMessage(formData.message)}
                  </div>
                </div>
              )}
            </div>
          </div>
                                  {/* CHANGE*/}
          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="contact-card bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/30">
              <h3 className="text-xl font-mono font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="font-mono text-gray-300">alex.chen@cybersec.edu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="font-mono text-gray-300">PGP Key: Available on request</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-card bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/30">
              <h3 className="text-xl font-mono font-bold text-white mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-4 bg-gray-900/50 rounded-lg border border-gray-700 transition-all duration-300 hover:border-cyan-500/50 ${social.color} group`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-mono text-sm">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
                                    {/* CHANGE*/}
            {/* Terminal Status */}
            <div className="contact-card bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/30">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-mono text-green-400 text-sm">Online</span>
                </div>
              </div>
              <div className="space-y-2 font-mono text-xs">
                <div className="text-gray-400">Last seen: Just now</div>
                <div className="text-cyan-400">Status: Available for opportunities</div>
                <div className="text-purple-400">Response time: Usually within 24 hours</div>
              </div>
            </div>
          </div>
        </div>
                                    {/* CHANGE*/}
        {/* Footer */}
        <div className="mt-16 text-center fade-in">
          <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <p className="text-gray-400 font-mono text-sm">
              © 2024 Alex Chen | Cybersecurity Student Portfolio
            </p>
            <p className="text-gray-500 font-mono text-xs mt-2">
              Built with security in mind • All communications encrypted
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;