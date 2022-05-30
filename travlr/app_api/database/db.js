const mongoose = require('mongoose');
const host = process.env.DB_Host || '127.0.0.1'
const dbURI = `mongodb://${host}/travlr`;
const readLine = require('readLine');

mongoose.set('useUnifiedTopology', true);

const connect = () => {
    setTimeout(() => mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useCreateIndex: true
    }),1000);
}

mongoose.connection.on('connected', () => {

});

mongoose.connection.on('error', () => {

});

mongoose.connection.on('disconnected', () => {

});

if (process.platform === 'win32'){

}

const gracefulShutdown = (msg, callback) => {

};

process.once('SIGUSR2', ()=> {

});

process.on('SIGINT', () =>{

});

process.on('SIGTERM', ()=>{

});

connect();


require('./models/travlr');
