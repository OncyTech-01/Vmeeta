import Image from "next/image";
import { FaRegEye, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex justify-center px-2 pt-4 sm:px-4 md:px-5 lg:px-[10px] lg:pt-[50px]">
      <div
        className="
          relative
          w-full
          max-w-[1370px]
          h-[650px]
          sm:h-[720px]
          md:h-[800px]
          lg:min-h-[919px]
          overflow-hidden
          rounded-[20px]
          md:rounded-[30px]
          lg:rounded-[40px]
          border
          border-[#E5E5E5]
        "
      >
        {/* Background Image */}
        <Image
          src="/images/figma/Hero.png"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0" />

      

        {/* Content */}
        <div
          className="
            absolute
            left-4
            top-4
            z-10
            max-w-[220px]
            sm:left-5
            sm:top-5
            sm:max-w-[280px]
            md:left-8
            md:top-8
            md:max-w-[360px]
            lg:left-[45px]
            lg:top-[40px]
            lg:max-w-[420px]
          "
        >
          {/* Top Badges */}
          <div className="mb-4 flex items-center gap-2 md:mb-6">
            {/* Live Badge */}
            <div
              className="
                flex
                h-[30px]
                w-[68px]
                items-center
                justify-center
                rounded-[8px]
                bg-[#FF2B2B]
                sm:h-[36px]
                sm:w-[85px]
                md:h-[40px]
                md:w-[100px]
                lg:h-[46px]
                lg:w-[139px]
                lg:rounded-[12px]
              "
            >
              <span className="text-[14px] font-medium text-white sm:text-[16px] md:text-[20px] lg:text-[32px]">
                Live
              </span>
            </div>

            {/* Views */}
            <div
              className="
                flex
                h-[30px]
                w-[58px]
                items-center
                justify-center
                gap-1
                rounded-[8px]
                bg-[#5B5B5B]/70
                px-2
                backdrop-blur-md
                sm:h-[36px]
                sm:w-[70px]
                md:h-[40px]
                md:w-[80px]
                lg:h-[46px]
                lg:w-[88px]
                lg:rounded-[12px]
              "
            >
              <FaRegEye className="text-[10px] text-white lg:text-[14px]" />
              <span className="text-[10px] text-white sm:text-[12px] lg:text-[14px]">
                1.2k
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1
            className="
              font-semibold
              text-black
              text-[26px]
              leading-[28px]
              sm:text-[34px]
              sm:leading-[36px]
              md:text-[50px]
              md:leading-[52px]
              lg:text-[72px]
              lg:leading-[78px]
            "
          >
            Feel closer
            <br />
            wherever
            <br />
            <span
              className="
                text-[#007DCB]
                text-[38px]
                sm:text-[44px]
                md:text-[58px]
                lg:text-[80px]
              "
            >
              you are.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-3
              max-w-[220px]
              text-[12px]
              leading-[17px]
              text-[#2B2B2B]
              sm:max-w-[260px]
              sm:text-[14px]
              sm:leading-[20px]
              md:mt-5
              md:max-w-[320px]
              md:text-[16px]
              md:leading-[24px]
              lg:mt-6
              lg:max-w-[320px]
              lg:text-[20px]
              lg:leading-[30px]
            "
          >
            Because the best connections aren’t just messages…
            they’re moments, emotions, and people who truly
            understand you.
          </p>

          {/* Buttons */}
          <div className="mt-5 flex gap-2 sm:gap-3 md:mt-6 lg:mt-8">
            {/* Download Button */}
            <button
              className="
                flex
                h-[34px]
                items-center
                gap-2
                rounded-full
                bg-[linear-gradient(180deg,#669FFF_0%,#0049BF_100%)]
                px-3
                text-[10px]
                font-medium
                text-white
                shadow-[0px_0px_25px_rgba(45,124,255,0.35)]
                sm:h-[40px]
                sm:px-4
                sm:text-[12px]
                lg:h-[44px]
                lg:text-[13px]
              "
            >
              Download App

              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white sm:h-[20px] sm:w-[20px] lg:h-[22px] lg:w-[22px]">
                <FaArrowRight className="text-[8px] text-[#2D7CFF] lg:text-[10px]" />
              </span>
            </button>

            {/* Get Started */}
            <button
              className="
                flex
                h-[34px]
                w-[115px]
                items-center
                justify-between
                rounded-full
                bg-white
                px-4
                text-[10px]
                font-semibold
                text-black
                shadow-md
                sm:h-[40px]
                sm:w-[135px]
                sm:text-[12px]
                md:w-[150px]
                lg:h-[50px]
                lg:w-[175px]
                lg:px-[36px]
                lg:text-[13px]
              "
            >
              <span>Get Started</span>

              <span className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#F4F7FF] lg:h-[28px] lg:w-[28px]">
                <FaArrowRight className="text-[8px] text-[#2D79F5] lg:text-[10px]" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}