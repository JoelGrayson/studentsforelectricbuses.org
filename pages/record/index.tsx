import Page from '@/components/PageContainer';
import Link from 'next/link';
import Image from 'next/image';

export default function Record() {
    return <Page bottomPadding>
        <style jsx>{`
            h3 {
                margin-top: 3rem;
            }
        `}</style>
        
        <h1 className='text-center'>Record</h1>

        <h3>Historical Timeline</h3>
        <iframe width="560" height="315" className='m:w-fit m:h-fit' src="https://www.youtube.com/embed/dq4KiZ5Mov0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

        <h3>Photos</h3>
        <figure>
            <Image src='/images/club-meeting.jpg' alt='5.31.23 Club Meeting' width={500} height={375} />
            <figcaption>5.31.23 Club Meeting</figcaption>
        </figure>
        
        <h3>2022 Halloween</h3>
        <figure>
            <Image src='/images/costume.jpg' alt='Electric School Bus Halloween Costume' width={500} height={375} />
            <figcaption>2022 Halloween</figcaption>
        </figure>
        
        <h3>2022–23 Club Advertisement Video</h3>
        <iframe width="560" height="315" className='m:w-fit m:h-fit' src="https://www.youtube.com/embed/6Hh6h2r4Sbw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

        
        <h3>Sustainable Development Goals</h3>
        <figure>
            <Image src='/images/sdgs.jpg' alt='Sustainable Development Goals' width={500} height={375} />
            <figcaption>We meet 10 of the 17 UN sustainable development goals.</figcaption>
        </figure>
    </Page>;
}
