/*
    ---Form Info---
    * Your Name
    * Your Email
    * Your School
    * Roughly how many buses does your school have? (optional)
    * Why do you want to join? (optional)
*/

import React, { useState } from 'react';
import Page from "../../components/PageContainer";
import onFormSubmit from './onFormSubmit';
import styles from '../../styles/form/form.module.css';

export default function Join() {
    const [content, setContent]=useState<String>('form');
    
    return (<Page center>
        <style jsx>{`
            form div label {
                display: inline-block;
                width: 60px;
            }
        `}</style>

        {
            content==='form'
            ?
            (<form action='POST' target="/api/join-form/new" className={styles.form} onSubmit={onFormSubmit(setContent)}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name='name' id='name' placeholder="Your Name" />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' id='email' placeholder="Your Email" />
                </div>
                <div>
                    <label htmlFor="schoolName">School</label>
                    <input type="text" name="schoolName" id="schoolName" placeholder="Your School" />
                </div>

                <label htmlFor="numBuses">Roughly how many buses does your school have? (optional)</label>
                <select name="numBuses" id="numBuses">
                    <option value="not specified">Select an option...</option>
                    <option value="0-5">0-5</option>
                    <option value="5-10">5-10</option>
                    <option value="10-20">10-30</option>
                    <option value="20-40">30-100</option>
                    <option value="40+">More than 100</option>
                </select>
                
                <label htmlFor="whyYouWantToJoin">Why do you want to join? (optional)</label>
                <textarea name="whyYouWantToJoin" id="whyYouWantToJoin" cols={35} rows={6}></textarea>

                <button className="btn-blue">Join</button>
            </form>)
            :
            (<div>{content.split('\n').map(line=><p>{line} <br/></p>)}</div>) //Newline processing: \n → <p>
        }
    </Page>);
}
