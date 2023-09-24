import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { CurrentPathState } from '@/sections/AboutMe/types'
import {
  Console,
  Menu,
  Projects
} from '@/sections/AboutMe/components'
import {
  CurrentTab,
  CurrentPath
} from '@/components/Elements'
import styles from './styles.module.scss'

export const AboutMe = () => {
  const [currentPath, setCurrentPath] = useState<CurrentPathState>({
    main: 'professional-info',
    sub: 'experience',
    content: 'inklua-2023'
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <animated.main
      className={styles.container}
      style={{ ...fadeIn }}
    >
      <Menu
        currentPath={currentPath}
        setCurrentPath={setCurrentPath}
      />
      <div className={styles.sections}>
        <section className={styles.leftSection}>
          <CurrentTab tab={currentPath.content} />
          <CurrentPath path={currentPath} />
          <Console content={currentPath.content} />
        </section>
        <section className={styles.rightSection}>
          <CurrentTab emptyTab />
          <CurrentPath
            path={{
              ...currentPath,
              content: `${currentPath.content}.html > projects`
            }}
          />
          <Projects content={currentPath.content} />
        </section>
      </div>
    </animated.main>
  )
}