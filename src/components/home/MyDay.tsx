"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";



export default function MyDay() {

  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % 3);
    }, 2500);

    return () => clearInterval(interval);
  }, []);


  return (
    <motion.section
      className="flex justify-center overflow-hidden px-4 pt-[48px] lg:px-[37px]"
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      <div
        className="
          w-full
    max-w-[591px]
    h-[227px]

    md:max-w-[1367px]
    md:min-h-[509px]

    rounded-[30px]
    bg-gradient-to-r
    from-[#FEF7ED]
    to-[#FEE7CA]
        "
      >
        <div className="flex h-full items-center justify-center gap-6 md:gap-10 lg:gap-14 xl:gap-20">

          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
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
              delay: 0.25,
              duration: 0.8,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="
    w-[150px]
    shrink-0
    text-left

    sm:w-[180px]
    md:w-[240px]
    lg:w-[300px]
    xl:w-[380px]
  "
          >

            {/* Badge */}
            <div className="mb-5 inline-flex rounded-full bg-[#F9D99B] px-2 py-1 md:px-4 md:py-2 text-[8px] md:text-[13px] font-medium text-[#8A5B00]">
              ✨ My Day • Status
            </div>

            {/* Heading */}
            <h2 className="
              text-[18px]
              leading-[22px]
              font-bold
              text-[#111111]

              sm:text-[18px]
              sm:leading-[20px]

              md:text-[28px]
              md:leading-[34px]

              lg:text-[42px]
              lg:leading-[48px]

              xl:text-[52px]
              xl:leading-[60px]
            ">
              Share moments
              <br />
              that matter
            </h2>

            {/* Description */}
            <p className=" mt-3
          text-[10px]
          leading-[14px]
          text-[#666666]

          sm:text-[10px]
          sm:leading-[13px]

          md:mt-4
          md:text-[14px]
          md:leading-[22px]

          lg:mt-5
          lg:text-[16px]
          lg:leading-[28px]">
              From everyday fun to once-in-a-lifetime
              adventures — share it all in real time
              with the people who get you.
            </p>

            {/* Button */}
            <button
              className="
                mt-4
                flex
                items-center
                gap-1
                rounded-[14px]
                bg-[#FFF5FF]
                px-3
                py-2
                text-[10px]
                font-medium
                text-[#6C3FC2]

                sm:px-4
                sm:text-[9px]

                md:mt-5
                md:rounded-[18px]
                md:px-5
                md:py-2.5
                md:text-[12px]

                lg:mt-8
                lg:rounded-[20px]
                lg:px-6
                lg:py-3
                lg:text-[14px]
                              "
            >
              Start Sharing
              <MdKeyboardArrowRight className="text-[14px]" />
            </button>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            className="relative"
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
              delay: 0.35,
              duration: 0.9,
              ease: [0.25, 1, 0.5, 1],
            }}
          >
            <div className="relative flex items-center gap-[57px] md:gap-3 xl:gap-5">

              {/* HEART */}
              <Image
                src="/images/figma/V2.png"
                alt="top-heart"
                width={28}
                height={28}
                className="
                            absolute
                            left-1/2
                            top-[-20px]
                            z-20
                            -translate-x-1/2
                            object-contain
                            w-[28px]
                            h-[28px]

                            max-lg:right-[50px]
                            max-lg:left-auto
                            max-lg:top-[-50px]
                            max-lg:w-[18px]
                          "

              />

              {/* CARD 1 */}
              <div
                className={`
        relative shrink-0 overflow-hidden rounded-[20px]
        w-[243px] h-[364px]
        ${currentCard === 0 ? "block" : "hidden"}
        md:block
      `}
              >
                <Image
                  src="/images/figma/MyD1.png"
                  alt="myday1"
                  width={243}
                  height={364}
                  className="rounded-[20px] object-cover w-full h-full"
                />

                {/* Story Progress */}
                <div className="absolute left-3 right-3 top-3 z-20 flex gap-1">
                  <div className="h-[3px] flex-1 rounded-full bg-[#2F80ED]" />
                  <div className="h-[3px] flex-1 rounded-full bg-white/50" />
                  <div className="h-[3px] flex-1 rounded-full bg-white/50" />
                </div>

                {/* Profile */}
                <div className="absolute left-4 top-5 z-20 flex items-center gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
                    alt="profile"
                    className="h-[42px] w-[42px] rounded-full border-2 border-white object-cover"
                  />

                  <div>
                    <h3 className="text-[13px] font-semibold text-white">
                      Sofia
                    </h3>

                    <p className="text-[9px] text-white/90">
                      2h ago
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 z-10 h-[58px] rounded-b-[20px] bg-black/25" />

                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-[13px] font-medium text-white">
                    Nature Therapy
                  </h3>

                  <p className="mt-1 text-[9px] text-white/90">
                    📍 Washington D.C, U.S.A
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div
                className={`
        relative shrink-0 overflow-hidden rounded-[20px]
        w-[243px] h-[364px]
        ${currentCard === 1 ? "block" : "hidden"}
        md:block
      `}
              >
                <Image
                  src="/images/figma/MyD2.png"
                  alt="myday2"
                  width={243}
                  height={364}
                  className="rounded-[20px] object-cover w-full h-full"
                />

                <div className="absolute left-4 right-4 top-5 z-20 flex gap-1">
                  <div className="h-[2px] flex-1 rounded-full bg-white" />
                  <div className="h-[2px] flex-1 rounded-full bg-[#0B60EA]" />
                  <div className="h-[2px] flex-1 rounded-full bg-white" />
                </div>

                <div className="absolute left-4 top-6 z-20 flex items-center gap-2">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile"
                    className="h-[40px] w-[40px] rounded-full border-2 border-white object-cover"
                  />

                  <div>
                    <h3 className="text-[10px] font-semibold text-white">
                      Jessica
                    </h3>

                    <p className="text-[8px] text-white/90">
                      1d ago
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-5 left-3 right-3 z-10 h-[58px] rounded-b-[20px] bg-black/25" />

                <div className="absolute bottom-7 left-6 z-20">
                  <h3 className="text-[10px] font-medium text-white">
                    Festival Vibe
                  </h3>

                  <p className="mt-1 text-[7px] text-white/90">
                    📍 Seoul, South Korea
                  </p>
                </div>
              </div>

              {/* CARD 3 */}
              <div
                className={`
        relative shrink-0 overflow-hidden rounded-[20px]
        w-[243px] h-[364px]
        ${currentCard === 2 ? "block" : "hidden"}
        md:block
      `}
              >
                <Image
                  src="/images/figma/MyD3.png"
                  alt="myday3"
                  width={243}
                  height={364}
                  className="rounded-[20px] object-cover w-full h-full"
                />

                <div className="absolute left-3 right-3 top-3 z-20 flex gap-1">
                  <div className="h-[3px] flex-1 rounded-full bg-white" />
                  <div className="h-[3px] flex-1 rounded-full bg-white" />
                  <div className="h-[3px] flex-1 rounded-full bg-[#2F80ED]" />
                </div>

                <div className="absolute left-4 top-5 z-20 flex items-center gap-2">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1727976411254-a5bcfd199750?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile"
                    className="h-[42px] w-[42px] rounded-full border-2 border-white object-cover"
                  />

                  <div>
                    <h3 className="text-[11px] font-semibold text-Grey">
                      Yun kin
                    </h3>

                    <p className="text-[8px] text-Grey/90">
                      3h ago
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-10 h-[68px] bg-black/30 backdrop-blur-[2px]" />

                <div className="absolute bottom-3 left-4 z-20">
                  <h3 className="text-[10px] font-semibold text-white">
                    Sunday Picnic
                  </h3>

                  <p className="mt-1 text-[6px] text-white/90">
                    📍 San Francisco, U.S.A
                  </p>
                </div>

              </div>

              {/* WIDGETS */}
              {/* Left pill under left card */}
              <div className="absolute left-[6px] top-[calc(100%+12px)] z-20 flex items-center gap-2 rounded-full bg-[#FFE4ED] px-3 py-2 text-[11px] font-semibold text-[#A21249] shadow-lg">
                <img src="https://i.pravatar.cc/40?img=32" alt="avatar" className="h-6 w-6 rounded-full ring-2 ring-white object-cover" />
                <span>Super cool</span>
              </div>

              {/* Center bubble with overlapping avatar */}
              <div className="absolute left-1/2 top-[calc(98%)] z-20 -translate-x-1/2">
                <img src="https://i.pravatar.cc/40?img=47" alt="avatar" className="mx-auto mb-2 h-8 w-8 rounded-full ring-2 ring-white object-cover" />
                <div className="mx-auto max-w-[260px] rounded-full bg-[#F1E6FF] px-4 py-2 text-[11px] font-medium text-[#4B2F77] shadow-lg">
                  Greetings from korea.
                </div>
              </div>

              {/* Right top badge with small progress bar */}
              <div className="absolute right-0 top-[-64px] z-30 flex flex-col items-end gap-2">
                <div className="flex items-center gap-2 rounded-full bg-[#FFF7D4] px-3 py-2 text-[11px] font-medium text-[#805A00] shadow-lg">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white">👪</span>
                  <span>Beautiful Family bless you</span>
                </div>
                
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}