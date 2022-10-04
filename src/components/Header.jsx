import React from 'react';
import styles from './Header.module.css'

import Logo from '../assets/icon.png'

export function Header() {
    return (
        <div className={styles.container}>
            <img src={Logo} alt="Logo" />
            <p className={styles.titleBlue}>to</p>
            <p className={styles.titlePurple}>do</p>
        </div>
    )
}

