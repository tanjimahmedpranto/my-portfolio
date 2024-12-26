import React from "react";

import Image from "next/image";

export default function Contact() {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between p-8 lg:p-16 bg-gray-50 dark:bg-gray-900">
      {/* Left Section: Profile Picture */}
      <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-12">
        <Image
          src="/contact.jpg" // Replace with your actual profile picture path
          alt="Tanjim Ahmed Pranto"
          width={200}
          height={200}
          className="rounded-full border-4 border-gray-300 dark:border-gray-700"
        />
      </div>

      {/* Right Section: Content */}
      <div className="flex flex-col text-center lg:text-left">
        <h1 className="text-3xl font-bold mb-6">
          Let’s Build Something Great Together!
        </h1>
        <p className="mb-4 text-lg">
          I’m always excited to connect with like-minded individuals, passionate
          businesses, and curious learners. Whether you have a project idea,
          want to collaborate, or simply want to chat about web development,
          technology, or creative ideas, I’d love to hear from you!
        </p>
        <p className="mb-4 text-lg">
          Feel free to reach out via email, connect with me on LinkedIn, or
          follow my journey on GitHub. Let’s make something awesome together!
        </p>
        <p className="mb-4 text-lg">
          Don’t hesitate to say hello—I’ll get back to you as soon as possible.
        </p>
        <p className="mb-4 text-lg font-medium">
          Email:{" "}
          <a
            href="mailto:tanjim.outcast@gmail.com"
            className="text-blue-500 hover:underline"
          >
            tanjim.outcast@gmail.com
          </a>
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center lg:justify-start gap-6 mt-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tanjimahmedpranto/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-full transition"
          >
            <i className="devicon-linkedin-plain text-white text-2xl"></i>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/tanjimahmedpranto"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-gray-900 rounded-full transition"
          >
            <i className="devicon-github-original text-white text-2xl"></i>
          </a>

          {/* Email */}
          <a
            href="mailto:tanjim.outcast@gmail.com"
            className="w-12 h-12 flex items-center justify-center bg-red-500 hover:bg-red-600 rounded-full transition"
          >
            <i className="devicon-google-plain text-white text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
