$(document).ready(function(){
    $("button").click(function(){
       var a= $("#language").val();
       if(a!==null && a!=="")
       {
        $('#list').append('<li style="margin-top:0.5cm">'+a+'  '+'<button class="btn btn-danger" style="float:right">Remove</button>'+'</li>');
       }
       else{
        $("p").text("Please Enter Your Name");
       }
      
       $('#list').children().click(
           function()
           {
            $(this).hide(this);
           }
       )
       return false;
    })
    });


   