import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {BilingualText} from '../components/BilingualText';
import {SceneShell} from './sceneHelpers';

const flow = [
  {en: 'Abscess', ar: 'خُرّاج'},
  {en: 'Severe infection', ar: 'عدوى شديدة'},
  {en: 'Sepsis', ar: 'إنتان'},
  {en: "Fournier's gangrene", ar: 'غرغرينا فورنييه'},
];

export const Scene06_DangerousComplication: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SceneShell>
      {/* <Audio src={staticFile('narration/scene06.mp3')} /> */}
      <BilingualText en="Dangerous Complication" ar="مضاعفة خطيرة" enSize={44} arSize={40} />
      <div style={{display: 'flex', flexDirection: 'column', gap: 10, marginTop: 30, maxWidth: 760}}>
        {flow.map((item, index) => {
          const alpha = interpolate(frame, [index * 30, index * 30 + 20], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
          return (
            <React.Fragment key={item.en}>
              <div style={{border: '1px solid rgba(239,68,68,0.8)', borderRadius: 14, padding: 12, background: 'rgba(239,68,68,0.15)', opacity: alpha}}>
                <BilingualText en={item.en} ar={item.ar} enSize={24} arSize={22} align="center" />
              </div>
              {index < flow.length - 1 ? (
                <div aria-hidden style={{fontSize: 30, color: '#ef4444', textAlign: 'center'}}>
                  ↓
                </div>
              ) : null}
            </React.Fragment>
          );
        })}
      </div>
    </SceneShell>
  );
};
