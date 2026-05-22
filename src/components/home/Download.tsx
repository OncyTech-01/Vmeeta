import Image from "next/image";

export default function Download() {
  return (
    <section className="flex justify-center pt-[48px] pb-[80px]">
      <div
        className="
          relative
          
          h-[887px]
          w-[1511px]
          overflow-hidden
        "
      >

        {/* Background Image */}
        <Image
          src="/images/figma/Download1.png"
          alt="download"
          fill
          className="object-cover w-full
        "
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#00193D]/5" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center px-[60px]">

          <div className="max-w-[520px]">

            {/* Heading */}
            <h2 className="text-[90px] font-medium leading-[90px] text-white">

              The world is
              <br />

              <span className="bg-[linear-gradient(180deg,#75A9FF_0%,#639BF5_100%)] bg-clip-text text-transparent">
                waiting.
              </span>

            </h2>

            {/* Description */}
            <p className="mt-6 text-[18px] leading-[32px] text-[#D1D5DB]">

              Real people. Real conversations.
              <br />
              Real connections.

            </p>

            {/* CTA Button */}
            <button
              className="
                mt-8
                h-[92px]
                w-[416px]
                rounded-[14px]
                bg-[linear-gradient(180deg,#0851C7_0%,#3A81F4_100%)]
                px-8
                py-4
                text-[23px]
                font-bold
                text-white
                transition
                hover:opacity-90
              "
            >
              Join Vmeeta Now
            </button>

            {/* App Buttons */}
            <div className="mt-8 pt-[15px] flex gap-6">

              <Image
                src="/images/figma/badge-google-play 1.png"
                alt="google play"
                width={190}
                height={57}
              />

              <Image
                src="/images/figma/badge-app-store 1.png"
                alt="app store"
                width={190}
                height={60}
              />

            </div>

          </div>
        </div>

        {/* Top Right Image */}
        <div className="absolute right-[40px] top-[40px] z-20">

          <Image
            src="/images/figma/Download2.png"
            alt="badge"
            width={220}
            height={70}
            className="object-contain"
          />

        </div>

      </div>
    </section>
  );
}