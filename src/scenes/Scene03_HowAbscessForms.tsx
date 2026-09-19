import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {BilingualText} from '../components/BilingualText';
import {MemoryAnchor} from '../components/MemoryAnchor';
import {SceneShell} from './sceneHelpers';

const steps = [
  {en: 'Anal gland obstruction', ar: 'انسداد الغدة الشرجية'},
  {en: 'Bacterial proliferation', ar: 'تكاثر بكتيري'},
  {en: 'Pus accumulation', ar: 'تجمّع القيح'},
  {en: 'Abscess', ar: 'خُرّاج'},
];

export const Scene03_HowAbscessForms: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <SceneShell>
      {/* <Audio src={staticFile('narration/scene03.mp3')} /> */}
      <BilingualText en="How an anorectal abscess forms" ar="كيف يتكوّن الخُرّاج الشرجي المستقيمي" enSize={42} arSize={38} />
      <div style={{display: 'flex', gap: 16, marginTop: 30, alignItems: 'center'}}>
        {steps.map((step, idx) => {
          const appear = spring({frame: frame - idx * 14, fps, config: {damping: 170}});
          return (
            <React.Fragment key={step.en}>
              <div
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: 14,
                  padding: 14,
                  transform: `translateY(${interpolate(appear, [0, 1], [28, 0])}px)`,
                  opacity: appear,
                }}
              >
                <BilingualText en={step.en} ar={step.ar} enSize={22} arSize={20} align="center" />
              </div>
              {idx < steps.length - 1 ? (
                <div aria-hidden style={{fontSize: 30}}>
                  →
                </div>
              ) : null}
            </React.Fragment>
          );
        })}
      </div>
      <div style={{marginTop: 34, maxWidth: 760}}>
        <MemoryAnchor en="PUS + PRESSURE = PAIN" ar="قيح + ضغط = ألم" />
      </div>
    </SceneShell>
  );
};
