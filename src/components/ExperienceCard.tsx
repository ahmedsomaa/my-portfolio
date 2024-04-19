'use client';

import { AnchorHTMLAttributes } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IProject } from '@/config/projects';

import { ArrowUpRightIcon } from './icons/arrow-up-right';
import { LinkIcon } from './icons/link';

interface ExperienceCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  experience: IProject;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const pathname = usePathname();

  return (
    <Link
      target="_blank"
      href={experience.link}
      className="flex flex-row justify-between items-center duration-300 md:hover:bg-hoverBackground md:p-4 rounded-lg cursor-pointer"
    >
      <div className="flex flex-row space-x-4">
        <Image
          alt=""
          width={40}
          height={40}
          src={experience.image}
          className="w-[40px] h-[40px]"
        />
        <div className="flex flex-col">
          <span className="dark:group-hover:text-white:">
            {experience.name}
          </span>
          <span className="text-secondaryDarker">{experience.description}</span>
        </div>
      </div>
      {pathname === '/' ? <ArrowUpRightIcon /> : <LinkIcon />}
    </Link>
  );
};
