import Page from '../components/PageContainer';
import IdlingEngine from '../components/IdlingEngine';
import styles from '../styles/home/home.module.css';
import Link from 'next/link';
import { P } from '@jcomponents/writing-components';

export default function Home() {
    return <Page bottomPadding>
        <main className={styles.main}>
            <section> {/* Title */}
                <h1 className='text-center pb-8'>Students for Electric Buses</h1>
                <p> {/* Who we are */}
                    We are a coalition of students from four schools and counting to transition schools from diesel-guzzling buses (&gt;99% of current buses) to electric school buses.
                    Let&apos;s protect the health of students and Earth with electric school buses.
                </p>
                <br/>
            </section>

            <section> {/* Why */}
                <h2 className='text-center pb-8'>Why Transition to Electric School Buses?</h2>
                <div className={styles.environment}>
                    <h3>Environment</h3>
                    <p>Electric school buses are part of the world&apos;s transition to clean infrastructure.
                        <br/> Every bus transitioned from diesel to electric:</p>
                    <ul className={styles['plus-bullet-list']}>
                        <li>Saves 17 metric tons of CO<sub>2</sub> equivalent each year, the same as three average New Yorkers emit annually.</li>
                        <li>Stabilizes the grid through <Link href="/images/valley filling & peak shaving.png" target='_blank'>valley filling and peak shaving</Link>, reducing the use of fossil fuels during energy valleys and making the grid more resilient.</li>
                        <li>No NOx or CO₂ tailgate emissions and fewer PM2.5 particles (dangerous particles for environment and health).</li>
                    </ul>
                    <p>
                    </p>
                </div>
                <div className={styles.health}>
                    <h3>Health</h3>
                    <div className={styles['health__idling-engine-container']}>
                        <IdlingEngine />
                    </div>
                    <div className={styles['health__description']}>
                        <p>
                            Noxious fumes are harmful to everyone, especially children, whose hearts and lungs are developing. Diesel buses affect those in the bus, and lower the air quality of the communities they drive through. In addition to the bodily harm, <Link href='https://www.nber.org/system/files/working_papers/w25641/w25641.pdf'>studies</Link> have suggested it takes a toll on students&apos; performance at school.
                        </p>
                        <ul className={styles['plus-bullet-list']}>
                            <li>Decreases students&apos; risk of developing asthma, cardiovascular illnesses, and cancer.</li>
                            <li>If all of NYC&apos;s schools switched over to electric, it would save $18 million in health care costs. -City Hall</li>
                        </ul>
                    </div>
                </div>
                <br />
                <div className={styles.savings}>
                    <h3>Savings</h3>
                    <p>Electric school buses are now cheaper than diesel buses their lifetime. Thanks to dozens of incentives, programs, and the nature of an e-bus (cheaper fuel and maintenance costs), they are financially benificial!</p>
                </div>
            

                <br />
                <h2 className='text-center pb-8'>Other Benefits</h2>

                <h3>Noise Pollution</h3>
                <ul className={styles['plus-bullet-list']}>
                    <li>Neighborhoods won&apos;t have to regularly listen to that noisy engine that reaches 80-95 decibels drive through the streets.</li>
                    <li>Quieter, more peaceful experience for the students, teachers, and drivers. People do not have to shout over the engine to talk to each other.</li>
                </ul>

                <h3>Less Dependence on Oil</h3>
                <ul className={styles['plus-bullet-list']}>
                    <li>No worries about fluctuating gas prices or oil crises. Electricity prices fluctuate much less than gas prices.</li>
                    <li>It is better for the U.S. economy to be less dependent on foreign oil.</li>
                </ul>
                
                <h3>Less Maintenance</h3>
                <ul className={styles['plus-bullet-list']}>
                    <li>E-buses have fewer moving parts, so they do not need as much maintenance.</li>
                    <li>Less time off the road for repairs.</li>
                </ul>

                <h3>More Stable Energy Grid</h3>
                <ul className={styles['plus-bullet-list']}>
                    <li><Link href="/images/valley filling & peak shaving.png" target='_blank'>Valley filling and peak shaving</Link> mean the grid is more stable and needs fewer power plants to operate.</li>
                    <li>Electricity is cheaper for everyone during high demand.</li>
                </ul>
            
            </section>

            {/*
            <section> {/* Articles /}
                <h2 className='text-center pb-8'>Further Reading</h2>
                <ul>
                    <li>
                        <div>Nature Health Article: <Link href='https://www.nature.com/articles/s41893-023-01088-7'>nature.com/articles/s41893-023-01088-7</Link>{/* TODO: (<Link href='#'>annotated version</Link>) /}</div>
                        <div className='ml-10'>Main point: when older diesel buses were replaced with cleaner vehicles, students attended school more.</div>
                    </li>
                </ul>
            </section>
            */}

            <section>
                <h2 className='text-center mb-6 mt-8'>Don&apos;t Forget Private Schools!</h2>
                <P>The federal government and local state governments are helping public schools transition to electric school buses through grants, subsidies, and other financial programs. However, private schools are being excluded from funding.</P>
                <P>While normally private schools do not get public funding in exchange for being able to run the school independently, we believe that there should be an exception for electric school bus funding. Private schools deserve electric school buses just as much as public schools because we all share the same streets. Helping private schools transition to electric school buses will improve street air quality, a public health issue that the government is responsible for. Similarly, we all share the same earth, and transitioning a private school bus to electric does the same to combat climate change as transitioning a public school bus. Also, private school students deserve to avoid health issues just as much as public school students.</P>
                <P>New York State has gone so far as to ban any purchase of fossil-fuel-guzzling buses in 2027 for both private and public schools. Private school bus companies, which are already operating on a tight budget, are expected to transition to electric fleets like public schools but without the government funding. This is unfair to private school bus companies, private school students who have to endure poor air quality, and private school parents who ultimately may have to pay extra.</P>
            </section>
        </main>
    </Page>;
}
