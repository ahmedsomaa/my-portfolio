export const EXPERIENCE = [
  {
    id: 4,
    role: 'FrontEnd Software Engineer',
    company: 'Herwin Software',
    companyLogo: '/exp/herwin.webp',
    duration: 'Jan 2024 - Present',
    description:
      'Working on building the interface for an invoice reconciliation app with Nextjs.',
  },
  {
    id: 3,
    role: 'Software Engineer 2',
    company: 'Nodogoro',
    companyLogo: '/exp/nodogoro.webp',
    duration: 'May 2023 - Dec 2023',
    description:
      'Worked on building multiple AI apps powered by OpenAI and Next.js.',
  },
  {
    id: 2,
    role: 'Software Engineer 1',
    company: 'New Smart Egypt',
    companyLogo: '/exp/nse.webp',
    duration: 'Nov 2021 - May 2023',
    description:
      'Worked on integrating between vendor softwares (Odoo, Infor, ZKTeco...etc.) using APIs.',
  },
  {
    id: 1,
    role: 'Software Engineer',
    company: 'VOIS',
    companyLogo: '/exp/vois.webp',
    duration: 'Jul 2020 - Oct 2021',
    description:
      'Worked on multiple web apps including HR Management System, Dashboards, Maps...etc.',
  },
];

export interface IExperience {
  id: number;
  role: string;
  company: string;
  companyLogo: string;
  duration: string;
  description: string;
}
