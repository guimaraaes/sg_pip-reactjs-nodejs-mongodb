const express = require("express");
const server = express();
server.use(express.json());

const ProcessRoutes = require("./routes/ProcessRoutes");
server.use("/process", ProcessRoutes);

server.listen(3000, () => {
  console.log("api");
});
