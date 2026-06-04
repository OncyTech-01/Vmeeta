"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ChatVC() {
  return (
    <section className="flex justify-center px-4 pt-[40px] lg:px-[8px]">
      <div
        className="
          relative

          w-full
          max-w-[519px]
          h-[177px]

          sm:max-w-[650px]
          sm:h-[220px]

          md:max-w-[1410px]
          md:min-h-[350px]

          lg:min-h-[516px]

          overflow-hidden
          rounded-[14px]
        "
      >
        {/* Background Image */}
        <Image
          src="/images/figma/Chatvc0.png"
          alt="chat background"
          fill
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Floating Chat Bubble 1 */}
        <div
          className="
    absolute
    left-[25%]
    top-[45px]
    z-20

    sm:left-[46%]
    sm:top-[14px]

    md:left-[35%]
    md:top-[70px]

    lg:left-[33%]
    lg:top-[120px]
  "
        >
          <div
            className="
      rounded-[4px]
      bg-[#7A655A]/90
      px-1
      py-[2px]
      shadow-lg
      backdrop-blur-sm

      md:px-2
      md:py-1
    "
          >
            <div className="flex items-center gap-1 md:gap-2">
              <p
                className="
          text-[4px]
          font-semibold
          text-white

          sm:text-[5px]

          md:text-[8px]

          lg:text-[10px]
        "
              >
                Miss You
              </p>

              <span
                className="
          text-[4px]
          sm:text-[5px]
          md:text-[8px]
          lg:text-[10px]
        "
              >
                ❤️
              </span>
            </div>

            <p
              className="
        mt-[2px]
        text-right
        text-[3px]
        text-white/70

        sm:text-[4px]

        md:text-[6px]

        lg:text-[8px]
      "
            >
              10:30 PM
            </p>
          </div>
        </div>

        {/* Floating Chat Bubble 2 */}
        <div
          className="
    absolute
    left-[32%]
    top-[65px]
    z-20

    sm:left-[45%]
    sm:top-[60px]

    md:left-[38%]
    md:top-[120px]

    lg:left-[37%]
    lg:top-[190px]
  "
        >
          <div
            className="
      rounded-[4px]
      bg-[#2488FF]
      px-1
      py-[2px]
      shadow-xl

      md:px-2
      md:py-1
    "
          >
            <div className="flex items-center gap-1 md:gap-2">
              <p
                className="
          text-[4px]
          font-bold
          text-white

          sm:text-[5px]

          md:text-[8px]

          lg:text-[10px]
        "
              >
                Miss You too
              </p>

              <span
                className="
          text-[4px]
          sm:text-[5px]
          md:text-[8px]
          lg:text-[10px]
        "
              >
                ❤️
              </span>
            </div>

            <p
              className="
        mt-[2px]
        text-right
        text-[3px]
        text-white/70

        sm:text-[4px]

        md:text-[6px]

        lg:text-[8px]
      "
            >
              10:30 PM
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div
          className="
    relative
    z-10
    flex
    h-[177px]
    md:min-h-[350px]
    lg:min-h-[516px]
    items-center
    px-4
    sm:px-5
    md:px-8
    lg:px-[50px]
  "
        >
          <div
            className="
      flex
      w-full
      max-w-[120px]
      flex-col
      justify-center
      text-left

      sm:max-w-[150px]

      md:max-w-[260px]

      lg:max-w-[437px]
      lg:py-12
    "
          >
            <motion.div
              initial={{
                opacity: 0,
                x: -60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              {/* Heading */}
              <h2
                className="
        text-[12px]
        leading-[14px]
        font-bold
        text-white

        sm:text-[14px]
        sm:leading-[16px]

        md:text-[22px]
        md:leading-[26px]

        lg:text-[48px]
        lg:leading-[54px]
      "
              >
                Some
                <br />

                <span className="text-[#4D91FF]">
                  Conversations
                </span>

                <br />
                make distance
                <br />
                disappear.
              </h2>

              {/* Description */}
              <p
                className="
        mt-2
        text-[8px]
        leading-[10px]
        text-white

        sm:text-[9px]
        sm:leading-[12px]

        md:mt-3
        md:text-[12px]
        md:leading-[18px]

        lg:mt-4
        lg:text-[16px]
        lg:leading-[28px]
      "
              >
                Distance means nothing when real
                conversations come from the heart,
                connect or just be together.

                <span
                  className="
          ml-1
          inline-flex
          h-[10px]
          w-[10px]
          items-center
          justify-center
          rounded-full
          bg-[#8B5CF6]
          text-[6px]

          md:h-[16px]
          md:w-[16px]
          md:text-[8px]

          lg:h-[20px]
          lg:w-[20px]
          lg:text-[10px]
        "
                >
                  💜
                </span>
              </p>
            </motion.div>

            {/* Button */}
            <motion.button
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="
        mt-3
        h-[22px]
        w-[90px]
        rounded-full
        border
        border-white
        text-[7px]
        font-medium
        text-white

        sm:h-[26px]
        sm:w-[105px]
        sm:text-[8px]

        md:mt-4
        md:h-[38px]
        md:w-[150px]
        md:text-[11px]

        lg:mt-8
        lg:h-[55px]
        lg:w-[231px]
        lg:text-[14px]
        transition
        hover:bg-white
        hover:text-black
      "
            >
              Start connecting
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}