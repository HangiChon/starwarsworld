// module imports
const axios = require("axios");

// response template
const response = (res, code, msg, result) => {
  return res.status(code).json({ status: code, data: result, message: msg });
};

// endpoints handlers
//***********************
//  GET - /api/people   *
//***********************
const getPeople = async (req, res) => {
  // console.log("page", req.query.page);
  try {
    const received = await axios.get(
      `https://swapi.dev/api/people/?page=${req.query.page}`
    );
    response(res, 200, "Successfully retrieved people", received.data);
  } catch (error) {
    response(res, 500, "Server Error");
  }
};

//***********************
//  GET - /api/planets  *
//***********************
const getPlanets = async (req, res) => {
  console.log("page", req.query.page);
  try {
    const received = await axios.get(
      `https://swapi.dev/api/planets/?page=${req.query.page}`
    );
    response(res, 200, "Successfully retrieved planets", received.data);
  } catch (error) {
    response(res, 500, "Server Error");
  }
};

//***********************
// GET - /api/starships *
//***********************
const getStarships = async (req, res) => {
  console.log("page", req.query.page);
  try {
    const received = await axios.get(
      `https://swapi.dev/api/starships/?page=${req.query.page}`
    );
    response(res, 200, "Successfully retrieved starships", received.data);
  } catch (error) {
    response(res, 500, "Server Error");
  }
};

//*******************************
//  GET - /api/people? *
//*******************************
const getPerson = async (req, res) => {
  // console.log("value", req.query.value);
  try {
    const received = await axios.get(
      `https://swapi.dev/api/people/?search=${req.query.value}`
    );
    response(res, 200, "Successfully retrieved the person", received.data);
  } catch (error) {
    response(res, 500, "Server Error");
  }
};

//***********
// THE REST *
//***********
const handleRest = async (req, res) => {
  response(res, 404, "This is obviously not what you are looking for.");
};

// exports
module.exports = { getPeople, getPerson, getPlanets, getStarships, handleRest };
