import Page from '../components/PageContainer';
import IdlingEngine from '../components/IdlingEngine';
import styles from '../styles/home/home.module.css';
import Link from 'next/link';

export default function StateOfTheEBus() {
    return <Page>
        <main className={styles.main}>
            <h1 className='text-center pb-8'>The State of the E-Bus</h1>

        </main>
    </Page>;
}
