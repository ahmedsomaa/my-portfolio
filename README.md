# My portfolio ✨

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Upstash Redis](https://upstash.com/)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Beam Analytics](https://beamanalytics.io/)

## Running Locally

```bash
git clone https://github.com/hqasmei/portfolio.git
cd portfolio
bun install
bun dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/hqasmei/portfolio/blob/main/.env.example).

## Database 

Go to [Upstash](https://upstash.com/), create an account, create a database in Upstash Redis and add the generate UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN.

## Analytics

Go to [Beam Analytics](https://beamanalytics.io/), add your url and replace the data-token in src/app/layout.tsx.