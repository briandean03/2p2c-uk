import { Facebook, Twitter, Linkedin, Instagram, Circle, X as XIcon, Plus } from 'lucide-react';
import Footer from '../components/Footer';

export default function ContractAdmin() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A1E4D] via-blue-700 to-purple-600 rounded-3xl opacity-90"></div>
              <div className="relative p-20">
                <div className="w-full h-64 bg-blue-600 rounded-[100px] opacity-80"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <h1 className="text-5xl font-bold text-[#0A1E4D]">Contract Administration</h1>
                <Circle className="w-12 h-12 text-purple-600" />
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-gray-700 text-lg">
                  Due to an increasing demand to limit the risk of cost overrun, amongst other factors, both Employers and Contractors resort to a more robust approach when it comes to matter related to Contract. 2p2c provides a full suit of contract management services that caters for the growing needs of the construction market. From Contractual in / out correspondence to preemptive tactics, 2p2c has it all covered.
                </p>
              </div>

              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-[#0A1E4D] transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#0A1E4D] transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#0A1E4D] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#0A1E4D] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-4xl font-bold text-[#0A1E4D]">Scope of Services</h2>
                <XIcon className="w-10 h-10 text-purple-600" />
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-700">
                    Thorough analysis and study of contract conditions (General and Particulars).
                  </p>
                </div>

                <div>
                  <p className="text-gray-700">
                    <span className="text-blue-600">Initiating and responding to incoming letters using well toned contractual language and aligned with a tactical response strategy</span>
                  </p>
                </div>

                <div>
                  <p className="text-gray-700">
                    Utilizing a timelined document management system to ensure that all notices and correspondences are issued on a timely manner and that the party is not subject to any contractual exposure.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <div className="relative h-[600px] bg-gradient-to-br from-teal-300 to-purple-300">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-80 h-96 bg-gradient-to-br from-teal-600 to-teal-700 rounded-[150px] opacity-80"></div>
                  </div>
                  <div className="absolute top-1/3 right-1/4">
                    <Plus className="text-purple-400 opacity-60" size={60} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <div className="h-96 bg-gradient-to-br from-orange-400 via-orange-300 to-orange-200 rounded-3xl relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-64 h-64 bg-gradient-to-br from-pink-200 to-white rounded-[120px] opacity-80"></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-4xl font-bold text-[#0A1E4D]">Tools we use</h2>
                <Plus className="w-10 h-10 text-purple-600" />
              </div>

              <div className="space-y-3 text-gray-700 text-lg">
                <p>FIDIC 1987, 1999, 2017</p>
                <p><span className="text-blue-600">Online document management systems (such as Aconex)</span></p>
                <p>Artificial Intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
