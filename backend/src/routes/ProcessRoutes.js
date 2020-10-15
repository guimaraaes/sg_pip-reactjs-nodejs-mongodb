const express = require("express");
const router = express.Router();
var Process = require('../api/models/ProcessModel.js')

const ProcessController = require("../api/controllers/ProcessController");

/**
 * @swagger
 * /process:
 *   get:
 *     tags:
 *       - Process
 *     description: Pesquisar por todos os processos
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Todos os processo
 *         schema:
 *          type: object
 *          $ref: '#/definitions/Process'
 *       500:
 *         description: SERVER ERROR
 */
router.get("/", ProcessController.all);


/**
 * @swagger
 * /process_new:
 *   get:
 *     tags:
 *       - Process
 *     description: Pesquisar por todos os processos
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Todos os processo
 *         schema:
 *          type: object
 *          $ref: '#/definitions/Process'
 *       500:
 *         description: SERVER ERROR
 */
router.get("/", ProcessController.newProcess);

/**
 * @swagger
 * /process/{id}:
 *   get:
 *     tags:
 *       - Process
 *     description: Pesquisar por um processo
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: nome
 *         description: Nome do processo
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Processo pesquisado
 *       500:
 *         description: SERVER ERROR
 */
router.get("/:id", ProcessController.all);

/**
 * @swagger
 * /process_new:
 *   post:
 *     tags:
 *       - Process
 *     description: Criar um processo
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Processo
 *         description: Modelo do processo
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Process'
 *     responses:
 *       200:
 *         description: Processo criado
 */
router.post("/", ProcessController.create);

/**
 * @swagger
 * /process/{id}:
 *   put:
 *     tags:
 *       - Process
 *     description: Editar um processo
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: nome
 *         description: Nome do processo
 *         in: path
 *         required: true
 *         type: string
 *       - name: Process
 *         description: Modelo do processo
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Process'
 *     responses:
 *       200:
 *         description: Processo editado
 */
router.post("/", ProcessController.create);

/**
 * @swagger
 * /process/{id}:
 *   delete:
 *     tags:
 *       - Process
 *     description: Deletar um processo
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: nome
 *         description: nome do processo
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Processo deletado
 */
router.post("/", ProcessController.create);

module.exports = router;
