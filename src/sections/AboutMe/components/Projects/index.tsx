import { useSprings, animated } from '@react-spring/web'
import { projects } from './constants'
import { 
  IconReact, 
  IconLanguageTypescript,
  IconCypress,
  IconJest,
  IconNextjs,
  IconSass
} from '../../styles/icons'
import styles from './styles.module.scss'

interface ProjectsProps {
  content: keyof typeof projects
}

const tools = {
  react: <IconReact data-icon="react" />,
  typescript: <IconLanguageTypescript data-icon="typescript" />,
  cypress: <IconCypress data-icon="cypress" />,
  jest: <IconJest data-icon="jest" />,
  nextjs: <IconNextjs data-icon="nextjs" />,
  sass: <IconSass data-icon="sass" />
};

export const Projects = ({ content }: ProjectsProps) => {
  const project = projects[content];
  const [springs] = useSprings(
    project?.length ?? 0,
    (index) => ({
      from: { y: 100, opacity: 0 },
      to: { y: 0, opacity: 1 },
      delay: 1000 * index,
    })
  );

  return (
    <ul className={styles.projectsList}>
      {springs.map((props, index) => (
        <animated.li
          style={props}
          className={styles.project}
        >
          <span>{project[index].name}</span>
          <div className={styles.projectCard}>
            <div className={styles.window}>
              <img
                src={project[index].imageUrl}
                alt={project[index].name}
              />
              <div className={styles.tools}>
                {project[index].tools.map(tool => tools[tool as keyof typeof tools])}
              </div>
            </div>
            <div className={styles.projectDescription}>
              <p>
                {project[index].description}
              </p>
              <a
                href={project[index].url}
                target="_blank"
                rel="noreferrer"
              >
                view-project
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                aria-disabled={true}
              >
                view-code
              </a>
            </div>
          </div>
        </animated.li>
      ))}
    </ul>
  )
}