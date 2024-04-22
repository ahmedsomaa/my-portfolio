'use client';

import React from 'react';

import { ProjectCard } from '@/components/ProjectCard';
import CONFIG from '@/config';
import { usePagination } from '@/hooks/use-pagination';
import { cn } from '@/utils/cn';
import { ChevronsLeftIcon, ChevronsRightIcon } from 'lucide-react';

const MAX_PAGE_SIZE = 6;

export default function ProjectsPage() {
  const projectsCount = CONFIG.projects.length;

  const {
    currentPage,
    totalPages,
    startPage,
    endPage,
    pages,
    onPressFirst,
    onPressLast,
    goToPage,
  } = usePagination({
    totalSize: projectsCount,
    pageSize: MAX_PAGE_SIZE,
  });

  return (
    <>
      <div className="grid grid-cols-1 space-y-52 pb-10 w-full min-h-[40rem] max-h-[40rem]">
        <div className="flex flex-col space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-neutral-50/95 md:px-6 lowercase">
              my work
            </h2>
            <p className="text-sm font-light text-neutral-500/95 md:px-6 lowercase">
              a collection of my favorite projects
            </p>
          </div>
          <div className="flex flex-col space-y-2 md:space-y-1 md:px-2 min-h-[20rem] max-h-[20rem]">
            {CONFIG.projects.slice(startPage, endPage).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
        {projectsCount > MAX_PAGE_SIZE && (
          <div className="flex flex-row items-center justify-center space-x-2">
            <button
              onClick={onPressFirst}
              disabled={currentPage === 1}
              className="rounded-lg py-2 px-4 hover:bg-gray-50/5 disabled:text-secondaryDarker"
            >
              <ChevronsLeftIcon className="h-4 w-4" />
            </button>
            {pages &&
              pages.map((page) => (
                <button
                  key={`page-${page}-btn`}
                  onClick={() => goToPage(page)}
                  disabled={currentPage == page}
                  className={cn(
                    'text-sm rounded-lg py-2 px-4 hover:bg-gray-50/5 disabled:text-secondaryDarker',
                    'bg-gray-50/5' && currentPage === page,
                  )}
                >
                  {page}
                </button>
              ))}
            <button
              onClick={onPressLast}
              disabled={currentPage === totalPages}
              className="rounded-lg py-2 px-4 hover:bg-gray-50/5 disabled:text-secondaryDarker"
            >
              <ChevronsRightIcon className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
