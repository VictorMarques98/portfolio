import styles from './styles.module.scss'

export const Footer = () => {
  return (
    <footer>
      <ul className={styles.socialList}>
        <li className={styles.socialItem}>
          <span className={styles.infoText}>
            find me in:
          </span>
        </li>
        <li className={styles.socialItem}>
          <a
            href="/"
            className={styles.socialLink}
          >
            <i className="ri-facebook-fill" />
          </a>
        </li>
        <li className={styles.socialItem}>
          <a
            href="/"
            className={styles.socialLink}
          >
            <i className="ri-twitter-fill" />
          </a>
        </li>
        <li className={styles.socialItem}/>
        <li className={styles.socialItem}>
          <a
            href="/"
            className={styles.socialLink}
          >
            <span>@username </span>
            <i className="ri-github-fill" />
          </a>
        </li>
      </ul>
    </footer>
  )
}