import { useState } from 'react'
import { useLocation } from 'react-router-dom'
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
  const { pathname } = useLocation();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.mobileMenuContainer}>
        <a
          href="/"
          className={styles.navLink}
        >
          victor-marques
        </a>
        <button
          title="Menu"
          type="button"
          onClick={() => setOpenMenu(!openMenu)}
          className={[
            styles.menuIconBtn,
            openMenu ? styles.open : '',
          ].join(' ')}
        >
          <div />
          <div />
          <div />
        </button>
      </div>
      <nav
        className={[
          styles.navContainer,
          openMenu ? styles.open : '',
        ].join(' ')}
      >
        <ul className={styles.navList}>
          {navLinks.map(link => (
            <li
              key={link.name}
              className={styles.navItem}
            >
              {link.name &&
                <a
                  href={link.path}
                  className={[
                    styles.navLink,
                    pathname === link.path ? styles.activeLink : '',
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