/* eslint-disable */

import React from 'react';

interface BadgeProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Badge = (props: BadgeProps) => {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
};
