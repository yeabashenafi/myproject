'use strict';
var fs = require('fs');

module.exports = function(Images) {

    Images.rename = function(filename,newname,cb){
        console.log(filename)
        oldpath='./common/images/' + filename
        newpath = './common/images/'
        fs.rename(filename,newname,function(err){
            if (err) throw err;
            console.log("file renamed")
        })
        cb(null,"thrive to rename")
    }   

    Images.remoteMethod('rename',{
        accepts:[
            {arg: 'filename',type:'string',http:{source:'body'}},
            {arg: 'newname',type:'string',http:{source:'body'}}
            

        ],
        returns:{
            arg:"response",type:'string'
        }
    })

};
