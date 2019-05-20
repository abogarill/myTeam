const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const developer_controller = require('../controllers/developer.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', developer_controller.test);

// Functions available
router.get('/list', developer_controller.developer_list);
router.post('/create', developer_controller.developer_create);
router.get('/detail/:id', developer_controller.developer_details);
router.put('/:id/update', developer_controller.developer_update);
router.delete('/:id/delete', developer_controller.developer_delete);


module.exports = router;