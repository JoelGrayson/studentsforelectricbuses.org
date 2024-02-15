import Page from '../components/PageContainer';
import styles from '../styles/members/members.module.css';
import Link from 'next/link';
import MemberSchool from '../components/MemberSchool';

function m(name: string, joinYear='Unknown') { //member struct
    return {name, joinYear};
}

export default function Members() {
    return <Page center bottomPadding seo={{
        title: 'Members of Students for Electric Buses'
    }}>
        <h2>Members</h2>
        <br/>
        <div className={styles.container}>
            {/* <div className={styles.board}>
                <div>President — </div>
                <div className={`${styles.block} ${styles.blockRed}`}>Board</div>
            </div> */}
            <div className={styles.schools}>
                {/* Schools */}
                <MemberSchool name="Riverdale" fullName="Riverdale Country School"
                    // representative
                    members={[
                        m('Joel Grayson', '6/2021'),
                        m('Theo Aborn', '5/2022'),
                        // m('Talia Mamaysky', '11/2021'),
                        m('Nico Fodor', '10/2023'),
                        m('Aidan Daluiski', '10/2023'),
                        m('Grant Bishop', '10/2023'),
                        // m('Riley Wittman', '11/2021'),
                    ]}
                />
                <MemberSchool name="Fieldston" fullName="Ethical Culture Fieldston School"
                    // representative
                    members={[
                        m('Bri Bernard', '3/2021'),
                        m('Genevieve Paul', '3/2022'),
                        m('Talia Proshan', '9/2022')
                    ]}
                />
                <MemberSchool name="Horace Mann" fullName="Horace Mann School"
                    // representative
                    members={[
                        // m('wya', '3/2021'),
                        m('Naomi Yaeger', '9/2022')
                    ]}
                />
                <MemberSchool name="Avenues" fullName="Avenues"
                    // representative
                    members={[
                        // m('wya', '3/2021'),
                        m('Renee Cai', '10/2023')
                    ]}
                />
                {/* <MemberSchool name="Bergen County Academies" fullName="Bergen County Academies"
                    // representative
                    members={[
                        m('Allison Ore', '3/2021'),
                    ]}
                /> */}
                {/* <MemberSchool name="Packer Collegiate" fullName="Packer Collegiate"
                    // representative
                    members={[
                        m('Rebecca Zimmerman', '11/2021'),
                    ]}
                /> */}
            </div>
        </div>
        {/* <table>
            <thead>
                <tr>
                    <th>Riverdale Country School</th>
                    <th>Fieldston</th>
                    <th>Horace Mann</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Joel Grayson</td>
                    <td>Bri Bernard</td>
                    <td>Spencer Rosenberg</td>
                </tr>
                <tr>
                    <td>Riley Wittman</td>
                    <td></td>
                    <td>Claire Goldberg</td>
                </tr>
                <tr>
                    <td>Talia Mamaysky</td>
                </tr>
            </tbody>
        </table> */}
        <br/>
        <div>Want to become a member?&nbsp;&nbsp;
            <Link href="/join"><button className="btn-blue">Join</button></Link>
        </div>
        <br />
        <h3>Former Members</h3>
        <ul>
            <li>Lexi Caravati</li>
            <li>Rachel Sporn</li>
            <li>Celine Shon</li>
            <li>Carter Boyce</li>
            <li>Max Alston</li>
            <li>Max Gerber</li>
            <li>Daniel Holt</li>
            <li>Riley Wittman</li>
            <li>Olivia Beyer</li>
            <li>Talia Mamaysky</li>
            <li>Gabby Grant</li>
        </ul>
    </Page>;
}
