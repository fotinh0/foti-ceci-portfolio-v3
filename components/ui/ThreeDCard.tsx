"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Link from "next/link";

export const ThreeDCard = ({
  title,
  desc,
  img,
  href,
  github,
  iconList,
}: {
  title: string;
  desc: string;
  img: string;
  href: string;
  github?: string;
  iconList: string[];
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#04071d] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#04071d] dark:border-white/[0.1] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {desc}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex items-center justify-between my-6">
          <div className="flex items-center">
            {iconList.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}
              >
                <img src={icon} alt="icon5" className="p-2" />
              </div>
            ))}
          </div>
        </div>
        <div
          className={`flex ${
            github ? "justify-between" : "justify-end"
          } items-center mt-10`}
        >
          {github && (
            <CardItem
              translateZ={20}
              as={Link}
              href={github}
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              GitHub →
            </CardItem>
          )}
          <CardItem
            translateZ={20}
            as={Link}
            href={href}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Visit Live Site
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
