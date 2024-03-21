'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ArrowRightIcon } from './icons/arrow-right';

interface FeaturedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  redirect: {
    text: string;
    url: '/projects' | '/posts' | '/reading';
  };
}

export const PageSection = ({
  title,
  redirect,
  children,
}: FeaturedSectionProps) => {
  const pathname = usePathname();
  return (
    <>
      {pathname === '/' ? (
        <span className="font-semibold md:px-6">{title}</span>
      ) : (
        <span className="text-4xl font-bold md:px-6 mb-6 md:mb-4">
          All Projects
        </span>
      )}
      {children}
      {pathname === '/' && (
        <Link
          href={redirect.url}
          className="flex flex-row space-x-2 items-center md:px-6 group cursor-pointer justify-end"
        >
          <span className="text-secondary text-sm">{redirect.text}</span>
          <ArrowRightIcon />
        </Link>
      )}
    </>
  );
};
