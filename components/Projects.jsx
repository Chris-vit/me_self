import React from 'react'
import styles from "../styles/Projects.module.css"
import Card from './Card'
import { data } from '../data'
import AOS from 'aos';
import 'aos/dist/aos.css';

// AOS.init();

const Projects = () => {
    return (
        <div id='projects' className={styles.container} >

            <div className={styles.title} data-aos="fade-up" data-aos-delay="50">
                <h1>My Projects</h1>
                <h3>A list of a few personal projects developed by me</h3>
            </div>

            <div className={styles.lists} data-aos="fade-right" data-aos-delay="150"
            >

                {
                    data.map((d) => (
                        <Card proj={d} key={d.title} />
                    ))
                }


            </div>

        </div>
    )
}

export default Projects