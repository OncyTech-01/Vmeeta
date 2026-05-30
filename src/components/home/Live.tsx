import Image from "next/image";

export default function Live() {
  return (
    <section className="flex justify-center pt-[48px] px-4">
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
          <div className="w-[95px]
            sm:w-[140px]
            md:w-[200px]
            lg:max-w-[260px] text-center lg:text-left">
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
          </div>

          {/* Center Phone */}
          <div className="relative shrink-0">
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
            />
          </div>

          {/* Right Content */}
          <div className="w-[95px]
              sm:w-[140px]
              md:w-[200px]
              lg:max-w-[260px] text-center lg:text-left">
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
          </div>
        </div>

        {/* Floating Hearts */}
        <div
          className="
            absolute
            bottom-[10px]
            md:bottom-[80px]
            lg:bottom-[140px]
            right-[20px]

            md:bottom-[80px]
            md:right-[50px]

            lg:bottom-[140px]
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
          />
        </div>
      </div>
    </section>
  );
}