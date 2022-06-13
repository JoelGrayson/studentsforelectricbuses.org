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
            <link rel="shortcut icon" href="/images/SEB Logo.png" />
            {children}
        </Head>

        <header className={styles.header}>
            <Link href="/">
                <Logo/>
            </Link>
            <nav>
                <ul>
                    <Link href="/"><li><button>Home</button></li></Link>
                    <Link href="/about"><li><button>About</button></li></Link>
                    <Link href="/contact"><li><button>Contact</button></li></Link>
                </ul>
            </nav>
        </header>
    </>);
}
