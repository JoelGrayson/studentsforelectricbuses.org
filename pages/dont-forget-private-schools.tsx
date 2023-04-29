import Page from '../components/PageContainer';
import IdlingEngine from '../components/IdlingEngine';
import styles from '../styles/home/home.module.css';
import Link from 'next/link';
import { P } from '@jcomponents/writing-components'

export default function Home() {
    return <Page>
        <main className={styles.main}>
            <h1 className='text-center'>Don't Forget Private Schools!</h1>
            <br />
            <P>The federal government and local state governments are helping public schools transition to electric school buses through grants, subsidies, and other financial programs. However, private schools are being excluded from funding.</P>
            <P>While normally private schools do not get public funding in exchange for being able to run the school independently, we believe that there should be an exception for electric school bus funding. Private schools deserve electric school buses just as much as public schools because we all share the same streets. Helping private schools transition to electric school buses will improve street air quality, a public health issue that the government is responsible for. Similarly, we all share the same earth, and transitioning a private school bus to electric does the same to combat climate change as transitioning a public school bus. Also, private school students deserve to avoid health issues just as much as public school students.</P>
            <P>New York State has gone so far as to ban any purchase of fossil-fuel-guzzling buses in 2027 for both private and public schools. Private school bus companies, which are already operating on a tight budget, are expected to transition to electric fleets like public schools but without the govenrment funding. This is unfair to private school bus companies, private school students who have to endure poor air quality, and private school parents who ultimately may have to pay extra.</P>
        </main>
    </Page>;
}
