const apiRouter = require("./controllers/router");
const path = require('path');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use("/api", apiRouter);

app.get("*", (req, res) => {
  res.sendFile("./public/index.html");
});
app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
