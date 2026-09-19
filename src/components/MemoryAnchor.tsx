import React from 'react';
import {theme} from '../theme';

export const MemoryAnchor: React.FC<{en: string; ar: string}> = ({en, ar}) => {
  return (
    <div
      style={{
        borderRadius: 18,
        border: `2px dashed ${theme.colors.accent}`,
        background: 'rgba(45,212,191,0.12)',
        padding: '16px 20px',
      }}
    >
      <div style={{fontSize: 32, fontWeight: 800, color: theme.colors.accent}}>{en}</div>
      <div dir="rtl" lang="ar" style={{fontSize: 28, fontWeight: 800, color: theme.colors.text}}>
        {ar}
      </div>
    </div>
  );
};
