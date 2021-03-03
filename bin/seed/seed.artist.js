require("../../config/mongo");

const ArtistModel = require("./../../models/Artist");

const artists = [
  {
    name: "Daft Punk",
    isBand: true,
    description: "French electronic duo",
    style: "603d460351489c22208168c7"
  },
  {
    name: "Rone",
    isBand: false,
    description: "French electronic artist",
    style: "603d601abc38b83cead8db7f"
  },
  {
    name: "Air",
    isBand: true,
    description: "French electronic duo",
    style: "603d703dbe036a53ce3ead03"
  },
];

ArtistModel.insertMany(artists)
  .then((ArtistDoc) => {
    console.log(ArtistDoc);
  })
  .catch((error) => {
    console.log(error);
  });
