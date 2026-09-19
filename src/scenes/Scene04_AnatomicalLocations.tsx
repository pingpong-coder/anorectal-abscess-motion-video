import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {BilingualText} from '../components/BilingualText';
import {SceneShell} from './sceneHelpers';

const locations = [
  {en: 'Perianal Abscess', ar: 'خُرّاج حول الشرج', top: 300, left: 860},
  {en: 'Ischioanal Abscess', ar: 'خُرّاج إسكي شرجي', top: 220, left: 860},
  {en: 'Intersphincteric Abscess', ar: 'خُرّاج بين المصرّتين', top: 140, left: 860},
  {en: 'Supralevator Abscess', ar: 'خُرّاج فوق الرافعة', top: 60, left: 860},
];

export const Scene04_AnatomicalLocations: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SceneShell>
      {/* <Audio src={staticFile('narration/scene04.mp3')} /> */}
      <BilingualText en="Anatomical locations" ar="المواضع التشريحية" enSize={44} arSize={40} />
      <div style={{position: 'relative', flex: 1, marginTop: 20}}>
        <svg
          width="680"
          height="430"
          viewBox="0 0 680 430"
          role="img"
          aria-labelledby="anatomy-title anatomy-desc"
          style={{position: 'absolute', left: 80, top: 20}}
        >
          <title id="anatomy-title">Anorectal abscess anatomical sites</title>
          <desc id="anatomy-desc">
            Illustration of perianal, ischioanal, intersphincteric, and supralevator abscess locations in the anorectal region.
          </desc>
          <ellipse cx="280" cy="200" rx="170" ry="180" fill="#1e3a8a" opacity="0.5" />
          <rect x="250" y="120" width="60" height="180" rx="30" fill="#60a5fa" />
          <circle cx="280" cy="300" r="24" fill="#ef4444" />
          <circle cx="230" cy="240" r="18" fill="#f97316" />
          <circle cx="330" cy="205" r="16" fill="#fb7185" />
          <circle cx="280" cy="120" r="14" fill="#facc15" />
        </svg>
        {locations.map((loc, i) => {
          const visible = interpolate(frame, [i * 35, i * 35 + 20], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
          return (
            <div key={loc.en} style={{position: 'absolute', top: loc.top, left: loc.left, width: 360, opacity: visible}}>
              <BilingualText en={loc.en} ar={loc.ar} enSize={28} arSize={26} />
            </div>
          );
        })}
      </div>
    </SceneShell>
  );
};
