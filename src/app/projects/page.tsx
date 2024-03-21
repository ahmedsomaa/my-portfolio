import React from 'react';

import Link from 'next/link';

import { ProjectSection } from '@/components/home/ProjectSection';
import { ArrowLeftIcon } from '@/components/icons/arrow-left';
import CONFIG from '@/config';

export const metadata = {
  title: 'Projects',
  description: 'Here are all the projects I have built.',
};

export default function ProjectsPage() {
  return (
    <div className="grid grid-cols-1 gap-10 pb-10 w-full">
      <div className="flex flex-col">
        <Link
          href="/"
          className="flex flex-row space-x-2 items-center md:px-6 group cursor-pointer mb-4"
        >
          <ArrowLeftIcon />
          <span className="text-secondaryDarker">Back</span>
        </Link>
        <ProjectSection projects={CONFIG.projects} />
      </div>
    </div>
  );
}
