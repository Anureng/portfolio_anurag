import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import TimeLine from "@/components/TimeLine";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import About1 from "@/components/About1";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About1 />
      {/* <About /> */}
      <TimeLine />
      <Projects />
      <Contact />
    </div>
  );
}
