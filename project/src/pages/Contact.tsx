import { useState } from 'react';
import { Circle } from 'lucide-react';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen pt-[90px]">
      <div
        className="relative bg-[#1a2847] py-20 px-6 min-h-[calc(100vh-90px)]"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 40, 71, 0.85), rgba(26, 40, 71, 0.85)), url("https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <h1 className="text-4xl font-bold text-[#7C4DFF]">Contact Our Experts</h1>
              <Circle className="text-[#7C4DFF]" size={32} fill="#7C4DFF" />
            </div>
            <p className="text-xl text-white">
              To schedule a call with one of our consultants, please fill in your contact details
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Name"
                className="w-full px-6 py-4 bg-white border-none rounded-lg text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-[#7C4DFF] outline-none"
                required
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email"
                className="w-full px-6 py-4 bg-white border-none rounded-lg text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-[#7C4DFF] outline-none"
                required
              />
            </div>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Type your message here..."
              rows={6}
              className="w-full px-6 py-4 bg-white border-none rounded-lg text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-[#7C4DFF] outline-none resize-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#7C4DFF] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#6B3FE4] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />

      <button className="fixed bottom-8 left-8 bg-[#7C4DFF] text-white px-6 py-4 rounded-full font-semibold shadow-lg hover:bg-[#6B3FE4] transition-all duration-300 hover:shadow-xl z-50">
        Let's Chat!
      </button>
    </div>
  );
}
