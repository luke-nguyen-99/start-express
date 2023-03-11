const express = require('express');
const router = express.Router();
const { create, update, getAll, getOne, destroy } = require('../controllers/user.controller');

router.get('/', (req, res) => {
    getAll(req, res);
} );
router.get('/:id', (req, res) => {
    getOne(req, res);
} );
router.post('/create', (req, res) => {
    create(req, res);
} );
router.put('/update/:id', (req, res) => {
    update(req, res);
} );
router.delete('/delete/:id', (req, res) => {
    destroy(req, res);
} );

module.exports = router;
