import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {BilingualText} from '../components/BilingualText';
import {ChecklistItem} from '../components/ChecklistItem';
import {SceneShell} from './sceneHelpers';

const items = [
  {en: 'Pain', ar: 'الألم'},
  {en: 'Vital signs', ar: 'العلامات الحيوية'},
  {en: 'Local inspection', ar: 'الفحص الموضعي'},
  {en: 'Palpation', ar: 'الجس'},
  {en: 'Systemic symptoms', ar: 'الأعراض الجهازية'},
  {en: 'Medical history', ar: 'التاريخ المرضي'},
];

export const Scene07_NursingAssessment: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <SceneShell>
      {/* <Audio src={staticFile('narration/scene07.mp3')} /> */}
      <BilingualText en="Think Like a Nurse" ar="فكّر كممرّض" enSize={44} arSize={40} />
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 24, marginTop: 22}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 240}}>👩‍⚕️</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          {items.map((item, i) => {
            const appear = spring({frame: frame - i * 6, fps, config: {damping: 160}});
            return (
              <div key={item.en} style={{opacity: appear}}>
                <ChecklistItem en={item.en} ar={item.ar} />
              </div>
            );
          })}
        </div>
      </div>
    </SceneShell>
  );
};
