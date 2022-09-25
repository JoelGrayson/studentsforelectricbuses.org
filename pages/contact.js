import { useState } from "react";
import Page from '../components/PageContainer';
import styles from '../styles/contact/contact.module.css';

export default function Contact() {
    const [contacted, setContacted]=useState(false);

    function onFormSubmitted(e) {
        e.preventDefault();

        const name=e.target[0].value;
        const email=e.target[1].value;
        const message=e.target[2].value;

        fetch('/api/contact-form/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message })
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            if (res.queryRes.command==='INSERT') //successfully contacted
                setContacted(true);
            else
                setContacted('error');
        });
    }
    
    return (<Page title='Contact'>
        {
            contacted===false //form not submitted yet
            ?
            <form method="POST" action='#' className={styles.form} onSubmit={onFormSubmitted}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input name='name' id='name' className={styles.input} required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' required />
                </div>
                <div>
                    <label htmlFor='message'>Message</label>
                    <br/>
                    <textarea cols="30" rows="10" name='message' id='message' required />
                </div>
                <button type='submit'>Send</button>
            </form>
            :
            (<>{
                contacted===true //form submitted successfully (confirmed by API)
                ?
                <div>Thanks for contacting me. I will write back when I can.</div>
                : //else an error occurred
                <div>Hmmm. Something went wrong when submitting this form.</div>
            }</>)
        }
    </Page>);
}
