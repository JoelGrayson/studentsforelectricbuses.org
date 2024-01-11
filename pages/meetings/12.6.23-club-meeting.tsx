import MeetingContainer from '@/components/MeetingContainer';

export default function Meeting() {
    return <MeetingContainer date={'Dec 6, 2023'} title={'12.6.23 Club Meeting'}>
		<ul>
		<li><blockquote>
		<p><a
		href="https://www.nysbca.com/Bill-Tracker"><u>https://www.nysbca.com/Bill-Tracker</u></a></p>
		</blockquote>
		<ul>
		<li><blockquote>
		<p>Write a proposal for a bill for opening electric school bus funding
		to private schools to Riverdale&apos;s assemblyman Jeffrey Dinowitz (<a
		href="https://nyassembly.gov/mem/Jeffrey-Dinowitz"><u>page</u></a>).</p>
		</blockquote></li>
		<li><blockquote>
		<p>Example bill:
		<img src="/images/meetings/example-bill.png" alt='example bill' />
		</p>
		</blockquote></li>
		</ul></li>
		</ul>
		<br /><br />
		<p>Dear Assemblyman Dinowitz,</p>
		<br />
		<p>We are a group of students at Riverdale Country School working with
		SuperSelby Transportation Corporation to transition their fleet to
		electric buses. While we have tried many financing options, the lack of
		access to the incentive from the NY School Bus Incentive Program makes
		it hard to transition. For context, an electric bus costs $380,000 vs.
		$120,000 for a diesel bus and the only eligible incentive we have is
		NYTVIP (for $120,000), which reduces the cost to $260,000.</p>
		<br />
		<p>We would like to ask if you could propose a new bill to include
		private institutions in the NY School Bus Incentive Program in order to
		make the switch from diesel buses to electric.</p>
		<br />
		<p>Summary: Give private institutions the ability to apply for the NY
		School Bus Incentive Program in order to access electric transportation
		for their students</p>
		<br />
		<p>Purpose: This bill would help private institutions make the switch
		from diesel to electric in an attempt to preserve our environment.</p>
		<br />
		<p>Justification: School buses contribute to a significant percentage of
		carbon emissions in the United States. Our environment is under attack,
		and it doesn&apos;t matter if school buses are owned by public or private
		institutions. Both contribute equally to the problem when
		diesel-powered, and equally to the solution when powered by renewables.
		Just like public schools, private schools need to balance their
		checkbooks and pay the bills. This means that funding one electric bus,
		much less a fleet of them, is a financial dent, unrealistic for a
		private school by themselves. Besides climate change, there are also
		associated health issues for the students and drivers and air quality
		issues for the neighborhoods driven through. These are all issues that
		affect everyone living in the state, and indeed, the world - a less
		healthy populace today means more tax dollars going to healthcare and
		less productive people tomorrow. Only financially compensating green
		fleets for public institutions is insufficient to combat carbon
		emissions and pollution. To effectively reduce emissions, all
		institutions, no matter what they are classified as, should be
		compensated equally.</p>
		<br />
		<p>Best,</p>
		<p>Students for Electric Buses</p>
   </MeetingContainer>;
}
