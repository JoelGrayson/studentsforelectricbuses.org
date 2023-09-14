import MeetingContainer from '@/components/MeetingContainer';
import TodoLi from '@/components/TodoLi';

export default function Meeting() {
    return <MeetingContainer date={'May 4, 2023'} title={'5.4.23 Club Meeting'}>
        <ul>
            <li>Debrief SuperSelby meeting</li>
            <li>Preface next meeting with Sam Hill-Cristol</li>
            <li>Review and send parents&apos; association email to Tiffany</li>
        </ul>
        <p>Now that we are done with SuperSelby, let&apos;s turn into a lobbying organization.</p>
        <ul>
            <TodoLi>Become a nonprofit</TodoLi>
            <TodoLi>Lobby Albany, City Hall, and D.C.</TodoLi>
            <TodoLi>Reach out to other schools</TodoLi>
        </ul>
        <h3>Notes</h3>
        <ul>
            <li>
                <p>Ron Kim - alum who Rachel will intern for</p>
            </li>
            <li>
                <p>Joel - prepare resolutions so we can contact other schools and come in with an agenda</p>
            </li>
        </ul>
    </MeetingContainer>;
}
