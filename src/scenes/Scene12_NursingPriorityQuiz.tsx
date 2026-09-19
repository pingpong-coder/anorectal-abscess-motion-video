import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {BilingualText} from '../components/BilingualText';
import {SceneShell} from './sceneHelpers';

const choices = [
  {letter: 'A', en: 'Ignore pain because swelling is minimal', ar: 'تجاهل الألم لأن التورّم بسيط'},
  {letter: 'B', en: 'Focus only on wound dressing', ar: 'التركيز فقط على تضميد الجرح'},
  {letter: 'C', en: 'Assess systemic status and escalate', ar: 'تقييم الحالة الجهازية والتصعيد'},
  {letter: 'D', en: 'Give antibiotics without assessment', ar: 'إعطاء مضاد حيوي دون تقييم'},
];

export const Scene12_NursingPriorityQuiz: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const reveal = frame > fps * 5;

  return (
    <SceneShell>
      {/* <Audio src={staticFile('narration/scene12.mp3')} /> */}
      <BilingualText en="Nursing Priority Quiz" ar="اختبار أولوية التمريض" enSize={44} arSize={40} />
      <div style={{display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20}}>
        {choices.map((choice, i) => {
          const show = interpolate(frame, [i * 8, i * 8 + 12], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
          const isCorrect = choice.letter === 'C' && reveal;
          return (
            <div
              key={choice.letter}
              style={{
                opacity: show,
                borderRadius: 14,
                padding: '12px 14px',
                background: isCorrect ? 'rgba(34,197,94,0.24)' : 'rgba(255,255,255,0.08)',
                border: `2px solid ${isCorrect ? '#22c55e' : 'rgba(255,255,255,0.15)'}`,
              }}
            >
              <BilingualText en={`${choice.letter}. ${choice.en}`} ar={`${choice.letter}. ${choice.ar}`} enSize={24} arSize={22} />
            </div>
          );
        })}
      </div>
    </SceneShell>
  );
};
