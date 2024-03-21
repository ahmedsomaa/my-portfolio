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
  {
    featured: true,
    name: 'StoreAPI',
    slug: 'store-api',
    description: 'A node API for a store built with Typescript & PostgreSQL.',
    image: '/projects/store-api.svg',
    link: 'https://github.com/ahmedsomaa/storefront-api',
  },
  {
    featured: false,
    name: 'ECARD Mobile App',
    slug: 'ecard-app',
    description:
      "An app to streamline the process of fertilizers' distribution.",
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
