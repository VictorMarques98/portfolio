import { Links } from '@/sections/AboutMe/types'
import styles from './styles.module.scss'

interface SideMenuProps {
  currentLink: Links | string
  onClick: (link: Links) => void
}

interface SideMenuItems {
  icon: string
  name: Links
}

const sideMenuItems: SideMenuItems[] = [
  {
    icon: 'ri-terminal-box-fill',
    name: 'professional-info'
  },
  {
    icon: 'ri-file-info-fill',
    name: 'personal-info'
  },
  {
    icon: 'ri-gamepad-fill',
    name: 'hobbies'
  }
];

export const SideMenu = ({
  currentLink,
  onClick
}: SideMenuProps) => {
  return (
    <ul className={styles.sideMenu}>
      {sideMenuItems.map(({icon, name}) => (
        <li className={styles.item}>
          <button
            type='button'
            onClick={() => onClick(name)}
            className={[
              styles.link,
              currentLink === name ? styles.active : ''
            ].join(' ')}
          >
            <i className={icon} />
          </button>
        </li>
      ))}
    </ul>
  )
}