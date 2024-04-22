import React from 'react';

import { cn } from '@/utils/cn';

export function SoftwareItem({
  href,
  icon,
  title,
  className,
}: {
  href: string;
  title: string;
  className?: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className={cn(
        'h-32 w-32 no-underline shadow-lg border border-gray-50/15 dark:bg-gray-50/5 group/card rounded-lg',
        className,
      )}
    >
      <div className="h-full w-full flex flex-col items-center justify-center space-y-2 transition duration-200">
        {icon}
        <div className="group-hover/card:translate-y-2 transition duration-200">
          <div className="font-normal text-center lowercase">{title}</div>
        </div>
      </div>
    </a>
  );
}
