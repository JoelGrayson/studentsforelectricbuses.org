import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'pg';
import date2Timestamp from '../../../helpers/date2Timestamp';
import notifyJoel from '../../../helpers/notifyJoel';

export default async function handler(req: NextApiRequest, res: NextApiResponse<{message: String, queryRes?: any}>) {
    const {name, email, schoolName, numBuses, whyYouWantToJoin}=req.body;

    console.log(req.body);

    const msg=`Name: ${name}\n`
    +`Email: ${email}\n`
    +`School name: ${schoolName}\n`
    +`#Buses: ${numBuses}\n`
    +`Why They Want to Join:\n${whyYouWantToJoin}`;

    await notifyJoel({ //notify Joel of contact form submission
        email: {
            subject: 'New SEB Join Form Submission',
            replyTo: email,
            body: msg
        },
        text: `---New SEB Join Form Submission---\n${msg}`
    });

    const client=new Client({
        host: process.env.PG_HOST,
        user: process.env.PG_USER,
        port: 5432,
        password: process.env.PG_PSWD,
        database: 'studentsforelectricbuses'
    });
    await client.connect();

    try {
        const queryRes=await client.query(`
            INSERT INTO join_form (date_submitted, name, email, school_name, num_buses, why_you_want_to_join)
            VALUES
                ('${date2Timestamp(new Date())}', '${name}', '${email}', '${schoolName}', '${numBuses}', '${whyYouWantToJoin}');
        `);

        res.status(200).json({
            message: `Thanks, ${name}! We will reach out to you soon.`,
            queryRes
        });
    }
    catch (e: any) {
        res.json({
            message: e.toString()
        })
    }
    finally {
        client.end();
    }
}
