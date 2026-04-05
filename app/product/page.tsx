import Navbar from "@/components/Navbar";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedText } from "@/components/AnimatedText";

export default function Product() {
  return (
    <div className="bg-[#15120B] min-h-screen font-space text-white">
      <Navbar />
      <AnimatedSection delay={0.2} direction="up">
        <div className="flex flex-col items-center py-24 px-8 gap-12">
          <AnimatedText
            text="The ultimate VS Code extension for solo devs and indie teams"
            className="text-5xl font-bold text-center max-w-4xl"
          />
          {/* Replaced static paragraph with AnimatedText for animation */}
          <AnimatedText
            text="Surfer adds a powerful AI‑driven chat interface and a task panel that lets you assign AI tasks directly from VS Code."
            className="text-xl max-w-2xl text-center"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.4} direction="up">
        <div className="flex flex-col md:flex-row justify-center gap-8 px-8 mb-16">
          {/* Chat Sidebar Card */}
          <AnimatedSection delay={0.5} direction="up">
            <div className="bg-[#211B14] rounded-2xl p-8 flex-1 max-w-md">
              <h2 className="text-3xl font-semibold mb-4">AI Chat Sidebar</h2>
              <p className="mb-4">
                A persistent chat pane inside VS Code where you can talk to Groq AI (or any compatible model). Ask questions, get code suggestions, or brainstorm ideas without leaving your editor.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Instant code snippets</li>
                <li>Explain errors & fixes</li>
                <li>Generate documentation</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Task Panel Card */}
          <AnimatedSection delay={0.6} direction="up">
            <div className="bg-[#211B14] rounded-2xl p-8 flex-1 max-w-md">
              <h2 className="text-3xl font-semibold mb-4">AI Task Panel</h2>
              <p className="mb-4">
                Create tasks for the AI to handle. The panel tracks progress, lets you review results, and integrates directly with your workspace.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Generate boilerplate code</li>
                <li>Run automated refactors</li>
                <li>Summarize files & PRs</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </div>
  );
}
