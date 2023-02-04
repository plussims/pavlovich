var burgerMenu = document.querySelector('.menu__burger');
var burgerMenuClose = document.querySelector('.menu__burger close');
var overlay = document.querySelector('.menu__mobile .menu');
burgerMenu.addEventListener('click',function(){
    if (overlay.style.display === "none") {
      overlay.style.display = "block";
    }
    burgerMenu.classList.toggle("close");
});
// burgerMenuClose.addEventListener('click',function(){
//     if (overlay.style.display === "block") {
//       overlay.style.display = "none";
//     }
// });
