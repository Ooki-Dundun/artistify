require("../../config/mongo");

const ArtistModel = require("./../../models/Artist");

const artists = [
  {
    name: "Daft Punk",
    isBand: true,
    description: "French electronic duo",
  },
  {
    name: "Rone",
    isBand: false,
    description: "French electronic artist",
  },
  {
    name: "Air",
    isBand: true,
    description: "French electronic duo",
  },
];

ArtistModel.insertMany(artists)
  .then((ArtistDoc) => {
    console.log(ArtistDoc);
  })
  .catch((error) => {
    console.log(error);
  });
