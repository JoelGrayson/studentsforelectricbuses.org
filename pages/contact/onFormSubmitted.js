export default function onFormSubmitted(setContacted) {
    return e=>{
        e.preventDefault();
    
        const name=e.target[0].value;
        const email=e.target[1].value;
        const message=e.target[2].value;
    
        addToDatabase({name, email, message}, setContacted);
        notifyJoel({name, email, message});
    }
}

function addToDatabase({name, email, message}, setContacted) {
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
        if (res.queryRes.command==='INSERT') //successfully contacted
            setContacted(true);
        else
            setContacted('error');
    });
}

function notifyJoel({ name, email, message }) { //notify Joel of contact form submission
    const textMsg=`New contact form submission from SEB.org`
    +`${name} <${email}> wrote:`
    +message.toString();

    // email Joel
    
    // text Joel
}
