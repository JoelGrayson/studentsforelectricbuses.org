import Logo from './Logo';
import styles from '../styles/header/header.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Header({title, children}: {title?: String, children?: any}) { //takes in parameters for <Head>
    return (<>
        <Head> {/* Default head options */}
            <title>{title ? `${title} | Students for Electric Buses`: 'Students for Electric Buses'}</title>
            <link rel="icon" href="/favicon.ico" type='image/x-icon' />
            {children}
        </Head>

        <header className={styles.header}>
            <Logo/>
            <nav>
                <ul>
                    <Link href="/"><li><button>Home</button></li></Link>
                    <Link href="/the-state-of-the-e-bus"><li><button>State of E-Buses</button></li></Link>
                    <Link href="/dont-forget-private-schools"><li><button>Don't Forget Private Schools</button></li></Link>
                    {/* <Link href="/members"><li><button>Members</button></li></Link> */}
                    <Link href="/join"><li><button>Join</button></li></Link>
                    <Link href="/contact"><li><button>Contact</button></li></Link>
                </ul>
            </nav>
        </header>
    </>);
}
