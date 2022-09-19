import Page from '../components/PageContainer';
import IdlingEngine from '../components/IdlingEngine';

export default function Home() {
    return (<Page>
        <h1 className='text-center'>Students for Electric Buses</h1>
        <style jsx>{`
            section {
                height: 120px;
            }
        `}</style>

        <section>
            <h2>Environment</h2>
            <p>Electric school buses are part of the world&apos;s transition to clean infrastructure.</p>
            <p>For every school bus we transition from diesel to electric, we will save 17 metric tons of CO<sub>2</sub> equivalent.</p>
        </section>
        <section style={{height: 250}}>
            <h2>Health</h2>
            <div style={{display: 'flex', position: 'absolute'}}>
                <IdlingEngine/>
            </div>
            <p style={{marginLeft: 330}}>
                Noxious fumes are bad for children&apos;s developing lungs.
                In addition to the bodily harm, studies have suggested it takes a toll on students&apos; performance in schools.
            </p>
        </section>
        <section>
            <h2>Saving</h2>
            <p>Electric school buses are now cheaper than diesel buses their lifetime. Thanks to dozens of incentives, programs, and the nature of an e-bus (cheaper fuel and maintenance costs), they are financially benificial!</p>
        </section>
    </Page>);
}
