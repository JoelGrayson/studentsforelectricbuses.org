const emailClient=require('@sendgrid/mail');
emailClient.setApiKey(process.env.SENDGRID_API_KEY);
const textClient=require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export default function notifyJoel(args: { //notify Joel of contact form submission
    text?: String;
    email?: {
        subject: String;
        replyTo: String;
        body: String;
    };
}) {
    return Promise.all([
        new Promise<void>((resolve, reject)=>{ //email Joel
            if (args.email)
                emailClient.send({
                    to: process.env.MY_EMAIL_ADDR,
                    from: 'bot@joelgrayson.com',
                    subject: args.email.subject,
                    text: args.email.body,
                    replyTo: args.email.replyTo
                }).then(()=>resolve());
            else
                resolve();
        }),
        new Promise<void>((resolve, reject)=>{ //text Joel
            if (args.text)
                textClient.messages.create({
                    to: process.env.MY_PHONE_NUMBER,
                    from: process.env.TWILIO_PHONE_NUMBER,
                    body: args.text,
                }).then(()=>resolve());
            else
                resolve();
        })
    ])
}
