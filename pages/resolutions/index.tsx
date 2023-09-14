import Page from '@/components/PageContainer';
import Link from 'next/link';
import { list } from './list';
import jdate from 'joeldate';
import { ResolutionStatus } from './list';

export default function Resolutions() {
    return <Page>
        <h1 className='text-center pb-8'>Resolutions</h1>
        <ResolutionsList />
    </Page>;
}

export function ResolutionsList() {
    return <ul>
        {list.map(resolution=>{
            return <li key={resolution.hyphenatedTitle}>
                <Link href={`/resolutions/${resolution.hyphenatedTitle}`}>
                    {jdate(resolution.date)} - {resolution.title}
                </Link>
                <span className='ml-3 px-2 py-0' style={{
                    backgroundColor: {
                        [ResolutionStatus.Idea]: 'gray',
                        [ResolutionStatus.Draft]: '#db4343',
                        [ResolutionStatus.Passed]: '#59c27d', //'#0d990d',
                        [ResolutionStatus.Complete]: '#19b24e',
                    }[resolution.status],
                    color: 'white',
                    borderRadius: '4px',
                }}>{resolution.status}</span>
            </li>;
        })}
    </ul>;
}

