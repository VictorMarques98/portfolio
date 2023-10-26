import { useState } from 'react'
import TypewriterCP, { TypewriterClass } from 'typewriter-effect'
import { ProfessionalInfoContent } from '@/sections/AboutMe/types'
import { professionalResume } from './constants'
import styles from './styles.module.scss'

interface ConsoleProps {
  content: ProfessionalInfoContent
}

export const Console = ({ content }: ConsoleProps) => {
  const [numberLines, setNumberLines] = useState(0);

  function convertString(htmlString: string) {
    const regex = /<\/?([^>]+)>/g;
    return htmlString.replace(regex, `&lt;<span class=${styles.tag}>$1</span class="blue-tag">&gt;`);
  }

  function initTypewriter(typewriter: TypewriterClass) {
    professionalResume[content].forEach((resume, index) => {
      typewriter
        .callFunction(() => setNumberLines(() => {
          return index === 0 ? 1 : (index * 2) + 1;
        }))
        .pauseFor(100)
        .typeString(convertString(resume))
        .pauseFor(200)
        .typeString('<br /> <br />')
    });
    typewriter.start();
  }

  return (
    <div className={styles.container}>
      <div className={styles.numberLines}>
        {Array.from(Array(numberLines).keys()).map((_, index) => (
          <span key={index}>{index}</span>
        ))}
      </div>
      <div className={styles.content}>
        <TypewriterCP
          options={{ delay: 5 }}
          onInit={initTypewriter}
        />
      </div>
    </div>
  )
}