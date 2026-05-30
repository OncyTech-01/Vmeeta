import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  return (
    <header className="flex justify-center px-[10px] pt-[27px]">
      <nav
        className="
    flex
    h-[54px]
    w-full
    max-w-[1349px]
    items-center
    rounded-[14px]
    bg-white
    px-[20px]
    shadow-md
  "
      >
        {/* Left Logo */}
        <div className="flex min-w-[140px] items-center">
          <Image
            src="/images/figma/vmeeta logo.png"
            alt="logo"
            width={120}
            height={40}
            className="h-[40px] w-auto object-contain"
            priority
          />
        </div>

        {/* Center Menu - Desktop */}
        <div className="hidden flex-1 justify-center md:flex">
          <ul className="flex items-center gap-[32px] text-[14px] font-medium text-black">
            <li>
              <a href="/" className="transition hover:text-[#3B82F6]">
                Home
              </a>
            </li>

            <li>
              <a href="/" className="transition hover:text-[#3B82F6]">
                Feature
              </a>
            </li>

            <li>
              <a href="/" className="transition hover:text-[#3B82F6]">
                About us
              </a>
            </li>

            <li>
              <a href="/" className="transition hover:text-[#3B82F6]">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Button - Desktop */}
        <div
          className="
      hidden
      md:inline-flex
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

        {/* Mobile Menu */}
        <button className="ml-auto block md:hidden">
          <HiMenuAlt3 className="text-[34px] text-black" />
        </button>
      </nav>
    </header>
  );
}