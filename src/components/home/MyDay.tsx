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

            {/* Top Right Small Card */}
            <div className="absolute right-[0px] top-[-20px] z-20 rounded-full bg-[#F7D88A] px-2 py-1 shadow-sm">
              <div className="flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                  alt="profile"
                  className="h-[20px] w-[20px] rounded-full object-cover"
                />
                <p className="text-[8px] text-[#7B5B14]">
                  Beautiful Family bless you
                </p>
              </div>
            </div>

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
            {/* Bottom Left Card */}
            <div className="absolute left-[10px] bottom-[-28px] z-20 rounded-full bg-[#F6C8D0] px-2 py-1 shadow-sm">
              <div className="flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                  alt="profile"
                  className="h-[20px] w-[20px] rounded-full object-cover"
                />

                <p className="text-[12px] text-[#5F4A4A] whitespace-nowrap">
                  Super cool 🖤
                </p>
              </div>
            </div>

            {/* Bottom Middle Card */}
            <div className="absolute left-[300px] bottom-[-28px] z-20 flex items-center gap-2 rounded-full bg-[#DDD2FF] px-2 py-1 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                alt="profile"
                className="h-[20px] w-[20px] rounded-full object-cover"
              />

              <p className="text-[10px] text-[#5B4A8A] whitespace-nowrap">
                Greetings from Korea!
              </p>
            </div>

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