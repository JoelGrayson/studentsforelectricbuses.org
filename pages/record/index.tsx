import Page from '@/components/PageContainer';
import Link from 'next/link';
import Image from 'next/image';

export default function Record() {
    return <Page bottomPadding>
        <h1 className='text-center pb-8'>Record</h1>

        <h3>Historical Timeline</h3>
        <iframe width="560" height="315" className='m:w-fit m:h-fit' src="https://www.youtube.com/embed/dq4KiZ5Mov0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        <br /><br />

        <h3>Photos</h3>
        <figure>
            <Image src='/images/club-meeting.jpg' alt='5.31.23 Club Meeting' width={500} height={375} />
            <figcaption>5.31.23 Club Meeting</figcaption>
        </figure>
        <br /><br />
        
        <h3>2022–23 Club Advertisement Video</h3>
        <iframe width="560" height="315" className='m:w-fit m:h-fit' src="https://www.youtube.com/embed/6Hh6h2r4Sbw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <br /><br />

        <figure>
            <Image src='/images/sdgs.jpg' alt='Sustainable Development Goals' width={500} height={375} />
            <figcaption>We meet ten of the seventeen UN sustainable development goals</figcaption>
        </figure>
    </Page>;
}
