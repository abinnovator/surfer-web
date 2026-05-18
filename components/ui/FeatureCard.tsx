import React from 'react';
import type { LucideIcon } from 'lucide-react';

export type FeatureCardProps = {
  /** Icon component from lucide-react */
  icon: LucideIcon;
  /** Short title of the feature */
  title: string;
  /** Description text */
  description: string;
};

/**
 * Simple feature card used across the site.
 * It displays an icon, a title and a short description.
 */
export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-subtle text-center">
    <Icon className="w-12 h-12 text-primary mb-4" aria-hidden="true" />
    <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
    <p className="text-muted">{description}</p>
  </div>
);
