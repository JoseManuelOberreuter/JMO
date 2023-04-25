var elem = document.querySelector('.carousel');

document.querySelector('.carousel').style.height = '200px';

var flkty = new Flickity( elem, {
  // opciones aquí
  cellAlign: 'center',
  contain: true,
  freeScroll: true,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true,
  groupCells: 1,
//   autoPlay: true,
  autoPlay: 3000,
  lazyLoad: 2,
  pauseAutoPlayOnHover: false,
  selectedAttraction: 0.002,
  friction: 0.15
  
    });

var images = document.querySelectorAll('.carousel img');

images.forEach(function(image) {
  image.addEventListener('mouseenter', function() {
    this.classList.remove('grayscale');
  });
  image.addEventListener('mouseleave', function() {
    this.classList.add('grayscale');
  });
});

flkty.on('select', function() {
  images.forEach(function(image) {
    image.classList.add('grayscale');
  });
  var selectedImage = flkty.selectedElement.querySelector('img');
  selectedImage.classList.remove('grayscale');
});
