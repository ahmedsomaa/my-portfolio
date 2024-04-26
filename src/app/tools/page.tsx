import { Metadata } from 'next';

import { SoftwareItem } from '@/components/SoftwareItem';
import CONFIG from '@/config';

export const metadata: Metadata = {
  title: 'Tools',
  description: 'a collection the software apps I use on a daily basis',
};

export default function ToolkitPage() {
  return (
    <div className="grid grid-cols-1 gap-10 pb-10 w-full min-h-[40rem] max-h-[40rem]">
      <div className="flex flex-col">
        <div className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold lowercase text-neutral-50/95 md:px-6">
              tools
            </h2>
            <p className="text-sm font-light text-stone-500/95 md:px-6 mb-6 md:mb-4 lowercase">
              a collection of the software apps I use on a daily basis
            </p>
          </div>
          <div className="md:px-6">
            <div className="grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-3">
              {CONFIG.toolkit.SOFTWARE.sort((a, b) =>
                a.title.localeCompare(b.title),
              ).map(({ href, icon, title, className }) => (
                <SoftwareItem
                  key={title}
                  icon={icon}
                  href={href}
                  title={title}
                  className={className}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
