import { useState } from 'react'
import styles from './styles.module.scss'

const navLinks = [
  {
    name: 'victor marques',
    path: '/victor-marques',
  },
  {
    name: '_hello',
    path: '/',
  },
  {
    name: '_about-me',
    path: '/about-me',
  },
  {
    name: '_projects',
    path: '/projects',
  },
  {
    name: '',
    path: '',
  },
  {
    name: '_contact-me',
    path: '/contact-me',
  }
];

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const currentPath = "/";

  return (
    <header className={styles.header}>
      <div className={styles.mobileMenu}>
        <a
          href="/"
          className={styles.link}
        >
          victor-marques
        </a>
        <button
          title="Menu"
          type="button"
          onClick={() => setOpenMenu(!openMenu)}
          className={[
            styles.menuIcon,
            openMenu ? styles.open : '',
          ].join(' ')}
        >
          <div />
          <div />
          <div />
        </button>
      </div>
      <nav className={styles.nav}>
        <ul
          className={[
            styles.list,
            openMenu ? styles.open : '',
          ].join(' ')}
        >
          {navLinks.map(link => (
            <li
              key={link.name}
              className={styles.item}
            >
              {link.name &&
                <a
                  href={link.path}
                  className={[
                    styles.link,
                    currentPath === link.path ? styles.active : '',
                  ].join(' ')}
                >
                  {link.name}
                </a>
              }
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
};