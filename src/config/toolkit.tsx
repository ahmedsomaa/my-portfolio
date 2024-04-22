import { BitwardenIcon } from '@/components/icons/software/bitwarden';
import { FigmaIcon } from '@/components/icons/software/figma';
import { FirefoxIcon } from '@/components/icons/software/firefox';
import { GithubSWIcon } from '@/components/icons/software/github-sw';
import { GmailIcon } from '@/components/icons/software/gmail';
import { HttpieIcon } from '@/components/icons/software/httpie';
import { JiraIcon } from '@/components/icons/software/jira';
import { GoogleMeetIcon } from '@/components/icons/software/meet';
import { StarshipIcon } from '@/components/icons/software/starship';
import { WindowsTerminalIcon } from '@/components/icons/software/terminal';
import { VSCodeIcon } from '@/components/icons/software/vscode';

export const TOOLKIT = {
  SOFTWARE: [
    {
      title: 'Firefox',
      icon: <FirefoxIcon />,
      href: 'https://www.mozilla.org/en-US/firefox/',
      className:
        'text-[#FF7139] hover:dark:border-[#FF7139] hover:bg-gradient-to-br from-gray-50/5 to-[#FF7139]/5',
    },
    {
      title: 'VS Code',
      icon: <VSCodeIcon />,
      href: 'https://code.visualstudio.com/',
      className:
        'text-[#007ACC] hover:dark:border-[#007ACC] hover:bg-gradient-to-br from-gray-50/5 to-[#007ACC]/5',
    },
    {
      title: 'HTTPie',
      icon: <HttpieIcon />,
      href: 'https://httpie.io/',
      className:
        'text-[#73DC8C] hover:dark:border-[#73DC8C] hover:bg-gradient-to-br from-gray-50/5 to-[#73DC8C]/5',
    },
    {
      title: 'Bitwarden',
      icon: <BitwardenIcon />,
      href: 'https://bitwarden.com/',
      className:
        'text-[#175DDC] hover:dark:border-[#175DDC] hover:bg-gradient-to-br from-gray-50/5 to-[#175DDC]/5',
    },
    {
      title: 'Starship',
      icon: <StarshipIcon />,
      href: 'https://starship.rs/',
      className:
        'text-[#DD0B78] hover:dark:border-[#DD0B78] hover:bg-gradient-to-br from-gray-50/5 to-[#DD0B78]/5',
    },
    {
      title: 'GitHub',
      icon: <GithubSWIcon />,
      href: 'https://github.com/',
      className:
        'text-neutral-50 hover:dark:border-neutral-50 hover:bg-gradient-to-br from-gray-50/5 to-neutral-50/5',
    },
    {
      title: 'Figma',
      icon: <FigmaIcon />,
      href: 'https://www.figma.com/',
      className:
        'text-[#F24E1E] hover:dark:border-[#F24E1E] hover:bg-gradient-to-br from-gray-50/5 to-[#F24E1E]/5',
    },
    {
      title: 'JIRA',
      icon: <JiraIcon />,
      href: 'https://www.atlassian.com/software/jira',
      className:
        'text-[#0052CC] hover:dark:border-[#0052CC] hover:bg-gradient-to-br from-gray-50/5 to-[#0052CC]/5',
    },
    {
      title: 'Gmail',
      icon: <GmailIcon />,
      href: 'https://www.google.com/gmail/about/',
      className:
        'text-[#EA4335] hover:dark:border-[#EA4335] hover:bg-gradient-to-br from-gray-50/5 to-[#EA4335]/5',
    },
    {
      title: 'Google Meet',
      icon: <GoogleMeetIcon />,
      href: 'https://workspace.google.com/intl/en/products/meet/',
      className:
        'text-[#00897B] hover:dark:border-[#00897B] hover:bg-gradient-to-br from-gray-50/5 to-[#00897B]/5',
    },
    {
      title: 'Win Terminal',
      icon: <WindowsTerminalIcon />,
      href: 'https://apps.microsoft.com/detail/9n0dx20hk701?rtc=1&hl=en-eg&gl=EG',
      className:
        'text-[#fff] hover:dark:border-[#fff] hover:bg-gradient-to-br from-gray-50/5 to-[#fff]/5',
    },
  ],
};
