import type { Metadata } from 'next';
import Image from 'next/image';

import { ExperienceCard } from '@/components/ExperienceCard';
import AboutMe from '@/components/home/AboutMe';
import CONFIG from '@/config';

export const metadata: Metadata = {
  title: 'About',
  description: 'Find more about me',
};

export default function AboutPage() {
  return (
    <div className="grid grid-cols-1 gap-10 pb-10 w-full">
      <div className="flex flex-col">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-neutral-50/95 md:px-6 lowercase">
              about me
            </h2>
            <div className="md:px-6 flex flex-col items-center gap-2">
              <Image
                width={100}
                height={100}
                src="/avatar.webp"
                alt="an avatar image of Ahmed Ismail"
              />
              <AboutMe />
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold md:px-6 lowercase">Experience</h2>
            <div className="md:px-6">
              <div className="flex flex-col space-y-3 md:space-y-3">
                {CONFIG.experience.map((experience) => {
                  return (
                    <ExperienceCard
                      key={experience.id}
                      experience={experience}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
