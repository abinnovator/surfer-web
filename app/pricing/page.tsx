import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <div className="bg-[#15120B] min-h-screen text-white font-space">
      <Navbar />
      <div className="flex flex-col items-center py-20">
        <h1 className="text-5xl font-bold mb-12">Pricing</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full px-4">
          {/* Hobby Plan */}
          <div className="bg-[#211B14] rounded-2xl p-8 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Hobby</h2>
            <p className="text-4xl font-bold mb-6">Free</p>
            <ul className="mb-8 space-y-2 text-left">
              <li>Sidebar chat</li>
              <li>Normal tasks lists with agents</li>
            </ul>
            <Button className="bg-white text-[#15120B] font-medium py-2 px-6 rounded-full hover:bg-gray-200 transition">
              Get Started
            </Button>
          </div>
          {/* Pro Plan */}
          <div className="bg-[#211B14] rounded-2xl p-8 flex flex-col items-center border-2 border-white">
            <h2 className="text-2xl font-semibold mb-4">Pro</h2>
            <p className="text-4xl font-bold mb-6">$10<span className="text-base font-normal">/mo</span></p>
            <ul className="mb-8 space-y-2 text-left">
              <li>• All Hobby features</li>
              <li>• Priority support</li>
              <li>• Advanced integrations</li>
            </ul>
            <Button className="bg-white text-[#15120B] font-medium py-2 px-6 rounded-full hover:bg-gray-200 transition" disabled={true}>
              Coming soon
            </Button>
          </div>
          {/* Max Plan */}
          <div className="bg-[#211B14] rounded-2xl p-8 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Max</h2>
            <p className="text-4xl font-bold mb-6">$100<span className="text-base font-normal">/mo</span></p>
            <ul className="mb-8 space-y-2 text-left">
              <li>• All Pro features</li>
              <li>• Dedicated account manager</li>
              <li>• Custom solutions</li>
            </ul>
            <Button className="bg-white text-[#15120B] font-medium py-2 px-6 rounded-full hover:bg-gray-200 transition" disabled={true}>
              Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
