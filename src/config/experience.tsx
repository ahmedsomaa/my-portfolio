export const EXPERIENCE = [
  {
    id: 4,
    role: 'Mid-level Front-End Software Engineer',
    company: 'Herwin Software',
    companyLogo: '/exp/herwin.webp',
    duration: 'Jan 2024 - Present',
    description:
      'Working on developing a reverse invoice reconciliation application using Next.js.',
  },
  {
    id: 3,
    role: 'Software Engineer II',
    company: 'Nodogoro',
    companyLogo: '/exp/nodogoro.webp',
    duration: 'May 2023 - Dec 2023',
    description:
      'Worked on building multiple AI-powered apps using OpenAI, LangChain and Next.js.',
  },
  {
    id: 2,
    role: 'Software Engineer I',
    company: 'New Smart Egypt',
    companyLogo: '/exp/nse.webp',
    duration: 'Nov 2021 - May 2023',
    description:
      'Worked on building web/mobile apps & developing APIs to integrate between multiple systems including Odoo, ZKTeco..etc.',
  },
  {
    id: 1,
    role: 'Software Engineer',
    company: '_VOIS',
    companyLogo: '/exp/vois.webp',
    duration: 'Jul 2020 - Oct 2021',
    description:
      'Worked on building and providing technical support for multiple web apps including HR Management System, Covid-19 tracker, CRM...etc.',
  },
];

export type IExperience = (typeof EXPERIENCE)[0];
