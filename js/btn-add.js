const tabsContainer = document.querySelector('.tabs-container');
const tabsList = tabsContainer.querySelector('.tabs-list');
const newTabButton = tabsContainer.querySelector('.new-tab-button');
const tabsContent = tabsContainer.querySelector('.tabs-content');
const iframes = tabsContent.querySelectorAll('iframe');

const tabContainer = document.createElement('div');
tabContainer.classList.add('tab-container');
tabsContainer.insertBefore(tabContainer, tabsContent);

let activeTabIndex = 0;


// Crear la pestaña "Inicio" y mostrarla al cargar la página
const newIframeInicio = document.createElement('iframe');
newIframeInicio.src = '/jmo/html/visualizacion.html';
newIframeInicio.classList.add('active'); // Agrega este estilo para forzar que se muestre
tabsContent.appendChild(newIframeInicio);


const newTabInicio = document.createElement('div');
newTabInicio.classList.add('tab', 'active');
newTabInicio.innerHTML = `
  <p class="tab-title">Inicio</p>
  <span class="tab-close-button">x</span>
`;



tabsList.appendChild(newTabInicio);



// Agregar una nueva pestaña
function addTab() {
    
    // Crear un nuevo iframe y agregarlo al contenido de pestañas
    const newIframe = document.createElement('iframe');
    newIframe.src = '/jmo/html/blog.html';
    tabsContent.appendChild(newIframe);

    // Crear una nueva pestaña y agregarla al encabezado de pestañas
    const newTab = document.createElement('div');
    newTab.classList.add('tab'); // Agregar la clase "tab"
    newTab.innerHTML = `
        <p class="tab-title">${newIframe.src}</p>
        <span class="tab-close-button">x</span>
    `;
    tabsList.appendChild(newTab);

    // Agregar un controlador de eventos para hacer clic en la pestaña
    newTab.addEventListener('click', () => {
        // Cambiar la pestaña activa y mostrar el iframe correspondiente
        const index = Array.from(tabContainer.children).indexOf(newTab); // actualizar el índice de la pestaña
        setActiveTab(index);
    });

    // Agregar un controlador de eventos para hacer clic en el botón de cierre de la pestaña
    newTab.querySelector('.tab-close-button').addEventListener('click', (event) => {
        event.stopPropagation();
        closeTab(newIframe, newTab);
    });
    
    
    newIframeInicio.classList.remove('active'); // Agrega este estilo para forzar que se muestre
    newIframe.classList.add('active');
}


// Cambiar la pestaña activa
function setActiveTab(index) {
    // Ocultar todos los iframes y todas las pestañas
    iframes.forEach(iframe => iframe.classList.remove('active'));
    tabsList.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  
    // Mostrar el iframe y la pestaña activos
    iframes[index].classList.add('active');
    tabsList.children[index].classList.add('active');
  
    // Actualizar el índice de la pestaña activa
    activeTabIndex = index;
}

  
function closeTab(iframe, tab) {
    // No permitir cerrar la última pestaña
    if (tabsList.children.length <= 1) {
      return;
    }
  
    // Determinar el índice de la pestaña y el iframe que se van a cerrar
    const index = Array.from(tabsList.children).indexOf(tab);
    const isActive = iframe.classList.contains('active');
  
    // Eliminar el iframe y la pestaña
    iframe.remove();
    tab.remove();
  
    // Si la pestaña cerrada era la activa, seleccionar la pestaña anterior o siguiente
    if (isActive) {
      setActiveTab(index === 0 ? 0 : index - 1);
    }
  
    // Actualizar los índices de las pestañas restantes
    Array.from(tabsList.children).forEach((tab, index) => {
      tab.querySelector('.tab-title').textContent = iframes[index].src;
    });
}

  
// Agregar un controlador de eventos para el botón "Nueva pestaña"
newTabButton.addEventListener('click', addTab);


// Hacer que la primera pestaña sea activa
setActiveTab(0);


