import Link from 'next/link';

import { ArrowLeftIcon } from '@/components/icons/arrow-left';

export default function ToolkitPage() {
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
              Software
            </span>
            <div className="md:px-6">Coming soon...</div>
          </div>
          <div className="space-y-2">
            <span className="text-4xl font-bold md:px-6 mb-6 md:mb-4">
              Hardware
            </span>
            <div className="md:px-6">Coming soon...</div>
          </div>
        </div>
      </div>
    </div>
  );
}
