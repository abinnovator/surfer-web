import Navbar from "@/components/Navbar";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GuideStep } from "@/components/GuideStep";
import { guideSteps } from "@/data/guideSteps";

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-[#15120B] font-space text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="py-20 text-center bg-[#0F0A04]">
        <h1 className="text-5xl font-bold mb-4">Getting Started with Surfer</h1>
        <p className="text-xl max-w-2xl mx-auto">Follow these step‑by‑step instructions to set up the Surfer extension and integrate it into your Next.js project.</p>
      </section>

      {/* Steps */}
      <section className="max-w-5xl mx-auto py-12 space-y-8">
        {guideSteps.map((step, idx) => (
          <AnimatedSection key={step.id} delay={idx * 0.1} direction="up">
            <GuideStep step={step} />
          </AnimatedSection>
        ))}
      </section>
    </div>
  );
}
