import React from 'react';

import { ProjectSection } from '@/components/home/ProjectSection';
import CONFIG from '@/config';

export const metadata = {
  title: 'Projects',
  description: 'Here are all the projects I have built.',
};

export default function ProjectsPage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-10 pb-10 w-full">
        <div className="flex flex-col">
          <ProjectSection projects={CONFIG.projects} />
        </div>
      </div>
    </>
  );
}
