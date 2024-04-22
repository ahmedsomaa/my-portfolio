import { fontSans } from '@/app/fonts';
import { cn } from '@/utils/cn';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid md:grid-rows-9 grid-cols-2 md:grid-cols-9 gap-3 mx-auto ',
        className,
        fontSans.className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  href,
  titleStyle,
  descriptionStyle,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  href: string;
  titleStyle?: string;
  descriptionStyle?: string;
}) => {
  return (
    <a
      href={href}
      className={cn(
        'min-h-32 no-underline rounded-lg group/bento hover:shadow-lg transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-gray-50/5 dark:border-gray-50/15 dark:hover:border-2 bg-white border border-transparent space-y-4',
        className,
        fontSans.className,
      )}
    >
      <div className="group-hover/bento:translate-y-2 transition duration-200 flex flex-col items-center justify-center gap-5 min-h-full">
        <div className={cn('font-semibold text-4xl', titleStyle)}>{title}</div>
        <div className={cn('font-light text-center text-xs', descriptionStyle)}>
          {description}
        </div>
      </div>
    </a>
  );
};
