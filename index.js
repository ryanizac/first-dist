const express = require('express');
const open = require('open');

const PORT = 3000;
const URL = `http://localhost:${PORT}/`
const server = express();

server.get("*", (req, res) => {
    return res.send("hello from my first dist in node js")
});

server.listen(PORT, () => {
    console.log(`Server running on ${URL}`);
    open(URL, { wait: true })
})
