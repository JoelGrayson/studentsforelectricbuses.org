import { Client } from 'pg';

export default async function handler(req, res) {
    const client=new Client({
        host: process.env.PG_HOST,
        user: process.env.PG_USER,
        port: 5432,
        password: process.env.PG_PSWD,
        database: 'studentsforelectricbuses'
    });
    await client.connect();

    const queryRes=await client.query(`SELECT * FROM contact_form;`);
    res.status(200).json(queryRes.rows);
    
    client.end();
}
