# Ordered by usage from oldest to newest JS features

## 1 Callback (do not call client.end())
```js
client.query(`SELECT * FROM test_contacts;`, (err, queryRes)=>{
    if (err) {
        res.status(200).send(`<div>
            <h2>Error</h2>
            <pre>${JSON.stringify(err)}</pre>
        </div>`);
        client.end();
    } else {
        res.status(200).send(`<div>
            <h2>Result</h2>
            <pre>${JSON.stringify(queryRes.rows)}</pre>
        </div>`);
        client.end();
    }
});
```

## 2 Promises
```js
client.query(`SELEfCT * FROM test_contacts;`)
    .then(queryRes=>{
        res.json(`<div>
            <h2>Result</h2>
            <pre>${JSON.stringify(queryRes.rows)}</pre>
        </div>`);
        client.end();
    })
    .catch(e=>{
        res.send(`<div>
            <h2>The following error occurred</h2>
            <pre>${JSON.stringify(e)}</pre>
        </div>`)
        client.end();
    })
```

## 3 Async Await
```js
const res=await client.query(`SELEfCT * FROM test_contacts;`)
```

