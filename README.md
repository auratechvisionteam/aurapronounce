# AuraPronounce

A professional web application for learning medical terminology pronunciation, built for the Department of English at a medical school.

## Features

### Search Mode
- **Universal Search**: Search any word (medical or general)
- **Audio Pronunciation**: Listen to accurate pronunciation using Web Speech API
- **Phonetic Transcription**: Get IPA phonetic transcription from dictionary API

### Learn Mode
- **Curated Medical Terms**: 44 essential medical terms
- **Interactive Learning**: Navigate through terms with visual feedback
- **Progress Tracking**: Track which terms you've practiced
- **Side-by-side Navigation**: Quick access to all terms from sidebar

## Medical Terms Included

Prophylactic, Lesions, Exaggerated, Eukaryotic, Prokaryotic, Self-luminous, Plotted, Microaerophilic, Capnophilic, Mesophiles, Psychrophiles, Inspissation, Tyndallisation, Germinate, Ketogenesis, Hyperbilirubinemia, Apolipoproteins, Centrifugation, Reagent blank, Calibration, Nephelometry, Spectrophotometer, Hypercholesterolemia, Ubiquinone, Pyramidines, Denaturation, Sphingomyelin, Tryptophan, Phenylalanine, Hypertrophy, Hyperplasia, Gangrene, Chemotaxis, Lymphadenopathy, Phagocytosis, Hemoglobinopathies, Spherocytosis, Thalassemia, Hematocrit, Arteriosclerosis, Cardiomyopathy, Cirrhosis, Adenocarcinoma, Papilloma

## Technologies Used

- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS
- **Audio**: Web Speech API (built into modern browsers)
- **Phonetics**: Free Dictionary API
- **Deployment**: Vercel

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Browser Compatibility

- Works best in Chrome, Edge, and Safari
- Requires Web Speech API support for pronunciation
- Mobile-responsive design

## License

ISC
