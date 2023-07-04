import React from 'react'
import styles from "../styles/Experience.module.css"
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Experiences } from '../data'

import "react-vertical-timeline-component/style.min.css";

const ExCard = ({ e }) => {
    return (
        <VerticalTimelineElement contentStyle={{
            background: "#7799b8",
            color: "#fff",
        }} date={e.duration}
            contentArrowStyle={{ borderRight: "10px solid  #232631" }}
            iconStyle={{ background: "#fff" }}
            icon={<div className={styles.imgcontainer}>
                <img className={styles.logo}
                    src={e.icon}
                    alt={e.company}
                />
            </div>
            }>
            <div>
                <h2 className={styles.card_title}>{e.company}</h2>
                <h4 className='vertical-timeline-element-subtitle'>{e.role}</h4>
            </div>
        </VerticalTimelineElement>
    )
}
const Experience = () => {
    return (
        <div className={styles.container} id="exp">
            <div className={styles.title} >
                <h1>Skills</h1>
                <h3>My areas of expertise</h3>
            </div>

            <div>
                <VerticalTimeline>
                    {Experiences.map((e) => (
                        <ExCard key={e.company} e={e}>

                        </ExCard>
                    ))}

                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Experience