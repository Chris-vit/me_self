import React from 'react'
import styles from "../styles/Contact.module.css"
import SkillCard from './SkillCard'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Contact = () => {
    return (
        <div id='contact' className={styles.container}>
            <div className={styles.title}>
                <h1>Get to know me better</h1>
                <h3>Open to future collabs for projects or just for a quick chat </h3>
            </div>

            <div className={styles.tech} >

                <div className={styles.ball} key={"LinkedIn"}>
                    <a href="https://www.linkedin.com/in/chris-george-anil-25a1551ab/">
                        <h2>To Connect with me</h2>
                        <SkillCard icon={"linkedin"} name={""} /></a>
                </div>
                <div className={styles.ball} key={"github"}>
                    <a href="https://github.com/Chris-george-anil">  <h2>To see on what I work on</h2>

                        <SkillCard icon={"github"} name={""} /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact  