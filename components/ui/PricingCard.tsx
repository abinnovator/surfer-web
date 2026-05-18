import React from 'react';

export type PricingCardProps = {
  /** Card title, e.g., "Pro" */
  title: string;
  /** Price string, e.g., "$9/mo" */
  price: string;
  /** List of feature strings */
  features: string[];
  /** Call‑to‑action button label */
  buttonText: string;
  /** Optional click handler */
  onButtonClick?: () => void;
};

/**
 * Pricing card component with title, price, feature list and CTA button.
 */
export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  buttonText,
  onButtonClick,
}) => (
  <div className="flex flex-col p-8 bg-card rounded-xl shadow-subtle">
    <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
    <p className="text-4xl font-extrabold text-primary mb-6">{price}</p>
    <ul className="flex-1 mb-6 space-y-2">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-center">
          <span className="w-3 h-3 bg-primary rounded-full mr-2" aria-hidden="true" />
          <span className="text-muted">{feature}</span>
        </li>
      ))}
    </ul>
    <button
      type="button"
      onClick={onButtonClick}
      className="mt-auto bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/80 transition"
    >
      {buttonText}
    </button>
  </div>
);
