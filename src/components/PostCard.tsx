import Link from 'next/link';

import { IPost } from '@/lib/posts';
import { calculateReadingTime, reformatDate } from '@/lib/utils';

import { ArrowUpRightIcon } from './icons/arrow-up-right';

interface PostCardProps {
  post: IPost;
  views: number;
}

export default function PostCard({ post, views }: PostCardProps) {
  return (
    <Link
      key={post.slug}
      href={`/posts/${post.slug}`}
      className="flex flex-row justify-between items-center duration-300 md:hover:bg-hoverBackground md:p-4 rounded-lg cursor-pointer"
    >
      <div className="flex flex-col space-y-2">
        <span className="text-secondaryDark">{post.metadata.title}</span>
        <div className="flex flex-row space-x-2 items-center text-secondaryDarker">
          <span>{reformatDate(post.metadata.publishedAt)}</span>
          <span className="h-1 w-1 bg-secondaryDarker rounded-full" />
          <span>
            <span>
              {Intl.NumberFormat('en-US', {
                notation: 'compact',
              }).format(views)}{' '}
              {' views'}
            </span>
          </span>
          <span className="h-1 w-1 bg-secondaryDarker rounded-full" />
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
}
