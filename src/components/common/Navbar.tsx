import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Navbar() {
  return (
    <header className="flex justify-center px-[10px] pt-[27px]">

      <nav
        className="
          flex
          h-[54px]
          w-[1349px]
          items-center
          justify-between
          rounded-[14px]
          bg-white
          px-[20px]
          shadow-md
        "
      >

        {/* Left Logo */}
        {/* Left Logo */}
        <div className="flex items-center min-w-[140px]">

          <Image
            src="/images/figma/vmeeta logo.png"
            alt="logo"
            width={120}
            height={40}
            className="h-[40px] w-auto object-contain"
            priority
          />

        </div>

        {/* Center Menu */}
        <ul className="flex items-center gap-[32px] text-[14px] font-medium text-black">

          <li className="cursor-pointer hover:text-[#3B82F6] transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-[#3B82F6] transition">
            Feature
          </li>

          <li className="cursor-pointer hover:text-[#3B82F6] transition">
            About us
          </li>

          <li className="cursor-pointer hover:text-[#3B82F6] transition">
            Contact us
          </li>

        </ul>

        {/* Download Button */}
        <div
          className="
            inline-flex
            rounded-full
            bg-[linear-gradient(180deg,#4F8FF7_0%,#2D79F5_100%)]
            p-[1.5px]
            shadow-[0px_0px_25px_rgba(45,121,245,0.35)]
          "
        >
          <button
            className="
              flex
              h-[38px]
              items-center
              gap-[10px]
              rounded-full
              bg-[linear-gradient(180deg,#669FFF_0%,#0051D6_100%)]
              px-[22px]
              text-[14px]
              font-medium
              text-white
              shadow-md
              transition
              hover:scale-103
            "
          >
            Download App

            <span
              className="
              flex
              h-[22px]
              w-[22px]
              items-center
              justify-center
              rounded-full
              bg-[#F4F7FF]
            "
            >
              <FaArrowRight className="text-[10px] text-[#2D79F5]" />
            </span>
          </button>
        </div>

      </nav>

    </header>
  );
}