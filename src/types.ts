import { LucideIcon } from 'lucide-react';

export interface StepData {
  text: string;
  image?: string;
  icon?: LucideIcon;
}

export interface SectionTheme {
  bgClass: string;
  textColor: string;
  accentColor: string;
  effectType: 'glitch' | 'matrix-terminal' | 'vintage-noise' | 'dust-particles' | 'flashlight';
}

export interface SectionData {
  id: string;
  title: string;
  hook: string;
  steps: StepData[];
  icon: LucideIcon;
  imageUrl?: string;
  theme: SectionTheme;
}