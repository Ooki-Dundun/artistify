const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema ({
    title: String,
    releaseDate: { type: Date, default: Date.now() },
    label: { type: Schema.Types.ObjectId, ref: "labels" },
    artist: { type: Schema.Types.ObjectId, ref: "artists" },
    cover: { type: String, default: "https://res.cloudinary.com/gdaconcept/image/upload/v1614550771/workshop-artistify/no-image-logo_dcufai.png" }
});

const AlbumModel = mongoose.model('albums', albumSchema);

module.exports = AlbumModel;
