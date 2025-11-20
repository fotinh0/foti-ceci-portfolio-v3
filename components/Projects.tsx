"use client";

import { projects } from "@/data";
import { ThreeDCard } from "./ui/ThreeDCard";
import MagicButton from "./MagicButton";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center gap-x-8 justify-center">
        {projects.map((item) => (
          <div className="" key={item.id}>
            <ThreeDCard
              title={item.title}
              desc={item.des}
              img={item.img}
              href={item.link}
              github={item.github}
              iconList={item.iconList}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <a href="https://github.com/fotinh0" target="_blank">
          <MagicButton
            title="Visit GitHub"
            position="right"
            icon={<FaGithub size={20} />}
          />
        </a>
      </div>
    </section>
  );
};

export default Projects;
