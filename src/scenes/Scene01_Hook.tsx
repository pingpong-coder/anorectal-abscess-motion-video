import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {BilingualText} from '../components/BilingualText';
import {TitleCard} from '../components/TitleCard';
import {SceneShell} from './sceneHelpers';

export const Scene01_Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const enter = spring({frame, fps, config: {damping: 140}});
  const exit = interpolate(frame, [durationInFrames - 20, durationInFrames], [1, 0], {extrapolateLeft: 'clamp'});

  return (
    <SceneShell>
      {/* <Audio src={staticFile('narration/scene01.mp3')} /> */}
      <div style={{display: 'flex', gap: 40, flex: 1, alignItems: 'center', opacity: enter * exit}}>
        <div style={{flex: 1, transform: `translateY(${interpolate(frame, [0, 25], [40, 0])}px)`}}>
          <TitleCard
            en="Severe pain… but nothing obvious on the surface."
            ar="ألم شديد… لكن لا شيء واضح على السطح."
            subtitleEn="Look deeper for hidden anorectal infection"
            subtitleAr="ابحث أعمق عن عدوى شرجية مستقيمية خفية"
          />
        </div>
        <div style={{flex: 1, position: 'relative', height: 460}}>
          <div style={{position: 'absolute', bottom: 80, left: 80, width: 300, height: 40, background: '#475569', borderRadius: 8}} />
          <div style={{position: 'absolute', bottom: 120, left: 120, width: 30, height: 180, background: '#475569'}} />
          <div style={{position: 'absolute', bottom: 250, left: 170, width: 80, height: 80, borderRadius: 999, background: '#f8fafc'}} />
          <div style={{position: 'absolute', bottom: 150, left: 150, width: 140, height: 90, borderRadius: 30, background: '#cbd5e1', transform: 'rotate(18deg)'}} />
          <div style={{position: 'absolute', bottom: 110, left: 210, fontSize: 64}}>⚠️</div>
          <div style={{position: 'absolute', bottom: 0, left: 70, width: 320}}>
            <BilingualText en="Patient cannot sit due to pain" ar="المريض غير قادر على الجلوس بسبب الألم" enSize={24} arSize={22} />
          </div>
        </div>
      </div>
    </SceneShell>
  );
};
