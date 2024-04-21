import React from 'react';

import { ProjectCard } from '@/components/ProjectCard';
import CONFIG from '@/config';

export const metadata = {
  title: 'Projects',
  description: 'A collection of my favorite works',
};

export default function ProjectsPage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-10 pb-10 w-full">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold md:px-6 md:mb-4 lowercase">
            all posts
          </h2>
          <div className="flex flex-col space-y-8 md:space-y-1 mdx:px-2">
            {CONFIG.projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
