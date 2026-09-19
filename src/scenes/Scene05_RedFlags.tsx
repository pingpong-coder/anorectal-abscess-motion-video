import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {IconLabel} from '../components/IconLabel';
import {BilingualText} from '../components/BilingualText';
import {SceneShell} from './sceneHelpers';

const flags = [
  {en: 'Severe pain', ar: 'ألم شديد'},
  {en: 'Fever', ar: 'حمّى'},
  {en: 'Tachycardia', ar: 'تسرّع قلب'},
  {en: 'Deep tenderness', ar: 'إيلام عميق'},
  {en: 'Systemic symptoms', ar: 'أعراض جهازية'},
];

export const Scene05_RedFlags: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <SceneShell>
      {/* <Audio src={staticFile('narration/scene05.mp3')} /> */}
      <BilingualText en="Red Flags" ar="علامات الخطر" enSize={46} arSize={42} />
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 24, maxWidth: 980}}>
        {flags.map((flag, i) => {
          const appear = spring({frame: frame - i * 7, fps, config: {damping: 170}});
          return (
            <div key={flag.en} style={{transform: `scale(${appear})`, transformOrigin: 'left center'}}>
              <IconLabel icon="🚨" en={flag.en} ar={flag.ar} alert />
            </div>
          );
        })}
      </div>
    </SceneShell>
  );
};
