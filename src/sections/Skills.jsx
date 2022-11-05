import React from "react";

// motion
import { motion } from "framer-motion";

// Skills data
import { skills } from "../data/data";

const Skills = () => {
  return (
    <section
      className="max-w-6xl mx-auto px-6 min-h-screen select-none"
      id="skills"
    >
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        {/* Heading */}
        <h2 className="text-2xl text-center font-nav font-semibold mb-12 select-none md:text-3xl lg:text-4xl">
          Skills & Experience
        </h2>

        {/* Skills & Experience */}
        <motion.div className="flex flex-col space-y-20 md:flex-row md:space-y-0">
          {/* Skills */}
          <div className="flex flex-wrap gap-12 justify-center items-center md:w-1/2 md:max-w-sm md:mx-auto ">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center items-center"
              >
                {/* Image container */}
                <div className="w-[90px] h-[90px] rounded-full mb-[.75rem] bg-[#0a192f] flex justify-center items-center hover:border hover:border-secondary">
                  <img className="w-[60%]" src={skill.image} alt={skill.name} />
                </div>

                {/* skill name */}
                <p className="text-sm font-medium text-slate-400">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Experience */}
          <div className="flex flex-col space-y-12 md:w-1/2 md:pt-4">
            {/* 2022 */}
            <div className="flex space-x-12">
              <p className="text-md text-secondary font-semibold lg:text-lg">
                2022
              </p>

              <div>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-slate-200 text-md font-medium uppercase mb-[.75rem] lg:text-lg">
                    FrontEnd Developer
                  </h4>
                  <p className="text-slate-300 mb-[.5rem]">
                    I am working as a freelancer on Upwork.
                  </p>
                  <p className="text-sm font-nav text-slate-300">Upwork</p>
                </motion.div>
              </div>
            </div>

            {/* 2021 */}
            <div className="flex space-x-12">
              <p className="text-md text-secondary font-semibold lg:text-lg">
                2021
              </p>

              <div>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="ml-1"
                >
                  <h4 className="text-slate-200 text-md font-medium uppercase mb-[.75rem] lg:text-lg">
                    FrontEnd & Alfresco Dev
                  </h4>
                  <p className="text-slate-300 mb-[.5rem]">
                    I have worked on customising Alfresco (CMS) for a large
                    organization
                  </p>
                  <p className="text-sm font-nav text-slate-300">
                    Prefecture d'arrondissement de Ben M'sick
                  </p>
                </motion.div>
              </div>
            </div>

            {/* 2020 */}
            <div className="flex space-x-12">
              <p className="text-md text-secondary font-semibold lg:text-lg">
                2020
              </p>

              <div>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-slate-200 text-md font-medium uppercase mb-[.75rem] lg:text-lg">
                    FrontEnd Developer
                  </h4>
                  <p className="text-slate-300 mb-[.5rem]">
                    I have developped many frontend projects
                  </p>
                  <p className="text-sm font-nav text-slate-300">By myslef</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
