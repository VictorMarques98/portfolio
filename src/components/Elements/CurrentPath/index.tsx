import { CurrentPathState } from '@/sections/AboutMe/types'
import styles from './styles.module.scss'

export interface CurrentPathProps {
  path: CurrentPathState
}

export const CurrentPath = ({
  path
}: CurrentPathProps) => {
  if (!path.main || !path.sub || !path.content) return null;

  return (
    <div className={styles.container}>
      <span>
        {path.main}
        <strong>{' > '}</strong>
        {path.sub}
        <strong>{' > '}</strong>
        {path.content}.html
      </span>
    </div>
  )
}