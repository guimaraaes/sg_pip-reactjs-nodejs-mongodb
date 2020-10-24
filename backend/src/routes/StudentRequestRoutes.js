const express = require("express");
const router = express.Router();
var StudentRequestModel = require('../api/models/StudentRequestModel')

const StudentRequestController = require("../api/controllers/StudentRequestController");

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
 *       - name: nome
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
router.get("/:id", StudentRequestController.GetName);

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
router.post("/", StudentRequestController.Create);

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
router.post("/", StudentRequestController.Edit);


module.exports = router;
