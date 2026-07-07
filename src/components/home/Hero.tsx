// 'use client';

// import Image from "next/image";
// import { FaRegEye, FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="flex justify-center px-2 pt-4 sm:px-4 md:px-5 lg:px-[10px] lg:pt-[50px]">
//       <div
//         className="
//           relative
//           w-full
//           max-w-[420px]
//           min-h-[278.4px]

//           sm:max-w-full
//           sm:h-[720px]

//           md:h-[800px]
//           lg:max-w-[1370px]
//           lg:min-h-[919px]

//           overflow-hidden
//           rounded-[20px]
//           md:rounded-[30px]
//           lg:rounded-[40px]
//           border
//           border-[#E5E5E5]
//         "
//       >
//         {/* Mobile Image */}
//         <Image
//           src="/images/figma/Hero-mobile.png"
//           alt="Hero Mobile"
//           fill
//           priority
//           sizes="100vw"
//           className="absolute inset-0 z-0 block object-cover object-top md:hidden"
//         />

//         {/* Desktop Image */}
//         <Image
//           src="/images/figma/Hero.png"
//           alt="Hero"
//           fill
//           priority
//           sizes="100vw"
//           className="absolute inset-0 z-0 hidden object-cover object-center md:block"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/0" />

//         {/* Content */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             x: -80,
//           }}
//           whileInView={{
//             opacity: 1,
//             x: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.2,
//           }}
//           transition={{
//             duration: 1,
//             ease: "easeOut",
//           }}
//           className="
//     absolute
//     left-3
//     top-3
//     w-[58%]
//     max-w-[190px]

//     sm:left-5
//     sm:top-5
//     sm:max-w-[280px]

//     md:left-8
//     md:top-8
//     md:max-w-[360px]

//     lg:left-[45px]
//     lg:top-[40px]
//     lg:max-w-[420px]
//   "
//         >
//           {/* Top Badges */}
//           <div className="mb-2 flex items-center gap-1 md:mb-6">
//             {/* Live Badge */}
//             <div
//   className="
//     flex
//     h-[22px]
//     w-[50px]
//     items-center
//     justify-center
//     gap-[9px]
//     lg:gap-[15px]
//     rounded-[6px]
//     bg-[#FF2B2B]

//     sm:h-[36px]
//     sm:w-[85px]

//     md:h-[40px]
//     md:w-[100px]

//     lg:h-[46px]
//     lg:w-[139px]
//     lg:rounded-[12px]
//   "
// >
//   {/* Live Circle */}
//   <motion.div
//     animate={{
//       scale: [1, 1.4, 1],
//       opacity: [1, 0.5, 1],
//     }}
//     transition={{
//       duration: 1,
//       repeat: Infinity,
//       ease: "easeInOut",
//     }}
//     className="
//       h-[6px]
//       w-[6px]
//       rounded-full
//       bg-white

//       sm:h-[8px]
//       sm:w-[8px]

//       lg:h-[10px]
//       lg:w-[10px]
//     "
//   />

//   <span
//     className="
//       text-[10px]
//       font-medium
//       text-white

//       sm:text-[16px]
//       md:text-[20px]
//       lg:text-[32px]
//     "
//   >
//     Live
//   </span>
// </div>

//             {/* Views */}
//             <div
//               className="
//                 flex
//                 h-[22px]
//                 w-[45px]
//                 items-center
//                 justify-center
//                 gap-[2px]
//                 rounded-[6px]
//                 bg-[#5B5B5B]/70
//                 px-1
//                 backdrop-blur-md

//                 sm:h-[36px]
//                 sm:w-[70px]

//                 md:h-[40px]
//                 md:w-[80px]

//                 lg:h-[46px]
//                 lg:w-[88px]
//                 lg:rounded-[12px]
//               "
//             >
//               <FaRegEye className="text-[8px] text-white lg:text-[14px]" />
//               <span className="text-[8px] text-white sm:text-[12px] lg:text-[14px]">
//                 1.2k
//               </span>
//             </div>
//           </div>

//           {/* Heading */}
//           <h1
//             className="
//               font-semibold
//               text-black

//               text-[22px]
//               leading-[22px]

//               sm:text-[34px]
//               sm:leading-[36px]

//               md:text-[50px]
//               md:leading-[52px]

//               lg:text-[72px]
//               lg:leading-[78px]
//             "
//           >
//             Feel closer
//             <br />
//             wherever
//             <br />
//             <span
//               className="
//                 text-[#007DCB]

//                 text-[28px]

//                 sm:text-[44px]
//                 md:text-[58px]
//                 lg:text-[80px]
//               "
//             >
//               you are.
//             </span>
//           </h1>

