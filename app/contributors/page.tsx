import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Contributors() {
  return (
    <div className="min-h-screen font-space text-white" style={{ backgroundColor: "#1a1a1a" }}>
      <Navbar />
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold mb-4">Contributors</h1>
        <p className="max-w-2xl text-center">
          Thank you to everyone who has contributed to the Surfer project. Your effort and support make this possible.
        </p>
        {/* Placeholder for contributor list or images */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example contributor card */}
          <div className="bg-[#2a2a2a] p-6 rounded-lg text-center">
            <Image src="/placeholder-avatar.png" alt="Contributor" width={100} height={100} className="mx-auto rounded-full" />
            <h2 className="mt-4 text-xl font-semibold">Contributor Name</h2>
            <p className="mt-2 text-sm">Role or description</p>
          </div>
          {/* Add more contributor cards as needed */}
        </div>
      </div>
    </div>
  );
}
