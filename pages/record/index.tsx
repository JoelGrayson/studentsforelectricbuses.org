import Page from '@/components/PageContainer';
import Link from 'next/link';
import Image from 'next/image';

export default function Record() {
    return <Page>
        <h1 className='text-center pb-8'>Record</h1>

        <h3>Historical Timeline</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dq4KiZ5Mov0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        <br />

        <h3>Photos</h3>
        <figure>
            <Image src='/images/5.31.23-club-meeting.jpg' alt='5.31.23 Club Meeting' width={500} height={375} />
            <figcaption>5.31.23 Club Meeting</figcaption>
        </figure>
    </Page>;
}
