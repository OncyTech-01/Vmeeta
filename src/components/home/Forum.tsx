import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Forum() {
  return (
    <section className="flex justify-center pt-[60px] px-[12px]">
      <div
        className="
        relative
        left-[1px]
        top-[4px]
        h-[915px]
        w-[1453px]
        overflow-hidden
        rounded-[40px]
        bg-[#FBF0FC]
        px-[42px]
        py-[45px]
        "
      >
        <div className="flex h-full items-center">

          {/* Left Content */}
          <div className="h-[566px] w-[421.08px] shrink-0">

            {/* Badge */}
            <div className="mb-8 inline-flex rounded-full bg-[#DCE8FF] ">
              <span className="text-[13px] font-medium text-[#3B82F6]">
                Global communities
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[64px] font-bold leading-[70px] text-black">
              Every
              <br />
              interest has
              <br />
              its{" "}
              <span className="text-[#2678FD]">
                people.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 h-[87px] max-w-[421px] text-[16px] leading-[28px] text-[#666666]">
              From creators and travellers
              to gamers and storytellers,
              discover communities
              where people connect.
            </p>

            {/* Button */}
            <div className="mt-10 inline-flex rounded-full bg-[linear-gradient(180deg,#4F8FF7_0%,#2D79F5_100%)] p-[1px] shadow-[0px_0px_25px_rgba(45,121,245,0.35)]">
              <button
                className="
                flex
                items-center
                gap-3
                rounded-full
                bg-[radial-gradient(circle,#468CFF_0%,#0049BF_100%)]
                px-7
                py-3
                text-[15px]
                font-medium
                text-white
                shadow-md
              "
              >
                Explore Communities

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
                  <FaArrowRight className="text-[12px] text-[#2D79F5]" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative mr-[15px] h-[720px] w-[900px] shrink-0">

            {/* Gaming */}
            <div className="absolute left-[120px] top-[5px] z-20 rounded-full bg-[#DDD6FE] px-5 py-2 text-[13px] text-[#6D28D9] shadow-sm">
              🎮 Gaming
            </div>
            {/* Music */}
            <div className="absolute left-[420px] top-[20px] z-20 rounded-full bg-[#DBEAFE] px-5 py-2 text-[13px] text-[#2563EB] shadow-sm">
              🎵 Music
            </div>

            {/* Top Profile Image */}
            <Image
              src="/images/figma/F1.png"
              alt="top-profile"
              width={44}
              height={44}
              className="absolute left-[460px] top-[-50px] z-20 object-contain"
            />

            {/* Travel Image */}
            <Image
              src="/images/figma/Travel.png"
              alt="travel"
              width={115}
              height={34}
              className="absolute left-[10px] bottom-[-70px] z-20 object-contain"
            />

            {/* Study Image */}
            <Image
              src="/images/figma/Study.png"
              alt="study"
              width={115}
              height={34}
              className="absolute left-[300px] bottom-[-15px] z-20 object-contain"
            />

            {/* Creator Image */}
            <Image
              src="/images/figma/Creators.png"
              alt="creator"
              width={120}
              height={34}
              className="absolute right-[370px] bottom-[200px] z-20 object-contain"
            />

            {/* Creator Image */}
            <Image
              src="/images/figma/F8.png"
              alt="creator"
              width={20}
              height={18}
              className="absolute right-[430px] bottom-[400px] z-20 object-contain"
            />

            {/* Top Left */}
            <Image
              src="/images/figma/Forum1.png"
              alt="forum1"
              width={223}
              height={149}
              className="absolute left-[60px] top-[50px] h-[149px] w-[223px] rounded-[20px] object-cover object-top"
            />

            {/* Top Right */}
            <Image
              src="/images/figma/Forum4.png"
              alt="forum2"
              width={233}
              height={163}
              className="absolute left-[290px] top-[65px] h-[163px] w-[233px] rounded-[24px] object-cover"
            />

            {/* Center Big */}
            <Image
              src="/images/figma/Forum2.png"
              alt="forum3"
              width={372}
              height={298}
              className="absolute left-[4px] top-[220px] h-[298px] w-[372px] rounded-[30px] object-cover"
            />

            {/* Right Small */}
            <Image
              src="/images/figma/Forum5.png"
              alt="forum5"
              width={160}
              height={154}
              className="absolute left-[380px] top-[330px] h-[154px] w-[160px] rounded-[24px] object-cover"
            />

            {/* Bottom Left */}
            <Image
              src="/images/figma/Forum3.png"
              alt="forum4"
              width={297}
              height={211}
              className="absolute left-[-90px] top-[540px] h-[211px] w-[297px] rounded-[24px] object-cover"
            />

            {/* Bottom Center */}
            <Image
              src="/images/figma/Forum6.png"
              alt="forum6"
              width={262}
              height={177}
              className="absolute left-[260px] bottom-[15px] h-[177px] w-[262px] rounded-[24px] object-cover"
            />

            {/* Bottom Profile Image */}
            <Image
              src="/images/figma/F2.png"
              alt="bottom-profile"
              width={48}
              height={48}
              className="absolute left-[230px] bottom-[-40px] z-20 object-contain"
            />

            {/* Phone UI */}
            <Image
              src="/images/figma/Forum7.png"
              alt="forum phone"
              width={324}
              height={709}
              className="absolute right-[35px] top-[40px] h-[704px] w-[312px] rounded-[40px] object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}