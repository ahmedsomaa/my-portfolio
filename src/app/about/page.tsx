import Link from 'next/link';

import AboutMe from '@/components/home/AboutMe';
import { ArrowLeftIcon } from '@/components/icons/arrow-left';

export const metadata = {
  title: 'About',
  description: 'Here are all more details about me.',
};

export default function AboutPage() {
  return (
    <div className="grid grid-cols-1 gap-10 pb-10 w-full">
      <div className="flex flex-col">
        <Link
          href="/"
          className="flex flex-row space-x-2 items-center md:px-6 group cursor-pointer mb-4"
        >
          <ArrowLeftIcon />
          <span className="text-secondaryDarker">Back</span>
        </Link>
        <div className="space-y-4">
          <div className="space-y-2">
            <span className="text-4xl font-bold md:px-6 mb-6 md:mb-4">
              About me
            </span>
            <div className="md:px-6">
              <AboutMe />
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-4xl font-bold md:px-6 mb-6 md:mb-4">
              Experience
            </span>
            <div className="md:px-6">Coming soon...</div>
          </div>
        </div>
      </div>
    </div>
  );
}
