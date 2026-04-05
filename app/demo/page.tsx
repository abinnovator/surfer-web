import Navbar from "@/components/Navbar";

export default function DemoPage() {
  return (
    <div className="bg-[#15120B] min-h-screen font-space text-white">
      <Navbar />
      <div className="flex justify-center items-center py-20">
        <video
          src="https://user-cdn.hackclub-assets.com/019d5ec4-e409-78ba-8017-73557a787553/Screen%20Recording%202026-04-05%20230424.mp4"
          controls
          className="max-w-4xl rounded-lg shadow-lg"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
