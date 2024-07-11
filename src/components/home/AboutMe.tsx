import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/Badge';
import CONFIG from '@/config';

export default function AboutMe() {
  return (
    <>
      <p className="text-justify leading-6 text-stone-400/95">
        {CONFIG.profile.description} I am a full stack software engineer with a
        strong focus in front-end in{' '}
        <Badge title="react" href="https://react.dev/">
          <Image
            width="14"
            height="14"
            className="!mr-1"
            alt="React.js logomark"
            src="/logos/react-logo.svg"
          />
          React
        </Badge>
        . I aim to create beautiful and functional software that is both
        intuitive and enjoyable for users.
      </p>
      <br />
      <p className="text-justify leading-6 text-stone-400/95">
        I have a passion for learning, and I am constantly seeking to improve my
        skills through avid{' '}
        <Link href="/reads">
          <span className="inline-link underline hover:text-sky-300/95">
            reading
          </span>
        </Link>{' '}
        and{' '}
        <Link href="/posts">
          <span className="inline-link underline hover:text-lime-300/95">
            writing
          </span>
        </Link>
        . Currently interested in becoming a design engineer. Experimenting
        building apps with{' '}
        <Badge title="next.js" href="https://nextjs.org">
          <Image
            width="14"
            height="14"
            className="!mr-1"
            alt="Next.js logomark"
            src="/logos/next-logo.svg"
          />
          Next.js
        </Badge>
        ,{' '}
        <Badge title="typescript" href="https://www.typescriptlang.org/">
          <Image
            width="14"
            height="14"
            className="!mr-1"
            alt="TypeScript logomark"
            src="/logos/typescript-logo.svg"
          />
          TypeScript
        </Badge>{' '}
        &{' '}
        <Badge title="tailwindcss" href="https://tailwindcss.com/">
          <Image
            width="14"
            height="14"
            className="!mr-1"
            alt="Tailwindcss logomark"
            src="/logos/tailwindcss.svg"
          />
          Tailwindcss
        </Badge>
      </p>
    </>
  );
}
