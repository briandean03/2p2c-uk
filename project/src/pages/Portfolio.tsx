import { useEffect, useState } from 'react';
import { Circle } from 'lucide-react';
import Footer from '../components/Footer';

export default function Portfolio() {
  const [animateProjects, setAnimateProjects] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateProjects(true), 100);
  }, []);

  const getInitialTransform = (direction: string) => {
    const distance = '200vh';
    switch (direction) {
      case 'top':
        return `translate(0, -${distance})`;
      case 'bottom':
        return `translate(0, ${distance})`;
      case 'left':
        return `translate(-${distance}, 0)`;
      case 'right':
        return `translate(${distance}, 0)`;
      case 'top-left':
        return `translate(-${distance}, -${distance})`;
      case 'top-right':
        return `translate(${distance}, -${distance})`;
      case 'bottom-left':
        return `translate(-${distance}, ${distance})`;
      case 'bottom-right':
        return `translate(${distance}, ${distance})`;
      default:
        return 'translate(0, 0)';
    }
  };

  const cities = [
    { name: 'Sunderland', top: '25%', left: '5%' },
    { name: 'Manchester', top: '35%', left: '5%' },
    { name: 'Oxford / Harwell', top: '45%', left: '5%' },
    { name: 'Coventry', top: '55%', left: '5%' },
    { name: 'Newport', top: '65%', left: '5%' },
    { name: 'London', top: '75%', left: '5%' },
  ];

  const projects = [
    { name: 'AESC Harbour Gigafactory - Sunderland', delay: 0.1, top: '25%', left: '30%', direction: 'top' },
    { name: 'Battery Dry Rooms (<1% RH) - AESC Gigafactory', delay: 0.2, top: '25%', left: '52%', direction: 'right' },
    { name: 'ISO Class 7-8 Cleanrooms - AESC Gigafactory', delay: 0.3, top: '25%', left: '74%', direction: 'top-right' },
    { name: 'High-Voltage Substation (>100MVA) - AESC', delay: 0.4, top: '32%', left: '30%', direction: 'left' },
    { name: 'Royal Oldham Hospital - Greater Manchester', delay: 0.5, top: '32%', left: '52%', direction: 'top' },
    { name: 'Operating Theatres (UV-C / Laminar Flow)', delay: 0.6, top: '32%', left: '74%', direction: 'right' },
    { name: 'Medical Gas Systems - Royal Oldham Hospital', delay: 0.7, top: '39%', left: '30%', direction: 'bottom-left' },
    { name: 'Infection Control HVAC (HEPA H14) - Royal Oldham', delay: 0.8, top: '39%', left: '52%', direction: 'top' },
    { name: 'Moderna Clinical Biomarker Laboratory - Harwell', delay: 0.9, top: '39%', left: '74%', direction: 'right' },
    { name: 'BSL-3 Containment Laboratory - Moderna', delay: 1.0, top: '46%', left: '30%', direction: 'left' },
    { name: 'ISO Class 7 Cleanrooms - Moderna', delay: 1.1, top: '46%', left: '52%', direction: 'bottom' },
    { name: 'High-Throughput Genomic Sequencing - Moderna', delay: 1.2, top: '46%', left: '74%', direction: 'top-right' },
    { name: 'UK Battery Industrialisation Centre - Coventry', delay: 1.3, top: '53%', left: '30%', direction: 'left' },
    { name: 'Pilot-Scale Electrode Manufacturing Lines - UKBIC', delay: 1.4, top: '53%', left: '52%', direction: 'bottom' },
    { name: 'Dry Rooms (Dew Point <-60°C) - UKBIC', delay: 1.5, top: '53%', left: '74%', direction: 'bottom-left' },
    { name: 'Abuse Testing Chambers - UKBIC', delay: 1.6, top: '60%', left: '30%', direction: 'top' },
    { name: 'Newport Wafer Fab - Newport, Wales', delay: 1.7, top: '60%', left: '52%', direction: 'right' },
    { name: 'ISO Class 4 Cleanroom - Newport Wafer Fab', delay: 1.8, top: '60%', left: '74%', direction: 'left' },
    { name: 'Ion Implanter & EPI Reactor Installation - Newport', delay: 1.9, top: '67%', left: '30%', direction: 'bottom' },
    { name: 'Ultra-Pure Water Systems (18.2 MΩ·cm) - Newport', delay: 2.0, top: '67%', left: '52%', direction: 'bottom-left' },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#6B3FE4] via-[#7C4DFF] to-[#6B3FE4] pt-[90px] pb-20 relative overflow-hidden">
        <div className="absolute top-20 right-10">
          <Circle className="text-white opacity-20" size={80} strokeWidth={2} />
        </div>
        <div className="absolute top-1/2 right-5 flex flex-col gap-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-white opacity-40"></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12 relative">
          <h1 className="text-5xl font-bold text-white text-center mb-8">Project Portfolio</h1>

          <div className="relative min-h-[800px]">
            <div className="space-y-4">
              {cities.map((city, index) => (
                <div
                  key={city.name}
                  className="text-3xl font-bold text-white transition-all duration-1000 ease-out"
                  style={{
                    position: 'absolute',
                    top: city.top,
                    left: city.left,
                    transitionDelay: `${index * 0.15}s`,
                    transform: animateProjects ? 'translateX(0)' : 'translateX(-300px)',
                    opacity: animateProjects ? 1 : 0,
                  }}
                >
                  {city.name}
                </div>
              ))}
            </div>

            {projects.map((project, index) => (
              <div
                key={index}
                className="absolute text-white text-sm font-medium px-4 py-2 transition-all duration-1000 ease-out"
                style={{
                  top: project.top,
                  left: project.left,
                  transitionDelay: `${project.delay}s`,
                  maxWidth: '250px',
                  transform: animateProjects ? 'translate(0, 0)' : getInitialTransform(project.direction),
                  opacity: animateProjects ? 1 : 0,
                }}
              >
                {project.name}
              </div>
            ))}

            <svg className="absolute" style={{ top: '50%', left: '30%', width: '400px', height: '200px' }}>
              <circle cx="50" cy="100" r="40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
              <circle cx="200" cy="80" r="15" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
              <path d="M 90 100 Q 150 90 185 80" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
              <circle cx="350" cy="120" r="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
              <path d="M 215 80 Q 280 100 325 120" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
            </svg>

            <svg className="absolute" style={{ bottom: '20%', right: '15%', width: '300px', height: '150px' }}>
              <ellipse cx="150" cy="75" rx="120" ry="60" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
              <circle cx="20" cy="75" r="8" fill="rgba(255,255,255,0.4)" />
              <circle cx="280" cy="75" r="8" fill="rgba(255,255,255,0.4)" />
            </svg>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="w-full">
            <path fill="white" d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z"/>
          </svg>
        </div>
      </div>

      <Footer />
    </>
  );
}
