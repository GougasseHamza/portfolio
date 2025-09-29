import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, GraduationCap, Award, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo(profileRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
    )
    .fromTo(statsRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out' },
      '-=0.5'
    );

    // Animate stats numbers
    gsap.fromTo('.stat-number', 
      { textContent: 0 },
      {
        textContent: (i, target) => target.getAttribute('data-value'),
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: '.stats-container',
          start: 'top 80%'
        }
      }
    );

  }, []);

  const stats = [
    { icon: Award, label: 'CTF Wins', value: 15, color: 'text-yellow-400' },
    { icon: GraduationCap, label: 'Certifications', value: 8, color: 'text-blue-400' },
    { icon: Coffee, label: 'All-nighters', value: 42, color: 'text-purple-400' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-white">
            <span className="text-cyan-400">[</span>About Me<span className="text-cyan-400">]</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={profileRef} className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/30">
              <div className="flex items-center mb-6">
                <User className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-mono font-bold text-white">Profile</h3>
              </div>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="font-mono text-sm">
                  <span className="text-green-400">const</span> student = {'{'}
                </p>
                <div className="pl-4 space-y-2">
                  <p><span className="text-purple-400">name:</span> <span className="text-yellow-300">"Alex Chen"</span>,</p>
                  <p><span className="text-purple-400">role:</span> <span className="text-yellow-300">"Cybersecurity Student"</span>,</p>
                  <p><span className="text-purple-400">location:</span> <span className="text-yellow-300">"University of Technology"</span>,</p>
                  <p><span className="text-purple-400">passion:</span> <span className="text-yellow-300">"Ethical Hacking & Security"</span>,</p>
                  <p><span className="text-purple-400">motto:</span> <span className="text-yellow-300">"Defense through offense"</span></p>
                </div>
                <p className="font-mono text-sm text-gray-300">{'};'}</p>
              </div>

                 {/* CHANGE   */}
              <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate cybersecurity student with hands-on experience in penetration testing, 
                  vulnerability assessment, and security research. I love participating in CTF competitions 
                  and contributing to the security community through responsible disclosure and open-source projects.
                </p>
              </div>
            </div>
          </div>

          <div ref={statsRef} className="space-y-6">
            <div className="stats-container grid gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      <span className="font-mono text-gray-300">{stat.label}</span>
                    </div>
                    <span className={`text-2xl font-bold font-mono ${stat.color} stat-number`} data-value={stat.value}>
                      0
              

                    </span>
                  </div>
                </div>
              ))}
            </div>
                    {/* CHANGE*/}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
              <h4 className="text-xl font-mono font-bold text-white mb-4">Current Focus</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">OSCP Certification Prep</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Web Application Security Research</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Contributing to Security Tools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;