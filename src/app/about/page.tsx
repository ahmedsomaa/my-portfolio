import type { Metadata } from 'next';

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
          <div className="space-y-4">
            <h2 className="text-2xl font-bold md:px-6 mb-6 md:mb-4 lowercase">
              About me
            </h2>
            <div className="md:px-6">
              <AboutMe />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold md:px-6 mb-6 md:mb-4 lowercase">
              Experience
            </h2>
            <div className="md:px-6">
              <div className="flex flex-col space-y-8 md:space-y-2">
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
