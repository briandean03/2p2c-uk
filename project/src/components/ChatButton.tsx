import { MessageCircle } from 'lucide-react';

export default function ChatButton() {
  return (
    <button className="fixed bottom-8 left-8 bg-[#7C4DFF] hover:bg-[#6B3FE4] text-white px-6 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2 z-50">
      <MessageCircle size={24} />
      Let's Chat!
    </button>
  );
}
