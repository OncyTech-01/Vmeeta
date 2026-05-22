import Image from "next/image";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] xl:px-[55px] pb-[20px]">
  <div className="mx-auto w-full max-w-[1511px]">

    {/* Top Content */}
    <div className="flex items-start pb-[60px] justify-between gap-[40px]">

      {/* Left */}
      <div className="min-w-0 max-w-[340px]">

        <Image
          src="/images/figma/vmeeta logo.png"
          alt="Vmeeta logo"
          width={140}
          height={45}
          className="h-[45px] w-auto object-contain"
          priority
        />

        <p className="mt-2 text-[20px] leading-[32px] text-[#7A7A7A]">
          Experience real connection through
          stories, creators, and communities.
          Join millions on Vmeeta today.
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-col items-end shrink-0">

        {/* Links */}
        <div className="flex flex-wrap justify-end gap-[32px] text-[16px] font-medium text-[#111827]">
          <button>Features</button>
          <button>Privacy</button>
          <button>Terms</button>
          <button>Support</button>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex flex-wrap justify-end gap-2">
          <button className="flex h-[54px] w-[54px] items-center justify-center rounded-[16px] border border-[#E5E7EB] bg-white">
            <FaTwitter size={16} color="#6B7280" />
          </button>

          <button className="flex h-[54px] w-[54px] items-center justify-center rounded-[16px] border border-[#E5E7EB] bg-white">
            <FaFacebookF size={16} color="#6B7280" />
          </button>

          <button className="flex h-[54px] w-[54px] items-center justify-center rounded-[16px] border border-[#E5E7EB] bg-white">
            <FaInstagram size={16} color="#6B7280" />
          </button>

          <button className="flex h-[54px] w-[54px] items-center justify-center rounded-[16px] border border-[#E5E7EB] bg-white">
            <FaLinkedinIn size={16} color="#6B7280" />
          </button>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="my-10 border-t border-[#E5E7EB]" />

    {/* Bottom */}
    <div className="flex justify-between gap-8 text-[14px] text-[#9CA3AF]">

      <p>
        © 2026 Umeeta Inc. All rights reserved.
      </p>

      <div className="flex flex-wrap gap-8">
        <button>Cookie Policy</button>
        <button>Status</button>
      </div>
    </div>

  </div>
</footer>
  );
}