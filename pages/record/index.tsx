import Page from '@/components/PageContainer';
import Image from 'next/image';
import Yt from '@/components/Yt';
import { isMobile } from 'react-device-detect';

export default function Record() {
    return <Page bottomPadding>
        <style jsx>{`
            h3 {
                margin-top: 3rem;
            }
        `}</style>
        
        <h1 className='text-center'>Record</h1>

        {/* <h3>Historical Timeline</h3>
        <iframe width="560" height="315" className='m:w-fit m:h-fit' src="https://www.youtube.com/embed/dq4KiZ5Mov0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> */}

        {/* <figure className='flex items-center flex-col'>
            <Image src='/images/club-meeting.jpg' alt='5.31.23 Club Meeting' width={500} height={375} />
            <figcaption className=''>5.31.23 Club Meeting</figcaption>
        </figure> */}

        <Row event='Second Meeting with SuperSelby' time='Apr 27, 2023'>
            <Yt width={isMobile ? 300 : undefined}>1WWflsD5vXM</Yt>
        </Row>
        <Row event='First Meeting with SuperSelby' time='Mar 6, 2023'>
            <Yt width={isMobile ? 300 : undefined}>TGqYREiAAao</Yt>
        </Row>
        <Row event='Club Advertisement Video' time='Sep 2022'>
            <Yt width={isMobile ? 300 : undefined}>6Hh6h2r4Sbw</Yt>
        </Row>

        <h3>2022 Halloween</h3>
        <figure>
            <Image src='/images/costume.jpg' className='inline mr-3' alt='Electric School Bus Halloween Costume' width={400} height={300} />
            <Image src='/images/costume-2.jpg' className='inline' alt='Costume front view' width={225} height={300} />
            <figcaption>2022 Halloween</figcaption>
        </figure>
        
        <h3>2021 Founded</h3>
        <p>Students for Electric Buses started meeting in 2021.</p>
        
        <h3>Sustainable Development Goals</h3>
        <figure>
            <Image src='/images/sdgs.jpg' alt='Sustainable Development Goals' width={500} height={375} />
            <figcaption>We meet 10 of the 17 UN sustainable development goals.</figcaption>
        </figure>
    </Page>;
}


export function Row({ event, time, children }: { event: React.ReactNode; time: React.ReactNode; children: React.ReactNode }) {
    return <div className='grid grid-rows-10 d:grid-cols-[2fr_3fr] items-center justify-center'>
        {/* Timeline Bar */}
        <div className='flex d:items-center m:justify-center m:mt-10'>
            <div className='bg-blue-800 d:h-96 d:w-2 m:w-fit m:h-fit'>
            </div>
            <div>
                <div className='d:bg-blue-800 d:text-white p-3 py-2 m:py-0 rounded-r-xl mb-3'>{event}</div>
                <div className='d:bg-blue-800 d:text-white p-3 py-2 m:py-0 rounded-r-xl'>{time}</div>
            </div>
        </div>

        {/* Content */}
        <div>
            {children}
        </div>
    </div>
}

