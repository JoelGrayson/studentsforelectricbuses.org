import MeetingContainer from '@/components/MeetingContainer';

export default function Meeting() {
    return <MeetingContainer date={"May 31, 2023"} title={'Final 2022–23 Meeting'}>
        <h3>Meeting</h3>
        <ul>
            <li>Celebration of all we have accomplished this year</li>
            <li>Feedback for next year</li>
            <li>Discussion about nonprofit status and next year&apos;s goals</li>
        </ul>
        
        <h3>Feedback for Next Year</h3>
        <ul>
            <li>
                <b>Clarity:</b>
                <ul>
                    <li>Be clearer on what each member is going to do</li>
                    <li>Be clearer in the pitch to Riverdale students and state goals in writing</li>
                    <li>Have an agenda for every meeting and send it to members in advance</li>
                    <li>Use phases in projects</li>
                </ul>
            </li>
            <li>Give other members more power in their own areas</li>
            <li>Gain members in lower grades</li>
        </ul>
        
    </MeetingContainer>;
}
