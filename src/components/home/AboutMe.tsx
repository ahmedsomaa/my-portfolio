import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/Badge';
import CONFIG from '@/config';

export default function AboutMe() {
  return (
    <>
      <p className="text-justify leading-6 text-secondaryDark">
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
      <p className="text-justify leading-6 text-secondaryDark">
        I have a passion for learning, and I am constantly seeking to improve my
        skills through avid <span className="inline-link">reading</span> and{' '}
        <Link href="/posts">
          <span className="inline-link underline">writing</span>
        </Link>
        . Currently interested in{' '}
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
        and{' '}
        <Badge title="golang" href="https://go.dev/">
          <Image
            width="14"
            height="14"
            className="!mr-1"
            alt="GoLang logomark"
            src="/logos/go-logo.svg"
          />
          Go
        </Badge>
        . Experimenting building apps with{' '}
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
        .
      </p>
    </>
  );
}
