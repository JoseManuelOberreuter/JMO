
// DISPLAYING DROPDOWN
function dropdown() {
    var dropdownOptions = document.getElementById('dropdown');

    var icon1 = document.getElementById('iconExpanMore1');
    var icon2 = document.getElementById('iconExpanMore2');


  

    dropdownOptions.classList.remove('hide');
    dropdownOptions.classList.add('show');
  
  
    icon1.style.transform = "rotate(180deg)";
    icon2.style.transform = "rotate(180deg)";

}

function media(){
  var media = window.matchMedia("(max-width: 800px)")
  var dropdownOptions = document.getElementById('dropdown');

  if (media.matches) {
    dropdownOptions.classList.add('hide');
  }
  if (media > window.matchMedia){
    dropdownOptions.classList.add('show');
  }
}

// HIDING DROPDOWN
window.onclick = function(event) {
  if (!event.target.matches('.buttonDrop'))  {
    var dropdowns = document.getElementsByClassName('dropdowncontent');
    var media = window.matchMedia("(max-width: 800px)")

    if(media.matches)


    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
          
        var icon1 = document.getElementById('iconExpanMore1');
        var icon2 = document.getElementById('iconExpanMore2');

        icon1.style.transform = "rotate(0deg)";
        icon2.style.transform = "rotate(0deg)";

        openDropdown.classList.remove('show');
        openDropdown.classList.add('hide');      
      }
    }
  }
}