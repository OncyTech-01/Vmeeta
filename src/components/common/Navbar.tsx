"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-center px-[10px] pt-[27px]">
      <nav
        className="
    relative
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
        <button
          className="ml-auto block md:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <HiMenuAlt3 className="text-[34px] text-black" />
        </button>
        {/* Overlay */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className={`
    fixed inset-0 z-40 bg-black/30
    transition-all duration-300 md:hidden
    ${isMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
            }
  `}
        />

        {/* Right Drawer */}
        <div
          className={`
    fixed top-0 right-0 z-50
    h-screen w-[280px]
    bg-white
    shadow-2xl
    transition-transform duration-300 ease-in-out
    md:hidden
    ${isMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
            }
  `}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b px-5 py-4">
            <h3 className="text-[15px] font-semibold">
              Menu
            </h3>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-bold"
            >
              ✕
            </button>
          </div>

          {/* Menu */}
          <div className="p-4">
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="block rounded-xl bg-gray-100 px-4 py-3"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="block rounded-xl bg-gray-100 px-4 py-3"
                >
                  Feature
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="block rounded-xl bg-gray-100 px-4 py-3"
                >
                  About us
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="block rounded-xl bg-gray-100 px-4 py-3"
                >
                  Contact us
                </a>
              </li>
            </ul>

            <button
              className="
        mt-5
        w-full
        rounded-xl
        bg-[#2D79F5]
        py-3
        text-white
        font-medium
      "
            >
              Download App
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}