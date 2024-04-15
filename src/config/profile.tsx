import { EmailIcon } from '@/components/icons/email';
import { GithubIcon } from '@/components/icons/github';
import { HashnodeIcon } from '@/components/icons/hashnode';
import { LinkedInIcon } from '@/components/icons/linkedin';
import { ResumeIcon } from '@/components/icons/resume';
import { XIcon } from '@/components/icons/x';
import { YouTubeIcon } from '@/components/icons/youtube';

export const PROFILE = {
  name: 'Ahmed Abu Qahf',
  headshot: '/avatar.webp',
  title: 'Software Engineer',
  description: `Hi, I'm Ahmed. I'm based in Tanta, Gharbia.`,
  socials: [
    {
      platform: 'Mail',
      link: 'mailto:abokahfa@gmail.com',
      icon: <EmailIcon />,
    },
    { platform: 'X', link: 'https://twitter.com/som3aware', icon: <XIcon /> },
    {
      platform: 'GitHub',
      link: 'https://github.com/ahmedsomaa',
      icon: <GithubIcon />,
    },
    {
      platform: 'YouTube',
      link: 'https://www.youtube.com/@the-final-lineup',
      icon: <YouTubeIcon />,
    },
    {
      platform: 'LinkedIn',
      link: 'https://www.linkedin.com/in/som3aware/',
      icon: <LinkedInIcon />,
    },
    {
      platform: 'Hashnode',
      link: 'https://som3aware.hashnode.dev/',
      icon: <HashnodeIcon />,
    },
    {
      platform: 'My Resume',
      link: '/docs/my-resume.pdf',
      icon: <ResumeIcon />,
    },
  ],
};
