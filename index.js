const express = require('express');

const PORT = 3000;
const server = express();

server.get("*", (req, res) => {
    return res.send("hello from my first dist in node js")
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}//`);
})
