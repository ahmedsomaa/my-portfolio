import { BitwardenIcon } from '@/components/icons/bitwarden';
import { FigmaIcon } from '@/components/icons/figma';
import { FirefoxIcon } from '@/components/icons/firefox';
import { GithubSWIcon } from '@/components/icons/github-sw';
import { GmailIcon } from '@/components/icons/gmail';
import { HttpieIcon } from '@/components/icons/httpie';
import { JiraIcon } from '@/components/icons/jira';
import { GoogleMeetIcon } from '@/components/icons/meet';
import { StarshipIcon } from '@/components/icons/starship';
import { WindowsTerminalIcon } from '@/components/icons/terminal';
import { VSCodeIcon } from '@/components/icons/vscode';

export const TOOLKIT = {
  SOFTWARE: [
    {
      title: 'Firefox',
      icon: <FirefoxIcon />,
      href: 'https://www.mozilla.org/en-US/firefox/',
      className: 'text-[#FF7139] hover:dark:border-[#FF7139]',
    },
    {
      title: 'VS Code',
      icon: <VSCodeIcon />,
      href: 'https://code.visualstudio.com/',
      className: 'text-[#007ACC] hover:dark:border-[#007ACC]',
    },
    {
      title: 'HTTPie',
      icon: <HttpieIcon />,
      href: 'https://httpie.io/',
      className: 'text-[#73DC8C] hover:dark:border-[#73DC8C]',
    },
    {
      title: 'Bitwarden',
      icon: <BitwardenIcon />,
      href: 'https://bitwarden.com/',
      className: 'text-[#175DDC] hover:dark:border-[#175DDC]',
    },
    {
      title: 'Starship',
      icon: <StarshipIcon />,
      href: 'https://starship.rs/',
      className: 'text-[#DD0B78] hover:dark:border-[#DD0B78]',
    },
    {
      title: 'GitHub',
      icon: <GithubSWIcon />,
      href: 'https://github.com/',
      className: 'text-[#181717] hover:dark:border-[#181717]',
    },
    {
      title: 'Figma',
      icon: <FigmaIcon />,
      href: 'https://www.figma.com/',
      className: 'text-[#F24E1E] hover:dark:border-[#F24E1E]',
    },
    {
      title: 'JIRA',
      icon: <JiraIcon />,
      href: 'https://www.atlassian.com/software/jira',
      className: 'text-[#0052CC] hover:dark:border-[#0052CC]',
    },
    {
      title: 'Gmail',
      icon: <GmailIcon />,
      href: 'https://www.google.com/gmail/about/',
      className: 'text-[#EA4335] hover:dark:border-[#EA4335]',
    },
    {
      title: 'Google Meet',
      icon: <GoogleMeetIcon />,
      href: 'https://workspace.google.com/intl/en/products/meet/',
      className: 'text-[#00897B] hover:dark:border-[#00897B]',
    },
    {
      title: 'WinTerminal',
      icon: <WindowsTerminalIcon />,
      href: 'https://apps.microsoft.com/detail/9n0dx20hk701?rtc=1&hl=en-eg&gl=EG',
      className: 'text-[#fff] hover:dark:border-[#fff]',
    },
  ],
  HARDWARE: [
    {
      title: 'Dell XPS 15 7590',
      description:
        'Core i7-9750H, NVIDIA GeForce GTX 1650, 32GB memory, 512MB SSD storage',
      href: 'https://www.gadgetguy.com.au/dell-xps-15-7950-2019-a-big-laptop-for-an-even-bigger-job/',
    },
    {
      title: 'Google Pixel 6a',
      description:
        '6.1 OLED Display, 12MP Camera, 6GB RAM, 4410mAh Battery, 128GB Storage, Android 12',
      href: 'https://www.gsmarena.com/google_pixel_6a-11229.php',
    },
    {
      title: 'Xiaomi Mi In-Ear Earphone Basic ',
      description: 'Built-in Microphone And Silicone Ear Tips',
      href: 'https://www.amazon.eg/-/en/Xiaomi-Earphone-Built-Microphone-Silicone/dp/B01N0Z1YKE',
    },
  ],
};
