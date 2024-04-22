import Link from 'next/link';

import { IPost } from '@/lib/posts';
import { calculateReadingTime, reformatDate } from '@/lib/utils';

import { ArrowUpRightIcon } from './icons/arrow-up-right';

interface PostCardProps {
  post: IPost;
  views: number;
}

export const PostCard = ({ post, views }: PostCardProps) => {
  return (
    <Link
      key={post.slug}
      href={`/posts/${post.slug}`}
      className="flex flex-row justify-between items-center duration-300 hover:bg-neutral-800/95 p-4 rounded-lg cursor-pointer min-h-[5rem] max-h-[5rem]"
    >
      <div className="flex flex-col space-y-1">
        <span className="text-neutral-50/95 font-bold lowercase">
          {post.metadata.title}
        </span>
        <div className="flex flex-row space-x-2 items-center text-stone-400/95 font-light lowercase">
          <span>{reformatDate(post.metadata.publishedAt)}</span>
          <span className="h-1 w-1 bg-stone-400/95 rounded-full" />
          <span>
            <span>
              {Intl.NumberFormat('en-US', {
                notation: 'compact',
              }).format(views)}{' '}
              {' views'}
            </span>
          </span>
          <span className="h-1 w-1 bg-stone-400/95 rounded-full" />
          <span>
            <span>
              {calculateReadingTime(post.content)}
              {' min read'}
            </span>
          </span>
        </div>
      </div>
      <ArrowUpRightIcon />
    </Link>
  );
};
