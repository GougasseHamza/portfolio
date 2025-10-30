import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Shield, Terminal, Lock, Search, BookOpen } from 'lucide-react';

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
      title: 'Retrieval Augmented Chatbot',
      description: 'Intelligent AI chatbot leveraging RAG architecture for real-time company data access through natural-language queries.',
      detailedDescription: 'Built an enterprise-grade AI chatbot using Retrieval-Augmented Generation (RAG) that empowers users to access real-time company data through intuitive natural-language queries. Seamlessly integrates n8n workflow automation, Pinecone vector database, and Vue.js to generate clear, actionable reports. Implements advanced vector embeddings for semantic search and context-aware responses.',
      tech: [ 'n8n', 'Pinecone', 'Vue.js', 'AI', 'NLP'],
      icon: Search,
      status: 'Active',
      statusColor: 'text-green-400',
      github: 'https://github.com/GougasseHamza/chatbot-sql',
      demo: '#',
      image: 'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      title: 'Tawjeeh-Sup EdTech Platform',
      description: 'Full-stack e-learning platform enabling seamless student access to video content and educational resources.',
      detailedDescription: 'Developed a comprehensive full-stack e-learning platform where students can securely login, stream pre-recorded educational videos, and download course materials. Built with Vue.js for a responsive, dynamic frontend and Firebase for robust authentication, real-time database, and cloud storage. Features include user role management, progress tracking, and optimized media delivery for enhanced learning experience.',
      tech: ['Vue.js', 'Firebase', 'Cloud Storage'],
      icon: BookOpen,
      status: 'Completed',
      statusColor: 'text-green-400',
      github: 'https://github.com/GougasseHamza/platform',
      demo: '#',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      title: 'AI-Driven Vulnerability Scanner',
      description: 'Autonomous security testing framework automating bug bounty recon processes with AI-powered command generation.',
      detailedDescription: 'Developed a modular Python security framework that replicates bug bounty recon  workflows, where an AI agent autonomously generates, executes, and interprets security commands in real-time. Leverages LLM integration for intelligent vulnerability detection, automated exploit generation, and comprehensive security assessments. Designed for ethical hacking and penetration testing workflows.',
      tech: ['Python', 'Scripting' ,'Automation'],
      icon: Shield,
      status: 'Completed',
      statusColor: 'text-green-400',
      github: 'https://github.com/GougasseHamza/scanner_bug_bounty',
      demo: '#',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      title: 'Smart Handwriting Recognition',
      description: 'Real-time computer vision system enabling on-screen writing through camera-based hand tracking and AI interpretation.',
      detailedDescription: 'Developed an advanced Python/OpenCV computer vision project that enables users to write directly on screen using a camera, integrating AI to detect and interpret written words and hand movements. Features real-time hand tracking, intuitive gesture recognition, and ML-based character recognition achieving 90%+ accuracy. Combines MediaPipe for hand detection with custom-trained models for robust character interpretation.',
      tech: ['Python', 'OpenCV', 'Computer Vision', 'ML'],
      icon: Lock,
      status: 'Completed',
      statusColor: 'text-green-400',
      github: '#',
      demo: '#',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
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