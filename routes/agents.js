var express = require('express');
var router = express.Router();
var agents = require('../models/agents')


router.post('/',(req,res) =>{
   var username = req.body.user
   var password = req.body.pass
   agents.findByName(username ,(err,data) =>{
    //console.log("gdfgdf",res[0]);
    if(data[0].username == username && password == data[0].password)
      res.render('dashboard.html' )

   })
})
module.exports = router;
