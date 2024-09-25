import styles from '../styles/header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
    {/* Overlay Image */}
    <img src="/images/header-background.jpg" alt="Header Background" className={styles.headerImage} />

    {/* Title Section */}
      <h1 className={styles.title}>Botanic Garden Girlie</h1>
      
      {/* Nav Bar Items List */}
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
