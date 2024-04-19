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
        'no-underline shadow-lg border border-zinc-900 dark:bg-gradient-to-b from-zinc-900 to-neutral-700 flex flex-col items-center justify-center transition duration-200 group/card rounded-lg p-4',
        className,
      )}
    >
      {icon}
      <div className="group-hover/card:translate-y-2 transition duration-200">
        <div className="font-bold mb-2 mt-2">{title}</div>
      </div>
    </a>
  );
}
