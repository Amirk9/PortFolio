import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import profilePic from "../assets/1.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative  bg-black text-white px-6 md:px-20 pt-24 pb-10 flex flex-col md:flex-row justify-between items-center overflow-hidden"
      aria-label="Introduction section with profile and call to action"
    >
      {/* 📸 Background image for small screens */}
      <div className="absolute inset-0 md:hidden z-0">
        <img
          src={profilePic}
          alt="Background portrait"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* 🧾 Left Content */}
      <div className="md:w-1/2 space-y-4 relative z-10">
        <h1 className="text-yellow-500 text-xl tracking-widest uppercase font-semibold">
          Hello!
        </h1>
        <h2 className="text-5xl md:text-6xl font-extrabold">
          I'm <span className="text-yellow-500">Mohammad Amir</span> <br />
          <span className="text-yellow-500">Khan</span>
        </h2>

        <p className="text-xl font-bold mt-2">
          <span>
            <Typewriter
              words={["build web apps.", "design UIs.", "solve problems."]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>
        <p className="text-lg">A Software Developer</p>
        <p className="text-lg text-gray-400 max-w-xl">
          I am Mohammad Amir Khan, a passionate Information Science and
          Engineering student with a flair for building web applications and
          designing user interfaces. I enjoy solving complex problems and
          turning ideas into reality through clean, efficient code.
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <a
            href="/cv.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download my CV"
            className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Download CV
          </a>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 inline-block font-semibold text-center"
            aria-label="Scroll to my works section"
          >
            My Works
          </Link>
        </div>
      </div>

      {/* 🖼️ Right-side image (hidden on mobile) */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center hidden md:flex z-10">
        <img
          src={profilePic}
          alt="Portrait of Mohammad Amir Khan"
          className="w-full max-w-sm object-cover rounded-lg shadow-lg"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default Hero;
