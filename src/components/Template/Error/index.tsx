import { IconRobotDeadOutline } from '@/styles/icons'
import styles from './styles.module.scss'

export const Error = () => {
  return (
    <div className={styles.container}>
      <IconRobotDeadOutline />
      <h1>Oops, looks like something went wrong!</h1>
      <p>Try again later</p>
    </div>
  )
}