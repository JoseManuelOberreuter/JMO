const words = [
  { text: 'Software Developer', color: '#FC2947' },
  { text: 'Full Stack developer', color: '#7149C6' },
  { text: 'Desarrollador Web Freelancer', color: '#00EAD3' },
  { text: 'Estudiante de Ingeniería Informática', color: '#FCE2AE' }
];

let i = 0;
let j = 0;
let isDeleting = false;

setInterval(() => {
  const word = words[i];
  let text = document.querySelector('#text');
  
  if (isDeleting) {
    text.innerHTML = text.innerHTML.slice(0, -1);
    
    if (text.innerHTML === '') {
      isDeleting = false;
      i = (i + 1) % words.length;
      j = 0;
    }
  } else {
    text.innerHTML = word.text.slice(0, j + 1);
    text.style.color = word.color;
    
    j++;
    
    if (j === word.text.length) {
      isDeleting = true;
    }
  }
}, 150);
