"use client";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  return (
    <div className="h-full w-screen bg-[#1F4F6F]  ">
      <div>
        <Header referenceSobre={ref} />
        <About referenceSobre={ref} />
        <Footer />
      </div>
    </div>
  );
}
