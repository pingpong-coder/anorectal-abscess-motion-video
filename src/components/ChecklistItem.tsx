import React from 'react';
import {BilingualText} from './BilingualText';
import {theme} from '../theme';

export const ChecklistItem: React.FC<{en: string; ar: string; active?: boolean}> = ({en, ar, active = true}) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: 14,
        alignItems: 'center',
        padding: '10px 14px',
        borderRadius: 12,
        background: 'rgba(255,255,255,0.06)',
        border: `1px solid ${active ? theme.colors.accent : 'rgba(255,255,255,0.2)'}`,
      }}
    >
      <div style={{fontSize: 24, color: active ? theme.colors.good : theme.colors.text}}>☑</div>
      <BilingualText en={en} ar={ar} enSize={26} arSize={24} />
    </div>
  );
};
