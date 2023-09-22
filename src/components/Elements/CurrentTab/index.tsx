import { ProfessionalInfoSub } from '@/sections/AboutMe/types'
import styles from './styles.module.scss'

interface CurrentTabProps {
  tab: ProfessionalInfoSub | string
}

export const CurrentTab = ({
  tab,
}: CurrentTabProps) => {
  return (
    <div className={styles.tab}>
      <i className="ri-code-line" />
      <span>{tab}.html</span>
      <i className="ri-close-line" />
    </div>
  )
}