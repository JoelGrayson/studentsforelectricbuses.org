export default function onFormSubmitted(setContent: Function) {
    return (e: any)=>{
        e.preventDefault();
    
        const values={
            name: e.target[0].value,
            email: e.target[1].value,
            schoolName: e.target[2].value,
            numBuses: e.target[3].value,
            whyYouWantToJoin: e.target[4].value
        };

        console.log(values);

        setContent('loading');

        // Add to database
        fetch('/api/join-form/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                setContent(res.message);
            })
            .catch(res=>{
                setContent(`I'm sorry this form is not working. Please try emailing me your response instead at joel@joelgrayson.com`);
            });
    }
}
