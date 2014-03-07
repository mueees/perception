var _ = require('underscore'),
    logger = require("libs/log")(module),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EventSchema = new Schema({
    dimension: {
        type: Array,
        required: true
    },
    sessionId: {
        type: String,
        required: true
    },
    eventSchemaId: {
        type: String,
        required: true
    }
});

var EventModel = mongoose.model('Event', EventSchema);
module.exports = EventModel;