import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const NavBar = () => {
    return (
        <div className={styles.navcontainer}>
            <div className={styles.title}>
                <a href="#cover">
                    {/* <a href="/"> */}
                    <img src="/ch.png" alt="ppic" width={50} height={50} />
                    {/* </a> */}
                    <h2>Chris Web</h2>
                </a>


            </div>
            <div className={styles.options}>
                <ul className={styles.list}>
                    <a href="#projects"> <li className={styles.listItem}>Projects</li></a>
                    <a href="#exp"> <li className={styles.listItem}>Experience </li></a>
                    <a href="#skills"><li className={styles.listItem}>Skills</li></a>
                    <a href="#contact"><li className={styles.listItem}>Contact</li></a>
                </ul>
            </div>
        </div>
    )
}

export default NavBar