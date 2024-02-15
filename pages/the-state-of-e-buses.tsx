import Page from '../components/PageContainer';
import styles from '../styles/home/home.module.css';
import Link from 'next/link';

export default function StateOfTheEBus() {
    return <Page>
        <main className={styles.main}>
            <h1 className='text-center pb-8'>The State of the E-Bus</h1>
            <h3>Cost</h3>
            <li>In 2027, e-buses will be as expensive as gas buses. <a href='https://www.nyserda.ny.gov/All-Programs/Electric-School-Buses'>(source)</a></li>
            <h3>Country-Wide</h3>

            <h3>In New York State</h3>
            <p>All new purchased school buses <b>must be electric</b> in 2027. Although the state is mandating <b>both public and private schools</b>, it is only helping public schools acheive this goal. Reference: <Link href='https://www.nyserda.ny.gov/All-Programs/Electric-School-Buses'>nyserda.ny.gov/All-Programs/Electric-School-Buses</Link>.</p>
            <p>As of 2027, diesel buses will no longer be purchasable.</p>
            
            <h3>In California</h3>
            <p>California has been pushing ambitious incentives, including California Air Resources Board (CARB), California’s Hybrid and Zero-Emission Truck and Bus Voucher Incentive Program (HVIP), and California Energy Commission’s School Bus Replacement Program.</p>
            <p></p>
        </main>
    </Page>;
}
