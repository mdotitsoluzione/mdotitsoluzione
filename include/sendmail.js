$(document).ready(function(){
    //alert("Hello! I am an alert box!");

     $(document).on('click', '#sndEmailData', function(){

                   var comp_id = $("#prod-comp-id").val();
                   var user_name =$("#user-name").val();
                   var user_email =$("#user-email").val();
                   var user_mobile =$("#user-mobile").val();
                   var msg_details =$("#msg-details").val();
                   var user_captcha =$("#captcha").val();
                //    var prod_service =$("#prod-service").val();
                   //var prod_service =$("#prod-service").val();
                   //alert(user_name); //exit;
                   if(comp_id ===''){
                       $("#bfrSndDataRslt").text('Kindly Refresh The Page!');

                       exit();
                   }

                   if(user_name ===''){
                       $("#bfrSndDataRslt").text('Please Check Your Name!');

                       exit();
                   }
                   if(user_email ===''){
                       $("#bfrSndDataRslt").text('Please Check Email!');

                       exit();
                   }

                   if(user_mobile ===''){
                       $("#bfrSndDataRslt").text('Please Check Your Contact No!');

                       exit();
                   }
                   if(user_captcha ===''){
                       $("#bfrSndDataRslt").text('Please Enter Captcha  Code!');

                       exit();
                   }

                //    if(prod_service ===''){
                //        $("#bfrSndDataRslt").text('Kindly Select Anyone product!');

                //        exit();
                //    }
                   if(msg_details ===''){
                       $("#bfrSndDataRslt").text('Kindly Describe Your Requirement With Min. 50 Characters!');

                       exit();
                   }

                   else{
                   $.ajax({
                       type:'post',
                       url:'https://greenitsoluzione.net/include/srch-enq-eml.php',
                       dataType: "json",
                       data:{user_name:user_name,user_email:user_email,user_mobile:user_mobile,msg_details:msg_details,user_captcha:user_captcha,comp_id:comp_id},
                       success:function(data){
                       $("#bfrSndDataRslt").html(data);
                       $('.contForm')[0].reset();
                       exit();


                        //alert(data);
              // console.log(dataResult);
                       console.log(data);
                       },



                           error: function(err) {
                           alert(err);
                           console.log(err);
                           }

                   });
                  }
                                   });
           });