import React from 'react';
import styles from "./Experience.module.css";
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import { getImageUrl } from '../../utils';

export const Experience = () => {
  return (
    <section className={styles.container} id='certificates'>
        <h2 className={styles.title}>Certificates</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    );
                })}
            </div>
            <ul className={styles.history}>
                {history.map((historyItem, id) => {
                    return (
                        <li key={id} className={styles.historyItem}>
                            <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.Technology} Logo`} />
                            <div className={styles.historyItemDetails}>
                                <h3>{`${historyItem.CertificateName}, ${historyItem.Technology}`}</h3>
                                <p>{`${historyItem.startDate} : ${historyItem.endDate}`}</p>
                                <ul>
                                    {historyItem.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>;
                                    })}
                                </ul>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    </section>
  )
}

export default Experience;