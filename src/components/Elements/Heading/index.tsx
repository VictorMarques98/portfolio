import { ReactNode } from 'react'
import styles from './styles.module.scss'

export interface HeadingProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  weight?: 400 | 600 | 700 | 900
  style?: 'italic' | 'normal'
  color?: string
  children: ReactNode
}

export const Heading = (props: HeadingProps) => {
  const {
    tag = 'h1',
    weight,
    style,
    color,
    children
  } = props;

  const CustomHeading = tag;

  return (
    <CustomHeading
      data-testid={`title-${tag}`}
      className={styles[tag]}
      style={{
        fontWeight: weight,
        fontStyle: style,
        color
      }}
    >
      {children}
    </CustomHeading>
  )
}