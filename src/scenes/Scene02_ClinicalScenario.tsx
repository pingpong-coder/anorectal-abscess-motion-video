import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {IconLabel} from '../components/IconLabel';
import {TitleCard} from '../components/TitleCard';
import {SceneShell} from './sceneHelpers';

export const Scene02_ClinicalScenario: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const cardEnter = spring({frame, fps, config: {damping: 200}});
  const opacity = interpolate(frame, [durationInFrames - 25, durationInFrames], [1, 0], {extrapolateLeft: 'clamp'});

  return (
    <SceneShell>
      {/* <Audio src={staticFile('narration/scene02.mp3')} /> */}
      <div style={{display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 28, opacity}}>
        <div style={{transform: `scale(${cardEnter})`}}>
          <TitleCard en="Clinical Scenario" ar="الحالة السريرية" subtitleEn="Male • Severe perianal pain • Fever • Tachycardia" subtitleAr="ذكر • ألم حول الشرج شديد • حمّى • تسرّع قلب" />
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 14, transform: `translateX(${interpolate(frame, [0, 30], [70, 0])}px)`}}>
          <IconLabel icon="🌡️" en="Fever" ar="حمّى" />
          <IconLabel icon="❤️" en="Tachycardia" ar="تسرّع قلب" />
          <IconLabel icon="🤕" en="Local tenderness" ar="إيلام موضعي" />
          <IconLabel icon="🔴" en="Possible erythema/swelling" ar="احمرار/تورّم محتمل" />
        </div>
      </div>
    </SceneShell>
  );
};
