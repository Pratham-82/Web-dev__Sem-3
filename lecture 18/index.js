const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res, next) => {
    let age = 20;
    try {
        if (age < 18) {
            throw new Error('Age must be 18 or older');
        }
        res.send('welcome to the home page');
    } catch (error) {
        next(error);
    }
});

app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});