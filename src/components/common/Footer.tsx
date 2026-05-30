import Image from "next/image";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] px-[28px] xl:px-[55px] pb-[20px] pt-[35px]">
      <div className="mx-auto w-full max-w-[1511px]">

        {/* Top Content */}
        <div
          className="
            flex flex-col
            items-start
            gap-[30px]
            pb-[45px]

            lg:flex-row
            lg:items-start
            lg:justify-between
            lg:gap-[40px]
            lg:pb-[60px]
          "
        >
          {/* Left */}
          <div className="min-w-0 max-w-[420px]">
            <Image
              src="/images/figma/vmeeta logo.png"
              alt="Vmeeta logo"
              width={220}
              height={60}
              className="
                h-[38px]
                w-auto
                object-contain

                lg:h-[45px]
              "
              priority
            />

            <p
              className="
                mt-3
                text-[16px]
                leading-[30px]
                text-[#6B7280]

                lg:text-[20px]
                lg:leading-[32px]
              "
            >
              Experience real connection through
              stories, creators, and communities.
              Join millions on Vmeeta today.
            </p>
          </div>

          {/* Right */}
          <div
            className="
              flex flex-col
              items-start
              shrink-0

              lg:items-end
            "
          >
            {/* Social Icons */}
            <div
              className="
                mt-2
                flex
                gap-4

                lg:mt-8
                lg:justify-end
              "
            >
              {[
                FaTwitter,
                FaFacebookF,
                FaInstagram,
                FaLinkedinIn,
              ].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="
                    flex
                    h-[42px]
                    w-[42px]
                    items-center
                    justify-center
                    rounded-[12px]
                    border
                    border-[#E5E7EB]
                    bg-white
                    shadow-md
                    transition
                    hover:bg-gray-100

                    lg:h-[54px]
                    lg:w-[54px]
                    lg:rounded-[16px]
                  "
                >
                  <Icon size={18} color="#4B5563" />
                </Link>
              ))}
            </div>

            {/* Navigation Links */}
            <div
              className="
                mt-[28px]
                flex
                flex-col
                gap-[22px]

                text-[16px]
                font-semibold
                text-[#4B5563]

                lg:mt-8
                lg:flex-row
                lg:flex-wrap
                lg:justify-end
                lg:gap-[32px]
                lg:text-[#111827]
              "
            >
              <Link href="#" className="transition hover:text-[#2D79F5]">
                Features
              </Link>

              <Link href="#" className="transition hover:text-[#2D79F5]">
                Privacy
              </Link>

              <Link href="#" className="transition hover:text-[#2D79F5]">
                Terms
              </Link>

              <Link href="#" className="transition hover:text-[#2D79F5]">
                Support
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 lg:my-10 border-t border-[#E5E7EB]" />

        {/* Bottom */}
        <div
          className="
            flex flex-col
            items-start
            gap-4

            text-[14px]
            text-[#9CA3AF]

            lg:flex-row
            lg:justify-between
          "
        >
          <p>
            © 2026 Umeeta Inc. All rights reserved.
          </p>

          <div className="flex gap-5 lg:gap-8">
            <Link href="/cookie-policy">
              <button className="cursor-pointer hover:text-blue-500 transition">
                Cookie Policy
              </button>
            </Link>

            <Link href="/status">
              <button className="cursor-pointer hover:text-blue-500 transition">
                Status
              </button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}