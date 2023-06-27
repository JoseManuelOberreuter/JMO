// Títulos y enlaces de ejemplo
var articles = [
    {
      title: 'La revolución de la inteligencia artificial',
      link: 'https://josemanueloberreuter.com/html/blog/revolucion_ia.html'
    },
    {
      title: 'Scrum: un marco de trabajo para el desarrollo de software',
      link: 'https://josemanueloberreuter.com/html/blog/scrum.html'
    },
    {
      title: 'El futuro de la creación de imágenes: Una mirada a Midjourney',
      link: 'https://josemanueloberreuter.com/html/blog/midjourney1.html'
    },
    {
      title: 'Introducción a Python y su entorno de desarrollo',
      link: 'https://josemanueloberreuter.com/html/blog/python1.html'
    }
  ];
  
  var searchInput = document.querySelector('.form-control');
  var dropdownMenu = document.getElementById('dropdown-menu');
  
  searchInput.addEventListener('input', function() {
    var searchText = searchInput.value.trim();
    filterTitles(searchText);
  });
  
  function filterTitles(searchText) {
    dropdownMenu.innerHTML = ''; // Limpiar el contenido del dropdown
  
    if (searchText === '') {
      dropdownMenu.style.display = 'none'; // Ocultar el dropdown si no hay texto de búsqueda
      return;
    }
  
    var matchingArticles = articles.filter(function(article) {
      return article.title.toLowerCase().includes(searchText.toLowerCase());
    });
  
    if (matchingArticles.length === 0) {
      dropdownMenu.style.display = 'none'; // Ocultar el dropdown si no hay coincidencias
      return;
    }
  
    // Generar elementos de lista para las coincidencias
    matchingArticles.forEach(function(article) {
      var listItem = document.createElement('li');
      var link = document.createElement('a');
      link.classList.add('dropdown-item', 'd-flex', 'align-items-center', 'gap-2', 'py-2', 'border-bottom', 'border-gray');   
      link.href = article.link;
      link.textContent = article.title;
      listItem.appendChild(link);
      listItem.classList.add('ul_dropdown');
      dropdownMenu.appendChild(listItem);


    });

  
    dropdownMenu.style.display = 'block'; // Mostrar el dropdown
  }
  
  // Evitar el envío del formulario cuando se presiona Enter
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  });
  