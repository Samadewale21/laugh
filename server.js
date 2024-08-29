const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json()); // For parsing application/json
app.use(express.static('public')); // Serve static files from 'public' directory

// GET: Fetch a joke
app.get('/joke', async (req, res) => {
    try {
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching joke');
    }
});

// POST: Fetch a joke with a specific category or type
app.post('/joke', async (req, res) => {
    const { category = 'Any', type = 'single' } = req.body;

    try {
        const response = await axios.get(`https://v2.jokeapi.dev/joke/${category}`, {
            params: {
                type: type
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching joke');
    }
});

// PATCH: Example route to update joke preferences (e.g., category or type)
app.patch('/joke', async (req, res) => {
    const { category = 'Any', type = 'single' } = req.body;

    try {
        const response = await axios.get(`https://v2.jokeapi.dev/joke/${category}`, {
            params: {
                type: type
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching joke');
    }
});

// DELETE: There's no direct way to delete jokes from JokeAPI, so this route will not function as expected
app.delete('/joke/:id', (req, res) => {
    res.status(405).send('DELETE method is not supported by JokeAPI');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});