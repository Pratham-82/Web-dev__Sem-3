const express = require('express');
const app = express();
const port = 3000;

const loginMiddleware = (req, res, next) => {
    console.log("request method: ", req.method);
    console.log("request url: ", req.url);
    next();
}

const apicheckMiddleware = (req, res, next) => {
    if(req.query.API_KEY === '12345') {
        next();
    } else {
        res.status(403).send('Forbidden: Invalid API Key');
    }
}

// app.use(loginMiddleware);
// app.use(apicheckMiddleware);



app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/students',loginMiddleware, apicheckMiddleware, (req, res) => {
  res.send('hello students');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
