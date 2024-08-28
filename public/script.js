document.getElementById('joke-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById('name').value.trim();
    const jokeDiv = document.getElementById('joke');

    if (name) {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
            const data = await response.json();
            if (data.joke) {
                jokeDiv.textContent = `Hey ${name}, here's a joke for you: ${data.joke}`;
            } else {
                jokeDiv.textContent = `Hey ${name}, I couldn't fetch a joke right now. Try again later!`;
            }
        } catch (error) {
            jokeDiv.textContent = `Hey ${name}, something went wrong. Please try again later.`;
        }
    } else {
        jokeDiv.textContent = 'Please enter a name.';
    }
});
