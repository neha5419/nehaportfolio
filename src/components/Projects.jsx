// src/components/Projects.js
import React from "react";

function Projects() {
  const projects = [
    {
      title: "Floral Design Studio",
      description:
        "Welcome to Floral Design Studio, your go-to place for stunning transformations and design inspiration.",
      imageUrl: "./Home_Page.png",
      url: "https://excellonproject.netlify.app/", // Replace with actual link
    },
    {
      title: "Note App",
      description:
        "Helps you to register, then log in, and go to the dashboard to add, update, and delete todos.",
      imageUrl: "./keeper.png",
      url: "https://nehatodoappog.netlify.app/", // Replace with actual link
    },
    // Add more projects as needed
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
