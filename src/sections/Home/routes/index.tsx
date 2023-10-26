import { useSpring, animated } from '@react-spring/web'
import { Typewriter } from '@/sections/Home/components/Typewriter'
import { Game } from '@/sections/Home/components/Game'
import styles from './styles.module.scss'

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.blurryBlue} />
      <div className={styles.blurryGreen} />
      <div className={styles.head}>
        <span>Hello, I am</span>
        <h1>Victor Marques</h1>
        <Typewriter />
      </div>
      <div className={styles.info}>
        <span> // complete the game to continue </span>
        <span> // you can also see it on my Github page </span>
        <p className={styles.code}>
          <span>const </span>
          <span> githubLink </span>
          <span> = </span>
          <a
            href="https://github.com/VictorMarques98"
            target='_blank'
            rel='noreferrer'
          >
            "https://github.com/VictorMarques98"
          </a>
        </p>
      </div>
    </section>
  )
};

export const Home = () => {
  const fadeUp = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <animated.main
      className={styles.mainContainer}
      style={{ ...fadeIn }}
    >
      <HeroSection />
      <animated.section
        className={styles.game}
        style={{ ...fadeUp }}
      >
        <Game />
      </animated.section>
    </animated.main>
  )
};