import React from 'react';
import {BilingualText} from './BilingualText';
import {theme} from '../theme';

export const IconLabel: React.FC<{icon: string; en: string; ar: string; alert?: boolean}> = ({
  icon,
  en,
  ar,
  alert = false,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 14px',
        borderRadius: 12,
        background: 'rgba(255,255,255,0.08)',
        border: `1px solid ${alert ? theme.colors.alert : 'rgba(255,255,255,0.2)'}`,
      }}
    >
      <div style={{fontSize: 30}}>{icon}</div>
      <BilingualText en={en} ar={ar} enSize={24} arSize={22} />
    </div>
  );
};
