import CONFIG from '@/config';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

const socialBorder = `border-none group hover:border-neutral-500/95 duration-200 rounded px-1.5 py-1 border-neutral-800 items-center flex`;

export const Footer = () => {
  const date = new Date();

  return (
    <footer className="flex flex-col justify-center items-center md:my-2 space-y-2 w-full md:px-6 max-w-3xl">
      <div className="flex flex-row items-center space-x-1">
        <TooltipProvider delayDuration={50}>
          {CONFIG.profile.socials.map((social) => (
            <Tooltip key={social.id}>
              <TooltipTrigger className={`${socialBorder}`}>
                <a
                  target="_blank"
                  href={social.link}
                  className="cursor-pointer"
                >
                  {social.icon}
                </a>
              </TooltipTrigger>
              <TooltipContent side="top">{social.platform}</TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-col text-center">
          <span className="text-secondaryDarker font-normal text-sm lowercase">
            {`© ${date.getFullYear()} ${CONFIG.profile.logoText}`}
          </span>
        </div>
      </div>
    </footer>
  );
};
