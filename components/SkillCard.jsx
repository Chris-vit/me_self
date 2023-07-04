import React from 'react'
import styles from "../styles/SkillCard.module.css"

const SkillCard = (props) => {
    const image = "/tech/" + props.icon + ".png";
    return (
        <div>
            <div class={styles.btn}>
                <div>
                    <img className={styles.techimg} src={image}>

                    </img>
                    <span>{props.name}</span>
                </div>
            </div>
        </div>

    )
}

export default SkillCard