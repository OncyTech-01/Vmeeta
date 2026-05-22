import Image from "next/image";

export default function Posts() {
  return (
    <section className="flex justify-center pt-[48px] px-[8px]">
      <div
        className="
          w-[1409px]
          overflow-hidden
          rounded-[30px]
          bg-[linear-gradient(180deg,#FAF3EC_0%,#FFE2CC_100%)]
          px-[40px]
          py-[35px]
        "
      >
        {/* Top Content */}
        <div className="text-center">

          {/* Badge */}
          <div className="inline-flex rounded-full bg-[#F2F0FF] px-4 py-2 text-[13px] font-medium text-[#287BFF]">
            One World, Many Stories.
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-[52px] font-bold text-[#000000]">
            Life feels better when{" "}
            <span className="text-[#0B60EA]">
              Shared.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-[650px] text-center text-[18px] leading-[24px] text-[#444444]">
            From bustling cities to quiet towns,
            <br />
            <span className="font-medium text-[#2D79F5]">
              vmeeta
            </span>{" "}
            brings the world closer with communities
            that feel like home.
          </p>
        </div>

        {/* Image Grid */}
        <div className="mt-12 flex items-start justify-center gap-5">

          {/* Left Side */}
          <div className="flex gap-4">

            {/* Left Column */}
            <div className="flex flex-col gap-4 pt-[15px]">
              <Image
                src="/images/figma/Post1.png"
                alt="post"
                width={209}
                height={270}
                className="h-[270px] w-[209px] rounded-[22px] object-cover"
              />

              <Image
                src="/images/figma/Post2.png"
                alt="post"
                width={160}
                height={214}
                className="h-[214px] w-[160px] rounded-[22px] object-cover"
              />

              <Image
                src="/images/figma/Post3.png"
                alt="post"
                width={192}
                height={270}
                className="h-[270px] w-[192px] rounded-[22px] object-cover"
              />
            </div>

            {/* Left Middle */}
            <div className="flex flex-col gap-4 pt-[90px]">
              <Image
                src="/images/figma/Post4.png"
                alt="post"
                width={226}
                height={191}
                className="h-[191px] w-[226px] rounded-[18px] object-cover"
              />

              <Image
                src="/images/figma/Post5.png"
                alt="post"
                width={277}
                height={419}
                className="h-[419px] w-[277px] rounded-[22px] object-cover object-left"
              />
            </div>
          </div>

          {/* Center Big Image */}
          <Image
            src="/images/figma/Post6.png"
            alt="campfire"
            width={415}
            height={658}
            className="h-[658px] w-[415px] rounded-[28px] object-cover"
          />

          {/* Right Side */}
          <div className="flex gap-4">

            {/* Right Side */}
            <div className="flex flex-col gap-4 pt-[20px]">

              <Image
                src="/images/figma/Post7.png"
                alt="post"
                width={409}
                height={269}
                className="h-[269px] w-[409px] rounded-[22px] object-cover"
              />

              <Image
                src="/images/figma/Post9.png"
                alt="post"
                width={423}
                height={255}
                className="h-[255px] w-[423px] rounded-[20px] object-cover object-left"
              />

              <Image
                src="/images/figma/Post8.png"
                alt="post"
                width={343}
                height={239}
                className="h-[239px] w-[343px] rounded-[22px] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}