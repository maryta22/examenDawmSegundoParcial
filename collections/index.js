const config = require("../config/nodb.config");
const moongose = require("mongoose");
const url = config.dialect + "://" + config.host + "/" + config.databasename;

moongose.connect(url)
.then(() =>{
    console.log("Base de datos funciona")
})
.catch((error) =>{
    console.log("Base de datos no funciona, error :"+ error)
})