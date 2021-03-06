const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.static('../client/', {index: 'public/index.html'}));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
