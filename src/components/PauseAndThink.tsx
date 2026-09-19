import React from 'react';
import {BilingualText} from './BilingualText';
import {theme} from '../theme';

export const PauseAndThink: React.FC<{
  questionEn: string;
  questionAr: string;
  answerEn?: string;
  answerAr?: string;
}> = ({questionEn, questionAr, answerEn, answerAr}) => {
  return (
    <div
      style={{
        width: '100%',
        borderRadius: 24,
        border: `2px solid ${theme.colors.accent}`,
        background: 'rgba(8,47,73,0.6)',
        padding: 30,
      }}
    >
      <div style={{fontSize: 52, fontWeight: 900, color: theme.colors.accent}}>PAUSE & THINK</div>
      <div dir="rtl" lang="ar" style={{fontSize: 34, fontWeight: 800, color: theme.colors.text, marginTop: 4}}>
        توقّف وفكّر
      </div>
      <div style={{marginTop: 18}}>
        <BilingualText en={questionEn} ar={questionAr} enSize={30} arSize={28} />
      </div>
      {answerEn && answerAr ? (
        <div style={{marginTop: 22, color: theme.colors.good}}>
          <BilingualText en={`Answer: ${answerEn}`} ar={`الإجابة: ${answerAr}`} enSize={30} arSize={28} />
        </div>
      ) : null}
    </div>
  );
};
