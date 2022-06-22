/* Form Info
* Email

Required
* Name
* School
* How many buses your school has?
* Why do you want to join?

Optional
* Grade (find from email)
* Graduation email (find from email)
* School's location (find from website)
* Type of school public/private (find from website)

*/

import Page from "../components/PageContainer";

export default function Join() {
    return (<Page center>
        {/* <div className="flex flex-col items-center"> */}
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSc4LGT_UStc0ylYvU0dUkoObpQvSi--8TA6I0hBFuLoDgg3NA/viewform?embedded=true"
                width="700" height="1400" frameBorder="0" marginHeight="0" marginWidth="0"
            >Loading join form...</iframe>
        {/* </div> */}
    </Page>);
}
