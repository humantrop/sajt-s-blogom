import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Top grid */}
        <div className={styles.grid}>
          {/* Brand / logo */}
          <div className={styles.brandCol}>
            <span className={styles.brand}>AI<br />Blog</span>
          </div>

          {/* Info */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>AI Blog Edukacija</h4>
            <p className={styles.colText}>
              Edukativni blog o<br />
              vestackoj inteligenciji
            </p>
          </div>

          {/* Navigation */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Stranice</h4>
            <ul className={styles.colList}>
              <li><Link href="/">Pocetna</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/o-meni">O blogu</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Pravne informacije</h4>
            <ul className={styles.colList}>
              <li><Link href="#">Uslovi koriscenja</Link></li>
              <li><Link href="#">Politika privatnosti</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Kontakt</h4>
            <ul className={styles.colList}>
              <li><a href="mailto:kontakt@aiblog.rs">kontakt@aiblog.rs</a></li>
            </ul>
            <h4 className={styles.colTitleSmall}>Pratite nas</h4>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M15 9h-2a1 1 0 0 0-1 1v2h3l-.5 3H12v5M10 12H8" />
                </svg>
              </a>
              <a href="#" aria-label="X (Twitter)">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 17l6-10M15 17l-2.5-3.5M9 7l2.5 3.5" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <rect x="8" y="8" width="8" height="8" rx="2" />
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="16.5" cy="7.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10,9 16,12 10,15" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className={styles.statement}>
          Ovaj blog je posvecen sirenju znanja o vestackoj inteligenciji na srpskom jeziku.
          Verujemo da pristupacna edukacija o AI moze da pomogne svakome da bolje razume
          tehnologiju koja oblikuje nasu buducnost.
        </p>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} AI Blog. Sva prava zadrzana.</p>
        </div>
      </div>
    </footer>
  );
}
