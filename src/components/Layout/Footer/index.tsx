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
            href="https://www.linkedin.com/in/victormarquessantos/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <i className="ri-linkedin-fill" />
          </a>
        </li>
        <li className={styles.socialItem}/>
        <li className={styles.socialItem}>
          <a
            href="https://github.com/VictorMarques98"
            className={styles.socialLink}
          >
            <span>@victormarques98 </span>
            <i className="ri-github-fill" />
          </a>
        </li>
      </ul>
    </footer>
  )
}