import Page from '@/components/PageContainer';
import Link from 'next/link';
import { list } from './list';
import jdate from 'joeldate';

export default function Resolutions() {
    return <Page>
        <h1 className='text-center pb-8'>Resolutions</h1>
        <ul>
            {list.map(resolution=>{
                return <li key={resolution.hyphenatedTitle}>
                    <Link href={`/meetings/${resolution.hyphenatedTitle}`}>
                        {jdate(resolution.date)} - {resolution.title}
                    </Link>
                </li>;
            })}
        </ul>
    </Page>;
}