//           {/* Description */}
//           <p
//             className="
//               mt-1
//               max-w-[155px]
//               text-[9px]
//               leading-[12px]
//               text-[#2B2B2B]

//               sm:max-w-[260px]
//               sm:text-[14px]
//               sm:leading-[20px]

//               md:mt-5
//               md:max-w-[320px]
//               md:text-[16px]
//               md:leading-[24px]

//               lg:mt-6
//               lg:max-w-[320px]
//               lg:text-[20px]
//               lg:leading-[30px]
//             "
//           >
//             Because the best connections aren’t just messages…
//             they’re moments, emotions, and people who truly
//             understand you.
//           </p>

//           {/* Buttons */}
//           <div
//             className="
//               mt-2
//               flex
//               gap-1
//               justify-start

//               sm:gap-3
//               md:mt-6
//               lg:mt-8
//             "
//           >
//             {/* Download Button */}
//             <button
//               className="
//                 flex
//                 h-[24px]
//                 items-center
//                 gap-1
//                 rounded-full
//                 bg-[linear-gradient(180deg,#669FFF_0%,#0049BF_100%)]
//                 px-2
//                 text-[7px]
//                 font-medium
//                 text-white
//                 shadow-[0px_0px_25px_rgba(45,124,255,0.35)]

//                 sm:h-[40px]
//                 sm:px-4
//                 sm:text-[12px]

//                 lg:h-[44px]
//                 lg:text-[13px]
//               "
//             >
//               Download App

//               <span
//                 className="
//                   flex
//                   h-[14px]
//                   w-[14px]
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-white

//                   sm:h-[20px]
//                   sm:w-[20px]

//                   lg:h-[22px]
//                   lg:w-[22px]
//                 "
//               >
//                 <FaArrowRight className="text-[7px] text-[#2D7CFF] lg:text-[10px]" />
//               </span>
//             </button>

//             {/* Get Started */}
//             <button
//               className="
//                 flex
//                 h-[24px]
//                 w-[88px]
//                 items-center
//                 justify-between
//                 rounded-full
//                 bg-white
//                 px-2
//                 text-[7px]
//                 font-semibold
//                 text-black
//                 shadow-md

//                 sm:h-[40px]
//                 sm:w-[145px]
//                 sm:text-[12px]

//                 md:w-[150px]

//                 lg:h-[50px]
//                 lg:w-[175px]
//                 lg:px-[36px]
//                 lg:text-[13px]
//               "
//             >
//               <span className="whitespace-nowrap">
//                 Get Started
//               </span>

