
// BOTON DE CONTACTO

const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('openBtn');


window.addEventListener("click", function(e) {


  if (overlay.contains(e.target)) { 
    console.log('on the div')
    overlay.style.right = '0%'
  } 

  else if (openBtn.contains(e.target)){
    if(overlay.style.right = '-100%'){
      console.log('clickn open');
      overlay.style.right = '0%';
    }
    else {
      console.log('clickn close');
      overlay.style.right = '-100%';
    }
  } 

  else {
    console.log('outside the div')
    overlay.style.right = '-100%'
  }
});


