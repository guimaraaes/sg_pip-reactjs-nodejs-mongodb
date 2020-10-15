const express = require("express");
const router = express.Router();
var Process = require('../api/models/ProcessModel.js')

const ProcessController = require("../api/controllers/ProcessController");

/**
 * @swagger
 * /studentRequest:
 *   get:
 *     tags:
 *       - StudentRequest
 *     description: Pesquisar por todos os processos
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Todas as solicitações
 *         schema:
 *          type: object
 *          $ref: '#/definitions/StudentRequest'
 *       500:
 *         description: SERVER ERROR
 */
router.get("/", ProcessController.all);


/**
 * @swagger
 * /studentRequest/{id}:
 *   get:
 *     tags:
 *       - StudentRequest
 *     description: Pesquisar por uma solicitação
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: nome
 *         description: Nome do estudante
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Solicitação pesquisada
 *       500:
 *         description: SERVER ERROR
 */
router.get("/:id", ProcessController.all);

/**
 * @swagger
 * /studentRequest:
 *   post:
 *     tags:
 *       - StudentRequest
 *     description: Criar um processo
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Solicitação do Estudante
 *         description: Modelo do processo
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/StudentRequest'
 *     responses:
 *       200:
 *         description: Solicitação realizada
 */
router.post("/", ProcessController.create);

/**
 * @swagger
 * /studentRequest/{id}:
 *   put:
 *     tags:
 *       - StudentRequest
 *     description: Editar uma solicitação
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: nome
 *         description: Nome do aluno
 *         in: path
 *         required: true
 *         type: string
 *       - name: Solicitação do Estudante
 *         description: Modelo da solicitação
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/StudentRequest'
 *     responses:
 *       200:
 *         description: Solicitação realizada
 */
router.post("/", ProcessController.create);
module.exports = router;
