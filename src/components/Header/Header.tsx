import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        NP
      </Link>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href="/" className={styles.navLink}>
              Početna
            </Link>
          </li>
          <li>
            <Link href="/o-meni" className={styles.navLink}>
              O meni
            </Link>
          </li>
          <li>
            <Link href="/blog" className={styles.navLink}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
