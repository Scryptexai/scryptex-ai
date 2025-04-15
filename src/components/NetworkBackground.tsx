
export const NetworkBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#F5F9FF] opacity-70"></div>
      
      {/* Network lines and nodes */}
      <div className="animate-pulse absolute top-[10%] left-[20%] w-2 h-2 bg-[#3366FF] rounded-full"></div>
      <div className="animate-pulse absolute top-[70%] left-[10%] w-3 h-3 bg-[#3366FF] rounded-full"></div>
      <div className="animate-pulse absolute top-[30%] right-[15%] w-2 h-2 bg-[#3366FF] rounded-full"></div>
      <div className="animate-pulse absolute top-[80%] right-[25%] w-3 h-3 bg-[#3366FF] rounded-full"></div>
      
      {/* Connecting lines */}
      <div className="absolute top-[10%] left-[20%] w-[30%] h-[0.5px] bg-gradient-to-r from-[#3366FF] to-transparent transform rotate-[25deg]"></div>
      <div className="absolute top-[30%] right-[15%] w-[25%] h-[0.5px] bg-gradient-to-l from-[#3366FF] to-transparent transform -rotate-[15deg]"></div>
      <div className="absolute top-[70%] left-[10%] w-[40%] h-[0.5px] bg-gradient-to-r from-[#3366FF] to-transparent transform -rotate-[10deg]"></div>
      
      {/* Network grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, #3366FF33 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        opacity: 0.4
      }}></div>
      
      {/* Floating particles */}
      <div className="absolute w-full h-full">
        {Array.from({ length: 8 }).map((_, index) => (
          <div 
            key={index}
            className="absolute w-1 h-1 bg-[#3366FF] rounded-full opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
