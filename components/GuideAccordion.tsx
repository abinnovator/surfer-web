"use client";
import React, { useState } from "react";
import { GuideStep } from "./GuideStep";
import { GuideStepData } from "@/data/guideSteps";

interface GuideAccordionProps {
  steps: GuideStepData[];
}

export const GuideAccordion: React.FC<GuideAccordionProps> = ({ steps }) => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {steps.map((step) => (
        <details
          key={step.id}
          open={openId === step.id}
          onToggle={(e) => setOpenId((e.currentTarget as HTMLDetailsElement).open ? step.id : null)}
          className="border border-[#333] rounded-lg p-4 bg-[#1A1A1A]"
        >
          <summary className="flex items-center cursor-pointer text-lg font-medium text-white">
            {step.title}
          </summary>
          <div className="mt-3">
            <GuideStep step={step} />
          </div>
        </details>
      ))}
    </div>
  );
};
