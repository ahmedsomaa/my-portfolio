'use client';

import React from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { ArrowLeftIcon } from '@/components/icons/arrow-left';
import PostCard from '@/components/PostCard';
import { IPost } from '@/lib/posts';

export default function Posts({
  allPosts,
  views,
}: {
  allPosts: any;
  views?: any;
}) {
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag');

  const filteredPosts = tag
    ? allPosts.filter((post: any) => post.metadata.tag.includes(tag))
    : allPosts;

  return (
    <div className="grid grid-cols-1 gap-10 pb-10 w-full">
      <div className="flex flex-col">
        <Link
          href="/"
          className="flex flex-row space-x-2 items-center md:px-6 group cursor-pointer mb-4"
        >
          <ArrowLeftIcon />
          <span className="text-secondaryDarker">Back</span>
        </Link>
        <span className="text-4xl font-bold md:px-6 mb-6 md:mb-4">
          All Posts
        </span>
        <div className="flex flex-row space-x-4 mb-6 md:mb-4 text-sm  md:px-6 overflow-x-auto line-clamp-1 text-nowrap">
          <Link
            href="/posts"
            className={`${tag === null ? 'text-secondaryDark underline' : 'text-secondaryDarker'} hover:text-secondaryDark duration-200 hover:underline`}
          >
            All
          </Link>
          <Link
            href="/posts?tag=technical"
            className={`${tag === 'technical' ? 'text-secondaryDark underline' : 'text-secondaryDarker'} hover:text-secondaryDark duration-200 hover:underline`}
          >
            Technical
          </Link>
          <Link
            href="/posts?tag=personal"
            className={`${tag === 'personal' ? 'text-secondaryDark underline' : 'text-secondaryDarker'} hover:text-secondaryDark duration-200 hover:underline`}
          >
            Personal
          </Link>
          <Link
            href="/posts?tag=book-notes"
            className={`${tag === 'book-notes' ? 'text-secondaryDark underline' : 'text-secondaryDarker'} hover:text-secondaryDark duration-200 hover:underline `}
          >
            Book Notes
          </Link>
          <Link
            href="/posts?tag=random"
            className={`${tag === 'random' ? 'text-secondaryDark underline' : 'text-secondaryDarker'} hover:text-secondaryDark duration-200 hover:underline`}
          >
            Random
          </Link>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-6 md:gap-1 md:px-2">
            {filteredPosts
              .sort((a: IPost, b: IPost) => {
                if (
                  new Date(a.metadata.publishedAt) >
                  new Date(b.metadata.publishedAt)
                ) {
                  return -1;
                }
                return 1;
              })
              .map((post: IPost) => {
                return (
                  <PostCard
                    post={post}
                    key={post.slug}
                    views={views[post.slug]}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
