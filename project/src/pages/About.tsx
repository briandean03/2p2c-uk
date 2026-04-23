import { Plus, X as XIcon, Circle } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-[90px] bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-16">About Us</h1>

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
    </div>
  );
}
