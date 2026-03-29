import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogPostSlugs } from '@/lib/blog';
import Link from 'next/link';
import styles from './page.module.css';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogPostSlugs();
  return slugs.map(slug => ({
    slug,
  }));
}

export async function generateMetadata(props: Props) {
  const { slug } = await props.params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post nije pronadjen',
    };
  }

  return {
    title: `${post.title} | AI Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage(props: Props) {
  const { slug } = await props.params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.container}>
      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('sr-RS', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {post.author && <span>&middot; {post.author}</span>}
            <span>&middot; {post.readingTime} min citanja</span>
          </div>
          {post.tags.length > 0 && (
            <div className={styles.tagList}>
              {post.tags.map(tag => (
                <span key={tag} className={styles.tagBadge}>{tag}</span>
              ))}
            </div>
          )}
        </header>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
        />

        <footer className={styles.articleFooter}>
          <Link href="/blog" className={styles.backLink}>
            &larr; Nazad na blog
          </Link>
        </footer>
      </article>
    </main>
  );
}
