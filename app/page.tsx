import Navbar from "@/components/Navbar";
import { AnimatedText } from "@/components/AnimatedText";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-space text-white relative">
      {/* Background Image Layer */}
      <div 
        className="fixed top-0 left-0 w-full h-1/2 -z-10 bg-[url('/MaskGroup.png')] bg-cover bg-center bg-no-repeat"
        
      />

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        
        <div className="flex flex-col py-24 gap-14 px-48">
          <div className="gap-5 flex flex-col">
            <AnimatedText 
              text="THE EXTENSION FOR SOLO DEVS AND INDIE TEAMS" 
              className="font-bold text-5xl max-w-[775px]" 
            />
            <AnimatedText 
              text="Building with surfer is the best way to build apps solo or with a small team" 
              className="text-2xl max-w-[596px]" 
            />
          </div>
        </div>

        <div className="justify-center flex items-center">
          <Image src={'/HeroImage.png'} alt="Hero Image" width={1252} height={690} />
        </div>

        <div className="m-24 bg-[#211B14] rounded-2xl items-center justify-center flex">
          <AnimatedText 
            text="Agents Handle the small stuff so you can handle the things that are actually important." 
            className="text-5xl p-40 text-center max-w-7xl" 
          />
        </div>
      </div>
    </div>
  );
}