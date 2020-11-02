const express = require("express");
const router = express.Router();
var Process = require("../api/models/ProcessModel.js");

const ProcessController = require("../api/controllers/ProcessController");
const ProcessValidation = require("../api/middlewares/ProcessValidation");

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
 *         schema:
 *          type: object
 *          $ref: '#/definitions/Process'
 *       500:
 *         description: SERVER ERROR
 */
router.get("/", ProcessController.All);

/**
 * @swagger
 * /process/process_info:
 *   get:
 *     tags:
 *       - Process
 *     description: Pesquisar informações dos processos
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
router.get("/process_info", ProcessController.AllInfo);

/**
 * @swagger
 * /process/{id}:
 *   get:
 *     tags:
 *       - Process
 *     description: Buscar um processo pelo id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id do processo
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         schema:
 *          type: object
 *          $ref: '#/definitions/Process'
 *       500:
 *         description: SERVER ERROR
 */
router.get("/:id", ProcessController.GetId);

/**
 * @swagger
 * /process/result_search/{title}:
 *   get:
 *     tags:
 *       - Process
 *     description: Buscar um processo pelo título
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: título do processo
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         schema:
 *          type: object
 *          $ref: '#/definitions/Process'
 *       500:
 *         description: SERVER ERROR
 */
router.get("/result_search/:title", ProcessController.GetTitle);

/**
 * @swagger
 * /process:
 *   post:
 *     tags:
 *       - Process
 *     description: Criar um novo processo
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
 *         schema:
 *          type: object
 *          $ref: '#/definitions/Process'
 *       500:
 *         description: SERVER ERROR
 */
router.post("/", ProcessValidation, ProcessController.Create);

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
 *       - name: id
 *         description: id do processo
 *         in: path
 *         required: true
 *         type: string
 *       - name: Processo
 *         description: Modelo do processo
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Process'
 *     responses:
 *       200:
 *         description: Processo editado
 */
router.put("/:id", ProcessValidation, ProcessController.Edit);

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
 *       - name: id
 *         description: id do processo
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Processo deletado
 */
router.delete("/:id", ProcessController.Delete);

module.exports = router;
