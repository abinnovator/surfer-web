import React from 'react';

export type TestimonialCardProps = {
  /** URL of the avatar image */
  avatarSrc: string;
  /** Quote text */
  quote: string;
  /** Author name */
  author: string;
};

/**
 * Simple testimonial card showing an avatar, quote and author.
 */
export const TestimonialCard: React.FC<TestimonialCardProps> = ({ avatarSrc, quote, author }) => (
  <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-subtle">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={avatarSrc} alt={author} className="w-16 h-16 rounded-full mb-4" />
    <p className="text-center italic text-muted mb-2">\"{quote}\"</p>
    <span className="text-primary font-semibold">{author}</span>
  </div>
);
