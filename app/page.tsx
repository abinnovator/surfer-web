import Navbar from "@/components/Navbar";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedText } from "@/components/AnimatedText";

export default function Home() {
  return (
    <div className="bg-[#15120B] h-screen font-space text-white">
      <Navbar />
      <AnimatedSection delay={0.2} direction="up">
        <div className="flex flex-col py-24 gap-14 px-20">
          <div className="gap-5 flex flex-col">
            {/* Animated heading */}
            <AnimatedText
              text="THE EXTENSION FOR SOLO DEVS AND INDIE TEAMS"
              className="font-bold text-5xl max-w-5xl"
            />
            {/* Animated sub‑heading */}
            <AnimatedText
              text="Building with surfer is the best way to build apps solo or with a small team"
              className="text-2xl max-w-[596px]"
            />
          </div>
          <Image src={'/HeroImage.png'} alt="Hero Image" width={1252} height={690} />
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.4} direction="up">
        <div className="m-24 bg-[#211B14] rounded-2xl items-center justify-center flex">
          {/* Animated tagline */}
          <AnimatedText
            text="Agents Handle the small stuff so you can handle the things that are actually important."
            className="text-5xl p-40 text-center max-w-7xl"
          />
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.6} direction="up">
        <div className="flex flex-row px-20">
          {/* Example of additional animated text */}
          
        </div>
      </AnimatedSection>
    </div>
  );
}
