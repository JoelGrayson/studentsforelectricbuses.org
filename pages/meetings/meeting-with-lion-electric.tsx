import MeetingContainer from '@/components/MeetingContainer';

export default function Meeting() {
    return <MeetingContainer date={'Dec 20, 2021'} title={'Meeting with Lion Electric'}>
        		<h3 id="agenda">Agenda</h3>
		<ul>
		<li><p>I am curious to hear about your company</p></li>
		<li><p>What are incentives for Riverdale</p></li>
		<li><p>Warranty? How long do the buses last?</p></li>
		<li><p>Do we need to train drivers?</p></li>
		<li><p>Do we need to build charging infrastructure?</p></li>
		<li><p>Ask for quote</p></li>
		<li><p>Other schools that have done this?</p></li>
		<li><p>Size of school buses?</p></li>
		</ul>
		<h3 id="notes">Notes</h3>
		<p>Attendants: Joel Grayson and Brian Simmons</p>
		<p>Notes taken here.</p>
   </MeetingContainer>;
}
