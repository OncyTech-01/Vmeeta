import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function MyDay() {
  return (
    <section className="flex justify-center px-[37px] pt-[48px]">
      <div
        className="
          h-[509px]
          w-[1367px]
          rounded-[30px]
          bg-gradient-to-r
          from-[#FEF7ED]
          to-[#FEE7CA]
          px-[50px]
          py-[45px]
        "
      >
        <div className="flex h-full items-center justify-between gap-[60px]">

          {/* Left Content */}
          <div className="h-[427px] w-[433px]">

            {/* Badge */}
            <div className="mb-5 inline-flex rounded-full bg-[#F9D99B] px-4 py-2 text-[13px] font-medium text-[#8A5B00]">
              ✨ My Day • Status
            </div>

            {/* Heading */}
            <h2 className="text-[52px] font-bold leading-[60px] text-[#111111]">
              Share moments
              <br />
              that matter
            </h2>

            {/* Description */}
            <p className="mt-5 text-[16px] leading-[28px] text-[#666666]">
              From everyday fun to once-in-a-lifetime
              adventures — share it all in real time
              with the people who get you.
            </p>

            {/* Button */}
            <button
              className="
                mt-8
                flex
                items-center
                gap-1
                rounded-[20px]
                bg-[#FFF5FF]
                px-6
                py-3
                text-[14px]
                font-medium
                text-[#6C3FC2]
              "
            >
              Start Sharing
              <MdKeyboardArrowRight className="text-[18px]" />
            </button>
          </div>

          {/* Right Cards */}
          <div className="relative flex items-center gap-5">

            {/* Top Small Images */}
            <Image
              src="/images/figma/MD1.png"
              alt="top1"
              width={32}
              height={32}
              className="absolute left-[-10px] top-[-30px] z-20 object-contain"
            />

            <Image
              src="/images/figma/MD2.png"
              alt="top2"
              width={16}
              height={16}
              className="absolute left-[480px] top-[-12px] z-20 object-contain"
            />

            <Image
              src="/images/figma/MD3.png"
              alt="top3"
              width={120}
              height={36}
              className="absolute right-[0px] top-[-20px] z-20 object-contain"
            />

            {/* Card 1 */}
            <div className="overflow-hidden rounded-[20px]">
              <Image
                src="/images/figma/MyDayTwo.png"
                alt="myday1"
                width={243}
                height={364}
                className="h-[364px] w-[243px] rounded-[20px] object-cover"
              />
            </div>

            {/* Card 2 */}
            <div className="overflow-hidden rounded-[20px]">
              <Image
                src="/images/figma/MyDayThree.png"
                alt="myday2"
                width={243}
                height={364}
                className="h-[364px] w-[243px] rounded-[20px] object-cover"
              />
            </div>

            {/* Card 3 */}
            <div className="overflow-hidden rounded-[20px]">
              <Image
                src="/images/figma/MyDayOne.png"
                alt="myday3"
                width={243}
                height={364}
                className="h-[364px] w-[243px] rounded-[20px] object-cover"
              />
            </div>

            {/* Bottom Small Images */}
            <Image
              src="/images/figma/MD4.png"
              alt="bottom1"
              width={110}
              height={30}
              className="absolute left-[10px] bottom-[-28px] z-20 object-contain"
            />

            <Image
              src="/images/figma/MD5.png"
              alt="bottom2"
              width={120}
              height={30}
              className="absolute left-[300px] bottom-[-28px] z-20 object-contain"
            />

            <Image
              src="/images/figma/MD6.png"
              alt="bottom3"
              width={18}
              height={18}
              className="absolute right-[20px] bottom-[-18px] z-20 object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}