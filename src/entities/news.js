const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: { type: String, max: 255},
    body: String,
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    created: { type: Date, default: Date.now},
    stats: {
        likes: {type: Number, default: 0},
        shared: {type: Number, default: 0}
    }
});

module.exports.News = mongoose.model('News', newsSchema)