export default function onFormSubmit(setContacted: Function) {
    return (e: any)=>{ //: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    
        const name=e.target[0]?.value;
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
                setContacted(true);
            })
            .catch(res=>{
                setContacted('error');
            });
    }
}
