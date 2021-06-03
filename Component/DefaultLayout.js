import React from 'react';
import styles from '../styles/Home.module.css';

export default function DefaultLayout(props) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.grid}>
                    {props.children}
                </div>
            </main>
        </div>
    )
}