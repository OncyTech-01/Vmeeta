"use client";
import { useState, useEffect } from "react";
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
          min-h-auto

          md:max-w-[1367px]
          md:min-h-[509px]

          rounded-[30px]
          bg-[#FFF7EF]
        "
      >
        <div className="flex flex-row items-center justify-between gap-4 px-4 py-8 md:gap-8 md:px-10 lg:px-16 xl:px-24 h-full md:min-h-[509px]">

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
              w-1/2
              max-w-[380px]
              shrink-0
              text-left
              md:w-full
              md:max-w-[340px]
              lg:max-w-[400px]
              xl:max-w-[450px]
            "
          >
            {/* Badge */}
            <div className="mb-3 md:mb-5 inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-[#FCE2B6] px-2 py-1 md:px-4 md:py-2 text-[8px] sm:text-[10px] md:text-[13px] font-medium text-[#D97706]">
              <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-[#F59E0B]"></span>
              My Day - Stories
            </div>

            {/* Heading */}
            <h2 className="
              text-[18px]
              leading-[22px]
              sm:text-[24px]
              sm:leading-[28px]
              font-bold
              text-[#111111]

              md:text-[36px]
              md:leading-[42px]

              lg:text-[48px]
              lg:leading-[56px]

              xl:text-[56px]
              xl:leading-[64px]
            ">
              Share moments
              <br />
              that matter
            </h2>

            {/* Description */}
            <p className="mt-2 md:mt-4 text-[10px] leading-[14px] sm:text-[12px] sm:leading-[18px] text-[#666666] md:text-[16px] md:leading-[26px] lg:text-[18px] lg:leading-[28px]">
              From everyday fun to once-in-a-lifetime adventure - share it all in real time with the people who get you.
            </p>

            {/* Button */}
            <button
              className="
                mt-4
                md:mt-6
                flex
                items-center
                gap-1
                rounded-[8px] md:rounded-[12px]
                bg-[#F8F0FF]
                px-3 py-1.5
                md:px-5 md:py-2.5
                text-[10px] sm:text-[12px] md:text-[13px]
                font-semibold
                text-[#8B5CF6]
                transition-colors
                hover:bg-[#F3E8FF]
                lg:mt-8
                lg:px-6
                lg:py-3
                lg:text-[15px]
              "
            >
              Start Sharing
              <MdKeyboardArrowRight className="text-[14px] md:text-[18px]" />
            </button>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            className="relative w-1/2 flex justify-end md:w-auto mt-0"
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
            <div className="relative flex flex-col items-center gap-4 md:flex-row md:items-center xl:gap-6">

              {/* Red Hearts */}
              <div className="absolute left-[-20px] top-[-30px] z-30">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>

              {/* CARD 1 */}
              <div className={`relative shrink-0 overflow-hidden rounded-[12px] md:rounded-[20px] shadow-lg md:block md:w-[200px] md:h-[320px] w-[140px] h-[220px] sm:w-[160px] sm:h-[250px] lg:w-[240px] lg:h-[380px] ${currentCard === 0 ? "block" : "hidden"}`}>
                <Image src="/images/figma/MyD1.png" alt="myday1" fill className="object-cover" />
                <div className="absolute left-3 right-3 top-3 z-20 flex gap-1">
                  <div className="h-[3px] flex-1 rounded-full bg-white" />
                  <div className="h-[3px] flex-1 rounded-full bg-white/50" />
                  <div className="h-[3px] flex-1 rounded-full bg-white/50" />
                </div>
                <div className="absolute left-3 top-5 z-20 flex items-center gap-2">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200" alt="profile" className="h-6 w-6 md:h-8 md:w-8 rounded-full border-2 border-white object-cover" />
                  <div>
                    <h3 className="text-[10px] md:text-[12px] font-semibold text-white leading-tight">Sofia</h3>
                    <p className="text-[8px] md:text-[9px] text-white/90">2h ago</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 z-20">
                  <h3 className="text-[12px] md:text-[14px] font-medium text-white">Nature Therapy</h3>
                  <p className="mt-0.5 md:mt-1 text-[8px] md:text-[9px] text-white/90 flex items-center gap-1">
                    <span className="text-[9px] md:text-[10px]">📍</span> Washington D.C, U.S.A
                  </p>
                </div>
              </div>

              {/* CARD 2 (Center - Active) */}
              <div className={`relative shrink-0 overflow-hidden rounded-[12px] md:rounded-[20px] w-[140px] h-[220px] sm:w-[160px] sm:h-[250px] md:w-[240px] md:h-[380px] shadow-2xl z-10 md:block ${currentCard === 1 ? "block" : "hidden"}`}>
                <Image src="/images/figma/MyD2.png" alt="myday2" fill className="object-cover" />
                <div className="absolute left-4 right-4 top-5 z-20 flex gap-1">
                  <div className="h-[3px] flex-1 rounded-full bg-white/50" />
                  <div className="h-[3px] flex-1 rounded-full bg-white" />
                  <div className="h-[3px] flex-1 rounded-full bg-white/50" />
                </div>
                <div className="absolute left-4 top-8 z-20 flex items-center gap-2">
                  <img src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=387&auto=format&fit=crop" alt="profile" className="h-6 w-6 md:h-10 md:w-10 rounded-full border-2 border-white object-cover" />
                  <div>
                    <h3 className="text-[10px] md:text-[14px] font-semibold text-white leading-tight">Jessica</h3>
                    <p className="text-[8px] md:text-[10px] text-white/90">1d ago</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <div className="absolute bottom-4 md:bottom-6 left-3 md:left-5 right-3 md:right-5 z-20">
                  <h3 className="text-[12px] md:text-[16px] font-medium text-white flex items-center gap-1">Festival Vibe <span className="text-purple-400">💜</span></h3>
                  <p className="mt-0.5 md:mt-1 text-[8px] md:text-[10px] text-white/90 flex items-center gap-1">
                    <span className="text-[9px] md:text-[11px]">📍</span> Seoul, South Korea
                  </p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className={`relative shrink-0 overflow-hidden rounded-[12px] md:rounded-[20px] shadow-lg md:block md:w-[200px] md:h-[320px] w-[140px] h-[220px] sm:w-[160px] sm:h-[250px] lg:w-[240px] lg:h-[380px] ${currentCard === 2 ? "block" : "hidden"}`}>
                <Image src="/images/figma/MyD3.png" alt="myday3" fill className="object-cover" />
                <div className="absolute left-3 right-3 top-3 z-20 flex gap-1">
                  <div className="h-[3px] flex-1 rounded-full bg-white/50" />
                  <div className="h-[3px] flex-1 rounded-full bg-white/50" />
                  <div className="h-[3px] flex-1 rounded-full bg-white" />
                </div>
                <div className="absolute left-3 top-5 z-20 flex items-center gap-2">
                  <img src="https://plus.unsplash.com/premium_photo-1727976411254-a5bcfd199750?q=80&w=387&auto=format&fit=crop" alt="profile" className="h-6 w-6 md:h-8 md:w-8 rounded-full border-2 border-white object-cover" />
                  <div>
                    <h3 className="text-[10px] md:text-[12px] font-semibold text-white leading-tight">Yun kin</h3>
                    <p className="text-[8px] md:text-[9px] text-white/90">3h ago</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 z-20">
                  <h3 className="text-[12px] md:text-[14px] font-medium text-white">Sunday Picnic</h3>
                  <p className="mt-0.5 md:mt-1 text-[8px] md:text-[9px] text-white/90 flex items-center gap-1">
                    <span className="text-[9px] md:text-[10px]">📍</span> San Francisco, U.S.A
                  </p>
                </div>
              </div>

              {/* WIDGETS */}
              {/* Left pill under left card */}
              <div className="absolute left-[-10px] md:left-[-15px] bottom-[-15px] md:bottom-[-20px] z-20 flex md:flex items-center gap-1 rounded-full bg-[#FFD6E0] px-2 py-1 md:px-4 md:py-2 text-[8px] md:text-[12px] font-semibold text-[#A21249] shadow-md">
                <span>Super cool 🖤</span>
              </div>

              {/* Center bubble with overlapping avatar */}
              <div className="absolute left-1/2 bottom-[-15px] md:bottom-[-24px] z-30 hidden md:flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#F1E6FF] p-1 pr-4 shadow-lg border border-[#E9D5FF]">
                <img src="https://i.pravatar.cc/40?img=47" alt="avatar" className="h-7 w-7 rounded-full object-cover" />
                <span className="text-[11px] font-semibold text-[#6C3FC2]">Greetings from korea.</span>
              </div>

              {/* Right top badge with avatar */}
              <div className="absolute right-[-10px] md:right-[-20px] top-[-15px] md:top-[-25px] z-30 hidden md:flex items-center gap-2 rounded-full bg-[#FFF7D4] p-1 pr-4 shadow-md border border-[#FDE047]">
                <img src="https://i.pravatar.cc/40?img=32" alt="avatar" className="h-6 w-6 rounded-full object-cover" />
                <span className="text-[10px] font-semibold text-[#A16207]">Beautiful Family bless you</span>
              </div>
              
              {/* Pink Sparkle */}
              <div className="absolute left-[80px] top-[10px] z-30">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFB7D5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"/>
                </svg>
              </div>
              <div className="absolute left-[-10px] bottom-[40px] z-30">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFB7D5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"/>
                </svg>
              </div>
              <div className="absolute right-[20px] bottom-[-10px] z-30">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#C4B5FD" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="#C4B5FD" strokeWidth="4"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
