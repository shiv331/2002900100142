const express = require('express');
const router = express.Router();

router.get('/api',(req,res)=>{
    res.json({"message" : "I am here"});
});

module.exports = router;