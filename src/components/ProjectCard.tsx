'use client';

import { AnchorHTMLAttributes } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IProject } from '@/config/projects';

import { ArrowUpRightIcon } from './icons/arrow-up-right';
import { LinkIcon } from './icons/link';

interface ProjectCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  project: IProject;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const pathname = usePathname();

  return (
    <Link
      target="_blank"
      href={project.link}
      className="flex flex-row justify-between items-center duration-300 hover:bg-hoverBackground p-4 rounded-lg cursor-pointer"
    >
      <div className="flex flex-row space-x-4">
        <Image
          alt=""
          width={40}
          height={40}
          src={project.image}
          className="w-[40px] h-[40px] rounded-lg"
        />
        <div className="flex flex-col">
          <span className="font-bold text-neutral-50/95 lowercase">
            {project.name}
          </span>
          <span className="font-light text-neutral-500/95 lowercase">
            {project.description}
          </span>
        </div>
      </div>
      {pathname === '/' ? <ArrowUpRightIcon /> : <LinkIcon />}
    </Link>
  );
};
