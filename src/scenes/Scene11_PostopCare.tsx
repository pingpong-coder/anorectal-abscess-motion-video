import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {BilingualText} from '../components/BilingualText';
import {ChecklistItem} from '../components/ChecklistItem';
import {SceneShell} from './sceneHelpers';

const care = [
  {en: 'Pain control', ar: 'ضبط الألم'},
  {en: 'Wound care', ar: 'العناية بالجرح'},
  {en: 'Sitz bath', ar: 'حمّام المقعدة'},
  {en: 'Bowel management', ar: 'تنظيم الإخراج'},
  {en: 'Hygiene', ar: 'النظافة'},
  {en: 'Monitor for infection', ar: 'مراقبة العدوى'},
];

export const Scene11_PostopCare: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SceneShell>
      {/* <Audio src={staticFile('narration/scene11.mp3')} /> */}
      <BilingualText en="Postoperative Nursing Care" ar="رعاية التمريض بعد الإجراء" enSize={42} arSize={38} />
      <div style={{display: 'grid', gridTemplateColumns: '0.75fr 1.25fr', gap: 20, marginTop: 18}}>
        <div style={{fontSize: 220, textAlign: 'center'}}>🩺</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 9}}>
          {care.map((item, i) => (
            <div key={item.en} style={{opacity: interpolate(frame, [i * 10, i * 10 + 14], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
              <ChecklistItem en={item.en} ar={item.ar} />
            </div>
          ))}
        </div>
      </div>
    </SceneShell>
  );
};
