const express = require('express');
const {mongoose} = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const routeUsuarios = require('./src/routes/routeUsers');
const strategyGoogle = require('./src/utils/strategyGoogle');
const routeAuthentication = require('./src/routes/routeAuthentication');
const strategyLocal = require('./src/utils/strategyLocal');
const strategyFacebook = require('./src/utils/strategyFacebook');
const swaggerDocs = require('./swagger');
const cors = require('cors');
const routeExercises = require('./src/routes/routeExercises');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

/* -------------------------------------------------------------------------- */
/*                                   MONGODB                                  */
/* -------------------------------------------------------------------------- */

mongoose
  .set('strictQuery', true)
  .connect(
    'mongodb+srv://wikiideas:qxvfoeqvMnUryWS3@cluster0.4ryuos8.mongodb.net/fithouse'
  )
  .then(() => console.log('MONGO CONNECTED'));

/* -------------------------------------------------------------------------- */
/*                                  PASSPORT                                  */
/* -------------------------------------------------------------------------- */

strategyGoogle();
strategyFacebook();
strategyLocal();

app.use(
  session({
    secret: 'mi_secreto',
    store: MongoStore.create({
      mongoUrl:
        'mongodb+srv://wikiideas:qxvfoeqvMnUryWS3@cluster0.4ryuos8.mongodb.net/fithouse',
      mongoOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    }),
    cookie: {
      maxAge: 5 * 60 * 1000, //5 minutos en milisegundos
    },
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

/* -------------------------------------------------------------------------- */
/*                                   ROUTES                                   */
/* -------------------------------------------------------------------------- */

app.use('/', routeAuthentication);
app.use('/users', routeUsuarios);
app.use('/exercises', routeExercises);

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log('RUNNING SERVER ON PORT:', port);
  swaggerDocs(app, port);
});
