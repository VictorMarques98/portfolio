import styles from './styles.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.span}>
            find me in:
          </span>
        </li>
        <li className={styles.item}>
          <a
            href="/"
            className={styles.link}
          >
            <i className="ri-facebook-fill" />
          </a>
        </li>
        <li className={styles.item}>
          <a
            href="/"
            className={styles.link}
          >
            <i className="ri-twitter-fill" />
          </a>
        </li>
        <li className={styles.item}/>
        <li className={styles.item}>
          <a
            href="/"
            className={styles.link}
          >
            <span>@username </span>
            <i className="ri-github-fill" />
          </a>
        </li>
      </ul>
    </footer>
  )
}