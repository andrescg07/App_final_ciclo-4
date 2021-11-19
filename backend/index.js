let express = require('express');
let mongoose = require('mongoose');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let cors = require('cors');
let dbConfig = require('./database/db');

const app = express();


// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, {
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

// Routes Setup
app.use('/solicitud', require('../backend/routes/solicitud.route.js'))
app.use('/apartament', require('../backend/routes/apartament.route.js'))

// PORT
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})