import MeetingContainer from '@/components/MeetingContainer';

/*
Note on how I generated this
* Exported google document as Webpage
* Used https://transform.tools/html-to-jsx on the HTML content
* Copied it in and ran /<ul className="/<ul className="unstyled /g

*/

export default function Meeting() {
    return <MeetingContainer date={'March 1, 2024'} title={'3.1.24 Meeting with Highland Fleets'}>
        <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        '@import url(https://themes.googleusercontent.com/fonts/css?kit=Lx1xfUTR4qFjwg0Z_pb902yWOW57Glq29V3__n4AGA7eUTbR4W0XOgE2iH4kL8Gh);.lst-kix_31ol693afl4e-2>li:before{content:"\\0025cf   "}.lst-kix_31ol693afl4e-3>li:before{content:"\\0025cf   "}.lst-kix_31ol693afl4e-1>li:before{content:"\\0025cf   "}.lst-kix_31ol693afl4e-5>li:before{content:"\\0025cf   "}.lst-kix_31ol693afl4e-4>li:before{content:"\\0025cf   "}ul.lst-kix_sxdzqwbmjy2u-1{list-style-type:none}ul.lst-kix_sxdzqwbmjy2u-2{list-style-type:none}ul.lst-kix_sxdzqwbmjy2u-0{list-style-type:none}.lst-kix_31ol693afl4e-0>li:before{content:"\\0025cf   "}ul.lst-kix_ooozq4bu3ezr-1{list-style-type:none}ul.lst-kix_ooozq4bu3ezr-0{list-style-type:none}ul.lst-kix_sxdzqwbmjy2u-7{list-style-type:none}ul.lst-kix_sxdzqwbmjy2u-8{list-style-type:none}ul.lst-kix_ooozq4bu3ezr-5{list-style-type:none}ul.lst-kix_sxdzqwbmjy2u-5{list-style-type:none}ul.lst-kix_ooozq4bu3ezr-4{list-style-type:none}ul.lst-kix_sxdzqwbmjy2u-6{list-style-type:none}ul.lst-kix_ooozq4bu3ezr-3{list-style-type:none}ul.lst-kix_sxdzqwbmjy2u-3{list-style-type:none}ul.lst-kix_ooozq4bu3ezr-2{list-style-type:none}ul.lst-kix_sxdzqwbmjy2u-4{list-style-type:none}ul.lst-kix_ooozq4bu3ezr-8{list-style-type:none}ul.lst-kix_ooozq4bu3ezr-7{list-style-type:none}ul.lst-kix_ooozq4bu3ezr-6{list-style-type:none}.lst-kix_ooozq4bu3ezr-4>li:before{content:"\\0025cf   "}.lst-kix_2c29rbmu3925-2>li:before{content:"\\0025a0   "}ul.lst-kix_2c29rbmu3925-5{list-style-type:none}ul.lst-kix_2c29rbmu3925-4{list-style-type:none}.lst-kix_ooozq4bu3ezr-3>li:before{content:"\\0025cf   "}.lst-kix_ooozq4bu3ezr-5>li:before{content:"\\0025cf   "}.lst-kix_2c29rbmu3925-1>li:before{content:"\\0025cb   "}.lst-kix_2c29rbmu3925-3>li:before{content:"\\0025cf   "}ul.lst-kix_2c29rbmu3925-7{list-style-type:none}ul.lst-kix_2c29rbmu3925-6{list-style-type:none}.lst-kix_ooozq4bu3ezr-2>li:before{content:"\\0025cf   "}.lst-kix_ooozq4bu3ezr-6>li:before{content:"\\0025cf   "}ul.lst-kix_2c29rbmu3925-1{list-style-type:none}ul.lst-kix_2c29rbmu3925-0{list-style-type:none}ul.lst-kix_2c29rbmu3925-3{list-style-type:none}.lst-kix_sxdzqwbmjy2u-8>li:before{content:"\\0025a0   "}ul.lst-kix_2c29rbmu3925-2{list-style-type:none}.lst-kix_ooozq4bu3ezr-0>li:before{content:"\\0025cf   "}.lst-kix_ooozq4bu3ezr-8>li:before{content:"\\0025cf   "}.lst-kix_ooozq4bu3ezr-1>li:before{content:"\\0025cf   "}.lst-kix_ooozq4bu3ezr-7>li:before{content:"\\0025cf   "}.lst-kix_2c29rbmu3925-7>li:before{content:"\\0025cb   "}.lst-kix_2c29rbmu3925-0>li:before{content:"\\0025cf   "}.lst-kix_2c29rbmu3925-8>li:before{content:"\\0025a0   "}ul.lst-kix_31ol693afl4e-0{list-style-type:none}.lst-kix_sxdzqwbmjy2u-3>li:before{content:"\\0025cf   "}ul.lst-kix_31ol693afl4e-1{list-style-type:none}ul.lst-kix_31ol693afl4e-4{list-style-type:none}.lst-kix_sxdzqwbmjy2u-5>li:before{content:"\\0025a0   "}ul.lst-kix_31ol693afl4e-5{list-style-type:none}ul.lst-kix_31ol693afl4e-2{list-style-type:none}.lst-kix_sxdzqwbmjy2u-4>li:before{content:"\\0025cb   "}ul.lst-kix_31ol693afl4e-3{list-style-type:none}.lst-kix_2c29rbmu3925-6>li:before{content:"\\0025cf   "}ul.lst-kix_31ol693afl4e-8{list-style-type:none}.lst-kix_sxdzqwbmjy2u-7>li:before{content:"\\0025cb   "}.lst-kix_2c29rbmu3925-5>li:before{content:"\\0025a0   "}ul.lst-kix_31ol693afl4e-6{list-style-type:none}ul.lst-kix_31ol693afl4e-7{list-style-type:none}.lst-kix_2c29rbmu3925-4>li:before{content:"\\0025cb   "}.lst-kix_sxdzqwbmjy2u-6>li:before{content:"\\0025cf   "}li.li-bullet-0:before{margin-left:-18pt;white-space:nowrap;display:inline-block;min-width:18pt}.lst-kix_sxdzqwbmjy2u-2>li:before{content:"\\0025a0   "}.lst-kix_sxdzqwbmjy2u-1>li:before{content:"\\0025cb   "}.lst-kix_sxdzqwbmjy2u-0>li:before{content:"\\0025cf   "}.lst-kix_31ol693afl4e-6>li:before{content:"\\0025cf   "}.lst-kix_31ol693afl4e-7>li:before{content:"\\0025cf   "}ul.lst-kix_2c29rbmu3925-8{list-style-type:none}.lst-kix_31ol693afl4e-8>li:before{content:"\\0025cf   "}ol{margin:0;padding:0}table td,table th{padding:0}.c11{-webkit-text-decoration-skip:none;color:#000000;font-weight:700;text-decoration:underline;vertical-align:baseline;text-decoration-skip-ink:none;font-size:28pt;font-family:"Helvetica Neue";font-style:normal}.c1{margin-left:36pt;padding-top:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.5;orphans:2;widows:2;text-align:left}.c2{margin-left:108pt;padding-top:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.5;orphans:2;widows:2;text-align:left}.c3{margin-left:144pt;padding-top:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.5;orphans:2;widows:2;text-align:left}.c5{margin-left:72pt;padding-top:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.5;orphans:2;widows:2;text-align:left}.c0{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:"Helvetica Neue";font-style:normal}.c8{padding-top:0pt;padding-bottom:0pt;line-height:1.5;page-break-after:avoid;orphans:2;widows:2;text-align:center}.c9{padding-top:0pt;padding-bottom:0pt;line-height:1.5;orphans:2;widows:2;text-align:left}.c6{background-color:#ffffff;max-width:468pt;padding:72pt 72pt 72pt 72pt}.c4{padding:0;margin:0}.c10{height:12pt}.c7{font-size:25pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Helvetica Neue";line-height:1.5;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#434343;font-size:15pt;padding-bottom:16pt;font-family:"Helvetica Neue";line-height:1.5;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:12pt;font-family:"Helvetica Neue"}p{margin:0;color:#000000;font-size:12pt;font-family:"Helvetica Neue"}h1{padding-top:0pt;-webkit-text-decoration-skip:none;color:#000000;font-weight:700;text-decoration:underline;font-size:28pt;padding-bottom:0pt;line-height:1.5;page-break-after:avoid;text-decoration-skip-ink:none;font-family:"Helvetica Neue";orphans:2;widows:2;text-align:center}h2{padding-top:0pt;-webkit-text-decoration-skip:none;color:#000000;font-weight:700;text-decoration:underline;font-size:23pt;padding-bottom:0pt;line-height:1.5;page-break-after:avoid;text-decoration-skip-ink:none;font-family:"Helvetica Neue";orphans:2;widows:2;text-align:left}h3{padding-top:0pt;color:#000000;font-weight:700;font-size:17pt;padding-bottom:0pt;font-family:"Helvetica Neue";line-height:1.5;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:0pt;color:#000000;font-weight:700;font-size:14pt;padding-bottom:0pt;font-family:"Helvetica Neue";line-height:1.5;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:0pt;color:#000000;font-size:13pt;padding-bottom:0pt;font-family:"Helvetica Neue";line-height:1.5;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:0pt;color:#000000;font-size:11pt;padding-bottom:0pt;font-family:"Helvetica Neue";line-height:1.5;page-break-after:avoid;orphans:2;widows:2;text-align:left}'
    }}
  />
  <p className="c9 c10">
    <span className="c0" />
  </p>
  <p className="c9">
    <span className="c0">
      Note: all dollar values in this document are just thrown out there to
      better visualize the situation. They are by no means the actual numbers.
    </span>
  </p>
  <p className="c9 c10">
    <span className="c0" />
  </p>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-0 start">
    <li className="c1 li-bullet-0">
      <span className="c0">Intros</span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-1 start">
    <li className="c5 li-bullet-0">
      <span className="c0">
        James Klingensmith is the Director of Fleet Solutions at Highland Fleets
      </span>
    </li>
    <li className="c5 li-bullet-0">
      <span className="c0">Daniel Gottesman replaces Julia</span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-2 start">
    <li className="c2 li-bullet-0">
      <span className="c0">Boston-based</span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-1">
    <li className="c5 li-bullet-0">
      <span className="c0">SEB was there</span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-0">
    <li className="c1 li-bullet-0">
      <span className="c0">
        We are in a unique position in that everyone on board
      </span>
    </li>
    <li className="c1 li-bullet-0">
      <span className="c0">
        8–10 year transition period. We are at the start.
      </span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-1 start">
    <li className="c5 li-bullet-0">
      <span className="c0">
        Highland (and James) will be there the full way
      </span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-0">
    <li className="c1 li-bullet-0">
      <span className="c0">
        RCS extended contract to ease transition to electric buses
      </span>
    </li>
    <li className="c1 li-bullet-0">
      <span className="c0">
        SuperSelby’s has 3 main depots, which are rented not owned
      </span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-1 start">
    <li className="c5 li-bullet-0">
      <span className="c0">
        Initial problem was that having the charging infrastructure on the
        leased property would be stranded property that could be lost in a
        default
      </span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-0">
    <li className="c1 li-bullet-0">
      <span className="c0">
        SuperSelby is retiring 6–7 diesel buses this year
      </span>
    </li>
    <li className="c1 li-bullet-0">
      <span className="c0">
        In the pilot, we could get 7 units for the next 10 years. We could do 15
        years, but 10 years is more appropriate for the duration of the current
        Riverdale–SuperSelby contract
      </span>
    </li>
    <li className="c1 li-bullet-0">
      <span className="c0">News</span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-1 start">
    <li className="c5 li-bullet-0">
      <span className="c0">
        NYTVIP was subsumed by NYSERDA and NYSERDA no longer provides funding to
        private schools. While this is sad, NYSERDA was only for the first 2
        transitioned units for $120k per bus.
      </span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-0">
    <li className="c1 li-bullet-0">
      <span className="c0">$ model for e-bus transition</span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-1 start">
    <li className="c5 li-bullet-0">
      <span
        style={{
          overflow: "hidden",
          display: "inline-block",
          margin: "0.00px 0.00px",
          border: "0.00px solid #000000",
          transform: "rotate(0.00rad) translateZ(0px)",
          WebkitTransform: "rotate(0.00rad) translateZ(0px)",
          width: "515.50px",
          height: "214.79px"
        }}
      >
        <img
          alt=""
          src="/images/financial-model.png"
          style={{
            width: "515.50px",
            height: "214.79px",
            marginLeft: "0.00px",
            marginTop: "0.00px",
            transform: "rotate(0.00rad) translateZ(0px)",
            WebkitTransform: "rotate(0.00rad) translateZ(0px)"
          }}
          title=""
        />
      </span>
    </li>
    <li className="c5 li-bullet-0">
      <span className="c0">
        Cost of electric is about double the cost of diesel
      </span>
    </li>
    <li className="c5 li-bullet-0">
      <span className="c0">
        Split payments over time vs. paying all years upfront
      </span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-2 start">
    <li className="c2 li-bullet-0">
      <span className="c0">$50k for day one vs. $2 million upfront</span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-1">
    <li className="c5 li-bullet-0">
      <span className="c0">The way to go</span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-2 start">
    <li className="c2 li-bullet-0">
      <span className="c0">
        In the first fundraiser, we will pay for all the EV charging
        infrastructure costs and duration of the EVs. Fundraise the whole amount
        on day 1 that slowly pays out to Highland over time.
      </span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-3 start">
    <li className="c3 li-bullet-0">
      <span className="c0">
        If we only paid for the first 3 years, we would start to get into
        threatening Riverdale’s credit score because if a default occurred when
        there was not enough fundraising to pay for the current year of e-buses.
      </span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-2">
    <li className="c2 li-bullet-0">
      <span className="c0">
        Future fundraisers will pay for more buses entering the fleet.
      </span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-3 start">
    <li className="c3 li-bullet-0">
      <span className="c0">
        Will be cheaper because there is no need to buy new chargers and build
        on the depot and the cost of buses will go down.
      </span>
    </li>
  </ul>
  <p className="c9 c10">
    <span className="c0" />
  </p>
  <ul className="unstyled c4 lst-kix_sxdzqwbmjy2u-0 start">
    <li className="c1 li-bullet-0">
      <span className="c0">Next steps</span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-1 start">
    <li className="c5 li-bullet-0">
      <span className="c0">Get price of diesel world</span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-2 start">
    <li className="c2 li-bullet-0">
      <span className="c0">
        Highland has different pricing analysis that SuperSelby does so it will
        need to calculate
      </span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-1">
    <li className="c5 li-bullet-0">
      <span className="c0">Get depot information</span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-2 start">
    <li className="c2 li-bullet-0">
      <span className="c0">Addresses</span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-1">
    <li className="c5 li-bullet-0">
      <span className="c0">Analyze depot</span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-2 start">
    <li className="c2 li-bullet-0">
      <span className="c0">Hop on call for depot choosing</span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-1">
    <li className="c5 li-bullet-0">
      <span className="c0">Get EV pricing</span>
    </li>
    <li className="c5 li-bullet-0">
      <span className="c0">Find delta</span>
    </li>
  </ul>
  <ul className="unstyled c4 lst-kix_2c29rbmu3925-2 start">
    <li className="c2 li-bullet-0">
      <span className="c0">
        Get cost on electric (ConEd prices, many other factors)
      </span>
    </li>
    <li className="c2 li-bullet-0">
      <span className="c0">
        Look at cost analysis with the club during a club meeting
      </span>
    </li>
  </ul>
  <p className="c9 c10">
    <span className="c0" />
  </p>
  <ul className="unstyled c4 lst-kix_31ol693afl4e-0 start">
    <li className="c1 li-bullet-0">
      <span className="c0">
        When you said that RCS extended the contract, did they do that for us or
        for a different reason?
      </span>
    </li>
  </ul>
  <p className="c9 c10">
    <span className="c0" />
  </p>
  <p className="c9 c10">
    <span className="c0" />
  </p>

        
   </MeetingContainer>;
}
