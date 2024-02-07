const { print } = require("./src/utils/helper.util");
const env = require("./src/config/secrets.json");
const express = require("express");
const app = express();

app.use('/api',require("./src/routes/google.route"))


app.listen(env.port, () => {
  print("Port:", env.port, "Running");
});
