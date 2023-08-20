import Page from '@/components/PageContainer';
import jdate from 'joeldate';

export default function MeetingContainer({ title, date, children }: { title: string, date: string, children: React.ReactNode }) {
    return <Page bottomPadding>
        <h1 className='text-center'>{title}</h1>
        <p className='text-right pb-8'>{date}</p>

        {children}
    </Page>;
}
