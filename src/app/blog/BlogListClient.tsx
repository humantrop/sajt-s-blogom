'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

interface BlogPostListItem {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  readingTime: number;
}

interface Props {
  posts: BlogPostListItem[];
  tags: string[];
}

export default function BlogListClient({ posts, tags }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const query = searchQuery.toLowerCase();
      const matchesSearch = query === '' ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query);
      const matchesTag = !activeTag || post.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
  }, [posts, searchQuery, activeTag]);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      <p className={styles.subtitle}>Istrazite nase clanke o vestackoj inteligenciji</p>

      <input
        type="text"
        placeholder="Pretrazite clanke..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className={styles.searchInput}
      />

      <div className={styles.tags}>
        <button
          className={!activeTag ? styles.tagActive : styles.tag}
          onClick={() => setActiveTag(null)}
        >
          Sve
        </button>
        {tags.map(tag => (
          <button
            key={tag}
            className={activeTag === tag ? styles.tagActive : styles.tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className={styles.postsGrid}>
        {filteredPosts.map(post => (
          <article key={post.id} className={styles.postCard}>
            <Link href={`/blog/${post.id}`}>
              <h2 className={styles.postTitle}>{post.title}</h2>
            </Link>
            <div className={styles.postMeta}>
              <span>{new Date(post.date).toLocaleDateString('sr-RS')}</span>
              {post.author && <span> &middot; {post.author}</span>}
              <span> &middot; {post.readingTime} min citanja</span>
            </div>
            {post.tags.length > 0 && (
              <div className={styles.postTags}>
                {post.tags.map(tag => (
                  <span key={tag} className={styles.postTagBadge}>{tag}</span>
                ))}
              </div>
            )}
            {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
            <Link href={`/blog/${post.id}`} className={styles.readMore}>
              Procitaj vise &rarr;
            </Link>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className={styles.noContent}>Nema rezultata za datu pretragu.</p>
      )}
    </main>
  );
}
