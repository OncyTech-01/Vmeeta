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

        w-full
        min-h-[980px]

        overflow-hidden
        rounded-[40px]
        bg-[#FBF0FC]

        px-[20px]
        py-[30px]

        md:px-[42px]
        md:py-[45px]

        lg:h-[915px]
        lg:w-[1453px]
        "
      >
        <div
          className="
          flex
          flex-col
          items-center

          lg:flex-row
          lg:h-full
          lg:items-center
"
        >

          {/* Left Content */}
          <div
            className="
            w-full
            max-w-[320px]
            text-center
            shrink-0

            lg:h-[566px]
            lg:w-[421px]
            lg:text-left
          "
          >

            {/* Badge */}
            <div
              className="
                mb-6
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-[#DCE8FF]
                px-4
                py-2
                sm:px-5
                sm:py-2.5
              "
            >
              <span
                className="
                  text-[11px]
                  font-medium
                  text-[#3B82F6]
                  sm:text-[13px]
                  whitespace-nowrap
                "
              >
                Global communities
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
              text-[34px]
              leading-[38px]

              md:text-[48px]
              md:leading-[54px]

              lg:text-[64px]
              lg:leading-[70px]

              font-bold
              text-black
            "
            >
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
          <div
            className="
            relative
            w-[340px]
            h-[500px]
            shrink-0
            mx-auto

            md:w-[500px]
            md:h-[650px]

            lg:mr-[15px]
            lg:h-[720px]
            lg:w-[900px]
          "
          >

            {/* Gaming */}
            <div className="
              absolute
              left-[15px]
              top-[15px]
              z-20
              rounded-full
              bg-[#DDD6FE]
              px-2 py-1
              text-[8px]
              text-[#6D28D9]
              shadow-sm

              lg:left-[120px]
              lg:top-[5px]
              lg:px-5
              lg:py-2
              lg:text-[13px]
              ">
              🎮 Gaming
            </div>
            {/* Music */}
            <div className="
            absolute
            right-[15px]
            top-[15px]
            z-20
            rounded-full
            bg-[#DBEAFE]
            px-2 py-1
            text-[8px]
            text-[#2563EB]
            shadow-sm

            lg:left-[420px]
            lg:right-auto
            lg:top-[20px]
            lg:px-5
            lg:py-2
            lg:text-[13px]
            ">
              🎵 Music
            </div>

            {/* Top Profile Image */}
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
              alt="top-profile"
              className="absolute left-[460px] top-[-50px] z-20 h-[44px] w-[44px] rounded-full object-cover"
            />

            {/* Travel Image */}
            <Image
              src="/images/figma/Travel.png"
              alt="travel"
              width={115}
              height={34}
              className="
              absolute
              left-[20px]
              bottom-[10px]
              z-20
              w-[70px]
              object-contain

              lg:left-[10px]
              lg:bottom-[-50px]
              lg:w-[115px]
              "
            style={{ height: 'auto' }}
            />

            {/* Study Image */}
            <Image
              src="/images/figma/Study.png"
              alt="study"
              width={115}
              height={34}
              className="
                absolute
                right-[10px]
                bottom-[10px]
                z-20
                w-[70px]
                object-contain

                lg:left-[300px]
                lg:right-auto
                lg:bottom-[-16px]
                lg:w-[115px]
                "
            style={{ height: 'auto' }}
            />

            {/* Creator Image */}
            <Image
              src="/images/figma/Creators.png"
              alt="creator"
              width={120}
              height={34}
              className="absolute right-[370px] bottom-[200px] z-20 object-contain"
            style={{ height: 'auto' }}
            />

            {/* Creator Image */}
            <Image
              src="/images/figma/F8.png"
              alt="creator"
              width={20}
              height={18}
              className="absolute right-[430px] bottom-[330px] z-20 object-contain"
            />

            <Image
              src="/images/figma/Forum1.png"
              alt="forum1"
              width={223}
              height={149}
              className="
    absolute
    left-[15px]
    top-[70px]
    w-[85px]
    h-[65px]
    rounded-[12px]
    rotate-[-10deg]
    object-cover
    z-20

    lg:left-[60px]
    lg:top-[50px]
    lg:h-[149px]
    lg:w-[223px]
    lg:rounded-[20px]
    lg:rotate-0
  "
            />

            {/* Top Right */}
            <Image
              src="/images/figma/Forum4.png"
              alt="forum2"
              width={233}
              height={163}
              className="
    absolute
    right-[15px]
    top-[75px]
    w-[90px]
    h-[70px]
    rounded-[12px]
    rotate-[10deg]
    object-cover
    z-20

    lg:left-[290px]
    lg:top-[65px]
    lg:h-[163px]
    lg:w-[233px]
    lg:rounded-[24px]
    lg:rotate-0
  "
            />

            {/* Center Big */}
            <Image
              src="/images/figma/Forum2.png"
              alt="forum3"
              width={372}
              height={298}
              className="
    absolute
    left-[5px]
    top-[220px]
    w-[95px]
    h-[120px]
    rounded-[16px]
    rotate-[-8deg]
    object-cover
    z-20

    lg:left-[4px]
    lg:top-[220px]
    lg:h-[298px]
    lg:w-[372px]
    lg:rounded-[30px]
    lg:rotate-0
  "
            />

            {/* Right Small */}
            <Image
              src="/images/figma/Forum5.png"
              alt="forum5"
              width={160}
              height={154}
              className="
    absolute
    right-[10px]
    top-[230px]
    w-[90px]
    h-[90px]
    rounded-[12px]
    rotate-[8deg]
    object-cover
    z-20

    lg:left-[380px]
    lg:top-[330px]
    lg:h-[154px]
    lg:w-[160px]
    lg:rounded-[24px]
    lg:rotate-0
  "
            />

            {/* Bottom Left */}
            <Image
              src="/images/figma/Forum3.png"
              alt="forum4"
              width={285}
              height={200}
              className="
    absolute
    left-[10px]
    bottom-[45px]
    w-[90px]
    h-[70px]
    rounded-[12px]
    rotate-[-8deg]
    object-cover
    z-20

    lg:left-[-15px]
    lg:top-[500px]
    lg:h-[180px]
    lg:w-[275px]
    lg:rounded-[24px]
    lg:rotate-0
  "
            />

            {/* Bottom Center */}
            <Image
              src="/images/figma/Forum6.png"
              alt="forum6"
              width={262}
              height={177}
              className="
    absolute
    right-[10px]
    bottom-[45px]
    w-[95px]
    h-[75px]
    rounded-[12px]
    rotate-[8deg]
    object-cover
    z-20

    lg:left-[280px]
    lg:bottom-[15px]
    lg:h-[177px]
    lg:w-[262px]
    lg:rounded-[24px]
    lg:rotate-0
  "
            />

            {/* Bottom Profile Image */}
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=100&w=2000&auto=format&fit=crop"
              alt="bottom-profile"
              className="
                absolute
                left-1/2
                bottom-[0px]
                -translate-x-1/2
                z-20

                h-[38px]
                w-[38px]
                rounded-full
                object-cover

                lg:left-[250px]
                lg:bottom-[-70px]
                lg:h-[48px]
                lg:w-[48px]
                lg:translate-x-0
                "
              style={{
                imageRendering: "crisp-edges",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
              }}
            />


            {/* Phone UI */}
            <div
              className="
    absolute
    left-1/2
    top-[30px]
    -translate-x-1/2

    w-[185px]
    z-30

    sm:w-[210px]
    md:w-[240px]

    lg:right-[35px]
    lg:left-auto
    lg:translate-x-0
    lg:top-[40px]
    lg:w-[312px]
  "
            >
              <Image
                src="/images/figma/ForumBigPhone.png"
                alt="forum phone"
                width={324}
                height={709}
                className="
      h-auto
      w-full
      rounded-[24px]
      lg:rounded-[40px]
      object-contain
      shadow-xl
    "
              />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}