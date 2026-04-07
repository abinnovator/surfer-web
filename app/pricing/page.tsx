import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedText } from "@/components/AnimatedText";

export default function Pricing() {
  return (
    <div className="min-h-screen text-white font-space">
      <Navbar />
      {/* Animated heading */}
      <AnimatedSection delay={0.1} direction="up" className="pt-10 flex justify-center items-center">
        <AnimatedText className="text-5xl font-bold mb-12 text-center pt-20" text="Pricing" />

      </AnimatedSection>
      {/* Animated grid container */}
      <AnimatedSection delay={0.2} direction="up">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full px-4">
            {/* Hobby Plan */}
            <AnimatedSection delay={0.1} direction="up">
              <div className="bg-[#1c1c1c] rounded-2xl p-8 flex flex-col items-center">
                <AnimatedSection delay={0.05} direction="up">
                  <h2 className="text-2xl font-semibold mb-4">Hobby</h2>
                </AnimatedSection>
                <AnimatedSection delay={0.1} direction="up">
                  <p className="text-4xl font-bold mb-6">Free</p>
                </AnimatedSection>
                <AnimatedSection delay={0.15} direction="up">
                  <ul className="mb-8 space-y-2 text-left">
                    <li>Sidebar chat</li>
                    <li>Normal tasks lists with agents</li>
                  </ul>
                </AnimatedSection>
                <AnimatedSection delay={0.2} direction="up">
                  <Button className="bg-white text-[#15120B] font-medium py-2 px-6 rounded-full hover:bg-gray-200 transition">
                    Get Started
                  </Button>
                </AnimatedSection>
              </div>
            </AnimatedSection>
            {/* Pro Plan */}
            <AnimatedSection delay={0.2} direction="up">
              <div className="bg-[#1c1c1c] rounded-2xl p-8 flex flex-col items-center border-2 border-white">
                <AnimatedSection delay={0.05} direction="up">
                  <h2 className="text-2xl font-semibold mb-4">Pro</h2>
                </AnimatedSection>
                <AnimatedSection delay={0.1} direction="up">
                  <p className="text-4xl font-bold mb-6">$10<span className="text-base font-normal">/mo</span></p>
                </AnimatedSection>
                <AnimatedSection delay={0.15} direction="up">
                  <ul className="mb-8 space-y-2 text-left">
                    <li>• All Hobby features</li>
                    <li>• Priority support</li>
                    <li>• Advanced integrations</li>
                  </ul>
                </AnimatedSection>
                <AnimatedSection delay={0.2} direction="up">
                  <Button className="bg-white text-[#15120B] font-medium py-2 px-6 rounded-full hover:bg-gray-200 transition" disabled={true}>
                    Coming soon
                  </Button>
                </AnimatedSection>
              </div>
            </AnimatedSection>
            {/* Max Plan */}
            <AnimatedSection delay={0.3} direction="up">
              <div className="bg-[#1c1c1c] rounded-2xl p-8 flex flex-col items-center">
                <AnimatedSection delay={0.05} direction="up">
                  <h2 className="text-2xl font-semibold mb-4">Max</h2>
                </AnimatedSection>
                <AnimatedSection delay={0.1} direction="up">
                  <p className="text-4xl font-bold mb-6">$100<span className="text-base font-normal">/mo</span></p>
                </AnimatedSection>
                <AnimatedSection delay={0.15} direction="up">
                  <ul className="mb-8 space-y-2 text-left">
                    <li>• All Pro features</li>
                    <li>• Dedicated account manager</li>
                    <li>• Custom solutions</li>
                  </ul>
                </AnimatedSection>
                <AnimatedSection delay={0.2} direction="up">
                  <Button className="bg-white text-[#15120B] font-medium py-2 px-6 rounded-full hover:bg-gray-200 transition" disabled={true}>
                    Coming Soon
                  </Button>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
