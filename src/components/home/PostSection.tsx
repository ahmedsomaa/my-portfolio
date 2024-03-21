import { getPosts } from '@/lib/posts';
import { Redis } from '@upstash/redis';

import { FeaturedSection } from '../FeaturedSection';
import PostCard from '../PostCard';

const redis = Redis.fromEnv();

export const PostSection = async () => {
  let allPosts = getPosts();
  const views = (
    await redis.mget<number[]>(
      ...allPosts.map((p) => ['pageviews', 'posts', p.slug].join(':')),
    )
  ).reduce(
    (acc, v, i) => {
      acc[allPosts[i].slug] = v ?? 0;
      return acc;
    },
    {} as Record<string, number>,
  );
  return (
    <FeaturedSection
      title="Recent Posts"
      redirect={{ text: 'All Posts', url: '/posts' }}
    >
      <div className="flex flex-col space-y-8 md:space-y-1 md:px-2">
        {allPosts
          .filter((post) => post.metadata.featured === 'true')
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .slice(0, 3)
          .map((post) => (
            <PostCard key={post.slug} post={post} views={views[post.slug]} />
          ))}
      </div>
    </FeaturedSection>
  );
};
