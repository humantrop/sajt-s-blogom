import { getAllBlogPosts, getAllTags } from '@/lib/blog';
import BlogListClient from './BlogListClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | AI Blog',
  description: 'Procitajte nase najnovije clanke o vestackoj inteligenciji.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts().map(post => ({
    id: post.id,
    title: post.title,
    date: post.date,
    author: post.author,
    excerpt: post.excerpt,
    tags: post.tags,
    coverImage: post.coverImage,
    readingTime: post.readingTime,
    draft: post.draft,
  }));
  const tags = getAllTags();

  return <BlogListClient posts={posts} tags={tags} />;
}
