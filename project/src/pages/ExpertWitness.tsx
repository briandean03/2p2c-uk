import { Facebook, Twitter, Linkedin, Instagram, Circle, X as XIcon, Plus } from 'lucide-react';
import Footer from '../components/Footer';

export default function ExpertWitness() {
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
                <h1 className="text-5xl font-bold text-[#0A1E4D]">Expert Witness</h1>
                <Circle className="w-12 h-12 text-purple-600" />
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-gray-700 text-lg">
                  During a dispute resolution process such as arbitration, expert witness testimonies are commonly required. Experts for Delay and Quantum are usually appointed by one or more of the parties in dispute. 2p2c has the expertise and capabilities to provide expert witnesses with relevant experience in the matter in dispute.
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
                    A comprehensive study of all documents related to the matter in dispute, then relating the facts of the case with the claims initiated by each party.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700">
                    <span className="text-blue-600">Establishing a pool of documents to be agreed between party experts</span>
                  </p>
                </div>

                <div>
                  <p className="text-gray-700">
                    Establishing an as-built critical path representing the original duration and the total delayed period. This serves as basis for the identification of the main project delay drivers and the delay contribution of each. <span className="text-blue-600">(Delay expert)</span>
                  </p>
                </div>

                <div>
                  <p className="text-gray-700">
                    <span className="text-blue-600">Identification of cost claim heads and all the related supporting documents.</span> Then a thorough examination of each cost head in terms of valuation and entitlement. <span className="text-blue-600">(Quantum Expert)</span>
                  </p>
                </div>

                <div>
                  <p className="text-gray-700">
                    Reply to expert reports and issuance of joint statements and reports to the arbitral tribunal.
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
