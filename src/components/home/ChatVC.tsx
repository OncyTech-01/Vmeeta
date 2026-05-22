import Image from "next/image";

export default function ChatVC() {
  return (
    <section className="flex justify-center pt-[40px] px-[8px]">

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
          src="/images/figma/ChatVC2.png"
          alt="chat background"
          fill
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center px-[50px]">

          <div
            className="
              flex
              h-[516px]
              w-[437px]
              flex-col
              justify-center
              rounded-l-[14px]
              
            ">

            {/* Heading */}
            <h2 className="text-[48px] font-bold leading-[50px] text-white">

              Some
              <br />

              <span className="text-[#4D91FF]
              font-weight-[700]">
                Conversations
              </span>

              <br />

              make distance
              <br />
              disappear.

            </h2>

            {/* Description */}
            <p className="mt-3 text-[16px] leading-[20px] text-[#FFFFFF]">

              Distance means nothing when real
              conversations come from the heart,
              collect or just be together.

              <span className="ml-1 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#8B5CF6] text-[10px]">
                💜
              </span>

            </p>

            {/* Button */}
            <button
              className="
              mt-8
              w-[231px]
              h-[55px]
              rounded-full
              border
              border-white
              px-6
              py-3
              text-[14px]
              font-medium
              text-white
                
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