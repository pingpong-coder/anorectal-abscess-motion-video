import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {BilingualText} from '../components/BilingualText';
import {SceneShell} from './sceneHelpers';

export const Scene09_IncisionAndDrainage: React.FC = () => {
  const frame = useCurrentFrame();
  const drain = interpolate(frame, [20, 80], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <SceneShell>
      {/* <Audio src={staticFile('narration/scene09.mp3')} /> */}
      <BilingualText en="Definitive treatment" ar="العلاج الحاسم" enSize={42} arSize={38} />
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, marginTop: 28}}>
        <div style={{fontSize: 56, fontWeight: 900, color: '#2dd4bf'}}>INCISION & DRAINAGE</div>
        <div style={{position: 'relative', height: 320}}>
          <div style={{position: 'absolute', top: 40, left: 80, width: 220, height: 170, borderRadius: 90, background: '#fca5a5'}} />
          <div style={{position: 'absolute', top: 115, left: 160, width: 6, height: 90, background: '#f8fafc', transform: 'rotate(20deg)'}} />
          <div style={{position: 'absolute', top: 180 + drain * 40, left: 190, width: 26, height: 34, borderRadius: 20, background: '#f59e0b', opacity: drain}} />
        </div>
      </div>
      <div style={{marginTop: 20}}>
        <BilingualText en="Drain the pus collection" ar="يجب تصريف تجمع القيح" enSize={30} arSize={28} />
      </div>
    </SceneShell>
  );
};
