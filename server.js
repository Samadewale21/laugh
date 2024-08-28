const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from 'public' directory

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/joke/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const response = await axios.get(`https://v2.jokeapi.dev/joke/Any?name=${name}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching joke');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
