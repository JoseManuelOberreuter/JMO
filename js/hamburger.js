var hamburgerBtn = document.getElementById("hamburger-btn");
var hiddenHamburger = document.getElementById("hidden-hamburger");

hamburgerBtn.addEventListener("click", expandHamburger);

function expandHamburger() {
  if(hamburgerBtn.checked === true){
    hiddenHamburger.style.bottom = "0";
    hiddenHamburger.style.opacity = "1";
    hiddenHamburger.style.display = "flex";

  }else{
    hiddenHamburger.style.bottom = "-100%";
    hiddenHamburger.style.opacity = "0";
  }
}