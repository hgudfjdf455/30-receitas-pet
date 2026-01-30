
// Added React import to define React.ReactNode namespace
import React from 'react';

declare global {
  interface Window {
    fbq: any;
  }
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  text: string;
  image: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}