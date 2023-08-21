import Logo from './Logo';
import styles from '../styles/header/header.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Header({title, children}: {title?: String, children?: any}) { //takes in parameters for <Head>
    return <>
        <Head> {/* Default head options */}
            <title>{title ? `${title} | Students for Electric Buses`: 'Students for Electric Buses'}</title>
            <link rel="icon" href="/favicon.ico" type='image/x-icon' />
            {children}
        </Head>

        <header className={styles.header}>
            <Logo />
            <nav>
                <ul className='m:grid m:grid-cols-3 m:grid-rows-2 m:place-items-center'>
                    {/* w-full m:p-0 m:grid grid-cols-3 grid-rows-2 */}
                    <Link href="/"><li><button>Home</button></li></Link>
                    <Link href="/meetings"><li><button>Meetings</button></li></Link>
                        {/* TODO: insert v down arrow for fast selecting */}
                    <Link href="/resolutions"><li><button>Resolutions</button></li></Link>
                        {/* TODO: insert v down arrow for fast selecting */}
                    <Link href="/record"><li><button>Record</button></li></Link>
                    <Link href="/join"><li><button>Join</button></li></Link>
                    <Link href="/contact"><li><button>Contact</button></li></Link>
                    
                    
                    {/* Old */}
                    {/* <Link href="/the-state-of-the-e-bus"><li><button>State of E-Buses</button></li></Link> */}
                    {/* <Link href="/dont-forget-private-schools"><li><button>Don&apos;t Forget Private Schools</button></li></Link> */}
                    {/* <Link href="/members"><li><button>Members</button></li></Link> */}
                </ul>
            </nav>
        </header>
    </>;
}
