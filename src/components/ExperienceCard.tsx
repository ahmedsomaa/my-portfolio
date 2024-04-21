import { AnchorHTMLAttributes } from 'react';

import Image from 'next/image';

import { IExperience } from '@/config/experience';

interface ExperienceCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  experience: IExperience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="flex flex-row justify-between items-center duration-300 md:hover:bg-hoverBackground md:p-2 rounded-lg cursor-pointer">
      <div className="flex flex-row space-x-4">
        <Image
          alt=""
          width={40}
          height={40}
          src={experience.companyLogo}
          className="w-[40px] h-[40px] rounded-lg"
        />
        <div className="flex flex-col">
          <span className="dark:group-hover:text-white:">
            {`${experience.role} @ ${experience.company}`}
          </span>
          <span className="dark:group-hover:text-white:">
            {experience.duration}
          </span>
          <span className="text-secondaryDarker">{experience.description}</span>
        </div>
      </div>
    </div>
  );
};
