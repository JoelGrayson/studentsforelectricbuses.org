import Page from '@/components/PageContainer';
import Link from 'next/link';
import { list } from './list';
import jdate from 'joeldate';

export default function Meetings() {
    return <Page>
        <h1 className='text-center pb-8'>Meetings</h1>
        <ul>
            {list.map(meeting=>{
                return <li key={meeting.hyphenatedTitle}>
                    <Link href={`/meetings/${meeting.hyphenatedTitle}`}>
                        {jdate(meeting.date)} - {meeting.title}
                    </Link>
                </li>;
            })}
        </ul>
    </Page>;
}
