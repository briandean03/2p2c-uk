import { Facebook, Twitter, Instagram, Linkedin, MapPin } from 'lucide-react';

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
              <a href="#" className="text-white hover:text-[#7C4DFF] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#7C4DFF] transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#7C4DFF] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#7C4DFF] transition-colors">
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
