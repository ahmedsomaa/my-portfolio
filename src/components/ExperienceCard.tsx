import { AnchorHTMLAttributes } from 'react';

import Image from 'next/image';

import { IExperience } from '@/config/experience';

interface ExperienceCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  experience: IExperience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="p-3 flex flex-row justify-between items-center duration-300 md:hover:bg-neutral-800/95 md:p-2 rounded-lg cursor-pointer min-h-[5rem] max-h-[5rem]">
      <div className="flex flex-row space-x-4">
        <Image
          alt=""
          width={40}
          height={40}
          src={experience.companyLogo}
          className="w-[40px] h-[40px] rounded-lg"
        />
        <div className="flex flex-col">
          <span className="text-sm font-bold text-neutral-50/95">
            {`${experience.role} @ ${experience.company}`}
          </span>
          <span className="text-sm font-light text-stone-400/95">
            {experience.duration}
          </span>
          <span className="text-xs font-light text-neutral-500/95">
            {experience.description}
          </span>
        </div>
      </div>
    </div>
  );
};
