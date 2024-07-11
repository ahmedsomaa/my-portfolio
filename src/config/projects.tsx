export const PROJECTS = [
  {
    name: 'Open Trivia',
    slug: 'open-trivia',
    description: ' A multi-round trivia game built with Open Trivia API',
    image: '/projects/open-trivia.svg',
    link: 'https://open-trivia-demo.vercel.app',
  },
  {
    name: 'Sharp Studio',
    slug: 'sharp-studio',
    description: 'Hackable Image Processing',
    image: '/projects/sharp-studio.svg',
    link: 'https://sharpstudio.vercel.app',
  },
  {
    name: 'Editor Setup',
    slug: 'editor-setup',
    description: 'Find your next optimal Visual Studio Code setup',
    image: '/projects/editor-setup.svg',
    link: 'https://editorsetup.vercel.app',
  },
  {
    name: 'Face AI',
    slug: 'face-ai',
    description: "Detect a person's face expressions, age & gender",
    image: '/projects/face-ai.svg',
    link: 'https://face-ai.surge.sh/',
  },
  {
    name: 'Konstant Kreative Ad Analyzer',
    slug: 'kk-ad-analyzer',
    description: 'AI app to analyze image ads using GPT-4 Vision',
    image: '/projects/kk-ad-analyzer.svg',
    link: 'https://lead-gen-ai.vercel.app/',
  },
  {
    name: 'Covid Tracker',
    slug: 'covid-tracker',
    description: 'App to track covid patients',
    image: '/projects/covid-tracker.svg',
    link: 'https://github.com/ahmedsomaa/covid-tracker/',
  },
  {
    name: 'Store API',
    slug: 'store-api',
    description: 'Node API for an online store',
    image: '/projects/store-api.svg',
    link: 'https://github.com/ahmedsomaa/storefront-api',
  },
];

export type IProject = (typeof PROJECTS)[0];
