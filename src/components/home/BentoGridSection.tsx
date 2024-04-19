import React from 'react';

import Image from 'next/image';

import {
  InfoIcon,
  PencilRulerIcon,
  PocketKnifeIcon,
  RssIcon,
} from 'lucide-react';

import { BentoGrid, BentoGridItem } from '../ui/bento-grid';

export const BentoGridSection = () => {
  return (
    <BentoGrid className="md:auto-rows-[18rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          href={item.href}
          icon={item.icon}
          title={item.title}
          header={item.header}
          className={item.className}
          description={item.description}
        />
      ))}
    </BentoGrid>
  );
};

const items = [
  {
    href: '/about',
    title: 'About me',
    description: 'Find more about who I am',
    header: (
      <Image
        width={0}
        height={0}
        sizes="50vw"
        alt="an image of man wearing a red hoodie with a dark blue jacket smiling"
        src="/about.webp"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded"
      />
    ),
    className:
      'md:col-span-1 dark:bg-gradient-to-b from-stone-500 to-zinc-900 dark:border-stone-500 dark:hover:border-zinc-900',
    icon: <InfoIcon className="h-4 w-4 text-neutral-50" />,
  },
  {
    title: 'Blog',
    href: '/posts',
    description: 'Insightful and helpful content curated for you',
    header: (
      <Image
        width={0}
        height={0}
        sizes="50vw"
        alt="an image of a typewriter with the words to blog or not to blog printed on the paper"
        src="/blog.webp"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded"
      />
    ),
    className:
      'md:col-span-2 dark:bg-gradient-to-b from-lime-200 to-zinc-900 dark:border-lime-200 dark:hover:border-zinc-900',
    icon: <RssIcon className="h-4 w-4 text-neutral-200" />,
  },
  {
    href: '/projects',
    title: 'Projects',
    description: 'A collection of my favorite works',
    header: (
      <Image
        width={0}
        height={0}
        sizes="50vw"
        alt="an image of a reactjs project code"
        src="/projects.webp"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded"
      />
    ),
    className:
      'md:col-span-2 dark:bg-gradient-to-b from-cyan-200 to-zinc-900 dark:border-cyan-200 dark:hover:border-zinc-900',
    icon: <PencilRulerIcon className="h-4 w-4 text-neutral-200" />,
  },
  {
    href: '/toolkit',
    title: 'Toolkit',
    description: 'Checkout my favorite tools',
    header: (
      <Image
        width={0}
        height={0}
        sizes="50vw"
        alt="an image displaying the logos of firefox, vscode, starship, bitwarden & httpie"
        src="/tools.webp"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded"
      />
    ),
    className:
      'md:col-span-1 dark:bg-gradient-to-b from-violet-200 to-zinc-900 dark:border-violet-200 dark:hover:border-zinc-900',
    icon: <PocketKnifeIcon className="h-4 w-4 text-neutral-200" />,
  },
];

// Images copyrights
// blog => https://www.pexels.com/photo/a-vintage-typewriter-3601081/
// projects => https://unsplash.com/photos/black-flat-screen-computer-monitor-mZnx9429i94
