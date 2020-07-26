function myFunction() {
  document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

var blink_speed = 500;
var t = setInterval(function () {
  var ele = document.getElementById("judul");
  ele.style.visibility = ele.style.visibility == "hidden" ? "" : "hidden";
}, blink_speed);

var i = 0;
var txt =
  "Merupakan Situs yang dibangun untuk membantu menambah wawasan para wisatawan sebelum berlibur ke pulau lombok.";
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
