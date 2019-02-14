const express=require('express');
const mysql=require('mysql');

const db=mysql.createPool({host:'localhost', user:'root',
 password:'009682', database:'taxonomy_timo'});





module.exports=function(){

	var router=express.Router();

    router.get('', (req,res)=>{
    	res.render('none.html');
    });

         router.get('/detail', (req,res)=>{

             // console.log(req.query.tn_id);
             db.query(`SELECT * FROM tn_info where tn_id='${req.query.tn_id}'`, (err, data)=>{
                if(err){
                        res.status(500).send('Something wrong in database!').end();
                }
                else{
                     tnData=data[0];
                     // console.log(tnData);
                     tnData.tn_is=tnData.tn_is.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
                     res.send({tns:tnData});
                      
                  }         
              });

	     });
    

	return router;

};