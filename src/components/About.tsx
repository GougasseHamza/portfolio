import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, GraduationCap, Award, Coffee, Trophy, Medal, Target, TrendingUp, DollarSign, Users, Shield } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hoveredUmentor, setHoveredUmentor] = React.useState(false);

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
    { icon: Award, label: 'MCPC 2025 Bronze Medalist', value: 1, color: 'text-yellow-400' },
    { icon: GraduationCap, label: 'ACPC Finalist (2024 & 2025)', value: 2, color: 'text-blue-400' },
    { icon: Coffee, label: 'CTF Practitioner', value: 1, color: 'text-purple-400' },
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

        {/* Featured U-mentor Startup */}
        <div 
          className="mb-16 bg-gradient-to-br from-orange-950/30 via-gray-900/70 to-gray-800/50 backdrop-blur-sm rounded-xl border border-orange-500/30 hover:border-orange-400/50 overflow-hidden relative transition-all duration-300"
          onMouseEnter={() => setHoveredUmentor(true)}
          onMouseLeave={() => setHoveredUmentor(false)}
        >
          <div className="relative z-10 p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-8 h-8 text-orange-400" />
                <div>
                  <h3 className="text-3xl font-bold font-mono text-white">U-mentor</h3>
                  <span className="text-sm text-orange-400 font-mono">Personal Business</span>
                </div>
              </div>
              <span className="px-3 py-1 bg-orange-500 text-gray-900 text-xs font-bold font-mono rounded-full">
                ACTIVE
              </span>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Co-CEO & Teacher of a <span className="text-orange-400 font-semibold">student-led educational startup</span> generating <span className="text-orange-400 font-semibold">150,000+ DH in revenue</span>. Leading operations while personally teaching mathematics to 200+ students.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-orange-500/20">
                <DollarSign className="w-6 h-6 text-orange-400 mb-2" />
                <div className="text-2xl font-bold text-orange-400 font-mono">150K+</div>
                <div className="text-gray-400 text-xs">DH Revenue</div>
              </div>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-orange-500/20">
                <Users className="w-6 h-6 text-orange-400 mb-2" />
                <div className="text-2xl font-bold text-orange-400 font-mono">200+</div>
                <div className="text-gray-400 text-xs">Students</div>
              </div>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-orange-500/20">
                <Award className="w-6 h-6 text-orange-400 mb-2" />
                <div className="text-2xl font-bold text-orange-400 font-mono">95%</div>
                <div className="text-gray-400 text-xs">Satisfaction</div>
              </div>
            </div>

            {/* Details */}
            <div className="bg-orange-900/10 p-4 rounded-lg border border-orange-500/20">
              <div className="grid md:grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Co-CEO & Operations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Curriculum Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Strategic Partnerships</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Direct Teaching</span>
                </div>
              </div>
            </div>

      {/* Hover Overlay */}
{hoveredUmentor && (
  <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-md rounded-xl p-8 flex flex-col justify-center z-20 animate-fade-in">
    <div className="text-center">
      <TrendingUp className="w-16 h-16 text-orange-400 mx-auto mb-4" />
      <h3 className="text-3xl font-mono font-bold text-white mb-4">Personal Business</h3>
      <p className="text-gray-300 leading-relaxed mb-6">
        Student-led startup created by students, for students. Partnering with leading educational 
        platforms in Morocco. Successfully managed operations, curriculum development, and strategic 
        partnerships while maintaining exceptionally high student satisfaction rates.
      </p>
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-6">
        <div className="bg-orange-900/30 p-4 rounded-lg border border-orange-500/30">
          <div className="text-3xl font-bold text-orange-400 mb-1">12+</div>
          <div className="text-sm text-gray-400">Months Active</div>
        </div>
        <div className="bg-orange-900/30 p-4 rounded-lg border border-orange-500/30">
          <div className="text-3xl font-bold text-orange-400 mb-1">Rising</div>
          <div className="text-sm text-gray-400">Educational Platform</div>
        </div>
      </div>
      <a 
        href="https://www.u-mentor.ma" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors font-medium"
      >
        Visit Website →
      </a>
    </div>
  </div>
)}


          </div>
        </div>

        {/* Featured Competitive Programming Achievements */}
        <div className="mb-16 bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden relative">
          <div className="relative z-10 p-8 md:p-10">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-700/50">
              <div>
                <h3 className="text-2xl md:text-3xl font-mono font-bold text-white mb-2">
                  Competitive Programming
                </h3>
                <p className="text-gray-400">
                  International algorithmic competitions & problem-solving excellence
                </p>
              </div>
              <Trophy className="w-12 h-12 text-cyan-400 hidden md:block" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <Medal className="w-8 h-8 text-amber-500" />
                  <span className="text-xs font-mono text-gray-500">2025</span>
                </div>
                <h4 className="text-lg font-mono font-bold text-white mb-1">
                  MCPC Bronze Medalist
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  Moroccan Collegiate Programming Contest
                </p>
                <div className="pt-3 border-t border-gray-700/50">
                  <span className="text-xs text-cyan-400 font-mono">National Competition of Programming </span>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <Target className="w-8 h-8 text-cyan-400" />
                  <span className="text-xs font-mono text-gray-500">2024 & 2025</span>
                </div>
                <h4 className="text-lg font-mono font-bold text-white mb-1">
                  ACPC Finalist × 2
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  Arab Collegiate Programming Contest
                </p>
                <div className="pt-3 border-t border-gray-700/50">
                  <span className="text-xs text-cyan-400 font-mono">Cairo, Egypt</span>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-8 h-8 text-purple-400" />
                  <span className="text-xs font-mono text-gray-500">Ongoing</span>
                </div>
                <h4 className="text-lg font-mono font-bold text-white mb-1">
                  900+ Problems
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  Algorithms & Data Structures
                </p>
                <div className="pt-3 border-t border-gray-700/50">
                  <span className="text-xs text-cyan-400 font-mono">I know to optimise and develop algorithms, and necessary data structures to solve complex problems</span>
                </div>
              </div>
            </div>
          </div>
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
                  <p><span className="text-purple-400">name:</span> <span className="text-yellow-300">"Hamza Gougasse"</span>,</p>
                  <p><span className="text-purple-400">role:</span> <span className="text-yellow-300">"Cybersecurity Student & Builder"</span>,</p>
                  <p><span className="text-purple-400">location:</span> <span className="text-yellow-300">"UM6P, Rabat, Morocco"</span>,</p>
                  <p><span className="text-purple-400">passion:</span> <span className="text-yellow-300">"CP, CTF, Web Exploitation, Volleyball"</span>,</p>
                </div>
                <p className="font-mono text-sm text-gray-300">{'};'}</p>
              </div>

              <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <p className="text-gray-300 leading-relaxed">
                  Hello there , I am Hamza, 20 years old , Entrepreneur at heart, I love  solving problems , automating processes, and hunting for vulnerabilities!
                  Looking forward to getting in touch !
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
                  <span className="text-gray-300">CP & Web Exploitation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Bug Bounty Hunting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Entrepreneurship</span>
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