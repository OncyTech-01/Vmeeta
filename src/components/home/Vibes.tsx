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

          max-lg:w-full
          max-lg:h-[780px]
          max-lg:px-[20px]
          max-lg:py-[25px]
        "
      >
        <div
          className="
            flex
            h-full
            items-center
            gap-[85px]

            max-lg:flex-col
            max-lg:justify-start
            max-lg:gap-[35px]
          "
        >
          {/* Left Content */}
          <div
            className="
            max-w-[280px]
            max-lg:max-w-[320px]
            max-lg:text-center
          "
          >
            {/* Badge */}
            <div className="mb-5 inline-flex rounded-full bg-[#DCE8FF] px-4 py-2">
              <span className="text-[13px] font-medium text-[#3B82F6]">
                Vibes
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
              text-[45px]
              font-bold
              leading-[50px]
              text-black

              max-lg:text-[42px]
              max-lg:leading-[42px]
              max-lg:tracking-[-1px]
  "
            >
              Find people
              <br />
              who feel like{" "}
              <span className="text-[#3B82F6]">
                home.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                text-[15px]
                leading-[26px]
                text-[#5F6368]

                max-lg:text-[12px]
                max-lg:leading-[20px]
                max-lg:px-[10px]
              "
            >
              From creators and travelers
              to gamers and storytellers,
              discover communities where
              conversations feel real.
            </p>

            {/* Button */}
            <button
              className="
                max-lg:mb-[35px]
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

                max-lg:mx-auto
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
          <div
            className="
              relative
              -ml-[10px]
              flex
              items-center
              gap-4

              max-lg:w-full
              max-lg:h-[420px]
              max-lg:mt-[15px]
              max-lg:justify-center
            "
          >
            {/* TOP LEFT CARD */}
            <div
              className="
                absolute
                left-[30px]
                top-[0px]
                z-20
                flex
                items-center
                gap-2

                max-lg:left-[-10px]
                max-lg:top-[70px]
              "
            >
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                alt="profile"
                className="
                  h-[42px]
                  w-[42px]
                  rounded-full
                  object-cover

                  max-lg:h-[20px]
                  max-lg:w-[20px]
                "
              />

              <div className="rounded-full bg-[#F6C9CD] px-4 py-2 shadow-sm max-lg:px-2 max-lg:py-1">
                <p className="whitespace-nowrap text-[11px] text-[#5F4A4A] max-lg:text-[6px]">
                  Super cool dance bro 🖤
                </p>
              </div>
            </div>

            {/* HEART */}
            <Image
              src="/images/figma/V2.png"
              alt="top-heart"
              width={28}
              height={28}
              className="
                absolute
                left-[650px]
                top-[-1px]
                z-20
                object-contain

                max-lg:right-[20px]
                max-lg:left-auto
                max-lg:top-[0px]
                max-lg:w-[18px]
              "
            />

            {/* TOP RIGHT CARD */}
            <div
              className="
                absolute
                right-[-5px]
                top-[15px]
                z-20
                flex
                items-center
                gap-2

                max-lg:right-[10px]
                max-lg:top-[40px]
              "
            >
              <div className="rounded-full bg-[#DDD2FF] px-4 py-2 shadow-sm max-lg:px-2 max-lg:py-1">
                <p className="whitespace-nowrap text-[11px] text-[#5B4A8A] max-lg:text-[6px]">
                  You look cute.
                </p>
              </div>

              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                alt="profile"
                className="
                  h-[42px]
                  w-[42px]
                  rounded-full
                  object-cover

                  max-lg:h-[20px]
                  max-lg:w-[20px]
                "
              />
            </div>

            {/* PHONE 1 */}
            <Image
              src="/images/figma/Vibe0.png"
              alt="vibe1"
              width={297}
              height={608}
              className="
                rounded-[28px]
                object-cover

                max-lg:w-[105px]
                max-lg:absolute
                max-lg:left-[5px]
                max-lg:bottom-[30px]
                max-lg:rotate-[-10deg]
              "
            />

            {/* PHONE 2 */}
            <Image
              src="/images/figma/Vibes1.png"
              alt="vibe2"
              width={310}
              height={650}
              className="
                rounded-[28px]
                pb-[60px]
                object-cover

                max-lg:w-[155px]
                max-lg:absolute
                max-lg:left-1/2
                max-lg:bottom-[30px]
                max-lg:-translate-x-1/2
                max-lg:z-20
              "
            />

            {/* PHONE 3 */}
            <Image
              src="/images/figma/Vibes3.png"
              alt="vibe3"
              width={297}
              height={608}
              className="
                rounded-[28px]
                pt-[30px]
                object-cover

                max-lg:w-[115px]
                max-lg:absolute
                max-lg:right-[5px]
                max-lg:bottom-[40px]
                max-lg:rotate-[10deg]
              "
            />

            {/* BOTTOM CARD */}
            <div
              className="
                absolute
                bottom-[-6px]
                left-[260px]
                z-20
                flex
                items-center
                gap-2

                max-lg:left-1/2
                max-lg:bottom-[5px]
                max-lg:-translate-x-1/2
              "
            >
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                alt="profile"
                className="
                  h-[48px]
                  w-[48px]
                  rounded-full
                  object-cover

                  max-lg:h-[34px]
                  max-lg:w-[34px]
                "
              />

              <div className="rounded-full bg-[#DDD2FF] px-4 py-2 shadow-sm max-lg:px-6 max-lg:py-4">
                <p className="max-lg:max-w-[90px] max-lg:text-center text-[9px] text-[#5B4A8A] max-lg:text-[6px]">
                  best recipe will surely try it
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}