//               <span
//                 className="
//                   flex
//                   h-[14px]
//                   w-[14px]
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-[#F4F7FF]

//                   sm:h-[20px]
//                   sm:w-[20px]

//                   lg:h-[28px]
//                   lg:w-[28px]
//                 "
//               >
//                 <FaArrowRight className="text-[7px] text-[#2D79F5] lg:text-[10px]" />
//               </span>
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


'use client';

import Image from "next/image";
import { FaRegEye, FaArrowRight, FaHeart, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const comments = [
  {
    id: 1,
    name: "Emily",
    text: "This day was exactly what I needed 🌟",
    time: "20 min ago",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 2,
    name: "Sofia",
    text: "Sunshine, friends, and good vibes ❤️",
    time: "5 min ago",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 3,
    name: "Henry",
    text: "We need more weekends like this 😄",
    time: "2 min ago",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

const hearts = [
  { size: 16, left: "45%", bottom: "82%", delay: 0 },
  { size: 22, left: "5%", bottom: "68%", delay: 0.35 },
  { size: 18, left: "55%", bottom: "58%", delay: 0.7 },
  { size: 26, left: "15%", bottom: "44%", delay: 1.05 },
  { size: 30, left: "45%", bottom: "28%", delay: 1.4 },
  { size: 40, left: "5%", bottom: "8%", delay: 1.75 },
  { size: 52, left: "35%", bottom: "-14%", delay: 2.1 },
];

function FloatingHearts() {
  return (
    <div
      className="
        block
        absolute
        right-[50px]
        bottom-[60px]
        h-[220px]
        w-[70px]

        sm:right-[60px]
        sm:bottom-[80px]
        sm:h-[300px]
        sm:w-[90px]

        md:right-[70px]
        md:bottom-[90px]
        md:h-[360px]
        md:w-[110px]

        lg:right-[90px]
        lg:bottom-[100px]
        lg:h-[440px]
        lg:w-[140px]

        pointer-events-none
        z-20
      "
    >
      {hearts.map((h, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [-10, -60, -120, -180],
            x: [0, 6, -4, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: h.delay,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{ left: h.left, bottom: h.bottom }}
        >
          <FaHeart
            className="text-[#FF2B4C] drop-shadow-md"
            style={{ fontSize: h.size }}
          />
        </motion.div>
      ))}
    </div>
  );
}

function CommentsWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      className="
        block
        absolute
        right-3
        bottom-[24px]
        w-[150px]

        sm:right-4
        sm:bottom-[42px]
        sm:w-[200px]

        md:right-12
        md:bottom-[70px]
        md:w-[320px]

        lg:right-[80px]
        lg:bottom-[90px]
        lg:w-[400px]

        z-10
      "
    >
      {/* Comment rows */}
      <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2">
        {comments.map((c) => (
          <div
            key={c.id}
            className="
              flex
              items-center
              gap-1
              rounded-full

              py-[1px]
              pl-[2px]
              pr-2

              sm:gap-2
              sm:py-1
              sm:pl-1
              sm:pr-3

              md:py-1
              md:pr-4
            "
          >
            {/* Avatar */}
            <img
              src={c.avatar}
              alt={c.name}
              className="
                shrink-0
                rounded-full
                object-cover
                ring-2
                ring-white/80

                h-[20px]
                w-[20px]

                sm:h-[32px]
                sm:w-[32px]

                md:h-[38px]
                md:w-[38px]

                lg:h-[49px]
                lg:w-[49px]
              "
            />

            {/* Text */}
            <div className="flex min-w-0 flex-1 flex-col leading-tight sm:flex-row sm:items-baseline sm:gap-1">
              <span
                className="
                  shrink-0
                  font-weight:500
                  text-white
                  drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]

                  text-[9px]
                  sm:text-[9px]
                  md:text-[12px]
                  lg:text-[15px]
                "
              >
                {c.name} -
              </span>
              <span
                className="
                  truncate
                  font-medium
                  text-white
                  drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]

                  text-[8px]
                  sm:text-[6px]
                  md:text-[8px]
                  lg:text-[10px]
                "
              >
                {c.text}
              </span>
            </div>

            {/* Time */}
            <span
              className="
                shrink-0
                whitespace-nowrap
                font-medium
                text-white/80
                drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]

                text-[6px]
                sm:text-[10px]
                md:text-[11px]
                lg:text-[12px]
              "
            >
              {c.time}
            </span>
          </div>
        ))}
      </div>

      {/* Add a comment input */}
      <div
        className="
          relative
          mt-1.5
          flex
          items-center
          justify-between
          rounded-full
          bg-[#3B3B3B]/60
          backdrop-blur-md

          h-[22px]
          px-2.5

          sm:h-[34px]
          sm:mt-3
          sm:px-4

          md:h-[38px]

          lg:h-[44px]
          lg:mt-4
        "
      >
        <span
          className="
            text-white/70

            text-[8px]
            sm:text-[12px]
            md:text-[13px]
            lg:text-[15px]
          "
        >
          Add a comment...
        </span>

        <span
          className="
            flex
            items-center
            justify-center
            rounded-full
            bg-white/90

            h-[14px]
            w-[14px]

            sm:h-[22px]
            sm:w-[22px]

            md:h-[24px]
            md:w-[24px]

            lg:h-[30px]
            lg:w-[30px]
          "
        >
          <FaPaperPlane className="text-[5px] text-[#2D79F5] sm:text-[9px] lg:text-[11px]" />
        </span>


      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="flex justify-center px-2 pt-4 sm:px-4 md:px-5 lg:px-[10px] lg:pt-[50px]">
      <div
        className="
          relative
          w-full
          max-w-[420px]
          min-h-[278.4px]

          sm:max-w-full
          sm:h-[720px]

          md:h-[800px]
          lg:max-w-[1370px]
          lg:min-h-[919px]

          overflow-hidden
          rounded-[20px]
          md:rounded-[30px]
          lg:rounded-[40px]
          border
          border-[#E5E5E5]
        "
      >
        {/* Mobile Image */}
        <Image
          src="/images/figma/hero-mobile2.png"
          alt="Hero Mobile"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 z-0 block object-cover object-top md:hidden"
        />

        {/* Desktop Image */}
        <Image
          src="/images/figma/hero-mobile2.png"
          alt="Hero"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 z-0 hidden object-cover object-center md:block"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0" />

        {/* Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="
    absolute
    left-3
    top-3
    w-[58%]
    max-w-[190px]

    sm:left-5
    sm:top-5
    sm:max-w-[280px]

    md:left-8
    md:top-8
    md:max-w-[360px]

    lg:left-[45px]
    lg:top-[40px]
    lg:max-w-[420px]
  "
        >
          {/* Top Badges */}
          <div className="mb-2 flex items-center gap-1 md:mb-6">
            {/* Live Badge */}
            <div
              className="
    flex
    h-[22px]
    w-[50px]
    items-center
    justify-center
    gap-[9px]
    lg:gap-[15px]
    rounded-[6px]
    bg-[#FF2B2B]

    sm:h-[36px]
    sm:w-[85px]

    md:h-[40px]
    md:w-[100px]

    lg:h-[46px]
    lg:w-[139px]
    lg:rounded-[12px]
  "
            >
              {/* Live Circle */}
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
      h-[6px]
      w-[6px]
      rounded-full
      bg-white

      sm:h-[8px]
      sm:w-[8px]

      lg:h-[10px]
      lg:w-[10px]
    "
              />

              <span
                className="
      text-[10px]
      font-medium
      text-white

      sm:text-[16px]
      md:text-[20px]
      lg:text-[32px]
    "
              >
                Live
              </span>
            </div>

            {/* Views */}
            <div
              className="
                flex
                h-[22px]
                w-[45px]
                items-center
                justify-center
                gap-[2px]
                rounded-[6px]
                bg-[#5B5B5B]/70
                px-1
                backdrop-blur-md

                sm:h-[36px]
                sm:w-[70px]

                md:h-[40px]
                md:w-[80px]

                lg:h-[46px]
                lg:w-[88px]
                lg:rounded-[12px]
              "
            >
              <FaRegEye className="text-[8px] text-white lg:text-[14px]" />
              <span className="text-[8px] text-white sm:text-[12px] lg:text-[14px]">
                1.2k
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1
            className="
              font-semibold
              text-black

              text-[22px]
              leading-[22px]

              sm:text-[34px]
              sm:leading-[36px]

              md:text-[50px]
              md:leading-[52px]

              lg:text-[72px]
              lg:leading-[78px]
            "
          >
            Feel closer
            <br />
            wherever
            <br />
            <span
              className="
                text-[#007DCB]

                text-[28px]

                sm:text-[44px]
                md:text-[58px]
                lg:text-[80px]
              "
            >
              you are.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-1
              max-w-[155px]
              text-[9px]
              leading-[12px]
              text-[#2B2B2B]

              sm:max-w-[260px]
              sm:text-[14px]
              sm:leading-[20px]

              md:mt-5
              md:max-w-[320px]
              md:text-[16px]
              md:leading-[24px]

              lg:mt-6
              lg:max-w-[320px]
              lg:text-[20px]
              lg:leading-[30px]
            "
          >
            Because the best connections aren’t just messages…
            they’re moments, emotions, and people who truly
            understand you.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-2
              flex
              gap-1
              justify-start

              sm:gap-3
              md:mt-6
              lg:mt-8
            "
          >
            {/* Download Button */}
            <button
              className="
                flex
                h-[24px]
                items-center
                gap-1
                rounded-full
                bg-[linear-gradient(180deg,#669FFF_0%,#0049BF_100%)]
                px-2
                text-[7px]
                font-medium
                text-white
                shadow-[0px_0px_25px_rgba(45,124,255,0.35)]

                sm:h-[40px]
                sm:px-4
                sm:text-[12px]

                lg:h-[44px]
                lg:text-[13px]
              "
            >
              Download App

              <span
                className="
                  flex
                  h-[14px]
                  w-[14px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white

                  sm:h-[20px]
                  sm:w-[20px]

                  lg:h-[22px]
                  lg:w-[22px]
                "
              >
                <FaArrowRight className="text-[7px] text-[#2D7CFF] lg:text-[10px]" />
              </span>
            </button>

            {/* Get Started */}
            <button
              className="
                flex
                h-[24px]
                w-[88px]
                items-center
                justify-between
                rounded-full
                bg-white
                px-2
                text-[7px]
                font-semibold
                text-black
                shadow-md

                sm:h-[40px]
                sm:w-[145px]
                sm:text-[12px]

                md:w-[150px]

                lg:h-[50px]
                lg:w-[175px]
                lg:px-[36px]
                lg:text-[13px]
              "
            >
              <span className="whitespace-nowrap">
                Get Started
              </span>

              <span
                className="
                  flex
                  h-[14px]
                  w-[14px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F4F7FF]

                  sm:h-[20px]
                  sm:w-[20px]

                  lg:h-[28px]
                  lg:w-[28px]
                "
              >
                <FaArrowRight className="text-[7px] text-[#2D79F5] lg:text-[10px]" />
              </span>
            </button>
          </div>
        </motion.div>

        {/* Comments stack (bottom right) */}
        <CommentsWidget />

        {/* Floating hearts (right edge) */}
        <FloatingHearts />
      </div>
    </section>
  );
}