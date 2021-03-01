require("../../config/mongo");

const LabelModel = require("./../../models/Label");

const labels = [
  {
    name: "Ed Banger Records",
    city: "Paris",
    country: "France",
    street: "rue Ramey",
    streetNumber: 10,
    zipcode: "75018",
  },
  {
    name: "Sony Music",
    city: "Paris",
    country: "France",
    street: "rue de Châteaudun",
    streetNumber: 52,
    zipcode: "75009",
  },
  {
    name: "Iron Records",
    city: "Paris",
    country: "France",
    street: "boulevard Voltaire",
    streetNumber: 226,
    zipcode: "75011",
  },
];

LabelModel.insertMany(labels)
  .then((LabelDoc) => {
    console.log(LabelDoc);
  })
  .catch((error) => {
    console.log(error);
  });
