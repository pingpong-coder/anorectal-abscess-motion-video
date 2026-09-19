import {loadFont} from '@remotion/google-fonts/Cairo';

const {fontFamily} = loadFont();

export const theme = {
  colors: {
    bgStart: '#082f49',
    bgEnd: '#0f172a',
    panel: 'rgba(255,255,255,0.1)',
    text: '#e2e8f0',
    muted: '#93c5fd',
    accent: '#2dd4bf',
    alert: '#ef4444',
    good: '#22c55e',
  },
  fonts: {
    sans: fontFamily,
  },
  spacing: {
    md: 18,
    lg: 28,
  },
};
