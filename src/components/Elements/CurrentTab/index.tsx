import { ProfessionalInfoSub } from '@/sections/AboutMe/types'
import styles from './styles.module.scss'

interface CurrentTabProps {
  path: ProfessionalInfoSub | string
}

export const CurrentTab = ({
  path,
}: CurrentTabProps) => {
  return (
    <div className={styles.tab}>
      <i className="ri-code-line" />
      <span>{path}.html</span>
      <i className="ri-close-line" />
    </div>
  )
}