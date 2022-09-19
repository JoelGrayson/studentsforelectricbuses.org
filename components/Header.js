import Logo from './Logo';
import styles from '../styles/header.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Header({title, children}) { //takes in parameters for <Head>
    return (<>
        <Head> {/* Default head options */}
            {
                title
                ?
                <title>{title} | Students for Electric Buses</title>
                :
                <title>Students for Electric Buses</title>
            }
            <link rel="icon" href="/images/favicon.ico" type='image/x-icon' />
            {children}
        </Head>

        <header className={styles.header}>
            <Link href="/">
                <Logo/>
            </Link>
            <nav>
                <ul>
                    <Link href="/"><li><button>Home</button></li></Link>
                    {/* <Link href="/members"><li><button>Members</button></li></Link> */}
                    <Link href="/join"><li><button>Join</button></li></Link>
                    <Link href="/contact"><li><button>Contact</button></li></Link>
                </ul>
            </nav>
        </header>
    </>);
}
