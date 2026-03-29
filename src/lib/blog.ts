import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

const blogsDirectory = path.join(process.cwd(), 'public', 'blog');

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  coverImage: string;
  readingTime: number;
  draft: boolean;
  content?: string;
  contentHtml?: string;
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function getAllBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(blogsDirectory).filter(fileName => fileName.endsWith('.md'));

  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title || 'Bez naslova',
      date: matterResult.data.date || new Date().toISOString().split('T')[0],
      author: matterResult.data.author || 'NP',
      excerpt: matterResult.data.excerpt || '',
      tags: matterResult.data.tags || [],
      coverImage: matterResult.data.coverImage || '',
      readingTime: calculateReadingTime(matterResult.content),
      draft: matterResult.data.draft === true,
      content: matterResult.content,
    };
  });

  return allPostsData
    .filter(post => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllTags(): string[] {
  const posts = getAllBlogPosts();
  const tagSet = new Set<string>();
  posts.forEach(post => post.tags.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(blogsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    if (matterResult.data.draft === true) {
      return null;
    }

    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkHtml)
      .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
      id: slug,
      title: matterResult.data.title || 'Bez naslova',
      date: matterResult.data.date || new Date().toISOString().split('T')[0],
      author: matterResult.data.author || 'NP',
      excerpt: matterResult.data.excerpt || '',
      tags: matterResult.data.tags || [],
      coverImage: matterResult.data.coverImage || '',
      readingTime: calculateReadingTime(matterResult.content),
      draft: false,
      content: matterResult.content,
      contentHtml,
    };
  } catch {
    return null;
  }
}

export function getAllBlogPostSlugs(): string[] {
  const fileNames = fs.readdirSync(blogsDirectory).filter(fileName => fileName.endsWith('.md'));
  return fileNames
    .filter(fileName => {
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      return matterResult.data.draft !== true;
    })
    .map(fileName => fileName.replace(/\.md$/, ''));
}
