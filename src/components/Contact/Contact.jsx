import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact">
        <div className={styles.container}>
            <div className={styles.text}> 
                <h2>Contact Me</h2>
                <p>Feel free to reach out</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="" />
                    <a href="mailto:farazmohd5102@gmail.com">Mail Me</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="" />
                    <a href="https://www.linkedin.com/in/mohd-faraz-46b01a219/" target='_blank'>Connet me on LinkedIn</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="" />
                    <a href="https://github.com/farazzkkhan" target='_blank'>My Github</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/webold.png")} alt="" />
                    <a href="https://farazzkkhan.github.io/cv1/" target='_blank' >Old Portfolio</a>
                </li>
            </ul>
        </div>
        <div className={styles.copyrightdiv}>
            <p className={styles.copyright}>© Mohd Faraz © Portfolio</p>
        </div>
    </footer>
  )
}
