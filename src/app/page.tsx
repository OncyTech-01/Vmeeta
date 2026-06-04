import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import Hero from "@/components/home/Hero";
import MyDay from "@/components/home/MyDay";
import ChatVC from "@/components/home/ChatVC";
import Posts from "@/components/home/Posts";
import Vibes from "@/components/home/Vibes";
import Forum from "@/components/home/Forum";
import Live from "@/components/home/Live";
import Download from "@/components/home/Download";

import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="bg-[#F8F7F5]">
      <Navbar />

      {/* No animation */}
      <Hero />

      {/* Animated sections */}
      <ScrollReveal>
        <MyDay />
      </ScrollReveal>

      <ScrollReveal>
        <ChatVC />
      </ScrollReveal>

      <ScrollReveal>
        <Posts />
      </ScrollReveal>

      <ScrollReveal>
        <Vibes />
      </ScrollReveal>

      <ScrollReveal>
        <Forum />
      </ScrollReveal>

      <ScrollReveal>
        <Live />
      </ScrollReveal>

      <ScrollReveal>
        <Download />
      </ScrollReveal>

      {/* No animation */}
      <Footer />
    </main>
  );
}