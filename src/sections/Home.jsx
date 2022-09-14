import React from "react";

// motion
import { motion } from "framer-motion";

// Icons
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";

const Home = () => {
  return (
    <section
      className="relative max-w-6xl mx-auto px-6 pt-8 h-screen"
      id="home"
    >
      {/* Content Container with animation */}
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex items-center h-full md:pl-16"
      >
        <div>
          {/* Introduction */}
          <h1 className="text-5xl font-semibold mb-4 select-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            Hi,
            <br />
            I am Amine,
            <br />
            web developer
          </h1>
          {/* Profession */}
          <p className="text-slate-200 text-lg font-nav mb-10 select-none md:text-xl lg:text-2xl">
            Front End Developer / React Developer
          </p>

          {/* Contact me button */}
          <a
            className="px-8 py-4 border text-secondary border-secondary rounded-md cursor-pointer duration-300 font-nav font-medium text-lg tracking-widest select-none hover:bg-secondary/20  md:text-xl"
            href="#contact"
          >
            Contact me
          </a>
        </div>
      </motion.div>

      {/* Social container */}
      <motion.div
        whileInView={{ y: [100, 0] }}
        transition={{ delay: 0.1 }}
        className="hidden md:block fixed -bottom-1.5"
      >
        <ul className="flex flex-col gap-8 justify-center items-center">
          <li className="hover:-translate-y-1 duration-200">
            <a
              className="text-slate-300 hover:text-secondary"
              href="https://www.facebook.com/amine.elkhalidy.73"
              target="_blank"
            >
              <FiFacebook size={21} />
            </a>
          </li>

          <li className="hover:-translate-y-1 duration-200">
            <a
              className="text-slate-300 hover:text-secondary"
              href="https://github.com/AmineElkhalidy"
              target="_blank"
            >
              <FiGithub size={20} />
            </a>
          </li>

          <li className="hover:-translate-y-1 duration-200">
            <a
              className="text-slate-300 hover:text-secondary"
              href="https://www.linkedin.com/in/amine-elkhalidy-b28529233/"
              target="_blank"
            >
              <FiLinkedin size={20} />
            </a>
          </li>

          <li className="hover:-translate-y-1 duration-200">
            <a
              className="text-slate-300 hover:text-secondary"
              href="https://www.upwork.com/freelancers/aminee12"
              target="_blank"
            >
              <SiUpwork size={20} />
            </a>
          </li>

          <li>
            <span className="inline-block w-[.05rem] h-24 bg-slate-300" />
          </li>
        </ul>
      </motion.div>

      {/* Email Container */}
      <motion.div
        whileInView={{ y: [100, 0] }}
        transition={{ delay: 0.1 }}
        className="hidden md:block fixed -bottom-1.5 -right-16 xl:-right-6"
      >
        <ul className="flex flex-col justify-center items-center">
          <li className="rotate-90 text-sm hover:-translate-y-1">
            <a
              className="text-slate-300 hover:text-secondary"
              href="mailto:a.amineelkhalidy@gmail.com"
            >
              a.amineelkhalidy@gmail.com
            </a>
          </li>

          <li className="mt-28">
            <span className="inline-block w-[.05rem] h-24 bg-slate-300" />
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Home;
