import { useState } from "react";
import Page from '../../components/PageContainer';
import styles from '../../styles/contact/contact.module.css';
import onFormSubmitted from './onFormSubmitted';
import { Send } from 'react-feather';

export default function Contact() {
    const [contacted, setContacted]=useState(false);
    
    return (<Page title='Contact'>
        {
            contacted===false //form not submitted yet
            ?
            (<form method="POST" action='#' className={styles.form} onSubmit={onFormSubmitted(setContacted)}>
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
                <button type='submit' style={{width: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4}}>
                    Send
                    <Send height={20} />
                </button>
            </form>)
            :
            (<>{
                contacted===true //form submitted successfully (confirmed by API)
                ?
                <div style={{textAlign: 'center'}}>Thanks for contacting me. I will write back when I can.</div>
                : //else an error occurred
                <div>Hmmm. Something went wrong when submitting this form.</div>
            }</>)
        }
    </Page>);
}
