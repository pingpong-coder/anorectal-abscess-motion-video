import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {BilingualText} from '../components/BilingualText';
import {MemoryAnchor} from '../components/MemoryAnchor';
import {SceneShell} from './sceneHelpers';

const steps = [
  {en: '1. Recognize the pain', ar: '١. تعرّف على الألم'},
  {en: '2. Assess the patient', ar: '٢. قيّم المريض'},
  {en: '3. Look for systemic signs', ar: '٣. ابحث عن العلامات الجهازية'},
  {en: '4. Think about depth', ar: '٤. فكّر في العمق'},
  {en: '5. Drain the abscess', ar: '٥. صرّف الخُرّاج'},
  {en: '6. Monitor and care', ar: '٦. راقب وقدّم الرعاية'},
];

export const Scene14_EndScreen: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SceneShell>
      {/* <Audio src={staticFile('narration/scene14.mp3')} /> */}
      <BilingualText en="Think Beyond the Surface" ar="فكّر أبعد من السطح" enSize={48} arSize={42} />
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 16}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
          {steps.map((step, i) => (
            <div key={step.en} style={{opacity: interpolate(frame, [i * 10, i * 10 + 14], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
              <BilingualText en={step.en} ar={step.ar} enSize={24} arSize={22} />
            </div>
          ))}
          <div style={{marginTop: 14}}>
            <MemoryAnchor en="Anorectal Abscess → Assess → Recognize → Escalate → Drain → Reassess" ar="خُرّاج شرجي مستقيمي ← قيّم ← تعرّف ← صعّد ← صرّف ← أعد التقييم" />
          </div>
        </div>
        <div style={{background: 'rgba(255,255,255,0.08)', borderRadius: 16, padding: 18}}>
          <BilingualText
            en="Final student question: If findings are minimal but pain is severe with fever and tachycardia, what clinical finding would you never ignore? Why?"
            ar="سؤال نهائي: إذا كانت العلامات الخارجية بسيطة لكن الألم شديد مع حمّى وتسرّع قلب، ما العلامة السريرية التي لن تتجاهلها؟ ولماذا؟"
            enSize={25}
            arSize={23}
          />
        </div>
      </div>
    </SceneShell>
  );
};
