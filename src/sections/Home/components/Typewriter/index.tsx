import TypewriterCP from 'typewriter-effect'
import styles from './styles.module.scss'

const typeContent = [
  '> Front-End Developer',
  '> ReactJS',
  '> Typescript',
  '> Javascript',
  '> HTML5 / CSS3',
];

export const Typewriter = () => {
  return (
    <div className={styles.container}>
      <TypewriterCP
        options={{
          loop: true,
          wrapperClassName: styles.typewriter,
          cursorClassName: styles.cursor,
        }}
        onInit={(typewriter) => {
          typeContent.forEach(content => {
            typewriter
              .pauseFor(1000)
              .typeString(content)
              .pauseFor(2500)
              .deleteAll()
          });
          typewriter.start();
        }}
      />
    </div>
  )
};