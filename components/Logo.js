import { useState } from 'react';
import styles from '../styles/logo.module.css';
import Link from 'next/link';

export default function Logo() {
    // const [rotating, setRotating] = useState(false);

    return (<Link href='/'><a>
        <div className={styles.container}>
            <img
                className={styles.entire}
                src="/images/SEB Logo.png" alt="Logo" height='80px' width='80px'
            />
            <img alt="Outer logo" height='80px' width='80px'
                className={styles.inner}
                src="/images/rotatable/inner.png"
                />
            <img alt="Inner logo" height='80px' width='80px'
                className={styles.outer}
                src="/images/rotatable/outer.png"
            />
        </div>
    </a></Link>);
}
