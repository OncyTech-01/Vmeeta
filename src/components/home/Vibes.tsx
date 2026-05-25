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
          <div className="relative -ml-[10px] flex items-center gap-4">

            {/* ---------- TOP LEFT CARD ---------- */}
            <div className="absolute left-[30px] top-[0px] z-20 flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                alt="profile"
                className="h-[42px] w-[42px] rounded-full object-cover"
              />

              <div className="rounded-full bg-[#F6C9CD] px-4 py-2 shadow-sm">
                <p className="whitespace-nowrap text-[11px] text-[#5F4A4A]">
                  Super cool dance bro 🖤
                </p>
              </div>
            </div>

            {/* ---------- HEART IMAGE (UNCHANGED) ---------- */}
            <Image
              src="/images/figma/V2.png"
              alt="top-heart"
              width={28}
              height={28}
              className="absolute left-[650px] top-[-1px] z-20 object-contain"
            />

            {/* ---------- TOP RIGHT CARD ---------- */}
            <div className="absolute right-[-5px] top-[15px] z-20 flex items-center gap-2">
              <div className="rounded-full bg-[#DDD2FF] px-4 py-2 shadow-sm">
                <p className="whitespace-nowrap text-[11px] text-[#5B4A8A]">
                  You look cute.
                </p>
              </div>

              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                alt="profile"
                className="h-[42px] w-[42px] rounded-full object-cover"
              />
            </div>

            {/* ---------- PHONE 1 ---------- */}
            <Image
              src="/images/figma/Vibe0.png"
              alt="vibe1"
              width={297}
              height={608}
              className="rounded-[28px] object-cover"
            />

            {/* ---------- PHONE 2 ---------- */}
            <Image
              src="/images/figma/Vibes1.png"
              alt="vibe2"
              width={310}
              height={650}
              className="rounded-[28px] pb-[60px] object-cover"
            />

            {/* ---------- PHONE 3 ---------- */}
            <Image
              src="/images/figma/Vibes3.png"
              alt="vibe3"
              width={297}
              height={608}
              className="rounded-[28px] pt-[30px] object-cover"
            />

            {/* ---------- BOTTOM CARD ---------- */}
            <div className="absolute bottom-[-6px] left-[260px] z-20 flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                alt="profile"
                className="h-[48px] w-[48px] rounded-full object-cover"
              />

              <div className="rounded-full bg-[#DDD2FF] px-4 py-2 shadow-sm">
                <p className="whitespace-nowrap text-[11px] text-[#5B4A8A]">
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