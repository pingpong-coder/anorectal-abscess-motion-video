import React from 'react';
import {theme} from '../theme';

export const BilingualText: React.FC<{
  en: string;
  ar: string;
  enSize?: number;
  arSize?: number;
  align?: 'left' | 'center';
}> = ({en, ar, enSize = 34, arSize = 32, align = 'left'}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 8, textAlign: align}}>
      <div style={{fontSize: enSize, color: theme.colors.text, fontWeight: 700}}>{en}</div>
      <div dir="rtl" lang="ar" style={{fontSize: arSize, color: theme.colors.muted, fontWeight: 700}}>
        {ar}
      </div>
    </div>
  );
};
