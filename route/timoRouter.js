const express=require('express');
const mysql=require('mysql');

const db=mysql.createPool({host:'localhost', user:'root',
 password:'009682', database:'taxonomy_timo'});





module.exports=function(){

	var router=express.Router();

    router.get('', (req,res,next)=>{
    	res.render('timo.html');
    })
    
     // search by input of text
    router.get('/tnsearch', (req,res)=>{
              console.log(req.query.value);
              db.query(`SELECT * FROM tn_info WHERE tn_name like concat('%','${req.query.value}','%')`, (err, data)=>{
                if(err){
                        res.status(500).send('Something wrong in database!').end();
                }
                else{   

                        tns=data;
  
                        res.send({tns:tns});
                             
                }
              });     
      });





	return router;

};
