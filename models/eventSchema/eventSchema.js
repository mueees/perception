var _ = require('underscore'),
    logger = require("libs/log")(module),
    mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;


var EventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    }
});

var EventSchemaModel = mongoose.model('EventSchema', EventSchema);
module.exports = EventSchemaModel;