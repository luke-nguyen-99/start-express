const express = require("express");
const router = express.Router();
const {
  create,
  update,
  getAll,
  getOne,
  destroy,
} = require("../controllers/user.controller");
/**
 * 
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *              - name
 *              - username
 *              - password
 *              - role
 *          properties:
 *              id:
 *                  type: number
 *              name:
 *                  type: string
 *              username:
 *                  type: string
 *              password:
 *                  type: string
 *              role:
 *                  type: string
 */

/**
 * @swagger
 * /user:
 *  get:
 *      responses:
 *          200:
 *              content:
 */
router.get("/", (req, res) => {
  getAll(req, res);
});

/**
 * @swagger
 * /user/{id}:
 *  get:
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *      responses:
 *          200:
 *              content:
 */
router.get("/:id", (req, res) => {
  getOne(req, res);
});

// application/x-www-form-urlencoded 
// multipart/form-data


/**
 * @swagger
 * /user/create:
 *  post:
 *      consumes:
 *        - application/x-www-form-urlencoded
 *      requestBody:
 *          required: true
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - username
 *                          - password
 *                      properties:
 *                          name:
 *                              type: string
 *                          username:
 *                              type: string
 *                          password:
 *                              type: string
 *                          role:
 *                              type: string
 *      responses:
 *          201:
 *              content:
 */
router.post("/create", (req, res) => {
  create(req, res);
});
router.put("/update/:id", (req, res) => {
  update(req, res);
});
router.delete("/delete/:id", (req, res) => {
  destroy(req, res);
});

module.exports = router;
