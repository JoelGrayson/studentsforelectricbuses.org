import Page from '../components/PageContainer';
import IdlingEngine from '../components/IdlingEngine';
import styles from '../styles/home/home.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (<Page>
        <main className={styles.main}>
            <section> {/* Title */}
                <h1 className='text-center pb-8'>Students for Electric Buses</h1>
                <p> {/* Who we are */}
                    We are a coalition of students from four schools and counting to transition schools from diesel-guzzling buses (&gt;99% of current buses) to electric school buses.
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
                        <li>Stabilizes the grid through <Link href="/images/valley filling & peak shaving.png" target='_blank'><a>valley peaking and shaving</a></Link>.</li>
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
                            Noxious fumes are harmful to everyone, especially children, whose hearts and lungs are developing. Diesel buses affect those in the bus, and lower the air quality of the communities they drive through. In addition to the bodily harm, <Link href='https://www.nber.org/system/files/working_papers/w25641/w25641.pdf'><a>studies</a></Link> have suggested it takes a toll on students&apos; performance at school.
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
                {/* <p>Let's make sure the future of our world rides healthily on electric school buses.</p> */}
            </section>
            <br />
        </main>
    </Page>);
}
