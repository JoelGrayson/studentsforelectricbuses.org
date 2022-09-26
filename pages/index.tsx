import Page from '../components/PageContainer';
import IdlingEngine from '../components/IdlingEngine';
import styles from '../styles/home/home.module.css';

export default function Home() {
    return (<Page>
        <main className={styles.main}>
            <h1 className='text-center pb-8'>Students for Electric Buses</h1>
            <section className={styles.environment}>
                <h2>Environment</h2>
                <p>Electric school buses are part of the world&apos;s transition to clean infrastructure. For every school bus we transition from diesel to electric, we will save 17 metric tons of CO<sub>2</sub> equivalent.</p>
            </section>
            <section className={styles.health}>
                <h2>Health</h2>
                <div className={styles['health__idling-engine-container']}>
                    <IdlingEngine />
                </div>
                <p className={styles['health__description']}>
                    Noxious fumes are bad for children&apos;s developing lungs.
                    In addition to the bodily harm, studies have suggested it takes a toll on students&apos; performance in schools.
                </p>
            </section>
            <br />
            <section className={styles.savings}>
                <h2>Saving</h2>
                <p>Electric school buses are now cheaper than diesel buses their lifetime. Thanks to dozens of incentives, programs, and the nature of an e-bus (cheaper fuel and maintenance costs), they are financially benificial!</p>
            </section>
        </main>
    </Page>);
}
