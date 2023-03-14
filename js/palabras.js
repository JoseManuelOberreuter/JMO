const words = ['Software Developer','Full Stack developer','Desarrollador Web FreeLancer','Estudiante de Ingienería Informatica'];
  let i = 0;
  let j = 0;
  let isDeleting = false;
  
  setInterval(() => {
    const word = words[i];
    let text = document.querySelector('#text').innerHTML;
    
    if (isDeleting) {
      text = text.substring(0, text.length - 1);
      if (text === '') {
        isDeleting = false;
        i = (i + 1) % words.length;
        j = 0;
      }
    } else {
      text = word.substring(0, j + 1);
      j++;
      if (j === word.length) {
        isDeleting = true;
      }
    }
    
    document.querySelector('#text').innerHTML = text;
  }, 150);