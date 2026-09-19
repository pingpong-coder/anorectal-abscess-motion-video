import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {BilingualText} from '../components/BilingualText';
import {SceneShell} from './sceneHelpers';

export const Scene13_FinalClinicalPearl: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const opacity = interpolate(frame, [10, 35, durationInFrames - 20, durationInFrames], [0, 1, 1, 0], {extrapolateLeft: 'clamp'});

  return (
    <SceneShell>
      {/* <Audio src={staticFile('narration/scene13.mp3')} /> */}
      <div style={{background: 'rgba(2,6,23,0.78)', borderRadius: 20, padding: 32, maxWidth: 980, margin: 'auto', opacity}}>
        <BilingualText en="Don't let a small external finding fool you." ar="لا تدع مظهرًا خارجيًا بسيطًا يخدعك." enSize={48} arSize={42} align="center" />
        <div style={{marginTop: 24}}>
          <BilingualText en="Severe pain + systemic signs = think deeper." ar="ألم شديد + علامات جهازية = فكّر بعمق." enSize={34} arSize={30} align="center" />
        </div>
      </div>
    </SceneShell>
  );
};
