import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';
import styles from './page.module.css';

export default function Home() {
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <main>
      <section className={styles.hero}>
        <h1 className={styles.title}>Razumite AI. Jednostavno.</h1>
        <p className={styles.subtitle}>
          Edukativni blog o vestackoj inteligenciji — za sve koji zele
          da razumeju kako AI menja svet oko nas.
        </p>
        <Link href="/blog" className={styles.cta}>
          Citaj blog &rarr;
        </Link>
      </section>

      <section className={styles.latest}>
        <div className={styles.latestInner}>
          <h2 className={styles.sectionTitle}>Najnoviji clanci</h2>
          <div className={styles.postsGrid}>
            {posts.map(post => (
              <article key={post.id} className={styles.postCard}>
                <time className={styles.postDate}>
                  {new Date(post.date).toLocaleDateString('sr-RS')}
                </time>
                <h3 className={styles.postTitle}>
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
              </article>
            ))}
          </div>
          <Link href="/blog" className={styles.allPosts}>
            Svi clanci &rarr;
          </Link>
        </div>
      </section>

      <section className={styles.topics}>
        <div className={styles.topicsInner}>
          <h2 className={styles.sectionTitle}>Teme koje pokrivamo</h2>
          <div className={styles.topicsGrid}>
            <div className={styles.topicCard}>
              <h3>Generativni AI</h3>
              <p>ChatGPT, Claude, Midjourney i drugi alati koji stvaraju sadrzaj</p>
            </div>
            <div className={styles.topicCard}>
              <h3>Masinsko ucenje</h3>
              <p>Osnove i koncepti iza vestacke inteligencije</p>
            </div>
            <div className={styles.topicCard}>
              <h3>AI alati</h3>
              <p>Prakticni alati za produktivnost i svakodnevni rad</p>
            </div>
            <div className={styles.topicCard}>
              <h3>Etika AI</h3>
              <p>Pitanja odgovornosti, privatnosti i buducnosti</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
