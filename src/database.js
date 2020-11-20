const mongoose = require('mongoose');

const db_route = process.env.BD_CONNECTION || 'mongodb://localhost/TestDatabase';

mongoose.connect(db_route, {
        useNewUrlParser: true,
        useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
        console.log('Database connection opened');
});
