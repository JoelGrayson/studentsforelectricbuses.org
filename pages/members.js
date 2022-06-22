import Header from '../components/Header';
import Page from '../components/PageContainer';

export default function Members() {
    return (<>
        <Page>
            <h2>Members</h2>
            <table>
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
            </table>
            <br/>
            <div>Want to become a member? <button className="btn-blue">Join</button>.</div>
        </Page>
    </>);
}