const express = require('express');
const app = express();
const port = 3000;

const loginMiddleware = (req, res, next) => {
    console.log("request method: ", req.method);
    console.log("request url: ", req.url);
    next();
}
app.use(loginMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/students', (req, res) => {
  res.send('hello students');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
