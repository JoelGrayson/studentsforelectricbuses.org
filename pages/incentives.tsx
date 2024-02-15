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

    return <Page title='Incentives'>
        <h1 className='text-center'>Incentives</h1>
        
        
    </Page>;
}
