import { GithubIcon } from '@/components/icons/github';
import { LinkedInIcon } from '@/components/icons/linkedin';
import { XIcon } from '@/components/icons/x';
import { YouTubeIcon } from '@/components/icons/youtube';

export const PROFILE = {
  name: 'Ahmed Abu Qahf',
  headshot: '/avatar.webp',
  title: 'Software Engineer',
  description: `Hi, I'm Ahmed. I'm based in Tanta, Gharbia. I am a full stack software engineer with a strong focus in front-end in React. 
  I aim to create beautiful and functional software that is both intuitive and enjoyable for users.`,
  socials: [
    { platform: 'X', link: 'https://twitter.com/abokahfa', icon: <XIcon /> },
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
      link: 'https://www.linkedin.com/in/abokahfa/',
      icon: <LinkedInIcon />,
    },
  ],
};
