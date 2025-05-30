import React, { useEffect } from 'react';

const CloudLoader = ({ onFinish }) => {
  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-b from-blue-200 to-blue-500 overflow-hidden">
      {/* Cloud */}
      <div className="relative w-full h-full animate-cloudFloat">
        <div className="absolute left-1/3 top-1/3">
          <div className="w-40 h-20 bg-white rounded-full shadow-lg opacity-90 animate-float-slow"></div>
          <div className="w-24 h-24 bg-white rounded-full shadow-lg absolute -left-10 -top-5 animate-float-medium"></div>
          <div className="w-32 h-16 bg-white rounded-full shadow-lg absolute left-20 -top-2 animate-float-fast"></div>
        </div>
      </div>
    </div>
  );
};

export default CloudLoader;
