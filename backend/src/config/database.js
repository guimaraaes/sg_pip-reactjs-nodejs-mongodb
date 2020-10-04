const mongoose = require("mongoose");

const url = "mongodb://mongo:27017/sis_pip";

mongoose
    .connect(url, { useNewUrlParser: true })
    .then(result => {
        console.log('MongoDB Conectado');
    })
    .catch(error => {
        console.log(error);
    });

module.exports = mongoose;
