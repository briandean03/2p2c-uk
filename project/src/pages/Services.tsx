interface ServicesProps {
  onNavigate?: (page: string) => void;
}

interface Service {
  title: string;
  description: string;
  link?: string;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services: Service[] = [
    {
      title: 'Project Planning',
      description: 'Comprehensive project planning and scheduling services',
      link: 'project-planning',
    },
    {
      title: 'Expert Witness',
      description: 'Professional expert witness testimony and documentation',
    },
    {
      title: 'Contract Admin',
      description: 'Contract administration and management services',
    },
    {
      title: 'Claims Management',
      description: 'Construction claims assessment and resolution',
    },
  ];

  return (
    <div className="min-h-screen pt-[90px] bg-gradient-to-br from-[#4A2C7F] via-[#6B3FE4] to-[#4A2C7F]">
      <div className="max-w-7xl mx-auto px-6 py-20 mt-[500px]">
        <h1 className="text-5xl font-bold text-white text-center mb-16">Our Services</h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => service.link && onNavigate?.(service.link)}
              className={`bg-[#7FD957] hover:bg-[#6FC847] transition-all text-[#0A1E4D] p-8 rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 ${
                service.link ? 'cursor-pointer' : ''
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
