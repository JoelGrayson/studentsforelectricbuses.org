import { useState } from "react";
import Page from '../components/PageContainer';
import styles from '../styles/contact/contact.module.css';

export default function Contact() {
    const [message, setMessage]=useState(null);

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
            setMessage(res.message);
        });
    }
    
    return (<Page title='Contact'>
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

        <div>{message ?? JSON.stringify(message)}</div>
    </Page>);
}
