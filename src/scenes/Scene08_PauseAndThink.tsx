import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {PauseAndThink} from '../components/PauseAndThink';
import {SceneShell} from './sceneHelpers';

export const Scene08_PauseAndThink: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const card = spring({frame, fps, config: {damping: 180}});
  const reveal = frame > fps * 5;

  return (
    <SceneShell>
      {/* <Audio src={staticFile('narration/scene08.mp3')} /> */}
      <div style={{transform: `scale(${card})`, opacity: interpolate(frame, [0, 25], [0, 1], {extrapolateRight: 'clamp'})}}>
        <PauseAndThink
          questionEn="Severe perianal pain + fever + tachycardia, but minimal swelling. Can pain severity indicate a deep abscess?"
          questionAr="ألم شديد حول الشرج + حمّى + تسرّع قلب مع تورّم بسيط. هل شدة الألم قد تدل على خُرّاج عميق؟"
          answerEn={reveal ? 'Yes' : undefined}
          answerAr={reveal ? 'نعم' : undefined}
        />
      </div>
    </SceneShell>
  );
};
