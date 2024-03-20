import React from 'react';

import Link from 'next/link';

import CONFIG from '@/config';
import { reformatDate } from '@/lib/utils';

type Book = (typeof CONFIG.reading)[number];
type BooksByYear = { [year: string]: Book[] };

export const metadata = {
  title: 'Read',
  description: 'Here are all the projects I have built.',
};

export default function ReadingPage() {
  const booksByYear = CONFIG.reading.reduce<BooksByYear>((acc, book) => {
    const year = new Date(book.dateFinished).getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(book);
    return acc;
  }, {});
  const sortedYears = Object.entries(booksByYear).sort((a, b) =>
    b[0].localeCompare(a[0]),
  );

  return (
    <div className="grid grid-cols-1 gap-10 pb-10 w-full">
      <div className="flex flex-col">
        <Link
          href="/"
          className="flex flex-row space-x-2 items-center md:px-4 group cursor-pointer mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="text-secondaryDarker group-hover:-translate-x-1 duration-200 rotate-180"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-secondaryDarker">Back</span>
        </Link>
        <div className="flex flex-col space-y-2  md:px-4 mb-6 md:mb-4">
          <span className="text-4xl font-bold">Books I&apos;ve Read</span>
          <span className="text-sm text-zinc-400">
            Here is a list of {CONFIG.reading.length} books I&apos;ve read. Last
            updated: 01/12/2024.
          </span>
        </div>

        <div className="flex flex-col space-y-4 mb-6 md:mb-4">
          {sortedYears.map(([year, books]) => (
            <div key={year}>
              <h2 className="text-2xl font-bold my-4 md:px-4">
                {year}{' '}
                <span className="font-medium text-base text-neutral-400">
                  ({books.length})
                </span>
              </h2>
              <div className="grid grid-cols-1 gap-6 md:gap-1">
                {books.map((book, idx) => {
                  const reformattedDate = reformatDate(book.dateFinished);

                  return (
                    <Link
                      key={idx}
                      href={book.link}
                      target="_blank"
                      className="flex flex-row justify-between  space-x-8 md:space-x-0  items-center duration-300 md:hover:bg-hoverBackground md:p-4 rounded-lg cursor-pointer"
                    >
                      <div className="flex flex-row space-x-4">
                        <div className="flex flex-col">
                          <span className="text-secondaryDark">
                            {book.title}
                          </span>
                          <span className="text-zinc-400">
                            by {book.author}
                          </span>
                          <span className="text-yellow-600">
                            {'★'.repeat(book.rating)}
                          </span>
                          <span className="text-zinc-400">
                            Finished: {reformattedDate}
                          </span>
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-link text-secondaryDarker w-[20px] md:w-auto"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
