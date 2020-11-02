const express = require("express");
const cors = require("cors");
const server = express();
server.use(express.json());
server.use(cors());

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "SISTEMA DE BOLSAS API",
      version: '1.0.0',
    },       
     "definitions": {
      "Process": {
        "type": "object",
        "properties": {
            "title": {"type": "string" },
            "inprogress": {"type": "boolean"},
            "date_begin": {"type": "string"},
            "date_end": {"type": "string"},
            "aid_id": { "type": "array", "items": {"type": "number"} },
            "aid_name": { "type": "array", "items": {"type": "string"} },
            "aid_quantity": { "type": "array", "items": {"type": "number"} },
            "selected_studentes_name": { "type": "array", "items": {"type": "string"} },
            "selected_studentes_aid": { "type": "array", "items": {"type": "string"} },
        },
        "xml": {
            "name": "Process"
        },
      },
      "Student_request": {
        "type": "object",
        "properties": {
            "name": {"type": "string" },
            "id_process": {"type": "string" },
            "status_coordinator": {"type": "boolean"},
            "status_coordinator_description": {"type": "string"},
            "aid_id": {"type": "number"},
            "parent_name": { "type": "array", "items": {"type": "string"} },
            "parent_date_born": { "type": "array", "items": {"type": "string"} },
            "parent_rent": { "type": "array", "items": {"type": "number"} },
            "parent_profession": { "type": "array", "items": {"type": "string"} },
            "motivation": {"type": "string" },
            "quiz": { "type": "array", "items": {"type": "number"} },
            "documents": { "type": "array", "items": {"type": "number"} },
        },
        "xml": {
            "name": "Process"
        },
      },
      "StudentLogin": {
        "type": "object",
        "properties": {
            "token": {"type": "string" },
            "name": {"type": "string" },
            "course": {"type": "string"},
            "IRA": {"type": "string"},
            "disapproval": {"type": "boolean"},
            "quantity_subjects": {"type": "number"}, 
        },
        "xml": {
            "name": "Process"
        },
      },
      "CoordinatorLogin": {
        "type": "object",
        "properties": {
            "token": {"type": "string" },
            "name": {"type": "string" },
            "office": {"type": "string" },
        },
        "xml": {
            "name": "Process"
        },
      },
  },
  },
  apis: ["src/routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
const ProcessRoutes = require("./routes/ProcessRoutes");
const StudentRequestRoutes = require("./routes/StudentRequestRoutes");

server.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
server.use("/process", ProcessRoutes);
server.use("/student_request", StudentRequestRoutes);

server.listen(9000, () => {
  console.log("api");
});
