import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Shield, Terminal, Lock, Search } from 'lucide-react';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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

  const handleProjectHover = (index: number, isEntering: boolean) => {
    if (isEntering) {
      setHoveredProject(index);
      gsap.to(`.project-card-${index}`, {
        scale: 1.02,
        boxShadow: '0 20px 60px rgba(6, 182, 212, 0.3)',
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      setHoveredProject(null);
      gsap.to(`.project-card-${index}`, {
        scale: 1,
        boxShadow: '0 0 0 rgba(6, 182, 212, 0)',
        duration: 0.3,
        ease: 'power2.in'
      });
    }
  };

  const projects = [
    {
      title: 'U-mentor Educational Platform',
      description: 'Co-founded student-led educational startup generating 150K+ DH revenue, serving 200+ students.',
      detailedDescription: 'Co-CEO and lead developer of U-mentor, a comprehensive educational platform for Moroccan high school students. Built full-stack web application with user management, course delivery, payment processing, and analytics. Led team of 5 developers and managed operations while personally teaching mathematics to 200+ students.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Stripe API', 'AWS'],
      icon: Search,
      status: 'Active',
      statusColor: 'text-green-400',
      github: 'https://github.com/GougasseHamza/umentor-platform',
      demo: 'https://umentor.ma',
      image: 'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      title: 'Web Security Assessment Tool',
      description: 'Automated vulnerability scanner for web applications with AI-powered threat detection.',
      detailedDescription: 'Developed a comprehensive web security assessment tool that performs automated vulnerability scanning, SQL injection testing, XSS detection, and security header analysis. Features AI-powered threat detection, detailed reporting, and integration with popular CI/CD pipelines. Used by multiple organizations for security audits.',
      tech: ['Python', 'FastAPI', 'Selenium', 'AI/ML', 'Docker'],
      icon: Lock,
      status: 'Completed',
      statusColor: 'text-green-400',
      github: 'https://github.com/GougasseHamza/websec-scanner',
      demo: '#',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      title: 'Competitive Programming Solutions',
      description: 'Comprehensive collection of algorithmic solutions and data structure implementations.',
      detailedDescription: 'Maintained repository of 1000+ competitive programming solutions across platforms like Codeforces, AtCoder, and LeetCode. Includes advanced algorithms, data structures, and mathematical concepts. Features detailed explanations, complexity analysis, and test cases. Used by 500+ developers for learning and reference.',
      tech: ['C++', 'Python', 'Algorithms', 'Data Structures', 'Mathematics'],
      icon: Shield,
      status: 'Ongoing',
      statusColor: 'text-blue-400',
      github: 'https://github.com/GougasseHamza/competitive-programming',
      demo: '#',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      title: 'Bug Bounty Automation Suite',
      description: 'Automated reconnaissance and vulnerability discovery tools for ethical hacking.',
      detailedDescription: 'Built comprehensive suite of automation tools for bug bounty hunting and penetration testing. Includes subdomain enumeration, port scanning, vulnerability detection, and report generation. Features modular architecture, multi-threading support, and integration with popular security tools. Successfully used in multiple bug bounty programs.',
      tech: ['Python', 'Go', 'Bash', 'Security Tools', 'Automation'],
      icon: Terminal,
      status: 'In Progress',
      statusColor: 'text-yellow-400',
      github: 'https://github.com/GougasseHamza/bugbounty-automation',
      demo: '#',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    }
  ];
  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-white">
            <span className="text-cyan-400">[</span>Projects<span className="text-cyan-400">]</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building solutions across AI, cybersecurity, and web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card relative"
              onMouseEnter={() => handleProjectHover(index, true)}
              onMouseLeave={() => handleProjectHover(index, false)}
            >
              <div className={`project-card-${index} bg-gray-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden relative`}>
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-700/50 text-cyan-400 text-xs font-mono rounded border border-cyan-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Details - Always Visible */}
                  <div className="mb-4 p-4 bg-cyan-900/10 rounded-lg border border-cyan-500/20">
                    <h4 className="text-sm font-mono font-bold text-cyan-400 mb-2">Project Details</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.detailedDescription}
                    </p>
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm font-mono">Code</span>
                    </a>
                    <a 
                      href={project.demo}
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm font-mono">Demo</span>
                    </a>
                  </div>

                  {/* Hover Overlay - Additional Info */}
                  {hoveredProject === index && (
                    <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-md rounded-xl p-6 flex flex-col justify-center z-20 animate-fade-in">
                      <div className="text-center">
                        <project.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-mono font-bold text-white mb-3">{project.title}</h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold ${project.statusColor} bg-gray-800/70 mb-4`}>
                          {project.status}
                        </span>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          {project.detailedDescription}
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-cyan-900/30 text-cyan-400 text-xs font-mono rounded border border-cyan-500/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex space-x-4 justify-center mt-4">
                          <a 
                            href={project.github}
                            className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors"
                          >
                            <Github className="w-5 h-5" />
                            <span className="text-sm font-mono">View Code</span>
                          </a>
                          <a 
                            href={project.demo}
                            className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                            <span className="text-sm font-mono">Live Demo</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;