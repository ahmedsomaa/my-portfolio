export const PROJECTS = [
  {
    featured: true,
    name: 'Sharp Studio',
    slug: 'sharp-studio',
    description: 'Hackable Image Processing',
    image: '/projects/sharp-studio.svg',
    link: 'https://sharpstudio.vercel.app',
  },
  {
    featured: true,
    name: 'Editor Setup',
    slug: 'editor-setup',
    description: 'Find your next optimal Visual Studio Code setup',
    image: '/projects/editor-setup.svg',
    link: 'https://editorsetup.vercel.app',
  },
  {
    featured: true,
    name: 'Konstant Kreative Ad Analyzer',
    slug: 'kk-ad-analyzer',
    description: 'AI app to analyze image ads using GPT-4 Vision',
    image: '/projects/kk-ad-analyzer.svg',
    link: 'https://lead-gen-ai.vercel.app/',
  },
  {
    featured: false,
    name: 'Covid Tracker',
    slug: 'covid-tracker',
    description: 'App to track covid patients',
    image: '/projects/covid-tracker.svg',
    link: 'https://github.com/ahmedsomaa/covid-tracker/',
  },
  {
    featured: false,
    name: 'Store API',
    slug: 'store-api',
    description: 'Node API for an online store',
    image: '/projects/store-api.svg',
    link: 'https://github.com/ahmedsomaa/storefront-api',
  },
  {
    featured: false,
    name: 'ECARD Mobile App',
    slug: 'ecard-app',
    description: "App to streamline the process of fertilizers' distribution",
    image: '/projects/ecard-app.svg',
    link: 'https://play.google.com/store/apps/details?id=com.newsmartegypt.ecard&pli=1',
  },
];

export interface IProject {
  name: string;
  slug: string;
  link: string;
  image: string;
  featured: boolean;
  description: string;
}
