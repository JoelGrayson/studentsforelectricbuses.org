import Page from '@/components/PageContainer';
import Link from 'next/link';
import { list } from './list';
import jdate from 'joeldate';

export default function Meetings() {
    return <Page seo={{
        title: 'Meetings of Students for Electric Buses',
        description: 'Meetings of Students for Electric Buses'
    }}>
        <h1 className='text-center pb-8'>Meetings</h1>
        <MeetingsList />
    </Page>;
}

export function MeetingsList() {
    const upcoming=list.filter(meeting=>meeting.date>=new Date());
    const past=list.filter(meeting=>meeting.date<new Date());
    return <>
        {upcoming.length>0 && <>
            <h3>Upcoming Meetings</h3>
            <ul>
                {upcoming.map(meeting=>{
                    return <li key={meeting.hyphenatedTitle}>
                        <Link href={`/meetings/${meeting.hyphenatedTitle}`}>{
                            meeting.title.split(' ')[0]===jdate(meeting.date) ||
                            meeting.title.split(' ')[0]===jdate(meeting.date, true)
                                ? `${jdate(meeting.date)} - ${meeting.title.split(' ').slice(1).join(' ')}` //title already includes date
                                : `${jdate(meeting.date)} - ${meeting.title}`
                        }</Link>
                    </li>;
                })}
            </ul>
            <h3>Past Meetings</h3>
        </>}
        <ul>
            {past.map(meeting=>{
                return <li key={meeting.hyphenatedTitle}>
                    <Link href={`/meetings/${meeting.hyphenatedTitle}`}>{
                        meeting.title.split(' ')[0]===jdate(meeting.date) ||
                        meeting.title.split(' ')[0]===jdate(meeting.date, true)
                            ? `${jdate(meeting.date)} - ${meeting.title.split(' ').slice(1).join(' ')}` //title already includes date
                            : `${jdate(meeting.date)} - ${meeting.title}`
                    }</Link>
                </li>;
            })}
        </ul>
    </>;
}
