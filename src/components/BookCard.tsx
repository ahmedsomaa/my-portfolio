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
      className="flex flex-row justify-between items-center duration-300 md:hover:bg-hoverBackground md:p-4 rounded-lg cursor-pointer"
    >
      <div className="flex flex-row space-x-4">
        <div className="flex flex-col">
          <span className="text-secondaryDark">
            {book.title}{' '}
            <span className="text-secondaryDarker">by {book.author}</span>
          </span>
          <span className="text-secondaryDarker">
            Finished: {reformatDate(book.dateFinished)}
          </span>
        </div>
      </div>
      {pathname === '/' ? <ArrowUpRightIcon /> : <LinkIcon />}
    </Link>
  );
};
