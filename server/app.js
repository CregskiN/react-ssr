const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>title</title>
    </head>
    <body>
        <h1>hello</h1>
        <p>world</p>
    </body>
    </html>
    `)
});

const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`listen ${host}:${port}...`);
})