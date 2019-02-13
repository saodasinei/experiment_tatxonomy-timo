const express=require('express');
const consolidate=require('consolidate');




var server=express();

server.listen(8080);





//template
server.set('view engine', 'html');
server.set('views', './views');
server.engine('html',consolidate.ejs);




//route
server.use('/taxonomy', require('./route/taxonomyRouter.js')());
server.use('/timo', require('./route/timoRouter.js')());




server.use(express.static('./public'));