import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import React, { useEffect } from "react";
import { useForm } from "@formspree/react";

const Footer = () => {
  const [state, handleSubmit] = useForm("mqkrovzv");

  useEffect(() => {
    if (state.succeeded) {
      window.location.href = "/success";
    }
  }, [state.succeeded]);

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">Get in touch</h1>
        <p className="text-white-200 md:mt-10 my-5 text-center lg:max-w-[45vw]">
          Whether you have questions or just want to say hello, don&apos;t
          hesitate to get in touch. You can reach me by filling out the form
          below or emailing me directly at{" "}
          <span className="text-purple">foti.ceci@gmail.com</span>.
        </p>
        <form
          name="contact-form"
          className="w-full md:w-[50%]"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-md text-left font-semibold leading-6 text-gray-300"
              >
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-[#1b2942] text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm text-left font-semibold leading-6 text-gray-300"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-[#1b2942] text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm text-left font-semibold leading-6 text-gray-300"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-[#1b2942] text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-fit m-auto">
            <MagicButton
              title="Send message"
              icon={<FaLocationArrow />}
              position="right"
              type="submit"
            />
          </div>
        </form>
      </div>
      <div className="flex flex-col mt-16 items-center">
        <div className="flex items-center md:gap-3 gap-6 pb-4">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.url}
              target="_blank"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
        <p className="text-sm md:font-normal font-light">
          Developed by Foti Ceci
        </p>
      </div>
    </footer>
  );
};

export default Footer;
