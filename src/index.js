require('dotenv').config();

const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const app = express();

//Database
require('./database');

//Settings 
app.set('port', process.env.PORT || 8001);


//Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(expressSession({ secret: 'max', saveUninitialized: false, resave: false }));


//Routing
//This goes at the very end of the 'use' statements
app.use('/api/pets/', require('./Routes/petRoutes'));
app.use('/api/users/', require('./Routes/userRoutes'));
app.use('/api/post/', require('./Routes/postRoutes'));
app.use('/api/comments/', require('./Routes/commentRoutes'));
app.use('/api/media/', require('./Routes/mediaRoutes'));

app.listen(app.get('port'), () => {
    console.log(`Hi, your server is running at port ${ app.get('port') }`);
});