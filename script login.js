$(document).ready(function(){
    $(".container").show();
    $(".scontainer").hide();
});
$(document).ready(function(){
  $(".signup").click(function(){
    $(".container").hide().addClass('signtologin');
    $(".scontainer").show().addClass('logintosign');
  });
});
$(document).ready(function(){
  $(".login").click(function(){
    $(".scontainer").hide().addClass('signtologin');
    $(".container").show().addClass('logintosign');
  });
});

  function myFunction() {
    var x = document.getElementById("pwd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    }
    function myFunction1() {
      var x = document.getElementById("lpwd");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
      }
      function myFunction2() {
        var x = document.getElementById("lcpwd");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
        }