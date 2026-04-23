import { Facebook, Twitter, Linkedin, Instagram, X as XIcon } from 'lucide-react';
import Footer from '../components/Footer';

export default function ProjectManagement() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white py-20">
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
                <h1 className="text-5xl font-bold text-[#0A1E4D]">Project Management</h1>
                <Circle className="w-12 h-12 text-purple-600" />
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-gray-700 text-lg">
                  The complexity and intensity of current project requirement has given rise to new challenges and risks, that project management teams need to address.
                </p>
                <p className="text-gray-700 text-lg">
                  We identified 5 key areas that are essential to develop and control for a project to be delivered successfully, i.e. Progress Controls, Building Systems Coordination, Change Management, Document Management, and Site Activity Automated Monitoring.
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
                  <h3 className="font-bold text-gray-900 mb-2">Selecting and deployment of Design and Construction entities:</h3>
                  <p className="text-gray-700">
                    <span className="text-blue-600">By a rigorous selection process considering the level of experience financial capabilities and current standing.</span>
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Design proofing and value engineering:</h3>
                  <p className="text-gray-700">
                    <span className="text-blue-600">To ensure that the design is meeting the stakeholder requirements, and to reducing the total project costs.</span>
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Scope and variations management:</h3>
                  <p className="text-gray-700">
                    <span className="text-blue-600">To avoid any missing scope assignments and minimize the effect of positive variations</span>
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Planning, scheduling and progress controls:</h3>
                  <p className="text-gray-700">
                    <span className="text-blue-600">Using project dashboards, progress KPI, and dynamic critical path monitoring to identify the sources of delay and devise progress mitigation mechanisms.</span>
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Technical coordination and system conflict resolution:</h3>
                  <p className="text-gray-700">
                    <span className="text-blue-600">Using Building Information Modeling to identify system conflict at every stage of the project, thus avoiding costly rework and other re-design remedies.</span>
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Change management and claim avoidance:</h3>
                  <p className="text-gray-700">
                    <span className="text-blue-600">By utilizing best practices including quantification of each change, negotiating the best and most cost effective solution with the Contracting party.</span>
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Risk management and budget control:</h3>
                  <p className="text-gray-700">
                    <span className="text-blue-600">Implementing a risk control process which involves all the parties in a joint effort to identify, quantify, them mitigate or avoid risk during each project stage.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <div className="relative h-[600px] bg-gradient-to-br from-blue-200 to-blue-400">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-96 h-96 bg-gradient-to-br from-red-400 to-pink-500 rounded-[150px] opacity-80"></div>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                    <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                      <p className="text-white text-sm">Project Oversight</p>
                    </div>
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
                <XIcon className="w-10 h-10 text-purple-600" />
              </div>

              <div className="space-y-3 text-gray-700 text-lg">
                <p>FIDIC 1987, 1999, 2017</p>
                <p>Online document management systems (such as <span className="text-blue-600">Aconex</span>)</p>
                <p>Primavera P6 Project management Software</p>
                <p><span className="text-blue-600">BIM software</span></p>
                <p>Site crew monitoring systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
