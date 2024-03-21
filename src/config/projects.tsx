export const PROJECTS = [
  {
    featured: true,
    name: 'SharpStudio',
    slug: 'sharp-studio',
    description: 'Hackable Image Processing.',
    image: '/projects/sharp-studio.svg',
    link: 'https://sharpstudio.vercel.app',
  },
  {
    featured: true,
    name: 'EditorSetup',
    slug: 'editor-setup',
    description: 'Find your next optimal Visual Studio Code setup.',
    image: '/projects/editor-setup.svg',
    link: 'https://editorsetup.vercel.app',
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
