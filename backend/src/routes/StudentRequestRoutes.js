const express = require("express");
const router = express.Router();
var StudentRequestModel = require("../api/models/StudentRequestModel");

const StudentRequestController = require("../api/controllers/StudentRequestController");
const StudentRequestValidation = require("../api/middlewares/StudentRequestValidation");

/**
 * @swagger
 * /student_request:
 *   get:
 *     tags:
 *       - Student_request
 *     description: Todas as requisições dos estudantes
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Todas as solicitações
 *       500:
 *         description: SERVER ERROR
 */
router.get("/", StudentRequestController.All);

/**
 * @swagger
 * /student_request/{id}:
 *   get:
 *     tags:
 *       - Student_request
 *     description: Requisição do estudante pelo Id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id do estudante
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Solicitação pesquisada
 *       500:
 *         description: SERVER ERROR
 */
router.get("/:id", StudentRequestController.GetId);

/**
 * @swagger
 * /student_request/result_search/{name}:
 *   get:
 *     tags:
 *       - Student_request
 *     description: Requisição do estudante pelo nome
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: nome do estudante
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Solicitação pesquisada
 *       500:
 *         description: SERVER ERROR
 */
router.get(
  "/students_on_process/:id_process/search/:name_search",
  StudentRequestController.GetName
);

/**
 * @swagger
 * /student_request/student_on_process/{id_process}:
 *   get:
 *     tags:
 *       - Student_request
 *     description: Requisição do estudante pelo nome
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id_process
 *         description: id do processo do estudante
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Solicitação pesquisada
 *       500:
 *         description: SERVER ERROR
 */
router.get(
  "/students_on_process/:id_process",
  StudentRequestController.StudentsOnProcess
);

/**
 * @swagger
 * /student_request/student_on_process/process_info/{id_process}:
 *   get:
 *     tags:
 *       - Student_request
 *     description: Pesquisar informações dos alunos no processo
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         schema:
 *          type: object
 *          $ref: '#/definitions/Process'
 *       500:
 *         description: SERVER ERROR
 */
router.get(
  "/student_info/:id_process/:student_name?",
  StudentRequestController.StudentsOnProcessInfo
);

/**
 * @swagger
 * /student_request:
 *   post:
 *     tags:
 *       - Student_request
 *     description: Criar um processo
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Solicitação do Estudante
 *         description: Modelo do processo
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Student_request'
 *     responses:
 *       200:
 *         description: Solicitação realizada
 */
router.post("/", StudentRequestValidation, StudentRequestController.Create);

/**
 * @swagger
 * /student_request/{id}:
 *   put:
 *     tags:
 *       - Student_request
 *     description: Editar uma solicitação
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id do aluno
 *         in: path
 *         required: true
 *         type: string
 *       - name: Solicitação do Estudante
 *         description: Modelo da solicitação
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Student_request'
 *     responses:
 *       200:
 *         description: Solicitação realizada
 */
router.put("/:id", StudentRequestValidation, StudentRequestController.Edit);

module.exports = router;
