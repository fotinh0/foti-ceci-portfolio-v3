import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

import { cn } from "@/utils/cn";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import Lottie from "react-lottie";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const stackList = [
    "JavaScript",
    "Typescript",
    "React",
    "NextJS",
    "GraphQL",
    "NodeJS",
    "MongoDB",
    "IBM DB2",
    "MySQL",
    "Tailwind",
    "IBM Cloud",
    "AWS",
  ];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "foti.ceci@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {id === 1 ? (
            <>
              <div
                className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
              >
                {title} 👨‍💻
              </div>
              <div className="font-sans mt-8 font-extralight md:text-lg lg:text-xl text-lg text-[#C1C2D3] z-10">
                <p>
                  Hello! My name is Foti Ceci, and I love coding everything
                  web-related. My journey into development began with the
                  struggles of learning C++ without any previous programming
                  experience (I wouldn’t recommend C++ as a starting point for
                  beginners, but if you&apos;re up for the challenge, go for
                  it!). While exploring alternatives, I found JavaScript, and
                  from there, I dove into creating interactive webpages using
                  HTML, CSS, and JavaScript.
                </p>
                <br />
                <p>
                  Years later, I&apos;ve had the privelege to work for{" "}
                  <a className="text-purple" href="#experience">
                    a large corporation
                  </a>
                  ,{" "}
                  <a className="text-purple" href="">
                    a soccer team
                  </a>
                  , and{" "}
                  <a className="text-purple" href="">
                    a nonprofit media company
                  </a>
                  . My passion lies in crafting fast, accessible, and modern
                  user interfaces that provide a positive user experience,
                  regardless of the application&apos;s purpose.
                </p>
                <br />
                <p>
                  Outside of development, I am a huge soccer fan ⚽️. I played
                  soccer throughout my childhood and into college, where I was
                  part of a team that reached the NCAA national tournament in
                  2019. Currently, I&apos;m eagerly looking forward to seeing my
                  favorite team, Borussia Dortmund💛, play (and hopefully win)
                  in the Champions League final.
                </p>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="font-sans font-extralight md:max-w-52 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                {description}
              </div>
              <div
                className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
              >
                {title}
              </div>
            </>
          )}

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex flex-wrap mt-4 gap-2 md:gap-2 lg:gap-4">
              {stackList.map((item, i) => (
                <span
                  key={i}
                  className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:min-w-28 lg:text-base opacity-50 
                              lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
