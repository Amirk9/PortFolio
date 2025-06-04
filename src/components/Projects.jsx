import React from "react";
import img1 from "../assets/Ecommercereact.jpg"
import img2 from "../assets/True-Blog.jpg"
import img3 from "../assets/product-designer-web-template-portfolio-landing-page-design_138828-309.avif";
import img4 from "../assets/OIP.jpg";
import img5 from "../assets/maxresdefault.jpg";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Image Generation Tool",
      description:
        "Full-stack platform where users generate AI images using text prompts. Features secure JWT auth and Stripe payment integration.",
      techStack: ["ReactJS", "JavaScript", "Tailwind CSS", "MongoDB"],
      github: "https://github.com/Amirk9/TextTImageGenerator",
      demo: "#",
      image: img5,
    },
    {
      title: "E-Commerce Dashboard with Admin Portal",
      description:
        "Admin dashboard to manage products, orders, and users with real-time cart and payment processing.",
      techStack: ["ReactJS", "JavaScript", "MongoDB", "CSS"],
      github: "https://github.com/Amirk9/E-commerceApp",
      demo: "#",
      image: img1,
    },
    {
      title: "Blog Website with Admin Dashboard",
      description:
        "Full-stack blog platform with admin dashboard for managing posts, comments, and user profiles.",
      techStack: ["ReactJS", "JavaScript", "MongoDB", "CSS"],
      github: "https://github.com/Amirk9/E-commerceApp",
      demo: "#",
      image: img2,
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing projects, skills, and contact information with a modern design.",
      techStack: ["ReactJS", "JavaScript", "CSS", "MongoDB"],
      github: "https://github.com/Amirk9",
      demo: "#",
      image: img3,
    },
    {
      title: "Task management system",
      description:
        "A full-stack task management system with user authentication, task creation, and real-time updates.",
      techStack: ["ReactJS", "JavaScript", "CSS", "MongoDB"],
      github: "https://github.com/Amirk9",
      demo: "#",
      image: img4,
    },
  ];

  return (
    <section
      id="projects"
      aria-label="Project portfolio showcasing full-stack web applications"
      className="bg-black text-white py-16 px-6 md:px-20"
    >
      <h2 className="text-4xl font-bold text-center mb-2">Projects</h2>
      <p className="text-center text-gray-400 mb-10 text-sm md:text-base max-w-3xl mx-auto">
        Below are some full-stack projects showcasing modern web technologies.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={`${project.title}-${index}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-4 bg-zinc-800 rounded-lg shadow-lg hover:shadow-yellow-500 transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={`Screenshot or preview of project: ${project.title}`}
              className="w-full h-52 object-cover rounded-md mb-4"
              loading="lazy"
              decoding="async"
            />
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-yellow-500 text-cyan-900 text-xs px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black bg-yellow-500 p-2 rounded-full hover:text-yellow-100 font-semibold text-sm"
              >
                GitHub
              </a>
              {project.demo !== "#" ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black bg-yellow-500 p-2 rounded-full hover:text-yellow-100 font-semibold text-sm"
                >
                  Live Demo
                </a>
              ) : (
                <span className="bg-gray-700 text-white text-sm px-4 py-2 rounded-full">
                  Coming Soon
                </span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
