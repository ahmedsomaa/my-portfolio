import React from 'react';

import Image from 'next/image';

import CONFIG from '@/config';

const socialBorder = `border group hover:border-secondaryDarker duration-200 rounded px-1.5 py-1 border-neutral-800 items-center flex`;

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 w-full md:px-6 max-w-3xl">
      <div className="flex flex-row items-center space-x-3">
        <Image
          width={100}
          height={100}
          src={CONFIG.profile.headshot}
          alt="profile headshot for ahmed abu qahf"
          className="rounded-full h-[48px] w-[48px]"
        />
        <div className="flex flex-col">
          <span className="text-primary dark:text-white font-semibold">
            {CONFIG.profile.name}
          </span>
          <span className="text-secondaryDarker">{CONFIG.profile.title}</span>
        </div>
      </div>
      <div className="flex flex-row space-x-2">
        {CONFIG.profile.socials.map((social, idx) => {
          return (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              className={`${socialBorder}`}
            >
              {social.icon}
            </a>
          );
        })}
      </div>
    </header>
  );
}
