# Pus Under Pressure: The Anorectal Emergency (Remotion)

Bilingual (English + Arabic) motion-graphics educational Remotion project for nursing/medical training on anorectal abscess assessment and urgent care priorities.

## Quick start

```bash
npm install
npm start
```

You can also run studio directly:

```bash
npx remotion studio
```

## Render the full video

```bash
npx remotion render FullVideo out/video.mp4
```

FullVideo duration: **4260 frames @ 30fps (~142 seconds)**.

## Project structure

- `src/index.ts` and `src/Root.tsx` register all compositions.
- `src/scenes/SceneXX_*.tsx` contains one composition per scene:
  - Scene01_Hook
  - Scene02_ClinicalScenario
  - Scene03_HowAbscessForms
  - Scene04_AnatomicalLocations
  - Scene05_RedFlags
  - Scene06_DangerousComplication
  - Scene07_NursingAssessment
  - Scene08_PauseAndThink
  - Scene09_IncisionAndDrainage
  - Scene10_Antibiotics
  - Scene11_PostopCare
  - Scene12_NursingPriorityQuiz
  - Scene13_FinalClinicalPearl
  - Scene14_EndScreen
- `src/components/` has reusable UI pieces (TitleCard, BilingualText, ChecklistItem, IconLabel, MemoryAnchor, PauseAndThink).
- `src/theme.ts` defines colors and typography for a consistent medical-style palette.

## Bilingual design approach

- Every scene includes both English and Arabic on-screen text.
- Arabic text is rendered with `dir="rtl"` and Arabic-capable **Cairo** font via `@remotion/google-fonts`.
- Styling keeps hierarchy consistent: English heading + Arabic companion text.

## Narration placeholders and scripts

- Audio is intentionally not bundled.
- Each scene contains a commented placeholder such as:
  - `/* <Audio src={staticFile('narration/scene01.mp3')} /> */`
- Place final recorded audio files under `public/narration/sceneXX.mp3` to match `staticFile('narration/...')`.
- Use `voiceover/` for script prep:
  - `voiceover/README.md`
  - `voiceover/SceneXX_*.txt` (Arabic original + English text per scene)
