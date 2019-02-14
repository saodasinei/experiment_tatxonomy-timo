const express=require('express');
const mysql=require('mysql');

const db=mysql.createPool({host:'localhost', user:'root',
 password:'0009682', database:'taxonomy_timo'});




module.exports=function(){
    var router = express.Router();


    router.get('/', (req, res, next)=>{
       
        res.render('taxonomy.html');


    });
   
    router.get('/search', (req,res,next)=>{

        // console.log(req.query);


         db.query('SELECT * FROM tn_info', (err, data)=>{
                if(err){
                        res.status(500).send('Something wrong in database!').end();
                }
                else{
                     tns=data;
                     next();
                      
                  }         
              });
         });

          router.get('/search', (req, res)=>{ 
                if(req.query["tn_dp"]){
                     tn1=tns.filter(
                     function(tn){
                        return  tn["tn_dp"]===req.query["tn_dp"];
                    });
                 }else{
                    tn1=tns;
                 }

                 if(req.query["tn_td"]){
                      tn2=tn1.filter(
                      function(tn){
                        return  tn["tn_td"]===req.query["tn_td"];
                   });
                }else{
                    tn2=tn1;
                }
                if(req.query["tn_d"]){
                      tn3=tn2.filter(
                      function(tn){
                        return  tn["tn_d"]===req.query["tn_d"];
                   });
                }else{
                     tn3=tn2;
                }
                if(req.query["tn_up"]){
                      tn4=tn3.filter(
                      function(tn){
                        return  tn["tn_up"]===req.query["tn_up"];
                   });
                }else{
                    tn4=tn3;
                }
                if(req.query["tn_et"]){
                      tn5=tn4.filter(
                      function(tn){
                        return  tn["tn_et"]===req.query["tn_et"];
                   });
                }else{
                    tn5=tn4;
                }
               
                  res.send({tns:tn5});
                
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
}