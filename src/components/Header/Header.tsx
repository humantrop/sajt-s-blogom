'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className={`${styles.header} ${isHome ? styles.transparent : ''}`}>
      <Link href="/" className={styles.logo}>
        AI Blog
      </Link>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href="/" className={styles.navLink}>
              Pocetna
            </Link>
          </li>
          <li>
            <Link href="/o-meni" className={styles.navLink}>
              O blogu
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
