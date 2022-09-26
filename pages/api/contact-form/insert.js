import { Client } from 'pg';
import date2Timestamp from '../../../helpers/date2TimeStamp';
import notifyJoel from '../../../helpers/notifyJoel';

export default async function handler(req, res) {
    const {name, email, message}=req.body;
    console.log(req.body);

    notifyJoel({name, email, message}); //notify Joel of contact form submission
    
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
            INSERT INTO contact_form (date_submitted, name, email, message)
            VALUES
                ('${date2Timestamp(new Date())}', '${name}', '${email}', '${message}');
        `);

        res.status(200).json({
            message: `Added ${name} with message "${message}"`,
            queryRes
        });
    }
    catch (e) {
        res.json({
            message: e.toString()
        })
    }
    finally {
        client.end();
    }
}
