require('dotenv').config();

//const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const app = express();

//Database
require('./database');

//Settings 
app.set('port', process.env.PORT || 8001);

//Middleware
//app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//Routing
//This goes at the very end of the 'use' statements
app.use('/api/pets', require('./routes/petRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/auth', require('./routes/AuthRoutes'));
app.use('/api/post', require('./routes/postRoutes'));

app.listen(app.get('port'), () => {
    console.log(`Hi, your server is running at port ${ app.get('port') }`);
});