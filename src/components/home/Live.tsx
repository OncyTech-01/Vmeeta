import Image from "next/image";

export default function Live() {
  return (
    <section className="flex justify-center pt-[48px]">

      <div
        className="
          relative
          h-[960px]
          w-[1384px]
          rounded-[20px]
          bg-[#FBF5EE]
          px-[70px]
          py-[80px]
        "
      >

        <div className="flex h-full items-center justify-between">

          {/* Left Content */}
          <div className="max-w-[260px]">

            {/* Badge */}
            <div className="mb-5 flex items-center gap-2">

              <div className="h-[8px] w-[8px] rounded-full bg-[#FF5B5B]" />

              <span className="text-[12px] font-medium uppercase tracking-[1px] text-[#FF5B5B]">
                Live Moments
              </span>

            </div>

            {/* Heading */}
            <h2 className="text-[52px] font-bold leading-[60px] text-[#111111]">

              Share what’s
              <br />
              happening

            </h2>

            {/* Description */}
            <p className="mt-5 text-[16px] leading-[28px] text-[#666666]">

              Go live and let people be
              part of your moment.

            </p>

            <div className="mt-6 h-[2px] w-[50px] bg-[#FFB5B5]" />

          </div>

          {/* Center Phone */}
          <div className="relative">

            <Image
              src="/images/figma/Live2.png"
              alt="live"
              width={360}
              height={720}
              className="rounded-[40px]"
            />

          </div>

          {/* Right Content */}
          <div className="max-w-[260px]">

            {/* Badge */}
            <div className="mb-5 flex items-center gap-2">

              <div className="h-[8px] w-[8px] rounded-full bg-[#FF5B5B]" />

              <span className="text-[12px] font-medium uppercase tracking-[1px] text-[#FF5B5B]">
                Real Time
              </span>

            </div>

            {/* Heading */}
            <h2 className="text-[52px] font-bold leading-[60px] text-[#111111]">

              Connect
              <br />
              instantly

            </h2>

            {/* Description */}
            <p className="mt-5 text-[16px] leading-[28px] text-[#666666]">

              React, comment, and feel
              the moment as it happens.

            </p>

            <div className="mt-6 h-[2px] w-[50px] bg-[#FFB5B5]" />

          </div>

        </div>

        {/* Floating Hearts */}
        <div className="absolute bottom-[140px] right-[90px] h-[120px] w-[120px] opacity-85">

          {/* Heart 0 */}
          <Image
            src="/images/figma/Heart.png"
            alt="heart"
            width={24.41}
            height={24.8}
            className="absolute left-[34px] top-[0px] rotate-[17.29deg] opacity-100"
          />

          {/* Heart 1 */}
          <Image
            src="/images/figma/Heart.png"
            alt="heart"
            width={47.23}
            height={47.92}
            className="absolute left-[61px] top-[49px] rotate-[-22.28deg] opacity-100"
          />

          {/* Heart 2 */}
          <Image
            src="/images/figma/Heart.png"
            alt="heart"
            width={47.23}
            height={47.92}
            className="absolute left-[30px] top-[114.32px] rotate-[9.54deg] opacity-100"
          />

          {/* Heart 3 */}
          <Image
            src="/images/figma/Heart.png"
            alt="heart"
            width={65.27}
            height={62.6}
            className="absolute left-[43px] top-[181px] rotate-[14.11deg] opacity-100"
          />
        </div>

      </div>
    </section>
  );
}