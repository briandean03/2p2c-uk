import { Zap, Brain, Table, ArrowRight } from 'lucide-react';

export default function N8nWorkflow() {
  return (
    <div className="relative w-full h-full flex items-center justify-center py-8">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#7C4DFF" />
          </marker>

          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C4DFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7C4DFF" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C4DFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7C4DFF" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Connection lines with arrows */}
        <line
          x1="22"
          y1="50"
          x2="42"
          y2="50"
          stroke="url(#lineGradient1)"
          strokeWidth="6"
          markerEnd="url(#arrowhead)"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="58"
          y1="50"
          x2="78"
          y2="50"
          stroke="url(#lineGradient2)"
          strokeWidth="6"
          markerEnd="url(#arrowhead)"
          vectorEffect="non-scaling-stroke"
        />

        {/* Animated data flow particles - Line 1 */}
        <circle r="10.8" fill="#7C4DFF" opacity="0.8">
          <animateMotion
            dur="2.5s"
            repeatCount="indefinite"
            path="M 22 50 L 42 50"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="10.8" fill="#7C4DFF" opacity="0.8">
          <animateMotion
            dur="2.5s"
            repeatCount="indefinite"
            path="M 22 50 L 42 50"
            begin="0.8s"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.8s"
          />
        </circle>

        {/* Animated data flow particles - Line 2 */}
        <circle r="10.8" fill="#7C4DFF" opacity="0.8">
          <animateMotion
            dur="2.5s"
            repeatCount="indefinite"
            path="M 58 50 L 78 50"
            begin="0.5s"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </circle>
        <circle r="10.8" fill="#7C4DFF" opacity="0.8">
          <animateMotion
            dur="2.5s"
            repeatCount="indefinite"
            path="M 58 50 L 78 50"
            begin="1.3s"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="2.5s"
            repeatCount="indefinite"
            begin="1.3s"
          />
        </circle>

        {/* Pulsing glow effect on lines */}
        <line
          x1="22"
          y1="50"
          x2="42"
          y2="50"
          stroke="#7C4DFF"
          strokeWidth="10"
          opacity="0.3"
          vectorEffect="non-scaling-stroke"
        >
          <animate
            attributeName="opacity"
            values="0.1;0.5;0.1"
            dur="2s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="58"
          y1="50"
          x2="78"
          y2="50"
          stroke="#7C4DFF"
          strokeWidth="10"
          opacity="0.3"
          vectorEffect="non-scaling-stroke"
        >
          <animate
            attributeName="opacity"
            values="0.1;0.5;0.1"
            dur="2s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </line>
      </svg>

      {/* Trigger Node */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10">
        <div className="relative">
          <div className="w-36 h-36 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 border-4 border-white">
            <Zap className="text-white" size={72} strokeWidth={2.5} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl animate-ping opacity-20"></div>
        </div>
        <span className="text-base font-bold text-gray-800 bg-white px-4 py-1.5 rounded-full shadow-md">Trigger</span>
      </div>

      {/* AI Agent Node */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10">
        <div className="relative">
          <div className="w-36 h-36 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 border-4 border-white">
            <Brain className="text-white" size={72} strokeWidth={2.5} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl animate-ping opacity-20" style={{ animationDelay: '0.3s' }}></div>
        </div>
        <span className="text-base font-bold text-gray-800 bg-white px-4 py-1.5 rounded-full shadow-md">AI Agent</span>
      </div>

      {/* Airtable Node */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10">
        <div className="relative">
          <div className="w-36 h-36 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 border-4 border-white">
            <Table className="text-white" size={72} strokeWidth={2.5} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl animate-ping opacity-20" style={{ animationDelay: '0.6s' }}></div>
        </div>
        <span className="text-base font-bold text-gray-800 bg-white px-4 py-1.5 rounded-full shadow-md">Airtable</span>
      </div>
    </div>
  );
}
