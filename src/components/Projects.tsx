import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Shield, Terminal, Lock, Search } from 'lucide-react';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.project-card',
      { opacity: 0, y: 100, rotationX: -15 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%'
        }
      }
    );

  }, []);
                      {/* CHANGE*/}
  const projects = [
    {
      title: 'SecureVault',
      description: 'A military-grade password manager with quantum-resistant encryption and biometric authentication.',
      tech: ['Python', 'AES-256', 'Biometrics', 'Qt'],
      icon: Lock,
      status: 'Completed',
      statusColor: 'text-green-400',
      github: '#',
      demo: '#',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      title: 'NetScan Pro',
      description: 'Advanced network reconnaissance tool with stealth scanning capabilities and vulnerability detection.',
      tech: ['Python', 'Nmap', 'Scapy', 'Socket'],
      icon: Search,
      status: 'In Progress',
      statusColor: 'text-yellow-400',
      github: '#',
      demo: '#',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      title: 'WebGuard',
      description: 'Automated web application security scanner that detects SQL injection, XSS, and other vulnerabilities.',
      tech: ['JavaScript', 'Node.js', 'Puppeteer', 'Express'],
      icon: Shield,
      status: 'Completed',
      statusColor: 'text-green-400',
      github: '#',
      demo: '#',
      image: 'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      title: 'CyberTerminal',
      description: 'Custom penetration testing terminal with integrated tools and automated reporting features.',
      tech: ['Bash', 'Python', 'Linux', 'Docker'],
      icon: Terminal,
      status: 'Beta',
      statusColor: 'text-blue-400',
      github: '#',
      demo: '#',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    }
  ];
                      {/* CHANGE*/}
  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-white">
            <span className="text-cyan-400">[</span>Projects<span className="text-cyan-400">]</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of cybersecurity tools and applications I've developed to strengthen digital defenses.
          </p>
        </div>

        <div className="projects-grid grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <project.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${project.statusColor} bg-gray-900/70`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-mono font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-700/50 text-cyan-400 text-xs font-mono rounded border border-cyan-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm font-mono">Code</span>
                    </a>
                    <a 
                      href={project.demo}
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors group"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm font-mono">Demo</span>
                    </a>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
                              {/* CHANGE*/}
        {/* GitHub Stats */}
        <div className="mt-16 text-center fade-in">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/30 max-w-2xl mx-auto">
            <h3 className="text-xl font-mono font-bold text-white mb-6">GitHub Activity</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 font-mono">50+</div>
                <div className="text-gray-400 text-sm">Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 font-mono">200+</div>
                <div className="text-gray-400 text-sm">Commits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 font-mono">15+</div>
                <div className="text-gray-400 text-sm">Stars</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;