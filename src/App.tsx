import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CTFSection from './components/CTFSection';
import Contact from './components/Contact';
import MatrixBackground from './components/MatrixBackground';
import Navigation from './components/Navigation';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize smooth scrolling and page animations with slower durations
    gsap.set('.fade-in', { opacity: 0, y: 30 });
    
    ScrollTrigger.batch('.fade-in', {
      onEnter: (elements) => {
        gsap.fromTo(elements, 
          { opacity: 0, y: 30 }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 1.2, 
            stagger: 0.15, 
            ease: 'power3.out' 
          }
        );
      },
      onLeave: (elements) => {
        gsap.to(elements, { 
          opacity: 0.4, 
          duration: 0.8,
          ease: 'power2.inOut'
        });
      },
      onEnterBack: (elements) => {
        gsap.to(elements, { 
          opacity: 1, 
          duration: 0.8,
          ease: 'power2.inOut'
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={appRef} className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <MatrixBackground />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CTFSection />
        <Contact />
      </main>
    </div>
  );
}

export default App;