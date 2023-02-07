const express = require('express'); // requiring express module
const app = express(); // craeting the app object
const userRouter = require('./routes/route');

app.set('view engine', 'ejs');
app.use('/', userRouter);
app.listen(8080);
console.log('The servre is running on port 8080...');
