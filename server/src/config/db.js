import mongoose from 'mongoose'

const {DBUrl} = process.env

//{useNewUrlParser: true}


mongoose.connect(DBUrl)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
console.log('Connecté a MongoDB !')
});

export const connect = ()=> mongoose.connect(DBUrl)