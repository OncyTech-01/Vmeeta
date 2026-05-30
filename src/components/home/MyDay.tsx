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
          max-w-[1367px]
          min-h-[509px]
          rounded-[30px]
          bg-gradient-to-r
          from-[#FEF7ED]
          to-[#FEE7CA]
          px-4
          py-8
          sm:px-6
          md:px-8
          lg:px-[50px]
          lg:py-[45px]
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

              sm:text-[20px]
              sm:leading-[24px]

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

          sm:text-[11px]
          sm:leading-[16px]

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
                sm:text-[11px]

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
            <MdKeyboardArrowRight className="text-[18px]" />
          </button>
        </div>

        {/* Right Cards */}
        <div className="relative">
          <div className="relative flex items-center gap-[57px] md:gap-3 xl:gap-5">

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
                    h-[230px]
                    w-[170px]
                    rounded-[20px]
                    object-cover
                    md:h-[350px]
                    md:w-[243px]
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
                  <h3 className="text-[18px] font-semibold text-white">
                    Sofia
                  </h3>

                  <p className="text-[12px] text-white/90">
                    2h ago
                  </p>
                </div>
              </div>

              <div className="absolute bottom-2.5 left-3 right-3 z-10 h-[58px] rounded-b-[20px] bg-black/25" />

              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-[18px] font-medium text-white">
                  Nature Therapy
                </h3>

                <p className="mt-1 text-[10px] text-white/90">
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
                    h-[230px]
                    w-[170px]
                    rounded-[20px]
                    object-cover
                    md:h-[350px]
                    md:w-[243px]
                  "
              />

              <div className="absolute left-4 right-4 top-5 z-20 flex gap-1">
                <div className="h-[2px] flex-1 rounded-full bg-white" />
                <div className="h-[2px] flex-1 rounded-full bg-[#0B60EA]" />
                <div className="h-[2px] flex-1 rounded-full bg-white" />
              </div>

              <div className="absolute left-4 top-6 z-20 flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200"
                  alt="profile"
                  className="h-[40px] w-[40px] rounded-full border-2 border-white object-cover"
                />

                <div>
                  <h3 className="text-[14px] font-semibold text-white">
                    Jessica
                  </h3>

                  <p className="text-[10px] text-white/90">
                    1d ago
                  </p>
                </div>
              </div>

              <div className="absolute bottom-5 left-3 right-3 z-10 h-[58px] rounded-b-[20px] bg-black/25" />

              <div className="absolute bottom-7 left-6 z-20">
                <h3 className="text-[12px] font-medium text-white">
                  Festival Vibe
                </h3>

                <p className="mt-1 text-[10px] text-white/90">
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
                    h-[230px]
                    w-[170px]
                    rounded-[20px]
                    object-cover
                    md:h-[350px]
                    md:w-[243px]
                  "
              />

              <div className="absolute left-3 right-3 top-3 z-20 flex gap-1">
                <div className="h-[3px] flex-1 rounded-full bg-white" />
                <div className="h-[3px] flex-1 rounded-full bg-white" />
                <div className="h-[3px] flex-1 rounded-full bg-[#2F80ED]" />
              </div>

              <div className="absolute left-4 top-5 z-20 flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200"
                  alt="profile"
                  className="h-[42px] w-[42px] rounded-full border-2 border-white object-cover"
                />

                <div>
                  <h3 className="text-[18px] font-semibold text-white">
                    Yun kin
                  </h3>

                  <p className="text-[12px] text-white/90">
                    3h ago
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-10 h-[68px] bg-black/30 backdrop-blur-[2px]" />

              <div className="absolute bottom-3 left-4 z-20">
                <h3 className="text-[16px] font-semibold text-white">
                  Sunday Picnic
                </h3>

                <p className="mt-1 text-[10px] text-white/90">
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