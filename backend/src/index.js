const express = require("express");
const cors = require("cors");
const server = express();

const ProcessRoutes = require("./routes/ProcessRoutes");
const StudentRequestRoutes = require("./routes/StudentRequestRoutes");

server.use(express.json());
server.use(cors());
server.use("/process", ProcessRoutes);
server.use("/student_request", StudentRequestRoutes);

server.listen(9000, () => {
  console.log("api");
});
