export default function AnimatedTarget() {
  return (
    <div className="relative">
      <div className="animate-pulse-slow">
        <svg width="200" height="200" viewBox="0 0 200 200" className="animate-float">
          <circle cx="100" cy="100" r="60" fill="none" stroke="#7FD957" strokeWidth="3" opacity="0.3"/>
          <circle cx="100" cy="100" r="40" fill="none" stroke="#7FD957" strokeWidth="4" opacity="0.5"/>
          <circle cx="100" cy="100" r="20" fill="#7FD957" opacity="0.8"/>
          <circle cx="100" cy="100" r="10" fill="#0A1E4D"/>

          <circle cx="100" cy="40" r="4" fill="white" className="animate-orbit-dot"/>
          <circle cx="160" cy="100" r="4" fill="white" className="animate-orbit-dot-2"/>
          <circle cx="100" cy="160" r="4" fill="white" className="animate-orbit-dot-3"/>
          <circle cx="40" cy="100" r="4" fill="white" className="animate-orbit-dot-4"/>
        </svg>
      </div>

      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
        <div className="w-3 h-3 rounded-full bg-white opacity-60"></div>
        <div className="w-3 h-3 rounded-full bg-white opacity-60"></div>
        <div className="w-3 h-3 rounded-full bg-white opacity-60"></div>
        <div className="w-3 h-3 rounded-full bg-white opacity-60"></div>
        <div className="w-3 h-3 rounded-full bg-white opacity-60"></div>
        <div className="w-3 h-3 rounded-full bg-white opacity-60"></div>
      </div>
    </div>
  );
}
