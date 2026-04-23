import { Plus, X as XIcon, Circle } from 'lucide-react';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [animateProjects, setAnimateProjects] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateProjects(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const portfolioSection = document.getElementById('portfolio-section');
    if (portfolioSection) {
      observer.observe(portfolioSection);
    }

    return () => observer.disconnect();
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
    <div className="min-h-screen">
      <section className="relative bg-black pt-[90px] overflow-hidden" style={{ minHeight: 'calc(100vh - 100px)' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/3141211/3141211-sd_640_360_25fps.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-br from-[#4A2C7F]/85 via-[#6B3FE4]/80 to-[#4A2C7F]/85"></div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10">
            <Plus className="text-[#7C4DFF]" size={40} />
          </div>
          <div className="absolute bottom-40 left-1/4">
            <XIcon className="text-[#7C4DFF]" size={50} />
          </div>
          <div className="absolute top-1/3 right-20">
            <XIcon className="text-[#7C4DFF]" size={45} />
          </div>
          <div className="absolute bottom-20 right-1/3">
            <XIcon className="text-[#7C4DFF]" size={35} />
          </div>
        </div>

        <div className="absolute top-[200px] right-[48px] z-10 w-56 h-56 lg:w-72 lg:h-72 flex items-center justify-center">
          <img
            src="/white_dots_target.png"
            alt="Target Crosshairs"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute top-[232px] lg:top-[240px] right-[80px] lg:right-[88px] z-20 w-40 h-40 lg:w-52 lg:h-52 animate-target-slide-blink">
          <img
            src="/2p2c_big_target.png"
            alt="2p2c Target"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="animate-fade-in-up mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
              Technology Driven
              <br />
              Project Management
            </h1>
          </div>

          <div className="text-white space-y-8 text-lg max-w-2xl">
            <div className="flex items-start gap-4">
              <Plus className="text-[#7C4DFF] flex-shrink-0 mt-1" size={32} />
              <p>Services Tailored to Project Needs</p>
            </div>
            <div className="flex items-start gap-4">
              <Plus className="text-[#7C4DFF] flex-shrink-0 mt-1" size={32} />
              <p>Robust local and regional expertise</p>
            </div>
            <div className="flex items-start gap-4">
              <Plus className="text-[#7C4DFF] flex-shrink-0 mt-1" size={32} />
              <p>Tangible high yield cost / benefit ratio</p>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <XIcon className="text-[#7C4DFF]" size={64} />
              </div>
              <h3 className="text-2xl font-bold text-[#7C4DFF] mb-4">Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                We are a team of highly experienced, success driven Engineers. We thrive to
                make every project a success story
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Circle className="text-[#7C4DFF]" size={64} strokeWidth={8} />
              </div>
              <h3 className="text-2xl font-bold text-[#7C4DFF] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a powerful extension of our Client in areas where special talents
                and high standard of delivery are required
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Plus className="text-[#7C4DFF]" size={64} />
              </div>
              <h3 className="text-2xl font-bold text-[#7C4DFF] mb-4">Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                We use state of the art technology in the areas of document management,
                design coordination, progress validation, and budget control
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            <button
              onClick={() => onNavigate('project-planning')}
              className="bg-[#7FD957] hover:bg-[#6FC847] transition-all text-[#0A1E4D] p-8 rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 cursor-pointer text-left w-full"
            >
              <h3 className="text-2xl font-bold mb-4">Project Planning</h3>
              <p className="text-lg">Comprehensive project planning and scheduling services</p>
            </button>
            <button
              onClick={() => onNavigate('expert-witness')}
              className="bg-[#7FD957] hover:bg-[#6FC847] transition-all text-[#0A1E4D] p-8 rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 cursor-pointer text-left w-full"
            >
              <h3 className="text-2xl font-bold mb-4">Expert Witness</h3>
              <p className="text-lg">Professional expert witness testimony and documentation</p>
            </button>
            <button
              onClick={() => onNavigate('contract-admin')}
              className="bg-[#7FD957] hover:bg-[#6FC847] transition-all text-[#0A1E4D] p-8 rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 cursor-pointer text-left w-full"
            >
              <h3 className="text-2xl font-bold mb-4">Contract Admin</h3>
              <p className="text-lg">Contract administration and management services</p>
            </button>
            <button
              onClick={() => onNavigate('project-management')}
              className="bg-[#7FD957] hover:bg-[#6FC847] transition-all text-[#0A1E4D] p-8 rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 cursor-pointer text-left w-full"
            >
              <h3 className="text-2xl font-bold mb-4">Project Management</h3>
              <p className="text-lg">Administering, Coordinating and Managing Complex large-Scale Projects</p>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">AI Applications in Construction</h3>
              <p className="text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
                2p2c is one the first companies in the world to use AI advanced technology
                to gather and manage mega size data during the preparation of expert
                witness testimony documentation.
              </p>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                It is anticipated that 2p2c will have a permanent AI base who can handle
                claims related data with minimum or no human intervention with in the next
                2 years.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section id="portfolio-section" className="bg-gradient-to-br from-[#6B3FE4] via-[#7C4DFF] to-[#6B3FE4] py-20 relative overflow-hidden">
        <div className="absolute top-20 right-10">
          <Circle className="text-white opacity-20" size={80} strokeWidth={2} />
        </div>
        <div className="absolute top-1/2 right-5 flex flex-col gap-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-white opacity-40"></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12 relative">
          <h2 className="text-5xl font-bold text-white text-center mb-16">Project Portfolio</h2>

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
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">FIDIC Affiliation</h2>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="flex-shrink-0">
              <img
                src="/fidic_logo_293_0.png"
                alt="FIDIC Logo"
                className="w-64 h-auto"
              />
            </div>
            <div className="flex-1">
              <p className="text-gray-600 text-lg leading-relaxed">
                2p2c became the first management consultant to be an official affiliate of FIDIC in the UAE.
                Thus, supporting our vision to promote a versatile, balanced, and internationally
                accepted standard forms of Contract in the Local Construction Industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
