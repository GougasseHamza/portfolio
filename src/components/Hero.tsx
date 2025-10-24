import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, Terminal, Code, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial animation
    tl.fromTo(textRef.current, 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    )
    .fromTo(terminalRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)' },
      '-=0.5'
    );

    // Floating animation for terminal
    gsap.to(terminalRef.current, {
      y: -10,
      duration: 2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    });

    // Glitch effect for title
    const glitchTimeline = gsap.timeline({ repeat: -1, repeatDelay: 3 });
    glitchTimeline.to('.glitch', {
      duration: 0.1,
      skewX: 70,
      ease: 'power4.inOut'
    })
    .to('.glitch', {
      duration: 0.04,
      skewX: 0,
      ease: 'power4.inOut'
    })
    .to('.glitch', {
      duration: 0.04,
      opacity: 0
    })
    .to('.glitch', {
      duration: 0.04,
      opacity: 1
    })
    .to('.glitch', {
      duration: 0.04,
      x: -20
    })
    .to('.glitch', {
      duration: 0.04,
      x: 0
    });

  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
                    {/* CHANGE*/}
  return (
    
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center z-10">
        <div ref={textRef} className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold font-mono mb-6">
            <span className="text-white glitch">Hamza</span>{' '}
            <span className="text-cyan-400 glitch">Gougasse</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 font-mono mb-8">
            <span className="text-green-400">[hamza@azmah]$</span> whoami
            <br />
            <span className="text-white">Cybersecurity student - Competitive programmer - At the edge of AI & cybersecurity.</span>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            20 years old, third year (out of 5) cybersecurity student at UM6P, Rabat, Morocco. 
            Passionate about web security and competitive programming. Entrepreneur and co-founder of U-mentor 
            (check experience), a tutoring platform for Moroccan high schoolers. Qualified twice to ACPC in Egypt.
          </p>
        </div>
                        {/* CHANGE*/}
        <div ref={terminalRef} className="mb-12">
          <div className="inline-block bg-gray-800/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 max-w-md">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-4 text-sm text-gray-400 font-mono">terminal</span>
            </div>
            <div className="text-left font-mono text-sm">
              <div className="text-green-400 mb-2">
                <Terminal className="inline w-4 h-4 mr-2" />
                ./solve_eat_repeat.sh
              </div>
              <div className="text-cyan-400 mb-1">Getting the coffee ( I dont like it ) </div>
              <div className="text-purple-400 mb-1">Booting up Arch...</div>
              <div className="text-green-400">Let's code and hack! 🚀</div>
            </div>
          </div>
        </div>
                        {/* CHANGE*/}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full border border-purple-500/30">
            <Code className="w-5 h-5 text-purple-400" />
            <span className="font-mono text-sm">Competitive Programming</span>
          </div>
          <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full border border-cyan-500/30">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span className="font-mono text-sm">Web Exploitation</span>
          </div>
          <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full border border-green-500/30">
            <Terminal className="w-5 h-5 text-green-400" />
            <span className="font-mono text-sm">Backend Development</span>
          </div>
          <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full border border-yellow-500/30">
            <Code className="w-5 h-5 text-yellow-400" />
            <span className="font-mono text-sm">Teaching</span>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;