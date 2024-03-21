import React from 'react';

import { getPosts } from '@/lib/posts';
import { Redis } from '@upstash/redis';

import Posts from './posts';

const redis = Redis.fromEnv();
export const revalidate = 0;

export const metadata = {
  title: 'Posts',
  description: 'Read my thoughts.',
};

export default async function PostsPage() {
  let allPosts = getPosts();

  let publishedPosts = allPosts.filter((post) => !post.metadata.isDraft);

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
