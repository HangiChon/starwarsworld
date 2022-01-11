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
const getPeople = async (res, req) => {
  try {
    const info = await axios.get("https://swapi.dev/api/people");
    console.log(info);
  } catch (error) {}
};

//***********************
//  GET - /api/planets  *
//***********************

//***********************
// GET - /api/starships *
//***********************

//*******************************
//  GET - /api/people/:personId *
//*******************************

//***********
// THE REST *
//***********

// exports
module.exports = { getPeople };
