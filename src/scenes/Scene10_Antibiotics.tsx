import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {BilingualText} from '../components/BilingualText';
import {SceneShell} from './sceneHelpers';

export const Scene10_Antibiotics: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const left = spring({frame: frame - 4, fps, config: {damping: 180}});
  const right = spring({frame: frame - 15, fps, config: {damping: 180}});

  return (
    <SceneShell>
      {/* <Audio src={staticFile('narration/scene10.mp3')} /> */}
      <BilingualText en="Drainage vs Antibiotics" ar="التصريف مقابل المضادات" enSize={42} arSize={38} />
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 28}}>
        <div style={{padding: 22, borderRadius: 18, border: '2px solid #2dd4bf', background: 'rgba(45,212,191,0.14)', transform: `scale(${left})`}}>
          <BilingualText en="Drainage → Primary treatment" ar="التصريف ← العلاج الأساسي" enSize={30} arSize={28} />
        </div>
        <div style={{padding: 22, borderRadius: 18, border: '2px solid #f97316', background: 'rgba(249,115,22,0.16)', transform: `scale(${right})`}}>
          <BilingualText en="Antibiotics → Selected high-risk/systemic cases" ar="المضادات ← حالات مختارة عالية الخطورة/عدوى جهازية" enSize={30} arSize={28} />
        </div>
      </div>
    </SceneShell>
  );
};
