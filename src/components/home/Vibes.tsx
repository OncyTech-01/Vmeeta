'use client';

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Vibe() {
  return (
    <section className="flex justify-center px-[10px] pt-[48px]">
      <div
        className="
          relative

    md:w-full
    md:max-w-[1410px]
    md:h-[753px]

    max-md:w-full
    max-md:max-w-[445px]
    max-md:min-h-[542px]

    overflow-hidden
    rounded-[30px]
    bg-[#0B60EA]/[0.07]

    px-[16px]
    py-[20px]

    sm:px-[10px]
    sm:py-[14px]

    lg:px-[40px]
    lg:py-[30px]
        "
      >
        <div
          className="
            flex
            h-full
            items-center
            gap-[80px]

            max-md:flex-col
            max-md:justify-start
            max-md:gap-[5px]
          "
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="
              max-w-[280px]
              max-md:max-w-[260px]
              max-md:mx-auto
              max-md:text-center
            "
          >
            {/* Badge */}
            <div className="mb-5 inline-flex rounded-full bg-[#DCE8FF] px-4 py-2">
              <span className="text-[13px] font-medium text-[#3B82F6]">
                Vibes
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                text-[45px]
                font-bold
                leading-[50px]
                text-black

                max-md:text-[24px]
                max-md:leading-[26px]
                max-md:tracking-[-1px]
              "
            >
              Find people
              <br />
              who feel like{" "}
              <span className="text-[#3B82F6]">home.</span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-2
                text-[15px]
                leading-[26px]
                text-[#5F6368]

                max-md:text-[10px]
                max-md:leading-[12px]
                max-md:px-[4px]
              "
            >
              From creators and travelers
              to gamers and storytellers,
              discover communities where
              conversations feel real.
            </p>

            {/* Button */}
            <button
              className="
                max-md:hidden
                max-lg:mb-[10px]
                flex
                items-center
                gap-2
                rounded-full
                bg-[#2D79F5]
                px-[14px]
                py-[8px]
                text-[10px]
                font-semibold
                text-white
                shadow-[0px_8px_20px_rgba(45,121,245,0.35)]

                max-lg:mx-auto
              "
            >
              Start Exploring
              <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white">
                <ArrowRight size={14} className="text-[#2D79F5]" />
              </div>
            </button>
            {/* Mobile Button */}
            <button
              className="
                hidden
                max-md:flex
                mx-auto
                mt-4
                h-[32px]
                w-[32px]
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-md
              "
            >
              <ArrowRight size={16} className="text-[#3B82F6]" />
            </button>
          </motion.div>

          {/* Phones Row */}
          <div
            className="
              relative
              flex
              items-center
              gap-4
           
              max-md:w-full
              max-md:h-[350px]
              max-md:mt-[40px]
              max-md:justify-center
            "
          >
            {/* Heart, floats above center — positioned relative to whole row */}
            <Image
              src="/images/figma/V2.png"
              alt="top-heart"
              width={32}
              height={32}
              className="
                absolute
                left-1/2
                top-[-28px]
                z-40
                -translate-x-1/2
                object-contain
                w-[32px]
                h-[32px]
                drop-shadow-md
                hidden md:block
              "
              style={{ height: "auto" }}
            />

            {/* Mobile decorations */}
            <div className="hidden max-md:flex absolute left-[20px] top-[0px] z-20 flex-col gap-1">
              <span className="text-[14px] text-pink-300">❤️</span>
              <span className="text-[10px] text-pink-300 ml-2">❤️</span>
            </div>
            <div className="hidden max-md:flex absolute right-[40px] top-[10px] z-20 h-8 w-8 items-center justify-center rounded-full bg-[#99C2FF]">
              <span className="text-white">🤍</span>
            </div>

            {/* PHONE 1 wrapper (its own relative context) */}
            <div className="relative max-md:absolute max-md:left-[-15px] max-md:top-[60px] max-md:z-10">
              {/* TOP LEFT CARD — anchored to PHONE 1 */}
              <div
                className="
                  absolute
                  left-[10px]
                  top-[-60px]
                  z-40
                  flex
                  items-center
                  gap-3

                  max-lg:left-[-6px]
                  max-lg:top-[-30px]
                "
              >
                <div className="rounded-full bg-white p-[2px] shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile"
                    className="
                      h-[48px]
                      w-[48px]
                      rounded-full
                      object-cover
                      ring-2
                      ring-white
                      border-2
                      border-[#3B82F6]

                      max-lg:h-[22px]
                      max-lg:w-[22px]
                    "
                  />
                </div>

                <div className="rounded-full bg-[#E3D9FE] px-4 py-2 shadow-sm max-lg:px-2 max-lg:py-1">
                  <p className="whitespace-nowrap text-[12px] text-[#5B4A8A] max-lg:text-[6px]">
                    Your form is perfect
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 140, rotate: 8 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
              >
                <Image
                  src="/images/figma/Vibe0.png"
                  alt="vibe1"
                  width={297}
                  height={608}
                  className="
                    rounded-[28px]
                    object-cover

                    max-md:h-[246px]
                    max-md:w-[120px]
                    max-md:rotate-[-10deg]
                  "
                />
              </motion.div>
            </div>

            {/* PHONE 2 wrapper */}
            <div className="relative max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-[20px] max-md:z-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.75, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
              >
                <Image
                  src="/images/figma/Vibes1.png"
                  alt="vibe2"
                  width={310}
                  height={650}
                  className="
                    rounded-[28px]
                    object-cover

                    max-md:h-[314px]
                    max-md:w-[150px]
                  "
                />
              </motion.div>

              {/* BOTTOM CARD — anchored to PHONE 2 */}
              <div
                className="
                  absolute
                  bottom-[-45px]
                  left-1/2
                  -translate-x-1/2
                  z-20
                  flex
                  items-center
                  gap-2

                  max-lg:bottom-[-25px]
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile"
                  className="
                    h-[42px]
                    w-[42px]
                    rounded-full
                    object-cover

                    max-lg:h-[20px]
                    max-lg:w-[20px]
                  "
                />

                <div className="rounded-full bg-[#99C2FF] px-4 py-2 shadow-sm max-lg:px-2 max-lg:py-1">
                  <p className="max-lg:max-w-[70px] max-lg:text-center whitespace-nowrap text-[9px] text-[#1E3A8A] max-lg:text-[6px]">
                    Best recipe i will surely try it
                  </p>
                </div>
              </div>
            </div>

            {/* PHONE 3 wrapper */}
            <div className="relative max-md:absolute max-md:right-[-15px] max-md:top-[60px] max-md:z-10">
              {/* TOP RIGHT CARD — anchored to PHONE 3 */}
              <div
                className="
                  absolute
                  right-[10px]
                  top-[-30px]
                  z-40
                  flex
                  items-center
                  gap-3

                  max-lg:right-[14px]
                  max-lg:top-[-15px]
                "
              >
                <div className="rounded-full bg-[#FFD1DA] px-4 py-2 shadow-sm max-lg:px-2 max-lg:py-1">
                  <p className="whitespace-nowrap text-[12px] text-[#A21249] max-lg:text-[6px]">
                    Super cool dance boi ❤️
                  </p>
                </div>

                <div className="rounded-full bg-white p-[2px] shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1658932447761-8a59cd02d201?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile"
                    className="
                      h-[48px]
                      w-[48px]
                      rounded-full
                      object-cover
                      ring-2
                      ring-white
                      border-2
                      border-[#3B82F6]

                      max-lg:h-[22px]
                      max-lg:w-[22px]
                    "
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -140, rotate: -8 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
              >
                <Image
                  src="/images/figma/Vibes2.png"
                  alt="vibe3"
                  width={297}
                  height={608}
                  className="
                    rounded-[28px]
                    object-cover

                    max-md:h-[245px]
                    max-md:w-[120px]
                    max-md:rotate-[10deg]
                  "
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


