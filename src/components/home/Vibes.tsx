import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Vibe() {
  return (
    <section className="flex justify-center px-[10px] pt-[48px]">

      <div
        className="
          relative
          h-[753px]
          w-[1410px]
          overflow-hidden
          rounded-[30px]
          bg-[#0B60EA]/[0.07]
          px-[40px]
          py-[30px]
        "
      >


        <div className="flex h-full items-center gap-[85px]">

          {/* Left Content */}
          <div className="max-w-[280px]">

            {/* Badge */}
            <div className="mb-5 inline-flex rounded-full bg-[#DCE8FF] px-4 py-2">
              <span className="text-[13px] font-medium text-[#3B82F6]">
                Vibes
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[45px] font-bold leading-[50px] text-black">
              Find people
              <br />
              who feel like
              <br />
              <span className="text-[#3B82F6]">
                home.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 text-[15px] leading-[26px] text-[#5F6368]">
              From creators and travelers
              to gamers and storytellers,
              discover communities where
              conversations feel real.
            </p>

            {/* Button */}
            <button
              className="
              mt-8
              flex
              items-center
              gap-2
              rounded-full
              bg-[#2D79F5]
              px-[18px]
              py-[10px]
              text-[14px]
              font-semibold
              text-white
              shadow-[0px_8px_20px_rgba(45,121,245,0.35)]
  "
            >
              Start Exploring

              <div
                className="
                  flex
                  h-[24px]
                  w-[24px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                "
              >
                <ArrowRight
                  size={14}
                  className="text-[#2D79F5]"
                />
              </div>
            </button>

          </div>

          {/* Phones */}
          <div className="relative flex items-center gap-4 -ml-[10px]">

            {/* ---------- TOP SMALL IMAGES ---------- */}

            {/* Top Profile */}
            <Image
              src="/images/figma/V1.png"
              alt="top-profile"
              width={42}
              height={42}
              className="absolute left-[30px] top-[0px] z-20 object-contain"
            />

            {/* Top Badge */}
            <Image
              src="/images/figma/VT1.png"
              alt="top-badge"
              width={95}
              height={28}
              className="absolute left-[80px] top-[8px] z-20 object-contain"
            />

            {/* Top Heart */}
            <Image
              src="/images/figma/V2.png"
              alt="top-heart"
              width={28}
              height={28}
              className="absolute left-[650px] top-[-1px] z-20 object-contain"
            />

            {/* Top Badge */}
            <Image
              src="/images/figma/V3.png"
              alt="top-badge"
              width={95}
              height={28}
              className="absolute right-[40px] top-[25px] z-20 object-contain"
            />

            <Image
              src="/images/figma/VT6.png"
              alt="top-profile"
              width={42}
              height={42}
              className="absolute right-[-5px] top-[15px] z-20 object-contain"
            />


            {/* Phone 1 */}
            <Image
              src="/images/figma/Vibe0.png"
              alt="vibe1"
              width={297}
              height={608}
              className="rounded-[28px] object-cover"
            />

            {/* Phone 2 */}
            <Image
              src="/images/figma/Vibes1.png"
              alt="vibe2"
              width={310}
              height= {650}
              className="rounded-[28px] pb-[60px] object-cover"
            />

            {/* Phone 3 */}
            <Image
              src="/images/figma/Vibes3.png"
              alt="vibe3"
              width={297}
              height={608}
              className="rounded-[28px] pt-[30px] object-cover"
            />

            {/* ---------- BOTTOM SMALL IMAGES ---------- */}

            {/* Bottom Profile */}
            <Image
              src="/images/figma/V4.png"
              alt="bottom-profile"
              width={48}
              height={48}
              className="absolute left-[260px] bottom-[-6px] z-20 object-contain"
            />

            {/* Bottom Badge */}
            <Image
              src="/images/figma/VT4.png"
              alt="bottom-badge"
              width={120}
              height={30}
              className="absolute left-[320px] bottom-[0px] z-20 object-contain"
            />

          </div>

        </div>
      </div>
    </section>
  );
}