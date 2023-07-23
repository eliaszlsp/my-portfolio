import { About } from "@/components/about";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="h-full w-screen bg-black">
      <div>
        <Header />
        <About />
      </div>
    </div>
  );
}
