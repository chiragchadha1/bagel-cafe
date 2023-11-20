import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-blue-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-20">
        <div className="z-10">
          <h1 className="font-serif text-6xl mb-4">Howard Beach Bagel Cafe</h1>
          <p className="mb-8">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
          <a href="#" className="inline-block bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded-full hover:bg-yellow-600 transition-colors">View Menu</a>
        </div>
        <div className="absolute top-0 right-0 h-full w-2/5">
          {/* Background image here */}
        </div>
      </div>
    </div>
  );
};

export default Hero;