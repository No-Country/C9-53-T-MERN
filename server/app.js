const express = require('express');
const routeUsuarios = require('./src/routes/routeUsers');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/users', routeUsuarios);

const port = process.env.PORT || 3030;
app.listen(port, () => console.log('RUNNING SERVER ON PORT:', port));
