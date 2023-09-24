import { ProfessionalInfoSub } from '@/sections/AboutMe/types'
import styles from './styles.module.scss'

interface CurrentTabProps {
  tab?: ProfessionalInfoSub | string
  emptyTab?: boolean
}

export const CurrentTab = ({ tab, emptyTab }: CurrentTabProps) => {

  if (emptyTab) return <div className={styles.emptyTab} />;

  return (
    <div className={styles.tab}>
      <i className="ri-code-line" />
      <span>{tab}.html</span>
      <i className="ri-close-line" />
    </div>
  )
}