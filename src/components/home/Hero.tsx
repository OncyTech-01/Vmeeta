import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


export default function Hero() {
  return (
    <section className="flex justify-center pt-[50px] px-[10px]">
      <div className="relative h-[919px] w-[1370px] overflow-hidden rounded-[40px] border border-[#E5E5E5]">

        {/* Background Image */}
        <Image
          src="/images/figma/Hero.png"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Content */}
        <div className="absolute left-[45px] top-[40px] z-10 max-w-[420px]">

          {/* Top Badges */}
          <div className="mb-6 flex items-center gap-2">

            <div className="flex h-[46px] w-[139px] items-center justify-center gap-[7px] rounded-[12px] bg-[#FF2B2B] opacity-100">
              <span className="text-[32px] font-medium text-white">
                Live
              </span>
            </div>

            <div className="flex h-[46px] w-[88px] items-center gap-[4px] rounded-[12px] bg-[#5B5B5B]/70 pt-[2px] pr-[19px] pb-[1px] pl-[13px] backdrop-blur-md">
              <FaRegEye className="text-white text-[14px]" />

              <span className="text-[14px] text-white">
                1.5k
              </span>
            </div>

          </div>

          {/* Heading */}
          <h1 className="text-[72px] font-semibold leading-[78px] text-black">

            Feel closer
            <br />

            wherever
            <br />

            <span className="text-[#007DCB] text-[80px]">
              you are.
            </span>

          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[320px] text-[20px] leading-[30px] text-[#2B2B2B] font-normal">

            Because the best connections
            aren’t just messages… they’re
            moments, emotions, and people
            who truly understand you.

          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">

            <button
              className="
              flex
              h-[44px]
              items-center
              gap-2
              rounded-full
              bg-[linear-gradient(180deg,#669FFF_0%,#0049BF_100%)]
              px-4
              text-[13px]
              font-medium
              text-white
              shadow-[0px_0px_25px_rgba(45,124,255,0.35)]
            "
            >
              Download App

              <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-white">
                <FaArrowRight className="text-[10px] text-[#2D7CFF]" />
              </span>
            </button>

            <button
              className="
                flex
                h-[50px]
                w-[175px]
                items-center
                justify-between
                rounded-full
                bg-white
                px-[36px]
                pt-[13px]
                pb-[13px]
                text-[14px]
                font-semibold
                text-black
                shadow-md
              "
            >
              <span>Get Started</span>

              <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#F4F7FF]">
                <FaArrowRight className="text-[12px] text-[#2D79F5]" />
              </span>
            </button>

          </div>

        </div>

       

      </div>

    </section>
  );
}