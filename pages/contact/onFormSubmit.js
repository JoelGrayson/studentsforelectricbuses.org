export default function onFormSubmit(setContacted) {
    return e=>{
        e.preventDefault();
    
        const name=e.target[0].value;
        const email=e.target[1].value;
        const message=e.target[2].value;
    
        // Add to database
        fetch('/api/contact-form/new', {
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
}
