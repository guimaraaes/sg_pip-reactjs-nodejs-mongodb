const express = require("express");
const server = express();
server.use(express.json());

const ProcessRoutes = require("./routes/ProcessRoutes");
server.use("/process", ProcessRoutes);

server.listen(9000, () => {
  console.log("api");
});
