import React from 'react';

import { BentoGrid, BentoGridItem } from '../ui/bento-grid';

export const BentoGridSection = () => {
  return (
    <BentoGrid className="md:grid-rows-9 md:grid-cols-9 md:min-h-[30rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          href={item.href}
          title={item.title}
          className={item.className}
          titleStyle={item.titleStyle}
          description={item.description}
          descriptionStyle={item.descriptionStyle}
        />
      ))}
    </BentoGrid>
  );
};

const items = [
  {
    href: '/posts',
    title: 'Blog',
    titleStyle: 'text-lime-300/95 lowercase',
    descriptionStyle: 'text-lime-200/95 lowercase',
    description: 'Insightful and helpful content curated for you',
    className:
      'md:row-start-1 md:row-span-6 md:col-start-1 md:col-span-3 dark:bg-gradient-to-tl dark:from-gray-50/5 dark:to-lime-300/5 hover:border-lime-300/95',
  },
  {
    href: '/reads',
    title: 'Readings',
    titleStyle: 'text-sky-300/95 lowercase',
    descriptionStyle: 'text-sky-200/95 lowercase',
    description: "Books  I've read or i'm currently reading",
    className:
      'md:row-start-7 md:row-span-3 md:col-start-1 md:col-span-3 dark:bg-gradient-to-bl dark:from-gray-50/5 dark:to-sky-300/5 hover:border-sky-300/95',
  },
  {
    href: '/about',
    title: 'About',
    titleStyle: 'text-red-300/95 lowercase',
    descriptionStyle: 'text-red-200/95 lowercase',
    description: 'Find more about me',
    className:
      'md:row-start-1 md:row-span-9 md:col-start-4 md:col-span-3 dark:bg-gradient-to-b dark:from-gray-50/5 dark:to-red-300/5 hover:border-red-300/95',
  },
  {
    href: '/tools',
    title: 'Tools',
    titleStyle: 'text-purple-300/95 lowercase',
    descriptionStyle: 'text-purple-200/95 lowercase',
    description: 'Checkout my favorite tools',
    className:
      'md:row-start-1 md:row-span-3 md:col-start-7 md:col-span-3 dark:bg-gradient-to-tr dark:from-gray-50/5 dark:to-purple-300/5 hover:border-purple-300/95',
  },
  {
    href: '/projects',
    title: 'Projects',
    titleStyle: 'text-amber-300/95 lowercase',
    descriptionStyle: 'text-amber-200/95 lowercase',
    description: 'A collection of my favorite works',
    className:
      'md:row-start-4 md:row-span-6 md:col-start-7 md:col-span-3 dark:bg-gradient-to-br dark:from-gray-50/5 dark:to-amber-300/5 hover:border-amber-300/95',
  },
];
