import Image from "next/image";

export default function Posts() {
  return (
    <section className="flex justify-center pt-[48px] px-[8px]">
      <div
        className="
         w-full
    max-w-[471px]
    h-[453px]

    md:h-auto
    lg:max-w-[1409px]

    overflow-hidden
    rounded-[30px]
    bg-[linear-gradient(180deg,#FAF3EC_0%,#FFE2CC_100%)]

    px-[16px]
    py-[24px]

    sm:px-[22px]
    sm:py-[28px]

    lg:px-[40px]
    lg:py-[35px]
        "
      >
        {/* Top Content */}
        <div className="text-center">

          {/* Badge */}
          <div className="inline-flex rounded-full bg-[#F2F0FF] px-4 py-2 text-[13px] font-medium text-[#287BFF]">
            One World, Many Stories.
          </div>

          {/* Heading */}
          <h2
            className="
            mt-3
            text-[18px]
            leading-[22px]
            font-bold
            text-[#000000]

            sm:text-[22px]
            sm:leading-[28px]

            md:text-[34px]
            md:leading-[40px]

            lg:text-[52px]
          "
          >
            Life feels better when{" "}
            <span className="text-[#0B60EA]">
              Shared.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-2
              max-w-[240px]
              text-center
              text-[10px]
              leading-[14px]
              text-[#444444]

              sm:max-w-[280px]
              sm:text-[11px]

              md:max-w-[420px]
              md:text-[14px]
              md:leading-[20px]

              lg:max-w-[650px]
              lg:text-[18px]
              lg:leading-[24px]
            "
          >
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
        <div className="mt-12 hidden lg:flex items-start justify-center gap-5">

          {/* Left Side */}
          <div className="flex gap-4">

            {/* Left Column */}
            <div className="flex flex-col gap-4 pt-[15px]">
              <div className="relative">
                <Image
                  src="/images/figma/P1.png"
                  alt="post"
                  width={209}
                  height={270}
                  className="h-[270px] w-[209px] rounded-[22px] object-cover"
                />

                {/* Profile + Name */}
                <div className="absolute left-2 top-2 flex items-start gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
                    alt="profile"
                    className="h-[28px] w-[28px] rounded-full border border-white object-cover"
                  />

                  <div>
                    <h3 className="text-[11px] font-semibold leading-none text-white">
                      Jessica
                    </h3>

                    <p className="mt-[2px] text-[8px] text-white/80">
                      @jessica_123
                    </p>
                  </div>
                </div>

                {/* Bottom Text */}
                <div className="absolute bottom-2 left-2">
                  <p className="text-[8px] text-white">
                    12:00 PM
                  </p>

                  <p className="text-[8px] text-white/80">
                    📍 Seoul, South Korea
                  </p>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/figma/P2.png"
                  alt="post"
                  width={160}
                  height={214}
                  className="h-[214px] w-[160px] rounded-[22px] object-cover"
                />

                <div className="absolute left-3 top-2 flex items-start gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile"
                    className="h-[26px] w-[26px] rounded-full border border-white object-cover"
                  />

                  <div>
                    <h3 className="text-[10px] font-semibold leading-none text-white">
                      Scarlett
                    </h3>

                    <p className="mt-[2px] text-[7px] text-white/80">
                      @usercool789
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3.5">
                  <p className="text-[8px] text-white">
                    12:00 PM
                  </p>

                  <p className="text-[7px] text-white/80">
                    📍 Praia, France
                  </p>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/figma/P3.png"
                  alt="post"
                  width={198}
                  height={270}
                  className="h-[270px] w-[198px] rounded-[20px] object-cover"
                />

                {/* Profile + Name */}
                <div className="absolute left-2 top-2 flex items-start gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile"
                    className="h-[28px] w-[28px] rounded-full border border-white object-cover"
                  />

                  <div>
                    <h3 className="text-[11px] font-semibold leading-none text-white">
                      Kim yun jun
                    </h3>

                    <p className="mt-[2px] text-[8px] text-white/80">
                      @mycooler123
                    </p>
                  </div>
                </div>

                {/* Bottom Text */}
                <div className="absolute bottom-2 left-2">
                  <p className="text-[8px] text-white">
                    10:24 PM
                  </p>

                  <p className="text-[8px] text-white/80">
                    📍 Seoul, South Korea
                  </p>
                </div>
              </div>
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

              <div className="relative">
                <Image
                  src="/images/figma/P5.png"
                  alt="post"
                  width={277}
                  height={419}
                  className="h-[419px] w-[277px] rounded-[22px] object-cover object-left"
                />

                {/* Profile + Name */}
                <div className="absolute left-4 top-4 flex items-start gap-3">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile"
                    className="h-[42px] w-[42px] rounded-full border border-white object-cover"
                  />

                  <div>
                    <h3 className="text-[18px] font-semibold leading-none text-white">
                      Henry
                    </h3>

                    <p className="mt-1 text-[11px] text-white/80">
                      @thisishenry_12
                    </p>
                  </div>
                </div>

                {/* Bottom Text */}
                <div className="absolute bottom-4 left-4">
                  <p className="text-[18px] font-medium text-white">
                    10:00 AM
                  </p>

                  <p className="text-[12px] text-white/85">
                    📍 Ottawa, Canada
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Big Image */}
          <div className="relative">
            <Image
              src="/images/figma/Pnew6.png"
              alt="campfire"
              width={415}
              height={658}
              className="h-[658px] w-[415px] rounded-[28px] object-cover"
            />

            {/* Top Profile */}
            <div className="absolute left-5 top-5 flex items-start gap-3">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
                alt="profile"
                className="h-[52px] w-[52px] rounded-full border border-white object-cover"
              />

              <div>
                <h3 className="text-[18px] font-semibold leading-none text-[#2B2B2B]">
                  Eva
                </h3>

                <p className="mt-1 text-[11px] text-[#444444]">
                  @mev_12
                </p>
              </div>
            </div>

            {/* Following Button */}
            <button
              className="
                absolute
                right-5
                top-5
                flex
                h-[30px]
                w-[88px]
                items-center
                justify-center
                rounded-[8px]
                border
                border-white/30
                bg-[#7C5A4E]/40
                text-[11px]
                font-medium
                text-white
                backdrop-blur-md
              "
            >
              Following
            </button>

            {/* Bottom Profile + Location */}
            <div className="absolute bottom-8 left-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile"
                  className="h-[34px] w-[34px] rounded-full border border-white object-cover"
                />

                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile"
                  className="h-[34px] w-[34px] rounded-full border border-white object-cover"
                />
              </div>

              <div>
                <p className="text-[18px] font-medium text-white">
                  07:24 PM
                </p>

                <p className="text-[11px] text-white/85">
                  📍 Washington D.C. U.S.A
                </p>
              </div>
            </div>
            {/* 
            Hearts
            <div className="absolute bottom-8 right-5 flex flex-col items-center gap-1">
              <span className="text-[20px]">❤️</span>
              <span className="text-[18px]">❤️</span>
              <span className="text-[16px]">❤️</span>
              <span className="text-[22px]">❤️</span>
              <span className="text-[18px]">❤️</span>
            </div> */}
          </div>

          {/* Right Side */}
          <div className="flex gap-4">

            {/* Right Side */}
            <div className="flex flex-col gap-4 pt-[20px]">

              <div className="relative">
                <Image
                  src="/images/figma/P7.png"
                  alt="post"
                  width={409}
                  height={269}
                  className="h-[269px] w-[409px] rounded-[22px] object-cover"
                />

                {/* Top Profile */}
                <div className="absolute left-4 top-4 flex items-start gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile"
                    className="h-[60px] w-[60px] rounded-full border-[3px] border-[#2D79F5] object-cover"
                  />

                  <div className="pt-2">
                    <h3 className="text-[20px] font-medium leading-none text-white">
                      Mike
                    </h3>

                    <p className="mt-2 text-[10px] text-white/90">
                      @itsmike_18
                    </p>
                  </div>
                </div>

                {/* Bottom Profile + Time */}
                <div className="absolute bottom-4 left-4 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="profile"
                      className="h-[52px] w-[52px] rounded-full border-2 border-white object-cover"
                    />

                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="profile"
                      className="h-[52px] w-[52px] rounded-full border-2 border-white object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-[16px] font-medium text-white">
                      12:00 PM
                    </p>

                    <p className="text-[12px] text-white">
                      📍 Los Angeles, California
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/figma/P8.png"
                  alt="post"
                  width={423}
                  height={255}
                  className="h-[255px] w-[423px] rounded-[20px] object-cover object-left"
                />

                {/* Top Profile */}
                <div className="absolute left-4 top-4 flex items-start gap-3">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1693258698597-1b2b1bf943cc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile"
                    className="h-[58px] w-[58px] rounded-full border-[3px] border-[#2D79F5] object-cover"
                  />

                  <div className="pt-1">
                    <h3 className="text-[20px] font-medium leading-none text-white">
                      Lois
                    </h3>

                    <p className="mt-1 text-[11px] text-white/90">
                      @itslois_12
                    </p>
                  </div>
                </div>

                {/* Bottom Profile + Time */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1693258698597-1b2b1bf943cc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="profile"
                      className="h-[42px] w-[42px] rounded-full border-2 border-white object-cover"
                    />

                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
                      alt="profile"
                      className="h-[42px] w-[42px] rounded-full border-2 border-white object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-[16px] font-medium text-white leading-none">
                      4:00 PM
                    </p>

                    <p className="mt-1 text-[11px] text-white">
                      📍 Los Angeles, California
                    </p>
                  </div>
                </div>

                {/* Left Like Icon */}
                <div className="absolute left-[-16px] top-[110px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white shadow-md">
                  👍
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/figma/P9.png"
                  alt="post"
                  width={343}
                  height={239}
                  className="h-[239px] w-[343px] rounded-[22px] object-cover"
                />

                {/* Top Profile */}
                <div className="absolute left-4 top-4 flex items-start gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100"
                    alt="profile"
                    className="h-[36px] w-[36px] rounded-full border border-white object-cover"
                  />

                  <div>
                    <h3 className="text-[16px] font-medium leading-none text-white">
                      Lane
                    </h3>

                    <p className="mt-1 text-[10px] text-white/80">
                      @itslanee_199
                    </p>
                  </div>
                </div>

                {/* Bottom Time + Location */}
                <div className="absolute bottom-4 left-4">
                  <p className="text-[14px] font-medium text-white leading-none">
                    11:30 PM
                  </p>

                  <p className="mt-1 text-[10px] text-white/85">
                    📍 Los Angeles, California
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>



        {/* Mobile Layout */}
        <div className="
            relative
            mt-8
            h-[320px]
            w-full
            overflow-visible
            lg:hidden
          ">

          {/* Center Main Card */}
          <div className="absolute left-1/2 top-[0px] z-10 -translate-x-1/2">
            <Image
              src="/images/figma/Pnew6.png"
              alt="campfire"
              width={187}
              height={273}
              className="
                  h-[273px]
                  w-[187px]

                  sm:h-[290px]
                  sm:w-[200px]

                  rounded-[24px]
                  object-cover
                "
            />

            {/* Profile */}
            <div className="absolute left-3 top-5 flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
                alt="profile"
                className="h-[22px] w-[22px] rounded-full border border-white object-cover"
              />

              <div>
                <h3 className="text-[8px] font-semibold text-white">
                  Jessica
                </h3>

                <p className="text-[6px] text-white/80">
                  @jessica
                </p>
              </div>
            </div>
          </div>

          {/* Left Image */}
          <div className="absolute bottom-[58px] left-[10px] z-20 rotate-[-8deg]">
            <Image
              src="/images/figma/P1.png"
              alt="left"
              width={98}
              height={110}
              className="rounded-[18px] shadow-xl"
            />
          </div>

          {/* Right Cat Card */}
          <div className="absolute bottom-[50px] right-[10px] z-20 rotate-[8deg]">
            <div className="rounded-[16px] bg-white p-[8px] shadow-xl">
              <Image
                src="/images/figma/Post4.png"
                alt="cat"
                width={100}
                height={90}
                className="rounded-[12px]"
              />

              <p className="mt-1 text-center text-[8px] text-[#444]">
                My Cute pet
              </p>
            </div>
          </div>

          {/* Heart
        <div className="absolute right-[10px] top-[145px] z-30 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white shadow-md">
          ❤️
        </div> */}

          {/* Bottom small reaction */}
          {/* <div className="absolute left-[5px] top-[145px] z-20 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white shadow-md">
          😂
        </div> */}
        </div>
      </div>
    </section>
  );
}