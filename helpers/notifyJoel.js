const emailClient=require('@sendgrid/mail');
emailClient.setApiKey(process.env.SENDGRID_API_KEY);
const textClient=require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export default function notifyJoel({ name, email, message }) { //notify Joel of contact form submission
    // email Joel
    emailClient.send({
        to: process.env.MY_EMAIL_ADDR,
        from: 'bot@joelgrayson.com',
        subject: 'New SEB Contact Form Submission',
        replyTo: email,
        text: `${name} <${email}> wrote:\n${message}`
    });

    // text Joel
    textClient.messages.create({
        body: `---New SEB Contact Form Submission---\n`
        +`${name} <${email}> wrote:\n`
        +`${message}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.MY_PHONE_NUMBER
    });
}
