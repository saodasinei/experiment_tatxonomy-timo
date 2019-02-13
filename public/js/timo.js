

// chatframe of timo scroll to bottom auto

function scrollTobottom(){
   var clientHeight = $("#chatbox").height();
                var offsetHeight = $("#scontent").get(0).scrollHeight;
                if (offsetHeight > clientHeight) {
                    $("#chatbox").scrollTop(offsetHeight - clientHeight+100);
                }
            }


function loading(){
                    $("#scontent").append(
                       "<li class='srobot loading'>"
                       +"<div>"
                       +"<span class='srobot-content'>"
                       + "<div class='spinner'>"
                       +"<div class='bounce1'></div>"
                       +"<div class='bounce2'></div>"
                       +"<div class='bounce3'></div>"
                       +"</div>"
                       +"</span>"
                       +"</div>"
                       +"</li>"
                         );

                   }



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

   function init_notechnique(){
          
          $("#t").empty();
          $("#t").append(
             "After answering Timo's questions, some possible design techniques will appear here."
            );

   }



$(document).ready(function(){

         init_notechnique();
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






	          var tn_dp="";
            var tn_td="";
            var tn_d="";
            var tn_up="";
            var tn_et="";
            var project_name="";
            var project_tn="";
             if_help="";
             feedback="";
             user_say1="";


	         $("#scontent").empty();
                     loading();
                      setTimeout(function(){
                          $(".loading").hide();
                          $("#scontent").append(
                            "<li class='srobot'>"
                            +"<img src='../icons/Timo.jpg' class='profile'>"
                            +"<div>"
                            +"<span class='srobot-content'>"
                            +"Hallo, i'm Timo, a digtial service design expert ：). What can i do for you?"         
                            +"</span>"                    
                            +"</div>"
                            +"</li>"
                            );
                      },1000);

                         // introduce and guidance to technique search
                   $("#user-text").keyup(function(event){
                        

                        if(event.keyCode=="13"){
                              
                              $("#user-text-ok").click();

                        }

                     });
                 $("#user-text-ok").click(function(){
                       
                       var user_text=$("#user-text").val();
                       $("#user-text").val("");
                       $("#scontent").append(
                        "<li class='suser'>"
                      +"<img src='../icons/user.jpg' class='profile'>"
                      +"<span class='suser-content'>"
                      + user_text
                      +"</span>"
                      +"</li>"
                        );
                       $("#user-text1").val("");
                       user_text=user_text.toLowerCase();
                       var topic_timo=["hi","hello","who are you?", "who are you","who are you ", "what can you do?","what can you do","what is your name?","what is your name","name","who","you"];
                       var topic_kit=["kit","karlsruhe institute of technology"];
                       var topic_iism=["iism","issd"];
                       var topic_project=["what's this", "what is this","web","platform"];
                       var topic_sd=["service","services", "technique","techniques","design","service design", "design technique", "design techniques", "digital service design technqiues", "dsd","i wang some techniques","i need some techniques","i need technique"];
                       
                       if(topic_kit.indexOf(user_text)>-1){
                              loading();
                              scrollTobottom();
                              setTimeout(function(){
                              $(".loading").hide();
                              $("#scontent").append(
                              "<li class='srobot'>"
                              +"<img src='../icons/Timo.jpg' class='profile'>"
                              +"<div>"
                              +"<span class='srobot-content'>"
                              +"Karlsruhe Institute of Technology(German:Karlsruher Institut für Technologie) is a public research university and one of the largest research and educational institutions in Germany.</br>"
                              +"<a href='https://en.wikipedia.org/wiki/Karlsruhe_Institute_of_Technology'>Wiki</a></br>"
                              +"<a href='http://www.kit.edu/'>Home Page</a>"     
                              +"</span>"                    
                              +"</div>"
                              +"</li>"
                              );
                              scrollTobottom();
                              },1000);


                       }
                       else if(topic_iism.indexOf(user_text)>-1){
                              loading();
                              scrollTobottom();
                              setTimeout(function(){
                              $(".loading").hide();
                              $("#scontent").append(
                              "<li class='srobot'>"
                              +"<img src='../icons/Timo.jpg' class='profile'>"
                              +"<div>"
                              +"<span class='srobot-content'>"
                              +"Institute of Information Systems and Marketing"
                              +"<a href='https://www.iism.kit.edu/'>(IISM)</a></br>"
                              +"Research Group Information Systems and Service Design"
                              +"<a href='http://issd.iism.kit.edu/'>(ISSD)</a>"
                              +"</span>"                    
                              +"</div>"
                              +"</li>"
                              );
                              scrollTobottom();
                              },1000);
                              



                       }

                       else if(topic_project.indexOf(user_text)>-1){
                               loading();
                               scrollTobottom();
                              setTimeout(function(){
                              $(".loading").hide();
                              $("#scontent").append(
                              "<li class='srobot'>"
                              +"<img src='../icons/Timo.jpg' class='profile'>"
                              +"<div>"
                              +"<span class='srobot-content'>"
                              +"This web platform is a production of Simin He in his master thesis. The design techniques are organized based on a taxonomy. We offer you a filter to search techniques. Of course, if you have some problem, you can also ask me, i can help you to find some design techniques."
                              +"</span>"                    
                              +"</div>"
                              +"</li>"
                              );
                              scrollTobottom();
                              },1000);
                              

                       }

                       else if(topic_timo.indexOf(user_text)>-1)
                       {

                           loading();
                           scrollTobottom();
                           setTimeout(function(){
                              $(".loading").hide();
                              $("#scontent").append(
                              "<li class='srobot-waiting robot-status'>"
                              +"<img src='../icons/Timo.jpg' class='profile'>"
                              +"<div>"
                              +"<span class='srobot-content'>"
                              +"I'm Timo, an expert in the field of digital service design. In order to suggest relevant design techniques, I'll ask you several questions. Please answer the questions based on your design situations."
                              +"<div class='timo-function'>"
                              // +"<button class='btn btn-outline-secondary st-kw'>"
                              // +" Search with key words."
                              // +"</button></br>"
                              // +"or</br>"
                              +"<button class='btn btn-outline-secondary st-rc'>"
                              +" Let me recommend."
                              +"</button>"
                              +"</div>"         
                              +"</span>"                    
                              +"</div>"
                              +"</li>"
                              );
                              scrollTobottom();
                              },1000);
                              

                           }else if(topic_sd.indexOf(user_text)>-1){

                               loading();
                               scrollTobottom();
                               setTimeout(function(){
                              $(".loading").hide();
                              $("#scontent").append(
                              "<li class='srobot-waiting robot-status'>"
                              +"<img src='../icons/Timo.jpg' class='profile'>"
                              +"<div>"
                              +"<span class='srobot-content'>"
                              +"Do you have any problems in finding a design technique? I’ll be happy to help you."
                              +"<div class='timo-function'>"
                              +"<button class='btn btn-outline-secondary' id='needt-yes'>"
                              +"Yes"
                              +"</button>"
                              +"/"
                              +"<button class='btn btn-outline-secondary' id='needt-no'>"
                              +"No"
                              +"</button>"
                              +"</div>"     
                              +"</span>"                    
                              +"</div>"
                              +"</li>"
                              );
                              scrollTobottom();

                              },1000);
                              
                         }else{
                             loading();
                             scrollTobottom();
                             setTimeout(function(){
                              $(".loading").hide();
                              $("#scontent").append(
                              "<li class='srobot-waiting robot-status'>"
                              +"<img src='../icons/Timo.jpg' class='profile'>"
                              +"<div>"
                              +"<span class='srobot-content'>"
                              +"In order to suggest relevant design techniques, I'll ask you several questions. Please answer the questions based on your design situations." 
                              +"<div class='timo-function'>"
                              // +"<button class='btn btn-outline-secondary st-kw'>"
                              // +" Search with key words."
                              // +"</button></br>"
                              // +"or</br>"
                              +"<button class='btn btn-outline-secondary st-rc'>"
                              +" Let me recommend."
                              +"</button>"
                              +"</div>"
                              +"</span>"                    
                              +"</div>"
                              +"</li>"
                              );
                              scrollTobottom();
                              },1000);
                              
                         }
                          
             });
                             $("#scontent").on("click","#needt-yes",function(){
                             
                              $("#scontent").append(
                               "<li class='suser'>"
                             +"<img src='../icons/user.jpg' class='profile'>"
                             +"<span class='suser-content'>"
                             + "yes"
                             +"</span>"
                             +"</li>"
                               );
                          
                              loading();
                              scrollTobottom();
                              $(".timo-function").hide();
                              $(".robot-status").removeClass("srobot-waiting");
                              $(".robot-status").addClass("srobot");
                              setTimeout(function(){
                              $(".loading").hide();
                              $("#scontent").append(
                              "<li class='srobot-waiting robot-status'>"
                              +"<img src='../icons/Timo.jpg' class='profile'>"
                              +"<div>"
                              +"<span class='srobot-content'>"
                              +"In order to suggest relevant design techniques, I'll ask you several questions. Please answer the questions based on your design situations." 
                              +"<div class='timo-function'>"
                              // +"<button class='btn btn-outline-secondary st-kw'>"
                              // +" Search with key words."
                              // +"</button></br>"
                              // +"or</br>"
                              +"<button class='btn btn-outline-secondary st-rc'>"
                              +" Let me recommend."
                              +"</button>"
                              +"</div>"
                              +"</span>"                    
                              +"</div>"
                              +"</li>"
                              );
                              scrollTobottom();
                              },1000);
                              

             });


             $("#scontent").on("click", "#needt-no",function(){

                           $("#scontent").append(
                              "<li class='suser'>"
                             +"<img src='../icons/user.jpg' class='profile'>"
                             +"<span class='suser-content'>"
                             + "no"
                             +"</span>"
                             +"</li>"
                             );
                              loading();
                              scrollTobottom();
                              $(".timo-function").hide();
                              $(".robot-status").removeClass("srobot-waiting");
                              $(".robot-status").addClass("srobot");
                              setTimeout(function(){
                              $(".loading").hide();
                              $("#scontent").append(
                              "<li class='srobot-waiting robot-status'>"
                              +"<img src='../icons/Timo.jpg' class='profile'>"
                              +"<div>"
                              +"<span class='srobot-content'>"
                              +"Ok. I’m always here. If you have any questions on service design techniques, you can ask me. Here are what I can do for you. " 
                              +"<div class='timo-function'>"
                              +"<button class='btn btn-outline-secondary st-kw'>"
                              +" Search with key words."
                              +"</button></br>"
                              +"<button class='btn btn-outline-secondary st-rc'>"
                              +" Let me recommend."
                              +"</button></br>"
                              +"<button class='btn btn-outline-secondary st-ct'>"
                              +" Contact me"
                              +"</button>"
                              +"</div>"
                              +"</span>"                    
                              +"</div>"
                              +"</li>"
                              );
                              scrollTobottom();
                              },1000);

             });



             // search with key word

             $("#scontent").on("click", ".st-kw", function(){
                              $("#scontent").append(
                              "<li class='suser'>"
                             +"<img src='../icons/user.jpg' class='profile'>"
                             +"<span class='suser-content'>"
                             + "Search with keyword."
                             +"</span>"
                             +"</li>"
                               );
                              loading();
                              scrollTobottom();
                              $(".timo-function").hide();
                              $(".robot-status").removeClass("srobot-waiting");
                              $(".robot-status").addClass("srobot");
                              setTimeout(function(){
                              $(".loading").hide();
                              $("#scontent").append(
                              "<li class='srobot-waiting robot-status'>"
                              +"<img src='../icons/Timo.jpg' class='profile'>"
                              +"<div>"
                              +"<span class='srobot-content'>"
                              +"Please give a keyword of a design techniques."
                              +"<div class='suserinput'>"
                              +"<input type='text keyword' id='keyword' name='keyword' placeholder='Keyword'>"
                              +"<a class='btn btn-secondary keyword-ok s-ok'>OK</a>"
                              +"</div>"     
                              +"</span>"                    
                              +"</div>"
                              +"</li>"
                              );
                              scrollTobottom();
                              },1000);


             });

             $("#scontent").on("keyup","#keyword",function(event){

                 if(event.keyCode=="13"){


                      $(".keyword-ok").click();

                 }

             });

             $("#scontent").on("click", ".keyword-ok", function(){

                          var value=$("[name='keyword']").val().toLowerCase();
                          var keyword=$("[name='keyword']").val();
                          $("#scontent").append(
                              "<li class='suser'>"
                              +"<img src='../icons/user.jpg' class='profile'>"
                              +"<span class='suser-content'>"
                              + keyword
                              +"</span>"
                              +"</li>"
                                );
                              loading();
                              scrollTobottom();
                              $(".robot-status").removeClass("srobot-waiting");
                              $(".robot-status").addClass("srobot");
                              $(".suserinput").remove();
                              $.ajax({
                                url: "/timo/tnsearch",
                                type: "get",
                                dataType:"json",
                                data: {
                      
                                value: value
                     
                                },
                          success: function(tn){
                              console.log(tn);
                             

                            if(value.length>0 && tn.tns.length>0){
                                 
                               setTimeout(function(){
                               $(".loading").hide();
                               $("#scontent").append(
                                  "<li class='srobot'>"
                                     +"<img src='../icons/Timo.jpg' class='profile'>"
                                     +"<div>"
                                     +"<span class='srobot-content'>"
                                     +"Results are on the right."
                                     +"</span>"
                                     +"</div>"
                                     +"</li>"
                                     
                                );
                                      scrollTobottom();
                              

                                  randArr=numArr(tn.tns.length);
                                 // console.log(randArr);
                                 function insertCard(){

                                 $("#t").empty();
                                  for(i=0; i<randArr.length; i++){
                                    index=randArr[i];
                                     $("#t").append(
                                    "<a href='' id='"+tn.tns[index].tn_id+"' class='btn btn-secondary tn'  data-toggle='modal' data-target='.bd-example-modal-lg'>"
                                    +tn.tns[index].tn_name
                                    +"</a>");

                                    }
                             
                                 }             
                                insertCard();

                              // for (i=0; i<tn.tns.length; i++){
                           
                                  // $("#scontent").append(
                                  //   "<li class='srobot'>"
                                  //    +"<img src='../icons/Timo.jpg' class='profile'>"
                                  //    +"<div>"
                                  //    +"<span class='srobot-content'>"
                                  //    +"<div class='stn-card card' id="+tn.tns[i].tn_id+">"
                                  //    +"<a target='_blank' href='/techniques/details?tn_id="+tn.tns[i].tn_id+"'>"
                                  //    +"<img class='card-img-top' src='../images/"+tn.tns[i].tn_img+"' alt='Card image cap'>"
                                  //    +"</a>"
                                  //    +"</div>"
                                  //    +"</span>"
                                  //    +"</div>"
                                  //    +"</li>"
                                  //      );
                                  //     scrollTobottom();
                                     
                                  // }
                                 },1000);

                            
                             
                            }else{
                             setTimeout(function(){
                              $(".loading").hide();
                              
                              $("#scontent").append(
                              "<li class='srobot-waiting robot-status'>"
                              +"<img src='../icons/Timo.jpg' class='profile'>"
                              +"<div>"
                              +"<span class='srobot-content'>"
                              +"I don't find related technqiues, please type a keyword again"
                              +"<div class='suserinput'>"
                              +"<input type='text keyword' id='keyword' name='keyword' placeholder='Keyword'>"
                              +"<a class='btn btn-secondary keyword-ok s-ok'>OK</a>"
                              +"</div>"   
                              +"</div>"     
                              +"</span>"                    
                              +"</div>"
                              +"</li>"
                              );
                              scrollTobottom();
                              },1000);


                            } 
                          // success function
                          }
                      // ajax
                      });

                    });





              // recommend 

             $("#scontent").on("click",".st-rc", function(){
                    
                     $("#scontent").append(
                              "<li class='suser'>"
                             +"<img src='../icons/user.jpg' class='profile'>"
                             +"<span class='suser-content'>"
                             + "I want let you recommend."
                             +"</span>"
                             +"</li>"
                               );

                     
                     loading();
                     scrollTobottom();
                     $(".timo-function").hide();
                     $(".robot-status").removeClass("srobot-waiting");
                     $(".robot-status").addClass("srobot");
                     setTimeout(function(){
                             $(".loading").hide();
                             
                             $("#scontent").append( 
                                "<li class='srobot-waiting robot-status'>"
                               +"<img src='../icons/Timo.jpg' class='profile'>"
                               +"<span class='robot-content'>Could you let me know which one of the following phase can describe your project stage most appropriately? "
                               +"<div class='suserinput'>"
                               +"<div class='form-check'>"
                               +"<label class='form-check-label'>"
                               +"<input class='form-check-input' type='radio' name='dp' value='Planning'>"
                               +"I just started my project."
                               +"</label>"
                               +"</div>"
                               +"<div class='form-check'>"
                               +"<label class='form-check-label'>"
                               +"<input class='form-check-input' type='radio' name='dp' value='Low-Fidelity Prototyping'>"
                               +"I’m sketching some prototype ideas."    
                               +"</label>"
                               +"</div>"
                               +"<div class='form-check'>"
                               +"<label class='form-check-label'>"
                               +"<input class='form-check-input' type='radio' name='dp' value='High-Fidelity Prototyping'>"
                               +"I’m working on detailed design."
                               +"</label>"
                               +"</div>"
                               +"<div class='form-check'>"
                              
                               +"<label class='form-check-label'>"
                                +"<input class='form-check-input' type='radio' name='dp' value='Release'>"
                               +"I’m going to release the project."
                               +"</label>"
                               +"</div>"
                               +"<div class='form-check'>"
                               +"<label class='form-check-label'>"
                               +"<input class='form-check-input' type='radio' name='dp' value='none'>"
                               +"Design stage doesn't matter."
                               +"</label>"
                               +"</div>"
                               +"<a class='btn btn-secondary dp-ok s-ok'>Ok</a>"
                               +"</div>"   
                               +"</span>"
                               +"</li>"
                             );
                              scrollTobottom();

                             // if(!$.cookie('user_login')){
                             //       $("#scontent").append(
                             //      "<li class='srobot'>"
                             //      +"<img src='../icons/Timo.jpg' class='profile'>"
                             //      +"<span class='robot-content'>"
                             //      +"Warm Prompt:If you want to save the recommended design techniques for your project, please log in firstly."
                             //      +"</span>"
                             //      +"</li>"
                             //    );
                             // }
                            
                             // $("#scontent").append( 
                             //    "<li class='srobot-waiting robot-status'>"
                             //   +"<img src='../icons/Timo.jpg' class='profile'>"
                             //   +"<span class='robot-content'>Ok. In the following, I’ll ask you some multiple choice questions to guide you to find your techniques for your project.</br>"
                             //   +"Do you have a name for your project? "
                             //   +"<div class='timo-function'>"
                             //   +"<button class='btn btn-outline-secondary' id='project-name-yes'>"
                             //   +"Yes"
                             //   +"</button>"
                             //   +"/"
                             //   +"<button class='btn btn-outline-secondary' id='project-name-no'>"
                             //   +"No"
                             //   +"</button>"
                             //   +"</div>"          
                             //   +"</span>"
                             //   +"</li>"
                             //  );
                             //  scrollTobottom();

                     },1000);

                    
        
              });
              
                // ask project name
                // $("#scontent").on("click","#project-name-yes", function(){
                //             $("#scontent").append(
                //               "<li class='suser'>"
                //              +"<img src='../icons/user.jpg' class='profile'>"
                //              +"<span class='suser-content'>"
                //              + "yes"
                //              +"</span>"
                //              +"</li>"
                //                );
                      
                //            loading();
                //            scrollTobottom();
                //            $(".timo-function").hide();
                //            $(".robot-status").removeClass("srobot-waiting");
                //            $(".robot-status").addClass("srobot");

                //           setTimeout(function(){
                //              $(".loading").hide();        
                //              $("#scontent").append( 
                //                 "<li class='srobot-waiting robot-status'>"
                //                +"<img src='../icons/Timo.jpg' class='profile'>"
                //                +"<span class='robot-content'>Please type the name of your project."
                //                +"<div class='suserinput'>"
                //                +"<input type='text' id='project-name' placeholder='Name of the Project'>"
                //                +"<a class='btn btn-secondary s-ok' id='project-name-ok'>OK</a>"
                //                +"</div>"     
                //                +"</span>"
                //                +"</li>"
                //              );

                //              scrollTobottom();
                //           },1000);

     

                // });
                
                // no project name  ask design phase
                //  $("#scontent").on("click","#project-name-no", function(){
                //               $("#scontent").append(
                //              "<li class='suser'>"
                //              +"<img src='../icons/user.jpg' class='profile'>"
                //              +"<span class='suser-content'>"
                //              + "no"
                //              +"</span>"
                //              +"</li>"
                //                );
                      
                //            loading();
                //            scrollTobottom();
                //            $("#project-name").remove();
                //            $(".timo-function").hide();
                //            $(".robot-status").removeClass("srobot-waiting");
                //            $(".robot-status").addClass("srobot");
                //            setTimeout(function(){
                //              $(".loading").hide();
                //              $("#scontent").append( 
                //                 "<li class='srobot-waiting robot-status'>"
                //                +"<img src='../icons/Timo.jpg' class='profile'>"
                //                +"<span class='robot-content'>Could you please let me know which one of the following phase can describe your project stage most appropriately? "
                //                +"<div class='suserinput'>"
                //                +"<div class='form-check'>"
                //                +"<input class='form-check-input' type='radio' name='dp' id='11' value='Planning'>"
                //                +"<label class='form-check-label' for='exampleRadios1'>"
                //                +"I just started my project."
                //                +"</label>"
                //                +"</div>"
                //                +"<div class='form-check'>"
                //                +"<input class='form-check-input' type='radio' name='dp' id='12' value='Low-Fidelity Prototyping'>"
                //                +"<label class='form-check-label' for='exampleRadios2'>"
                //                +"I’m sketching some prototype ideas."    
                //                +"</label>"
                //                +"</div>"
                //                +"<div class='form-check'>"
                //                +"<input class='form-check-input' type='radio' name='dp' id='13' value='High-Fidelity Prototyping'>"
                //                +"<label class='form-check-label' for='exampleRadios3'>"
                //                +"I’m working on detailed design."
                //                +"</label>"
                //                +"</div>"
                //                +"<div class='form-check'>"
                //                +"<input class='form-check-input' type='radio' name='dp' id='14' value='Release'>"
                //                +"<label class='form-check-label' for='exampleRadios3'>"
                //                +"I’m going to release the project."
                //                +"</label>"
                //                +"</div>"
                //                +"<a class='btn btn-secondary dp-ok s-ok'>Ok</a>"
                //                +"</div>" 
                //                +"</span>"
                //                +"</li>"
                //               );
                //                scrollTobottom();
 
                //           },1000);

     

                // });
          // with project name ask design phase
                 
                //  $("#scontent").on("keyup","#project-name",function(event){

                //  if(event.keyCode=="13"){


                //       $("#project-name-ok").click();

                //     }

                //  });

                 
                // $("#scontent").on("click","#project-name-ok", function(){
                      
                //            project_name=$("#project-name").val();
                //            $("#project-name").remove();
                //            $(".suserinput").hide();
                //            $(".robot-status").removeClass("srobot-waiting");
                //            $(".robot-status").addClass("srobot");
                //            console.log(project_name);
                //             $("#scontent").append(
                //             "<li class='suser'>"
                //             +"<img src='../icons/user.jpg' class='profile'>"
                //             +"<span class='suser-content'>"
                //             + project_name
                //             +"</span>"
                //             +"</li>"
                //              );
                //             loading();
                //              scrollTobottom();
                //            setTimeout(function(){
                //              $(".loading").hide();
                //              $("#scontent").append( 
                //                 "<li class='srobot-waiting robot-status'>"
                //                +"<img src='../icons/Timo.jpg' class='profile'>"
                //                +"<span class='robot-content'>Could you let me know which one of the following phase can describe your project stage most appropriately? "
                //                +"<div class='suserinput'>"
                //                +"<div class='form-check'>"
                //                +"<input class='form-check-input' type='radio' name='dp' id='11' value='Planning'>"
                //                +"<label class='form-check-label' for='exampleRadios1'>"
                //                +"I just started my project."
                //                +"</label>"
                //                +"</div>"
                //                +"<div class='form-check'>"
                //                +"<input class='form-check-input' type='radio' name='dp' id='12' value='Low-Fidelity Prototyping'>"
                //                +"<label class='form-check-label' for='exampleRadios2'>"
                //                +"I’m sketching some prototype ideas."    
                //                +"</label>"
                //                +"</div>"
                //                +"<div class='form-check'>"
                //                +"<input class='form-check-input' type='radio' name='dp' id='13' value='High-Fidelity Prototyping'>"
                //                +"<label class='form-check-label' for='exampleRadios3'>"
                //                +"I’m working on detailed design."
                //                +"</label>"
                //                +"</div>"
                //                +"<div class='form-check'>"
                //                +"<input class='form-check-input' type='radio' name='dp' id='14' value='Release'>"
                //                +"<label class='form-check-label' for='exampleRadios3'>"
                //                +"I’m going to release the project."
                //                +"</label>"
                //                +"</div>"
                //                +"<a class='btn btn-secondary dp-ok s-ok'>Ok</a>"
                //                +"</div>"   
                //                +"</span>"
                //                +"</li>"
                //              );
                //               scrollTobottom();
 
                //           },1000);

     

                // });
             

             // ask time dependency
             $("#scontent").on("click",".dp-ok",function(){
                    tn_dp= $('input:radio[name="dp"]:checked').val();
                           console.log(tn_dp);
                           if(!tn_dp){
                             alert("Please choose one option!")
                             
                           }else{

                            switch(tn_dp){
                               case "Planning":
                                   rsay_dp="Which one of the following data collection way you want to use in this design stage?"
                                   usay_dp="I just started my project.";
                                   break;
                               case "Low-Fidelity Prototyping":
                                   rsay_dp="Which one of the following data collection way you want to use in this design stage?"
                                   usay_dp="I’m sketching some prototype ideas.";
                                   break;
                               case "High-Fidelity Prototyping":
                                   rsay_dp="Which one of the following data collection way you want to use in this design stage?"
                                   usay_dp="I’m working on detailed design."
                                   break;
                               case "Release":
                                   rsay_dp="Which one of the following data collection way you want to use in this design stage?"
                                   usay_dp="I’m going to release the project.";
                                   break;
                               case "none":
                                   tn_dp="";
                                   rsay_dp="Which one of the following data collection way you want to use in this design stage?"
                                   usay_dp="Design stage doesn't matter."
                                   break;
                             }
                             
                             $(".suserinput").hide();
                             $(".robot-status").removeClass("srobot-waiting");
                             $(".robot-status").addClass("srobot");
                       
                             $("#scontent").append(
                              "<li class='suser'>"
                               +"<img src='../icons/user.jpg' class='profile'>"
                               +"<span class='suser-content'>"
                               + usay_dp
                               +"</span>"
                               +"</li>"
                             );
                             
                             loading();

                             scrollTobottom();

                          setTimeout(function(){
                          $(".loading").hide();
                          $("#scontent").append(
                            "<li class='srobot-waiting robot-status'>"
                            +"<img src='../icons/Timo.jpg' class='profile'>"
                            +"<div>"
                            +"<span class='srobot-content'>"
                            + rsay_dp
                            +"<div class='suserinput'>"
                            +"<div class='form-check'>" 
                            +"<label class='form-check-label'>"
                            +"<input class='form-check-input' type='radio' name='td' value='Real-Time'>"
                            +"Data collection based on people's immediate real-time feedback."
                            +"</label>"
                            +"</div>"
                            +"<div class='form-check'>"
                            +"<label class='form-check-label'>"
                            +"<input class='form-check-input' type='radio' name='td' value='Retrospective'>"
                            +"Data collection based on people's memory of previous experience."    
                            +"</label>"
                            +"</div>"
                            +"<div class='form-check'>"
                            +"<label class='form-check-label'>"
                            +"<input class='form-check-input' type='radio' name='td' value='none'>"
                            +"Both of them are ok for me."
                            +"</label>"
                            +"</div>"
                            +"<a class='btn btn-secondary td-ok s-ok' id='td-ok'>Ok</a>"
                            +"</span>"                    
                            +"</div>"
                            +"</li>"
                            );
                          scrollTobottom();
                      },1000); 


                   }



             });
             
             


             // ask duration
             $("#scontent").on("click",".td-ok",function(){
                           tn_td= $('input:radio[name="td"]:checked').val();
                           console.log(tn_td);
                           if(!tn_td){
                             alert("Please choose one option!")
                             
                           }else{

                             switch(tn_td){
                               case "Real-Time":
                                   rsay_td="How much time you want to spend on this design stage?"
                                   usay_td="Data collection based on people's immediate real-time feedback.";
                                   break;
                               case "Retrospective":
                                   rsay_td="How much time you want to spend on this design stage?"
                                   usay_td="Data collection based on people's memory of previous experience.";
                                   break;
                               case "none":
                                   tn_td="";
                                   rsay_td="How much time you want to spend on this design stage?"
                                   usay_td="Data collection based on people's immediate real-time and people's memory of previous experience are okay for me.";
                             }
                             
                             $(".suserinput").hide();
                             $(".robot-status").removeClass("srobot-waiting");
                             $(".robot-status").addClass("srobot");
                       
                             $("#scontent").append(
                              "<li class='suser'>"
                               +"<img src='../icons/user.jpg' class='profile'>"
                               +"<span class='suser-content'>"
                               + usay_td
                               +"</span>"
                               +"</li>"
                             );
                             
                             loading();

                             scrollTobottom();

                          setTimeout(function(){
                          $(".loading").hide();
                          $("#scontent").append(
                            "<li class='srobot-waiting robot-status'>"
                            +"<img src='../icons/Timo.jpg' class='profile'>"
                            +"<div>"
                            +"<span class='srobot-content'>"
                            + rsay_td
                            +"<div class='suserinput'>"
                            +"<div class='form-check'>"
                            +"<label class='form-check-label'>"
                            +"<input class='form-check-input' type='radio' name='d' value='Short-Term Study'>"
                            +"A few days "
                            +"</label>"
                            +"</div>"
                            +"<div class='form-check'>"
                            +"<label class='form-check-label'>"
                            +"<input class='form-check-input' type='radio' name='d' value='Long-Term Study'>"
                            +"More than a week "    
                            +"</label>"
                            +"</div>"
                            +"<div class='form-check'>"    
                            +"<label class='form-check-label'>"
                            +"<input class='form-check-input' type='radio' name='d' value='none'>"
                            +"Time does not matter that much"
                            +"</label>"
                            +"</div>"
                            +"<a class='btn btn-secondary s-ok' id='d-ok'>Ok</a>"
                            +"</span>"                    
                            +"</div>"
                            +"</li>"
                            );
                          scrollTobottom();
                      },1000);             
  

                 }
              });

  

             // ask user participation
              $("#scontent").on("click","#d-ok",function(){
                       tn_d=$('input:radio[name="d"]:checked').val();
                       console.log(tn_d);
                            if(!tn_d){
                             alert("Please choose one option!")
                             
                           }else{

                            switch(tn_d){
                               case "Short-Term Study":
                                   rsay_d="Do you have access to real users? If yes, do you want them to participate in the design activities?";
                                   usay_d="I will spend a few days.";
                                   break;
                               case "Long-Term Study":
                                   rsay_d="Do you have access to real users? If yes, do you want them to participate in the design activities?"
                                   usay_d="I will spend more than a week.";
                                   break;
                               case "none":
                                   rsay_d="Do you have access to real users? If yes, do you want them to participate in the design activities?"
                                   usay_d="Time doesn't matter.";
                                   tn_d="";
                                   break;
                             }
                             
                             $(".suserinput").hide();
                             $(".robot-status").removeClass("srobot-waiting");
                             $(".robot-status").addClass("srobot");
                       
                             $("#scontent").append(
                              "<li class='suser'>"
                               +"<img src='../icons/user.jpg' class='profile'>"
                               +"<span class='suser-content'>"
                               + usay_d
                               +"</span>"
                               +"</li>"
                             );
                             

                             loading();
                             scrollTobottom();
                              setTimeout(function(){
                             $(".loading").hide();
                             $("#scontent").append(
                               "<li class='srobot-waiting robot-status'>"
                               +"<img src='../icons/Timo.jpg' class='profile'>"
                               +"<div>"
                               +"<span class='srobot-content'>"
                               + rsay_d
                               +"<div class='suserinput'>"
                               +"<div class='form-check'>"
                               +"<label class='form-check-label'>"
                               +"<input class='form-check-input' type='radio' name='up' value='User Attendance'>"
                               +"Yes, potential users will participate in design process."
                               +"</label>"
                               +"</div>"
                               +"<div class='form-check'>"
                               +"<label class='form-check-label'>"
                               +"<input class='form-check-input' type='radio' name='up' value='User Absence'>"
                               +"No, users will not participate in design process."    
                               +"</label>"
                               +"</div>"
                               +"<div class='form-check'>"
                               +"<label class='form-check-label'>"
                               +"<input class='form-check-input' type='radio' name='up' value='none'>"
                               +"It doesn't matter."    
                               +"</label>"
                               +"</div>"
                               +"<a class='btn btn-secondary s-ok' id='up-ok'>Ok</a>"                   
                               +"</div>"
                               +"</span>"                    
                               +"</div>"
                               +"</li>"
                              );
                            scrollTobottom();
                         },1000);            

                       }

              });

              // ask evaluation type
              $("#scontent").on("click","#up-ok",function(){
                       tn_up=$('input:radio[name="up"]:checked').val();
                       console.log(tn_up);
                            if(!tn_up){
                             alert("Please choose one option!")
                             
                           }else{

                            switch(tn_up){
                               case "User Attendance":
                                   rsay_up="What kind of evaluation you want to use?";
                                   usay_up="Potential users will participate in design process.";
                                   break;
                               case "User Absence":
                                   rsay_up="What kind of evaluation you want to use?"
                                   usay_up="Users will not participate in design process.";
                                   break;
                               case "none":
                                   tn_up="";
                                   rsay_up="What kind of evaluation you want to use?"
                                   usay_up="User doesn't matter";
                                   tn_up="";
                                   break;
                             }
                             
                             $(".suserinput").hide();
                             $(".robot-status").removeClass("srobot-waiting");
                             $(".robot-status").addClass("srobot");
                       
                             $("#scontent").append(
                              "<li class='suser'>"
                               +"<img src='../icons/user.jpg' class='profile'>"
                               +"<span class='suser-content'>"
                               + usay_up
                               +"</span>"
                               +"</li>"
                             );
                             

                             loading();
                             scrollTobottom();
                              setTimeout(function(){
                             $(".loading").hide();
                             $("#scontent").append(
                               "<li class='srobot-waiting robot-status'>"
                               +"<img src='../icons/Timo.jpg' class='profile'>"
                               +"<div>"
                               +"<span class='srobot-content'>"
                               + rsay_up
                               +"<div class='suserinput'>"
                               +"<div class='form-check'>"      
                               +"<label class='form-check-label'>"
                               +"<input class='form-check-input' type='radio' name='et' value='Questionnaire'>"
                               +"Questionnaire"
                               +"</label>"
                               +"</div>"
                               +"<div class='form-check'>"
                               +"<label class='form-check-label'>"
                               +"<input class='form-check-input' type='radio' name='et' value='Interview'>"
                               +"Interview"    
                               +"</label>"
                               +"</div>"
                               +"<div class='form-check'>" 
                               +"<label class='form-check-label'>"
                               +"<input class='form-check-input' type='radio' name='et' value='Experiment'>"
                               +"Experiment"    
                               +"</label>"
                               +"</div>"
                               +"<div class='form-check'>"
                               +"<label class='form-check-label'>"
                               +"<input class='form-check-input' type='radio' name='et' value='Observation'>"
                               +"Observation"    
                               +"</label>"
                               +"</div>"
                               +"<div class='form-check'>" 
                               +"<label class='form-check-label'>"
                               +"<input class='form-check-input' type='radio' name='et' value='Group Discussion'>"
                               +"Group Discussion"    
                               +"</label>"
                               +"</div>"
                               +"<div class='form-check'>"
                               +"<label class='form-check-label'>"
                               +"<input class='form-check-input' type='radio' name='et' value='none'>"
                               +"It doesn't matter."    
                               +"</label>"
                               +"</div>"
                               +"<a class='btn btn-secondary s-ok' id='et-ok'>Ok</a>"                   
                               +"</div>"
                               +"</span>"                    
                               +"</div>"
                               +"</li>"
                              );
                            scrollTobottom();
                         },1000);            

                       }

              });

              
              // present result
              $("#scontent").on("click","#et-ok",function(){

                       tn_et=$('input:radio[name="et"]:checked').val();
                       console.log(tn_et);
                         if(!tn_et){
                                alert("Please choose one option!")
                             
                           }else{

                            switch(tn_et){
                               case "Questionnaire":
                                   rsay_et="I will select design techniques accordding to these characteristics.";
                                   usay_et="I want to use questionnaire.";
                                   break;
                               case "Interview":
                                   rsay_et="I will select design techniques accordding to these characteristics."
                                   usay_et="I want to use interview.";
                                   break;
                               case "Experiment":
                                   rsay_et="I will select design techniques accordding to these characteristics."
                                   usay_et="I want to use observation.";
                                   break;
                               case "Observation":
                                   rsay_et="I will select design techniques accordding to these characteristics."
                                   usay_et="I want to use experiment.";
                                   break;
                               case "Group Discussion":
                                   rsay_et="I will select design techniques accordding to these characteristics."
                                   usay_et="I want to use group Discussion.";
                                   break;
                               case "none":
                                   tn_et="";
                                   rsay_et="I will select design techniques accordding to these characteristics."
                                   usay_et="Evaluation doesn't matter.";
                                   break;
                              }
                             
                             $(".suserinput").hide();
                             $(".robot-status").removeClass("srobot-waiting");
                             $(".robot-status").addClass("srobot");

                             $("#scontent").append(
                              "<li class='suser'>"
                               +"<img src='../icons/user.jpg' class='profile'>"
                               +"<span class='suser-content'>"
                               + usay_et
                               +"</span>"
                               +"</li>"
                             );
                             
                             loading();
                             scrollTobottom();
                          setTimeout(function(){
                             $(".loading").hide();
                             $("#scontent").append(
                               "<li class='srobot robot-status'>"
                               +"<img src='../icons/Timo.jpg' class='profile'>"
                               +"<div>"
                               +"<span class='srobot-content'>"
                               +"Thanks for your answers.</br>"
                               // +"Your project name is:"
                               // +"<p class='user-r'>"+project_name+"</p>"
                               +"The design situations you've chosen are:</br>"
                               +"<p class='user-r'>-"+usay_dp+"<p></br>"
                               +"<p class='user-r'>-"+usay_td+"<p></br>"
                               +"<p class='user-r'>-"+usay_d+"</p></br>"
                               +"<p class='user-r'>-"+usay_up+"</p></br>"
                               +"<p class='user-r'>-"+usay_et+"<p></br>"
                               +"Some possible design techniques are on the right. If you want to restart the recommendation, please type in 'recommend techniques' in the input box."
                               +"</span>"                    
                               +"</div>"
                               +"</li>"
                              );
                              scrollTobottom();

                              console.log(tn_dp,tn_td,tn_d,tn_up,tn_et);
                      
                             $.ajax({

                                url: "/taxonomy/search",
                                type: "get",
                                dataType:"json",
                                data: {
                                   tn_dp:tn_dp,
                                   tn_td:tn_td,
                                   tn_d:tn_d,
                                   tn_up:tn_up,
                                   tn_et:tn_et
                                 },
                                 

                              success:function(tn){

                                console.log(tn);
                              

                                if(tn.tns.length >= 1){
                                   $("#t").empty();
                                   randArr=numArr(tn.tns.length);
                                   for(i=0; i<randArr.length; i++){
                                    index=randArr[i];           
                                     $("#t").append(
                                    "<a href='' id='"+tn.tns[index].tn_id+"' class='btn btn-secondary tn'  data-toggle='modal' data-target='.bd-example-modal-lg'>"
                                    +tn.tns[index].tn_name
                                    +"</a>");

                                  }  

                              }else{
                                   $("#t").empty();
                                   $("#t").append(
                                    "Correspoonding techniques are not found. Please try some other design situations."
                                    );

                              } 

                               var tn_dp="";
                               var tn_td="";
                               var tn_d="";
                               var tn_up="";
                               var tn_et="";
                               var project_name="";
                               var project_tn="";
                               if_help="";
                               feedback="";
                               user_say1="";

                           }
                        });  

                      },1000);                

                     // else
                      }

                    // et-ok click function
                  });
                    




                    // $("#scontent").on("click",".history-yes",function(){

                    //     if($.cookie('user_login')){

                    //           loading();
                    //           $(".timo-function").hide();
                    //           $(".robot-status").removeClass("srobot-waiting");
                    //           $(".robot-status").addClass("srobot");
                    //           setTimeout(function(){
                                 
                    //               $.ajax({
                    //                  url: "/robot/storehistory",
                    //                  type: "get",
                    //                  dataType:"json",
                    //                  data: {
                    //                          tn_dp:tn_dp,
                    //                          tn_d:tn_d,
                    //                          tn_up:tn_up,
                    //                          project_name:project_name,
                             

                    //                       },
                    //                    success:function(result){
                    //                        console.log(result);

                    //                        switch (result.res_code){
                    //                          case 1:
                    //                            $(".loading").hide();
                                              
                    //                            $("#scontent").append(
                    //                              "<li class='srobot robot-status'>"
                    //                            +"<img src='../icons/Timo.jpg' class='profile'>"
                    //                            +"<div>"
                    //                            +"<span class='srobot-content'>"
                    //                            + result.res_msg         
                    //                            +"</span>"                    
                    //                            +"</div>"
                    //                            +"</li>"
                    //                          );


                    //                            break;


                    //                        case 2:
                    //                            $(".loading").hide();
                    //                            $("#scontent").append(
                    //                             "<li class='srobot robot-status'>"
                    //                            +"<img src='../icons/Timo.jpg' class='profile'>"
                    //                            +"<div>"
                    //                            +"<span class='srobot-content'>"
                    //                            +result.res_msg     
                    //                            +"</span>"                    
                    //                            +"</div>"
                    //                            +"</li>"
                    //                            );

                    //                             break;
                    //                         }


                    //                          $("#scontent").append(
                    //                        "<li class='srobot-waiting robot-status'>"
                    //                        +"<img src='../icons/Timo.jpg' class='profile'>"
                    //                        +"<div>"
                    //                        +"<span class='srobot-content'>"
                    //                        +"Does the recommended design techniques help you?" 
                    //                        +"<div class='timo-function'>"
                    //                        +"<button class='btn btn-outline-secondary if_help-yes'>"
                    //                        +"Yes"
                    //                        +"</button>"
                    //                        +"/"
                    //                        +"<button class='btn btn-outline-secondary if_help-no'>"
                    //                        +"No"
                    //                        +"</button></br>"
                    //                        +"</div>" 
                    //                        +"</span>"                    
                    //                        +"</div>"
                    //                        +"</li>"
                    //                        );
                    //                        scrollTobottom();


                                           
                    //                   // success
                    //                   }

                    //               });


                    //           },1000);
                              




                             
                    //     }else{
                               
                    //            alert("This function is aviliable only after login.")
                      
                    //       }



                    // });

                    //  $("#scontent").on("click",".history-no",function(){

                    //        $(".timo-function").hide();
                    //        $(".robot-status").removeClass("srobot-waiting");
                    //        $(".robot-status").addClass("srobot");
                    //        loading();
                    //        scrollTobottom();


                    //        setTimeout(function(){
                    //          $(".loading").hide();
                             
                    //          $("#scontent").append(
                    //                "<li class='srobot-waiting robot-status'>"
                    //               +"<img src='../icons/Timo.jpg' class='profile'>"
                    //               +"<div>"
                    //               +"<span class='srobot-content'>"
                    //               +"Does the recommended design techniques help you?" 
                    //               +"<div class='timo-function'>"
                    //               +"<button class='btn btn-outline-secondary if_help-yes'>"
                    //               +"Yes"
                    //               +"</button>"
                    //               +"/"
                    //               +"<button class='btn btn-outline-secondary if_help-no'>"
                    //               +"No"
                    //               +"</button>"
                    //               +"</div>"
                    //               +"</span>"                    
                    //               +"</div>"
                    //               +"</li>"
                    //               );



                    //           scrollTobottom();

                    //        },1000);
                          
                    // });




                    //  $("#scontent").on("click",".if_help-yes",function(){
  

                    //          if_help="yes"
                    //          $(".timo-function").hide();
                    //          $(".robot-status").removeClass("srobot-waiting");
                    //          $(".robot-status").addClass("srobot");
                    //          loading();
                    //          scrollTobottom();
                            
                    //          setTimeout(function(){
                    //          $(".loading").hide();
                             
                    //          $("#scontent").append(
                    //                "<li class='srobot-waiting robot-status'>"
                    //               +"<img src='../icons/Timo.jpg' class='profile'>"
                    //               +"<div>"
                    //               +"<span class='srobot-content'>"
                    //               +"Do you have any suggestions for me?</br>"
                    //               +"<textarea class='feedback'></textarea></br>" 
                    //               +"<button class='btn btn-outline-secondary feedback-ok'>"
                    //               +"OK"
                    //               +"</button>"
                    //               +"</span>"                    
                    //               +"</div>"
                    //               +"</li>"
                    //               );



                    //           scrollTobottom();

                    //        },1000);

                           
                           




                    //  });


                    //   $("#scontent").on("click",".if_help-no",function(){
                             
                    //           if_help="no";
                    //           $(".timo-function").hide();
                    //           $(".robot-status").removeClass("srobot-waiting");
                    //           $(".robot-status").addClass("srobot");
                    //           loading();
                    //           scrollTobottom();

                    //           setTimeout(function(){
                    //           $(".loading").hide();
                             
                    //           $("#scontent").append(
                    //                "<li class='srobot-waiting robot-status'>"
                    //               +"<img src='../icons/Timo.jpg' class='profile'>"
                    //               +"<div>"
                    //               +"<span class='srobot-content'>"
                    //               +"Do you have any suggestions for me?</br>"
                    //               +"<textarea class='feedback'></textarea></br>" 
                    //               +"<button class='btn btn-outline-secondary feedback-ok'>"
                    //               +"OK"
                    //               +"</button>"
                    //               +"</span>"                    
                    //               +"</div>"
                    //               +"</li>"
                    //               );



                    //           scrollTobottom();

                    //        },1000);





                    //  });
  







                    //  $("#scontent").on("click",".feedback-ok",function(){

                    //           feedback=$(".feedback").val();
                    //           $.ajax({

                    //                url: "/robot/log",
                    //                  type: "get",
                    //                  dataType:"json",
                    //                  data: {
                                             
                    //                          tn_dp:tn_dp,
                    //                          tn_d:tn_d,
                    //                          tn_up:tn_up,
                    //                          project_name:project_name,
                    //                          project_tn:project_tn,
                    //                          user_say1:user_say1,
                    //                          if_help:if_help,
                    //                          feedback:feedback
                             

                    //                       },
                    //                    success:function(result){

                    //                         console.log(result);
                              
                    //                         tn_dp="";
                    //                         tn_d="";
                    //                         tn_up="";
                    //                         project_name="";
                    //                         project_tn="";
                    //                         if_help="";
                    //                         feedback="";
                    //                         user_say1="";



                    //                    }



                    //           });

                    //           $(".feedback").remove();
                    //           $(".feedback-ok").remove();
                    //           $(".robot-status").removeClass("srobot-waiting");
                    //           $(".robot-status").addClass("srobot");



                        
                    //          loading();
                    //          scrollTobottom();
                    //        setTimeout(function(){
                    //          $(".loading").hide();
                    //          $("#scontent").append(
                    //          "<li class='srobot-waiting robot-status'>"
                    //            +"<img src='../icons/Timo.jpg' class='profile'>"
                    //            +"<div>"
                    //            +"<span class='srobot-content'>"
                    //            +"Thank you very much! You can try some other functions or contact me if you have some feedbacks.</br>"
                    //            +"<div class='timo-function'>"
                    //            +"<button class='btn btn-outline-secondary st-kw'>"
                    //            +" Search with key words."
                    //            +"</button></br>"
                    //            +"<button class='btn btn-outline-secondary st-rc'>"
                    //            +" Let me recommend."
                    //            +"</button></br>"
                    //            +"<button class='btn btn-outline-secondary st-ct'>"
                    //            +" Contact me"
                    //            +"</button>"
                    //            +"</div>"      
                    //            +"</span>"                    
                    //            +"</div>"
                    //            +"</li>"
                    //           );

                    //             scrollTobottom();

                    //        },1000);



                    //  });























});