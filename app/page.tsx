import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#15120B] h-screen font-space text-white">
      <Navbar />
      <div className="flex flex-col py-24 gap-14 px-20">
        <div className="gap-5 flex flex-col  ">
          <h1 className="font-bold text-5xl max-w-5xl ">THE EXTENSION FOR SOLO DEVS AND INDIE TEAMS</h1>
          <p className="text-2xl max-w-[596px]">Building with surfer is the best way to build apps solo or with a small team</p>
        </div>
        <Image src={'/HeroImage.png'} alt="Hero Image" width={1252} height={690} />
      </div>
      <div className="m-24 bg-[#211B14] rounded-2xl items-center justify-center flex">
        <h1 className="text-5xl py-52 px-52 text-center max-w-4xl">Agents Handle the small stuff so you can handle the things that are actually important</h1>
      </div>
    </div>
  );
}
