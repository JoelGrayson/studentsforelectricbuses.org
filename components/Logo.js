import { useState } from 'react';
import styles from '../styles/logo.module.css';
import Link from 'next/link';

export default function Logo() {
    const [rotating, setRotating] = useState(true);

    return (<Link href='/'><a>
        <div className={styles.container}
            onMouseEnter={_=>setRotating(false)}
            onMouseLeave={_=>setRotating(true)}
        >
            <img
                className={styles.entire}
                src="/images/Students for Electric Buses Logo.png" alt="Logo" height='80px' width='80px'
            />
            <img alt="Outer logo" height='80px' width='80px'
                className={styles.inner}
                src="/images/rotatable/inner.png"
            />
            <img alt="Inner logo" height='80px' width='80px'
                className={rotating ? styles.rotatingOuter : styles.outer}
                src="/images/rotatable/outer.png"
            />
        </div>
    </a></Link>);
}
