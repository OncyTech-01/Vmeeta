'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Live() {
  return (
    <section className="flex justify-center pt-[66px] px-4">
      <div
        className="
          relative
          w-full
          max-w-[1384px]

          min-h-[380px]
          h-auto
          md:min-h-[650px]
          lg:h-[960px]

          bg-[#FBF5EE]

          px-[20px]
          py-[40px]

          md:px-[40px]
          md:py-[60px]

          lg:px-[70px]
          lg:py-[80px]
        "
      >
        <div
          className="
            flex flex-row
            items-center
            justify-between
            gap-3

            md:gap-6
            lg:h-full
            lg:gap-0
          "
        >
          {/* Left Content */}
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="w-[95px]
  sm:w-[140px]
  md:w-[200px]
  lg:max-w-[260px] text-center lg:text-left"
          >
            {/* Badge */}
            <div className="mb-5 flex items-center justify-center gap-2 lg:justify-start">
              <div className="h-[8px] w-[8px] rounded-full bg-[#FF5B5B]" />

              <span className="text-[12px] font-medium uppercase tracking-[1px] text-[#FF5B5B]">
                Live Moments
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                text-[20px]
                leading-[24px]

                sm:text-[26px]
                sm:leading-[30px]

                md:text-[36px]
                md:leading-[42px]

                lg:text-[52px]
                lg:leading-[60px]

                font-bold
                text-[#111111]
              "
            >
              Share what’s
              <br />
              happening
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                text-[11px]
                leading-[16px]

                sm:text-[13px]
                sm:leading-[20px]

                md:text-[15px]
                md:leading-[24px]

                lg:text-[16px]
                lg:leading-[28px]

                text-[#666666]
              "
            >
              Go live and let people be
              part of your moment.
            </p>

            <div className="mt-6 h-[2px] w-[50px] bg-[#FFB5B5] mx-auto lg:mx-0" />
          </motion.div>

          {/* Center Phone */}
          <motion.div
            className="relative shrink-0"
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}

            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
              ease: [0.25, 1, 0.5, 1],
            }}
          >
            <Image
              src="/images/figma/Live2.png"
              alt="live"
              width={360}
              height={720}
              className="
                w-[120px]
                sm:w-[170px]
                md:w-[240px]
                lg:w-[360px]
              "
              style={{ height: 'auto' }}
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="w-[95px]
  sm:w-[140px]
  md:w-[200px]
  lg:max-w-[260px] text-center lg:text-left"
          >
            {/* Badge */}
            <div className="mb-5 flex items-center justify-center gap-2 lg:justify-start">
              <div className="h-[8px] w-[8px] rounded-full bg-[#FF5B5B]" />

              <span className="text-[12px] font-medium uppercase tracking-[1px] text-[#FF5B5B]">
                Real Time
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                text-[20px]
                leading-[24px]

                sm:text-[26px]
                sm:leading-[30px]

                md:text-[36px]
                md:leading-[42px]

                lg:text-[52px]
                lg:leading-[60px]
              "
            >
              Connect
              <br />
              instantly
            </h2>

            {/* Description */}
            <p
              className="
                text-[11px]
                  leading-[16px]

                  sm:text-[13px]
                  sm:leading-[20px]

                  md:text-[15px]
                  md:leading-[24px]

                  lg:text-[16px]
                  lg:leading-[28px]

                text-[#666666]
              "
            >
              React, comment, and feel
              the moment as it happens.
            </p>

            <div className="mt-6 h-[2px] w-[50px] bg-[#FFB5B5] mx-auto lg:mx-0" />
          </motion.div>
        </div>

        {/* Floating Hearts */}
        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          whileInView={{
            opacity: 0.85,
            x: 0,
          }}

          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="
    absolute
    bottom-[10px]
    md:bottom-[80px]
    lg:bottom-[140px]
    right-[20px]

    md:right-[50px]
    lg:right-[90px]

    scale-[0.7]
    md:scale-[0.85]
    lg:scale-100

    h-[120px]
    w-[120px]
    opacity-85
  "
        >
          <Image
            src="/images/figma/Heart.png"
            alt="heart"
            width={24.41}
            height={24.8}
            className="
                absolute
                left-[10px]
                top-[10px]
                w-[14px]
                rotate-[17deg]

                lg:left-[34px]
                lg:top-[0px]
                lg:w-auto
                "
            style={{ height: 'auto' }}
          />

          <Image
            src="/images/figma/Heart.png"
            alt="heart"
            width={47.23}
            height={47.92}
            className="
              absolute
              left-[35px]
              top-[35px]
              w-[24px]
              rotate-[-22deg]

              lg:left-[61px]
              lg:top-[49px]
              lg:w-auto
              "
            style={{ height: 'auto' }}
          />

          <Image
            src="/images/figma/Heart.png"
            alt="heart"
            width={47.23}
            height={47.92}
            className="
              absolute
              left-[15px]
              top-[70px]
              w-[24px]
              rotate-[9deg]

              lg:left-[30px]
              lg:top-[114.32px]
              lg:w-auto
              "
            style={{ height: 'auto' }}
          />

          <Image
            src="/images/figma/Heart.png"
            alt="heart"
            width={65.27}
            height={62.6}
            className="
            absolute
            left-[25px]
            top-[105px]
            w-[32px]
            rotate-[14deg]

            lg:left-[43px]
            lg:top-[181px]
            lg:w-auto
            "
            style={{ height: 'auto' }}
          />
        </motion.div>
      </div>
    </section>
  );
}