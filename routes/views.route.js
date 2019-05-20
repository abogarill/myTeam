const path = require('path');
const express = require('express');
const router = express.Router();

// to use JQUERY
const jqueryPath = path.join(path.join(process.cwd(), 'node_modules/jquery-ui-dist'));
router.use('/myTeam/scripts', express.static(jqueryPath)); 

// to use views
router.get('/myTeam', (req, res) => {
    const myPath = path.join(process.cwd(), 'views/index.html');
    res.sendFile(myPath);
});

module.exports = router;