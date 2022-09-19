import Page from '../components/PageContainer';
import styles from '../styles/members.module.css';
import Link from 'next/link';
import MemberSchool from '../components/MemberSchool';

function m(name, joinYear='Unknown') { //member struct
    return {name, joinYear};
}

export default function Members() {
    return (<>
        <Page center>
            <h2>Members</h2>
            <br/>
            <div className={styles.container}>
                <div className={styles.board}>
                    <div>President — </div>
                    <div className={`${styles.block} ${styles.blockRed}`}>Board</div>
                </div>
                <div className={styles.schools}>
                    {/* Schools */}
                    <MemberSchool name="Riverdale" fullName="Riverdale Country School"
                        // representative
                        members={[
                            m('Joel Grayson', '6/2021'),
                            m('Theo Aborn', '5/2022'),
                            m('Talia Mamaysky', '11/2021'),
                            m('Riley Wittman', '11/2021')
                        ]}
                    />
                    <MemberSchool name="Fieldston" fullName="Ethical Culture Fieldston School"
                        // representative
                        members={[
                            m('Bri Bernard', '3/2021'),
                        ]}
                    />
                    <MemberSchool name="Horace Mann" fullName="Horace Mann School"
                        // representative
                        members={[
                            m('wya', '3/2021'),
                        ]}
                    />
                    <MemberSchool name="Bergen County Academies" fullName="Bergen County Academies"
                        // representative
                        members={[
                            m('Allison Ore', '3/2021'),
                        ]}
                    />
                    <MemberSchool name="Packer Collegiate" fullName="Packer Collegiate"
                        // representative
                        members={[
                            m('Rebecca Zimmerman', '11/2021'),
                        ]}
                    />
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
                <Link href="/join"><a><button className="btn-blue">Join</button></a></Link>
            </div>
        </Page>
    </>);
}