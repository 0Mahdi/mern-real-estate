import React from 'react';

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-800 to-indigo-800 overflow-hidden">
      {/* Background image */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src="https://www.loclweb.com/wp-content/uploads/2019/02/real-estate-website-design-background.jpg"
        alt="Banner Background"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>
      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Welcome to Our Real Estate Website
        </h1>
        <p className="text-lg text-white mb-8">
          Discover the best deals and explore our awesome features.
        </p>
      </div>
    </div>
  );
};

export default Banner;
