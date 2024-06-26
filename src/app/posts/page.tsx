import React from 'react';

import { getPosts } from '@/lib/posts';
import { Redis } from '@upstash/redis';

import Posts from './posts';

const redis = Redis.fromEnv();
export const revalidate = 0;

export const metadata = {
  title: 'Blog',
  description: 'explore and read my insightful and helpful blog posts',
};

export default async function PostsPage() {
  let allPosts = getPosts();

  let publishedPosts = allPosts
    .filter((post) => !post.metadata.isDraft)
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime(),
    );

  const views = (
    await redis.mget<number[]>(
      ...publishedPosts.map((p) => ['pageviews', 'posts', p.slug].join(':')),
    )
  ).reduce(
    (acc, v, i) => {
      acc[publishedPosts[i].slug] = v ?? 0;
      return acc;
    },
    {} as Record<string, number>,
  );
  return <Posts allPosts={publishedPosts} views={views} />;
}
