const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true
    },
    isLiked: {
        type: Boolean
    },
    isSaved: {
        type: Boolean
    },
    isUnicorn: {
        type: Boolean
    },
    minToRead: {
        type: Number
    },
    reactions: {
        type: Number
    },
    rest: {
        type: Number
    },
    saves: {
        type: Number
    },
    title: {
        type: String,
        required: true,
        min: 5
    },
    unicorns: {
        type: Number
    },
    urlCoverImage: {
        type: String,
        required: true
    },
    tags: {
        type: []
    }
})

module.exports = mongoose.model("posts", postSchema)