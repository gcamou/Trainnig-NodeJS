var configValues = require("./config");

module.exports = {

    getConnectionString: function() {
        return "mongodb+srv://" +
        configValues.username +
        ":" +
        configValues.password +
        "@trainning-uhvq1.mongodb.net/NodeDB?retryWrites=true&w=majority";
    }

}