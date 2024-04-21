'use client';

import React from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { PostCard } from '@/components/PostCard';
import CONFIG from '@/config';
import { IPost } from '@/lib/posts';

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

  return (
    <div className="grid grid-cols-1 gap-10 w-full">
      <div className="flex flex-col">
        <span className="text-2xl font-bold md:px-6 mb-6 md:mb-4 lowercase">
          All Posts
        </span>
        <div className="flex flex-row space-x-4 mb-6 md:mb-4 text-sm  md:px-6 overflow-x-auto line-clamp-1 text-nowrap">
          {CONFIG.postsFilters.map(({ tag, href, name }) => (
            <Link
              key={name}
              href={href}
              className={`${_tag === tag ? 'text-secondaryDark underline' : 'text-secondaryDarker'} hover:text-secondaryDark duration-200 hover:underline`}
            >
              {name}
            </Link>
          ))}
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
