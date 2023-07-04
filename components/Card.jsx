import Image from 'next/image'
import React from 'react'
import styles from "../styles/Card.module.css"

const Card = ({ proj }) => {
    return (
        <div class={styles.card}>
            <img src={"/projects/" + proj.img + ".jpg"} alt="" />
            <h4>{proj.title}</h4>
            <div class={styles.card__content}>
                <p class={styles.card__title}>{proj.title}
                </p><p class={styles.card__description}>{proj.desc.slice(0, 200)}... <span><a href={proj.link} target="_blank">Learn More</a></span></p>
            </div>
        </div>

    )
}

export default Card