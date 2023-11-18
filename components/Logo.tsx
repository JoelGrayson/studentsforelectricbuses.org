import { useState, useEffect } from 'react';
import styles from '../styles/logo/logo.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
    const [hovering, setHovering]=useState(false);
    const [deg, setDeg]=useState(0);

    useEffect(()=>{ //rotating except when onHover
        const id=setInterval(()=>{
            if (!hovering)
                setDeg(deg=>deg+0.5)
            else
                setDeg(deg=>deg)
        }, 5);
        return ()=>clearInterval(id);
    }, [hovering]);
    
    return <Link href='/'>
        <div className={styles.container}
            onMouseEnter={_=>setHovering(true)}
            onMouseLeave={_=>setHovering(false)}
        >
            <div className={styles.entire}>
                <Image src="/images/Students for Electric Buses Logo.png" alt="Logo" height='80' width='80' />
            </div>
            <div className={styles.inner}>
                <Image alt="Outer logo" height='80' width='80' src="/images/rotatable/inner.png" />
            </div>
            <div className={styles.outer} style={{transform: `rotate(${deg}deg)`}}>
                <Image alt="Inner logo" height='80' width='80' src="/images/rotatable/outer.png" />
            </div>
        </div>
    </Link>;

}
