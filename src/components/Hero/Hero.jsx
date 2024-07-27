import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';
import Resume from "../../../assets/CV/MOHD FARAZ.docx";

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm <br />Mohd Faraz</h1>
            <p className={styles.description}>
            I am a Full Stack Developer with 2 years of experience specializing in React and Node.js. 
            I hold a B.Tech degree from Jamia Hamdard. Feel free to reach out to me here. 
            </p>
            <div className={styles.button}>
              <a href="mailto:farazmohd5102@gmail.com" className={styles.contactBtn}>CONTACT ME</a>
              <a href={Resume} download="MOHDFARAZCV" className={styles.contactBtnCV}>DOWNLOAD CV</a>
            </div>
        </div>
        <img className={styles.imgfar} src={getImageUrl("hero/heroImagefaraz.JPG")} alt="Profile-Image" />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero