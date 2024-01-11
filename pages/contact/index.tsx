import { useState } from "react";
import Page from '../../components/PageContainer';
import styles from '../../styles/form/form.module.css';
import onFormSubmit from './onFormSubmit';
import { Send } from 'react-feather';
import { usePlausible } from "next-plausible";
import Loader from '@/components/Loader';

export default function Contact() {
    const [contacted, setContacted]=useState<boolean | 'loading'>(false);
    const plausible=usePlausible();
    
    return <Page title='Contact'>
        <style jsx>{`
            form label {
                display: inline-block;
                width: 60px;
            }
        `}</style>
        {
            contacted===false //form not submitted yet
            ?  <form method="POST" action='#' className={styles.form} onSubmit={(e)=>{
                    plausible('contactFormSubmitted');
                    onFormSubmit(setContacted)(e);
                }}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input name='name' id='name' className={styles.input} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email' />
                    </div>
                    <div>
                        <label htmlFor='message'>Message</label>
                        <br/>
                        <textarea cols={30} rows={10} name='message' id='message' />
                    </div>
                    <button type='submit' style={{width: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4}}>
                        Send
                        <Send height={20} />
                    </button>
                </form>
            : contacted==='loading'
            ? <Loader width={30} />
            : (
                contacted===true //form submitted successfully (confirmed by API)
                ? <div style={{textAlign: 'center'}}>Thanks for contacting me. I will write back when I can.</div>
                : //else an error occurred
                    <div>Hmmm. Something went wrong when submitting this form.</div>
            )
        }
    </Page>;
}
