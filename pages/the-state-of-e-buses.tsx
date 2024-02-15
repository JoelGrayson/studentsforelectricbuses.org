import Image from 'next/image';
import Page from '../components/PageContainer';
import styles from '../styles/home/home.module.css';
import Link from 'next/link';

export default function StateOfTheEBus() {
    return <Page bottomPadding seo={{
        title: 'The State of E-Buses',
        description: 'The state of electric buses in the United States, New York State, and California, including incentives, government targets, and news.'
    }}>
        <main className={`${styles.main} leading-8`}>
            <h1 className='text-center pb-8'>The State of the E-Bus</h1>
            <h3>In the United States</h3>
            <p>School buses emit 9 million metric tons of carbon dioxide into the atmosphere each year <Source>https://www.scientificamerican.com/article/teenagers-invention-saves-fuel-for-school-buses</Source>.</p>
            <p>In 2027, e-buses will be as expensive as gas buses <Source>https://www.nyserda.ny.gov/All-Programs/Electric-School-Buses</Source>.</p>
            <b>Incentives:</b>
            <ul>
                <li>American Rescue Plan	($420 thousand)</li>
                <li>Diesel Emissions Reduction Act	($15.6 million)</li>
                <li>Investment, Infrastructure and Jobs Act	($150 million)</li>
                <li>Inflation Reduction Act	($60 million)</li>
                <li>Volkswagen Clean Air Act Settlement	($6 million)</li>
                <li>Still going</li>
                <li>New York Truck Voucher Incentive Program	($58.3 million)</li>
                <li>Clean Water, Clean Air and Green Jobs Environmental Bond Act of 2022	($500 million)</li>
                <li>$70 million in Regional Greenhouse Gas Initiative (RGGI)</li>
            </ul>

            <h3>In New York State</h3>
            <Image src="/images/NYS Transportation Sector Emissions cropped.png" width={250} height={195.25} alt="NYS Emissions" className='d:float-right' />
            <p>New York State plans 85 percent reduction in greenhouse gas emissions by 2050. This will not be possible without decarbonizing the transportation sector, which accounts for 47% of New York State’s CO2 Emissions <Source>https://cbcny.org/research/4-facts-about-new-yorks-transportation-emissions</Source>. 2.3 million students, approximately 10 percent of our nation&apos;s pupils, are transported to school on New York State&apos;s 45,000 buses <Source>https://www.nyserda.ny.gov/All-Programs/Electric-School-Buses</Source>. All new purchased school buses <b>must be electric</b> in 2027. Although the state is mandating <b>both public and private schools</b>, it is only helping public schools acheive this goal <Source>https://www.nyserda.ny.gov/All-Programs/Electric-School-Buses</Source>.</p>
            <p>The American Lung Association in New York has noted that moving the State&apos;s entire vehicle fleet to clean transportation would result in up to 159,000 avoided asthma attacks while generating $68.2 billion in public health benefits statewide. <Source>https://www.nyserda.ny.gov/All-Programs/Electric-School-Buses</Source>.</p>
            
            <h3>In California</h3>
            <p>California has been pushing ambitious incentives, including California Air Resources Board (CARB), California’s Hybrid and Zero-Emission Truck and Bus Voucher Incentive Program (HVIP), and California Energy Commission’s School Bus Replacement Program.</p>
            <b>Incentives:</b>
            <ul>
                <li>California Air Resources Board (CARB)	</li>
                <li>California’s Hybrid and Zero-Emission Truck and Bus Voucher Incentive Program (HVIP)</li>
                <li>California Energy Commission’s School Bus Replacement Program</li>
                <li>Clean Vehicle Assistance Program</li>
            </ul>
            <p></p>
        </main>
    </Page>;
}

export function Source({ children }: any) {
    return <>
        (<Link target="_blank" href={children}>source</Link>)
    </>;
}
