const path = require('path');
const express = require('express');
const router = express.Router();

// to use JQUERY
const jqueryPath = path.join(path.join(process.cwd(), 'node_modules/jquery-ui-dist'));
router.use('/scripts', express.static(jqueryPath)); 
// to use BOOTSTRAP
const bootstrapPath = path.join(path.join(process.cwd(), 'public'));
router.use('/assets', express.static(bootstrapPath)); 


// to use views
router.get('/myTeam', (req, res) => {
    const myPath = path.join(process.cwd(), 'views/index.html');
    res.sendFile(myPath);
});

router.use('/myTeam', express.static('views')); 

module.exports = router;