"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";




export default function MyDay() {

  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % 3);
    }, 2500);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="flex justify-center overflow-hidden px-4 pt-[48px] lg:px-[37px]">
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
        <div className="flex h-full items-center justify-center gap-2 lg:gap-3 xl:gap-8">

          {/* Left Content */}
          <div
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
        </div>

        {/* Right Cards */}
        <div className="relative">
          <div className="relative flex items-center gap-[57px] md:gap-3 xl:gap-5">

            {/* HEART */}
                        <Image
                          src="/images/figma/V2.png"
                          alt="top-heart"
                          width={28}
                          height={28}
                          className="
                            absolute
                            left-[400px]
                            top-[-20px]
                            z-20
                            object-contain
            
                            max-lg:right-[50px]
                            max-lg:left-auto
                            max-lg:top-[-50px]
                            max-lg:w-[18px]
                          "
                          
                        />

            {/* CARD 1 */}
            <div
              className={`
        relative min-w-fit shrink-0 overflow-hidden rounded-[20px]
        ${currentCard === 0 ? "block" : "hidden"}
        md:block
      `}
            >
              <Image
                src="/images/figma/MyD1.png"
                alt="myday1"
                width={243}
                height={350}
                className="
                    h-[30vw]
                  w-[20vw]

                  min-h-[176px]
                  min-w-[117px]

                  max-h-[230px]
                  max-w-[170px]

                  md:h-[350px]
                  md:w-[243px]

                  rounded-[20px]
                  object-cover
                  "
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
        relative min-w-fit shrink-0 overflow-hidden rounded-[20px]
        ${currentCard === 1 ? "block" : "hidden"}
        md:block
      `}
            >
              <Image
                src="/images/figma/MyD2.png"
                alt="myday2"
                width={243}
                height={350}
                className="
                   h-[30vw]
                  w-[20vw]

                  min-h-[176px]
                  min-w-[117px]

                  max-h-[230px]
                  max-w-[170px]

                  md:h-[350px]
                  md:w-[243px]

                  rounded-[20px]
                  object-cover
                  "
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
        relative min-w-fit shrink-0 overflow-hidden rounded-[20px]
        ${currentCard === 2 ? "block" : "hidden"}
        md:block
      `}
            >
              <Image
                src="/images/figma/MyD3.png"
                alt="myday3"
                width={243}
                height={350}
                className="
                    h-[30vw]
                  w-[20vw]

                  min-h-[176px]
                  min-w-[117px]

                  max-h-[230px]
                  max-w-[170px]

                  md:h-[350px]
                  md:w-[243px]

                  rounded-[20px]
                  object-cover
                  "
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
          </div>
        </div>
      </div>
    </div>
    </section >
  );
}