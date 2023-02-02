//Make sure to require your model so you can connect to the DB
const  Model  = require("mongoose");
const VikingModel = require("./models/User");

//This line of code connects to the Database
require("./db");

//Iteration 2:

//Iteration 3:
let Ragnar = {
    firstName: "Ragnar",
    familyName: "Windsor",
    strength: 10000,
    weapon: "blade",
}

let vikingArray = [
    {
        firstName: "Ragnar",
        familyName: "Windsor",
        strength: 10000,
        weapon: "blade",
    },
    {
        firstName: "Liza",
        familyName: "Humphrey",
        strength: 7000,
        weapon: "pin",
    },
    {
        firstName: "Floki",
        familyName: "Ragnarson",
        strength: 9000,
        weapon: "two-handed axe",
    },
    {
        firstName: "Draco",
        familyName: "Malfidus",
        strength: 15000,
        weapon: "wand",
    }
]

/* VikingModel.create(Ragnar)
  .then((newVikingInDB) => {
    console.log("Nice, you got a viking!", newVikingInDB);
  })
  .catch((err) => {
    console.log("There was error creating the viking", err);
  }); */

/* VikingModel.findByIdAndDelete("63db9dab1cb64c37ff049f9c")
  .then((deletedViking) => {
    console.log("Is this working?", deletedViking);
  })
  .catch((err) => {
    console.log("There was error creating the viking", err);
  }); */

/* VikingModel.insertMany(vikingArray)
  .then((vikingArrDB) => {
    console.log("the array was created", vikingArrDB);
  })
  .catch((err) => console.log(err)); */

VikingModel.findByIdAndUpdate("63dba2157c9b1f047c411b95", { firstName: "Odin" }, { new: true })
  .then((updatedViking) => {console.log("Viking updated", updatedViking)})
  .catch((err) => {console.log("There was error updating the viking", err)})