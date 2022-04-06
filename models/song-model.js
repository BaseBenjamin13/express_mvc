

const mongoose = require("../db/connection");

const SongSchema = new mongoose.Schema(
    {
        song: {
            type:String,
            required: true,
        },
        artist: String
    },
    {timestamps: true}
)

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;
