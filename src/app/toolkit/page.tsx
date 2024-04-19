import Link from 'next/link';

import { HardwareItem } from '@/components/HardwareItem';
import { ArrowLeftIcon } from '@/components/icons/arrow-left';
import { SoftwareItem } from '@/components/SoftwareItem';
import CONFIG from '@/config';

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
          <div className="space-y-3">
            <span className="text-4xl font-bold md:px-6 mb-6 md:mb-4">
              Software
            </span>
            <p className="text-xl font-bold md:px-6 mb-6 md:mb-4">
              Here&apos;s a list of the software I use on a daily basis:
            </p>
            <div className="md:px-6">
              <div className="grid grid-cols-4 gap-4">
                {CONFIG.toolkit.SOFTWARE.map(
                  ({ href, icon, title, className }) => (
                    <SoftwareItem
                      key={title}
                      icon={icon}
                      href={href}
                      title={title}
                      className={className}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-4xl font-bold md:px-6 mb-6 md:mb-4">
              Hardware
            </span>
            <p className="text-xl font-bold md:px-6 mb-6 md:mb-4">
              Here&apos;s a list of my hardware devices:
            </p>
            <div className="md:px-6">
              <div className="grid grid-cols-2 gap-3">
                {CONFIG.toolkit.HARDWARE.map(({ href, title, description }) => (
                  <HardwareItem
                    key={title}
                    href={href}
                    title={title}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
