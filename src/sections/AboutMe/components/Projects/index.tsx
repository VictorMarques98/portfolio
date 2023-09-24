import { ProfessionalInfoContent } from '@/sections/AboutMe/types'
import { useSprings, animated } from '@react-spring/web'
import styles from './styles.module.scss'

interface ProjectsProps {
  content: ProfessionalInfoContent
}

const projects = {
  'inklua-2023': [
    {
      name: 'Inklua 2023',
      description: 'A new version of Inklua, a programming language for the game engine LÖVE.A new version of Inklua, a programming language for the game engine LÖVE.',
      url: '',
      imageUrl: 'https://developer-portfolio-v2.netlify.app/images/projects/ui-animations2.png',
    },
    {
      name: 'Inklua 2020',
      description: 'A new version of Inkasdasdlua, a programming language for the game engine LÖVE.A new version of Inklua, a programming language for the game engine LÖVE.',
      url: '',
      imageUrl: 'https://developer-portfolio-v2.netlify.app/images/projects/ui-animations2.png',
      projectLink: 'httos://google.com',
      codeLink: 'httos://google.com',
    },
    {
      name: 'Inklua 2023',
      description: 'A new version of Inklua, a programming language for the game engine LÖVE.A new version of Inklua, a programming language for the game engine LÖVE.',
      url: '',
      imageUrl: 'https://developer-portfolio-v2.netlify.app/images/projects/ui-animations2.png',
    },
    {
      name: 'Inklua 2020',
      description: 'A new version of Inkasdasdlua, a programming language for the game engine LÖVE.A new version of Inklua, a programming language for the game engine LÖVE.',
      url: '',
      imageUrl: 'https://developer-portfolio-v2.netlify.app/images/projects/ui-animations2.png',
    }
  ],
  'inklua-2022': [
    {
      name: 'Inklua 2023',
      description: 'A new version of Inklua, a programming language for the game engine LÖVE.A new version of Inklua, a programming language for the game engine LÖVE.',
      url: '',
      imageUrl: 'https://developer-portfolio-v2.netlify.app/images/projects/ui-animations2.png',
    },
    {
      name: 'Inklua 2020',
      description: 'A new version of Inkasdasdlua, a programming language for the game engine LÖVE.A new version of Inklua, a programming language for the game engine LÖVE.',
      url: '',
      imageUrl: 'https://developer-portfolio-v2.netlify.app/images/projects/ui-animations2.png',
    },
    {
      name: 'Inklua 2023',
      description: 'A new version of Inklua, a programming language for the game engine LÖVE.A new version of Inklua, a programming language for the game engine LÖVE.',
      url: '',
      imageUrl: 'https://developer-portfolio-v2.netlify.app/images/projects/ui-animations2.png',
    },
    {
      name: 'Inklua 2020',
      description: 'A new version of Inkasdasdlua, a programming language for the game engine LÖVE.A new version of Inklua, a programming language for the game engine LÖVE.',
      url: '',
      imageUrl: 'https://developer-portfolio-v2.netlify.app/images/projects/ui-animations2.png',
    }
  ],
  'inklua-2021': [
    {
      name: 'Inklua 2023',
      description: 'A new version of Inklua, a programming language for the game engine LÖVE.A new version of Inklua, a programming language for the game engine LÖVE.',
      url: '',
      imageUrl: 'https://developer-portfolio-v2.netlify.app/images/projects/ui-animations2.png',
    },
    {
      name: 'Inklua 2020',
      description: 'A new version of Inkasdasdlua, a programming language for the game engine LÖVE.A new version of Inklua, a programming language for the game engine LÖVE.',
      url: '',
      imageUrl: 'https://developer-portfolio-v2.netlify.app/images/projects/ui-animations2.png',
    },
    {
      name: 'Inklua 2023',
      description: 'A new version of Inklua, a programming language for the game engine LÖVE.A new version of Inklua, a programming language for the game engine LÖVE.',
      url: '',
      imageUrl: 'https://developer-portfolio-v2.netlify.app/images/projects/ui-animations2.png',
    },
    {
      name: 'Inklua 2020',
      description: 'A new version of Inkasdasdlua, a programming language for the game engine LÖVE.A new version of Inklua, a programming language for the game engine LÖVE.',
      url: '',
      imageUrl: 'https://developer-portfolio-v2.netlify.app/images/projects/ui-animations2.png',
    }
  ],
};

export const Projects = ({ content }: ProjectsProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [springs, _] = useSprings(
    projects[content].length,
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
          <span>{projects[content][index].name}</span>
          <div className={styles.projectCard}>
            <div className={styles.window}>
              <img
                src={projects[content][index].imageUrl}
                alt={projects[content][index].name}
              />
            </div>
            <div className={styles.projectDescription}>
              <p>
                {projects[content][index].description}
              </p>
              <a
                href={projects[content][index].projectLink}
                target="_blank"
                rel="noreferrer"
              >
                view-project
              </a>
              <a
                href={projects[content][index].codeLink}
                target="_blank"
                rel="noreferrer"
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