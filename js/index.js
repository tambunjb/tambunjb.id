function submitToAPI(e) {
 e.preventDefault();
 var URL = "https://abc1234.execute-api.us-east-1.amazonaws.com/01/contact";

      var Namere = /[A-Za-z]{1}[A-Za-z]/;
      if (!Namere.test($("#name-input").val())) {
                   alert ("Name can not less than 2 char");
          return;
      }
      var mobilere = /[0-9]{10}/;
      if (!mobilere.test($("#phone-input").val())) {
          alert ("Please enter valid mobile number");
          return;
      }
      if ($("#email-input").val()=="") {
          alert ("Please enter your email id");
          return;
      }

      var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
      if (!reeamil.test($("#email-input").val())) {
          alert ("Please enter valid email address");
          return;
      }

 var name = $("#name-input").val();
 var phone = $("#phone-input").val();
 var email = $("#email-input").val();
 var title = $("#title-input").val();
 var message = $("#message-input").val();
 var data = {
    name : name,
    phone : phone,
    email : email,
    title : title,
    message : message
  };

 $.ajax({
   type: "POST",
   url : "https://i935cm15k2.execute-api.us-east-1.amazonaws.com/v1/contact-me",
   dataType: "json",
   crossDomain: "true",
   contentType: "application/json; charset=utf-8",
   data: JSON.stringify(data),

   
   success: function () {
     // clear form and show a success message
     alert("Successfull");
     document.getElementById("contact-me-form").reset();
 location.reload();
   },
   error: function () {
     // show an error message
     alert("UnSuccessfull");
   }});
}