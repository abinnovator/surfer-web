"use client";
import React from "react";
import * as Icons from "lucide-react";
import { GuideStepData } from "@/data/guideSteps";

interface GuideStepProps {
  step: GuideStepData;
}

export const GuideStep: React.FC<GuideStepProps> = ({ step }) => {
  const IconComponent = (Icons as any)[step.icon] as React.ElementType;

  return (
    <section
      className="flex flex-col md:flex-row items-start gap-6 p-6 bg-[#1A1A1A] rounded-lg shadow-md"
      aria-labelledby={`step-title-${step.id}`}
    >
      {IconComponent && (
        <div className="flex-shrink-0" aria-hidden="true">
          <IconComponent className="w-12 h-12 text-[#E98663]" aria-label={step.title} />
        </div>
      )}
      <div className="flex-1">
        <h2 id={`step-title-${step.id}`} className="text-2xl font-bold text-white mb-2">
          {step.title}
        </h2>
        <p className="text-gray-300 mb-4">{step.description}</p>
        {step.code && (
          <pre className="bg-[#111] rounded p-4 overflow-x-auto text-sm text-gray-100">
            <code>{step.code}</code>
          </pre>
        )}
      </div>
    </section>
  );
};
