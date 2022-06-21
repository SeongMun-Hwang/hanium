const app = require('./app');
const mongoose = require('mongoose')
const {debug, error} = require('./utils/logger')
const {MONGO_URI, PORT} = require("./env");

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
    console.log('Database Connected!');
});

app.listen(PORT, ()=>{
    console.log(`server started listening on port ${PORT}...`)
    debug(`Sever running on ${PORT}`);
})
