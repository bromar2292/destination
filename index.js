const express = require("express");
const Country = require("./countries.js");

const PORT = 3000;

const app = express();

app.use((req, res, next) => {
  console.log(`This time is ${Date.now()}`);
  next();
});

app.get("/", (req, res) => {
  let destinations = countries.allCountries(countries);
  res.json({ destinations });
});

app.get("/:country", (req, res) => {
  console.log("req.params", req.params);
  let newCountry = req.params.country;
  let specificCountry = countries.specificCountry(newCountry);
  res.json({ specificCountry });
});

// app.get("/countries", (req, res) => {
//   // let name = req.query.citys;
//   // if (!name) {
//   //     let allCountries = TheNames.allCountries
//   // }
//   res.json({ message: "hello, this will include countries" });
// });

// app.get("/cities", (req, res) => {
//   // let name = req.query.citys;
//   // if (!name) {
//   //     let allCountries = TheNames.allCountries
//   // }
//   res.json({ message: "hello, this will include cities" });
// });

// app.get("/language", (req, res) => {
//   // let name = req.query.citys;
//   // if (!name) {
//   //     let allCountries = TheNames.allCountries
//   // }
//   res.json({ message: "hello, this will include language" });
// });

// app.get("/cuisine", (req, res) => {
//   // let name = req.query.citys;
//   // if (!name) {
//   //     let allCountries = TheNames.allCountries
//   // }
//   res.json({ message: "hello, this will include cuisine" });
// });

// app.get("/tips", (req, res) => {
//   // let name = req.query.citys;
//   // if (!name) {
//   //     let allCountries = TheNames.allCountries
//   // }
//   res.json({ message: "hello, this will include travelers tips" });
// });

// app.get("/activites", (req, res) => {
//   // let name = req.query.citys;
//   // if (!name) {
//   //     let allCountries = TheNames.allCountries
//   // }
//   res.json({ message: "hello, this will include travelers tips" });
// });

app.listen(PORT, () => {
  console.log(`I'm listening on port ${PORT}`);
});
