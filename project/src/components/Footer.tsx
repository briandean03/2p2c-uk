import { Facebook, Instagram, Linkedin, MapPin } from 'lucide-react';

function XIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.857L1.254 2.25h6.233l4.263 5.638L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1a2847] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-xl font-semibold mb-4">UK Office:</h3>
            <p className="text-gray-300 mb-1">No 6, Freesia Lane</p>
            <p className="text-gray-300 mb-1">West Meadows Estate</p>
            <p className="text-gray-300 mb-1">Cramlington</p>
            <p className="text-gray-300 mb-1">Northumberland</p>
            <p className="text-gray-300 mb-1">NE23 8FE</p>
            <p className="text-gray-300 mb-6">United Kingdom</p>
          </div>

          <div>
            <div className="mb-4">
              <p className="text-gray-300 mb-2">
                <span className="font-semibold">Tel:</span> +44 7404 806246
              </p>
              <p className="text-gray-300 mb-4">
                <span className="font-semibold">email:</span>{' '}
                <a href="mailto:info@2p2c.co.uk" className="hover:text-[#7C4DFF] transition-colors">
                  info@2p2c.co.uk
                </a>
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#7C4DFF] hover:text-[#6B3FE4] transition-colors"
              >
                <MapPin size={18} />
                Location map
              </a>
            </div>

            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/pages/2P2C%20Project%20Management%20Consultants/2014205831930539/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7C4DFF] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#7C4DFF] transition-colors">
                <XIcon size={24} />
              </a>
              <a href="https://www.instagram.com/2p2c_pmc/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7C4DFF] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/2p2c-project-management-consultants" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7C4DFF] transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2024 by Analytix.created 2p2c</p>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
