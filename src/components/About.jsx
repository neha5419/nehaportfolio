import React from "react";

function About() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-8 md:px-16 text-center">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-8">
          About Me
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          <span className="block mt-6">
            ◼ I’m a passionate web developer with experience in creating dynamic
            and responsive FullStack Websites. I enjoy solving complex problems
            and turning ideas into reality through code. I hold a BSc in Computer
            Science and an MCA, which have equipped me with a solid understanding
            of programming and web technologies.
          </span>
          <span className="block mt-6">
            ◼ My expertise includes working with technologies such as <span className="font-semibold text-gray-800">HTML, CSS, JavaScript, React JS, React Router DOM, Zustand, Axios, Fetch API,</span> and <span className="font-semibold text-gray-800">Tailwind CSS</span> for the frontend.
          </span>
          <span className="block mt-6">
            ◼ For the backend, I have used <span className="font-semibold text-gray-800">Node.JS, Express.js, Middleware, RESTful API, CRUD operations, Session & Cookies, Hashing & Bcrypt, JWT (JSON Web Token),</span> and <span className="font-semibold text-gray-800">OAuth</span>.
          </span>
          <span className="block mt-6">
            ◼ For databases, I have used <span className="font-semibold text-gray-800">PostgreSQL, Prisma, Neon DB, Oracle,</span> and <span className="font-semibold text-gray-800">MySQL</span>.
          </span>
          <span className="block mt-6">
            ◼ For version control and deployment, I have used <span className="font-semibold text-gray-800">Git, GitHub, Netlify, Render,</span> and <span className="font-semibold text-gray-800">Docker</span>.
          </span>
          <span className="block mt-6">
            ◼ I also use tools like <span className="font-semibold text-gray-800">Postman, ThunderClient,</span> and <span className="font-semibold text-gray-800">NPM</span>.
          </span>
          <br />
          <br />
          In addition to my technical skills, I’m committed to writing clean,
          efficient code and following best practices in software development.
          When I’m not coding, you might find me exploring the latest design
          trends or contributing to open-source projects.
        </p>
      </div>
    </section>
  );
}

export default About;
