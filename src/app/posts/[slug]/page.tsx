import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { CustomMDX } from '@/components/mdx';
import { getPosts } from '@/lib/posts';
import { calculateReadingTime, reformatDate } from '@/lib/utils';
import { Redis } from '@upstash/redis';

import { ReportView } from './view';

const redis = Redis.fromEnv();
export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata | undefined> {
  const post = getPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  let { metadata } = post;
  let ogImage = metadata.image
    ? metadata.image
    : `https://www.som3aware.vercel.app/og?title=${metadata.title}`;

  return {
    title: metadata.title,
    description: metadata.summary,
    openGraph: {
      title: metadata.title,
      description: metadata.summary,
      type: 'article',
      url: `www.som3aware.vercel.app/posts/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.summary,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: { params: any }) {
  const post = getPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  const views =
    (await redis.get<number>(['pageviews', 'posts', params.slug].join(':'))) ??
    0;

  return (
    <div className="w-full md:px-6">
      <ReportView slug={post.slug} />
      {post.metadata.image && (
        <Image
          priority
          width={600}
          height={400}
          unoptimized
          src={post.metadata.image}
          alt={'cover image for the post ' + post.metadata.title}
          className="rounded-lg my-4 shadow-md shadow-stone-900/95"
        />
      )}
      <div className="space-y-1">
        <h1 className="title font-bold text-2xl max-w-full">
          {post.metadata.title}
        </h1>
        <p className="text-base text-neutral-50/95">{post.metadata.summary}</p>
      </div>

      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <div className="flex flex-row space-x-2 items-center text-stone-400/95 ">
          <span>{reformatDate(post.metadata.publishedAt)}</span>
          <span className="h-1 w-1 bg-stone-400/95 rounded-full" />
          <span>
            <span>
              {Intl.NumberFormat('en-US', { notation: 'compact' }).format(
                views,
              )}{' '}
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
      <article className="prose prose-invert pb-10 text-sm">
        <CustomMDX source={post.content} />
      </article>
    </div>
  );
}
