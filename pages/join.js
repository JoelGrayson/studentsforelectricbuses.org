/*
    ---Form Info---
    * Your Name
    * Your Email
    * Your School
    * Roughly how many buses does your school has? (optional)
    * Why do you want to join? (optional)
*/

import Page from "../components/PageContainer";

export default function Join() {
    return (<Page center>
        <form action='POST' target="/api/join-form/insert" onSubmit={{onFormSubmit}}>
            <div>
                <label>Name</label>
                <input type="text" placeholder="Your Name" />
            </div>
            <div>
                <label>Name</label>
                <input type="text" placeholder="Your Name" />
            </div>
        </form>
        {/* <div className="flex flex-col items-center"> */}
        {/* </div> */}
    </Page>);
}
