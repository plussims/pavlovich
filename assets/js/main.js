var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu__burger');

burgerMenu.addEventListener('click',function(close){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
