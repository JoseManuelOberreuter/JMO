document.addEventListener("DOMContentLoaded", function() {
    var btn1 = document.getElementById("btn_eje_1");
    btn1.addEventListener("click", function() {
      var textarea = document.getElementById("codigo_ejemplos");
      textarea.value = "<h1>texto ejemplo</h1>";
    });
  });
  