// module imports
const express = require("express");

// handler imports
const { getPeople, getPerson, getPlanets, getStarships } = require("./handler");

// constants
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.static("public"));

// endpoints

//***********************
//  GET - /api/people   *
//***********************
app.get(`/api/people`, getPeople);

//***********************
//  GET - /api/planets  *
//***********************
app.get("/api/planets", getPlanets);

//***********************
// GET - /api/starships *
//***********************
app.get("/api/starships", getStarships);

//***********************************
//  GET - /api/people/?search=query *
//***********************************
app.get("/api/people/search", getPerson);

//***********
// THE REST *
//***********
// app.get("*", handleRest);

// listen to PORT
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
