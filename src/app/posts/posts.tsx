'use client';

import React, { useMemo } from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { PostCard } from '@/components/PostCard';
import { usePagination } from '@/hooks/use-pagination';
import { IPost } from '@/lib/posts';
import { cn } from '@/utils/cn';
import { ChevronsLeftIcon, ChevronsRightIcon } from 'lucide-react';

const MAX_PAGE_SIZE = 6;

export default function Posts({
  allPosts,
  views,
}: {
  allPosts: any;
  views?: any;
}) {
  const searchParams = useSearchParams();
  const _tag = searchParams.get('tag');

  const filteredPosts = _tag
    ? allPosts.filter((post: any) => post.metadata.tag.includes(_tag))
    : allPosts;

  const filteredPostsCount = useMemo(
    () => filteredPosts.length,
    [filteredPosts],
  );

  const {
    currentPage,
    totalPages,
    startPage,
    endPage,
    pages,
    onPressFirst,
    onPressLast,
    goToPage,
  } = usePagination({
    totalSize: filteredPostsCount,
    pageSize: MAX_PAGE_SIZE,
  });

  return (
    <div className="grid grid-cols-1 gap-10 w-full min-h-[40rem] max-h-[40rem]">
      <div className="flex flex-col space-y-4">
        <div className="space-y-1">
          <h2 className="text-2xl text-neutral-50/95 font-semibold md:px-6 lowercase">
            my blog{' '}
            <span className="font-medium text-base text-neutral-500/95 ">
              ({filteredPosts.length})
            </span>
          </h2>
          <span className="text-sm text-neutral-500/95 font-light lowercase md:px-6">
            explore and read my insightful and helpful blog posts
          </span>
        </div>
        <div className="flex flex-row space-x-4 text-sm md:px-6 overflow-x-auto line-clamp-1 text-nowrap">
          {filters
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ tag, href, name }) => (
              <Link
                key={name}
                href={href}
                className={cn(
                  'hover:text-neutral-50/95 duration-200 hover:underline text-neutral-50/95',
                  _tag == tag && 'text-neutral-500/95 underline',
                )}
              >
                {name}
              </Link>
            ))}
        </div>

        <div className="space-y-6">
          <div className="flex flex-col md:space-y-1 md:px-2 min-h-[30rem] max-h-[30rem]">
            {filteredPostsCount > 0 ? (
              filteredPosts
                .slice(startPage, endPage)
                .sort(
                  (a: IPost, b: IPost) =>
                    new Date(b.metadata.publishedAt).getTime() -
                    new Date(a.metadata.publishedAt).getTime(),
                )
                .map((post: IPost) => {
                  return (
                    <PostCard
                      post={post}
                      key={post.slug}
                      views={views[post.slug]}
                    />
                  );
                })
            ) : (
              <span className="md:px-4 text-neutral-50/95">
                there are no {_tag} blog posts currently
              </span>
            )}
          </div>

          {filteredPostsCount > MAX_PAGE_SIZE && (
            <div className="flex flex-row items-center justify-center space-x-2">
              <button
                onClick={onPressFirst}
                disabled={currentPage === 1}
                className="rounded-lg py-2 px-4 hover:bg-gray-50/5 disabled:text-secondaryDarker"
              >
                <ChevronsLeftIcon className="h-4 w-4" />
              </button>
              {pages &&
                pages.map((page) => (
                  <button
                    key={`page-${page}-btn`}
                    disabled={currentPage == page}
                    onClick={() => goToPage(page)}
                    className={cn(
                      'text-sm rounded-lg py-2 px-4 hover:bg-gray-50/5 disabled:text-secondaryDarker',
                      currentPage === page && 'bg-gray-50/5',
                    )}
                  >
                    {page}
                  </button>
                ))}
              <button
                onClick={onPressLast}
                disabled={currentPage === totalPages}
                className="rounded-lg py-2 px-4 hover:bg-gray-50/5 disabled:text-secondaryDarker"
              >
                <ChevronsRightIcon className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const filters = [
  { tag: null, name: 'all', href: '/posts' },
  {
    tag: 'technical',
    name: 'technical',
    href: '/posts?tag=technical',
  },
  {
    tag: 'personal',
    name: 'personal',
    href: '/posts?tag=personal',
  },
  {
    tag: 'tips',
    name: 'tips and tricks',
    href: '/posts?tag=tips',
  },
  {
    tag: 'random',
    name: 'random',
    href: '/posts?tag=random',
  },
];
