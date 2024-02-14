const { print } = require("./src/utils/helper.util");
const env = require("./src/config/secrets.json");
const express = require("express");
const app = express();

app.use("/api", require("./src/routes/google.route"));
app.use("/static", express.static("./src/public"));

app.get("/", (req, res) => {
  res.send("<h1>Hello😊,<br> Welcome to the proxy server</h1>");
});
app.listen(env.port, (Conn) => {
  print("Port:", env.port, "Running");
});
