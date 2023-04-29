import Page from '../components/PageContainer';
import styles from '../styles/home/home.module.css';
import Link from 'next/link';

export default function StateOfTheEBus() {
    return <Page>
        <main className={styles.main}>
            <h1 className='text-center pb-8'>The State of the E-Bus</h1>
            <h3>In New York State</h3>
            <p>All new purchased school buses <b>must be electric</b> in 2027. Although the state is mandating <b>both public and private schools</b>, it is only helping public schools acheive this goal. Reference: <Link href='https://www.nyserda.ny.gov/All-Programs/Electric-School-Buses'>nyserda.ny.gov/All-Programs/Electric-School-Buses</Link>.</p>
        </main>
    </Page>;
}
