/* eslint-disable @remotion/valid-composition-and-folder-name */
import './index.css';
import React from 'react';
import {AbsoluteFill, Composition, Sequence} from 'remotion';
import {Scene01_Hook} from './scenes/Scene01_Hook';
import {Scene02_ClinicalScenario} from './scenes/Scene02_ClinicalScenario';
import {Scene03_HowAbscessForms} from './scenes/Scene03_HowAbscessForms';
import {Scene04_AnatomicalLocations} from './scenes/Scene04_AnatomicalLocations';
import {Scene05_RedFlags} from './scenes/Scene05_RedFlags';
import {Scene06_DangerousComplication} from './scenes/Scene06_DangerousComplication';
import {Scene07_NursingAssessment} from './scenes/Scene07_NursingAssessment';
import {Scene08_PauseAndThink} from './scenes/Scene08_PauseAndThink';
import {Scene09_IncisionAndDrainage} from './scenes/Scene09_IncisionAndDrainage';
import {Scene10_Antibiotics} from './scenes/Scene10_Antibiotics';
import {Scene11_PostopCare} from './scenes/Scene11_PostopCare';
import {Scene12_NursingPriorityQuiz} from './scenes/Scene12_NursingPriorityQuiz';
import {Scene13_FinalClinicalPearl} from './scenes/Scene13_FinalClinicalPearl';
import {Scene14_EndScreen} from './scenes/Scene14_EndScreen';

const dims = {width: 1920, height: 1080, fps: 30};

const sceneDurations = {
  Scene01_Hook: 270,
  Scene02_ClinicalScenario: 300,
  Scene03_HowAbscessForms: 300,
  Scene04_AnatomicalLocations: 360,
  Scene05_RedFlags: 270,
  Scene06_DangerousComplication: 300,
  Scene07_NursingAssessment: 360,
  Scene08_PauseAndThink: 270,
  Scene09_IncisionAndDrainage: 270,
  Scene10_Antibiotics: 270,
  Scene11_PostopCare: 360,
  Scene12_NursingPriorityQuiz: 300,
  Scene13_FinalClinicalPearl: 270,
  Scene14_EndScreen: 360,
} as const;

const totalDuration = Object.values(sceneDurations).reduce((acc, frames) => acc + frames, 0);

const FullVideo: React.FC = () => {
  const ordered = [
    Scene01_Hook,
    Scene02_ClinicalScenario,
    Scene03_HowAbscessForms,
    Scene04_AnatomicalLocations,
    Scene05_RedFlags,
    Scene06_DangerousComplication,
    Scene07_NursingAssessment,
    Scene08_PauseAndThink,
    Scene09_IncisionAndDrainage,
    Scene10_Antibiotics,
    Scene11_PostopCare,
    Scene12_NursingPriorityQuiz,
    Scene13_FinalClinicalPearl,
    Scene14_EndScreen,
  ];

  const durations = Object.values(sceneDurations);
  let cursor = 0;

  return (
    <AbsoluteFill>
      {ordered.map((SceneComp, index) => {
        const startFrom = cursor;
        cursor += durations[index];
        return (
          <Sequence key={index} from={startFrom} durationInFrames={durations[index]}>
            <SceneComp />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition id="Scene01_Hook" component={Scene01_Hook} durationInFrames={sceneDurations.Scene01_Hook} {...dims} />
      <Composition id="Scene02_ClinicalScenario" component={Scene02_ClinicalScenario} durationInFrames={sceneDurations.Scene02_ClinicalScenario} {...dims} />
      <Composition id="Scene03_HowAbscessForms" component={Scene03_HowAbscessForms} durationInFrames={sceneDurations.Scene03_HowAbscessForms} {...dims} />
      <Composition id="Scene04_AnatomicalLocations" component={Scene04_AnatomicalLocations} durationInFrames={sceneDurations.Scene04_AnatomicalLocations} {...dims} />
      <Composition id="Scene05_RedFlags" component={Scene05_RedFlags} durationInFrames={sceneDurations.Scene05_RedFlags} {...dims} />
      <Composition id="Scene06_DangerousComplication" component={Scene06_DangerousComplication} durationInFrames={sceneDurations.Scene06_DangerousComplication} {...dims} />
      <Composition id="Scene07_NursingAssessment" component={Scene07_NursingAssessment} durationInFrames={sceneDurations.Scene07_NursingAssessment} {...dims} />
      <Composition id="Scene08_PauseAndThink" component={Scene08_PauseAndThink} durationInFrames={sceneDurations.Scene08_PauseAndThink} {...dims} />
      <Composition id="Scene09_IncisionAndDrainage" component={Scene09_IncisionAndDrainage} durationInFrames={sceneDurations.Scene09_IncisionAndDrainage} {...dims} />
      <Composition id="Scene10_Antibiotics" component={Scene10_Antibiotics} durationInFrames={sceneDurations.Scene10_Antibiotics} {...dims} />
      <Composition id="Scene11_PostopCare" component={Scene11_PostopCare} durationInFrames={sceneDurations.Scene11_PostopCare} {...dims} />
      <Composition id="Scene12_NursingPriorityQuiz" component={Scene12_NursingPriorityQuiz} durationInFrames={sceneDurations.Scene12_NursingPriorityQuiz} {...dims} />
      <Composition id="Scene13_FinalClinicalPearl" component={Scene13_FinalClinicalPearl} durationInFrames={sceneDurations.Scene13_FinalClinicalPearl} {...dims} />
      <Composition id="Scene14_EndScreen" component={Scene14_EndScreen} durationInFrames={sceneDurations.Scene14_EndScreen} {...dims} />
      <Composition id="FullVideo" component={FullVideo} durationInFrames={totalDuration} {...dims} />
    </>
  );
};
