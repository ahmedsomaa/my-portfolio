import React from 'react';

import Link from 'next/link';

import { BookSection } from '@/components/home/BookSection';
import { ArrowLeftIcon } from '@/components/icons/arrow-left';
import CONFIG from '@/config';

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
          <ArrowLeftIcon />
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
                <BookSection />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
