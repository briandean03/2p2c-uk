import { Facebook, Twitter, Linkedin, Instagram, Circle, Plus } from 'lucide-react';
import Footer from '../components/Footer';

export default function ProjectPlanning() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-300 via-yellow-200 to-orange-300 rounded-3xl opacity-90"></div>
              <div className="relative p-20">
                <div className="w-full h-64 bg-green-500 rounded-[100px] opacity-80"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <h1 className="text-5xl font-bold text-[#0A1E4D]">Planning & Project Controls</h1>
                <Circle className="w-12 h-12 text-purple-600" />
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-gray-700 text-lg italic">
                  "He who fails to plan is planning to fail" still stands to date. It essential to establish a baseline schedule based on a thorough understanding of the scope work, activity dependencies and nature.
                </p>
                <p className="text-gray-700 text-lg">
                  Here in 2p2c, we produce well detailed project schedules that include work breakdown structures, detailed coded activities, resource loading and cost allocation.
                </p>
                <p className="text-gray-700 text-lg">
                  Our state of the art dashboard and KPI driven reporting system will take care of all reporting and project control needs, and is an integral part of our techno contract administration system.
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
                <Plus className="w-10 h-10 text-purple-600" />
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  This includes preparing a baseline schedule based on drawings, Bills of Quantity and other documentation available at the project early stages. The sequence of activities are influenced by several factors such as constructability, crew movement, site access, and project management team strategies . Each activity can then be loaded with resources calculated and costs. The amount and type of resources required shall depend on standard productivity rates in the market and quantities associated with each activity.
                </p>
                <p>
                  The project controls function will start once the planning stage is completed. The progress of each activity is measured in order to update the programme. Then a progress report is produced containing a comparison between the planned and actual progress of <span className="text-blue-600 underline">key performance indicators</span>, and will highlight critical activities were improvement is required with recommendations to what actions are required to achieve to mitigate any performance deficiencies.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <div className="relative h-[600px] bg-gradient-to-br from-blue-100 to-purple-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-80 h-80 bg-gradient-to-br from-red-400 to-pink-500 rounded-[150px] opacity-80"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-cyan-500 to-blue-600 py-20">
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
                <h2 className="text-4xl font-bold text-white">Tools we use</h2>
                <Plus className="w-10 h-10 text-white" />
              </div>

              <div className="space-y-3 text-white text-lg">
                <p>Primavara P6</p>
                <p>Power BI</p>
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
