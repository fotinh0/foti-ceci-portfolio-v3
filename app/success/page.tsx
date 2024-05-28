"use client";

import Head from "next/head";
import MagicButton from "@/components/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

export default function Page() {
  return (
    <div>
      <Head>
        <title>Message sent successfully</title>
        <meta name="description" content="Message was sent successfully" />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          background: "#000319",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="text-xl my-8">Message sent successfully!</h1>
        <div className="w-full md:w-fit mx-auto">
          <MagicButton
            title="Return to homepage"
            icon={<FaLocationArrow />}
            position="right"
            handleClick={() => {
              window.location.href = "/";
            }}
          />
        </div>
      </main>
    </div>
  );
}
