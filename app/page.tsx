import Navbar from "@/components/Navbar";
import ScrollExpandHero from "@/components/ScrollExpandHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedText } from "@/components/AnimatedText";

export default function Home() {
  return (
    <div className="min-h-screen font-space text-white">
      <Navbar />
      <div className="flex flex-col py-24 gap-14 px-20 relative z-10">
        <div className="gap-5 flex flex-col">
          <AnimatedText
            text="THE EXTENSION FOR SOLO DEVS AND INDIE TEAMS"
            className="font-bold text-5xl max-w-[965px]"
          />
          <AnimatedText
            text="Building with surfer is the best way to build apps solo or with a small team"
            className="text-2xl max-w-[596px]"
          />
        </div>
      </div>
      <ScrollExpandHero />
      <div className="m-24 bg-[#211B14] rounded-2xl items-center justify-center flex">
        <AnimatedText
          text="Agents Handle the small stuff so you can handle the things that are actually important."
          className="text-5xl p-40 text-center max-w-7xl"
        />
      </div>
      <div className="flex flex-row px-20">
        {/* Example of additional animated text */}
        
      </div>
    </div>
  );
}
