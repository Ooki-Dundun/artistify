require("../../config/mongo");

const StyleModel = require("./../../models/Style");

const styles = [
  {
    name: "Electro",
    color: "#faf",
    wikiURL: "https://fr.wikipedia.org/wiki/Musique_%C3%A9lectronique",
  },
  {
    name: "Rock",
    color: "#FFD700",
    wikiURL: "https://fr.wikipedia.org/wiki/Musique_%C3Rock",
  },
  {
    name: "Classical",
    color: "#87ceeb",
    wikiURL: "https://fr.wikipedia.org/wiki/Musique_%C3Classique",
  },
];

StyleModel.insertMany(styles)
  .then((StyleDoc) => {
    console.log(StyleDoc);
  })
  .catch((error) => {
    console.log(error);
  });
