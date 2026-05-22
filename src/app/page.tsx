import Navbar from "@/components/common/Navbar";

import Hero from "@/components/home/Hero";
import MyDay from "@/components/home/MyDay";
import ChatVC from "@/components/home/ChatVC";
import Posts from "@/components/home/Posts";
import Vibes from "@/components/home/Vibes";
import Forum from "@/components/home/Forum";
import Live from "@/components/home/Live";
import Download from "@/components/home/Download";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main className="bg-[#F8F7F5]">

      <Navbar />

      <Hero />
      <MyDay />
      <ChatVC />
      <Posts />
      <Vibes />
      <Forum />
      <Live />
      <Download />
      <Footer />

    </main>
  );
}
