import Page from '../components/PageContainer';
import styles from '../styles/home/home.module.css';
import Link from 'next/link';

export default function StateOfTheEBus() {
    return <Page>
        <main className={styles.main}>
            <h1 className='text-center pb-8'>The State of the E-Bus</h1>
            <h3>In the United States</h3>
            <p>School buses emit 9 million metric tons of carbon dioxide into the atmosphere each year <Source>https://www.scientificamerican.com/article/teenagers-invention-saves-fuel-for-school-buses</Source>.</p>
            <p>In 2027, e-buses will be as expensive as gas buses <Source>https://www.nyserda.ny.gov/All-Programs/Electric-School-Buses</Source>.</p>

            <h3>In New York State</h3>
            <p>New York State plans 85 percent reduction in greenhouse gas emissions by 2050. This will not be possible without decarbonizing the transportation sector, which accounts for 47% of New York State’s CO2 Emissions <Source>https://cbcny.org/research/4-facts-about-new-yorks-transportation-emissions</Source>. 2.3 million students, approximately 10 percent of our nation&apos;s pupils, are transported to school on New York State&apos;s 45,000 buses <Source>https://www.nyserda.ny.gov/All-Programs/Electric-School-Buses</Source>. All new purchased school buses <b>must be electric</b> in 2027. Although the state is mandating <b>both public and private schools</b>, it is only helping public schools acheive this goal <Source>https://www.nyserda.ny.gov/All-Programs/Electric-School-Buses</Source>.</p>
            <p>The American Lung Association in New York has noted that moving the State's entire vehicle fleet to clean transportation would result in up to 159,000 avoided asthma attacks while generating $68.2 billion in public health benefits statewide. <Source>https://www.nyserda.ny.gov/All-Programs/Electric-School-Buses</Source>.</p>
            
            <h3>In California</h3>
            <p>California has been pushing ambitious incentives, including California Air Resources Board (CARB), California’s Hybrid and Zero-Emission Truck and Bus Voucher Incentive Program (HVIP), and California Energy Commission’s School Bus Replacement Program.</p>
            <p></p>
        </main>
    </Page>;
}

export function Source({ children }: any) {
    return <>
        (<Link target="_blank" href={children}>source</Link>)
    </>;
}
