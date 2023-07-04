import React from 'react'
import styles from "../styles/Skills.module.css"
import { technologies } from '../data'
import SkillCard from './SkillCard'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {
    return (
        <div id="skills" className={styles.container}>
            <div className={styles.title} data-aos="fade-up">
                <h1>Skills</h1>
                <h3>My areas of expertise</h3>
            </div>
            <div className={styles.tech} data-aos="fade-right" >
                {technologies.map((technology) => (
                    <div className={styles.ball} key={technology.name}>
                        <SkillCard icon={technology.icon} name={technology.name} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Skills