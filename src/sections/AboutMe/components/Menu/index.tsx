import { Fragment } from 'react'
import { SideMenu } from '@/sections/AboutMe/components/Menu/SideMenu'
import { 
  CurrentPathState, 
  Links, 
  ProfessionalInfoContent, 
  ProfessionalInfoSub 
} from '@/sections/AboutMe/types'
import styles from './styles.module.scss'

interface MenuProps {
  currentPath: CurrentPathState
  setCurrentPath: React.Dispatch<React.SetStateAction<CurrentPathState>>
}

interface Paths {
  main: Links
  sub: {
    name: ProfessionalInfoSub
    color: string
    content: {
      name: ProfessionalInfoContent
    }[]
  }[]
}

const paths: Paths[] = [
  {
    main: 'professional-info',
    sub: [
      {
        name: 'experience',
        color: 'var(--color-accent-300)',
        content: [
          {
            name: 'inklua-2023',
          },
          {
            name: 'inklua-2022',
          }
        ]
      },
      {
        name: 'hard-skills',
        color: 'var(--color-accent-200)',
        content: [
          {
            name: 'inklua-2023',
          },
          {
            name: 'inklua-2021',
          }
        ]
      },
      {
        name: 'soft-skills',
        color: 'var(--color-secondary-300)',
        content: [
          {
            name: 'inklua-2023',
          },
          {
            name: 'inklua-2022',
          }
        ]
      }
    ],
  },
  {
    main: 'personal-info',
    sub: [
      {
        name: 'experience',
        color: 'var(--color-accent-300)',
        content: [
          {
            name: 'inklua-2021'
          },
          {
            name: 'inklua-2023'
          }
        ]
      },
      {
        name: 'hard-skills',
        color: 'var(--color-accent-200)',
        content: [
          {
            name: 'inklua-2023',
          },
          {
            name: 'inklua-2022',
          }
        ]
      },
      {
        name: 'soft-skills',
        color: 'var(--color-secondary-300)',
        content: [
          {
            name: 'inklua-2023',
          },
          {
            name: 'inklua-2022',
          }
        ]
      }
    ],
  },
  {
    main: 'hobbies',
    sub: [
      {
        name: 'experience',
        color: 'var(--color-accent-300)',
        content: [
          {
            name: 'inklua-2023'
          },
          {
            name: 'inklua-2022'
          }
        ]
      },
      {
        name: 'hard-skills',
        color: 'var(--color-accent-200)',
        content: [
          {
            name: 'inklua-2023',
          },
          {
            name: 'inklua-2022',
          }
        ]
      },
      {
        name: 'soft-skills',
        color: 'var(--color-secondary-300)',
        content: [
          {
            name: 'inklua-2023',
          },
          {
            name: 'inklua-2022',
          }
        ]
      }
    ],
  }
];

export const Menu = ({
  currentPath,
  setCurrentPath
}: MenuProps) => {
  const handleLinkClick = (link: Links) => {
    setCurrentPath(prev => ({
      main: prev.main === link ? '' : link,
      sub: paths.find((path) => path.main === link)?.sub[0].name || '',
      content: paths.find((path) => path.main === link)?.sub[0].content[0].name ?? prev.content
    }));
  };

  const handleSubLinkClick = (sub: string) => {
    setCurrentPath(prev => ({
      ...currentPath,
      sub: prev.sub === sub ? '' : sub
    }));
  };

  const handleContentClick = (content: ProfessionalInfoContent) => {
    setCurrentPath({ ...currentPath, content });
  };

  return (
    <div className={styles.menu}>
      <SideMenu
        currentLink={currentPath.main}
        onClick={handleLinkClick}
      />
      <div>
        {paths.map(({ sub, main }) => (
          <Fragment key={main}>
            <button
              onClick={() => handleLinkClick(main)}
              className={[
                styles.title,
                currentPath.main === main ? styles.active : ''
              ].join(' ')}
            >
              <i className="ri-arrow-drop-right-fill" />
              <span>{main}</span>
            </button>
            <ul
              className={[
                styles.menuLinks,
                currentPath.main === main ? styles.active : ''
              ].join(' ')}
            >
              {sub.map(({ color, content, name }) => (
                <li>
                  <button
                    type='button'
                    onClick={() => handleSubLinkClick(name)}
                    className={[
                      styles.sublink,
                      currentPath.sub === name ? styles.active : ''
                    ].join(' ')}
                  >
                    <i className="ri-arrow-right-s-line" />
                    <i
                      className="ri-folder-3-fill"
                      style={{ color: color }}
                    />
                    <span>{name}</span>
                  </button>
                  <ul
                    className={[
                      styles.subPaths,
                      currentPath.sub === name ? styles.active : ''
                    ].join(' ')}
                  >
                    {content.map(subPath => (
                      <li>
                        <button
                          type='button'
                          onClick={() => handleContentClick(subPath.name)}
                          className={[
                            styles.subpath,
                            currentPath.content === subPath.name ? styles.active : ''
                          ].join(' ')}
                        >
                          <i className="ri-markdown-fill" />
                          <span>{subPath.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
      </div>
    </div>
  )
}