var Cryptr = require('cryptr');
var express=require("express");
var connection = require('./../config');
cryptr = new Cryptr('myTotalySecretKey');

module.exports.register=function(req,res){

  var encryptedString = cryptr.encrypt(req.body.password);

        var name=req.body.name;
        var email=req.body.email;
        var password=encryptedString;


    var sql="INSERT INTO users(name,email,password) VALUES ( '"+name+"','"+email+"','"+password+"')";
    connection.query(sql, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}
