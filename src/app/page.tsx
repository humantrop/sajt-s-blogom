import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';
import styles from './page.module.css';

export default function Home() {
  const posts = getAllBlogPosts().slice(0, 3);
  const featured = posts[0];
  const side = posts.slice(1, 3);

  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            razumite AI,<br />
            napisano <em>za vas.</em>
          </h1>
          <Link href="/blog" className={styles.heroCta}>
            Citaj blog
          </Link>
        </div>
      </section>

      {/* Latest posts */}
      <section className={styles.latest}>
        <div className={styles.latestInner}>
          <div className={styles.latestHeader}>
            <div>
              <span className={styles.latestLabel}>&mdash; Blog, Clanci, Edukacija</span>
              <h2 className={styles.latestTitle}>Budite u toku<br />sa AI svetom</h2>
            </div>
            <nav className={styles.latestNav}>
              <Link href="/blog">Blog &#x2197;</Link>
              <Link href="/o-meni">O blogu &#x2197;</Link>
            </nav>
          </div>

          <div className={styles.postsGrid}>
            {/* Featured large card */}
            {featured && (
              <Link href={`/blog/${featured.id}`} className={styles.featuredCard}>
                {featured.coverImage && (
                  <img
                    src={featured.coverImage}
                    alt={featured.title}
                    className={styles.featuredImage}
                  />
                )}
                <div className={styles.featuredOverlay} />
                <div className={styles.featuredContent}>
                  <span className={styles.featuredLabel}>&mdash; Izdvojeno</span>
                  <h3 className={styles.featuredTitle}>{featured.title}</h3>
                </div>
                <span className={styles.featuredArrow}>&#x2197;</span>
              </Link>
            )}

            {/* Side cards */}
            <div className={styles.sideCards}>
              {side.map(post => {
                const d = new Date(post.date);
                const day = d.getDate();
                const month = d.toLocaleDateString('sr-RS', { month: 'short' });
                const year = d.getFullYear();

                return (
                  <Link href={`/blog/${post.id}`} key={post.id} className={styles.sideCard}>
                    {post.coverImage && (
                      <div className={styles.sideImageWrap}>
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className={styles.sideImage}
                        />
                      </div>
                    )}
                    <div className={styles.sideBody}>
                      <div className={styles.sideInfo}>
                        <h3 className={styles.sideTitle}>{post.title}</h3>
                        <p className={styles.sideExcerpt}>{post.excerpt}</p>
                      </div>
                      <div className={styles.sideMeta}>
                        <span className={styles.sideDay}>{day}</span>
                        <span className={styles.sideMonthYear}>{month}<br />{year}</span>
                        {post.tags[0] && (
                          <span className={styles.sideTag}>{post.tags[0]}</span>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
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
