import MeetingContainer from '@/components/MeetingContainer';

export default function Resolution() {
    return <MeetingContainer date={'Dec 3, 2021'} title={'Electric School Buses Petition'}>
		<p>Dear Upper School,</p>
		<br />
		<p>Electric school buses are better for the environment and our health
		than diesel buses. If you agree that Riverdale &amp; SuperSelby should
		start transitioning to electric school buses, <a
		href="https://docs.google.com/forms/d/e/1FAIpQLSdZ4QW-_BXURmLjXv2nQXs80aQzN5c2uWvO5qEke5TJnNb59g/viewform"><u>join
		the petition for electric school buses</u></a>.</p>
		<p>All of us at Riverdale—students, faculty, and administrators—can
		fight climate change together.</p>
		<br />
		<p>Joel Grayson</p>
		<a
		href="https://docs.google.com/presentation/d/1BWtVW66iEIrrrPmWTzftmSM4mS8iMA8jeX3TiUD46Uc/edit?usp=drive_web">
		<p className='flex items-center gap-2 mt-3'><img src="/images/resolutions/slides.png" alt='slides'
		style={{width:'0.20833in',height:'0.20833in'}} /><strong>Electric
		School Buses</strong></p></a>
		<h1 id="petition">Petition</h1>
		<p>To: Selby Transportation Corporation, Riverdale Country School</p>
		<p>Electric school buses help battle climate change, improve student
		health, and create long-term savings. Riverdale and SuperSelby have the
		resources necessary to buy electric school buses and the charging
		infrastructure. Implementing electric school buses would not be a
		dramatic change. Drivers need little training for the electric buses,
		and they operate at similar speeds. Electric school buses would replace
		old diesel buses at the end of their servicing life. We would lead as an
		example to other schools and demonstrate Riverdale’s innovation. You can
		view more details at joelgrayson.com/electric-school-buses. New York
		City public schools buses are transitioning to all electric by 2035, so
		it is happening at other schools already.</p>
		<p>By signing this petition, you agree that Riverdale and SuperSelby
		should replace their next broken diesel bus with an electric bus instead
		of buying another diesel bus. With enough signatures from students and
		faculty, I hope we can make this a reality.</p>

		<iframe src="https://api.joelgrayson.com/combating-climate-change/electric-school-buses-petition/signatures/" width="100%" height="1500px" />
		<iframe src="https://api.joelgrayson.com/combating-climate-change/electric-school-buses-petition/" width="100%" height="2600px" />
   </MeetingContainer>;
}
