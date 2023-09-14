import MeetingContainer from '@/components/MeetingContainer';
import Image from 'next/image';

export default function Meeting() {
    return <MeetingContainer date={'April 5, 2023'} title={'Meeting with Mr. Klingensmith'}>
        <h3>Notes</h3>
        <ul>
        <li>
        <p>James Jimmy Klingensmith</p>
        </li>
        <li>
        <p>Class of 2008</p>
        </li>
        <li>
        <p>Pomona environmental analysis (EA)</p>
        <ul>
        <li>6-7 tracts</li>
        </ul>
        </li>
        <li>
        <p>Sustainable Business Practices - graduate (UOregon - Charles)</p>
        <ul>
        <li>Sustainability is the heart of the program</li>
        </ul>
        </li>
        <li>
        <p>Beverly Hills is a project</p>
        </li>
        <li>
        <p>Similar to a PPA</p>
        </li>
        <li>
        <p>2027 mandate for all NYS</p>
        </li>
        <li>
        <p>Highland has lobbying and levers to pull</p>
        <ul>
        <li>Could you advocate for private schools</li>
        </ul>
        </li>
        <li>
        <p>About highland</p>
        <ul>
        <li>Largest buyer of e-buses (get competitive prices)</li>
        <li>Julia Gasbarre and James are from the fleet solutions team</li>
        <li>Services
        <ul>
        <li>Build depots cost
        <ul>
        <li>Procure school buses</li>
        <li>Get chargers</li>
        <li>Manage the construction of depot upgrades</li>
        </ul>
        </li>
        <li>Pay for all of electricity (asterisks)
        <ul>
        <li>Software to charge at the best time</li>
        </ul>
        </li>
        <li>Train drivers</li>
        <li><img src="/images/meetings/how-it-works.png" alt=""/></li>
        </ul>
        </li>
        </ul>
        </li>
        <li>
        <p>Different plans</p>
        <ul>
        <li><img src="/images/meetings/suite-of-products.png" alt=""/></li>
        <li>Just chargers, just upgrades, or buses too</li>
        </ul>
        </li>
        <li>
        <p>Swap in buses - spare diesels</p>
        </li>
        <li>
        <p>Granular with bus routes - get the shortest route first</p>
        </li>
        <li>
        <p>Do the smallest routes first. Longer routes later. Monitoring.</p>
        </li>
        <li>
        <p>Level 2 charging.</p>
        </li>
        <li>
        <p>Only do V2G with level 3 charger. More expensive. ($6k)</p>
        </li>
        <li>
        <p>Incentives</p>
        <ul>
        <li><img src="/images/meetings/grant-lanscapes.png" alt=""/></li>
        <li>Call it a pilot in order to get ConEdison to agree to V2G (for political reasons)</li>
        <li>NYSERDA
        <ul>
        <li>Clean School Bus Program only applies to public schools</li>
        </ul>
        </li>
        <li>SuperSelby applies for grants. Highland helps with writing grants (they have a grant-writing team)</li>
        <li>$32,000 for 12 years=$384,000</li>
        <li>Make case for EPA Clean School Bus Program
        <ul>
        <li>Make case as a leader in this transition</li>
        <li>Make a case having SuperSelby has depot in underserved communities</li>
        </ul>
        </li>
        </ul>
        </li>
        </ul>
        <h3>Todo</h3>
        <ul>
        <li>KNF, Mr. Schultz, Me (in-person)
        <ul>
        <li>Make the case that we bring James</li>
        </ul>
        </li>
        <li>See if James can join SEB meeting</li>
        <li>Reschedule meeting</li>
        <li>Hanifa Barnes</li>
        <li>Have James send over the slides</li>
        </ul>
   </MeetingContainer>;
}
