const mongoose = require("mongoose");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mmongodb+srv://Administrador:A1x291x0@cluster0.xwqe6.mongodb.net/game_collection?retryWrites=true&w=majority");
mongoose.Promise = global.Promise;

module.exports = mongoose;

console.log("Server is Running");
