import CONFIG from '@/config';

const socialBorder = `border-none group hover:border-secondaryDarker duration-200 rounded px-1.5 py-1 border-neutral-800 items-center flex`;

export const Footer = () => {
  const date = new Date();

  return (
    <footer className="flex flex-col justify-center items-center md:my-2 space-y-4 w-full md:px-6 max-w-3xl">
      <div className="flex flex-row items-center space-x-3">
        <div className="flex flex-col">
          <span className="text-secondaryDarker font-normal text-sm lowercase">
            {`© ${date.getFullYear()} ${CONFIG.profile.logoText}`}
          </span>
        </div>
      </div>
      <div className="flex flex-row space-x-2">
        {CONFIG.profile.socials.map((social) => (
          <a
            key={social.id}
            target="_blank"
            href={social.link}
            title={social.platform}
            className={`${socialBorder}`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};
