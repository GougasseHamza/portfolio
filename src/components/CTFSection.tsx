import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, Lock, Key, Flag, Trophy, Eye, Code, Shield } from 'lucide-react';

const CTFSection: React.FC = () => {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    'Welcome to Hamza\'s CTF Terminal v2.1.0',
    'Type "help" for available commands',
    '> '
  ]);
  const [solvedChallenges, setSolvedChallenges] = useState<Set<string>>(new Set());
  const [unlockedInfo, setUnlockedInfo] = useState<string[]>([]);
  const [discoveredSecrets, setDiscoveredSecrets] = useState<Set<string>>(new Set());
  const terminalRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Slower animations for CTF cards
    gsap.fromTo('.ctf-card',
      { opacity: 0, y: 30, rotateX: -10 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ctf-grid',
          start: 'top 80%'
        }
      }
    );

    // Terminal typing effect
    gsap.fromTo('.terminal-container',
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.terminal-container',
          start: 'top 80%'
        }
      }
    );

    // Auto-scroll terminal to bottom
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }

  }, [terminalOutput]);

  // Hidden data and secrets
  const secrets = {
    robots: '/secret_d1r3ct0ry/flag.txt',
    api_endpoint: '/api/v1/admin/secrets?auth=bypass',
    base64_encoded: 'RkxBR3tjdGZfbWFzdGVyX2hhbXphfQ==', // FLAG{ctf_master_hamza}
    jwt_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoYW16YSIsImFkbWluIjp0cnVlfQ.FLAG_IN_JWT',
    source_comment: 'FLAG{inspect_the_source}',
  };

  const challenges = [
    {
      id: 'robots_txt',
      title: 'Robots.txt Discovery',
      difficulty: 'Easy',
      category: 'Web Recon',
      description: 'Check the robots.txt file to find a hidden directory',
      hint: 'Web servers often have a robots.txt file. Try: curl /robots.txt',
      solution: '/secret_d1r3ct0ry/flag.txt',
      reward: 'Email: hamza.gougasse@um6p.ma',
      steps: [
        '1. Access /robots.txt',
        '2. Find the disallowed directory',
        '3. Navigate to the hidden path'
      ]
    },
    {
      id: 'base64_decode',
      title: 'Base64 Decoder',
      difficulty: 'Easy',
      category: 'Encoding',
      description: 'Decode this Base64 string: RkxBR3tjdGZfbWFzdGVyX2hhbXphfQ==',
      hint: 'Use CyberChef or atob() to decode Base64. Command: echo "string" | base64 -d',
      solution: 'FLAG{ctf_master_hamza}',
      reward: 'GitHub: github.com/GougasseHamza',
      steps: [
        '1. Recognize Base64 encoding (== padding)',
        '2. Use decoder tool',
        '3. Submit the decoded flag'
      ]
    },
    {
      id: 'source_code',
      title: 'Hidden Comment',
      difficulty: 'Easy',
      category: 'OSINT',
      description: 'Find the flag hidden in the page source code',
      hint: 'Right-click -> View Page Source. Look for HTML comments <!-- -->',
      solution: 'FLAG{inspect_the_source}',
      reward: 'LinkedIn: linkedin.com/in/hamza-gougasse',
      steps: [
        '1. View page source (Ctrl+U)',
        '2. Search for <!--',
        '3. Find the hidden flag comment'
      ]
    },
    {
      id: 'api_bypass',
      title: 'API Parameter Manipulation',
      difficulty: 'Medium',
      category: 'Web Exploitation',
      description: 'Find the admin API endpoint with auth bypass parameter',
      hint: 'Try /api/v1/admin/secrets with ?auth=bypass parameter',
      solution: '/api/v1/admin/secrets?auth=bypass',
      reward: 'Specialization: Web Security & Pentesting',
      steps: [
        '1. Enumerate API endpoints',
        '2. Try admin paths',
        '3. Test auth parameters'
      ]
    },
    {
      id: 'jwt_decode',
      title: 'JWT Token Analysis',
      difficulty: 'Medium',
      category: 'Authentication',
      description: 'Decode the JWT token and find the hidden flag in the payload',
      hint: 'JWT has 3 parts: header.payload.signature. Decode the payload (Base64)',
      solution: 'FLAG_IN_JWT',
      reward: 'CTF Experience: 2+ years',
      steps: [
        '1. Split JWT by dots (.)',
        '2. Base64 decode the payload',
        '3. Find the flag in JSON'
      ]
    },
    {
      id: 'sql_injection',
      title: 'SQL Injection',
      difficulty: 'Hard',
      category: 'Web Exploitation',
      description: 'Bypass login with SQL injection: username field vulnerable',
      hint: 'Try: admin\' OR \'1\'=\'1\' -- or admin\'--',
      solution: 'admin\' OR \'1\'=\'1\' --',
      reward: 'Achievement: MCPC 2025 Bronze Medalist',
      steps: [
        '1. Identify SQL injection point',
        '2. Test with \' OR \'1\'=\'1',
        '3. Comment out rest with --'
      ]
    },
    {
      id: 'command_injection',
      title: 'Command Injection',
      difficulty: 'Hard',
      category: 'Web Exploitation',
      description: 'Execute system commands through vulnerable ping function',
      hint: 'Try: 127.0.0.1; cat /etc/passwd or 127.0.0.1 && ls -la',
      solution: '127.0.0.1; cat flag.txt',
      reward: 'Status: ACPC Finalist 2024 & 2025',
      steps: [
        '1. Test with command separators (; && |)',
        '2. Chain commands',
        '3. Read flag.txt'
      ]
    },
    {
      id: 'xxe_injection',
      title: 'XXE Injection',
      difficulty: 'Hard',
      category: 'Web Exploitation',
      description: 'Exploit XML External Entity to read local files',
      hint: 'XML payload: <!DOCTYPE foo [<!ENTITY xxe SYSTEM "file:///etc/passwd">]>',
      solution: '<!ENTITY xxe SYSTEM "file:///flag.txt">',
      reward: 'Skills: Python, Java, C, C++, Web Security',
      steps: [
        '1. Identify XML input',
        '2. Craft XXE payload',
        '3. Read sensitive file'
      ]
    }
  ];

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    let output: string[] = [];

    switch (cmd) {
      case 'help':
        output = [
          'Available commands:',
          '  help            - Show this help message',
          '  challenges      - List all CTF challenges',
          '  solve <id>      - Attempt to solve a challenge',
          '  hint <id>       - Get a hint for a challenge',
          '  steps <id>      - Show solution steps',
          '  status          - Show solved challenges',
          '  secrets         - List discovered secrets',
          '  clear           - Clear terminal',
          '  whoami          - Show unlocked information',
          '  curl <path>     - Make HTTP request',
          '  decode <string> - Base64 decode',
          '  ls              - List files',
          '  cat <file>      - Read file contents'
        ];
        break;
      
      case 'challenges':
        output = ['Available CTF Challenges:', ''];
        challenges.forEach(challenge => {
          const status = solvedChallenges.has(challenge.id) ? '[✓ SOLVED]' : '[  LOCKED]';
          output.push(`${challenge.id.padEnd(20)} ${challenge.title.padEnd(30)} [${challenge.difficulty}] ${status}`);
          output.push(`  Category: ${challenge.category}`);
          output.push('');
        });
        break;
      
      case 'status':
        output = [
          `Progress: ${solvedChallenges.size}/${challenges.length} challenges solved`,
          `Secrets Found: ${discoveredSecrets.size}/5`
        ];
        if (solvedChallenges.size === challenges.length) {
          output.push('');
          output.push('🎉 CONGRATULATIONS! All challenges completed!');
          output.push('You\'ve mastered the CTF challenges!');
        }
        break;
      
      case 'secrets':
        if (discoveredSecrets.size === 0) {
          output = ['No secrets discovered yet. Keep exploring!'];
        } else {
          output = ['Discovered Secrets:', ''];
          Array.from(discoveredSecrets).forEach(secret => {
            output.push(`• ${secret}`);
          });
        }
        break;
      
      case 'clear':
        setTerminalOutput(['> ']);
        return;
      
      case 'whoami':
        if (unlockedInfo.length === 0) {
          output = ['No information unlocked yet. Solve challenges to learn more!'];
        } else {
          output = ['Unlocked Information:', ''];
          unlockedInfo.forEach(info => output.push(`• ${info}`));
        }
        break;

      case 'curl /robots.txt':
        output = [
          '# robots.txt for portfolio',
          'User-agent: *',
          'Disallow: /admin',
          'Disallow: /secret_d1r3ct0ry/',
          'Disallow: /api/v1/admin/',
          '',
          '💡 Hmm, what\'s in those directories?'
        ];
        setDiscoveredSecrets(prev => new Set([...prev, 'robots.txt endpoint']));
        break;

      case 'ls':
        output = [
          'flag.txt',
          'robots.txt',
          'index.html',
          'secrets.db',
          '.hidden_file'
        ];
        break;

      case 'cat flag.txt':
        if (solvedChallenges.has('command_injection')) {
          output = ['FLAG{command_injection_master}'];
        } else {
          output = ['cat: flag.txt: Permission denied', '💡 Solve the Command Injection challenge first!'];
        }
        break;

      case 'cat .hidden_file':
        output = [
          'Congratulations! You found a hidden file.',
          'Here\'s a bonus flag: FLAG{hidden_files_ninja}'
        ];
        setDiscoveredSecrets(prev => new Set([...prev, 'Hidden file discovered']));
        break;

      default:
        // Check for solve command
        if (cmd.startsWith('solve ')) {
          const challengeId = cmd.substring(6).trim();
          const challenge = challenges.find(c => c.id === challengeId);
          if (challenge) {
            output = [
              `Challenge: ${challenge.title}`,
              `Category: ${challenge.category}`,
              `Difficulty: ${challenge.difficulty}`,
              '',
              challenge.description,
              '',
              'Enter your solution (the flag or payload):'
            ];
          } else {
            output = ['Challenge not found. Use "challenges" to see available challenges.'];
          }
        }
        // Check for hint command
        else if (cmd.startsWith('hint ')) {
          const challengeId = cmd.substring(5).trim();
          const challenge = challenges.find(c => c.id === challengeId);
          if (challenge) {
            output = [
              `💡 Hint for ${challenge.title}:`,
              challenge.hint
            ];
          } else {
            output = ['Challenge not found.'];
          }
        }
        // Check for steps command
        else if (cmd.startsWith('steps ')) {
          const challengeId = cmd.substring(6).trim();
          const challenge = challenges.find(c => c.id === challengeId);
          if (challenge) {
            output = [
              `Solution Steps for ${challenge.title}:`,
              '',
              ...challenge.steps
            ];
          } else {
            output = ['Challenge not found.'];
          }
        }
        // Check for decode command
        else if (cmd.startsWith('decode ')) {
          const encodedString = cmd.substring(7).trim();
          try {
            const decoded = atob(encodedString);
            output = [
              'Base64 Decoded:',
              decoded,
              '',
              '💡 Is this a flag? Try submitting it!'
            ];
            setDiscoveredSecrets(prev => new Set([...prev, 'Base64 decoding']));
          } catch (e) {
            output = ['Error: Invalid Base64 string'];
          }
        }
        // Check for curl command
        else if (cmd.startsWith('curl ')) {
          const path = cmd.substring(5).trim();
          if (path === '/api/v1/admin/secrets?auth=bypass') {
            output = [
              'HTTP/1.1 200 OK',
              'Content-Type: application/json',
              '',
              '{',
              '  "status": "success",',
              '  "flag": "FLAG{api_bypass_success}",',
              '  "message": "Admin access granted"',
              '}'
            ];
            setDiscoveredSecrets(prev => new Set([...prev, 'API bypass technique']));
          } else if (path.includes('/secret_d1r3ct0ry/')) {
            output = [
              'HTTP/1.1 200 OK',
              '',
              'FLAG{robots_txt_master}'
            ];
            setDiscoveredSecrets(prev => new Set([...prev, 'Secret directory access']));
          } else {
            output = ['HTTP/1.1 404 Not Found'];
          }
        }
        // Check for solution submissions
        else if (challenges.some(c => 
          c.solution.toLowerCase() === cmd || 
          cmd.includes(c.solution.toLowerCase())
        )) {
          const challenge = challenges.find(c => 
            c.solution.toLowerCase() === cmd || 
            cmd.includes(c.solution.toLowerCase())
          );
          if (challenge && !solvedChallenges.has(challenge.id)) {
            setSolvedChallenges(prev => new Set([...prev, challenge.id]));
            setUnlockedInfo(prev => [...prev, challenge.reward]);
            output = [
              '🎉 CORRECT! Challenge solved!',
              '',
              `Challenge: ${challenge.title}`,
              `Category: ${challenge.category}`,
              `Difficulty: ${challenge.difficulty}`,
              '',
              `Unlocked: ${challenge.reward}`,
              '',
              `Progress: ${solvedChallenges.size + 1}/${challenges.length} challenges completed`
            ];
          } else if (challenge) {
            output = ['✓ You already solved this challenge!'];
          }
        }
        // Easter eggs and special commands
        else if (cmd === 'admin\' or \'1\'=\'1\' --' || cmd === 'admin\'--' || cmd.includes('or 1=1')) {
          const challenge = challenges.find(c => c.id === 'sql_injection');
          if (challenge && !solvedChallenges.has(challenge.id)) {
            setSolvedChallenges(prev => new Set([...prev, challenge.id]));
            setUnlockedInfo(prev => [...prev, challenge.reward]);
            output = [
              '🎉 SQL Injection successful!',
              'Logged in as admin',
              '',
              `Unlocked: ${challenge.reward}`
            ];
          } else if (challenge) {
            output = ['Already logged in as admin!'];
          }
        }
        else if (cmd.includes('127.0.0.1') && (cmd.includes(';') || cmd.includes('&&') || cmd.includes('|'))) {
          const challenge = challenges.find(c => c.id === 'command_injection');
          if (challenge && !solvedChallenges.has(challenge.id)) {
            setSolvedChallenges(prev => new Set([...prev, challenge.id]));
            setUnlockedInfo(prev => [...prev, challenge.reward]);
            output = [
              '🎉 Command Injection successful!',
              'FLAG{command_injection_master}',
              '',
              `Unlocked: ${challenge.reward}`
            ];
          }
        }
        else {
          output = [
            `Command not found: ${command}`,
            'Type "help" for available commands',
            '',
            '💡 Try exploring with: curl, decode, ls, cat'
          ];
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

  const ctfAchievements = [
    { name: 'MCPC 2025', rank: 'Bronze Medal', points: 'National Level' },
    { name: 'ACPC 2024', rank: 'Finalist', points: 'Cairo, Egypt' },
    { name: 'ACPC 2025', rank: 'Finalist', points: 'Cairo, Egypt' },
    { name: 'Practice', level: '1000+ Problems', points: 'Expert Level' }
  ];

  return (
    <section id="ctf" ref={sectionRef} className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            <span className="text-cyan-400">[</span>CTF Challenges<span className="text-cyan-400">]</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Solve realistic CTF challenges using real techniques from web security, encoding, and OSINT. 
            Each solved challenge reveals personal information!
          </p>
        </div>

        {/* Interactive Terminal */}
        <div className="terminal-container mb-16">
          <div className="bg-black/90 backdrop-blur-sm rounded-lg border border-green-500/30 overflow-hidden shadow-2xl">
            <div className="bg-gray-800 px-4 py-2 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-4 text-gray-300 font-mono text-sm font-medium">hamza@ctf-shell:~$</span>
            </div>
            <div 
              ref={terminalRef}
              className="p-4 h-96 overflow-y-auto font-mono text-sm text-green-400 bg-black/50"
            >
              {terminalOutput.map((line, index) => (
                <div key={index} className={line.startsWith('>') ? 'text-cyan-400 font-medium' : 'text-green-400 font-light'}>
                  {line}
                </div>
              ))}
              <div className="flex items-center">
                <span className="text-cyan-400 font-medium">{'> '}</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="bg-transparent border-none outline-none text-green-400 font-mono flex-1 ml-1 font-light"
                  placeholder="Type a command..."
                  autoFocus
                />
                <span className="text-green-400" style={{ animation: 'blink 1s infinite' }}>█</span>
              </div>
            </div>
          </div>
          
          {/* Quick Tips */}
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded border border-cyan-500/20">
              <Code className="w-4 h-4 text-cyan-400 mb-1" />
              <p className="text-xs text-gray-400 font-light">Start with: <span className="text-cyan-400 font-mono">curl /robots.txt</span></p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded border border-purple-500/20">
              <Shield className="w-4 h-4 text-purple-400 mb-1" />
              <p className="text-xs text-gray-400 font-light">Decode Base64: <span className="text-purple-400 font-mono">decode &lt;string&gt;</span></p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded border border-green-500/20">
              <Terminal className="w-4 h-4 text-green-400 mb-1" />
              <p className="text-xs text-gray-400 font-light">Explore files: <span className="text-green-400 font-mono">ls, cat</span></p>
            </div>
          </div>
        </div>

        {/* Challenge Grid */}
        <div className="ctf-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {challenges.map((challenge, index) => (
            <div 
              key={challenge.id}
              className={`ctf-card bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border transition-all duration-700 hover:transform hover:scale-105 ${
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
                </div>
                <span className={`px-2 py-1 rounded text-xs font-mono font-bold ${
                  challenge.difficulty === 'Easy' ? 'bg-green-900/50 text-green-400' :
                  challenge.difficulty === 'Medium' ? 'bg-yellow-900/50 text-yellow-400' :
                  'bg-red-900/50 text-red-400'
                }`}>
                  {challenge.difficulty}
                </span>
              </div>
              <h3 className="font-bold text-white mb-2 text-sm">{challenge.title}</h3>
              <p className="text-xs text-gray-500 mb-3 font-mono font-medium">{challenge.category}</p>
              <p className="text-gray-300 text-xs leading-relaxed mb-4 font-light">{challenge.description}</p>
              {solvedChallenges.has(challenge.id) && (
                <div className="bg-green-900/30 border border-green-500/30 rounded p-3">
                  <div className="flex items-center mb-2">
                    <Key className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-green-400 font-mono text-xs font-bold">Unlocked:</span>
                  </div>
                  <p className="text-green-300 text-xs font-light">{challenge.reward}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTF Achievements */}
        {/* Section removed as requested */}

        {/* Progress Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/30">
            <Eye className="w-5 h-5 text-cyan-400 mr-3" />
            <span className="font-mono text-white font-light">
              Progress: {solvedChallenges.size}/{challenges.length} challenges • {discoveredSecrets.size}/5 secrets
            </span>
          </div>
        </div>

        {/* Hidden HTML Comment for source code challenge */}
        {/* FLAG{inspect_the_source} - Congratulations! You found the hidden flag in the source code! */}
      </div>
      
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default CTFSection;