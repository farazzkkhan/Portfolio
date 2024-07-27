import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from '../../utils'

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/faraz.JPG")} alt="Its me here" className={styles.aboutImage} />
      </div>
        <div>
          <p className={styles.textContent}>
          My name is Mohd Faraz, a 21-year-old B.Tech CSE student at Jamia Hamdard in Delhi, where I also reside. I embrace life through reading, future planning, and playing games.
          My Father is my greatest strength, providing guidance and motivation. 
          I excel in English, enjoying writing and expanding my vocabulary, and I am currently honing my programming skills, which I am passionate about.
          </p>
        </div>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>
            I am a Frontend Developer with experience in creating and building responsive websites and optimizing site performance.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")} alt="server" />
          <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>
            I have experience in developing fast and reliable websites and am proficient in utilizing APIs.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
          <div className={styles.aboutItemText}>
            <h3>Python Developer</h3>
            <p>
            I have completed Python Projects and possess a strong command in Python.
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
}
