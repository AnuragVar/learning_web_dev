//here we will setup all the routes here for the entire application

const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index');
})

// export default router;

module.exports = router