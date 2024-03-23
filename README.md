# Portfolio ✨

Bootstrapped from [here](https://github.com/hqasmei/portfolio) with my updates.

## Tech Stack

- Framework: [Next](https://nextjs.org/)
- Styling: [Tailwind](https://tailwindcss.com/)
- Database: [Upstash](https://upstash.com/)
- Icons: [Iconair](https://iconoir.com/)
- Project Logos: [LogoFast](https://shipfa.st/tools/logo-fast)
- Deployment: [Vercel](https://vercel.com/home)
- Brand Icon Colors: [Simple Icons](https://simpleicons.org/)

## Updates

- I removed the analytics.
- I removed the convex folder and package.
- I added a footer component.
- I changed the main sans font to [HubotSans](https://github.com/github/hubot-sans) using `next/font/local`.
- I changed the main mono font to [Victor Mono](https://fonts.google.com/specimen/Victor+Mono) from `next/font/google`.
- I changed the background to a gradient, you can use [Tailwind CSS Gradient Generator](https://tailwindcomponents.com/gradient-generator/) to make yours.
- I added a grainy texture to the background, you can find it [here](./src//components/GrainyBackground.tsx);
- I separated the original `config.tsx` file into multiple files, [`profile.tsx`](./src/config/profile.tsx), [`projects.tsx`](./src//config/projects.tsx) & [`reading.tsx`](./src/config/reading.tsx), so it would be much easier to add your data.
- I changed the social media icons to ones from [Iconair](https://iconoir.com/).
- I removed the border around the social media icons and changed the hover text color with their original brand color, you can find this at [SimpleIcons](https://simpleicons.org/).

## Running Locally

```bash
git clone https://github.com/ahmedsomaa/my-portfolio
cd my-portfolio
pnpm install
pnpm dev
```

Create a `.env` file similar to `.env.example` and provide the values for Upstash redis database.

## How to Use

- Change the data under [config](./src/config/) to yours.
- If you want to change the sans font, you can do this in [fonts.tsx](./src/app/fonts.tsx).
- If you want to change the mono font, you can do this in [mdx.tsx](./src/components/mdx.tsx) and [prism.css](./src/styles/prism.css);

## Acknowledgement

If you like this portfolio, star the original repo [here](https://github.com/hqasmei/portfolio).
