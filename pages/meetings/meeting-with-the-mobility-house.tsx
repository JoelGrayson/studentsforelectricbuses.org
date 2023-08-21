import MeetingContainer from '@/components/MeetingContainer';

export default function Meeting() {
    return <MeetingContainer date={'May 17, 2023'} title={'Meeting with the Mobility House'}>
        <p>Summary: have Mobility House supply the charging infrastructure (and possibly electricity if they have the meter) and Highland Fleets supply the buses and maintenance.</p>
        <br />
        <ul>
            <li><a href="mailto:sam.hill@mobilityhouse.com">Sam Hill-Cristol</a> can ask Blue Bird Buses to create better funding methods for SuperSelby so it is paid over time instead of upfront.
                <ul>
                    <li>Example: pay for the chassis, then the batteries, then the &lcub;another part&rcub;</li>
                </ul>
            </li>
            <li>About the Mobility House
                <ul>
                    <li>Founded in Munich, Germany</li>
                    <li>~300 employees</li>
                    <li>Offers CaaS (Charging as a Service)
                        <ul>
                            <li>Install electric vehicle supply equipment (EVSE) with minimal upfront costs (ø capital costs)</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>Apply for EPA 2023 grant with SuperSelby applying as a 3rd-party
                <ul>
                    <li>It is a grant, so it there is writing of reasoning for getting the $ as opposed to a rebate which randomly selects its recipients</li>
                    <li>It is for underprivileged communities</li>
                </ul>
            </li>
            <li>The Mobility House may or may not own the meter, determining whether or not they pay for electricity</li>
            <li>47¢ per mile - example mobility house rate in California</li>
        </ul>
        <h3>Next Steps</h3>
        <ul>
            <li>Email Sam Hill-Cristol and Mr. MacNeil so they can meet to talk about the pricing of charging infrastructure and compare it to Highland Fleets</li>
        </ul>
    </MeetingContainer>;
}
