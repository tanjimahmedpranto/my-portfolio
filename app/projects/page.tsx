import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-5 bg-neutral-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform"
          >
            <div>
              <h2 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-neutral-400 text-sm mb-4">{project.year}</p>
              <p className="text-neutral-300">{project.description}</p>
            </div>
            <div className="flex justify-center mt-4">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 border border-gray-400 dark:border-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
