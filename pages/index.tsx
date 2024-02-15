import Page from '../components/PageContainer';
import IdlingEngine from '../components/IdlingEngine';
import styles from '../styles/home/home.module.css';
import Link from 'next/link';
import { P } from '@jcomponents/writing-components';
import { Source } from './the-state-of-e-buses';

export function Info({children}: {children: React.ReactNode}) {
    return <>
        <svg className="bi bi-info-circle-fill" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" /></svg>
        <div>{children}</div>
    </>;
}

export default function Home() {
    return <Page bottomPadding>
        <main className={styles.main}>
            <section> {/* Title */}
                <h1 className='text-center pb-8 m:text-[1.7rem]'>Students for Electric Buses</h1>
                <p> {/* Who we are */}
                    We are a coalition of students from four schools and counting to transition schools from diesel-guzzling (&gt;99% of current buses) to electric school buses. If you want to combat climate change as a student through clean infrastructure that will last long after you graduate, <Link href='/join'>join us</Link>.
                </p>
            </section>

            <section> {/* Why */}
                <h2 className='text-center pb-4'>Why Transition to Electric School Buses?</h2>
                <div className={styles.environment}>
                    <h3>Environment</h3>
                    <p>
                        Electric school buses are part of the world&apos;s transition to clean infrastructure.
                        <br/>
                        Every bus transitioned from diesel to electric:
                    </p>
                    <ul className={styles['plus-bullet-list']}>
                        <li>
                            Saves 17 metric tons of CO<sub>2</sub> equivalent each year (this will increase with clean electricity generation)
                        </li>
                        <li>Stabilizes the grid through <Link href="/images/valley filling & peak shaving.png" target='_blank'>valley filling and peak shaving</Link>, reducing the use of fossil fuels during energy valleys and making the grid more resilient.</li>
                        <li>Does not emit particulate matter (PM2.5 and PM10), carbon monoxide, NOx, or CO₂ tailgate emissions, improving air quality.</li>
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
                        <p>The noxious fumes produced by conventional school buses are harmful to the passengers (especially children, whose hearts and lungs are developing), pedestrians, and the communities the bus drives through. In addition to lung and heart problems, <Link href='https://www.nber.org/system/files/working_papers/w25641/w25641.pdf'>studies</Link> have suggested it takes a toll on students&apos; performance at school.</p>
                        <ul className={styles['plus-bullet-list']}>
                            <li>Decreases students&apos; risk of developing asthma, cardiovascular illnesses, and cancer.</li>
                            {/* <li>If all of NYC&apos;s schools switched over to electric, it would save $18 million in health care costs. —City Hall</li> */}
                            <li>The American Lung Association in New York has noted that moving the State&apos;s entire vehicle fleet to clean transportation would result in up to 159,000 avoided asthma attacks while generating $68.2 billion in public health benefits statewide. —<a href="https://www.nyserda.ny.gov/All-Programs/Electric-School-Buses">NYSERDA</a></li>
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

                <h3>Student Attendance and Success</h3>
                <ul className={styles['plus-bullet-list']}>
                    <li>This Nature article (<a target='_blank' href='https://www.nature.com/articles/s41893-023-01088-7'>original</a>, <a href="/files/nature-attendance.pdf" target='_blank'>annotated version</a>) showed that replacing old buses with clean buses improves student attendance.</li>
                    <li>Other studies have shown that lowering diesel fumes improve test scores, physical activity performance, and reductions in lung inflammation.</li>
                    {/* <li>TODO: better grades</li> */}
                    {/* TODO: read Austin et al. (29) and footnote 13 */}
                </ul>

                <h3>Noise Pollution</h3>
                <ul className={styles['plus-bullet-list']}>
                    <li>Neighborhoods won&apos;t have to regularly listen to that noisy engine that reaches 80–95 decibels drive through the streets.</li>
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

            <h2 className='text-center'>Allaying Concerns</h2>
            <h4>1. The Cold</h4>
            <p>A school district in Minnesota that transitioned to electric buses did not have issues during the winter. <Source>https://www.mprnews.org/story/2024/01/30/minnesota-schools-test-electric-busesfind-benefits-and-barriers</Source>.</p>
            
            <h4>2. Range</h4>
            <p>While initially a concern, the technology has progressed. E-buses can now go 155 miles on a single charge <Source>https://stnonline.com/partner-updates/6-myths-about-electric-school-buses-debunked/</Source>. If buying the batteries for the capacity is too much, one can also start by transitioning the shorter routes first.</p>

            <h4>3. Too Risky</h4>
            <p>With services like Highland Fleet and the Mobility House, the risk of transitioning to e-buses can be taken out of the equation and covered by these companies.</p>


            <section>
                <h2 className='text-center mb-6 mt-8' id='dont-forget-private-schools'>Don&apos;t Forget Private Schools!</h2>
                <P>The federal government and local state governments are helping public schools transition to electric school buses through grants, subsidies, and other financial programs. However, private schools are being excluded from funding.</P>
                <P>While normally private schools do not get public funding in exchange for being able to run the school independently, we believe that there should be an exception for electric school bus funding. Private schools deserve electric school buses just as much as public schools because we all share the same streets. Helping private schools transition to electric school buses will improve street air quality, a public health issue that the government is responsible for. Similarly, we all share the same earth, and transitioning a private school bus to electric does the same to combat climate change as transitioning a public school bus. Also, private school students deserve to avoid health issues just as much as public school students.</P>
                <P>New York State has gone so far as to ban any purchase of fossil-fuel-guzzling buses in 2027 for both private and public schools. Private school bus companies, which are already operating on a tight budget, are expected to transition to electric fleets like public schools but without the government funding. This is unfair to private school bus companies, private school students who have to endure poor air quality, and private school parents who ultimately may have to pay extra.</P>
            </section>
        </main>
    </Page>;
}
