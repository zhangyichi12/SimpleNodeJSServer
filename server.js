import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

import routes from './routes/index.js';

const app = express();

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

/// catch 404 and forwarding to error handler
app.use('*', (req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    res.send("404")
    next();
});

/// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    next();
});

// connect to mongoDB
mongoose.connect(
    'mongodb://localhost/node_server',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
    (err) => {
    if(err) {
        throw err;
    }
    else {
        console.log('Successfully connected');
    }
});


const serverPort = process.env.SERVER_PORT || 3001;
app.listen(serverPort, () => {
    console.log(`Listening port ${serverPort}`);
});