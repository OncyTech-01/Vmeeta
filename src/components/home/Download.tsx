'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Download() {
  return (
    <section className="flex justify-center pt-[32px] md:pt-[48px] pb-[50px] md:pb-[80px] ">
      <div
        className="
          relative
          w-full
          max-w-[1511px]
          min-h-[520px]
          md:min-h-[700px]
          lg:h-[887px]
          overflow-hidden
          
        "
      >
        {/* Background Image */}
        <Image
          src="/images/figma/Download1.png"
          alt="download"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#00193D]/5" />

        {/* Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: -80,
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
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="
    relative z-10
    flex h-full items-center
    px-5 sm:px-8 md:px-[40px] lg:px-[60px]
    py-10 md:py-16
  "
        >
          <div className="max-w-[520px]">
            {/* Heading */}
            <h2
              className="
                text-[38px]
                leading-[42px]
                sm:text-[52px]
                sm:leading-[56px]
                md:text-[68px]
                md:leading-[72px]
                lg:text-[86px]
                lg:leading-[90px]
                font-medium text-white
              "
            >
              The world is
              <br />

              <span className="bg-[linear-gradient(180deg,#75A9FF_0%,#639BF5_100%)] bg-clip-text text-transparent">
                waiting.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-4 md:mt-6
                text-[14px]
                leading-[24px]
                sm:text-[16px]
                sm:leading-[28px]
                lg:text-[18px]
                lg:leading-[32px]
                text-[#D1D5DB]
              "
            >
              Real people. Real conversations.
              <br />
              Real connections.
            </p>

            {/* CTA Button */}
            <button
              className="
                mt-6 md:mt-8
                h-[42px]
                w-[180px]
                sm:w-[220px]
                sm:h-[56px]
                md:w-[360px]
                lg:h-[92px]
                lg:w-[416px]
                rounded-[14px]
                bg-[linear-gradient(180deg,#0851C7_0%,#3A81F4_100%)]
                px-6
                text-[13px]
                sm:text-[16px]
                md:text-[20px]
                lg:text-[23px]
                font-bold
                text-white
                transition
                hover:opacity-90
              "
            >
              Join Vmeeta Now
            </button>

            {/* App Buttons */}
            <div
              className="
                mt-6 md:mt-8 pt-[10px]
                flex flex-wrap gap-4 md:gap-6
              "
            >
              <Image
                src="/images/figma/badge-google-play 1.png"
                alt="google play"
                width={190}
                height={57}
                className="
                w-[100px]
                sm:w-[140px]
                md:w-[180px]
                lg:w-[190px]
                h-auto
              "
              />

              <Image
                src="/images/figma/badge-app-store 1.png"
                alt="app store"
                width={190}
                height={60}
                className="
                  w-[100px]
                  sm:w-[140px]
                  md:w-[180px]
                  lg:w-[190px]
                  h-auto
                "
              />
            </div>
          </div>
        </motion.div>

        {/* Top Right Image */}
        <div
          className="
            absolute z-20
            right-[16px] top-[16px]
            sm:right-[24px] sm:top-[24px]
            lg:right-[40px] lg:top-[40px]
          "
        >
          <Image
            src="/images/figma/Download2.png"
            alt="badge"
            width={220}
            height={70}
            className="
              object-contain
              w-[100px]
              sm:w-[140px]
              md:w-[180px]
              lg:w-[220px]
              h-auto
            "
          />
        </div>
      </div>
    </section>
  );
}