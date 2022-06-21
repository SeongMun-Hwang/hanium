const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser')
const { stream } = require('./utils/logger');
const { notFound, errorHandler } = require('./errors/handler');
const session = require('express-session');
const { IS_DEV, SESSION_KEY} = require('./env');
const auth = require('./routes/auth')
const app = express();

app.use(helmet());
app.use(compression());
app.use(morgan(IS_DEV ? 'dev' : 'combined', { stream }));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({
    origin:true,
    credentials: true
}));
app.use(
    session({
        name: "session.sid",
        resave: false,
        saveUninitialized: false,
        secret: SESSION_KEY,
        cookie: {
            secure: false,
            maxAge: 10 * 1000 * 60 * 60 * 24,
        }
    })
)
app.use(bodyParser.json())

app.use("/auth", auth);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
