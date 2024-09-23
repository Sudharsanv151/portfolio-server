const mongoose =  require('mongoose')

mongoose.connect(process.env.MONGOURL || "mongodb+srv://admin:1512005@in-aws.si96f.mongodb.net/?retryWrites=true&w=majority&appName=In-AWS")
const connection = mongoose.connection;

connection.on('connected', ()=>console.log("DB Connected"))

connection.on('error', ()=>console.log("DB Error"))

module.exports = mongoose