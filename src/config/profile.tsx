import { EmailIcon } from '@/components/icons/socials/email';
import { GithubIcon } from '@/components/icons/socials/github';
import { HashnodeIcon } from '@/components/icons/socials/hashnode';
import { LinkedInIcon } from '@/components/icons/socials/linkedin';
import { ResumeIcon } from '@/components/icons/socials/resume';
import { XIcon } from '@/components/icons/socials/x';
import { YouTubeIcon } from '@/components/icons/socials/youtube';

export const PROFILE = {
  logoText: 'Som3aware',
  name: 'Ahmed Abu Qahf',
  headshot: '/avatar.webp',
  title: 'Software Engineer',
  description: `Hi, I'm Ahmed Abu Qahf. I'm based in Tanta, Egypt.`,
  socials: [
    {
      id: 'gmail',
      platform: 'Mail',
      link: 'mailto:abokahfa@gmail.com',
      icon: <EmailIcon />,
    },
    {
      id: 'twitter',
      platform: 'X',
      link: 'https://twitter.com/som3aware',
      icon: <XIcon />,
    },
    {
      id: 'github',
      platform: 'GitHub',
      link: 'https://github.com/ahmedsomaa',
      icon: <GithubIcon />,
    },
    {
      id: 'youtube',
      platform: 'YouTube',
      link: 'https://www.youtube.com/@the-final-lineup',
      icon: <YouTubeIcon />,
    },
    {
      id: 'linkedin',
      platform: 'LinkedIn',
      link: 'https://www.linkedin.com/in/som3aware/',
      icon: <LinkedInIcon />,
    },
    {
      id: 'hashnode',
      platform: 'Hashnode',
      link: 'https://som3aware.hashnode.dev/',
      icon: <HashnodeIcon />,
    },
    {
      id: 'resume',
      platform: 'My Resume',
      link: '/docs/my-resume.pdf',
      icon: <ResumeIcon />,
    },
  ],
};
