# Portfolio ✨

Bootstrapped from [here](https://github.com/hqasmei/portfolio) with my updates.

## Tech Stack

- Framework: [Next](https://nextjs.org/)
- Database: [Upstash](https://upstash.com/)
- Icons: [Phosphor](https://phosphoricons.com)
- Styling: [Tailwind](https://tailwindcss.com/)
- Deployment: [Vercel](https://vercel.com/home)
- Brand Icon Colors: [Simple Icons](https://simpleicons.org/)
- Project Logos: [LogoFast](https://shipfa.st/tools/logo-fast)
- Component Library: [Shadcn-ui](https://ui.shadcn.com/)
- Animated Components: [Aceternity UI](https://ui.aceternity.com/)

## My Updates

- I removed the analytics.
- I removed the convex package and folder.
- I created new pages `/about` and `/tools`.
- I removed the avatar and occupation from the header.
- I added a footer component and added the social media icons to it instead of the header.
- I changed the main mono font to [Fira Code](https://fonts.google.com/specimen/Fira+Code) from `next/font/google`.
- I changed the main sans font to [Familjen Grotesk](https://fonts.google.com/specimen/Familjen+Grotesk) using `next/font/google`.
- I changed the landing page to a bento grid using Aceternity's [Bento Grid Component](https://ui.aceternity.com/components/bento-grid).
- I separated the original `config.tsx` file into multiple files, [`profile.tsx`](./src/config/profile.tsx), [`projects.tsx`](./src//config/projects.tsx), and many other sections...etc.
- I changed the social media icons to ones from [Phosphor](https://phosphoricons.com).
- I removed the border around the social media icons and changed the hover text color with their original brand color, you can find this at [SimpleIcons](https://simpleicons.org/).

## Running Locally

```bash
git clone https://github.com/ahmedsomaa/my-portfolio
cd my-portfolio
bun install
nun run dev
```

Create a `.env` file similar to `.env.example` and provide the values for Upstash redis database.

## How to Use

- Change the data under [config](./src/config/) to yours.
- If you want to change the sans font, you can do this in [fonts.tsx](./src/app/fonts.tsx).
- If you want to change the mono font, you can do this in [mdx.tsx](./src/components/mdx.tsx) and [prism.css](./src/styles/prism.css);

## Acknowledgement

If you like this portfolio, give it a star and also give a star to the original repo [here](https://github.com/hqasmei/portfolio).
