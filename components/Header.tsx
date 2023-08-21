import Logo from './Logo';
import styles from '../styles/header/header.module.css';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { list as meetingsList } from '@/pages/meetings/list';
import { useState } from 'react';

export default function Header({title, children}: {title?: String, children?: any}) { //takes in parameters for <Head>
    const { route }=useRouter();
    // console.log({route, asPath, pathname});
    
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
                    <Li href="/">Home</Li>
                    <Li href="/meetings" dropdown={meetingsList.map(e=>({ title: e.title, url: e.hyphenatedTitle }))}>Meetings</Li>
                        {/* TODO: insert v down arrow for fast selecting */}
                    <Li href="/resolutions">Resolutions</Li>
                        {/* TODO: insert v down arrow for fast selecting */}
                        {/* <button>v</button> */}
                    
                    <Li href="/record">Record</Li>
                    <Li href="/join">Join</Li>
                    <Li href="/contact">Contact</Li>
                    
                    
                    {/* Old */}
                    {/* <Link href="/the-state-of-the-e-bus"><li><button>State of E-Buses</button></li></Link> */}
                    {/* <Link href="/dont-forget-private-schools"><li><button>Don&apos;t Forget Private Schools</button></li></Link> */}
                    {/* <Link href="/members"><li><button>Members</button></li></Link> */}
                </ul>
            </nav>
        </header>
    </>;

    type titleUrlT={ title: string; url: string };
    function Li({children, href, dropdown}: {children: any, href: string; dropdown?: titleUrlT[] }) {
        const [open, setOpen]=useState(false);

        return <div className='relative'>
            <Link href={href}>
                <li style={{
                    marginRight: dropdown ? 0 : undefined,
                    display: 'inline-block'
                }}>
                    <button style={{
                        backgroundColor: route===href ? '#90ee90' : undefined,
                        borderColor: route===href ? 'darkgreen' : undefined,
                        borderTopRightRadius: dropdown ? 0 : undefined,
                        borderBottomRightRadius: dropdown ? 0 : undefined
                    }}>
                        {children}
                    </button>
                </li>
            </Link>
            { dropdown && <>
                <button
                    style={{
                        display: 'inline-block',
                        marginRight: '.2rem',
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        borderLeft: 'none',
                    }}
                    onClick={()=>setOpen(!open)}
                >
                    {open ? '^' : 'v'}
                </button>
            </> }
            { open && dropdown && <div className='absolute top-[2.3rem] left-0'>
                {dropdown.map((item, index)=>{
                    return <div className='w-full bg-white hover:bg-gray-300 p-3' style={{
                        border: '1px solid black',
                        borderTopWidth: index===0 ? 1 : 0,
                    }} key={item.title}>
                        <Link href={`${href}/${item.url}`}>{item.title}</Link>
                    </div>;
                })}
            </div> }
        </div>;
    }
}

