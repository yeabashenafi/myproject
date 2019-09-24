'use strict';
var multer = require('multer');
var fs = require('fs');
var formidable = require('formidable')


module.exports = function(Recipe) {

var uploadedFileName = "";
  var storage = multer.diskStorage({
      destination: function(req,file,cb){
          var dirpath = 'uploads/'
          if(!fs.existsSync(dirpath)){
              var dir = fs.mkdirSync(dirpath);
          }
          cb(null,dirpath +'/');
      },
       filename: function(req,file,cb){
           var ext = file.originalname.substring(file.originalname.lastIndexOf("."));
           var fileName = Date.now() + ext;
           uploadedFileName = fileName;
           cb(null,fileName);
       }
  });

  Recipe.uploadImage = function (req,res,cb){
/*   var upload = multer ({
       storage: storage
   }).array('photos',12);
    upload(req,res,function(err){
        if (err){
            res.json(err)
        }
  
        else{
           cb(null,'We will upload it '+res);
           console.log(req.file)
           //res.json(uploadedFileName);

        }
           });*/
  
  console.log(oldPath)
  
  
  };

  Recipe.remoteMethod('uploadImage',{
      accepts:[{arg:'req',type:'object',http:{source:'req'}},
      {arg:'res',type:'object',http:{source:'res'}}
      ],
      returns:{arg: 'result', type: 'string'}
  }
  );
};
