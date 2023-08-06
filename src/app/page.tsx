import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="h-full w-screen bg-[#1F4F6F]">
      <div>
        <Header />
        <About />
        <Footer />
      </div>
    </div>
  );
}
