import React from 'react';

import { Fira_Code } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import { postProcess, preProcess } from '@/lib/rehype-pre-raw';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrism from 'rehype-prism-plus';

import { CopyButton } from './copy-button';

const monoFont = Fira_Code({ subsets: ['latin'], display: 'swap' });

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [preProcess, rehypePrism, postProcess],
  },
};

function Table({ data }: { data: any }) {
  let headers = data.headers.map((header: any, index: any) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row: any, index: any) => (
    <tr key={index}>
      {row.map((cell: any, cellIndex: any) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props: any) {
  let href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Callout(props: any) {
  return (
    <div className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

function CodeBlock({ children, ...props }: { children: any; title: string }) {
  return (
    <div className={monoFont.className}>
      <div className="rounded-t-md px-4 py-2 bg-black text-sm border-neutral-800/95 border-x-[1px] border-t-[1px] text-stone-400/95 flex flex-row justify-between items-center">
        <div>{props.title}</div>

        <CopyButton text={children.props.raw} />
      </div>
      {children}
    </div>
  );
}

function TOC({ children }: { children: any }) {
  return (
    <details id="toc" className="hover:cursor-pointer">
      <summary className="uppercase text-lg">On this Page</summary>
      {children}
    </details>
  );
}

function JustifiedText({ children }: { children: string }) {
  return <p className="text-justify">{children}</p>;
}

let components = {
  TOC,
  JustifiedText,
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  Table,
  CodeBlock,
};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={options}
    />
  );
}
