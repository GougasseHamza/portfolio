import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Terminal, Code, Lock, Search, Database, Network, Bug } from 'lucide-react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate skill bars
    gsap.fromTo('.skill-bar', 
      { width: 0 },
      {
        width: (i, target) => target.getAttribute('data-width'),
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.skills-container',
          start: 'top 80%'
        }
      }
    );

    // Animate skill cards
    gsap.fromTo('.skill-card',
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 80%'
        }
      }
    );

  }, []);
                      {/* CHANGE*/}
  const technicalSkills = [
    { name: 'Penetration Testing', level: 85, color: 'bg-red-500' },
    { name: 'Network Security', level: 90, color: 'bg-blue-500' },
    { name: 'Web Application Security', level: 88, color: 'bg-purple-500' },
    { name: 'Cryptography', level: 75, color: 'bg-green-500' },
    { name: 'Forensics', level: 70, color: 'bg-yellow-500' },
    { name: 'Social Engineering', level: 65, color: 'bg-pink-500' },
  ];
                      {/* CHANGE*/}

  const skillCategories = [
    {
      icon: Shield,
      title: 'Offensive Security',
      skills: ['Metasploit', 'Burp Suite', 'Nmap', 'Wireshark', 'SQLmap'],
      color: 'border-red-500/30 hover:border-red-400/50'
    },
    {
      icon: Terminal,
      title: 'System Administration',
      skills: ['Linux', 'Windows', 'PowerShell', 'Bash', 'Docker'],
      color: 'border-green-500/30 hover:border-green-400/50'
    },
    {
      icon: Code,
      title: 'Programming',
      skills: ['Python', 'JavaScript', 'C++', 'Go', 'Rust'],
      color: 'border-blue-500/30 hover:border-blue-400/50'
    },
    {
      icon: Lock,
      title: 'Cryptography',
      skills: ['RSA', 'AES', 'Hash Functions', 'PKI', 'Digital Signatures'],
      color: 'border-purple-500/30 hover:border-purple-400/50'
    },
    {
      icon: Search,
      title: 'Reconnaissance',
      skills: ['OSINT', 'Social Engineering', 'Footprinting', 'Enumeration'],
      color: 'border-yellow-500/30 hover:border-yellow-400/50'
    },
    {
      icon: Database,
      title: 'Database Security',
      skills: ['SQL Injection', 'NoSQL', 'Database Hardening', 'Access Control'],
      color: 'border-cyan-500/30 hover:border-cyan-400/50'
    },
    {
      icon: Network,
      title: 'Network Security',
      skills: ['Firewall Config', 'IDS/IPS', 'VPN', 'Network Monitoring'],
      color: 'border-indigo-500/30 hover:border-indigo-400/50'
    },
    {
      icon: Bug,
      title: 'Vulnerability Assessment',
      skills: ['Nessus', 'OpenVAS', 'CVSS', 'Risk Assessment'],
      color: 'border-pink-500/30 hover:border-pink-400/50'
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-white">
            <span className="text-cyan-400">[</span>Skills<span className="text-cyan-400">]</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </div>

        {/* Technical Skills Progress Bars */}
        <div className="skills-container mb-16">
          <h3 className="text-2xl font-mono font-bold text-white mb-8 text-center">
            Technical Proficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-mono text-white">{skill.name}</span>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className={`skill-bar h-3 rounded-full ${skill.color} relative overflow-hidden`}
                    data-width={`${skill.level}%`}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Categories Grid */}
        <div className="skills-grid">
          <h3 className="text-2xl font-mono font-bold text-white mb-8 text-center">
            Expertise Areas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className={`skill-card bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border ${category.color} transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg`}
              >
                <div className="flex items-center mb-4">
                  <category.icon className="w-6 h-6 text-cyan-400 mr-3" />
                  <h4 className="font-mono font-bold text-white text-sm">{category.title}</h4>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                      <span className="text-gray-300 text-sm font-mono">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
                    {/* CHANGE*/}
        {/* Certifications */}
        <div className="mt-16 text-center fade-in">
          <h3 className="text-2xl font-mono font-bold text-white mb-8">
            Certifications & Achievements
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Security+', 'CEH', 'CISSP (In Progress)', 'OSCP (In Progress)', 'eJPT'].map((cert, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <span className="font-mono text-cyan-400 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;