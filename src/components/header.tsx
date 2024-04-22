import React from 'react';

import Link from 'next/link';

import CONFIG from '@/config';
import { cn } from '@/utils/cn';

export function Header() {
  return (
    <header className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 w-full md:px-6 max-w-3xl">
      <div className="flex flex-row items-center space-x-3">
        <div className="flex flex-col">
          <Link href="/">
            <span className="font-semibold text-neutral-50/95 text-sm lowercase hover:text-sky-300/95">
              {CONFIG.profile.logoText}
            </span>
          </Link>
        </div>
      </div>
      <div className="flex flex-row space-x-2">
        {routes
          .sort((a, b) => a.title.localeCompare(b.title))
          .map(({ href, title, hoverStyle }) => (
            <a
              key={title}
              href={href}
              target={title === 'resume' ? '_blank' : ''}
              className={cn(
                'text-neutral-50/95 hover:underline text-sm',
                hoverStyle,
              )}
            >
              {title}
            </a>
          ))}
      </div>
    </header>
  );
}

const routes = [
  {
    title: 'blog',
    href: '/posts',
    hoverStyle: 'hover:text-lime-300/95',
  },
  {
    title: 'readings',
    href: '/reads',
    hoverStyle: 'hover:text-sky-300/95',
  },
  {
    title: 'about',
    href: '/about',
    hoverStyle: 'hover:text-red-300/95',
  },
  {
    title: 'tools',
    href: '/tools',
    hoverStyle: 'hover:text-purple-300/95',
  },
  {
    title: 'work',
    href: '/projects',
    hoverStyle: 'hover:text-amber-300/95',
  },
  {
    title: 'resume',
    href: '/docs/my-resume.pdf',
    hoverStyle: 'hover:text-orange-300/95',
  },
];
