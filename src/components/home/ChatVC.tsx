import Image from "next/image";

export default function ChatVC() {
  return (
    <section className="flex justify-center px-[8px] pt-[40px]">
      <div
        className="
          relative
          h-[516px]
          w-[1410px]
          overflow-hidden
          rounded-[14px]
        "
      >
        {/* Background Image */}
        <Image
          src="/images/figma/Chatvc0.png"
          alt="chat background"
          fill
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Floating Chat Bubble 1 */}
        <div className="absolute left-[440px] top-[120px] z-20">
          <div className="rounded-[5px] bg-[#7A655A]/90 px-2 py-1 backdrop-blur-sm shadow-lg">
            <div className="flex items-center gap-2">
              <p className="text-[10px] font-semibold text-white">
                Miss You
              </p>

              <span className="text-[10px]">
                ❤️
              </span>
            </div>

            <p className="mt-1 text-right text-[8px] text-white/70">
              10:30 PM
            </p>
          </div>
        </div>

        {/* Floating Chat Bubble 2 */}
        <div className="absolute left-[490px] top-[190px] z-20">
          <div className="rounded-[5px] bg-[#2488FF] px-2 py-1 shadow-xl">
            <div className="flex items-center gap-3">
              <p className="text-[10px] font-bold text-white">
                Miss You too
              </p>

              <span className="text-[10px]">
                ❤️
              </span>
            </div>

            <p className="mt-1 text-right text-[8px] text-white/70">
              10:30 PM
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex h-full items-center px-[50px]">
          <div
            className="
              flex
              h-[516px]
              w-[437px]
              flex-col
              justify-center
            "
          >
            {/* Heading */}
            <h2 className="text-[48px] font-bold leading-[54px] text-white">
              Some
              <br />

              <span className="font-bold text-[#4D91FF]">
                Conversations
              </span>

              <br />
              make distance
              <br />
              disappear.
            </h2>

            {/* Description */}
            <p className="mt-4 text-[16px] leading-[28px] text-white">
              Distance means nothing when real
              conversations come from the heart,
              connect or just be together.

              <span className="ml-2 inline-flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#8B5CF6] text-[10px]">
                💜
              </span>
            </p>

            {/* Button */}
            <button
              className="
                mt-8
                h-[55px]
                w-[231px]
                rounded-full
                border
                border-white
                text-[14px]
                font-medium
                text-white
                transition
                hover:bg-white
                hover:text-black
              "
            >
              Start connecting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}