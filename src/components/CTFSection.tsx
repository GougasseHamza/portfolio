import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, Lock, Key, Flag, Trophy, Eye } from 'lucide-react';

const CTFSection: React.FC = () => {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    'Welcome to Hamza\'s CTF Terminal v2.1.0',
    'Type "help" for available commands',
    '> '
  ]);
  const [solvedChallenges, setSolvedChallenges] = useState<Set<string>>(new Set());
  const [unlockedInfo, setUnlockedInfo] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate CTF cards
    gsap.fromTo('.ctf-card',
      { opacity: 0, y: 50, rotateX: -15 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ctf-grid',
          start: 'top 80%'
        }
      }
    );

    // Terminal typing effect
    gsap.fromTo('.terminal-container',
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.terminal-container',
          start: 'top 80%'
        }
      }
    );

  }, []);
                      {/* CHANGE*/}
  const challenges = [
    {
      id: 'hidden_message',
      title: 'Hidden Message',
      difficulty: 'Easy',
      description: 'Find the hidden message in the source code',
      hint: 'Look for HTML comments in the page source',
      solution: 'FLAG{welcome_to_my_portfolio}',
      reward: 'Real Name: Alex Chen'
    },
    {
      id: 'caesar_cipher',
      title: 'Caesar Cipher',
      difficulty: 'Easy',
      description: 'Decode: FKDOOHQJH_DFFHSWHG',
      hint: 'Try shifting letters by 3 positions',
      solution: 'CHALLENGE_ACCEPTED',
      reward: 'Age: 22 years old'
    },
    {
      id: 'binary_message',
      title: 'Binary Message',
      difficulty: 'Medium',
      description: 'Decode: 01001000 01100101 01101100 01101100 01101111',
      hint: 'Convert binary to ASCII',
      solution: 'Hello',
      reward: 'University: MIT - Computer Science'
    },
    {
      id: 'reverse_engineering',
      title: 'Reverse Engineering',
      difficulty: 'Medium',
      description: 'Decode: U2VjdXJpdHlGaXJzdA==',
      hint: 'This looks like Base64 encoding',
      solution: 'SecurityFirst',
      reward: 'Specialization: Penetration Testing'
    },
    {
      id: 'sql_injection',
      title: 'SQL Injection',
      difficulty: 'Hard',
      description: 'Find the flag in this query: SELECT * FROM users WHERE id = ?',
      hint: 'Try a UNION SELECT statement',
      solution: 'UNION SELECT flag FROM secrets',
      reward: 'Contact: alex.chen@cybersec.edu'
    }
  ];

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    let output: string[] = [];

    switch (cmd) {
      case 'help':
        output = [
          'Available commands:',
          '  help        - Show this help message',
          '  challenges  - List all CTF challenges',
          '  solve <id>  - Attempt to solve a challenge',
          '  hint <id>   - Get a hint for a challenge',
          '  status      - Show solved challenges',
          '  clear       - Clear terminal',
          '  whoami      - Show unlocked information'
        ];
        break;
      
      case 'challenges':
        output = ['Available CTF Challenges:', ''];
        challenges.forEach(challenge => {
          const status = solvedChallenges.has(challenge.id) ? '[SOLVED]' : '[UNSOLVED]';
          output.push(`${challenge.id}: ${challenge.title} (${challenge.difficulty}) ${status}`);
        });
        break;
      
      case 'status':
        output = [`Solved: ${solvedChallenges.size}/${challenges.length} challenges`];
        if (solvedChallenges.size === challenges.length) {
          output.push('🎉 All challenges completed! You\'ve unlocked all information!');
        }
        break;
      
      case 'clear':
        setTerminalOutput(['> ']);
        return;
      
      case 'whoami':
        if (unlockedInfo.length === 0) {
          output = ['No information unlocked yet. Solve challenges to learn more about me!'];
        } else {
          output = ['Unlocked Information:', ''];
          unlockedInfo.forEach(info => output.push(`• ${info}`));
        }
        break;
      
      default:
        if (cmd.startsWith('solve ')) {
          const challengeId = cmd.substring(6);
          const challenge = challenges.find(c => c.id === challengeId);
          if (challenge) {
            output = [`Challenge: ${challenge.title}`, challenge.description, '', 'Enter your solution:'];
          } else {
            output = ['Challenge not found. Use "challenges" to see available challenges.'];
          }
        } else if (cmd.startsWith('hint ')) {
          const challengeId = cmd.substring(5);
          const challenge = challenges.find(c => c.id === challengeId);
          if (challenge) {
            output = [`Hint for ${challenge.title}:`, challenge.hint];
          } else {
            output = ['Challenge not found.'];
          }
        } else if (challenges.some(c => c.solution.toLowerCase() === cmd || c.solution === cmd)) {
          const challenge = challenges.find(c => c.solution.toLowerCase() === cmd || c.solution === cmd);
          if (challenge && !solvedChallenges.has(challenge.id)) {
            setSolvedChallenges(prev => new Set([...prev, challenge.id]));
            setUnlockedInfo(prev => [...prev, challenge.reward]);
            output = [
              '🎉 Correct! Challenge solved!',
              `Unlocked: ${challenge.reward}`,
              '',
              `Progress: ${solvedChallenges.size + 1}/${challenges.length} challenges completed`
            ];
          } else if (challenge) {
            output = ['You already solved this challenge!'];
          }
        } else {
          output = [`Command not found: ${command}`, 'Type "help" for available commands'];
        }
    }

    setTerminalOutput(prev => [...prev.slice(0, -1), `> ${command}`, ...output, '> ']);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(terminalInput);
      setTerminalInput('');
    }
  };
                      {/* CHANGE*/}

  const ctfAchievements = [
    { name: 'PicoCTF 2023', rank: '15th', points: '8,450' },
    { name: 'CSAW CTF 2023', rank: '32nd', points: '6,200' },
    { name: 'OverTheWire', level: 'Bandit Complete', points: 'All 34 levels' },
    { name: 'HackTheBox', rank: 'Hacker', points: '45 machines pwned' }
  ];

  return (
    <section id="ctf" ref={sectionRef} className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-white">
            <span className="text-cyan-400">[</span>CTF Challenges<span className="text-cyan-400">]</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Solve these cybersecurity challenges to unlock information about me. Each solved challenge reveals personal details!
          </p>
        </div>
                        {/* CHANGE*/}
        {/* Interactive Terminal */}
        <div className="terminal-container mb-16">
          <div className="bg-black/90 backdrop-blur-sm rounded-lg border border-green-500/30 overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-4 text-gray-300 font-mono text-sm">alex@cybersec-terminal:~$</span>
            </div>
            <div 
              ref={terminalRef}
              className="p-4 h-96 overflow-y-auto font-mono text-sm text-green-400 bg-black/50"
            >
              {terminalOutput.map((line, index) => (
                <div key={index} className={line.startsWith('>') ? 'text-cyan-400' : 'text-green-400'}>
                  {line}
                </div>
              ))}
              <div className="flex items-center">
                <span className="text-cyan-400">{'> '}</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="bg-transparent border-none outline-none text-green-400 font-mono flex-1 ml-1"
                  placeholder="Type a command..."
                  autoFocus
                />
                <span className="animate-pulse text-green-400">█</span>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Grid */}
        <div className="ctf-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {challenges.map((challenge, index) => (
            <div 
              key={challenge.id}
              className={`ctf-card bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                solvedChallenges.has(challenge.id) 
                  ? 'border-green-500/50 bg-green-900/20' 
                  : 'border-gray-700 hover:border-cyan-500/50'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {solvedChallenges.has(challenge.id) ? (
                    <Trophy className="w-6 h-6 text-green-400 mr-3" />
                  ) : (
                    <Lock className="w-6 h-6 text-gray-400 mr-3" />
                  )}
                  <h3 className="font-mono font-bold text-white">{challenge.title}</h3>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-mono ${
                  challenge.difficulty === 'Easy' ? 'bg-green-900/50 text-green-400' :
                  challenge.difficulty === 'Medium' ? 'bg-yellow-900/50 text-yellow-400' :
                  'bg-red-900/50 text-red-400'
                }`}>
                  {challenge.difficulty}
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-4 font-mono">{challenge.description}</p>
              {solvedChallenges.has(challenge.id) && (
                <div className="bg-green-900/30 border border-green-500/30 rounded p-3">
                  <div className="flex items-center mb-2">
                    <Key className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-green-400 font-mono text-sm">Unlocked:</span>
                  </div>
                  <p className="text-green-300 text-sm font-mono">{challenge.reward}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTF Achievements */}
        <div className="fade-in">
          <h3 className="text-2xl font-mono font-bold text-white mb-8 text-center">
            Competition Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ctfAchievements.map((achievement, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <Flag className="w-5 h-5 text-purple-400 mr-2" />
                  <h4 className="font-mono font-bold text-white text-sm">{achievement.name}</h4>
                </div>
                <div className="space-y-1">
                  <p className="text-purple-400 text-sm font-mono">
                    {achievement.rank || `Level: ${achievement.level}`}
                  </p>
                  <p className="text-gray-300 text-xs font-mono">{achievement.points}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/30">
            <Eye className="w-5 h-5 text-cyan-400 mr-3" />
            <span className="font-mono text-white">
              Progress: {solvedChallenges.size}/{challenges.length} challenges solved
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTFSection;