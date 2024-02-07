const express = require("express");
const app = express();
const Axios = require("axios");
const { default: axios } = require("axios");
app.use("/static", express.static("./src/public"));

app.get("/", (req, res) => {
  axios
    .request({
      url: "http://api.open-notify.org/iss-now.json",
    })
    .then((value) => {
      console.log(value.data);
      res.json(value.data);
    });
});

app.listen(8000, function () {
  console.log("Listening On Port 8000");
});
