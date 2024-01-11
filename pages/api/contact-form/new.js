// import { Client } from 'pg';
// import date2Timestamp from '../../../helpers/date2Timestamp';
import notifyJoel from '../../../helpers/notifyJoel';
import prisma from '@/data/prisma/client';

export default async function handler(req, res) {
    const {name, email, message}=req.body;

    await notifyJoel({ //notify Joel of contact form submission
        email: {
            subject: 'New SEB Contact Form Submission',
            replyTo: email,
            body: `${name} <${email}> wrote:\n${message}`
        },
        text: `---New SEB Contact Form Submission---\n`
        +`${name} <${email}> wrote:\n`
        +`${message}`
    });

    await prisma.contact_form.create({
        data: {
            date_submitted: new Date(),
            name,
            email,
            message
        }
    });

    res.status(200).json({
        message: `Added ${name} with message "${message}"`
    });
    
    // const client=new Client({
    //     host: process.env.PG_HOST,
    //     user: process.env.PG_USER,
    //     port: 5432,
    //     password: process.env.PG_PSWD,
    //     database: 'studentsforelectricbuses'
    // });
    // await client.connect();

    // try {
    //     const queryRes=await client.query(`
    //         INSERT INTO contact_form (date_submitted, name, email, message)
    //         VALUES
    //             ('${date2Timestamp(new Date())}', '${name}', '${email}', '${message}');
    //     `);

    //     res.status(200).json({
    //         message: `Added ${name} with message "${message}"`,
    //         queryRes
    //     });
    // }
    // catch (e) {
    //     res.json({
    //         message: e.toString()
    //     })
    // }
    // finally {
    //     client.end();
    // }
}
