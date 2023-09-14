import { useRouter } from 'next/router';
import Page from '../components/PageContainer';
import Link from 'next/link';
import { MeetingsList } from './meetings';
import { ResolutionsList } from './resolutions';
import { useEffect, useState } from 'react';

export default function NotFound() {
    const { asPath: url }=useRouter();
    const [title, setTitle]=useState<string>('404 Not Found');
    const [content, setContent]=useState<any>(<Link href="/"><button>Go Home</button></Link>);

    useEffect(()=>{
        if (url.startsWith('/meetings/')) {
            setTitle('Meeting Not Found');
            setContent(<>
                <h1 className='text-center'></h1>
                <p>We could not find that meeting. Here is the list of meetings:</p>
                <MeetingsList />
            </>);
        }
        if (url.startsWith('/resolutions/')) {
            setTitle('Resolution Not Found');
            setContent(<>
                <p>We could not find that resolution. Here is the list of resolutions:</p>
                <ResolutionsList />
            </>);
        }
    }, [url]);

    return <Page title='404 Not Found'>
        <h1 className='text-center'>{title}</h1>
        {content}
    </Page>;
}
