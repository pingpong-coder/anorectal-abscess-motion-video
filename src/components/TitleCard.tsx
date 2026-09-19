import React from 'react';
import {BilingualText} from './BilingualText';
import {theme} from '../theme';

export const TitleCard: React.FC<{
  en: string;
  ar: string;
  subtitleEn?: string;
  subtitleAr?: string;
}> = ({en, ar, subtitleEn, subtitleAr}) => {
  return (
    <div
      style={{
        background: theme.colors.panel,
        border: `2px solid ${theme.colors.accent}`,
        borderRadius: 24,
        padding: 28,
        backdropFilter: 'blur(4px)',
      }}
    >
      <BilingualText en={en} ar={ar} enSize={50} arSize={44} />
      {subtitleEn && subtitleAr ? (
        <div style={{marginTop: 20}}>
          <BilingualText en={subtitleEn} ar={subtitleAr} enSize={28} arSize={26} />
        </div>
      ) : null}
    </div>
  );
};
