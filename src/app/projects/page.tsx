import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="text-secondaryDarker group-hover:-translate-x-1 duration-200 rotate-180"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-secondaryDarker">Back</span>
        </Link>
        <span className="text-4xl font-bold md:px-6 mb-6 md:mb-4">
          All Projects
        </span>
        <div>
          <div className="grid grid-cols-1 gap-6 md:gap-1 md:px-2">
            {CONFIG.projects.map((project, idx) => {
              return (
                <Link
                  key={idx}
                  href={project.link}
                  target="_blank"
                  className="flex flex-row justify-between space-x-8 md:space-x-0 items-center duration-300 md:hover:bg-hoverBackground md:p-4 rounded-lg cursor-pointer"
                >
                  <div className="flex flex-row space-x-4 items-center">
                    <Image
                      src={project.image}
                      alt=""
                      width={40}
                      height={40}
                      className="w-[40px] h-[40px]"
                    />
                    <div className="flex flex-col">
                      <span className="text-secondaryDark">{project.name}</span>
                      <span className="text-secondaryDarker">
                        {project.description}
                      </span>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-link text-secondaryDarker w-[20px] md:w-auto"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
