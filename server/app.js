const express = require('express');
const {mongoose} = require('mongoose');
const routeUsuarios = require('./src/routes/routeUsers');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

mongoose
  .set('strictQuery', true)
  .connect(
    'mongodb+srv://wikiideas:qxvfoeqvMnUryWS3@cluster0.4ryuos8.mongodb.net/fithouse'
  )
  .then(() => console.log('MONGO CONNECTED'));

app.use('/api', routeUsuarios);



const port = process.env.PORT || 3030;
app.listen(port, () => console.log('RUNNING SERVER ON PORT:', port));
