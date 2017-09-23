$(document).ready(function(){
$('.loader').hide();
    function getinfo(){
      var facebookToken =$("#url").val(); 
      var i;
      var showValue;

      
      console.log(facebookToken);

                      $.ajax('https://graph.facebook.com/me?fields=id,name,hometown,age_range,email,posts,about&&access_token='+facebookToken,{
                    

                               success : function(response){
                               console.log(typeof(response));
                             ///facebook profile details
                               $("#name").text(response.name);
                               $("#email").text(response.email);
                               $("#profileID").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                               $("#hometown").text(response.hometown.name);
                               $("#age").text(response.age_range.min);
                               //facebook posts
                               $.each(response.posts.data,function(i,showValue){
                               // console.log(showValue);
                              console.log(showValue.story);
                              $(".mine").append("<li> Post:"+showValue.story + "</li><br>"+"posted on:"+showValue.created_time+"\n");
                                                            });

                                                                                                                                     
                                                                            
                                                                          
                                

                                                                   
                                        
                                           
                                                             },
                               error : function(request,errorType,errorMessage){
                               console.log(request);
                               console.log(errorType);
                               if (facebookToken== "") {
                                alert("NO URL GIVEN PLEASE TYPE THE URL");
                               }
                               else{
                              console.log(errorMessage);
                               alert("WRONG API GIVEN OR API IS DOWN!!!");
                               }                           

                               
                               },

                               timeout:5000, 

                               beforeSend : function(){
                                move();

                               $('.loader').show();

                               },

                              complete : function(){

                              $('.loader').hide();

                               }


                  }


                        );
                       }

//loader function
   $("#facebook").on('click',getinfo)

    });

    
function move() {
  var elem = document.getElementById("myBar");   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}