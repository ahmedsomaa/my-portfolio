export const Footer = () => {
  return (
    <div className="flex flex-row space-y-6 md:space-y-10 pb-10">
      <p>
        Built with{' '}
        <a
          href="https://nextjs.org"
          className="hover:underline hover:text-[#000000]"
        >
          Next.js
        </a>
        ,{' '}
        <a
          href="https://mdxjs.com"
          className="hover:underline hover:text-[#1B1F24]"
        >
          MDX
        </a>
        ,{' '}
        <a
          href="https://tailwindcss.com"
          className="hover:underline hover:text-[#06B6D4]"
        >
          Tailwind
        </a>{' '}
        and{' '}
        <a
          href="https://vercel.com"
          className="hover:underline hover:text-[#000000]"
        >
          Vercel
        </a>
      </p>
    </div>
  );
};
