import Navbar from "@/components/Navbar";
import { AnimatedText } from "@/components/AnimatedText";
import Image from "next/image";
import { Bot, Code, SquareChartGantt, Star } from "lucide-react";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-space text-white relative bg-black">
      {/* Background Image Layer */}
      <div 
        className="fixed top-0 left-0 w-full h-1/2 -z-10 bg-cover bg-center bg-no-repeat"
        
      />

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        
        <div className="flex flex-col py-24 gap-14 px-48">
          <div className="gap-5 flex flex-col">
            <p
              className="max-w-[775px] text-5xl" 
            >The extension for solo devs and indie teams</p>
            <p className="text-[#BDA396] max-w-[596px] text-xl">Surfer adds two AI-powered panels to VS Code — a smart chat assistant with file access, and a multi-agent task system that plans, codes, and reviews for you. No API keys needed.</p>
          </div>
          <div className="flex flex-row gap-4">
            <Link href={'https://open-vsx.org/extension/Abinnovator/surfer'} target='_blank'><Button className="bg-[#3EE7BF]"><span className="px-3.5 py-2.5 cursor-pointer">Download</span></Button></Link>

            <Link href={'https://surfer.aaditbhambri.com'}><Button className="bg-[#3EE7BF]"><span className="px-3.5 py-2.5 cursor-pointer">Web</span></Button></Link>

          </div>
        </div>
        
        <div className="flex px-28 py-4">
          <div className="pl-6 flex bg-[#3EE7BF] rounded-3xl w-full h-full">
            <Image src={'https://cdn.hackclub.com/019e3b97-7d57-77b1-b6de-1e06fa13bacb/Screenshot%202026-05-18%20151915.png'} alt="Hero Image" width={1006} height={573} className="rounded-[30px] py-5"/>
          </div>
        </div>
        
        {/* <section>
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
        </section> */}
        
      </div>
    </div>
  );
}