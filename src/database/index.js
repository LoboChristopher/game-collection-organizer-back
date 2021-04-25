const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Administrador:A1x291x0@cluster0.xwqe6.mongodb.net/game_collection?retryWrites=true&w=majority", { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
