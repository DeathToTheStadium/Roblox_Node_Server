const { print } = require("../utils/helper.util");
const axios = require("axios");
const env = require("../config/secrets.json");

const CreateSheetData = (req, res) => {};

const ReadSheetData = (req, res) => {
  axios
    .request({
      baseURL: `https://sheets.googleapis.com/v4/spreadsheets/${req.params.SheetID}/values/${req.query.sheet}A1:D201?key=${env["google-Api-Key"]}`,
    })
    .then((value) => {
      print(value.data);
      res.json(value.data);
    })
    .finally((value) => {
      res.json(value.data);
    })
    .catch((err) => {
      res.send(err);
    });
};
const UpdateSheetData = () => {};
const DeleteSheetData = () => {};

module.exports = { ReadSheetData };
