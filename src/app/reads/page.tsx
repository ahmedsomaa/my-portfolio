import React from 'react';

import { BookCard } from '@/components/BookCard';
import CONFIG from '@/config';

type Book = (typeof CONFIG.reading)[number];
type BooksByYear = { [year: string]: Book[] };

export const metadata = {
  title: 'Readings',
  description: `a collection of the books I've read or currently reading.`,
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
    <>
      <div className="grid grid-cols-1 gap-10 pb-10 w-full min-h-[40rem] max-h-[40rem]">
        <div className="flex flex-col">
          <div className="flex flex-col space-y-2 md:px-6 mb-6 md:mb-4">
            <h2 className="text-2xl font-bold text-neutral-50/95 lowercase">
              readings
            </h2>
            <span className="text-sm text-stone-400/95 lowercase">
              a collection of the books I&apos;ve read or i&apos;m currently
              reading
            </span>
          </div>

          <div className="flex flex-col space-y-4 mb-6 md:mb-4">
            {sortedYears.map(([year, books]) => (
              <div key={year}>
                <h2 className="text-2xl font-bold my-4 md:px-6">
                  {year}{' '}
                  <span className="font-medium text-xs text-stone-400/95">
                    ({books.length})
                  </span>
                </h2>
                <div className="grid grid-cols-1 gap-6 md:gap-1">
                  <div className="flex flex-col space-y-8 md:space-y-1 md:px-2">
                    {books
                      .sort(
                        (a, b) =>
                          new Date(b.dateFinished).getTime() -
                          new Date(a.dateFinished).getTime(),
                      )
                      .slice()
                      .map((book) => (
                        <BookCard key={book.title} book={book} />
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
