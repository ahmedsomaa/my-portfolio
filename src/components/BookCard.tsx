'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IBook } from '@/config/reading';
import { reformatDate } from '@/lib/utils';

import { ArrowUpRightIcon } from './icons/arrow-up-right';
import { LinkIcon } from './icons/link';

interface BookCardProps {
  book: IBook;
}
export const BookCard = ({ book }: BookCardProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={book.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-row justify-between items-center duration-300 md:hover:bg-neutral-800/95 md:p-4 rounded-lg cursor-pointer min-h-[6rem] max-h-[6rem]"
    >
      <div className="flex flex-row space-x-4">
        <div className="flex flex-col">
          <span className="font-bold text-neutral-50/95">{book.title} </span>
          <span className="font-light text-stone-400/95">{book.author}</span>
          {book.finished && (
            <span className="font-light text-sm text-yellow-600/95">
              {'★'.repeat(book.rating)} - {book.rating}
            </span>
          )}
          <span className="font-light text-sm text-neutral-500/95">
            {book.finished
              ? `Finished: ${reformatDate(book.dateFinished)}`
              : `Currently reading`}
          </span>
        </div>
      </div>
      {pathname === '/' ? <ArrowUpRightIcon /> : <LinkIcon />}
    </Link>
  );
};
