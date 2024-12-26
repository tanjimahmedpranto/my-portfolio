import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <Image
        src="/dp.jpeg"
        alt="Tanjim Ahmed Pranto's Profile Photo"
        className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
        unoptimized
        width={160}
        height={160}
        priority
      />

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hi 👋, I'm Tanjim Ahmed Pranto, Welcome to my portfolio.
      </h1>

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

      <div className="prose prose-neutral dark:prose-invert">
        <p className="text-justify">
          I am a detail-oriented Full Stack Developer and UI/UX Designer with
          expertise in crafting dynamic, user-friendly websites and digital
          experiences.
        </p>
        <p className="text-justify">
          With a Master's in Information Technology from Åbo Akademi University,
          Finland, and a Bachelor's in Computer Science from Independent
          University, Bangladesh, I combine technical expertise with a passion
          for problem-solving and innovative thinking. Experienced in optimizing
          web performance and delivering reusable, efficient code, I am eager to
          expand my knowledge and contribute to impactful projects in IT,
          Computer Science, and AI. I can relate to a wide range of people.
        </p>
        <p>
          Feel free to connect with me on{" "}
          <a href={socialLinks.linkedin.url} target="_blank">
            {socialLinks.linkedin.label}
          </a>{" "}
          or check out my projects on{" "}
          <a href={socialLinks.github.url} target="_blank">
            {socialLinks.github.label}
          </a>
          .
        </p>

        <p>Email me at: tanjim.outcast@gmail.com</p>
        <div className="flex space-x-4 mt-6">
          <a
            href="/projects"
            className="inline-block px-6 py-2 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition no-underline"
          >
            Explore My Projects
          </a>
          <a
            href="/contact"
            className="inline-block px-6 py-2 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition no-underline"
          >
            Contact Me
          </a>
        </div>
      </div>
      {/* Tools & Technologies Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">
          🔧 Tools/Technology I Work With:
        </h2>

        {/* Programming Languages */}
        <div className="mb-6">
          <h3 className="text-base font-medium mb-2">Programming Languages</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-center">
            <div>
              <i className="devicon-cplusplus-plain colored text-3xl"></i>
              <p>C++</p>
            </div>
            <div>
              <i className="devicon-python-plain colored text-3xl"></i>
              <p>Python</p>
            </div>
            <div>
              <i className="devicon-javascript-plain colored text-3xl"></i>
              <p>JavaScript</p>
            </div>
            <div>
              <i className="devicon-php-plain colored text-3xl"></i>
              <p>PHP</p>
            </div>
          </div>
        </div>
        <br />

        {/* Frontend */}
        <div className="mb-6">
          <h3 className="text-base font-medium mb-2">Frontend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-center">
            <div>
              <i className="devicon-html5-plain colored text-3xl"></i>
              <p>HTML</p>
            </div>
            <div>
              <i className="devicon-css3-plain colored text-3xl"></i>
              <p>CSS</p>
            </div>
            <div>
              <i className="devicon-react-original colored text-3xl"></i>
              <p>React JS</p>
            </div>
            <div>
              <i className="devicon-nextjs-original colored text-3xl"></i>
              <p>Next JS</p>
            </div>
          </div>
        </div>
        <br />

        {/* Backend */}
        <div className="mb-6">
          <h3 className="text-base font-medium mb-2">Backend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-center">
            <div>
              <i className="devicon-nodejs-plain colored text-3xl"></i>
              <p>NodeJS</p>
            </div>
            <div>
              <i className="devicon-django-plain colored text-3xl"></i>
              <p>Django</p>
            </div>
          </div>
        </div>
        <br />

        {/* Databases */}
        <div className="mb-6">
          <h3 className="text-base font-medium mb-2">Databases</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-center">
            <div>
              <i className="devicon-postgresql-plain colored text-3xl"></i>
              <p>PostgreSQL</p>
            </div>
            <div>
              <i className="devicon-mongodb-plain colored text-3xl"></i>
              <p>MongoDB</p>
            </div>
          </div>
        </div>
        <br />

        {/* Additional Tools */}
        <div className="mb-6">
          <h3 className="text-base font-medium mb-2">Additional Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-center">
            <div>
              <i className="devicon-git-plain colored text-3xl"></i>
              <p>GIT</p>
            </div>
            <div>
              <i className="devicon-wordpress-plain colored text-3xl"></i>
              <p>WordPress</p>
            </div>
            <div>
              <i className="devicon-figma-plain colored text-3xl"></i>
              <p>Figma</p>
            </div>
            <div>
              <i className="devicon-amazonwebservices-plain colored text-3xl"></i>
              <p>AWS</p>
            </div>
            <div>
              <i className="devicon-canva-plain colored text-3xl"></i>
              <p>Canva</p>
            </div>
            <div>
              <i className="devicon-photoshop-plain colored text-3xl"></i>
              <p>Adobe Photoshop</p>
            </div>
            <div>
              <i className="devicon-illustrator-plain colored text-3xl"></i>
              <p>Adobe Illustrator</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
