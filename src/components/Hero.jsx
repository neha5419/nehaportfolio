import React from 'react';
 // Adjust the path as necessary

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-black bg-opacity-50 text-white">
      <img 
        src="./mypic.jpeg"
        alt="My Photo" 
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-xl">A showcase of my work and achievements</p>
      <button className="mt-8 px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-500 transition">
        <a href="https://github.com/neha5419">
          Explore My Work
        </a>
      </button>
    </section>
  );
}

export default Hero;
