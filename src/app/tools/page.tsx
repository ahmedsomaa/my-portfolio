import { HardwareItem } from '@/components/HardwareItem';
import { SoftwareItem } from '@/components/SoftwareItem';
import CONFIG from '@/config';

export default function ToolkitPage() {
  return (
    <div className="grid grid-cols-1 gap-10 pb-10 w-full">
      <div className="flex flex-col">
        <div className="space-y-4">
          <div className="space-y-3">
            <span className="text-2xl font-bold lowercase md:px-6 mb-6 md:mb-4">
              Software
            </span>
            <p className="text-sm font-light md:px-6 mb-6 md:mb-4">
              Here&apos;s a list of the software I use on a daily basis:
            </p>
            <div className="md:px-6">
              <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-3">
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
            <span className="text-2xl font-bold lowercase md:px-6 mb-6 md:mb-4">
              Hardware
            </span>
            <p className="text-sm font-light lowercase md:px-6 mb-6 md:mb-4">
              Here&apos;s a list of my hardware devices:
            </p>
            <div className="md:px-6">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3">
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
