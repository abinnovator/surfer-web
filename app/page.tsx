import Navbar from "@/components/Navbar";
import { AnimatedText } from "@/components/AnimatedText";
import Image from "next/image";
import { Bot, Code, SquareChartGantt, Star } from "lucide-react";

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
          <Image src={'https://cdn.hackclub.com/019dd2c7-6c22-7a2a-bed9-f5077d78f7e4/HeroImage.webp'} alt="Hero Image" width={1252} height={690} />
        </div>
        <section>
          <div className="bg-[#1A1A1A]">
            <div className="py-24 mt-10">
              <div className="px-24 py-10 border-b-2 border-[#3C3C3C] pb-30">
                <h1 className="text-5xl font-inter max-w-[1200px]">Agents Handle the small stuff so you can handle the things that are actually important.</h1>
                <p className="pt-2">You assign tasks to your agents and they handle the rest</p>
              </div>
            </div>
            <div className="flex flex-col py-10 px-24">
              <div className="flex justify-center items-center flex-col">
                <Bot width={150} height={150} />
                <h1 className="text-3xl font-inter">Orchestrator Agent</h1>
                <p className="max-w-[331px] text-center">Manages all the 3 sub agents and decides which agents to use.</p>
              </div>
              <div className="flex flex-row justify-between px-5 py-32">
                <div className="flex flex-col justify-center items-center bg-[#49494f] p-10 rounded-2xl">
                  <SquareChartGantt width={80} height={80} />
                  <h1 className="text-3xl font-inter">Planning Agent</h1>
                  <p className="max-w-[331px] text-center">Plans out the task given to surfer by the user.</p>
                </div>
                <div className="flex flex-col justify-center items-center bg-[#49494f] p-10 rounded-2xl">
                  <Code width={80} height={80} />
                  <h1 className="text-3xl font-inter">Coding Agent</h1>
                  <p className="max-w-[331px] text-center">Plans out the task given to surfer by the user.</p>
                </div>
                <div className="flex flex-col justify-center items-center bg-[#49494f] p-10 rounded-2xl">
                  <Star width={80} height={80} />
                  <h1 className="text-3xl font-inter">Review Agent</h1>
                  <p className="max-w-[331px] text-center">Reviews the code written by the code agent</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}