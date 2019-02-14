

  // generate single random number
  function randNum(min,max){
  var range = max-min;
  var rand = Math.random();
  return (min+Math.round(rand*range))
  }


  // check if the random number is aleady existed
  function checkArr(arr,num){
  let temArr = arr;
  var count = 0; 
  for(var i=0;i<arr.length;i++){
    if(arr[i]==num){
      count++
    }
  }

  return (count>0?true:false)

}

 
    // arr of random number
   function numArr(n){
        
        var randArr=[], temNum;
        var min=0, max=n-1;


        if(n==0) return false;


        for(i=0;i<n;i++){

           temNum=randNum(min,max);
           if(randArr.length>0){
            var checknum=checkArr(randArr, temNum);
            if(checknum){
              i--;
            }else{
              randArr.push(temNum);
            }
           }else{
              randArr.push(temNum);
           }
        }


        return randArr
   }


       // initialization of all techniques
   function initialization(){


        $("#t").empty();
     
        $.ajax({
            url: "/taxonomy/search",
            type: "get",
            dataType:"json",
            success: function(tn){  
                // console.log(tn);

                
                 randArr=numArr(tn.tns.length);
                  // console.log(randArr);
                  function insertCard(){

                   
                         for(i=0; i<randArr.length; i++){
                            index=randArr[i];
                            $("#t").append(
                           "<a href='' id='"+tn.tns[index].tn_id+"' class='btn btn-secondary tn'  data-toggle='modal' data-target='.bd-example-modal-lg'>"
                           +tn.tns[index].tn_name
                           +"</a>");

                         }
                             
                     }             
                      insertCard();
                   }              
            });


  }


$(document).ready(function(){      
	   
	     
	   // initialization
         initialization();
         var dp="";
         var td="";
         var d="";
         var up="";
         var et="";


         // choose characteristics
         // $(".dp").click(function(){
         //     $(this).toggleClass("selected").siblings().removeClass("selected");
         //     if($(this).hasClass("selected")){
         //         dp=$(this).attr("name");
                 
         //     }else{
         //         dp="";
         //     }
         //     console.log(dp);
         // });

         // $(".td").click(function(){
         //    $(this).toggleClass("selected").siblings().removeClass("selected");
         //    if($(this).hasClass("selected")){
         //         td=$(this).attr("name");
                 
         //     }else{
         //         td="";
         //     }
         //     console.log(td);
         // });

         // $(".d").click(function(){
         //    $(this).toggleClass("selected").siblings().removeClass("selected");
         //    if($(this).hasClass("selected")){
         //         d=$(this).attr("name");
                 
         //     }else{
         //         d="";
         //     }
         //     console.log(d);
         // });

         // $(".up").click(function(){
         //    $(this).toggleClass("selected").siblings().removeClass("selected");
         //    if($(this).hasClass("selected")){
         //         up=$(this).attr("name");
                 
         //     }else{
         //         up="";
         //     }
         //     console.log(up);
         // });

         // $(".et").click(function(){
         // $(this).toggleClass("selected").siblings().removeClass("selected");
         // if($(this).hasClass("selected")){
         //         et=$(this).attr("name");
                 
         //     }else{
         //         et="";
         //     }
         //     console.log(et);
         // });
         

         // refresh techniques
         $(".char").click(function(){

            $(this).toggleClass("selected").siblings().removeClass("selected");
              if($(this).hasClass("selected")){
                 if($(this).hasClass("dp")){
                   dp=$(this).attr("name");
                 }else if($(this).hasClass("td")){
                   td=$(this).attr("name");
                 }else if($(this).hasClass("d")){
                   d=$(this).attr("name");
                 }else if($(this).hasClass("up")){
                   up=$(this).attr("name");
                 }else if($(this).hasClass("et")){

                   et=$(this).attr("name");
                 }                
               }else{
                  if($(this).hasClass("dp")){
                   dp="";
                 }else if($(this).hasClass("td")){
                   td="";
                 }else if($(this).hasClass("d")){
                   d="";
                 }else if($(this).hasClass("up")){
                   up="";
                 }else if($(this).hasClass("et")){

                   et="";
                 }                

               }
            
            console.log(dp,td,d,up,et);


            $.ajax({
            url: "/taxonomy/search",
            type: "get",
            dataType:"json",
            data: {
                tn_dp:dp,
                tn_td:td,
                tn_d:d,
                tn_up:up,
                tn_et:et
            },
            success: function(tn){  
                // console.log(tn);

               
                 console.log(tn);
                 randArr=numArr(tn.tns.length);
                  // console.log(randArr);
                  function insertCard(){

                         $("#t").empty();
                         if(tn.tns.length>0){     
                          for(i=0; i<randArr.length; i++){
                            index=randArr[i];
                            $("#t").append(
                           "<a href='' id='"+tn.tns[index].tn_id+"' class='btn btn-secondary tn'  data-toggle='modal' data-target='.bd-example-modal-lg'>"
                           +tn.tns[index].tn_name
                           +"</a>");

                            }
                         }else{
                            $("#t").append(
                            "<p>"
                            +"No techniques left. Please use some other categories."
                            +"</p>"
                            );
                             
                         }  
                     }  
                  insertCard();                  
            }
         });
		 
        });
		 

         

         // view the detail of technique
         $("#t").on("click",".tn", function(){

                var tn_id=$(this).attr("id");
                $("#tn_name").empty();
                $("#tn_id").empty();
                $("#tn_dc").empty();
                $("#tn_is").empty();
               $.ajax({
                  url: "/taxonomy/detail",
                  type: "get",
                  dataType:"json",
                  data: {

                  tn_id:tn_id
                 
               
            },
            success: function(tn){

              // console.log(tn);

              
              $("#tn_name").append(
                tn.tns.tn_name
                );
              $("#tn_id").append(
                tn.tns.tn_id
                );
               
              $("#tn_dc").append(
                tn.tns.tn_dc
                );
              
              $("#tn_is").append(
                tn.tns.tn_is
                );

              }

            });
        });


          $("#tn-select").click(function(){

            if($("#bottom").children().length>4){


                alert("You can select maximum 5 technqiues.");


            }else{

                var tn_id= $("#tn_id").text();
                var tn_name= $("#tn_name").text();


                if ($('#stn_'+tn_id).length>0){

                     alert('This technique is already selected.')
                          

                }else{


                      $("#bottom").append(
                      "<span style= 'margin: 3px;' class='selected_tech' id='stn_"
                      +tn_id
                      +"'>"
                      +"<span>"
                      +tn_name
                      +"&nbsp;&nbsp;"
                      + "(id:&nbsp;"
                      +tn_id
                      +")"
                      +"</span>"
                      + " "
                      +"<a class='stn-close btn btn-secondary btn-sm'>"
                      +"<span aria-hidden='true'>"
                      +"&times;"
                      +"</span>"
                      +"</a>"
                      +"</span>"
                     );


                      $("#mymodal").modal('toggle');


                     }

                   

               }
     


          });


          // remove selected technique 
            $("#bottom").on("click",".stn-close",function(){

              $(this).parent().remove();
       
             });


});